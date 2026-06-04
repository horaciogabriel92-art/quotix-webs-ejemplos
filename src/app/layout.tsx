import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { MetaPixel } from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Quotix — Cotizador Digital Pro",
  description: "La herramienta que tu taller de bordados necesita. Cotizaciones online, mockups instantaneos y gestion de pedidos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased font-body`}>
        <MetaPixel />
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
