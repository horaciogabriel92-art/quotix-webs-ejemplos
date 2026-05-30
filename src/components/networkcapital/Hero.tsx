"use client";

import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/networkcapital-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/networkcapital/hero.jpg"
          alt="Network Capital Hero"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2B411]/10 border border-[#F2B411]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F2B411] animate-pulse" />
            <span className="text-[#F2B411] text-sm font-semibold tracking-wide uppercase">
              Venta por mayor · Mínimo 15 unidades
            </span>
          </div>

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/networkcapital/logo.png"
              alt="Network Capital"
              width={400}
              height={120}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            ROMPÉLA CON{" "}
            <span className="text-[#F2B411]">TU MARCA</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto">
            Estampados personalizados, etiquetas y logos para emprendedores que
            no siguen las reglas.
          </p>

          {/* Promo badge */}
          <div className="inline-block my-8 px-6 py-4 bg-[#E91E8C]/20 border border-[#E91E8C]/40 rounded-2xl backdrop-blur-sm">
            <p className="text-[#E91E8C] font-bold text-lg">
              PROMO LANZAMIENTO
            </p>
            <p className="text-white text-2xl font-extrabold">
              10 REMERAS $3.900
            </p>
            <p className="text-white/60 text-sm">Emprendé ahora · Stock limitado</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#productos"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F2B411] text-[#0A0A0A] font-bold text-lg rounded-xl hover:bg-[#FFD700] transition-all shadow-[0_0_30px_rgba(242,180,17,0.3)]"
            >
              Ver productos
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
