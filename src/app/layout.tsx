import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { MetaPixel } from "@/components/MetaPixel";
import JsonLd from "@/components/networkcapital/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://networkcapital.quotixos.com"),
  title: {
    default: "Network Capital — Estampado DTF y sublimación | Ropa personalizada en Uruguay",
    template: "%s — Network Capital",
  },
  description:
    "Estampado DTF, sublimación y serigrafía en ropa personalizada. Remeras, buzos, canguros y camperas por mayor para emprendedores, marcas y empresas en Uruguay. Mínimo 10 unidades, envíos a todo el país.",
  keywords: [
    "estampado DTF Uruguay",
    "sublimación Uruguay",
    "serigrafía Uruguay",
    "ropa personalizada Uruguay",
    "remeras personalizadas",
    "remeras por mayor",
    "personalización de prendas",
    "estampados personalizados",
    "buzos personalizados",
    "canguros personalizados",
    "camperas personalizadas",
    "indumentaria por mayor",
    "ropa personalizable por mayor",
    "etiquetas personalizadas ropa",
    "logos bordados Uruguay",
    "Network Capital",
    "Network Capital Uruguay",
  ],
  authors: [{ name: "Network Capital" }],
  creator: "Network Capital",
  publisher: "Network Capital",
  applicationName: "Network Capital",
  category: "business",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/networkcapital",
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://networkcapital.quotixos.com/networkcapital",
    siteName: "Network Capital",
    title: "Network Capital — Estampado DTF y sublimación | Ropa personalizada en Uruguay",
    description:
      "Estampado DTF, sublimación y serigrafía en ropa personalizada. Remeras, buzos y camperas por mayor en Uruguay. Mínimo 10 unidades. Envíos a todo el país.",
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
  icons: {
    icon: "/networkcapital/logo.png",
    shortcut: "/networkcapital/logo.png",
    apple: "/networkcapital/logo.png",
  },
  themeColor: "#0B1628",
  appleWebApp: {
    title: "Network Capital",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Network Capital",
  alternateName: "Network Capital Co.",
  url: "https://networkcapital.quotixos.com/networkcapital",
  logo: "https://networkcapital.quotixos.com/networkcapital/logo.png",
  sameAs: [
    "https://instagram.com/networkcapital.uy",
    "https://facebook.com/networkcapital.uy",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+598-91-358-992",
    contactType: "sales",
    areaServed: "UY",
    availableLanguage: "Spanish",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Network Capital",
  image: "https://networkcapital.quotixos.com/networkcapital/logo.png",
  url: "https://networkcapital.quotixos.com/networkcapital",
  telephone: "+598-91-358-992",
  email: "networkcapital@quotixos.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pedro Bustamante 1500",
    addressLocality: "Montevideo",
    addressCountry: "UY",
  },
  priceRange: "$",
  currenciesAccepted: "UYU",
  paymentAccepted: "Efectivo, Transferencia bancaria",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="UY-MO" />
        <meta name="geo.placename" content="Montevideo" />
        <meta name="geo.position" content="-34.9106;-56.1773" />
        <meta name="ICBM" content="-34.9106, -56.1773" />
        <JsonLd data={[organizationSchema, localBusinessSchema]} />
      </head>
      <body className={`${inter.variable} antialiased font-body`}>
        <MetaPixel />
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
