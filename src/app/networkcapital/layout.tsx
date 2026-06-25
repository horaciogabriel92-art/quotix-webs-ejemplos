import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Capital — Remeras personalizadas por mayor en Uruguay",
  description:
    "Fábrica de remeras personalizadas y prendas de vestir por mayor en Montevideo, Uruguay. Serigrafía, DTF, etiquetas y logos para emprendedores, marcas y empresas. Mínimo 10 unidades, envíos a todo el país.",
  alternates: {
    canonical: "/networkcapital",
  },
  openGraph: {
    url: "https://networkcapital.quotixos.com/networkcapital",
    title: "Network Capital — Remeras personalizadas por mayor en Uruguay",
    description:
      "Fábrica de remeras personalizadas y prendas de vestir por mayor en Uruguay. Serigrafía, DTF, etiquetas y logos. Mínimo 10 unidades. Envíos a todo el país.",
    images: [
      {
        url: "/networkcapital/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Remeras personalizadas por mayor - Network Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Capital — Remeras personalizadas por mayor en Uruguay",
    description:
      "Fábrica de remeras personalizadas y prendas de vestir por mayor en Uruguay. Serigrafía, DTF, etiquetas y logos. Mínimo 10 unidades. Envíos a todo el país.",
    images: ["/networkcapital/hero.jpg"],
  },
};

export default function NetworkCapitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
