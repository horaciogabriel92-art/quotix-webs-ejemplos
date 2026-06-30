export const BRAND = {
  name: "Network Capital",
  slogan: "Emprendé con estilo",
  subtitle: "Venta por mayor · Hecho en Uruguay",
  address: "Pedro Bustamante 1500, Montevideo, Uruguay",
  mapsUrl: "https://maps.google.com/?q=Pedro+Bustamante+1500+Montevideo+Uruguay",
  whatsapp: "59891358992",
  phone: "+598 91 358 992",
  email: "networkcapital@quotixos.com",
  instagram: "@networkcapital.uy",
  ctaUrl: "https://app-networkcapital.quotixos.com",
  minOrder: 10,
  productionDays: 7,
  depositPercent: 50,
  designFixPrice: 300,
  xxlSurcharge: 30,
  colors: {
    yellow: "#F2B411",
    blue: "#007DB8",
    pink: "#E91E8C",
    navy: "#0B1628",
    dark: "#0A0A0A",
    cream: "#F5F5F0",
    white: "#FFFFFF",
  },
};

export interface Promo {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  productLink?: string;
  priceLabel: string;
  priceTiers: PriceTier[];
}

export const PROMOS: Promo[] = [
  {
    id: "promo-over-amarilla",
    title: "Remera Oversize",
    subtitle: "Corte amplio y moderno, ideal para estampados grandes.",
    image: "/networkcapital/productos/promo remere over sin fondo.png",
    ctaText: "Armá tu prenda",
    productLink: "/networkcapital/remeras",
    priceLabel: "ESTAMPADO INCLUIDO",
    priceTiers: [
      { qty: 10, label: "10+ unidades", price: 490 },
      { qty: 20, label: "20+ unidades", price: 470 },
      { qty: 30, label: "30+ unidades", price: 450 },
    ],
  },
  {
    id: "promo-canguro-oversize",
    title: "Canguro Oversize",
    subtitle: "Abrigo oversize perfecto para tu marca. Negro clásico.",
    image: "/networkcapital/productos/promo canguro oversize negro sin fondo.png",
    ctaText: "Armá tu prenda",
    productLink: "/networkcapital/canguros",
    priceLabel: "ESTAMPADO INCLUIDO",
    priceTiers: [
      { qty: 10, label: "10+ unidades", price: 1240 },
      { qty: 20, label: "20+ unidades", price: 1200 },
      { qty: 30, label: "30+ unidades", price: 1160 },
    ],
  },
  {
    id: "promo-stone-wash-gris",
    title: "Remera Stone Wash",
    subtitle: "Look vintage desgastado. Ideal para serigrafía y DTF.",
    image: "/networkcapital/productos/promo remera stone wash gris sin fondo.png",
    ctaText: "Armá tu prenda",
    productLink: "/networkcapital/remeras",
    priceLabel: "ESTAMPADO INCLUIDO",
    priceTiers: [
      { qty: 10, label: "10+ unidades", price: 520 },
      { qty: 20, label: "20+ unidades", price: 490 },
      { qty: 30, label: "30+ unidades", price: 460 },
    ],
  },
];

export interface PriceTier {
  qty: number;
  label: string;
  price: number;
}

export interface SizeRow {
  size: string;
  largo?: number;
  ancho?: number;
  manga?: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  priceFrom: number;
  image: string;
  description: string;
  features: string[];
  colors: string[];
  colorImages?: Record<string, string>;
  minQty: number;
  weight: string;
  composition: string;
  sizes: string[];
  sizeTable: SizeRow[];
  priceWithPrint: PriceTier[];
  priceWithoutPrint: PriceTier[];
  stampIdeas?: string[];
  details?: string[];
  hidden?: boolean;
}

// ─── Talles y precios compartidos ───
const REMERA_SIZES = ["S", "M", "L", "XL", "XXL", "XXXL"];
const REMERA_SIZE_TABLE: SizeRow[] = [
  { size: "S", largo: 70, ancho: 46 },
  { size: "M", largo: 73, ancho: 51 },
  { size: "L", largo: 76, ancho: 56 },
  { size: "XL", largo: 78, ancho: 61 },
  { size: "XXL", largo: 81, ancho: 66 },
  { size: "XXXL", largo: 83, ancho: 71 },
];

