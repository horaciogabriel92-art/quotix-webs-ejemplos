"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#007DB8]"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#003d5c] via-[#003d5c]/40 to-[#007DB8]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003d5c]/90 via-[#007DB8]/10 to-transparent" />
      </div>

      {/* Urban texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#F2B411]/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2B411]/10 border border-[#F2B411]/30 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#F2B411] animate-pulse" />
            <span className="text-[#F2B411] text-sm font-bold tracking-wide uppercase">
              Venta por mayor · Mínimo 10 unidades
            </span>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(242,180,17,0.15))",
                  "drop-shadow(0 0 50px rgba(242,180,17,0.4))",
                  "drop-shadow(0 0 20px rgba(242,180,17,0.15))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/networkcapital/logo.png"
                alt="Network Capital"
                width={480}
                height={140}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            ROMPÉLA CON{" "}
            <motion.span
              className="text-[#F2B411] inline-block"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              TU MARCA
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-6 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Estampados personalizados, etiquetas y logos para emprendedores que
            no siguen las reglas.
          </motion.p>

          {/* Promo badge */}
          <motion.div
            className="inline-block my-8 px-6 py-4 bg-[#E91E8C]/15 border border-[#E91E8C]/40 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-[#E91E8C] font-black text-sm tracking-wider uppercase">
              Promo lanzamiento
            </p>
            <motion.p
              className="text-white text-3xl md:text-4xl font-black"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              10 REMERAS $3.900
            </motion.p>
            <p className="text-white/50 text-sm">Emprendé ahora · Stock limitado</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <motion.a
              href="#productos"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F2B411] text-[#003d5c] font-black text-lg rounded-xl hover:bg-[#FFD700] transition-all shadow-[0_0_40px_rgba(242,180,17,0.25)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver productos
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#ubicacion"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Dónde estamos
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
