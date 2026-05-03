"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ImageIcon, Upload, Move, RotateCcw } from "lucide-react";

const STEPS = [
  { id: 0, label: "Elegís el color de la prenda", duration: 3500 },
  { id: 1, label: "Subís tu logo", duration: 2500 },
  { id: 2, label: "Lo posicionás donde querés", duration: 3500 },
  { id: 3, label: "Ajustás tamaño y rotación", duration: 4000 },
  { id: 4, label: "Ves las medidas reales", duration: 3500 },
];

export default function ColorToggle() {
  const [step, setStep] = useState(0);
  const [colorIdx, setColorIdx] = useState(2); // empezamos en negro
  const [loopKey, setLoopKey] = useState(0);

  const runSequence = useCallback(() => {
    setStep(0);
    setColorIdx(2);
    const timers: NodeJS.Timeout[] = [];

    // Step 0: muestra color negro (ya está)
    // Step 1: upload
    timers.push(setTimeout(() => setStep(1), STEPS[0].duration));
    // Step 2: posicionar
    timers.push(setTimeout(() => setStep(2), STEPS[0].duration + STEPS[1].duration));
    // Step 3: ajustar
    timers.push(setTimeout(() => setStep(3), STEPS[0].duration + STEPS[1].duration + STEPS[2].duration));
    // Step 4: medidas
    timers.push(setTimeout(() => setStep(4), STEPS[0].duration + STEPS[1].duration + STEPS[2].duration + STEPS[3].duration));
    // Loop
    const total = STEPS.reduce((a, s) => a + s.duration, 0);
    timers.push(setTimeout(() => setLoopKey((k) => k + 1), total));

    return timers;
  }, []);

  useEffect(() => {
    const timers = runSequence();
    return () => timers.forEach(clearTimeout);
  }, [runSequence, loopKey]);

  const activeStep = STEPS[step];

  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
        <div className="flex items-baseline gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            Vista Previa
          </span>
          <span className="text-sm font-semibold text-slate-800">Negro Frente</span>
        </div>
        <span className="text-sm font-medium text-slate-400">Negro</span>
      </div>

      {/* Área principal: prenda + panel de ajuste */}
      <div className="flex-1 min-h-0 flex gap-3 px-3 pb-2">
        {/* Prenda */}
        <div className="relative flex-1 bg-slate-50 rounded-xl overflow-hidden">
          <img
            src="/mockups/polo-black-front.png"
            alt="Polo negro"
            className="absolute inset-0 w-full h-full object-contain p-3"
          />

          {/* Badge cantidad */}
          <div className="absolute top-3 right-3 bg-slate-800/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
            50 u.
          </div>

          {/* Logo que se anima paso a paso */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                key={`logo-${loopKey}`}
                className="absolute w-20 h-20"
                initial={{
                  top: "40%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                  scale: 1.8,
                  opacity: 0,
                  rotate: 0,
                }}
                animate={{
                  top: step >= 2 ? "30%" : "40%",
                  left: step >= 2 ? "56%" : "50%",
                  x: step >= 2 ? "0%" : "-50%",
                  y: step >= 2 ? "0%" : "-50%",
                  scale: step >= 3 ? 0.55 : step >= 2 ? 0.9 : 1.8,
                  opacity: 1,
                  rotate: step >= 3 ? -8 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: step >= 2 ? 120 : 200,
                  damping: step >= 2 ? 18 : 22,
                  delay: step === 1 ? 0.2 : 0,
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_16px_rgba(217,70,154,0.45)]">
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
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute bottom-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg"
              >
                ~6.1 × 6.1 cm
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Panel lateral de ajuste (aparece en paso 3) */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "38%", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="shrink-0 overflow-hidden"
            >
              <div className="h-full bg-white border border-slate-200 rounded-xl p-3 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Ajustar Logo
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Move className="w-3 h-3" /> Arrastrá
                  </span>
                </div>

                {/* Slider Tamaño */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Tamaño</span>
                    <motion.span
                      key={`size-${loopKey}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-semibold text-slate-700"
                    >
                      55%
                    </motion.span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "55%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>

                {/* Slider Rotación */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Rotación</span>
                    <motion.span
                      key={`rot-${loopKey}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="font-semibold text-slate-700"
                    >
                      -8°
                    </motion.span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-slate-400">-15°</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300" />
                      <motion.div
                        className="h-full bg-blue-500 rounded-full absolute left-1/2"
                        initial={{ width: "0%", x: "0%" }}
                        animate={{ width: "30%", x: "-100%" }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                      />
                    </div>
                    <span className="text-[9px] text-slate-400">+15°</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-1.5 text-[9px] text-slate-400">
                  <RotateCcw className="w-3 h-3" />
                  Doble clic para resetear
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Miniaturas de color */}
      <div className="px-4 pb-2 shrink-0">
        <div className="flex items-center justify-center gap-4">
          {[
            { src: "/mockups/polo-white-front.png", label: "Blanco" },
            { src: "/mockups/polo-blue-front.png", label: "Azul" },
            { src: "/mockups/polo-black-front.png", label: "Negro", active: true },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-1">
              <div
                className={`w-10 h-10 rounded-lg border-2 overflow-hidden ${
                  c.active ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200 opacity-50"
                }`}
              >
                <img src={c.src} alt={c.label} className="w-full h-full object-cover" />
              </div>
              <span className={`text-[10px] font-medium ${c.active ? "text-blue-600 font-semibold" : "text-slate-400"}`}>
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Texto de posición */}
      <div className="px-4 pb-2 shrink-0">
        <p className="text-xs text-slate-500">
          Querés imprimir en:{" "}
          <span className="font-semibold text-slate-700">Negro Frente</span>
        </p>
      </div>

      {/* Barra de pasos explicativos */}
      <div className="px-3 pb-3 shrink-0">
        <div className="flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2 flex-1">
              <motion.div
                animate={{
                  backgroundColor: i <= step ? "#3b82f6" : "#e2e8f0",
                  color: i <= step ? "#ffffff" : "#94a3b8",
                }}
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
              >
                {i < step ? <CheckCircle2 className="w-3 h-3" /> : i + 1}
              </motion.div>
              <motion.span
                animate={{ color: i === step ? "#1e293b" : i < step ? "#3b82f6" : "#cbd5e1" }}
                className="text-[10px] font-medium leading-tight hidden sm:block"
              >
                {s.label}
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      {/* Área de upload (estados según paso) */}
      <div className="px-3 pb-3 shrink-0">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-3 flex flex-col items-center justify-center gap-1"
            >
              <Upload className="w-4 h-4 text-slate-300" />
              <p className="text-xs text-slate-400">Esperando diseño...</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="uploading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/50 p-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center animate-pulse">
                <Upload className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-blue-700">Subiendo logo...</p>
                <p className="text-[11px] text-blue-400">PNG, JPG o SVG</p>
              </div>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <ImageIcon className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  ¡Diseño cargado!
                </p>
                <p className="text-[11px] text-emerald-500 truncate">Haz clic para reemplazar</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