const REMERA_STONE_WASH_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 590 },
  { qty: 20, label: "20+", price: 570 },
  { qty: 30, label: "30+", price: 550 },
];
const REMERA_STONE_WASH_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 490 },
  { qty: 20, label: "20+", price: 470 },
  { qty: 30, label: "30+", price: 450 },
];

const REMERA_OVERSIZE_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 490 },
  { qty: 20, label: "20+", price: 470 },
  { qty: 30, label: "30+", price: 450 },
];
const REMERA_OVERSIZE_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 350 },
  { qty: 20, label: "20+", price: 330 },
  { qty: 30, label: "30+", price: 310 },
];

const REMERA_CLASICA_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 390 },
  { qty: 20, label: "20+", price: 370 },
  { qty: 30, label: "30+", price: 350 },
];
const REMERA_CLASICA_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 290 },
  { qty: 20, label: "20+", price: 270 },
  { qty: 30, label: "30+", price: 250 },
];

const BUZO_SIZES = ["S", "M", "L", "XL", "XXL"];
const BUZO_SIZE_TABLE: SizeRow[] = [
  { size: "S", largo: 66, ancho: 52, manga: 58 },
  { size: "M", largo: 69, ancho: 56, manga: 60 },
  { size: "L", largo: 72, ancho: 60, manga: 62 },
  { size: "XL", largo: 75, ancho: 64, manga: 64 },
  { size: "XXL", largo: 78, ancho: 68, manga: 66 },
];

const BUZO_MEDIO_CIERRE_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 790 },
  { qty: 20, label: "20+", price: 770 },
  { qty: 30, label: "30+", price: 750 },
];
const BUZO_MEDIO_CIERRE_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 690 },
  { qty: 20, label: "20+", price: 670 },
  { qty: 30, label: "30+", price: 650 },
];

const BUZO_A_LA_BASE_SIZES = ["S", "M", "L", "XL", "XXL"];
const BUZO_A_LA_BASE_SIZE_TABLE: SizeRow[] = [
  { size: "S", largo: 69, ancho: 51, manga: 61 },
  { size: "M", largo: 71, ancho: 56, manga: 62 },
  { size: "L", largo: 74, ancho: 61, manga: 63 },
  { size: "XL", largo: 76, ancho: 66, manga: 64 },
  { size: "XXL", largo: 79, ancho: 71, manga: 65 },
];
const BUZO_A_LA_BASE_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 790 },
  { qty: 20, label: "20+", price: 770 },
  { qty: 30, label: "30+", price: 750 },
];
const BUZO_A_LA_BASE_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 690 },
  { qty: 20, label: "20+", price: 670 },
  { qty: 30, label: "30+", price: 650 },
];

const CAMPERA_SIZES = ["S", "M", "L", "XL", "XXL"];
const CAMPERA_SIZE_TABLE: SizeRow[] = [
  { size: "S", largo: 68, ancho: 54, manga: 60 },
  { size: "M", largo: 71, ancho: 58, manga: 62 },
  { size: "L", largo: 74, ancho: 62, manga: 64 },
  { size: "XL", largo: 77, ancho: 66, manga: 66 },
  { size: "XXL", largo: 80, ancho: 70, manga: 68 },
];

const CAMPERA_CAPITONEADA_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 1240 },
];
const CAMPERA_CAPITONEADA_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 990 },
];

const CAMPERA_NEOPRENO_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 890 },
  { qty: 20, label: "20+", price: 850 },
  { qty: 30, label: "30+", price: 820 },
];
const CAMPERA_NEOPRENO_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 790 },
  { qty: 20, label: "20+", price: 750 },
  { qty: 30, label: "30+", price: 720 },
];

const CANGURO_SIZES = ["S", "M", "L", "XL", "XXL"];
const CANGURO_SIZE_TABLE: SizeRow[] = [
  { size: "S", largo: 66, ancho: 52, manga: 58 },
  { size: "M", largo: 69, ancho: 56, manga: 60 },
  { size: "L", largo: 72, ancho: 60, manga: 62 },
  { size: "XL", largo: 75, ancho: 64, manga: 64 },
  { size: "XXL", largo: 78, ancho: 68, manga: 66 },
];

const CANGURO_OVERSIZE_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 1240 },
  { qty: 20, label: "20+", price: 1200 },
  { qty: 30, label: "30+", price: 1160 },
];
const CANGURO_OVERSIZE_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 1090 },
  { qty: 20, label: "20+", price: 990 },
  { qty: 30, label: "30+", price: 970 },
];

