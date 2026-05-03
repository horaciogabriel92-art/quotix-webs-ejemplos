"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const VARIANTS = [
  { id: "white", label: "Blanco", header: "Blanco", src: "/mockups/polo-white-front.png" },
  { id: "blue", label: "Azul", header: "Frente Azul", src: "/mockups/polo-blue-front.png" },
  { id: "black", label: "Negro", header: "Negro Frente", src: "/mockups/polo-black-front.png" },
];

export default function ColorToggle() {
  const [index, setIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Ciclo: blanco (4s) → azul (4s) → negro (4s) → logo aparece
    timers.push(
      setTimeout(() => setIndex(1), 4000),
      setTimeout(() => setIndex(2), 8000),
      setTimeout(() => setShowLogo(true), 10500)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const active = VARIANTS[index];

  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col">
      {/* Header tipo app real */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <div className="flex items-baseline gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            Vista Previa
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={active.id}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-semibold text-slate-800"
            >
              {active.header}
            </motion.span>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={active.id + "-right"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-sm font-medium text-slate-400"
          >
            {active.label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Área de la prenda */}
      <div className="relative flex-1 min-h-0 bg-slate-50 mx-3 mb-2 rounded-xl overflow-hidden">
        {/* Imagen — cambio instantáneo, sin cross-fade entre fotos */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={active.src}
            alt={active.label}
            className="max-w-full max-h-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Logo superpuesto (aparece en negro) */}
        <AnimatePresence>
          {showLogo && index === 2 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="absolute top-[30%] left-[56%] w-10 h-10 -translate-x-1/2 -translate-y-1/2"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_12px_rgba(217,70,154,0.5)]">
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

        {/* Badge de cantidad (decorativo, tipo app real) */}
        <div className="absolute top-3 right-3 bg-slate-800/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
          50 u.
        </div>
      </div>

      {/* Miniaturas de color — estilo app real */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-center gap-5">
          {VARIANTS.map((v, i) => (
            <button
              key={v.id}
              onClick={() => {
                setIndex(i);
                if (i === 2) setShowLogo(true);
              }}
              className="flex flex-col items-center gap-1.5 group"
            >
              <div
                className={`w-12 h-12 rounded-xl border-2 overflow-hidden transition-all duration-150 ${
                  i === index
                    ? "border-blue-500 ring-2 ring-blue-200 scale-105"
                    : "border-slate-200 opacity-70 group-hover:opacity-100"
                }`}
              >
                <img
                  src={v.src}
                  alt={v.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-[10px] font-medium ${
                  i === index ? "text-blue-600 font-semibold" : "text-slate-400"
                }`}
              >
                {v.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Texto de posición (tipo app real) */}
      <div className="px-4 pb-3">
        <p className="text-xs text-slate-500">
          Querés imprimir en:{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-semibold text-slate-700"
            >
              {active.header}
            </motion.span>
          </AnimatePresence>
        </p>
      </div>

      {/* Logo cargado indicator */}
      <AnimatePresence>
        {showLogo && index === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.25 }}
            className="px-4 pb-3"
          >
            <div className="flex items-center gap-2 text-[11px] text-emerald-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Logo aplicado en la prenda
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
