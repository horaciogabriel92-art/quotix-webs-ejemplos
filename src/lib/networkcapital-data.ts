export const BRAND = {
  name: "Network Capital",
  slogan: "Emprendé con estilo",
  subtitle: "Venta por mayor · Hecho en Uruguay",
  whatsapp: "59898133523",
  phone: "+598 98 133 523",
  email: "networkcapital@quotixos.com",
  instagram: "@networkcapital.uy",
  ctaUrl: "https://networkcapital.quotixos.com",
  minOrder: 15,
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

export interface Product {
  id: string;
  name: string;
  category: string;
  priceFrom: number;
  image: string;
  description: string;
  features: string[];
  colors: string[];
  minQty: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "remera-stone-wash-negra",
    name: "Remera Stone Wash Negra",
    category: "Remeras",
    priceFrom: 450,
    image: "/networkcapital/productos/remera stone wash negro.jpeg",
    description:
      "Remera oversize con lavado stone wash. 100% algodón peinado 240gr. Cuello reforzado. Ideal para estampado DTF y serigrafía.",
    features: [
      "100% algodón 240gr",
      "Lavado stone wash",
      "Cuello reforzado",
      "Disponible XS al 2XL",
    ],
    colors: ["Negro", "Gris", "Verde", "Marrón"],
    minQty: 15,
  },
  {
    id: "remera-stone-wash-gris-mujer",
    name: "Remera Stone Wash Gris Mujer",
    category: "Remeras",
    priceFrom: 450,
    image: "/networkcapital/productos/remera stone wash gris - mujer.jpeg",
    description:
      "Corte unisex ajustado. Misma calidad stone wash 240gr. Perfecta para marcas de streetwear y lifestyle.",
    features: [
      "Corte unisex",
      "240gr algodón",
      "Lavado enzimático",
      "Tallas XS al XL",
    ],
    colors: ["Gris", "Negro", "Verde"],
    minQty: 15,
  },
  {
    id: "remera-stone-wash-verde",
    name: "Remera Stone Wash Verde",
    category: "Remeras",
    priceFrom: 450,
    image: "/networkcapital/productos/remera stone wash verde-hombre.jpeg",
    description:
      "Edición en verde bosque. Ideal para lanzamientos exclusivos y colecciones limitadas.",
    features: [
      "Color exclusivo verde bosque",
      "240gr algodón",
      "Oversize fit",
      "Disponible por pedido",
    ],
    colors: ["Verde bosque", "Negro", "Gris"],
    minQty: 15,
  },
  {
    id: "canguro-clasico-negro",
    name: "Canguro Clásico Negro",
    category: "Canguros",
    priceFrom: 890,
    image: "/networkcapital/productos/canguro clasico negro.jpeg",
    description:
      "Canguro clásico con bolsillo delantero. Frisa invisible 300gr. Capucha doble. El favorito para el invierno.",
    features: [
      "Frisa invisible 300gr",
      "Capucha doble",
      "Puños y cintura ribb",
      "Negro / Azul / Verde",
    ],
    colors: ["Negro", "Azul marino", "Verde bosque", "Rosa pastel"],
    minQty: 15,
  },
  {
    id: "canguro-oversize-negro",
    name: "Canguro Oversize Negro",
    category: "Canguros",
    priceFrom: 950,
    image: "/networkcapital/productos/cangruo oversize negro.jpeg",
    description:
      "Fit oversize con caída ancha. Ideal para estampados grandes en pecho y espalda. Look urbano garantizado.",
    features: [
      "Fit oversize",
      "300gr frisa",
      "Espacio amplio para estampado",
      "Negro / Beige / Stone wash",
    ],
    colors: ["Negro", "Beige", "Stone wash"],
    minQty: 15,
  },
  {
    id: "buzo-medio-cierre-negro",
    name: "Buzo Medio Cierre Negro",
    category: "Buzos",
    priceFrom: 950,
    image: "/networkcapital/productos/buzo medio cierre negro.jpeg",
    description:
      "Buzo con cierre medio (quarter zip). Estilo deportivo y urbano. Ideal para marcas de skate y streetwear.",
    features: [
      "Cierre medio YKK",
      "300gr frisa",
      "Cuello alto",
      "Negro / Gris / Azul",
    ],
    colors: ["Negro", "Gris", "Azul"],
    minQty: 15,
  },
  {
    id: "campera-neopreno-negro",
    name: "Campera Neopreno Negro",
    category: "Camperas",
    priceFrom: 1200,
    image: "/networkcapital/productos/campera de neopreno negro.jpeg",
    description:
      "Campera técnica en neopreno. Corte slim fit. Ideal para looks deportivos y urbanos de alta gama.",
    features: [
      "Neopreno técnico",
      "Corte slim fit",
      "Cierre YKK",
      "Negro / Mujer y hombre",
    ],
    colors: ["Negro"],
    minQty: 15,
  },
  {
    id: "canguro-clasico-verde",
    name: "Canguro Clásico Verde Bosque",
    category: "Canguros",
    priceFrom: 890,
    image: "/networkcapital/productos/canguro clasico verde bosque.jpeg",
    description:
      "Mismo canguro clásico en color verde bosque. Ideal para marcas con paletas de color naturales y orgánicas.",
    features: [
      "Color verde bosque exclusivo",
      "300gr frisa",
      "Capucha doble",
      "Edición limitada",
    ],
    colors: ["Verde bosque", "Negro", "Azul"],
    minQty: 15,
  },
];
