"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Check,
  ShieldCheck,
  Truck,
  Award,
  Palette,
  Tag,
  ArrowRight,
} from "lucide-react";
import { PRODUCTS, BRAND, type Product } from "@/lib/networkcapital-data";
import DragMockupDemo from "./DragMockupDemo";

export default function ProductGrid() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="productos" className="py-20 bg-[#040d14]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1 bg-[#F2B411]/10 text-[#F2B411] text-sm font-bold rounded-full mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Catálogo por mayor
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            NUESTROS <span className="text-[#F2B411]">PRODUCTOS</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Calidad premium para tu marca. Todos nuestros productos están
            pensados para estampado, bordado y personalización.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => setSelected(product)}
              className="group text-left bg-[#07121a] rounded-2xl overflow-hidden border border-[#007DB8]/10 hover:border-[#F2B411]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,125,184,0.15)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Logo watermark on hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src="/networkcapital/logo.png"
                      alt=""
                      fill
                      className="object-contain opacity-70"
                    />
                  </div>
                </motion.div>
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
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Card */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#07121a] rounded-3xl border border-[#007DB8]/15 shadow-2xl"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Close */}
              <motion.button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              <div className="grid md:grid-cols-2">
                {/* Left column: image + mockup demo */}
                <div className="flex flex-col">
                  {/* Product image */}
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={selected.image}
                      alt={selected.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Drag mockup demo */}
                  <div className="p-4 bg-[#0A0A0A]">
                    <DragMockupDemo productImage={selected.image} />
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col">
                  <motion.span
                    className="inline-block self-start px-3 py-1 bg-[#F2B411]/10 text-[#F2B411] text-xs font-bold rounded-full uppercase mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selected.category}
                  </motion.span>

                  <motion.h3
                    className="text-3xl font-extrabold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    {selected.name}
                  </motion.h3>

                  <motion.p
                    className="text-4xl font-black text-[#F2B411] mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Desde ${selected.priceFrom.toLocaleString("es-UY")}
                  </motion.p>
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
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.08 }}
                      >
                        <Check className="w-5 h-5 text-[#F2B411] shrink-0" />
                        <span className="text-white/70 text-sm">{feat}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Colors */}
                  <div className="mb-6">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                      Colores disponibles
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.colors.map((color, i) => (
                        <motion.span
                          key={color}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                        >
                          {color}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      { icon: ShieldCheck, label: "Hecho en Uruguay" },
                      { icon: Truck, label: "Envío a todo el país" },
                      { icon: Award, label: "Calidad premium" },
                      { icon: Palette, label: "Personalizable" },
                    ].map((badge, i) => (
                      <motion.div
                        key={badge.label}
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.08 }}
                      >
                        <badge.icon className="w-5 h-5 text-[#007DB8]" />
                        <span className="text-white/70 text-xs">{badge.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="mt-auto space-y-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.a
                      href={`${BRAND.ctaUrl}/?producto=${selected.id}`}
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#F2B411] text-[#0A0A0A] font-extrabold text-lg rounded-xl hover:bg-[#FFD700] transition-all shadow-[0_0_20px_rgba(242,180,17,0.2)]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Tag className="w-5 h-5" />
                      HACÉ TU COTIZACIÓN AQUÍ
                    </motion.a>
                    <a
                      href={`${BRAND.ctaUrl}/?producto=${selected.id}`}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
                    >
                      Ver en cotizador
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
