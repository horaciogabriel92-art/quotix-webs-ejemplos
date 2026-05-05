"use client";

import Link from "next/link";
import { stores } from "@/lib/store-mocks";

export default function PlantillasSelector() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Quotix
          </Link>
          <span className="text-sm text-slate-400">Plantillas de tienda para tu taller</span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Elegí la cara de tu tienda
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              4 plantillas de tienda online para talleres de bordado y estampado.
              Cada una con identidad propia, lista para personalizar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stores.map((s) => (
              <Link
                key={s.id}
                href={`/plantillas-web/plantilla-${s.id}`}
                className="group block rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Color preview */}
                <div
                  className="h-32 relative flex items-center justify-center"
                  style={{ backgroundColor: s.colors.bg }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent, rgba(15,23,42,0.8))`,
                    }}
                  />
                  <span
                    className="relative text-3xl font-bold"
                    style={{ color: s.colors.primary }}
                  >
                    {s.logoText.charAt(0)}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-white transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {s.tagline}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-sky-400 group-hover:text-sky-300">
                    Ver tienda demo
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
