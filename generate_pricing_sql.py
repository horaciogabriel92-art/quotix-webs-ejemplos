import re
import uuid

TENANT_ID = '2297564f-8c39-4dc8-b2f8-515ada08c20a'

def escape_sql(s):
    return s.replace("'", "''")

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def make_uuid(*parts):
    return str(uuid.uuid5(uuid.NAMESPACE_DNS, '-'.join(str(p) for p in parts)))

with open('Catalogo_NetworkCapital.md', 'r', encoding='utf-8') as f:
    md = f.read()

sections = re.split(r'\n##\s+\d+\.\s+', md)[1:]

lines = []
lines.append(f"-- Configuracion de cotizacion para Network Capital")
lines.append(f"-- Tenant ID: {TENANT_ID}")
lines.append(f"-- Generado automaticamente desde Catalogo_NetworkCapital.md")
lines.append("")

lines.append("-- 0. Asegurar constraints necesarias para idempotencia")
lines.append("""
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'products_tenant_slug_key') THEN
    ALTER TABLE products ADD CONSTRAINT products_tenant_slug_key UNIQUE (tenant_id, slug);
  END IF;
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'No se pudo agregar constraint products_tenant_slug_key: %', SQLERRM;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'product_views_pkey') THEN
    ALTER TABLE product_views ADD CONSTRAINT product_views_pkey PRIMARY KEY (id);
  END IF;
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'No se pudo agregar constraint product_views_pkey: %', SQLERRM;
END $$;
""")
lines.append("")

lines.append("-- 1. Defaults de pricing")
lines.append(f"""
INSERT INTO tenant_pricing_defaults (tenant_id, stitch_cost_per_thousand, extra_color_charge, margin_percentage, urgency_24h_surcharge, urgency_48h_surcharge, weekend_surcharge)
VALUES ('{TENANT_ID}', 0.15, 150, 0, 50, 25, 30)
ON CONFLICT (tenant_id) DO UPDATE SET
  margin_percentage = EXCLUDED.margin_percentage,
  urgency_24h_surcharge = EXCLUDED.urgency_24h_surcharge,
  urgency_48h_surcharge = EXCLUDED.urgency_48h_surcharge;
""")

lines.append("-- 2. Habilitar Serigrafia y DTF")
lines.append(f"""
INSERT INTO tenant_techniques (tenant_id, technique_id, enabled, label, description, sort_order)
VALUES
  ('{TENANT_ID}', 'screenPrint', true, 'Serigrafia', 'Estampado tradicional por colores', 1),
  ('{TENANT_ID}', 'dtg', true, 'DTF (Directo a prenda)', 'Transferencia digital de alta calidad', 2)
ON CONFLICT (tenant_id, technique_id) DO UPDATE SET
  enabled = EXCLUDED.enabled,
  label = EXCLUDED.label,
  description = EXCLUDED.description;
""")

lines.append("-- 3. Tiers de cantidad")
lines.append(f"""
DELETE FROM pricing_quantity_tiers WHERE tenant_id = '{TENANT_ID}';
INSERT INTO pricing_quantity_tiers (tenant_id, min_quantity, max_quantity, label, price_modifier_type, price_modifier_value, sort_order)
VALUES
  ('{TENANT_ID}', 1, 9, '1-9 unidades', 'percentage', 0, 0),
  ('{TENANT_ID}', 10, 19, '10-19 unidades', 'percentage', 0, 1),
  ('{TENANT_ID}', 20, 29, '20-29 unidades', 'percentage', 0, 2),
  ('{TENANT_ID}', 30, NULL, '30+ unidades', 'percentage', 0, 3);
""")

lines.append("-- 4. Productos y reglas de cotizacion fijas")
lines.append(f"""
-- Desactivar productos antiguos del tenant (opcional, descomentar si se quiere limpiar)
-- UPDATE products SET is_active = false WHERE tenant_id = '{TENANT_ID}';
""")

def extract_table_after_header(text, header_pos):
    """Extrae filas de tabla markdown inmediatamente después de header_pos."""
    after = text[header_pos:]
    lines_after = after.split('\n')
    rows = []
    table_started = False
    for line in lines_after[1:]:
        stripped = line.strip()
        if not stripped:
            if table_started:
                break
            continue
        if stripped.startswith('|') and stripped.endswith('|'):
            cells = [c.strip() for c in stripped[1:-1].split('|')]
            # Ignorar linea separadora
            if all(c.replace(':', '').strip() == '' or set(c.strip()) <= {':', '-'} for c in cells):
                table_started = True
                continue
            rows.append(cells)
            table_started = True
        else:
            if table_started:
                break
    return rows

