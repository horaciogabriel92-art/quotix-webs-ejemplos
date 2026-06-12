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
}

export const PROMOS: Promo[] = [
  {
    id: "promo-over-amarilla",
    title: "Remera Over",
    subtitle: "Corte amplio y moderno, ideal para estampados grandes.",
    image: "/networkcapital/productos/promo remere over sin fondo.png",
    ctaText: "Consultar por WhatsApp",
    productLink: "/networkcapital/remeras",
  },
  {
    id: "promo-canguro-oversize",
    title: "Canguro Oversize",
    subtitle: "Abrigo oversize perfecto para tu marca. Negro clásico.",
    image: "/networkcapital/productos/promo canguro oversize negro sin fondo.png",
    ctaText: "Consultar por WhatsApp",
    productLink: "/networkcapital/canguros",
  },
  {
    id: "promo-stone-wash-gris",
    title: "Remera Stone Wash",
    subtitle: "Look vintage desgastado. Ideal para serigrafía y DTF.",
    image: "/networkcapital/productos/promo remera stone wash gris sin fondo.png",
    ctaText: "Consultar por WhatsApp",
    productLink: "/networkcapital/remeras",
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
  { qty: 10, label: "10+", price: 370 },
  { qty: 20, label: "20+", price: 350 },
  { qty: 30, label: "30+", price: 330 },
];
const REMERA_STONE_WASH_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 270 },
  { qty: 20, label: "20+", price: 240 },
  { qty: 30, label: "30+", price: 220 },
];

const REMERA_OVERSIZE_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 390 },
  { qty: 20, label: "20+", price: 370 },
  { qty: 30, label: "30+", price: 350 },
];
const REMERA_OVERSIZE_PRICE_WITHOUT: PriceTier[] = [
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

const BUZO_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 590 },
  { qty: 20, label: "20+", price: 560 },
  { qty: 30, label: "30+", price: 530 },
];
const BUZO_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 490 },
  { qty: 20, label: "20+", price: 460 },
  { qty: 30, label: "30+", price: 430 },
];

const CAMPERA_SIZES = ["S", "M", "L", "XL", "XXL"];
const CAMPERA_SIZE_TABLE: SizeRow[] = [
  { size: "S", largo: 68, ancho: 54, manga: 60 },
  { size: "M", largo: 71, ancho: 58, manga: 62 },
  { size: "L", largo: 74, ancho: 62, manga: 64 },
  { size: "XL", largo: 77, ancho: 66, manga: 66 },
  { size: "XXL", largo: 80, ancho: 70, manga: 68 },
];

