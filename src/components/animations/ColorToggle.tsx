"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Upload } from "lucide-react";

const STEPS = [
  { id: 0, label: "Elegís el color", duration: 3000 },
  { id: 1, label: "Subís tu logo", duration: 2000 },
  { id: 2, label: "Lo posicionás", duration: 3000 },
  { id: 3, label: "Ajustás tamaño", duration: 3000 },
  { id: 4, label: "Medidas reales", duration: 3000 },
];

export default function ColorToggle() {
  const [step, setStep] = useState(0);
  const [loopKey, setLoopKey] = useState(0);

  const runSequence = useCallback(() => {
    setStep(0);
    const timers: NodeJS.Timeout[] = [];
    let delay = 0;
    for (let i = 1; i < STEPS.length; i++) {
      delay += STEPS[i - 1].duration;
      timers.push(setTimeout(() => setStep(i), delay));
    }
    timers.push(setTimeout(() => setLoopKey((k) => k + 1), delay + STEPS[STEPS.length - 1].duration));
    return timers;
  }, []);

  useEffect(() => {
    const timers = runSequence();
    return () => timers.forEach(clearTimeout);
  }, [runSequence, loopKey]);

  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col shadow-2xl">
      {/* Header minimal */}
      <div className="flex items-center justify-between px-4 py-2.5 shrink-0 border-b border-slate-100">
        <div className="flex items-baseline gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Vista Previa</span>
          <span className="text-xs font-semibold text-slate-800">Negro Frente</span>
        </div>
        <span className="text-[10px] bg-slate-800 text-white font-semibold px-2 py-0.5 rounded-full">50 u.</span>
      </div>

      {/* Área principal: prenda dominante, SIN padding para que ocupe todo */}
      <div className="flex-1 min-h-0 relative mx-2 mt-1.5 mb-1 bg-slate-50 rounded-xl overflow-hidden">
        <img
          src="/mockups/polo-black-front.png"
          alt="Polo negro"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Logo animado — coordenadas calibradas al pecho izquierdo del polo */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              key={`logo-${loopKey}`}
              className="absolute"
              style={{ width: 48, height: 48 }}
              initial={{
                top: "46%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                scale: 2.4,
                opacity: 0,
                rotate: 0,
              }}
              animate={{
                top: step >= 2 ? "33%" : "46%",
                left: step >= 2 ? "53%" : "50%",
                x: "-50%",
                y: "-50%",
                scale: step >= 3 ? 0.95 : step >= 2 ? 1.5 : 2.4,
                opacity: 1,
                rotate: step >= 3 ? -5 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: step >= 2 ? 90 : 160,
                damping: step >= 2 ? 15 : 18,
                delay: step === 1 ? 0.15 : 0,
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_3px_12px_rgba(217,70,154,0.5)]"
              >
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

        {/* Badge medida real */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute bottom-3 right-3 bg-blue-500 text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-lg"
            >
              ~6.1 × 6.1 cm
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicador de paso flotante */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tip-${step}-${loopKey}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded-lg"
          >
            {STEPS[step].label}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Barra inferior compacta */}
      <div className="px-3 pb-2.5 shrink-0 flex items-center gap-3">
        <div className="flex items-center gap-2">
          {[
            { src: "/mockups/polo-white-front.png", label: "Blanco" },
            { src: "/mockups/polo-blue-front.png", label: "Azul" },
            { src: "/mockups/polo-black-front.png", label: "Negro", active: true },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-0.5">
              <div
                className={`w-8 h-8 rounded-md border-2 overflow-hidden ${
                  c.active ? "border-blue-500" : "border-slate-200 opacity-50"
                }`}
              >
                <img src={c.src} alt={c.label} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1" />

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.span key="wait" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] text-slate-400 flex items-center gap-1">
              <Upload className="w-3 h-3" /> Esperando diseño
            </motion.span>
          )}
          {step === 1 && (
            <motion.span key="up" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] text-blue-500 font-medium flex items-center gap-1 animate-pulse">
              <Upload className="w-3 h-3" /> Subiendo logo...
            </motion.span>
          )}
          {step >= 2 && (
            <motion.span key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Logo cargado
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
