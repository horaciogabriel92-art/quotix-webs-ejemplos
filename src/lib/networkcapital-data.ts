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
  ctaUrl: "https://networkcapital.quotixos.com",
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

export const PRODUCTS: Product[] = [
  {
    id: "remera-clasica-liviano",
    name: "Remera Clásica Peso Liviano",
    category: "Remeras",
    priceFrom: 270,
    image: "/networkcapital/productos/remera stone wash negro.jpeg",
    description:
      "Remera clásica de peso liviano, cómoda y versátil para el uso diario. Ideal para estampar y revender. Corte clásico, colores premium.",
    features: [
      "170g · 100% algodón",
      "Corte clásico",
      "Colores premium",
      "Ideal para estampar",
    ],
    colors: [
      "Negro", "Blanco", "Marino", "Gris", "Carbón", "Beige", "Arena",
      "Bosque", "Olivo", "Rojo", "Marrón", "Rosa", "Fucsia", "Celeste",
      "Lila", "Amarillo", "Mostaza", "Coral", "Lavanda", "Verde", "Militar",
    ],
    minQty: 10,
    weight: "170g",
    composition: "100% algodón",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    sizeTable: [
      { size: "S", largo: 70, ancho: 46 },
      { size: "M", largo: 73, ancho: 51 },
      { size: "L", largo: 76, ancho: 56 },
      { size: "XL", largo: 78, ancho: 61 },
      { size: "XXL", largo: 81, ancho: 66 },
      { size: "XXXL", largo: 83, ancho: 71 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 370 },
      { qty: 20, label: "20+", price: 350 },
      { qty: 30, label: "30+", price: 330 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 270 },
      { qty: 20, label: "20+", price: 240 },
      { qty: 30, label: "30+", price: 220 },
    ],
    details: [
      "Costuras resistentes · acabados premium",
      "Algodón 100% · suave y respirable",
      "Terminaciones de calidad · hechas para durar",
    ],
  },
  {
    id: "remera-clasica-completo",
    name: "Remera Clásica Peso Completo",
    category: "Remeras",
    priceFrom: 290,
    image: "/networkcapital/productos/remera stone wash gris - mujer.jpeg",
    description:
      "Calidad premium / corte clásico. 100% algodón 24/1 200g. Algodón suave y respirable. Estampa incluida. Alta durabilidad.",
    features: [
      "200g · 100% algodón 24/1",
      "Estampa incluida",
      "Alta durabilidad",
      "Colores premium",
    ],
    colors: [
      "Negro", "Blanco", "Marino", "Gris", "Carbón", "Beige", "Arena",
      "Bosque", "Olivo", "Rojo", "Marrón", "Rosa", "Fucsia", "Celeste",
      "Lila", "Amarillo", "Mostaza", "Coral", "Lavanda", "Verde", "Militar",
    ],
    minQty: 10,
    weight: "200g",
    composition: "100% algodón 24/1",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    sizeTable: [
      { size: "S", largo: 70, ancho: 46 },
      { size: "M", largo: 73, ancho: 51 },
      { size: "L", largo: 76, ancho: 56 },
      { size: "XL", largo: 78, ancho: 61 },
      { size: "XXL", largo: 81, ancho: 66 },
      { size: "XXXL", largo: 83, ancho: 71 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 390 },
      { qty: 20, label: "20+", price: 370 },
      { qty: 30, label: "30+", price: 350 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 290 },
      { qty: 20, label: "20+", price: 270 },
      { qty: 30, label: "30+", price: 250 },
    ],
    details: [
      "Costuras resistentes · acabados premium",
      "Algodón 100% · suave y respirable",
      "Terminaciones de calidad · hechas para durar",
    ],
  },
  {
    id: "remera-oversize",
    name: "Remera Oversize",
    category: "Remeras",
    priceFrom: 350,
    image: "/networkcapital/productos/remera stone wash verde-hombre.jpeg",
    description:
      "Corte amplio · manga corta · estilo urbano. Remera oversize confeccionada en algodón premium de 200g. Cómoda, resistente y con una caída perfecta que marca tendencia.",
    features: [
      "200g · algodón premium",
      "Corte amplio · caída perfecta",
      "Costuras reforzadas",
      "Cuello reforzado",
    ],
    colors: ["Negro", "Blanco", "Gris Carbón", "Beige", "Crudo", "Verde Militar", "Marino", "Marrón", "Rojo"],
    minQty: 10,
    weight: "200g",
    composition: "100% algodón premium",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "S", largo: 72, ancho: 58, manga: 24 },
      { size: "M", largo: 74, ancho: 60, manga: 25 },
      { size: "L", largo: 76, ancho: 62, manga: 26 },
      { size: "XL", largo: 78, ancho: 64, manga: 27 },
      { size: "XXL", largo: 80, ancho: 66, manga: 28 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 490 },
      { qty: 20, label: "20+", price: 470 },
      { qty: 30, label: "30+", price: 450 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 350 },
      { qty: 20, label: "20+", price: 330 },
      { qty: 30, label: "30+", price: 310 },
    ],
    stampIdeas: ["Gráficos grandes pecho", "Logo espalda completa", "Estampa manga"],
  },
  {
    id: "remera-stonewash-oversize",
    name: "Remera Stonewash Oversize",
    category: "Remeras",
    priceFrom: 490,
    image: "/networkcapital/productos/remera stone wash negro.jpeg",
    description:
      "Calce amplio, actitud real. Remera oversize stonewash de 260g, heavy feel, con presencia y estilo. Cada prenda tiene un lavado único que le da un efecto vintage inigualable.",
    features: [
      "260g · 100% algodón",
      "Efecto vintage stonewash",
      "Corte oversize unisex",
      "Colores stonewash",
    ],
    colors: ["Negro", "Gris", "Marrón", "Verde", "Beige"],
    minQty: 10,
    weight: "260g",
    composition: "100% algodón",
    sizes: ["S", "M", "L", "XL"],
    sizeTable: [
      { size: "S", largo: 55, ancho: 74 },
      { size: "M", largo: 56, ancho: 76 },
      { size: "L", largo: 58, ancho: 78 },
      { size: "XL", largo: 60, ancho: 80 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 590 },
      { qty: 20, label: "20+", price: 570 },
      { qty: 30, label: "30+", price: 550 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 490 },
      { qty: 20, label: "20+", price: 470 },
      { qty: 30, label: "30+", price: 450 },
    ],
    stampIdeas: ["Diseño vintage pecho", "Logo desgastado", "Gráfico espalda"],
  },
  {
    id: "remera-stonewash-clasica",
    name: "Remera Stonewash Clásica",
    category: "Remeras",
    priceFrom: 390,
    image: "/networkcapital/productos/remera stone wash verde-hombre.jpeg",
    description:
      "Remeras clásicas stonewash confeccionadas en algodón premium de 200g. Suavidad, resistencia y estilo vintage para el día a día.",
    features: [
      "200g · algodón premium",
      "Acabado stonewash suave al toque",
      "Costuras reforzadas",
      "Cuello clásico y resistente",
    ],
    colors: ["Violeta", "Verde", "Naranja", "Limón", "Azul"],
    minQty: 10,
    weight: "200g",
    composition: "100% algodón premium",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "S", largo: 68, ancho: 49, manga: 20 },
      { size: "M", largo: 70, ancho: 52, manga: 21 },
      { size: "L", largo: 72, ancho: 55, manga: 22 },
      { size: "XL", largo: 74, ancho: 58, manga: 23 },
      { size: "XXL", largo: 76, ancho: 61, manga: 24 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 490 },
      { qty: 20, label: "20+", price: 470 },
      { qty: 30, label: "30+", price: 450 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 390 },
      { qty: 20, label: "20+", price: 370 },
      { qty: 30, label: "30+", price: 350 },
    ],
    stampIdeas: ["Logo circular", "Estampa espalda", "Diseño frente y espalda"],
  },
  {
    id: "boxy-crop-stonewash",
    name: "Boxy Crop Stonewash",
    category: "Remeras",
    priceFrom: 490,
    image: "/networkcapital/productos/remera stone wash gris - mujer.jpeg",
    description:
      "Fit relajado. Estilo real. Remera boxy crop stonewash. Cómoda, moderna y con actitud. Corte cropped para ella.",
    features: [
      "260g · premium cotton",
      "Corte cropped",
      "100% algodón",
      "Alta durabilidad",
    ],
    colors: ["Negro", "Gris", "Marrón", "Verde"],
    minQty: 10,
    weight: "260g",
    composition: "100% algodón",
    sizes: ["S", "M", "L", "XL"],
    sizeTable: [
      { size: "S", largo: 55, ancho: 74 },
      { size: "M", largo: 56, ancho: 76 },
      { size: "L", largo: 58, ancho: 78 },
      { size: "XL", largo: 60, ancho: 80 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 590 },
      { qty: 20, label: "20+", price: 570 },
      { qty: 30, label: "30+", price: 550 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 490 },
      { qty: 20, label: "20+", price: 470 },
      { qty: 30, label: "30+", price: 450 },
    ],
    stampIdeas: ["Florales", "Tipografía", "Gráficos coloridos"],
  },
  {
    id: "remera-boxy-fit",
    name: "Remera Boxy Fit",
    category: "Remeras",
    priceFrom: 350,
    image: "/networkcapital/productos/remera stone wash negro.jpeg",
    description:
      "Estilo. Comodidad. Actitud. Remera boxy fit confeccionada en algodón premium de 200g. Corte amplio, hombros caídos y calce recto. Ideal para un look relaxed y urbano.",
    features: [
      "200g · algodón premium",
      "Corte boxy fit · hombros caídos",
      "Calce recto",
      "Mayor comodidad",
    ],
    colors: ["Negro", "Arena", "Celeste"],
    minQty: 10,
    weight: "200g",
    composition: "100% algodón premium",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "S", largo: 68, ancho: 58, manga: 21 },
      { size: "M", largo: 70, ancho: 60, manga: 22 },
      { size: "L", largo: 72, ancho: 62, manga: 23 },
      { size: "XL", largo: 74, ancho: 64, manga: 24 },
      { size: "XXL", largo: 76, ancho: 66, manga: 25 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 490 },
      { qty: 20, label: "20+", price: 470 },
      { qty: 30, label: "30+", price: 450 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 350 },
      { qty: 20, label: "20+", price: 330 },
      { qty: 30, label: "30+", price: 310 },
    ],
    stampIdeas: ["Minimalista pecho", "Gráfico grande espalda", "Tipografía"],
  },
  {
    id: "camiseta-manga-larga",
    name: "Camiseta a la Base Manga Larga",
    category: "Remeras",
    priceFrom: 450,
    image: "/networkcapital/productos/canguro clasico negro.jpeg",
    description:
      "Liviana, cómoda y resistente. Camiseta a la base manga larga ideal para el uso diario. Confeccionada con una mezcla de algodón y poliéster que brinda suavidad, durabilidad y libertad de movimiento.",
    features: [
      "200g/m² · 90% algodón 10% poliéster",
      "Corte clásico y versátil",
      "Tela respirable y liviana",
      "12 diseños exclusivos disponibles",
    ],
    colors: [
      "Negro", "Blanco", "Gris Jaspe", "Azul Marino", "Arena",
      "Verde Militar", "Azul Rey", "Marino Oscuro", "Rojo",
      "Bordó", "Verde Botella", "Mostaza",
    ],
    minQty: 10,
    weight: "200g/m²",
    composition: "90% algodón · 10% poliéster",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "S", ancho: 46, largo: 70 },
      { size: "M", ancho: 51, largo: 73 },
      { size: "L", ancho: 56, largo: 76 },
      { size: "XL", ancho: 61, largo: 78 },
      { size: "XXL", ancho: 66, largo: 81 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 550 },
      { qty: 20, label: "20+", price: 530 },
      { qty: 30, label: "30+", price: 510 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 450 },
      { qty: 20, label: "20+", price: 430 },
      { qty: 30, label: "30+", price: 410 },
    ],
    stampIdeas: ["Life is Beautiful", "Adventure Awaits", "Good Vibes Only", "Tu diseño"],
  },
  {
    id: "dry-fit-manga-larga",
    name: "Camiseta Dry Fit Manga Larga",
    category: "Deportivo",
    priceFrom: 450,
    image: "/networkcapital/productos/buzo medio cierre negro.jpeg",
    description:
      "Liviana, cómoda y de alto rendimiento. Camiseta dry fit manga larga ideal para deporte, entrenamiento o uso diario. Tela respirable, de secado rápido y protección solar UPF 25+.",
    features: [
      "150g/m² · 100% poliéster",
      "UPF 25+ · bloqueo 96% rayos UVB",
      "Secado rápido",
      "Corte unisex",
    ],
    colors: ["Negro", "Azul Marino", "Gris", "Blanco", "Rojo"],
    minQty: 10,
    weight: "150g/m²",
    composition: "100% poliéster",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "S", ancho: 48, largo: 74 },
      { size: "M", ancho: 53, largo: 77 },
      { size: "L", ancho: 58, largo: 79 },
      { size: "XL", ancho: 63, largo: 82 },
      { size: "XXL", ancho: 68, largo: 85 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 550 },
      { qty: 20, label: "20+", price: 530 },
      { qty: 30, label: "30+", price: 510 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 450 },
      { qty: 20, label: "20+", price: 430 },
      { qty: 30, label: "30+", price: 410 },
    ],
  },
  {
    id: "dri-fit-texturada",
    name: "Dri-Fit Texturada",
    category: "Deportivo",
    priceFrom: 290,
    image: "/networkcapital/productos/canguro clasico verde bosque.jpeg",
    description:
      "Remeras DRI FIT texturadas, confeccionadas en tejido técnico que favorece la respirabilidad y el secado rápido. Ideales para entrenamiento, gimnasios, equipos deportivos y uso diario.",
    features: [
      "Tejido técnico texturado",
      "Respirable · secado rápido",
      "Liviana y cómoda",
      "Apta para estampa",
    ],
    colors: ["Azul", "Gris", "Blanco", "Negro", "Texturado"],
    minQty: 10,
    weight: "—",
    composition: "Tejido técnico",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "XS", largo: 66, ancho: 45 },
      { size: "S", largo: 68, ancho: 48 },
      { size: "M", largo: 70, ancho: 50 },
      { size: "L", largo: 74, ancho: 53 },
      { size: "XL", largo: 76, ancho: 57 },
      { size: "XXL", largo: 82, ancho: 60 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 390 },
      { qty: 20, label: "20+", price: 370 },
      { qty: 30, label: "30+", price: 360 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 290 },
      { qty: 20, label: "20+", price: 270 },
      { qty: 30, label: "30+", price: 250 },
    ],
  },
  {
    id: "dri-fit-lisa",
    name: "Dri-Fit Lisa",
    category: "Deportivo",
    priceFrom: 290,
    image: "/networkcapital/productos/canguro clasico negro.jpeg",
    description:
      "Remeras DRI FIT lisas, confeccionadas en tejido técnico liviano de secado rápido. Ideales para entrenamiento, gimnasios, equipos deportivos y uso diario.",
    features: [
      "100% poliéster",
      "Secado rápido",
      "Liviana y cómoda",
      "Apta para estampa",
    ],
    colors: ["Negro", "Azul Oscuro", "Blanco"],
    minQty: 10,
    weight: "—",
    composition: "100% poliéster",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "XS", largo: 66, ancho: 45 },
      { size: "S", largo: 68, ancho: 48 },
      { size: "M", largo: 70, ancho: 50 },
      { size: "L", largo: 74, ancho: 53 },
      { size: "XL", largo: 76, ancho: 57 },
      { size: "XXL", largo: 82, ancho: 60 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 390 },
      { qty: 20, label: "20+", price: 370 },
      { qty: 30, label: "30+", price: 360 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 290 },
      { qty: 20, label: "20+", price: 270 },
      { qty: 30, label: "30+", price: 250 },
    ],
  },
  {
    id: "polo-tshirt",
    name: "Polo T-Shirt",
    category: "Remeras",
    priceFrom: 590,
    image: "/networkcapital/productos/cangruo oversize negro.jpeg",
    description:
      "Remeras Polo, un clásico que equilibra lo formal y lo casual. El cuello y los botones aportan una presencia prolija, sin perder comodidad. Ideal para personalización de marcas y equipos.",
    features: [
      "100% algodón premium",
      "Cuello clásico con botones reforzados",
      "Corte moderno",
      "Tela suave y resistente",
    ],
    colors: ["Negro", "Azul Oscuro", "Blanco"],
    minQty: 10,
    weight: "—",
    composition: "100% algodón premium",
    sizes: ["S", "M", "L", "XL"],
    sizeTable: [
      { size: "S", largo: 69, ancho: 49 },
      { size: "M", largo: 71, ancho: 52 },
      { size: "L", largo: 74, ancho: 55 },
      { size: "XL", largo: 77, ancho: 58 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 690 },
      { qty: 20, label: "20+", price: 670 },
      { qty: 30, label: "30+", price: 650 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 590 },
      { qty: 20, label: "20+", price: 570 },
      { qty: 30, label: "30+", price: 550 },
    ],
  },
  {
    id: "buzo-base",
    name: "Buzo a la Base",
    category: "Buzos",
    priceFrom: 690,
    image: "/networkcapital/productos/buzo medio cierre negro.jpeg",
    description:
      "Comodidad · calidez · estilo urbano. Buzos cuello a la base, de corte clásico, con excelente calidad y terminación. Confeccionados en 50% algodón y 50% poliéster, con interior de felpa suave y abrigada.",
    features: [
      "Frisa premium 280gr",
      "50% algodón · 50% poliéster",
      "Interior felpa suave y abrigada",
      "Cuello a la base clásico",
    ],
    colors: ["Negro", "Azul Marino", "Blanco"],
    minQty: 10,
    weight: "280g",
    composition: "50% algodón · 50% poliéster",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "S", largo: 69, ancho: 51, manga: 61 },
      { size: "M", largo: 71, ancho: 56, manga: 62 },
      { size: "L", largo: 74, ancho: 61, manga: 63 },
      { size: "XL", largo: 76, ancho: 66, manga: 64 },
      { size: "XXL", largo: 79, ancho: 71, manga: 65 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 790 },
      { qty: 20, label: "20+", price: 770 },
      { qty: 30, label: "30+", price: 750 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 690 },
      { qty: 20, label: "20+", price: 670 },
      { qty: 30, label: "30+", price: 650 },
    ],
  },
  {
    id: "canguro-classic",
    name: "Canguro Classic",
    category: "Canguros",
    priceFrom: 790,
    image: "/networkcapital/productos/canguro clasico negro.jpeg",
    description:
      "Comodidad · calidez · estilo urbano. Canguro clásico confeccionado en frisa premium de 280gr. Suave, abrigado y resistente. Ideal para el día a día.",
    features: [
      "Frisa premium 280gr",
      "Capucha ajustable con cordones",
      "Bolsillo canguro amplio",
      "Puños y cintura en ribb",
    ],
    colors: [
      "Negro", "Negro Jaspe", "Gris Jaspe", "Blanco", "Arena",
      "Marrón", "Verde Bosque", "Marino", "Royal",
      "Rosa Pastel", "Lavanda", "Rojo",
    ],
    minQty: 10,
    weight: "280g",
    composition: "Frisa premium",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "S", largo: 69, ancho: 51, manga: 61 },
      { size: "M", largo: 71, ancho: 56, manga: 62 },
      { size: "L", largo: 74, ancho: 61, manga: 63 },
      { size: "XL", largo: 76, ancho: 66, manga: 64 },
      { size: "XXL", largo: 79, ancho: 71, manga: 65 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 890 },
      { qty: 20, label: "20+", price: 870 },
      { qty: 30, label: "30+", price: 850 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 790 },
      { qty: 20, label: "20+", price: 770 },
      { qty: 30, label: "30+", price: 750 },
    ],
  },
  {
    id: "canguro-oversize",
    name: "Canguro Oversize",
    category: "Canguros",
    priceFrom: 1090,
    image: "/networkcapital/productos/cangruo oversize negro.jpeg",
    description:
      "Comodidad · calidez · estilo urbano. Canguros oversize, de calce amplio para un look relajado y moderno. Confeccionados en 50% algodón y 50% poliéster, con interior de felpa suave y abrigada.",
    features: [
      "Frisa premium 280gr",
      "50% algodón · 50% poliéster",
      "Capucha doble capa",
      "Calce oversize",
    ],
    colors: ["Negro", "Negro Stone Wash", "Crudo"],
    minQty: 10,
    weight: "280g",
    composition: "50% algodón · 50% poliéster",
    sizes: ["S", "M", "L", "XL"],
    sizeTable: [
      { size: "S", ancho: 60, largo: 70, manga: 57 },
      { size: "M", ancho: 62, largo: 72, manga: 58 },
      { size: "L", ancho: 64, largo: 74, manga: 59 },
      { size: "XL", ancho: 66, largo: 76, manga: 60 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 1240 },
      { qty: 20, label: "20+", price: 1200 },
      { qty: 30, label: "30+", price: 1160 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 1090 },
      { qty: 20, label: "20+", price: 990 },
      { qty: 30, label: "30+", price: 970 },
    ],
  },
  {
    id: "buzo-medio-cierre",
    name: "Buzo Medio Cierre",
    category: "Buzos",
    priceFrom: 690,
    image: "/networkcapital/productos/buzo medio cierre negro.jpeg",
    description:
      "Comodidad · calidez · estilo urbano. Buzos medio cierre, de calce amplio para un look relajado y moderno. Confeccionados en 50% algodón y 50% poliéster, con interior de felpa suave y abrigada.",
    features: [
      "Frisa premium 280gr",
      "50% algodón · 50% poliéster",
      "Medio cierre y cuello alto",
      "Puños y cintura en ribb",
    ],
    colors: ["Negro", "Azul Marino", "Gris Oscuro"],
    minQty: 10,
    weight: "280g",
    composition: "50% algodón · 50% poliéster",
    sizes: ["S", "M", "L", "XL"],
    sizeTable: [
      { size: "S", largo: 72, ancho: 51 },
      { size: "M", largo: 74, ancho: 56 },
      { size: "L", largo: 77, ancho: 61 },
      { size: "XL", largo: 80, ancho: 66 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 790 },
      { qty: 20, label: "20+", price: 770 },
      { qty: 30, label: "30+", price: 750 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 690 },
      { qty: 20, label: "20+", price: 670 },
      { qty: 30, label: "30+", price: 650 },
    ],
  },
  {
    id: "campera-capitoneada",
    name: "Campera Capitoneada de Invierno",
    category: "Camperas",
    priceFrom: 990,
    image: "/networkcapital/productos/campera de neopreno negro.jpeg",
    description:
      "Comodidad · calidez · estilo urbano. Campera capitoneada 100% nylon. Suave, abrigada y resistente. Ideal para el día a día en los días más fríos del invierno.",
    features: [
      "100% nylon",
      "Relleno térmico",
      "Capucha fija",
      "Bolsillos laterales",
    ],
    colors: ["Negro", "Azul Oscuro"],
    minQty: 10,
    weight: "—",
    composition: "100% nylon",
    sizes: ["S", "M", "L", "XL", "XXL"],
    sizeTable: [
      { size: "S", largo: 70, ancho: 58, manga: 64 },
      { size: "M", largo: 72, ancho: 60, manga: 65 },
      { size: "L", largo: 74, ancho: 62, manga: 66 },
      { size: "XL", largo: 76, ancho: 64, manga: 67 },
      { size: "XXL", largo: 78, ancho: 66, manga: 68 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 1240 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 990 },
    ],
  },
  {
    id: "pantalon-deportivo",
    name: "Pantalón Deportivo con Puño",
    category: "Pantalones",
    priceFrom: 690,
    image: "/networkcapital/productos/canguro clasico verde bosque.jpeg",
    description:
      "Comodidad · calidez · estilo urbano. Pantalón de felpa con puños; ideal para uniformes, clubes, gimnasios, colegios. Felpa 35% algodón 65% poliéster.",
    features: [
      "280g · felpa premium",
      "35% algodón · 65% poliéster",
      "Cintura elástica con cordón",
      "Bolsillos laterales",
    ],
    colors: ["Negro", "Azul Marino", "Gris Claro", "Gris Oscuro"],
    minQty: 10,
    weight: "280g",
    composition: "35% algodón · 65% poliéster",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    sizeTable: [
      { size: "XS", ancho: 34, largo: 96 },
      { size: "S", ancho: 36, largo: 98 },
      { size: "M", ancho: 38, largo: 100 },
      { size: "L", ancho: 40, largo: 102 },
      { size: "XL", ancho: 42, largo: 104 },
      { size: "XXL", ancho: 44, largo: 106 },
      { size: "XXXL", ancho: 46, largo: 106 },
    ],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 790 },
      { qty: 20, label: "20+", price: 770 },
      { qty: 30, label: "30+", price: 750 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 690 },
      { qty: 20, label: "20+", price: 670 },
      { qty: 30, label: "30+", price: 650 },
    ],
  },
  {
    id: "gorro-lana",
    name: "Gorro de Lana",
    category: "Accesorios",
    priceFrom: 120,
    image: "/networkcapital/productos/canguro clasico negro.jpeg",
    description:
      "Abrigá tu estilo. Marcá tendencia. Gorros de lana premium. Suaves, cómodos y con un calce perfecto. Combinan con todo, para todos los días.",
    features: [
      "Lana premium",
      "Suave y abrigada",
      "Calce perfecto y cómodo",
      "Variedad de colores",
    ],
    colors: ["Mostaza", "Lila", "Azul Marino", "Celeste", "Verde Menta", "Coral", "Negro", "Gris Topo"],
    minQty: 10,
    weight: "—",
    composition: "Lana premium",
    sizes: ["Único"],
    sizeTable: [],
    priceWithPrint: [
      { qty: 10, label: "10+", price: 120 },
    ],
    priceWithoutPrint: [
      { qty: 10, label: "10+", price: 120 },
    ],
  },
];
