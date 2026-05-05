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
  ctaUrl: string;
  heroImage: string;
  services: {
    title: string;
    desc: string;
    priceFrom: string;
    icon: string;
  }[];
  portfolio: {
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
    tagline: "Tu estilo, bordado y estampado a medida.",
    description:
      "Prendas personalizadas para equipos, empresas y eventos. Cotizá tu proyecto online y recibí tu presupuesto al instante.",
    phone: "+598 99 123 456",
    whatsapp: "59899123456",
    email: "hola@inkandthread.uy",
    address: "Mercedes 1011, Montevideo",
    hours: "Lun a Vie: 10:00 - 19:00",
    ctaUrl: "https://demo.quotixos.com",
    heroImage: "/mockups/polo-white-front.png",
    services: [
      { title: "Bordado computarizado", desc: "Hasta 12 colores. Ideal para logos corporativos y uniformes.", priceFrom: "$450", icon: "🧵" },
      { title: "Estampado DTF", desc: "Colores vibrantes y duraderos. Perfecto para poleras y merchandising.", priceFrom: "$320", icon: "🎨" },
      { title: "Sublimación full print", desc: "Diseños sin límites de color para prendas técnicas.", priceFrom: "$380", icon: "🔥" },
    ],
    portfolio: [
      { title: "Equipos deportivos", desc: "Uniformes completos con nombre y número.", icon: "⚽" },
      { title: "Eventos corporativos", desc: "Chombas y gorras con tu marca.", icon: "🏢" },
      { title: "Merchandising", desc: "Bolsas, remeras y accesorios personalizados.", icon: "🛍️" },
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
      "Desde 2015 bordando y estampando para negocios, clubes y celebraciones. Cotizá tu proyecto online sin compromiso.",
    phone: "+598 92 345 678",
    whatsapp: "59892345678",
    email: "info@estampadosdelsur.uy",
    address: "Av. Italia 2456, Montevideo",
    hours: "Lun a Sáb: 9:00 - 18:00",
    ctaUrl: "https://demo.quotixos.com",
    heroImage: "/mockups/polo-blue-front.png",
    services: [
      { title: "Serigrafía textil", desc: "La opción más económica para grandes cantidades.", priceFrom: "$180", icon: "🖨️" },
      { title: "Bordado directo", desc: "Acabado premium que dura años de lavados.", priceFrom: "$420", icon: "✂️" },
      { title: "DTF full color", desc: "Impresión digital directa sobre film. Sin mínimo de colores.", priceFrom: "$290", icon: "🌈" },
    ],
    portfolio: [
      { title: "Uniformes escolares", desc: "Logos institucionales bordados con calidad.", icon: "🎓" },
      { title: "Fiestas y celebraciones", desc: "Remeras temáticas para despedidas y cumpleaños.", icon: "🎉" },
      { title: "Negocios locales", desc: "Delantales, gorras y uniformes de trabajo.", icon: "🏪" },
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
    tagline: "Tu equipo. Tu marca. Tu estilo.",
    description:
      "Especialistas en bordado para equipos deportivos y merchandising de eventos. Cotizá tu proyecto online y recibí en 48hs.",
    phone: "+598 93 456 789",
    whatsapp: "59893456789",
    email: "pedidos@bordadopro.uy",
    address: "18 de Julio 1800, Local 12, Montevideo",
    hours: "Lun a Vie: 9:00 - 20:00",
    ctaUrl: "https://demo.quotixos.com",
    heroImage: "/mockups/polo-black-front.png",
    services: [
      { title: "Bordado 3D / Puff", desc: "Efecto volumétrico ideal para gorras y chaquetas.", priceFrom: "$650", icon: "🏆" },
      { title: "Estampado DTF", desc: "Full color sobre cualquier tela. Sin mínimo de unidades.", priceFrom: "$350", icon: "🔥" },
      { title: "Packaging personalizado", desc: "Bolsas, etiquetas y stickers con tu marca.", priceFrom: "$120", icon: "📦" },
    ],
    portfolio: [
      { title: "Equipos de fútbol", desc: "Camisetas técnicas con nombre, número y escudo.", icon: "⚽" },
      { title: "Torneos y ligas", desc: "Kits completos para jugadores y árbitros.", icon: "🏆" },
      { title: "Gimnasios y crossfit", desc: "Indumentaria deportiva de alto rendimiento.", icon: "💪" },
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
      "Taller de bordado y estampado boutique. Trabajamos con marcas que buscan diferenciarse. Cotizá tu proyecto online.",
    phone: "+598 94 567 890",
    whatsapp: "59894567890",
    email: "hello@lafabrica.uy",
    address: "José Ellauri 450, Punta Carretas",
    hours: "Mar a Sáb: 11:00 - 18:00",
    ctaUrl: "https://demo.quotixos.com",
    heroImage: "/mockups/polo-white-front.png",
    services: [
      { title: "Bordado a mano", desc: "Puntada por puntada. Piezas únicas con acabado artesanal.", priceFrom: "$1.200", icon: "🪡" },
      { title: "DTF alta resolución", desc: "Impresión fotográfica sobre textil. Detalle máximo.", priceFrom: "$480", icon: "📸" },
      { title: "Diseño gráfico", desc: "Si no tenés logo, lo creamos. Incluye mockup digital.", priceFrom: "$800", icon: "✏️" },
    ],
    portfolio: [
      { title: "Marcas de moda", desc: "Etiquetas interiores y parches personalizados.", icon: "👕" },
      { title: "Restaurantes y bares", desc: "Delantales, servilletas y uniformes de cocina.", icon: "🍽️" },
      { title: "Startups y agencias", desc: "Welcome kits para onboarding de equipos.", icon: "🚀" },
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
