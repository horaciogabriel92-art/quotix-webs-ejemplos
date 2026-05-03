"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, Move, RotateCcw, ImageIcon, CheckCircle2 } from "lucide-react";

// Secuencia de fases con duraciones
const PHASES = [
  { id: "idle", duration: 1500 },
  { id: "uploading", duration: 2000 },
  { id: "place", duration: 2500 },
  { id: "adjust", duration: 3500 },
  { id: "done", duration: 3000 },
];

export default function ColorToggle() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [loopKey, setLoopKey] = useState(0);

  const phase = PHASES[phaseIdx].id;

  const run = useCallback(() => {
    setPhaseIdx(0);
    const timers: NodeJS.Timeout[] = [];
    let delay = 0;
    for (let i = 1; i < PHASES.length; i++) {
      delay += PHASES[i - 1].duration;
      timers.push(setTimeout(() => setPhaseIdx(i), delay));
    }
    const total = delay + PHASES[PHASES.length - 1].duration;
    timers.push(setTimeout(() => setLoopKey((k) => k + 1), total + 500));
    return timers;
  }, []);

  useEffect(() => {
    const timers = run();
    return () => timers.forEach(clearTimeout);
  }, [run, loopKey]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
      {/* ── FONDO: imagen del polo con tienda, cubriendo todo ── */}
      <img
        src="/mockups/polo-black-front.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay oscuro sutil para legibilidad de controles */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />

      {/* ── LOGO SOBRE EL PECHO ── */}
      <AnimatePresence>
        {phaseIdx >= 2 && (
          <motion.div
            key={`logo-${loopKey}`}
            className="absolute"
            style={{ width: 40, height: 40 }}
            initial={{
              top: "55%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              scale: 3.5,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              top: phaseIdx >= 3 ? "32%" : "55%",
              left: phaseIdx >= 3 ? "54%" : "50%",
              x: "-50%",
              y: "-50%",
              scale: phaseIdx >= 4 ? 1 : phaseIdx >= 3 ? 1.6 : 3.5,
              opacity: 1,
              rotate: phaseIdx >= 4 ? -5 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: phaseIdx >= 3 ? 70 : 120,
              damping: phaseIdx >= 3 ? 14 : 16,
              delay: phaseIdx === 2 ? 0.2 : 0,
            }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_4px_20px_rgba(217,70,154,0.6)]"
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

      {/* ── BADGE MEDIDA ── */}
      <AnimatePresence>
        {phaseIdx >= 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 250 }}
            className="absolute top-[40%] left-[58%] bg-blue-500 text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-lg whitespace-nowrap"
          >
            ~6.1 × 6.1 cm
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BADGE 50 U. ── */}
      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
        50 u.
      </div>

      {/* ── HEADER VISTA PREVIA ── */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">Vista Previa</span>
        <span className="text-[10px] text-white/80">Negro Frente</span>
      </div>

      {/* ── PANEL DE AJUSTE (glassmorphism, desde la derecha) ── */}
      <AnimatePresence>
        {phaseIdx >= 3 && (
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="absolute top-12 right-2 w-36 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">Ajustar Logo</span>
              <Move className="w-3 h-3 text-white/60" />
            </div>

            {/* Slider Tamaño */}
            <div className="mb-2.5">
              <div className="flex justify-between text-[9px] text-white/70 mb-1">
                <span>Tamaño</span>
                <motion.span
                  key={`sz-${loopKey}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="font-semibold text-white"
                >
                  55%
                </motion.span>
              </div>
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "55%" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                />
              </div>
            </div>

            {/* Slider Rotación */}
            <div className="mb-2">
              <div className="flex justify-between text-[9px] text-white/70 mb-1">
                <span>Rotación</span>
                <motion.span
                  key={`rot-${loopKey}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="font-semibold text-white"
                >
                  -5°
                </motion.span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[8px] text-white/40">-15°</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full relative overflow-hidden">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30" />
                  <motion.div
                    className="absolute left-1/2 h-full bg-blue-400 rounded-full"
                    initial={{ width: 0, x: 0 }}
                    animate={{ width: "20%", x: "-100%" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
                  />
                </div>
                <span className="text-[8px] text-white/40">+15°</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[8px] text-white/50">
              <RotateCcw className="w-2.5 h-2.5" />
              Doble clic para resetear
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BURBUJA EXPLICATIVA DEL PASO (arriba izquierda, debajo del header) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`tip-${phaseIdx}-${loopKey}`}
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="absolute top-10 left-3 bg-lime-400 text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-lg"
        >
          {phase === "idle" && "Paso 1: Elegí tu prenda"}
          {phase === "uploading" && "Paso 2: Subí tu logo"}
          {phase === "place" && "Paso 3: Arrastrá al pecho"}
          {phase === "adjust" && "Paso 4: Ajustá tamaño y ángulo"}
          {phase === "done" && "Paso 5: ¡Listo para cotizar!"}
        </motion.div>
      </AnimatePresence>

      {/* ── ÁREA DE UPLOAD (glassmorphism abajo) ── */}
      <div className="absolute bottom-3 left-3 right-3">
        <AnimatePresence mode="wait">
          {phase === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <Upload className="w-4 h-4 text-white/60" />
              </div>
              <div>
                <p className="text-xs font-medium text-white/90">Arrastrá tu logo acá</p>
                <p className="text-[10px] text-white/50">PNG, JPG o SVG · Máx 5MB</p>
              </div>
            </motion.div>
          )}

          {phase === "uploading" && (
            <motion.div
              key="up"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-blue-500/30 backdrop-blur-md border border-blue-300/30 rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-400/20 flex items-center justify-center animate-pulse">
                <Upload className="w-4 h-4 text-blue-200" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">Subiendo logo_quotix.png...</p>
                <div className="w-32 h-1 bg-white/20 rounded-full mt-1.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {phaseIdx >= 2 && (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-emerald-500/20 backdrop-blur-md border border-emerald-300/30 rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                <ImageIcon className="w-4 h-4 text-emerald-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Logo cargado correctamente
                </p>
                <p className="text-[10px] text-white/50">logo_quotix.png · 24KB</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── MINIATURAS DE COLOR (abajo izquierda, sobre el fondo) ── */}
      <div className="absolute bottom-[72px] left-3 flex gap-1.5">
        {[
          { src: "/mockups/polo-white-front.png", active: false },
          { src: "/mockups/polo-blue-front.png", active: false },
          { src: "/mockups/polo-black-front.png", active: true },
        ].map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className={`w-7 h-7 rounded-md border-2 overflow-hidden ${
              c.active ? "border-white shadow-lg" : "border-white/30 opacity-60"
            }`}
          >
            <img src={c.src} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
