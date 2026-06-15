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
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 'screenPrint', true, 'Serigrafia', 'Estampado tradicional por colores', 1),
  ('2297564f-8c39-4dc8-b2f8-515ada08c20a', 'dtg', true, 'DTF (Directo a prenda)', 'Transferencia digital de alta calidad', 2)
ON CONFLICT (tenant_id, technique_id) DO UPDATE SET
  enabled = EXCLUDED.enabled,
  label = EXCLUDED.label,
  description = EXCLUDED.description;

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
VALUES ('3c423195-aabb-5b90-ab4b-a881e491faf4', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA PESO LIVIANO (PRIMER PRECIO)', 'remera-peso-liviano-primer-precio', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('10044988-e852-5448-945f-7474694e955b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA CLÁSICA PESO COMPLETO', 'remera-cl-sica-peso-completo', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('a14aff13-53aa-545b-ac90-f8caa3ebe625', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA OVERSIZE', 'remera-oversize', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('642934c3-5c3e-5dfd-94d3-824b4a68c00c', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CAMISETA A LA BASE MANGA LARGA', 'camiseta-a-la-base-manga-larga', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('5a000170-6765-50db-8506-1176a521cedd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA STONEWASH OVERSIZE', 'remera-stonewash-oversize', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('0c73b96e-227f-524f-9505-18a3f00b7d07', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERAS CLÁSICAS STONEWASH', 'remeras-cl-sicas-stonewash', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('e15feda6-be5d-5aa3-a0fe-c23f5247b3bd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'BOXY CROP STONEWASH', 'boxy-crop-stonewash', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('b5b67a6d-89bf-5879-8251-81fb9b48f2db', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERA BOXY FIT', 'remera-boxy-fit', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('ee9435e5-81f8-5a43-80ab-9fe7345cc1a7', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CAMISETA DRY FIT MANGA LARGA', 'camiseta-dry-fit-manga-larga', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('dfe90f7d-0b24-5f20-af8a-0d948aea2856', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'REMERAS DRI-FIT (TEXTURADAS Y LISAS)', 'remeras-dri-fit-texturadas-y-lisas', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('96c60940-99ec-5218-9499-93e301f365a9', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'POLO T-SHIRT', 'polo-t-shirt', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('35d03e45-90c8-5464-a879-2d6ecf6b977a', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'Buzo a la Base', 'buzo-a-la-base', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('0cc2a9a2-1151-534f-9286-6ffbcfdba24b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'Canguro Clasic', 'canguro-clasic', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('7c952db1-b9e1-5a9d-b7c7-59ff4f387bf2', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'Canguro Oversize', 'canguro-oversize', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('28473ca3-da88-5438-8e1e-e413894ef5fd', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'Buzo Medio Cierre', 'buzo-medio-cierre', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('8c81bb4b-e08c-59a3-ae1b-bd3760a9bd23', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'CAMPERA CAPITONEADA DE INVIERNO Y EQUIPOS PERSONALIZADOS', 'campera-capitoneada-de-invierno-y-equipos-personalizados', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('8359003a-5e0f-5b6a-a972-cf04642b763a', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'PANTALONES DEPORTIVOS CON PUÑO', 'pantalones-deportivos-con-pu-o', '', 0, true, 'fixed_rules', 'screenPrint')
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
VALUES ('4f193eb6-5736-5b13-9ef9-762cd6281a7b', '2297564f-8c39-4dc8-b2f8-515ada08c20a', 'GORROS DE LANA', 'gorros-de-lana', '', 0, true, 'fixed_rules', 'screenPrint')
ON CONFLICT (tenant_id, slug) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_method = EXCLUDED.pricing_method,
  default_technique = EXCLUDED.default_technique,
  is_active = true;
INSERT INTO product_views (id, product_id, name, image_url, sort_order, print_area_width_cm, print_area_height_cm)
VALUES ('19fea4d6-ce27-5446-b6d3-effb2d2d055b', '4f193eb6-5736-5b13-9ef9-762cd6281a7b', 'Frente', '', 0, 30, 30)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, product_id = EXCLUDED.product_id;