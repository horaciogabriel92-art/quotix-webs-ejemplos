-- Configuracion de cotizacion para Network Capital
-- Tenant ID: 2297564f-8c39-4dc8-b2f8-515ada08c20a
-- Generado automaticamente desde Catalogo_NetworkCapital.md

-- 0. Asegurar constraints necesarias para idempotencia

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


-- 1. Defaults de pricing

INSERT INTO tenant_pricing_defaults (tenant_id, stitch_cost_per_thousand, extra_color_charge, margin_percentage, urgency_24h_surcharge, urgency_48h_surcharge, weekend_surcharge)
VALUES ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 0.15, 150, 0, 50, 25, 30)
ON CONFLICT (tenant_id) DO UPDATE SET
  margin_percentage = EXCLUDED.margin_percentage,
  urgency_24h_surcharge = EXCLUDED.urgency_24h_surcharge,
  urgency_48h_surcharge = EXCLUDED.urgency_48h_surcharge;

-- 2. Habilitar Serigrafia y DTF

INSERT INTO tenant_techniques (tenant_id, technique_id, enabled, label, description, sort_order)
VALUES
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 'dtg', true, 'DTF (Directo a prenda)', 'Transferencia digital de alta calidad', 1),
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 'screenPrint', true, 'Serigrafia', 'Estampado tradicional por colores', 2)
ON CONFLICT (tenant_id, technique_id) DO UPDATE SET
  enabled = EXCLUDED.enabled,
  label = EXCLUDED.label,
  description = EXCLUDED.description,
  sort_order = EXCLUDED.sort_order;

-- 3. Tiers de cantidad

DELETE FROM pricing_quantity_tiers WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a';
INSERT INTO pricing_quantity_tiers (tenant_id, min_quantity, max_quantity, label, price_modifier_type, price_modifier_value, sort_order)
VALUES
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 1, 9, '1-9 unidades', 'percentage', 0, 0),
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 10, 19, '10-19 unidades', 'percentage', 0, 1),
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 20, 29, '20-29 unidades', 'percentage', 0, 2),
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 30, NULL, '30+ unidades', 'percentage', 0, 3);

-- 4. Productos y reglas de cotizacion fijas

-- Desactivar productos antiguos del tenant (opcional, descomentar si se quiere limpiar)
-- UPDATE products SET is_active = false WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a';


