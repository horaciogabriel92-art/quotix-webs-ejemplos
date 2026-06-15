import re
from pathlib import Path
from collections import defaultdict

md_path = Path('Catalogo_NetworkCapital.md')
img_dir = Path('productos')

with open(md_path, 'r', encoding='utf-8') as f:
    md = f.read()

products = re.findall(r'^##\s+\d+\.\s+(.+)$', md, re.MULTILINE)

images = [f.name for f in img_dir.iterdir() if f.is_file() and f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp']]

def normalize(s):
    return s.lower().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('ñ','n').replace('ó','o')

# Reglas de asignacion (mas especificas primero)
rules = [
    (12, lambda n: 'buzo a la base' in n),
    (12, lambda n: 'canguro clasico' in n or 'canguro clasico' in n.replace('clasico', 'clasic')),
    (13, lambda n: 'canguro oversize' in n or 'canguro over' in n),
    (13, lambda n: 'canguro con cierre' in n),
    (13, lambda n: 'cangurto con cierre' in n),
    (13, lambda n: 'buzo medio' in n or 'buzo medio cierre' in n),
    (5, lambda n: 'remera stone wash' in n or 'remera stonewash' in n or 'promo remera stone wash' in n),
    (3, lambda n: 'remera over' in n or 'promo remere over' in n),
    (3, lambda n: ' over ' in f' {n} ' and 'canguro' not in n and 'stone' not in n),
    (14, lambda n: 'campera' in n),
    (1, lambda n: 'peso liviano' in n or 'primer precio' in n),
    (2, lambda n: 'peso completo' in n),
    (4, lambda n: 'camiseta a la base' in n or 'camiseta base' in n),
    (6, lambda n: 'clasica stonewash' in n or 'clasico stonewash' in n),
    (7, lambda n: 'boxy crop' in n),
    (8, lambda n: 'boxy fit' in n),
    (9, lambda n: 'dry fit manga larga' in n or 'dryfit manga larga' in n),
    (10, lambda n: 'dri-fit' in n or 'dri fit' in n or 'dry fit' in n),
    (11, lambda n: 'polo' in n),
    (15, lambda n: 'pantalon' in n),
    (16, lambda n: 'gorro' in n),
]

assigned = defaultdict(list)
unassigned = []

for img in images:
    n = normalize(img)
    found = False
    for prod_idx, check in rules:
        if check(n):
            assigned[prod_idx].append(img)
            found = True
            break
    if not found:
        unassigned.append(img)

# Ajuste manual: imagenes genericas OVER sin canguro/stone son remera oversize (3)
for img in list(unassigned):
    n = normalize(img)
    if ' over ' in f' {n} ' and 'canguro' not in n and 'stone' not in n:
        assigned[3].append(img)
        unassigned.remove(img)

# Ajuste manual: canguro con cierre typo
for img in list(unassigned):
    n = normalize(img)
    if 'canguro' in n and ('cierre' in n or 'oversize' in n or 'over' in n):
        assigned[13].append(img)
        unassigned.remove(img)

# Ajuste manual: typo cangruo
for img in list(unassigned):
    n = normalize(img)
    if 'cangruo' in n and ('oversize' in n or 'over' in n):
        assigned[13].append(img)
        unassigned.remove(img)

# Ajuste manual: remera color stone wash
for img in list(unassigned):
    n = normalize(img)
    if 'remera' in n and 'stone wash' in n:
        assigned[5].append(img)
        unassigned.remove(img)

print('=== COBERTURA DE IMAGENES POR PRODUCTO DEL CATALOGO ===\n')
for i, p in enumerate(products, 1):
    count = len(assigned[i])
    status = '[OK]' if count > 0 else '[FALTAN IMAGENES]'
    print(f'{i}. {p} {status} ({count} imagenes)')
    if assigned[i]:
        for m in sorted(assigned[i])[:5]:
            print(f'   - {m}')
        if len(assigned[i]) > 5:
            print(f'   ... y {len(assigned[i])-5} mas')

print('\n=== PRODUCTOS SIN IMAGENES ===')
for i, p in enumerate(products, 1):
    if not assigned[i]:
        print(f'{i}. {p}')

print('\n=== IMAGENES SIN PRODUCTO CLARO EN EL CATALOGO ===')
if unassigned:
    for img in sorted(unassigned):
        print(f'   - {img}')
else:
    print('   (ninguna)')

print('\n=== NOTAS ===')
print('- Las imagenes OVER amarilla/blanca/etc. son remeras oversize (producto 3).')
print('- Las imagenes CANGURO OVER son canguros oversize (producto 13).')
print('- Las imagenes REMERA STONE WASH son remera stonewash oversize (producto 5).')
print('- Las imagenes BUZO MEDIO / CANGURO CON CIERRE son buzos medio cierre (producto 13).')
print('- Faltan completamente: remeras basicas, camisetas manga larga, boxy, dry-fit, polo, pantalones y gorros.')