const CANGURO_CLASICO_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 890 },
  { qty: 20, label: "20+", price: 870 },
  { qty: 30, label: "30+", price: 850 },
];
const CANGURO_CLASICO_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 790 },
  { qty: 20, label: "20+", price: 770 },
  { qty: 30, label: "30+", price: 750 },
];

const CANGURO_CON_CIERRE_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 590 },
  { qty: 20, label: "20+", price: 560 },
  { qty: 30, label: "30+", price: 530 },
];
const CANGURO_CON_CIERRE_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 490 },
  { qty: 20, label: "20+", price: 460 },
  { qty: 30, label: "30+", price: 430 },
];

// ─── Pantalón Deportivo ───
const PANTALON_SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const PANTALON_SIZE_TABLE: SizeRow[] = [
  { size: "XS", ancho: 34, largo: 96 },
  { size: "S", ancho: 36, largo: 98 },
  { size: "M", ancho: 38, largo: 100 },
  { size: "L", ancho: 40, largo: 102 },
  { size: "XL", ancho: 42, largo: 104 },
  { size: "XXL", ancho: 44, largo: 106 },
  { size: "XXXL", ancho: 46, largo: 106 },
];
const PANTALON_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 790 },
  { qty: 20, label: "20+", price: 770 },
  { qty: 30, label: "30+", price: 750 },
];
const PANTALON_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 690 },
  { qty: 20, label: "20+", price: 670 },
  { qty: 30, label: "30+", price: 650 },
];

// ─── Gorro ───
const GORRO_SIZE_TABLE: SizeRow[] = [{ size: "Único" }];
const GORRO_PRICE_WITH: PriceTier[] = [{ qty: 10, label: "10+", price: 170 }];
const GORRO_PRICE_WITHOUT: PriceTier[] = [{ qty: 10, label: "10+", price: 170 }];

// ─── Línea Niños ───
const NINO_CANGURO_SIZES = ["4", "6", "8", "10", "12", "14", "16"];
const NINO_CANGURO_SIZE_TABLE: SizeRow[] = [
  { size: "4" },
  { size: "6" },
  { size: "8" },
  { size: "10" },
  { size: "12" },
  { size: "14" },
  { size: "16" },
];
const NINO_CANGURO_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 790 },
  { qty: 20, label: "20+", price: 770 },
  { qty: 30, label: "30+", price: 750 },
];
const NINO_CANGURO_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 690 },
  { qty: 20, label: "20+", price: 670 },
  { qty: 30, label: "30+", price: 650 },
];

// ─── Canguro Premium ───
const CANGURO_PREMIUM_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 990 },
];
const CANGURO_PREMIUM_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 890 },
];

