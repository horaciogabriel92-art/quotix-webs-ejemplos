"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Upload, ImageIcon } from "lucide-react";

const COLORS = [
  { id: "white", label: "Blanco", header: "Blanco", src: "/mockups/polo-white-front.png" },
  { id: "blue", label: "Azul", header: "Frente Azul", src: "/mockups/polo-blue-front.png" },
  { id: "black", label: "Negro", header: "Negro Frente", src: "/mockups/polo-black-front.png" },
];

export default function ColorToggle() {
  const [colorIdx, setColorIdx] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);

  const runSequence = useCallback(() => {
    setColorIdx(0);
    setShowLogo(false);
    setShowUpload(false);
    setUploadDone(false);

    const timers: NodeJS.Timeout[] = [];

    // 0s: blanco
    // 4s: azul
    timers.push(setTimeout(() => setColorIdx(1), 4500));

    // 8s: negro
    timers.push(setTimeout(() => setColorIdx(2), 9000));

    // 11s: aparece logo en la prenda
    timers.push(setTimeout(() => setShowLogo(true), 11500));

    // 13s: aparece área de upload
    timers.push(setTimeout(() => setShowUpload(true), 13500));

    // 15s: upload completado
    timers.push(setTimeout(() => setUploadDone(true), 15500));

    // 19s: reinicia
    timers.push(setTimeout(() => runSequence(), 19500));

    return timers;
  }, []);

  useEffect(() => {
    const timers = runSequence();
    return () => timers.forEach(clearTimeout);
  }, [runSequence]);

  const active = COLORS[colorIdx];

  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col shadow-2xl">
      {/* Header tipo app real */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
        <div className="flex items-baseline gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            Vista Previa
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={active.id}
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 3 }}
              transition={{ duration: 0.12 }}
              className="text-sm font-semibold text-slate-800"
            >
              {active.header}
            </motion.span>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={active.id + "-r"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="text-sm font-medium text-slate-400"
          >
            {active.label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Área de prenda */}
      <div className="relative flex-1 min-h-0 bg-slate-50 mx-3 mb-2 rounded-xl overflow-hidden">
        {/* Imagen */}
        <div className="absolute inset-0 flex items-center justify-center p-3">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.id}
              src={active.src}
              alt={active.label}
              className="max-w-full max-h-full object-contain drop-shadow-xl"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </div>

        {/* Logo superpuesto */}
        <AnimatePresence>
          {showLogo && colorIdx === 2 && (
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
              className="absolute top-[26%] left-[55%] w-11 h-11 -translate-x-1/2 -translate-y-1/2"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_14px_rgba(217,70,154,0.45)]">
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

        {/* Badge cantidad */}
        <div className="absolute top-3 right-3 bg-slate-800/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
          50 u.
        </div>
      </div>

      {/* Miniaturas de color */}
      <div className="px-4 pb-2 shrink-0">
        <div className="flex items-center justify-center gap-4">
          {COLORS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setColorIdx(i);
                if (i === 2) setShowLogo(true);
              }}
              className="flex flex-col items-center gap-1"
            >
              <div
                className={`w-11 h-11 rounded-lg border-2 overflow-hidden transition-all duration-150 ${
                  i === colorIdx
                    ? "border-blue-500 ring-2 ring-blue-100 scale-105"
                    : "border-slate-200 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={c.src} alt={c.label} className="w-full h-full object-cover" />
              </div>
              <span
                className={`text-[10px] font-medium ${
                  i === colorIdx ? "text-blue-600 font-semibold" : "text-slate-400"
                }`}
              >
                {c.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Texto de posición */}
      <div className="px-4 pb-2 shrink-0">
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

      {/* Área de upload (emulación del sistema real) */}
      <AnimatePresence>
        {showUpload && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden shrink-0"
          >
            <div className="mx-4 mb-3">
              {!uploadDone ? (
                <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Upload className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">1. Sube tu logo o diseño</p>
                  <p className="text-[11px] text-slate-400">PNG, JPG o SVG · Máx 10MB</p>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <ImageIcon className="w-5 h-5 text-emerald-600" />
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
