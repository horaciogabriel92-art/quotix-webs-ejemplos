"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  isLocked: boolean;
  onEnterCatalog: () => void;
}

export default function Hero({ isLocked, onEnterCatalog }: HeroProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isLocked) {
      setIsExiting(true);
      const timer = setTimeout(() => setIsExiting(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isLocked]);

  const handleEnterCatalog = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnterCatalog();
      setIsExiting(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {(isLocked || isExiting) && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0B1628] ${
            isLocked ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/networkcapital/hero.jpg"
              alt="Network Capital Hero"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-[#0B1628]/50 to-[#007DB8]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1628]/90 via-[#007DB8]/10 to-transparent" />
          </div>

          {/* Urban texture overlay */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              {/* CATALOGO button - above logo */}
              <motion.div
                className="relative flex justify-center mb-4 min-w-[300px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.img
                  src="/networkcapital/flecha-home.svg"
                  alt=""
                  className="absolute -left-10 top-1/2 -translate-y-1/2 w-16 h-20 object-contain pointer-events-none"
                  initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: -15, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.8 }}
                />

                <motion.button
                  onClick={handleEnterCatalog}
                  className="inline-flex items-center justify-center px-10 py-3.5 min-w-[200px] bg-transparent border-2 border-white/30 text-white font-black text-sm tracking-[0.2em] uppercase rounded-full hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Catálogo
                </motion.button>
              </motion.div>

              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2B411]/10 border border-[#F2B411]/30 mb-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <span className="w-2 h-2 rounded-full bg-[#F2B411] animate-pulse" />
                <span className="text-[#F2B411] text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  Venta por mayor · Mínimo 10 unidades
                </span>
              </motion.div>

              {/* Logo with vortex entrance */}
              <motion.div
                className="mb-5 flex justify-center"
                initial={{ opacity: 0, scale: 0.2, rotate: -180, filter: "blur(16px)" }}
                animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(242,180,17,0.2))",
                      "drop-shadow(0 0 60px rgba(242,180,17,0.5))",
                      "drop-shadow(0 0 20px rgba(242,180,17,0.2))",
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
                    width={420}
                    height={140}
                    className="object-contain w-[260px] md:w-[380px]"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* ARMA TU PRENDA button - below logo */}
              <motion.div
                className="relative flex justify-center min-w-[300px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.img
                  src="/networkcapital/flecha-home.svg"
                  alt=""
                  className="absolute -right-10 top-1/2 -translate-y-1/2 w-16 h-20 object-contain pointer-events-none"
                  style={{ transform: "rotate(165deg)" }}
                  initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 165, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12, delay: 1.2 }}
                />

                <motion.a
                  href="https://app-networkcapital.quotixos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-3.5 min-w-[200px] bg-[#F2B411] text-black font-black text-sm tracking-[0.15em] uppercase rounded-full hover:bg-[#FFD700] transition-all shadow-[0_0_40px_rgba(242,180,17,0.25)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Armá tu prenda
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
