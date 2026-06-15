# Datos DTF transcritos de la imagen del Excel
# Interpretacion: los rangos de cm y precios aplican a todos los articulos.
# El costo del articulo (prenda sola) varia por producto y se guarda en products.base_price.

DTF_RANGES = [
    # (ancho_min, ancho_max, largo_min, largo_max, precio_estampado)
    (1, 10, 1, 10, 50),
    (11, 20, 11, 20, 80),
    (21, 30, 21, 30, 120),
    (31, 40, 31, 40, 150),
    (41, 50, 41, 50, 190),
    (51, 60, 51, 60, 260),
]

DTF_GARMENT_COSTS = {
    'REMERA CLASICA': 220,
    'REMERA OVERSIZE': 320,
    'REMERA BOXY': 320,
    'REMERA STONE WASH': 420,
    'REMERA DRY FIT': 220,
    'CANGURO CLASICO': 720,
    'CANGURO OVERSIZE': 1070,
    'BUZO A LA BASE': 620,
}
