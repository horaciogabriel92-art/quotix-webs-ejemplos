import re
import uuid
import pandas as pd
from pathlib import Path
from dtf_pricing_data import DTF_RANGES, DTF_GARMENT_COSTS

TENANT_ID = '2297564f-8c39-4dc8-b2f8-515ada08c20a'

def escape_sql(s):
    return s.replace("'", "''")

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def make_uuid(*parts):
    return str(uuid.uuid5(uuid.NAMESPACE_DNS, '-'.join(str(p) for p in parts)))

def normalize(s):
    return s.lower().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('ñ','n')

# Mapeo de nombres del Excel de serigrafia a slugs de productos del catalogo
SERIGRAFIA_NAME_MAP = {
    'REMERA CLASICA': 'remera-cl-sica-peso-completo',
    'REMERA OVERSIZE': 'remera-oversize',
    'REMERA BOXY': 'remera-boxy-fit',  # Ajustar si es BOXY CROP STONEWASH
    'REMERA STONE WASH': 'remera-stonewash-oversize',
    'REMERA DRY FIT': 'remeras-dri-fit-texturadas-y-lisas',  # Ajustar si es CAMISETA DRY FIT MANGA LARGA
    'CANGURO CLASICO': 'canguro-clasic',
    'CANGUROS OVERSIZE': 'canguro-oversize',
    'BUZO A LA BASE': 'buzo-a-la-base',
}

# Mapeo de nombres DTF a slugs
DTF_NAME_MAP = {
    'REMERA CLASICA': 'remera-cl-sica-peso-completo',
    'REMERA OVERSIZE': 'remera-oversize',
    'REMERA BOXY': 'remera-boxy-fit',
    'REMERA STONE WASH': 'remera-stonewash-oversize',
    'REMERA DRY FIT': 'remeras-dri-fit-texturadas-y-lisas',
    'CANGURO CLASICO': 'canguro-clasic',
    'CANGURO OVERSIZE': 'canguro-oversize',
    'BUZO A LA BASE': 'buzo-a-la-base',
}

def parse_units_range(s):
    """'10 A 20' -> (10, 20)"""
    m = re.search(r'(\d+)\s*A\s*(\d+)', s.upper())
    if m:
        return int(m.group(1)), int(m.group(2))
    return 1, None

def load_serigrafia_excel():
    df = pd.read_excel('productos/SERIGRAFIA TABLA DE PRECIOS 2.xlsx', header=None)
    # Encontrar fila de headers
    header_row = None
    for i, row in df.iterrows():
        vals = [str(v).upper().strip() if pd.notna(v) else '' for v in row]
        if 'ARTICULO' in vals and 'UNIDADES' in vals and 'TINTAS' in vals and 'PRECIO' in vals:
            header_row = i
            break
    if header_row is None:
        raise ValueError('No se encontro la fila de headers en el Excel de serigrafia')
    
    # Leer datos desde header_row+2 (hay una fila vacia)
    data = df.iloc[header_row+2:].copy()
    data.columns = ['articulo', 'unidades', 'tintas', 'disenos', 'precio', 'col_f', 'col_g', 'costo', 'estampas', 'ganancia']
    data = data.dropna(subset=['articulo', 'unidades', 'tintas', 'precio'])
    
    rules = []
    for _, row in data.iterrows():
        articulo = str(row['articulo']).strip().upper()
        unidades = str(row['unidades']).strip()
        tintas = int(row['tintas'])
        precio = float(row['precio'])
        min_qty, max_qty = parse_units_range(unidades)
        
        slug = SERIGRAFIA_NAME_MAP.get(articulo)
        if not slug:
            print(f'AVISO: Articulo de serigrafia no mapeado: {articulo}')
            continue
        
        rules.append({
            'slug': slug,
            'articulo': articulo,
            'min_quantity': min_qty,
            'max_quantity': max_qty,
            'tintas': tintas,
            'unit_price': precio,
            'technique': 'screenPrint',
            'price_includes_garment': True,
        })
    return rules

