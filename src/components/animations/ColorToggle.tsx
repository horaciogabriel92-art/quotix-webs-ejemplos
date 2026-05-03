"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const COLORS = [
  { id: "white", label: "Blanco", fill: "#f1f5f9", stroke: "#cbd5e1" },
  { id: "blue", label: "Azul", fill: "#1e3a8a", stroke: "#172554" },
  { id: "black", label: "Negro", fill: "#0a0a0a", stroke: "#262626" },
];

export default function ColorToggle() {
  const [index, setIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % COLORS.length;
        if (next === 2) setShowLogo(true);
        return next;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const active = COLORS[index];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center overflow-hidden">
      {/* Glow ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ backgroundColor: active.fill }}
          transition={{ duration: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full blur-[80px] opacity-20"
        />
      </div>

      {/* Polo SVG */}
      <div className="relative z-10 w-48 h-56">
        <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-2xl">
          {/* Sombra proyectada sutil */}
          <ellipse cx="100" cy="225" rx="60" ry="8" fill="#000" opacity="0.25" />

          {/* Cuerpo del polo */}
          <motion.path
            d="M75 20 
               C75 20, 70 5, 100 5 
               C130 5, 125 20, 125 20
               L140 28
               C155 35, 165 50, 170 70
               L175 95
               C178 105, 170 112, 160 108
               L145 100
               L145 200
               C145 215, 130 225, 100 225
               C70 225, 55 215, 55 200
               L55 100
               L40 108
               C30 112, 22 105, 25 95
               L30 70
               C35 50, 45 35, 60 28
               Z"
            animate={{ fill: active.fill }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            stroke={active.stroke}
            strokeWidth="1.5"
          />

          {/* Cuello (interior) */}
          <motion.path
            d="M85 20 C90 28, 110 28, 115 20 L100 35 Z"
            animate={{ fill: active.stroke }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />

          {/* Botones */}
          <circle cx="100" cy="45" r="2" fill="#94a3b8" opacity="0.6" />
          <circle cx="100" cy="60" r="2" fill="#94a3b8" opacity="0.6" />
          <circle cx="100" cy="75" r="2" fill="#94a3b8" opacity="0.6" />

          {/* Pliegue sutil derecho */}
          <path
            d="M130 90 Q125 140 128 190"
            fill="none"
            stroke="#000"
            strokeWidth="1"
            opacity="0.08"
          />
        </svg>

        {/* Logo superpuesto (pecho izquierdo) */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
              className="absolute top-[38%] left-[58%] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-10 h-10 rounded-full bg-[#d9469a] flex items-center justify-center shadow-lg shadow-[#d9469a]/30 border-2 border-white/20">
                <span className="text-white font-bold text-sm leading-none">Q</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selector de colores */}
      <div className="relative z-10 mt-6 flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
        {COLORS.map((c, i) => (
          <button
            key={c.id}
            onClick={() => {
              setIndex(i);
              if (i === 2) setShowLogo(true);
            }}
            className="group flex flex-col items-center gap-1.5"
          >
            <motion.div
              className="w-8 h-8 rounded-full border-2 cursor-pointer relative"
              style={{ backgroundColor: c.fill, borderColor: i === index ? "#d4f542" : "rgba(255,255,255,0.15)" }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              animate={{ scale: i === index ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {i === index && (
                <motion.div
                  layoutId="color-ring"
                  className="absolute -inset-1 rounded-full border-2 border-[#d4f542]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.div>
            <span className={`text-[10px] font-medium uppercase tracking-wider ${i === index ? "text-[#d4f542]" : "text-[#64748b]"}`}>
              {c.label}
            </span>
          </button>
        ))}
      </div>

      {/* Label tipo "Vista Previa" */}
      <motion.div
        className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest text-[#64748b]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Vista previa
      </motion.div>
    </div>
  );
}
