"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  Check,
  ShieldCheck,
  Truck,
  Award,
  Palette,
  Tag,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { PRODUCTS, BRAND, type Product } from "@/lib/networkcapital-data";

export default function ProductGrid() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="productos" className="py-20 bg-[#040d14]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#F2B411]/10 text-[#F2B411] text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
            Catálogo por mayor
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            NUESTROS <span className="text-[#F2B411]">PRODUCTOS</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Calidad premium para tu marca. Todos nuestros productos están
            pensados para estampado, bordado y personalización.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelected(product)}
              className="group text-left bg-[#07121a] rounded-2xl overflow-hidden border border-[#007DB8]/10 hover:border-[#F2B411]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,125,184,0.15)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#F2B411] text-[#0A0A0A] text-xs font-bold rounded-full uppercase">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#F2B411] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#F2B411] font-extrabold text-xl">
                  Desde ${product.priceFrom.toLocaleString("es-UY")}
                </p>
                <p className="text-white/40 text-sm mt-2">
                  Mínimo {product.minQty} unidades
                </p>
                <div className="mt-4 flex items-center gap-1 text-[#007DB8] text-sm font-medium">
                  Ver detalles <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          {/* Card */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#07121a] rounded-3xl border border-[#007DB8]/15 shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square bg-white">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col">
                <span className="inline-block self-start px-3 py-1 bg-[#F2B411]/10 text-[#F2B411] text-xs font-bold rounded-full uppercase mb-4">
                  {selected.category}
                </span>

                <h3 className="text-3xl font-extrabold text-white mb-2">
                  {selected.name}
                </h3>

                <p className="text-4xl font-black text-[#F2B411] mb-2">
                  Desde ${selected.priceFrom.toLocaleString("es-UY")}
                </p>
                <p className="text-white/50 text-sm mb-6">
                  por unidad · compra mínima {selected.minQty} unidades
                </p>

                <div className="h-px bg-white/10 mb-6" />

                <p className="text-white/80 leading-relaxed mb-6">
                  {selected.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {selected.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#F2B411] shrink-0" />
                      <span className="text-white/70 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                    Colores disponibles
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl">
                    <ShieldCheck className="w-5 h-5 text-[#007DB8]" />
                    <span className="text-white/70 text-xs">Hecho en Uruguay</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl">
                    <Truck className="w-5 h-5 text-[#007DB8]" />
                    <span className="text-white/70 text-xs">Envío a todo el país</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl">
                    <Award className="w-5 h-5 text-[#007DB8]" />
                    <span className="text-white/70 text-xs">Calidad premium</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl">
                    <Palette className="w-5 h-5 text-[#007DB8]" />
                    <span className="text-white/70 text-xs">Personalizable</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto space-y-3">
                  <a
                    href={`${BRAND.ctaUrl}/?producto=${selected.id}`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#F2B411] text-[#0A0A0A] font-extrabold text-lg rounded-xl hover:bg-[#FFD700] transition-all shadow-[0_0_20px_rgba(242,180,17,0.2)]"
                  >
                    <Tag className="w-5 h-5" />
                    HACÉ TU COTIZACIÓN AQUÍ
                  </a>
                  <a
                    href={`${BRAND.ctaUrl}/?producto=${selected.id}`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
                  >
                    Ver en cotizador
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
