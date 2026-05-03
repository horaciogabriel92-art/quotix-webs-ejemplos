"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const VARIANTS = [
  { id: "white", label: "Blanco", src: "/mockups/polo-white-front.png" },
  { id: "blue", label: "Azul", src: "/mockups/polo-blue-front.png" },
  { id: "black", label: "Negro", src: "/mockups/polo-black-front.png" },
];

export default function ColorToggle() {
  const [index, setIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % VARIANTS.length;
        if (next === 2) setShowLogo(true);
        return next;
      });
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const active = VARIANTS[index];

  return (
    <div className="relative w-full h-full bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden">
      {/* Imagen de la prenda con cross-fade */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.src}
            alt={active.label}
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Logo Q superpuesto en el pecho (solo en negro) */}
        <AnimatePresence>
          {showLogo && index === 2 && (
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.2 }}
              className="absolute top-[28%] left-[54%] w-14 h-14 -translate-x-1/2 -translate-y-1/2"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_16px_rgba(217,70,154,0.5)]">
                <circle cx="50" cy="50" r="48" fill="#d9469a" />
                <text
                  x="50"
                  y="68"
                  textAnchor="middle"
                  fill="white"
                  fontSize="56"
                  fontWeight="bold"
                  fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
                >
                  Q
                </text>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selector de colores */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 z-10">
        {VARIANTS.map((v, i) => (
          <button
            key={v.id}
            onClick={() => {
              setIndex(i);
              if (i === 2) setShowLogo(true);
            }}
            className="group flex flex-col items-center gap-1.5"
          >
            <motion.div
              className="w-9 h-9 rounded-full border-2 cursor-pointer relative shadow-lg"
              style={{
                backgroundColor:
                  v.id === "white" ? "#f8fafc" : v.id === "blue" ? "#1e3a8a" : "#171717",
                borderColor: i === index ? "#d4f542" : "rgba(255,255,255,0.25)",
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              animate={{ scale: i === index ? 1.12 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {i === index && (
                <motion.div
                  layoutId="color-ring-real"
                  className="absolute -inset-1.5 rounded-full border-2 border-[#d4f542]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.div>
            <span
              className={`text-[10px] font-semibold uppercase tracking-wider ${
                i === index ? "text-[#d4f542]" : "text-white/40"
              }`}
            >
              {v.label}
            </span>
          </button>
        ))}
      </div>

      {/* Label Vista Previa */}
      <div className="absolute top-4 right-5 text-[10px] font-semibold uppercase tracking-widest text-white/30 z-10">
        Vista previa
      </div>
    </div>
  );
}
