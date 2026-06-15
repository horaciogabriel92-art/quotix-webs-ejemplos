"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROMOS, BRAND } from "@/lib/networkcapital-data";

export default function PromoSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0B1628] via-[#061828] to-[#0B1628] border-y border-[#007DB8]/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1 bg-[#E91E8C]/10 text-[#E91E8C] text-sm font-bold rounded-full mb-4 uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            Promos del mes
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            LLEVÁ TU MARCA AL{" "}
            <span className="text-[#F2B411]">SIGUIENTE NIVEL</span>
          </h2>
        </motion.div>

        {/* Promos grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMOS.map((promo, index) => (
            <motion.div
              key={promo.id}
              className="group relative bg-[#131d2b] rounded-3xl border border-[#007DB8]/10 overflow-hidden hover:border-[#F2B411]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,125,184,0.15)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Promo badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F2B411] text-[#0A0A0A] text-xs font-black rounded-lg uppercase tracking-wider shadow-lg">
                  Promo emprendedores
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-b from-[#1e2a3a] to-[#131d2b]">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-[#F2B411] transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-white/50 text-sm mt-1 leading-relaxed">
                    {promo.subtitle}
                  </p>
                </div>

                {/* Price card */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1628]">
                  <div className="bg-[#F2B411] px-4 py-2 text-center">
                    <span className="text-[#0A0A0A] text-xs font-black uppercase tracking-wider">
                      {promo.priceLabel}
                    </span>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-center text-[10px] font-bold text-white/60 uppercase tracking-wider mb-2">
                      Precios por unidad
                    </p>
                    <div className="space-y-2">
                      {promo.priceTiers.map((tier) => (
                        <div
                          key={tier.qty}
                          className="flex items-center justify-between border-b border-white/5 last:border-0 pb-2 last:pb-0"
                        >
                          <span className="text-white/80 text-sm font-bold">
                            {tier.qty}+{" "}
                            <span className="text-white/50 text-xs font-medium uppercase">
                              unidades
                            </span>
                          </span>
                          <span className="text-white text-lg font-black">
                            ${tier.price}{" "}
                            <span className="text-xs text-white/50 font-medium">c/u</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <a
                    href={BRAND.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#F2B411] text-black font-bold rounded-xl hover:bg-[#FFD700] transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    {promo.ctaText}
                  </a>
                  {promo.productLink && (
                    <Link
                      href={promo.productLink}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/5 transition-all"
                    >
                      Ver catálogo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
