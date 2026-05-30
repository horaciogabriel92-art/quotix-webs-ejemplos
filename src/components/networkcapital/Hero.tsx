"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/networkcapital/hero.jpg"
          alt="Network Capital Hero"
          fill
          className="object-cover object-center opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 to-transparent" />
      </div>

      {/* Urban texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2B411]/10 border border-[#F2B411]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F2B411] animate-pulse" />
            <span className="text-[#F2B411] text-sm font-bold tracking-wide uppercase">
              Venta por mayor · Mínimo 15 unidades
            </span>
          </div>

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/networkcapital/logo.png"
              alt="Network Capital"
              width={480}
              height={140}
              className="object-contain drop-shadow-[0_0_40px_rgba(242,180,17,0.25)]"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            ROMPÉLA CON{" "}
            <span className="text-[#F2B411]">TU MARCA</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-6 max-w-2xl mx-auto font-medium">
            Estampados personalizados, etiquetas y logos para emprendedores que
            no siguen las reglas.
          </p>

          {/* Promo badge */}
          <div className="inline-block my-8 px-6 py-4 bg-[#E91E8C]/15 border border-[#E91E8C]/40 rounded-2xl backdrop-blur-sm">
            <p className="text-[#E91E8C] font-black text-sm tracking-wider uppercase">
              Promo lanzamiento
            </p>
            <p className="text-white text-3xl md:text-4xl font-black">
              10 REMERAS $3.900
            </p>
            <p className="text-white/50 text-sm">Emprendé ahora · Stock limitado</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <a
              href="#productos"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F2B411] text-[#0A0A0A] font-black text-lg rounded-xl hover:bg-[#FFD700] transition-all shadow-[0_0_40px_rgba(242,180,17,0.25)]"
            >
              Ver productos
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#ubicacion"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Dónde estamos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/40" />
      </div>
    </section>
  );
}