def generate_sql(serigrafia_rules):
    lines = []
    lines.append(f"-- Carga completa de Network Capital: precios Serigrafia + DTF")
    lines.append(f"-- Tenant ID: {TENANT_ID}")
    lines.append("")
    
    # 1. Técnicas
    lines.append("-- 1. Habilitar tecnicas")
    lines.append(f"""
INSERT INTO tenant_techniques (tenant_id, technique_id, enabled, label, description, sort_order)
VALUES
  ('{TENANT_ID}', 'screenPrint', true, 'Serigrafia', 'Estampado tradicional por colores', 1),
  ('{TENANT_ID}', 'dtg', true, 'DTF (Directo a prenda)', 'Transferencia digital de alta calidad', 2)
ON CONFLICT (tenant_id, technique_id) DO UPDATE SET
  enabled = EXCLUDED.enabled,
  label = EXCLUDED.label;
""")
    
    # 2. Defaults
    lines.append("-- 2. Defaults de pricing")
    lines.append(f"""
INSERT INTO tenant_pricing_defaults (tenant_id, stitch_cost_per_thousand, extra_color_charge, margin_percentage, urgency_24h_surcharge, urgency_48h_surcharge, weekend_surcharge)
VALUES ('{TENANT_ID}', 0.15, 150, 0, 50, 25, 30)
ON CONFLICT (tenant_id) DO UPDATE SET
  margin_percentage = EXCLUDED.margin_percentage;
""")
    
    # 3. Limpiar reglas anteriores del tenant
    lines.append("-- 3. Limpiar reglas de precios anteriores del tenant")
    lines.append(f"DELETE FROM pricing_rules WHERE tenant_id = '{TENANT_ID}';\n")
    
    # 4. Actualizar base_price de productos DTF
    lines.append("-- 4. Actualizar costo base de prendas para DTF")
    for articulo, costo in DTF_GARMENT_COSTS.items():
        slug = DTF_NAME_MAP.get(articulo)
        if slug:
            lines.append(f"UPDATE products SET base_price = {costo} WHERE tenant_id = '{TENANT_ID}' AND slug = '{slug}';")
    lines.append("")
    
    # 5. Insertar reglas de serigrafia
    lines.append("-- 5. Reglas de Serigrafia")
    for rule in serigrafia_rules:
        slug = rule['slug']
        product_id = make_uuid(TENANT_ID, slug)
        view_id = make_uuid(TENANT_ID, slug, 'frente')
        rule_id = make_uuid(TENANT_ID, slug, 'screen', rule['min_quantity'], rule['tintas'])
        name = f"{rule['articulo']} - {rule['min_quantity']}-{rule['max_quantity']} uds - {rule['tintas']} tinta(s)"
        lines.append(f"""
INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('{rule_id}', '{TENANT_ID}', '{escape_sql(name)}', '{product_id}', '{view_id}', {rule['unit_price']}, true, {rule['min_quantity']}, 'screenPrint', {rule['tintas']}, true);
""")
    
    # 6. Insertar reglas de DTF
    lines.append("-- 6. Reglas de DTF")
    for articulo, costo in DTF_GARMENT_COSTS.items():
        slug = DTF_NAME_MAP.get(articulo)
        if not slug:
            continue
        product_id = make_uuid(TENANT_ID, slug)
        view_id = make_uuid(TENANT_ID, slug, 'frente')
        for idx, (w_min, w_max, h_min, h_max, price) in enumerate(DTF_RANGES, 1):
            rule_id = make_uuid(TENANT_ID, slug, 'dtf', w_max, h_max)
            name = f"{articulo} - DTF {w_min}-{w_max}cm"
            lines.append(f"""
INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('{rule_id}', '{TENANT_ID}', '{escape_sql(name)}', '{product_id}', '{view_id}', {w_max}, {h_max}, {price}, false, 1, 'dtg', {idx}, true);
""")
    
    return '\n'.join(lines)

def main():
    serigrafia_rules = load_serigrafia_excel()
    print(f'Reglas de serigrafia: {len(serigrafia_rules)}')
    
    sql = generate_sql(serigrafia_rules)
    
    output_path = 'networkcapital_pricing_rules_v2.sql'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(sql)
    
    print(f'SQL generado: {output_path}')
    print(f'Reglas DTF: {len(DTF_GARMENT_COSTS) * len(DTF_RANGES)}')

if __name__ == '__main__':
    main()
