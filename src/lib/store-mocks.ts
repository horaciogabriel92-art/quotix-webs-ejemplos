export interface StoreMock {
  id: number;
  name: string;
  logoText: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  products: {
    name: string;
    priceFrom: string;
    image: string;
    tag?: string;
  }[];
  services: {
    title: string;
    desc: string;
    icon: string;
  }[];
  colors: {
    primary: string;
    primaryHover: string;
    bg: string;
    cardBg: string;
    text: string;
    textMuted: string;
    border: string;
    accent: string;
    ctaBg: string;
    ctaText: string;
    heroGradientFrom: string;
    heroGradientTo: string;
  };
}

export const stores: StoreMock[] = [
  {
    id: 1,
    name: "Ink & Thread",
    logoText: "Ink & Thread",
    tagline: "Tu estilo, bordado y estampado.",
    description:
      "Prendas personalizadas para equipos, empresas y eventos. Elegí, subí tu diseño y te lo preparamos.",
    phone: "+598 99 123 456",
    whatsapp: "59899123456",
    email: "hola@inkandthread.uy",
    address: "Mercedes 1011, Montevideo",
    hours: "Lun a Vie: 10:00 - 19:00",
    products: [
      { name: "Polo clásico bordado", priceFrom: "$890", image: "/mockups/polo-white-front.png", tag: "Más vendido" },
      { name: "Polo premium", priceFrom: "$1.190", image: "/mockups/polo-blue-front.png" },
      { name: "Polo negro estampado", priceFrom: "$990", image: "/mockups/polo-black-front.png", tag: "Nuevo" },
    ],
    services: [
      { title: "Bordado computarizado", desc: "Hasta 12 colores. Ideal para logos corporativos y uniformes.", icon: "🧵" },
      { title: "Estampado DTF", desc: "Colores vibrantes y duraderos. Perfecto para poleras y merchandising.", icon: "🎨" },
      { title: "Sublimación", desc: "Diseños sin límites de color para prendas técnicas.", icon: "🔥" },
    ],
    colors: {
      primary: "#0ea5e9",
      primaryHover: "#0284c7",
      bg: "#0f172a",
      cardBg: "rgba(255,255,255,0.05)",
      text: "#ffffff",
      textMuted: "#94a3b8",
      border: "rgba(255,255,255,0.1)",
      accent: "#22d3ee",
      ctaBg: "#22d3ee",
      ctaText: "#0f172a",
      heroGradientFrom: "rgba(14,165,233,0.15)",
      heroGradientTo: "rgba(34,211,238,0.05)",
    },
  },
  {
    id: 2,
    name: "Estampados del Sur",
    logoText: "Estampados del Sur",
    tagline: "Calidad que se nota, precio que cierra.",
    description:
      "Desde 2015 estampando y bordando para negocios, clubes y celebraciones. Presupuesto sin compromiso.",
    phone: "+598 92 345 678",
    whatsapp: "59892345678",
    email: "info@estampadosdelsur.uy",
    address: "Av. Italia 2456, Montevideo",
    hours: "Lun a Sáb: 9:00 - 18:00",
    products: [
      { name: "Polo corporativo", priceFrom: "$750", image: "/mockups/polo-blue-front.png", tag: "Oferta" },
      { name: "Polo deportivo", priceFrom: "$920", image: "/mockups/polo-white-front.png" },
      { name: "Polo eventos", priceFrom: "$850", image: "/mockups/polo-black-front.png", tag: "Personalizable" },
    ],
    services: [
      { title: "Serigrafía textil", desc: "La opción más económica para grandes cantidades.", icon: "🖨️" },
      { title: "Bordado directo", desc: "Acabado premium que dura años de lavados.", icon: "✂️" },
      { title: "DTF full color", desc: "Impresión digital directa sobre film. Sin mínimo de colores.", icon: "🌈" },
    ],
    colors: {
      primary: "#ea580c",
      primaryHover: "#c2410c",
      bg: "#ffffff",
      cardBg: "#f8fafc",
      text: "#1e293b",
      textMuted: "#64748b",
      border: "#e2e8f0",
      accent: "#f97316",
      ctaBg: "#ea580c",
      ctaText: "#ffffff",
      heroGradientFrom: "#fff7ed",
      heroGradientTo: "#ffffff",
    },
  },
  {
    id: 3,
    name: "Bordado Pro",
    logoText: "Bordado Pro",
    tagline: "TU EQUIPO. TU MARCA. TU ESTILO.",
    description:
      "Especialistas en bordado para equipos deportivos y merchandising de eventos. Cotizá online y recibí en 48hs.",
    phone: "+598 93 456 789",
    whatsapp: "59893456789",
    email: "pedidos@bordadopro.uy",
    address: "18 de Julio 1800, Local 12, Montevideo",
    hours: "Lun a Vie: 9:00 - 20:00",
    products: [
      { name: "Camiseta técnica", priceFrom: "$1.290", image: "/mockups/polo-black-front.png", tag: "TOP" },
      { name: "Polo entrenamiento", priceFrom: "$1.050", image: "/mockups/polo-white-front.png" },
      { name: "Chomba deportiva", priceFrom: "$1.450", image: "/mockups/polo-blue-front.png", tag: "NUEVO" },
    ],
    services: [
      { title: "BORDADO 3D / PUFF", desc: "Efecto volumétrico ideal para gorras y chaquetas.", icon: "🏆" },
      { title: "ESTAMPADO DTF", desc: "Full color sobre cualquier tela. Sin mínimo de unidades.", icon: "🔥" },
      { title: "PACKAGING PERSONALIZADO", desc: "Bolsas, etiquetas y stickers con tu marca.", icon: "📦" },
    ],
    colors: {
      primary: "#059669",
      primaryHover: "#047857",
      bg: "#064e3b",
      cardBg: "rgba(255,255,255,0.08)",
      text: "#ffffff",
      textMuted: "#a7f3d0",
      border: "rgba(255,255,255,0.15)",
      accent: "#34d399",
      ctaBg: "#34d399",
      ctaText: "#064e3b",
      heroGradientFrom: "#065f46",
      heroGradientTo: "#064e3b",
    },
  },
  {
    id: 4,
    name: "La Fábrica del Logo",
    logoText: "La Fábrica del Logo",
    tagline: "Donde tu diseño cobra vida.",
    description:
      "Taller de bordado y estampado boutique. Trabajamos con marcas que buscan diferenciarse. Turnos programados.",
    phone: "+598 94 567 890",
    whatsapp: "59894567890",
    email: "hello@lafabrica.uy",
    address: "José Ellauri 450, Punta Carretas",
    hours: "Mar a Sáb: 11:00 - 18:00",
    products: [
      { name: "Polo artisan", priceFrom: "$1.590", image: "/mockups/polo-white-front.png", tag: "Edición limitada" },
      { name: "Polo minimal", priceFrom: "$1.390", image: "/mockups/polo-black-front.png" },
      { name: "Polo heritage", priceFrom: "$1.790", image: "/mockups/polo-blue-front.png", tag: "Premium" },
    ],
    services: [
      { title: "Bordado a mano", desc: "Puntada por puntada. Piezas únicas con acabado artesanal.", icon: "🪡" },
      { title: "DTF de alta resolución", desc: "Impresión fotográfica sobre textil. Detalle máximo.", icon: "📸" },
      { title: "Diseño gráfico", desc: "Si no tenés logo, lo creamos. Incluye mockup digital.", icon: "✏️" },
    ],
    colors: {
      primary: "#18181b",
      primaryHover: "#27272a",
      bg: "#fafaf9",
      cardBg: "#ffffff",
      text: "#18181b",
      textMuted: "#a1a1aa",
      border: "#e4e4e7",
      accent: "#d4d4d8",
      ctaBg: "#18181b",
      ctaText: "#ffffff",
      heroGradientFrom: "#f5f5f4",
      heroGradientTo: "#fafaf9",
    },
  },
];