-- Producto 1: REMERA PESO LIVIANO (PRIMER PRECIO)
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('3c423195-aabb-5b90-ab4b-a881e491faf4', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA PESO LIVIANO (PRIMER PRECIO)', 'remera-peso-liviano-primer-precio', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('983f2555-734a-5e96-b30f-857cc4c71202', '3c423195-aabb-5b90-ab4b-a881e491faf4', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 2: REMERA CLÁSICA PESO COMPLETO
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('10044988-e852-5448-945f-7474694e955b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLÁSICA PESO COMPLETO', 'remera-cl-sica-peso-completo', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('ae53da78-e9c2-5caa-92a3-3d08b0f01a27', '10044988-e852-5448-945f-7474694e955b', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 3: REMERA OVERSIZE
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('a14aff13-53aa-545b-ac90-f8caa3ebe625', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE', 'remera-oversize', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('b44cbf4e-f780-59b7-aa70-c42f7656bf15', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 4: CAMISETA A LA BASE MANGA LARGA
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('642934c3-5c3e-5dfd-94d3-824b4a68c00c', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CAMISETA A LA BASE MANGA LARGA', 'camiseta-a-la-base-manga-larga', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('79a0510b-c961-5aab-88b2-c67db55e7e66', '642934c3-5c3e-5dfd-94d3-824b4a68c00c', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 5: REMERA STONEWASH OVERSIZE
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('5a000170-6765-50db-8506-1176a521cedd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONEWASH OVERSIZE', 'remera-stonewash-oversize', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('1f7427fb-fe56-51bb-94a1-716a00cb26e0', '5a000170-6765-50db-8506-1176a521cedd', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 6: REMERAS CLÁSICAS STONEWASH
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('0c73b96e-227f-524f-9505-18a3f00b7d07', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERAS CLÁSICAS STONEWASH', 'remeras-cl-sicas-stonewash', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('fbb5b31e-64a0-593f-a852-cd89827d1192', '0c73b96e-227f-524f-9505-18a3f00b7d07', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 7: BOXY CROP STONEWASH
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('e15feda6-be5d-5aa3-a0fe-c23f5247b3bd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BOXY CROP STONEWASH', 'boxy-crop-stonewash', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('f9ac5880-9167-53ea-a79d-4b6ee1b9ed04', 'e15feda6-be5d-5aa3-a0fe-c23f5247b3bd', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 8: REMERA BOXY FIT
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('b5b67a6d-89bf-5879-8251-81fb9b48f2db', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY FIT', 'remera-boxy-fit', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 9: CAMISETA DRY FIT MANGA LARGA
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('ee9435e5-81f8-5a43-80ab-9fe7345cc1a7', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CAMISETA DRY FIT MANGA LARGA', 'camiseta-dry-fit-manga-larga', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('957e5461-ca49-55bd-9179-7b72a5f05d5d', 'ee9435e5-81f8-5a43-80ab-9fe7345cc1a7', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 10: REMERAS DRI-FIT (TEXTURADAS Y LISAS)
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('dfe90f7d-0b24-5f20-af8a-0d948aea2856', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERAS DRI-FIT (TEXTURADAS Y LISAS)', 'remeras-dri-fit-texturadas-y-lisas', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 11: POLO T-SHIRT
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('96c60940-99ec-5218-9499-93e301f365a9', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'POLO T-SHIRT', 'polo-t-shirt', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('f4f28e6a-f2ab-57c9-bbc1-0a4498ef672c', '96c60940-99ec-5218-9499-93e301f365a9', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 12: Buzo a la Base
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('35d03e45-90c8-5464-a879-2d6ecf6b977a', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'Buzo a la Base', 'buzo-a-la-base', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('c3ddb523-4484-5513-80a4-80d0e56d47e9', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 13: Canguro Clasic
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'Canguro Clasic', 'canguro-clasic', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 14: Canguro Oversize
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'Canguro Oversize', 'canguro-oversize', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('93ee71ac-dc86-5020-a05c-77f46cdce1b2', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 15: Buzo Medio Cierre
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('28473ca3-da88-5438-8e1e-e413894ef5fd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'Buzo Medio Cierre', 'buzo-medio-cierre', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('ed261fef-9fe9-5aab-99f9-5d6674184ec6', '28473ca3-da88-5438-8e1e-e413894ef5fd', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 16: CAMPERA CAPITONEADA DE INVIERNO Y EQUIPOS PERSONALIZADOS
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('8c81bb4b-e08c-59a3-ae1b-bd3760a9bd23', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CAMPERA CAPITONEADA DE INVIERNO Y EQUIPOS PERSONALIZADOS', 'campera-capitoneada-de-invierno-y-equipos-personalizados', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('54e456cb-06b1-52b9-93c4-af7ce5dcc653', '8c81bb4b-e08c-59a3-ae1b-bd3760a9bd23', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 17: PANTALONES DEPORTIVOS CON PUÑO
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('8359003a-5e0f-5b6a-a972-cf04642b763a', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'PANTALONES DEPORTIVOS CON PUÑO', 'pantalones-deportivos-con-pu-o', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('b4f1bbbb-23d0-51e0-a3b6-d50e3332c088', '8359003a-5e0f-5b6a-a972-cf04642b763a', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;

-- Producto 18: GORROS DE LANA
INSERT INTO products (id, tenant_id, name, slug, description, base_price, is_active, pricing_method, default_technique)
VALUES ('4f193eb6-5736-5b13-9ef9-762cd6281a7b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'GORROS DE LANA', 'gorros-de-lana', '', 0, true, 'fixed_rules', 'dtg')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('19fea4d6-ce27-5446-b6d3-effb2d2d055b', '4f193eb6-5736-5b13-9ef9-762cd6281a7b', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;-- Carga completa de Network Capital: precios Serigrafia + DTF
-- Tenant ID: 2297564f-8c39-4dc8-b2f8-515ada08c20a

-- 1. Habilitar tecnicas

INSERT INTO tenant_techniques (tenant_id, technique_id, enabled, label, description, sort_order)
VALUES
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 'dtg', true, 'DTF (Directo a prenda)', 'Transferencia digital de alta calidad', 1),
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 'screenPrint', true, 'Serigrafia', 'Estampado tradicional por colores', 2)
ON CONFLICT (tenant_id, technique_id) DO UPDATE SET
  enabled = EXCLUDED.enabled,
  label = EXCLUDED.label,
  sort_order = EXCLUDED.sort_order;

-- 2. Defaults de pricing

INSERT INTO tenant_pricing_defaults (tenant_id, stitch_cost_per_thousand, extra_color_charge, margin_percentage, urgency_24h_surcharge, urgency_48h_surcharge, weekend_surcharge)
VALUES ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 0.15, 150, 0, 50, 25, 30)
ON CONFLICT (tenant_id) DO UPDATE SET
  margin_percentage = EXCLUDED.margin_percentage;

-- 3. Limpiar reglas de precios anteriores del tenant
DELETE FROM pricing_rules WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a';

-- 4. Actualizar costo base de prendas para DTF
UPDATE products SET base_price = 220 WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a' AND slug = 'remera-cl-sica-peso-completo';
UPDATE products SET base_price = 320 WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a' AND slug = 'remera-oversize';
UPDATE products SET base_price = 320 WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a' AND slug = 'remera-boxy-fit';
UPDATE products SET base_price = 420 WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a' AND slug = 'remera-stonewash-oversize';
UPDATE products SET base_price = 220 WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a' AND slug = 'remeras-dri-fit-texturadas-y-lisas';
UPDATE products SET base_price = 720 WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a' AND slug = 'canguro-clasic';
UPDATE products SET base_price = 1070 WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a' AND slug = 'canguro-oversize';
UPDATE products SET base_price = 620 WHERE tenant_id = '2297564f-8c39-4dc8-b2f8-515ada08c20a' AND slug = 'buzo-a-la-base';

-- 5. Reglas de Serigrafia

INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('10461844-b7c2-5377-be33-100e2b110ada', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 10-20 uds - 1 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 450.0, true, 10, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('86e8e561-4652-52c6-82b8-dc029d469863', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 10-20 uds - 2 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 490.0, true, 10, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('e1a786cb-eb28-5f4a-9404-7a8df4a635f5', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 10-20 uds - 3 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 530.0, true, 10, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('b53669c0-2d89-5d38-ad9a-3edf35a26ede', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 21-40 uds - 1 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 400.0, true, 21, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ec926cf3-b5c5-553d-83e5-16a230d3d270', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 21-40 uds - 2 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 440.0, true, 21, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('83e30271-c9fe-5ae9-832e-0b5a44cf6028', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 21-40 uds - 3 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 460.0, true, 21, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('7d2a66bd-4042-52cb-8ef5-cb7070beb90d', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 41-80 uds - 1 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 380.0, true, 41, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('bc7372cd-e9ba-532c-b892-78d6ea9facef', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 41-80 uds - 2 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 390.0, true, 41, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('09764e03-aa3f-5045-8b89-e198638f47a0', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - 41-80 uds - 3 tinta(s)', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 410.0, true, 41, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('42d06ab1-8256-5adc-8841-a93ffb367675', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 10-20 uds - 1 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 490.0, true, 10, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('d4dbf53c-aecb-52e2-903e-58742268452a', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 10-20 uds - 2 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 530.0, true, 10, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('1fc39100-cdd9-5bc1-932f-dea5b8263ecb', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 10-20 uds - 3 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 570.0, true, 10, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('04a43bb2-fad9-5b39-862c-bb442b1845c8', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 21-40 uds - 1 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 440.0, true, 21, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('cd756540-7dd3-5bc1-bba8-0d6bffac2c7b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 21-40 uds - 2 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 480.0, true, 21, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('b1bf263f-8343-5d25-8dd9-bde7efe8022c', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 21-40 uds - 3 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 500.0, true, 21, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('2eab4411-109b-5d68-ba1b-668440e93f7f', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 41-80 uds - 1 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 420.0, true, 41, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('6f182877-c91b-545c-9b8e-89779b8da20d', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 41-80 uds - 2 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 440.0, true, 41, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('f15002df-8bc4-5876-a245-80afe85cc494', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - 41-80 uds - 3 tinta(s)', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 460.0, true, 41, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('6cc8a21a-77c0-5620-b795-333e8fa068c5', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 10-20 uds - 1 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 490.0, true, 10, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ff4301d1-38c9-5045-ac0c-de1d1fd76c41', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 10-20 uds - 2 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 530.0, true, 10, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('13375c5e-4f90-5cf0-8e06-4eb317d99b7b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 10-20 uds - 3 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 570.0, true, 10, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('2247d6df-878a-5147-a3db-1ce477506d36', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 21-40 uds - 1 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 440.0, true, 21, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('bdd1bf00-48d0-5ddf-864b-1ac6432a199c', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 21-40 uds - 2 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 480.0, true, 21, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('1cb3b66d-2a4b-5e93-b17b-97c3bbddebaf', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 21-40 uds - 3 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 500.0, true, 21, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('c1ef838b-3adf-5dc9-8fc7-981d65a9d478', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 41-80 uds - 1 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 420.0, true, 41, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('36644527-d677-5271-a9aa-8f732f4bdc23', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 41-80 uds - 2 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 440.0, true, 41, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('7a4360f1-a0d1-5a75-ace6-62282c71499b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - 41-80 uds - 3 tinta(s)', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 460.0, true, 41, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('47e029fc-b267-56b5-9672-0ad61a0dc45e', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 10-20 uds - 1 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 650.0, true, 10, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('41e2cdf2-6045-5eeb-b56a-68741396998d', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 10-20 uds - 2 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 690.0, true, 10, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ac69173c-2ef3-5ebd-a2c0-2c5cf33766b9', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 10-20 uds - 3 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 730.0, true, 10, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('d45ca153-996a-59db-b2db-b8d1c9346310', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 21-40 uds - 1 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 600.0, true, 21, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('d8f8884a-f677-58d1-8a77-400ea0e2ca13', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 21-40 uds - 2 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 640.0, true, 21, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('c4f423c6-777d-5235-9f0b-b31d26f430f0', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 21-40 uds - 3 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 660.0, true, 21, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('e1fc3a16-7fa1-598c-905f-3fff96674587', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 41-80 uds - 1 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 580.0, true, 41, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('67c83fc8-6c5a-505f-9442-d63168f846ef', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 41-80 uds - 2 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 590.0, true, 41, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('c4271ca0-af2b-54d9-9bf4-0ba73465d43e', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - 41-80 uds - 3 tinta(s)', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 610.0, true, 41, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('0c7eb0e3-4d59-5675-849d-3e747836c250', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 10-20 uds - 1 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 470.0, true, 10, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('0c74975f-c195-5503-b062-7f1785e9c2ab', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 10-20 uds - 2 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 510.0, true, 10, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('6e363580-0f4a-516b-8b6a-37539bbc7fbe', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 10-20 uds - 3 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 550.0, true, 10, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('c51f5308-2045-5876-a63b-24f8788e18ab', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 21-40 uds - 1 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 420.0, true, 21, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('f3ec4af5-d897-5bdb-a5c4-8ca033b7eccf', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 21-40 uds - 2 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 460.0, true, 21, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('05b77acf-45da-5a7c-9af3-61741a1573a8', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 21-40 uds - 3 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 480.0, true, 21, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('a3ed17fd-1e44-5032-8acd-c8ca17ae62b8', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 41-80 uds - 1 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 400.0, true, 41, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('430bb68e-8445-5ca0-93b7-1820ab187acc', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 41-80 uds - 2 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 420.0, true, 41, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('0ebf6c61-18a7-5416-a2ea-ae7066cfc81d', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - 41-80 uds - 3 tinta(s)', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 430.0, true, 41, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('24599718-d0a1-5729-a8c7-b2622b4ccbac', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 10-20 uds - 1 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 890.0, true, 10, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('faeb8449-197f-525a-b04a-3efd8d9f9bf3', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 10-20 uds - 2 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 930.0, true, 10, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('0f239baa-278c-541f-8b6d-1697181d70cb', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 10-20 uds - 3 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 970.0, true, 10, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('502bd738-e514-5787-bda5-9e5d1097cac1', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 21-40 uds - 1 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 850.0, true, 21, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('1fcdb5c1-d7eb-5fa0-bb03-64ffdf83fe78', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 21-40 uds - 2 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 880.0, true, 21, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('df47e2d7-118f-5442-a4e6-93ea8a40bfd3', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 21-40 uds - 3 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 900.0, true, 21, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('0d7a87a2-d409-5a15-b85f-6a1929a2c94f', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 41-80 uds - 1 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 820.0, true, 41, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('e2895700-83a3-5226-8da5-d11de7e015d3', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 41-80 uds - 2 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 830.0, true, 41, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('0656c6c8-6814-50c5-aca9-ec6a1e9c2159', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - 41-80 uds - 3 tinta(s)', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 850.0, true, 41, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('5f9458b1-429c-5456-9a0e-f28a63fe5aa9', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 10-20 uds - 1 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1180.0, true, 10, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('83e5f832-d426-5999-a7fa-8e89b5b51c5a', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 10-20 uds - 2 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1220.0, true, 10, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('67fca75b-3b8c-5fff-b22e-a76ba9f49236', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 10-20 uds - 3 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1260.0, true, 10, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('be29d920-d2f8-5870-94e4-8030ab28dc77', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 21-40 uds - 1 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1150.0, true, 21, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('221cfac9-85d2-568b-980a-0529aeef2d06', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 21-40 uds - 2 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1180.0, true, 21, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('db233ab7-0452-582e-a2b5-53051bfffbb0', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 21-40 uds - 3 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1210.0, true, 21, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('8ddd27af-aecb-572e-bd66-c476233a5313', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 41-80 uds - 1 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1120.0, true, 41, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('9d36e386-7288-581c-be17-9004ceaff9be', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 41-80 uds - 2 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1140.0, true, 41, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('af44c6e1-1c4c-5844-8179-363a95cbfde0', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGUROS OVERSIZE - 41-80 uds - 3 tinta(s)', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 1150.0, true, 41, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('bd503ee7-c716-52c9-bcd2-c1648ff93648', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 10-20 uds - 1 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 890.0, true, 10, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('79d0d694-4cb9-58db-9f3a-b9a8c07fe9c2', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 10-20 uds - 2 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 930.0, true, 10, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('c9b304f5-0ae3-5ce5-b5f6-228d20f5ba15', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 10-20 uds - 3 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 970.0, true, 10, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ee856ee1-99da-5665-866a-df9b932db547', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 21-40 uds - 1 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 840.0, true, 21, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('77aca4db-4b51-503a-b737-ec93c01217ce', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 21-40 uds - 2 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 880.0, true, 21, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('8957caa4-ca8a-5548-b326-8f9fc6b8e107', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 21-40 uds - 3 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 900.0, true, 21, 'screenPrint', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ccdb7a5e-5efe-50cd-80e2-49cd4bfab54a', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 41-80 uds - 1 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 820.0, true, 41, 'screenPrint', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('86e450fa-3a62-5a47-8616-655e6cf58ae9', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 41-80 uds - 2 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 840.0, true, 41, 'screenPrint', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('2957b994-2b18-5578-98d5-9b55cb900727', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - 41-80 uds - 3 tinta(s)', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 850.0, true, 41, 'screenPrint', 3, true);

-- 6. Reglas de DTF

INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('f037fed4-eb9b-5f61-8ac7-c9b3c93b274b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - DTF 1-10cm', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 10, 10, 50, false, 1, 'dtg', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('39c2d5c0-7c84-5711-801a-9fbcccb4d825', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - DTF 11-20cm', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 20, 20, 80, false, 1, 'dtg', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('9620246b-58e4-5d54-997b-df84d3b2f0df', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - DTF 21-30cm', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 30, 30, 120, false, 1, 'dtg', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('1aec08d2-77f4-56e4-a4cd-ea324e4d11a6', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - DTF 31-40cm', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 40, 40, 150, false, 1, 'dtg', 4, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('9962c526-2505-58ae-85fe-1bac4359f2e2', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - DTF 41-50cm', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 50, 50, 190, false, 1, 'dtg', 5, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('46e3f598-49e2-5321-90f1-a65648ab5cfd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLASICA - DTF 51-60cm', '10044988-e852-5448-945f-7474694e955b', 'ae53da78-e9c2-5caa-92a3-3d08b0f01a27', 60, 60, 260, false, 1, 'dtg', 6, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('3b53be83-e726-5594-b160-9011af7c7aed', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - DTF 1-10cm', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 10, 10, 50, false, 1, 'dtg', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('d1d536ee-bb23-5330-82a6-71cc14aea60a', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - DTF 11-20cm', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 20, 20, 80, false, 1, 'dtg', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('487446b4-743b-5e58-84a5-67d327599b37', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - DTF 21-30cm', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 30, 30, 120, false, 1, 'dtg', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('bdf5773d-f04f-5b4b-95e6-2d233307b4bd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - DTF 31-40cm', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 40, 40, 150, false, 1, 'dtg', 4, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('e196bf0b-08c5-5578-b3be-f5348f531625', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - DTF 41-50cm', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 50, 50, 190, false, 1, 'dtg', 5, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('1437ebbb-991b-5de8-8aac-91e3f92e8bac', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE - DTF 51-60cm', 'a14aff13-53aa-545b-ac90-f8caa3ebe625', 'b44cbf4e-f780-59b7-aa70-c42f7656bf15', 60, 60, 260, false, 1, 'dtg', 6, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('66efa5ca-1bf1-50d7-a46c-e5f1725eafeb', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - DTF 1-10cm', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 10, 10, 50, false, 1, 'dtg', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('76afae05-7811-5e91-b06c-1d0afb3e3dea', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - DTF 11-20cm', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 20, 20, 80, false, 1, 'dtg', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ab14f14f-03e5-524a-849d-c521bb021ddd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - DTF 21-30cm', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 30, 30, 120, false, 1, 'dtg', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('b8c89b7f-3555-5907-a194-5b79c988d2c7', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - DTF 31-40cm', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 40, 40, 150, false, 1, 'dtg', 4, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('7cd3788e-b3e0-5efa-a55e-e598b7b6193b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - DTF 41-50cm', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 50, 50, 190, false, 1, 'dtg', 5, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('026e9229-2600-5f54-a2ef-7dd01478bda7', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY - DTF 51-60cm', 'b5b67a6d-89bf-5879-8251-81fb9b48f2db', '8e7f1d21-c1f6-5eaf-bf49-9a13e23de9c5', 60, 60, 260, false, 1, 'dtg', 6, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('baabcf96-7029-5789-bd36-bc6df5edf9ed', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - DTF 1-10cm', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 10, 10, 50, false, 1, 'dtg', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('6d0a69bc-4557-5fc4-b4a7-834ec7ef0417', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - DTF 11-20cm', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 20, 20, 80, false, 1, 'dtg', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('891dada3-9cc4-53dd-8955-0a34b0c19c4e', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - DTF 21-30cm', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 30, 30, 120, false, 1, 'dtg', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('105e79d0-b4e3-5772-8af2-fab5ea496b78', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - DTF 31-40cm', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 40, 40, 150, false, 1, 'dtg', 4, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('3b46a9ff-6876-5283-a25f-585704206fad', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - DTF 41-50cm', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 50, 50, 190, false, 1, 'dtg', 5, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('4c7aa568-bdb3-549d-91bb-055e903495c3', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONE WASH - DTF 51-60cm', '5a000170-6765-50db-8506-1176a521cedd', '1f7427fb-fe56-51bb-94a1-716a00cb26e0', 60, 60, 260, false, 1, 'dtg', 6, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('14be563d-230b-5ef2-9b98-77fd475fd98f', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - DTF 1-10cm', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 10, 10, 50, false, 1, 'dtg', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ad576ea7-67af-5256-8058-f5e8e27dbd41', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - DTF 11-20cm', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 20, 20, 80, false, 1, 'dtg', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('cfa12374-a1f8-53f9-9bd4-b3addb634762', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - DTF 21-30cm', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 30, 30, 120, false, 1, 'dtg', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('24849e51-c366-5f9a-bdd8-1d34c51f25e7', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - DTF 31-40cm', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 40, 40, 150, false, 1, 'dtg', 4, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('181c014d-f5e3-57ea-8228-347ada9d1e9f', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - DTF 41-50cm', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 50, 50, 190, false, 1, 'dtg', 5, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('45a72755-4ab7-5b48-956f-f98b7d8912f7', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA DRY FIT - DTF 51-60cm', 'dfe90f7d-0b24-5f20-af8a-0d948aea2856', '6bd263b6-4d69-5903-a6b4-fb2c7c0964bb', 60, 60, 260, false, 1, 'dtg', 6, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('3af5897e-70aa-5f66-8ba9-8b0e294e08cd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - DTF 1-10cm', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 10, 10, 50, false, 1, 'dtg', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('1044be4b-9cce-5385-8903-67ea275e78af', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - DTF 11-20cm', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 20, 20, 80, false, 1, 'dtg', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('47bd6607-fc53-5c39-bd80-c1b99259246f', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - DTF 21-30cm', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 30, 30, 120, false, 1, 'dtg', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('5e4b9c25-d651-5021-949d-4ced6bae06b8', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - DTF 31-40cm', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 40, 40, 150, false, 1, 'dtg', 4, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('caa45afc-4d50-5ca8-a76e-15bc9d3fec7c', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - DTF 41-50cm', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 50, 50, 190, false, 1, 'dtg', 5, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ee174d30-a967-5646-8521-b6ec372bdaac', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO CLASICO - DTF 51-60cm', '0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '6f737ebc-cef4-5a9d-8bc1-d47127d4a2db', 60, 60, 260, false, 1, 'dtg', 6, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('98760143-ae78-553b-8e22-b3faf545c4af', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO OVERSIZE - DTF 1-10cm', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 10, 10, 50, false, 1, 'dtg', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('d2eece53-1582-50b6-842b-42840cda25f8', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO OVERSIZE - DTF 11-20cm', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 20, 20, 80, false, 1, 'dtg', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('3f61bf83-fe79-56d8-b0a8-d04dbd57dd57', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO OVERSIZE - DTF 21-30cm', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 30, 30, 120, false, 1, 'dtg', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('1495448b-188c-5565-9f8d-fa73fa476812', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO OVERSIZE - DTF 31-40cm', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 40, 40, 150, false, 1, 'dtg', 4, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('4f9f54d1-beb8-5de1-bc2a-ed65fcd83458', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO OVERSIZE - DTF 41-50cm', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 50, 50, 190, false, 1, 'dtg', 5, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('07b0a123-a379-5500-b649-51dcd5879247', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CANGURO OVERSIZE - DTF 51-60cm', '7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '93ee71ac-dc86-5020-a05c-77f46cdce1b2', 60, 60, 260, false, 1, 'dtg', 6, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('776cf3c3-7b22-5e36-8ae2-026c782ee070', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - DTF 1-10cm', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 10, 10, 50, false, 1, 'dtg', 1, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('ec32bab9-3d6f-581d-89ec-768aeb6c5d1f', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - DTF 11-20cm', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 20, 20, 80, false, 1, 'dtg', 2, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('f22ffce0-e850-5a18-a064-05f01db5e498', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - DTF 21-30cm', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 30, 30, 120, false, 1, 'dtg', 3, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('a19981c0-d124-5031-b35c-cd9367de645c', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - DTF 31-40cm', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 40, 40, 150, false, 1, 'dtg', 4, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('014aa441-4986-5a7d-baa9-7c43980527f2', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - DTF 41-50cm', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 50, 50, 190, false, 1, 'dtg', 5, true);


INSERT INTO pricing_rules (id, tenant_id, name, product_id, view_id, max_width_cm, max_height_cm, unit_price, price_includes_garment, min_quantity, technique, sort_order, is_active)
VALUES ('4759c36c-20ff-54f8-be38-f71902ff5104', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BUZO A LA BASE - DTF 51-60cm', '35d03e45-90c8-5464-a879-2d6ecf6b977a', 'c3ddb523-4484-5513-80a4-80d0e56d47e9', 60, 60, 260, false, 1, 'dtg', 6, true);