product_index = 0
for sec in sections:
    section_lines = sec.strip().split('\n')
    section_title = section_lines[0].strip()
    
    # Determine technique
    technique = 'screenPrint'
    if 'DTF' in section_title or 'Dry Fit' in section_title or 'Dri-Fit' in section_title or 'Dry' in section_title:
        technique = 'dtg'
    
    # Buscar headers de precios
    price_headers = list(re.finditer(r'\*\*Precios\s+([^*\n]+?)\*\*', sec))
    single_price = re.findall(r'\*\*Estampado Incluido:\*\*\s*\$?(\d+).*?\*\*Sin Estampar:\*\*\s*\$?(\d+)', sec, re.DOTALL)
    wholesale = re.search(r'\*\*Venta Mayorista:\*\*\s*(?:Más de|Mas de)?\s*(\d+).*?\$?(\d+)', sec, re.IGNORECASE)
    
    products_to_create = []
    
    if price_headers:
        for header in price_headers:
            header_text = header.group(1).strip()
            # Extraer nombre del producto del header, ej: "Buzo a la Base (por unidad):"
            name_match = re.search(r'^([A-Z][A-Za-z\s]+?)(?:\s*\(|\s*por unidad|:)', header_text)
            if name_match and len(price_headers) > 1:
                product_name = name_match.group(1).strip()
            else:
                product_name = section_title
            
            rows = extract_table_after_header(sec, header.end())
            # Filtrar solo filas con datos numericos
            valid_rows = []
            for cells in rows:
                if len(cells) >= 2:
                    qty_text = cells[0].replace('+', '').strip()
                    price_text = cells[1].replace('$', '').replace(',', '').strip()
                    try:
                        qty_min = int(qty_text)
                        price = int(price_text)
                        valid_rows.append((qty_min, price))
                    except ValueError:
                        pass
            
            if valid_rows:
                products_to_create.append((product_name, valid_rows))
    
    # Fallback a lista simple de precios si no se generaron productos desde tablas
    if not products_to_create and single_price:
        est, liso = single_price[0]
        products_to_create.append((section_title, [(1, int(est))]))
    
    if not products_to_create and wholesale:
        min_qty = int(wholesale.group(1))
        price = int(wholesale.group(2))
        products_to_create.append((section_title, [(min_qty + 1, price)]))
    
    for product_name, rows in products_to_create:
        product_index += 1
        slug = slugify(product_name)
        product_id = make_uuid(TENANT_ID, slug)
        view_id = make_uuid(TENANT_ID, slug, 'frente')
        
        lines.append(f"\n-- Producto {product_index}: {product_name}")
        lines.append(f"INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)")
        lines.append(f"VALUES ('{product_id}', '{TENANT_ID}', '{escape_sql(product_name)}', '{slug}', '', 0, true, 'fixed_rules', '{technique}')")
        lines.append("ON CONFLICT (tenant_id, slug) DO UPDATE SET")
        lines.append("  name = EXCLUDED.name,")
        lines.append("  pricing_method = EXCLUDED.pricing_method,")
        lines.append("  default_technique = EXCLUDED.default_technique,")
        lines.append("  is_active = true;")
        
        lines.append(f"INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)")
        lines.append(f"VALUES ('{view_id}', '{product_id}', 'Frente', '', 0, 30, 30)")
        lines.append("ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;")
        
        # Nota: las reglas de precio ahora se cargan desde load_networkcapital.py
        # (serigrafia desde Excel + DTF desde imagen transcrita)
        # for rule_idx, (qty_min, price) in enumerate(rows, 1):
        #     rule_name = f"{product_name} - {qty_min}+ uds" if qty_min > 1 else f"{product_name} - Precio unico"
        #     rule_id = make_uuid(TENANT_ID, slug, qty_min)
        #     lines.append(f"INSERT INTO pricing_rules ...")

with open('networkcapital_pricing_rules.sql', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f'SQL generado: {len(lines)} lineas')
print('Archivo: landing-temp/networkcapital_pricing_rules.sql')
print(f'Productos creados: {product_index}')