export const PRODUCTS: Product[] = [
  // ─────────────────────────── REMERAS ───────────────────────────
  {
    id: "remera-clasica",
    name: "Remera Clásica",
    category: "Remeras",
    priceFrom: 290,
    image: "/networkcapital/productos/remera-clasica-blanco-frente.jpg",
    description:
      "Remera clásica peso completo. 100% algodón 24/1, 200g. Calidad premium con costuras resistentes y terminaciones hechas para durar.",
    features: [
      "100% algodón 24/1",
      "200g",
      "Corte clásico",
      "Costuras reforzadas",
    ],
    colors: [
      "Amarillo",
      "Arena",
      "Azul",
      "Azul Marino",
      "Blanco",
      "Bordó",
      "Celeste",
      "Fucsia",
      "Gris",
      "Rojo",
      "Rosa Pastel",
      "Verde Oliva",
    ],
    colorImages: {
      "Amarillo": "/networkcapital/productos/remera-clasica-amarillo-frente.jpg",
      "Arena": "/networkcapital/productos/remera-clasica-arena-frente.jpg",
      "Azul": "/networkcapital/productos/remera-clasica-azul-frente.jpg",
      "Azul Marino": "/networkcapital/productos/remera-clasica-azul-marino-frente.jpg",
      "Blanco": "/networkcapital/productos/remera-clasica-blanco-frente.jpg",
      "Bordó": "/networkcapital/productos/remera-clasica-bordo-frente.jpg",
      "Celeste": "/networkcapital/productos/remera-clasica-celeste-frente.jpg",
      "Fucsia": "/networkcapital/productos/remera-clasica-fucsia-frente.jpg",
      "Gris": "/networkcapital/productos/remera-clasica-gris-frente.jpg",
      "Rojo": "/networkcapital/productos/remera-clasica-rojo-frente.jpg",
      "Rosa Pastel": "/networkcapital/productos/remera-clasica-rosa-pastel-frente.jpg",
      "Verde Oliva": "/networkcapital/productos/remera-clasica-verde-oliva-frente.jpg",
    },
    minQty: 10,
    weight: "200g",
    composition: "100% algodón 24/1",
    sizes: REMERA_SIZES,
    sizeTable: REMERA_SIZE_TABLE,
    priceWithPrint: REMERA_CLASICA_PRICE_WITH,
    priceWithoutPrint: REMERA_CLASICA_PRICE_WITHOUT,
  },
  {
    id: "remera-oversize",
    name: "Remera Oversize",
    category: "Remeras",
    priceFrom: 350,
    image: "/networkcapital/productos/remera-oversize-amarillo-frente.jpg",
    description:
      "Remera oversize unisex. Estilo amplio y moderno, perfecta para estampados grandes. Disponible en varios colores.",
    features: [
      "100% algodón",
      "Corte oversize",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: [
      "Amarillo",
      "Arena",
      "Azul Claro",
      "Azul Marino",
      "Blanco",
      "Bordó",
      "Carbón",
      "Chocolate",
      "Fucsia",
      "Negro",
      "Rojo",
      "Rosa Pastel",
      "Verde Oliva",
    ],
    colorImages: {
      "Amarillo": "/networkcapital/productos/remera-oversize-amarillo-frente.jpg",
      "Arena": "/networkcapital/productos/remera-oversize-arena-frente.jpg",
      "Azul Claro": "/networkcapital/productos/remera-oversize-azul-claro-frente.jpg",
      "Azul Marino": "/networkcapital/productos/remera-oversize-azul-marino-frente.jpg",
      "Blanco": "/networkcapital/productos/remera-oversize-blanco-frente.jpg",
      "Bordó": "/networkcapital/productos/remera-oversize-bordo-frente.jpg",
      "Carbón": "/networkcapital/productos/remera-oversize-carbon-frente.jpg",
      "Chocolate": "/networkcapital/productos/remera-oversize-chocolate-frente.jpg",
      "Fucsia": "/networkcapital/productos/remera-oversize-fucsia-frente.jpg",
      "Negro": "/networkcapital/productos/remera-oversize-negro-frente.jpg",
      "Rojo": "/networkcapital/productos/remera-oversize-rojo-frente.jpg",
      "Rosa Pastel": "/networkcapital/productos/remera-oversize-rosa-pastel-frente.jpg",
      "Verde Oliva": "/networkcapital/productos/remera-oversize-verde-oliva-frente.jpg",
    },
    minQty: 10,
    weight: "200g",
    composition: "100% algodón",
    sizes: REMERA_SIZES,
    sizeTable: REMERA_SIZE_TABLE,
    priceWithPrint: REMERA_OVERSIZE_PRICE_WITH,
    priceWithoutPrint: REMERA_OVERSIZE_PRICE_WITHOUT,
  },
  {
    id: "remera-stonewash",
    name: "Remera Stone Wash",
    category: "Remeras",
    priceFrom: 450,
    image: "/networkcapital/productos/remera stone wash negro.jpeg",
    description:
      "Remera stone wash unisex. Corte clásico, ideal para estampar y revender. Disponible en varios colores con fotos de modelo hombre y mujer.",
    features: [
      "100% algodón",
      "Stone wash",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Negro", "Gris", "Verde", "Marrón"],
    colorImages: {
      "Negro": "/networkcapital/productos/remera stone wash negro.jpeg",
      "Gris": "/networkcapital/productos/remera stone wash gris-hombre.jpeg",
      "Verde": "/networkcapital/productos/remera stone wash verde-hombre.jpeg",
      "Marrón": "/networkcapital/productos/remera marron stone wash.jpeg",
    },
    minQty: 10,
    weight: "180g",
    composition: "100% algodón",
    sizes: REMERA_SIZES,
    sizeTable: REMERA_SIZE_TABLE,
    priceWithPrint: REMERA_STONE_WASH_PRICE_WITH,
    priceWithoutPrint: REMERA_STONE_WASH_PRICE_WITHOUT,
  },

  // ─────────────────────────── BUZOS ───────────────────────────
  {
    id: "buzo-medio-cierre",
    name: "Buzo Medio Cierre",
    category: "Buzos",
    priceFrom: 650,
    image: "/networkcapital/productos/buzo medio gris frente.jpg",
    description:
      "Buzo medio cierre unisex. Cálido, cómodo y perfecto para personalizar con serigrafía o DTF. Disponible en varios colores.",
    features: [
      "Algodón peinado",
      "Cierre medio",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Azul", "Gris", "Negro"],
    colorImages: {
      "Azul": "/networkcapital/productos/buzo medio cierre azul.jpeg",
      "Gris": "/networkcapital/productos/buzo medio gris frente.jpg",
      "Negro": "/networkcapital/productos/buzo medio cierre negro.jpeg",
    },
    minQty: 10,
    weight: "280g",
    composition: "80% algodón · 20% poliéster",
    sizes: BUZO_SIZES,
    sizeTable: BUZO_SIZE_TABLE,
    priceWithPrint: BUZO_MEDIO_CIERRE_PRICE_WITH,
    priceWithoutPrint: BUZO_MEDIO_CIERRE_PRICE_WITHOUT,
  },
  {
    id: "buzo-a-la-base",
    name: "Buzo a la Base",
    category: "Buzos",
    priceFrom: 690,
    image: "/networkcapital/productos/buzo-a-la-base-negro-frente.jpg",
    description:
      "Buzo a la base clásico. Frisa premium 280gr, 50% algodón y 50% poliéster con interior de felpa suave y abrigada. Puños y cintura en ribb.",
    features: [
      "Frisa premium 280gr",
      "50% algodón · 50% poliéster",
      "Interior felpado",
      "Puños y cintura en ribb",
    ],
    colors: ["Negro", "Azul Marino", "Blanco", "Gris"],
    colorImages: {
      "Negro": "/networkcapital/productos/buzo-a-la-base-negro-frente.jpg",
      "Azul Marino": "/networkcapital/productos/buzo-a-la-base-azul-marino-frente.jpg",
      "Blanco": "/networkcapital/productos/buzo-a-la-base-blanco-frente.jpg",
      "Gris": "/networkcapital/productos/buzo-a-la-base-gris-frente.jpg",
    },
    minQty: 10,
    weight: "280g",
    composition: "50% algodón · 50% poliéster",
    sizes: BUZO_A_LA_BASE_SIZES,
    sizeTable: BUZO_A_LA_BASE_SIZE_TABLE,
    priceWithPrint: BUZO_A_LA_BASE_PRICE_WITH,
    priceWithoutPrint: BUZO_A_LA_BASE_PRICE_WITHOUT,
  },

  // ─────────────────────────── CAMPERAS ───────────────────────────
  {
    id: "campera-neopreno",
    name: "Campera Neopreno",
    category: "Camperas",
    priceFrom: 790,
    image: "/networkcapital/productos/campera-neopreno-negra-frente.jpg",
    description:
      "Campera de neopreno. Moderna, abrigada y perfecta para personalizar con serigrafía o DTF.",
    features: [
      "Neopreno",
      "Abrigada",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Negro"],
    colorImages: {
      "Negro": "/networkcapital/productos/campera-neopreno-negra-frente.jpg",
    },
    minQty: 10,
    weight: "400g",
    composition: "Neopreno",
    sizes: CAMPERA_SIZES,
    sizeTable: CAMPERA_SIZE_TABLE,
    priceWithPrint: CAMPERA_NEOPRENO_PRICE_WITH,
    priceWithoutPrint: CAMPERA_NEOPRENO_PRICE_WITHOUT,
  },
  {
    id: "campera-capitoneada",
    name: "Campera Capitoneada",
    category: "Camperas",
    priceFrom: 990,
    image: "/networkcapital/productos/campera capitoneada negro.jpeg",
    description:
      "Campera capitoneada unisex. Abrigo ideal para personalizar con serigrafía o DTF. Calidad premium.",
    features: [
      "Capitoneada",
      "Abrigada",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Negro", "Azul", "Bordó", "Gris", "Verde"],
    colorImages: {
      "Negro": "/networkcapital/productos/campera capitoneada negro.jpeg",
      "Azul": "/networkcapital/productos/campera-capitoneada-azul-frente.jpg",
      "Bordó": "/networkcapital/productos/campera-capitoneada-bordo-frente.jpg",
      "Gris": "/networkcapital/productos/campera-capitoneada-gris-frente.jpg",
      "Verde": "/networkcapital/productos/campera-capitoneada-verde-frente.jpg",
    },
    minQty: 10,
    weight: "350g",
    composition: "100% poliéster",
    sizes: CAMPERA_SIZES,
    sizeTable: CAMPERA_SIZE_TABLE,
    priceWithPrint: CAMPERA_CAPITONEADA_PRICE_WITH,
    priceWithoutPrint: CAMPERA_CAPITONEADA_PRICE_WITHOUT,
  },
  // ─────────────────────────── CANGUROS ───────────────────────────
  {
    id: "canguro-oversize",
    name: "Canguro Oversize",
    category: "Canguros",
    priceFrom: 970,
    image: "/networkcapital/productos/canguro over beige frente.jpg",
    description:
      "Canguro oversize unisex. Corte amplio y moderno, ideal para estampados grandes.",
    features: [
      "Corte oversize",
      "Capucha",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Beige", "Negro", "Stone Wash"],
    colorImages: {
      "Beige": "/networkcapital/productos/canguro over beige frente.jpg",
      "Negro": "/networkcapital/productos/cangruo oversize negro.jpeg",
      "Stone Wash": "/networkcapital/productos/canguro oversize stone wash.jpeg",
    },
    minQty: 10,
    weight: "300g",
    composition: "80% algodón · 20% poliéster",
    sizes: CANGURO_SIZES,
    sizeTable: CANGURO_SIZE_TABLE,
    priceWithPrint: CANGURO_OVERSIZE_PRICE_WITH,
    priceWithoutPrint: CANGURO_OVERSIZE_PRICE_WITHOUT,
  },
  {
    id: "canguro-clasico",
    name: "Canguro Clásico",
    category: "Canguros",
    priceFrom: 750,
    image: "/networkcapital/productos/canguro clasico arena.jpeg",
    description:
      "Canguro clásico unisex. Cómodo, con bolsillo delantero y capucha. Ideal para serigrafía y DTF. Disponible en varios colores.",
    features: [
      "Bolsillo delantero",
      "Capucha",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: [
      "Arena",
      "Azul",
      "Blanco",
      "Celeste",
      "Francia",
      "Negro",
      "Rosa Pastel",
      "Verde Bosque",
    ],
    colorImages: {
      "Arena": "/networkcapital/productos/canguro clasico arena.jpeg",
      "Azul": "/networkcapital/productos/canguro clasico azul hombre.jpeg",
      "Blanco": "/networkcapital/productos/canguro-clasico-blanco-frente.jpg",
      "Celeste": "/networkcapital/productos/canguro-clasico-celeste-frente.jpg",
      "Francia": "/networkcapital/productos/canguro clasico francia.jpeg",
      "Negro": "/networkcapital/productos/canguro clasico negro.jpeg",
      "Rosa Pastel": "/networkcapital/productos/canguro clasico rosa pastel.jpeg",
      "Verde Bosque": "/networkcapital/productos/canguro clasico verde bosque.jpeg",
    },
    minQty: 10,
    weight: "280g",
    composition: "80% algodón · 20% poliéster",
    sizes: CANGURO_SIZES,
    sizeTable: CANGURO_SIZE_TABLE,
    priceWithPrint: CANGURO_CLASICO_PRICE_WITH,
    priceWithoutPrint: CANGURO_CLASICO_PRICE_WITHOUT,
  },
  {
    id: "canguro-con-cierre",
    hidden: true,
    name: "Canguro con Cierre",
    category: "Canguros",
    priceFrom: 540,
    image: "/networkcapital/productos/canguro con cierre azul.jpeg",
    description:
      "Canguro con cierre unisex. Práctico, cálido y perfecto para personalizar con serigrafía o DTF.",
    features: [
      "Cierre completo",
      "Capucha",
      "Bolsillos",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Azul"],
    minQty: 10,
    weight: "320g",
    composition: "80% algodón · 20% poliéster",
    sizes: CANGURO_SIZES,
    sizeTable: CANGURO_SIZE_TABLE,
    priceWithPrint: CANGURO_CON_CIERRE_PRICE_WITH,
    priceWithoutPrint: CANGURO_CON_CIERRE_PRICE_WITHOUT,
  },

  // ─────────────────────────── CANGURO PREMIUM ───────────────────────────
  {
    id: "canguro-premium",
    name: "Canguro Premium",
    category: "Canguros",
    priceFrom: 1140,
    image: "/networkcapital/productos/canguro-premium-negro-frente.jpg",
    description:
      "Canguro premium unisex. Corte moderno, capucha doble capa y felpa de alta calidad. Ideal para marcas que buscan un producto superior.",
    features: [
      "Felpa premium",
      "Capucha doble capa",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: [
      "Arena",
      "Azul",
      "Blanco",
      "Celeste",
      "Gris",
      "Naranja",
      "Negro",
      "Rojo",
      "Rosa",
      "Verde",
      "Verde Claro",
    ],
    colorImages: {
      "Arena": "/networkcapital/productos/canguro-premium-arena-frente.jpg",
      "Azul": "/networkcapital/productos/canguro-premium-azul-frente.jpg",
      "Blanco": "/networkcapital/productos/canguro-premium-blanco-frente.jpg",
      "Celeste": "/networkcapital/productos/canguro-premium-celeste-frente.jpg",
      "Gris": "/networkcapital/productos/canguro-premium-gris-frente.jpg",
      "Naranja": "/networkcapital/productos/canguro-premium-naranja-frente.jpg",
      "Negro": "/networkcapital/productos/canguro-premium-negro-frente.jpg",
      "Rojo": "/networkcapital/productos/canguro-premium-rojo-frente.jpg",
      "Rosa": "/networkcapital/productos/canguro-premium-rosa-frente.jpg",
      "Verde": "/networkcapital/productos/canguro-premium-verde-frente.jpg",
      "Verde Claro": "/networkcapital/productos/canguro-premium-verde-claro-frente.jpg",
    },
    minQty: 10,
    weight: "320g",
    composition: "80% algodón · 20% poliéster",
    sizes: CANGURO_SIZES,
    sizeTable: CANGURO_SIZE_TABLE,
    priceWithPrint: CANGURO_PREMIUM_PRICE_WITH,
    priceWithoutPrint: CANGURO_PREMIUM_PRICE_WITHOUT,
  },

  // ─────────────────────────── PANTALONES ───────────────────────────
  {
    id: "pantalon-deportivo",
    name: "Pantalón Deportivo con Puño",
    category: "Pantalones",
    priceFrom: 690,
    image: "/networkcapital/productos/pantalon-deportivo-negro-frente.jpg",
    description:
      "Pantalón de felpa con puños. Ideal para uniformes, clubes, gimnasios y colegios. Cintura elástica con cordón y bolsillos laterales.",
    features: [
      "Felpa 280g",
      "Cintura elástica con cordón",
      "Bolsillos laterales",
      "Puños en ribb",
    ],
    colors: ["Azul", "Gris", "Negro"],
    colorImages: {
      "Azul": "/networkcapital/productos/pantalon-deportivo-azul-frente.jpg",
      "Gris": "/networkcapital/productos/pantalon-deportivo-gris-frente.jpg",
      "Negro": "/networkcapital/productos/pantalon-deportivo-negro-frente.jpg",
    },
    minQty: 10,
    weight: "280g",
    composition: "35% algodón · 65% poliéster",
    sizes: PANTALON_SIZES,
    sizeTable: PANTALON_SIZE_TABLE,
    priceWithPrint: PANTALON_PRICE_WITH,
    priceWithoutPrint: PANTALON_PRICE_WITHOUT,
  },

  // ─────────────────────────── ACCESORIOS ───────────────────────────
  {
    id: "gorro",
    name: "Gorro",
    category: "Accesorios",
    priceFrom: 170,
    image: "/networkcapital/productos/gorro-negro.jpg",
    description:
      "Gorro de lana. Suave, cómodo y con un calce perfecto. Ideal para el frío y para completar tu línea de invierno.",
    features: [
      "Lana",
      "Suave y abrigado",
      "Talle único",
      "Ideal para bordado o DTF",
    ],
    colors: ["Amarillo", "Azul", "Negro", "Rojo"],
    colorImages: {
      "Amarillo": "/networkcapital/productos/gorro-amarillo.jpg",
      "Azul": "/networkcapital/productos/gorro-azul.jpg",
      "Negro": "/networkcapital/productos/gorro-negro.jpg",
      "Rojo": "/networkcapital/productos/gorro-rojo.jpg",
    },
    minQty: 10,
    weight: "80g",
    composition: "100% acrílico",
    sizes: ["Único"],
    sizeTable: GORRO_SIZE_TABLE,
    priceWithPrint: GORRO_PRICE_WITH,
    priceWithoutPrint: GORRO_PRICE_WITHOUT,
  },

  // ─────────────────────────── NIÑOS ───────────────────────────
  {
    id: "remera-clasica-nino",
    name: "Remera Clásica Niño",
    category: "Niños",
    priceFrom: 240,
    image: "/networkcapital/productos/remera-clasica-nino-blanco-frente.jpg",
    description:
      "Remera clásica para niños. 100% algodón, cómoda y resistente. Ideal para uniformes, eventos y marcas infantiles.",
    features: [
      "100% algodón",
      "Corte clásico",
      "Colores variados",
      "Ideal para serigrafía y DTF",
    ],
    colors: [
      "Amarillo",
      "Azul",
      "Azul Francia",
      "Blanco",
      "Gris",
      "Negro",
      "Verde",
    ],
    colorImages: {
      "Amarillo": "/networkcapital/productos/remera-clasica-nino-amarillo-frente.jpg",
      "Azul": "/networkcapital/productos/remera-clasica-nino-azul-frente.jpg",
      "Azul Francia": "/networkcapital/productos/remera-clasica-nino-azul-francia-frente.jpg",
      "Blanco": "/networkcapital/productos/remera-clasica-nino-blanco-frente.jpg",
      "Gris": "/networkcapital/productos/remera-clasica-nino-gris-frente.jpg",
      "Negro": "/networkcapital/productos/remera-clasica-nino-negro-frente.jpg",
      "Verde": "/networkcapital/productos/remera-clasica-nino-verde-frente.jpg",
    },
    minQty: 10,
    weight: "160g",
    composition: "100% algodón",
    sizes: REMERA_SIZES,
    sizeTable: REMERA_SIZE_TABLE,
    priceWithPrint: REMERA_CLASICA_PRICE_WITH,
    priceWithoutPrint: REMERA_CLASICA_PRICE_WITHOUT,
  },
  {
    id: "canguro-nino",
    name: "Canguro Niño",
    category: "Niños",
    priceFrom: 690,
    image: "/networkcapital/productos/canguro-nino-negro-frente.jpg",
    description:
      "Canguro clásico para niños. Cálido, con bolsillo delantero y capucha. Ideal para uniformes y marcas infantiles.",
    features: [
      "Felpa suave",
      "Capucha y bolsillo",
      "Colores variados",
      "Ideal para serigrafía y DTF",
    ],
    colors: [
      "Amarillo",
      "Arena",
      "Azul Francia",
      "Blanco",
      "Naranja",
      "Negro",
      "Rojo",
      "Rosa",
      "Verde",
    ],
    colorImages: {
      "Amarillo": "/networkcapital/productos/canguro-nino-amarillo-frente.jpg",
      "Arena": "/networkcapital/productos/canguro-nino-arena-frente.jpg",
      "Azul Francia": "/networkcapital/productos/canguro-nino-azul-francia-frente.jpg",
      "Blanco": "/networkcapital/productos/canguro-nino-blanco-frente.jpg",
      "Naranja": "/networkcapital/productos/canguro-nino-naranja-frente.jpg",
      "Negro": "/networkcapital/productos/canguro-nino-negro-frente.jpg",
      "Rojo": "/networkcapital/productos/canguro-nino-rojo-frente.jpg",
      "Rosa": "/networkcapital/productos/canguro-nino-rosa-frente.jpg",
      "Verde": "/networkcapital/productos/canguro-nino-verde-frente.jpg",
    },
    minQty: 10,
    weight: "260g",
    composition: "50% algodón · 50% poliéster",
    sizes: NINO_CANGURO_SIZES,
    sizeTable: NINO_CANGURO_SIZE_TABLE,
    priceWithPrint: NINO_CANGURO_PRICE_WITH,
    priceWithoutPrint: NINO_CANGURO_PRICE_WITHOUT,
  },
];