const CAMPERA_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 890 },
  { qty: 20, label: "20+", price: 850 },
  { qty: 30, label: "30+", price: 820 },
];
const CAMPERA_PRICE_WITHOUT: PriceTier[] = [
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

const CANGURO_PRICE_WITH: PriceTier[] = [
  { qty: 10, label: "10+", price: 590 },
  { qty: 20, label: "20+", price: 560 },
  { qty: 30, label: "30+", price: 530 },
];
const CANGURO_PRICE_WITHOUT: PriceTier[] = [
  { qty: 10, label: "10+", price: 490 },
  { qty: 20, label: "20+", price: 460 },
  { qty: 30, label: "30+", price: 430 },
];

export const PRODUCTS: Product[] = [
  // ─────────────────────────── REMERAS ───────────────────────────
  {
    id: "remera-oversize",
    name: "Remera Oversize",
    category: "Remeras",
    priceFrom: 350,
    image: "/networkcapital/productos/over amarillo frente.jpg",
    description:
      "Remera oversize unisex. Estilo amplio y moderno, perfecta para estampados grandes. Disponible en varios colores.",
    features: [
      "100% algodón",
      "Corte oversize",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Amarillo", "Arena", "Blanco", "Negro"],
    colorImages: {
      "Amarillo": "/networkcapital/productos/over amarillo frente.jpg",
      "Arena": "/networkcapital/productos/remera oversize arena mujer.png",
      "Blanco": "/networkcapital/productos/remera oversize blanco mujer.png",
      "Negro": "/networkcapital/productos/remera oversize negro mujer.png",
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
    priceFrom: 270,
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
    priceFrom: 490,
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
    priceWithPrint: BUZO_PRICE_WITH,
    priceWithoutPrint: BUZO_PRICE_WITHOUT,
  },

  // ─────────────────────────── CAMPERAS ───────────────────────────
  {
    id: "campera-neopreno-mujer",
    name: "Campera Neopreno Mujer",
    category: "Camperas",
    priceFrom: 790,
    image: "/networkcapital/productos/campera neopreno negra mujer frente.jpg",
    description:
      "Campera de neopreno corte mujer. Moderna, abrigada y perfecta para personalizar con serigrafía o DTF.",
    features: [
      "Neopreno",
      "Abrigada",
      "Corte mujer",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Negro"],
    minQty: 10,
    weight: "400g",
    composition: "Neopreno",
    sizes: CAMPERA_SIZES,
    sizeTable: CAMPERA_SIZE_TABLE,
    priceWithPrint: CAMPERA_PRICE_WITH,
    priceWithoutPrint: CAMPERA_PRICE_WITHOUT,
  },
  {
    id: "campera-capitoneada",
    name: "Campera Capitoneada",
    category: "Camperas",
    priceFrom: 790,
    image: "/networkcapital/productos/campera capitoneada negro.jpeg",
    description:
      "Campera capitoneada unisex. Abrigo ideal para personalizar con serigrafía o DTF. Calidad premium.",
    features: [
      "Capitoneada",
      "Abrigada",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Negro"],
    minQty: 10,
    weight: "350g",
    composition: "100% poliéster",
    sizes: CAMPERA_SIZES,
    sizeTable: CAMPERA_SIZE_TABLE,
    priceWithPrint: CAMPERA_PRICE_WITH,
    priceWithoutPrint: CAMPERA_PRICE_WITHOUT,
  },
  {
    id: "campera-neopreno-hombre",
    name: "Campera Neopreno Hombre",
    category: "Camperas",
    priceFrom: 790,
    image: "/networkcapital/productos/campera de neopreno negro.jpeg",
    description:
      "Campera de neopreno corte hombre. Moderna, abrigada y perfecta para personalizar con serigrafía o DTF.",
    features: [
      "Neopreno",
      "Abrigada",
      "Corte hombre",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Negro"],
    minQty: 10,
    weight: "400g",
    composition: "Neopreno",
    sizes: CAMPERA_SIZES,
    sizeTable: CAMPERA_SIZE_TABLE,
    priceWithPrint: CAMPERA_PRICE_WITH,
    priceWithoutPrint: CAMPERA_PRICE_WITHOUT,
  },

  // ─────────────────────────── CANGUROS ───────────────────────────
  {
    id: "canguro-oversize",
    name: "Canguro Oversize",
    category: "Canguros",
    priceFrom: 520,
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
    priceWithPrint: CANGURO_PRICE_WITH,
    priceWithoutPrint: CANGURO_PRICE_WITHOUT,
  },
  {
    id: "canguro-clasico",
    name: "Canguro Clásico",
    category: "Canguros",
    priceFrom: 490,
    image: "/networkcapital/productos/canguro clasico arena.jpeg",
    description:
      "Canguro clásico unisex. Cómodo, con bolsillo delantero y capucha. Ideal para serigrafía y DTF. Disponible en varios colores.",
    features: [
      "Bolsillo delantero",
      "Capucha",
      "Unisex",
      "Ideal para serigrafía y DTF",
    ],
    colors: ["Arena", "Azul", "Francia", "Negro", "Rosa Pastel", "Verde Bosque"],
    colorImages: {
      "Arena": "/networkcapital/productos/canguro clasico arena.jpeg",
      "Azul": "/networkcapital/productos/canguro clasico azul hombre.jpeg",
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
    priceWithPrint: CANGURO_PRICE_WITH,
    priceWithoutPrint: CANGURO_PRICE_WITHOUT,
  },
  {
    id: "canguro-con-cierre",
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
    priceWithPrint: CANGURO_PRICE_WITH,
    priceWithoutPrint: CANGURO_PRICE_WITHOUT,
  },
];
