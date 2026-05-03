"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Zap, ArrowRight, CheckCircle2, ImageIcon, Upload } from "lucide-react";

const PHONE_MESSAGES = [
  { from: "client", text: "Hola, ¿cuánto sale una remera con un logo chiquito?", delay: 0 },
  { from: "you", text: "Hola! Depende del logo. Me lo pasás?", delay: 800 },
  { from: "client", text: "*envía imagen pixelada*", delay: 1600, type: "image" },
  { from: "you", text: "¿En qué formato lo tenés? Ese no sirve para bordar.", delay: 2400 },
  { from: "client", text: "Uh, no sé. Es el único que tengo.", delay: 3200 },
  { from: "you", text: "¿Cuántas unidades serían? ¿Qué color de remera?", delay: 4000 },
  { from: "client", text: "No sé todavía, era para ver más o menos.", delay: 4800 },
];

const PHASES = [
  { id: "whatsapp", duration: 7000 },
  { id: "timeout", duration: 2500 },
  { id: "split", duration: 3000 },
  { id: "quotix", duration: 6000 },
  { id: "compare", duration: 4000 },
];

export default function HeroChatToMockup() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [loopKey, setLoopKey] = useState(0);
  const [msgIdx, setMsgIdx] = useState(-1);
  const [showTyping, setShowTyping] = useState(false);

  const phase = PHASES[phaseIdx].id;

  const run = useCallback(() => {
    setPhaseIdx(0);
    setMsgIdx(-1);
    setShowTyping(false);
    const timers: NodeJS.Timeout[] = [];

    // WhatsApp: mostrar mensajes progresivamente
    PHONE_MESSAGES.forEach((m, i) => {
      timers.push(
        setTimeout(() => {
          setMsgIdx(i);
          setShowTyping(false);
          // Si hay siguiente mensaje del otro lado, mostrar "escribiendo..."
          const next = PHONE_MESSAGES[i + 1];
          if (next && next.from !== m.from) {
            timers.push(setTimeout(() => setShowTyping(true), 300));
          }
        }, m.delay)
      );
    });

    // Fases
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
    <div className="relative w-full h-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
      {/* ── FASE WHATSAPP (ocupa todo al principio) ── */}
      <AnimatePresence>
        {phaseIdx <= 1 && (
          <motion.div
            key={`wa-${loopKey}`}
            className="absolute inset-0 flex flex-col"
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: phaseIdx >= 2 ? 0.3 : 1,
              scale: phaseIdx >= 2 ? 0.85 : 1,
              x: phaseIdx >= 2 ? "-28%" : "0%",
            }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          >
            {/* Header WhatsApp */}
            <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-sm">👤</div>
              <div>
                <div className="text-xs font-semibold text-white">Cliente potencial</div>
                <div className="text-[10px] text-white/60">en línea</div>
              </div>
            </div>

            {/* Chat area */}
            <div className="flex-1 bg-[#e5ddd5] relative overflow-hidden p-3 flex flex-col gap-2">
              {PHONE_MESSAGES.map((m, i) => (
                <AnimatePresence key={`msg-${i}-${loopKey}`}>
                  {msgIdx >= i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`max-w-[80%] ${m.from === "client" ? "self-start" : "self-end"}`}
                    >
                      <div
                        className={`rounded-lg px-3 py-2 text-[11px] leading-snug shadow-sm ${
                          m.from === "client"
                            ? "bg-white text-slate-800 rounded-tl-none"
                            : "bg-[#dcf8c6] text-slate-800 rounded-tr-none"
                        }`}
                      >
                        {m.type === "image" ? (
                          <div className="bg-slate-200 rounded w-24 h-16 flex items-center justify-center">
                            <ImageIcon className="w-5 h-5 text-slate-400" />
                          </div>
                        ) : (
                          m.text
                        )}
                        <div className="text-[9px] text-slate-400 text-right mt-1">
                          {m.from === "you" && <CheckCircle2 className="w-3 h-3 inline text-blue-400 mr-0.5" />}
                          10:{String(12 + i * 3).padStart(2, "0")}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {showTyping && msgIdx < PHONE_MESSAGES.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="self-start bg-white rounded-lg rounded-tl-none px-3 py-2 shadow-sm"
                  >
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer WhatsApp */}
            <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2 shrink-0">
              <div className="flex-1 bg-white rounded-full h-8 flex items-center px-3 text-[11px] text-slate-400">
                Escribe un mensaje
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── OVERLAY "40 MIN DESPUÉS" ── */}
      <AnimatePresence>
        {phaseIdx === 1 && (
          <motion.div
            key={`timeout-${loopKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="bg-black/70 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-sm font-bold text-white">40 minutos después...</p>
                <p className="text-[11px] text-white/60">El cliente sigue sin responder. No cerraste la venta.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FLECHA / VS (aparece en split) ── */}
      <AnimatePresence>
        {phaseIdx >= 2 && phaseIdx <= 3 && (
          <motion.div
            key={`vs-${loopKey}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight className="w-5 h-5 text-slate-900" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LABELS "ANTES" / "DESPUÉS" ── */}
      <AnimatePresence>
        {phaseIdx >= 2 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-3 left-4 z-30 text-[10px] font-bold uppercase tracking-wider text-red-400"
            >
              Antes
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-3 right-4 z-30 text-[10px] font-bold uppercase tracking-wider text-lime-400"
            >
              Después
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── PANEL QUOTIX (aparece desde la derecha) ── */}
      <AnimatePresence>
        {phaseIdx >= 2 && (
          <motion.div
            key={`qx-${loopKey}`}
            className="absolute inset-0 flex flex-col"
            initial={{ opacity: 0, x: "60%", scale: 0.9 }}
            animate={{
              opacity: 1,
              x: phaseIdx >= 3 ? "28%" : "60%",
              scale: phaseIdx >= 3 ? 1 : 0.9,
            }}
            transition={{ type: "spring", stiffness: 70, damping: 16 }}
          >
            {/* Header Quotix */}
            <div className="bg-[#0f172a] border-b border-slate-700 px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#d9469a] flex items-center justify-center text-white text-[10px] font-bold">Q</div>
                <span className="text-xs font-semibold text-white">Quotix</span>
              </div>
              <span className="text-[10px] bg-lime-400 text-slate-900 font-bold px-2 py-0.5 rounded-full">En vivo</span>
            </div>

            {/* Área de cotización */}
            <div className="flex-1 bg-slate-800 relative overflow-hidden">
              <img
                src="/mockups/polo-black-front.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

              {/* Logo Q en el pecho */}
              <motion.div
                className="absolute"
                style={{ width: 36, height: 36, top: "32%", left: "55%", x: "-50%", y: "-50%" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: phaseIdx >= 3 ? 1 : 0, opacity: phaseIdx >= 3 ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  <circle cx="50" cy="50" r="48" fill="#d9469a" />
                  <text x="50" y="68" textAnchor="middle" fill="white" fontSize="56" fontWeight="bold">Q</text>
                </svg>
              </motion.div>

              {/* Badge precio */}
              <motion.div
                className="absolute bottom-16 left-3 right-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: phaseIdx >= 3 ? 1 : 0, y: phaseIdx >= 3 ? 0 : 20 }}
                transition={{ delay: 1.5 }}
              >
                <div className="bg-slate-900/80 backdrop-blur border border-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-white/50">100 unidades · Negro Frente</span>
                    <span className="text-[10px] bg-red-500 text-white font-bold px-1.5 py-0.5 rounded">-15%</span>
                  </div>
                  <div className="text-xl font-bold text-white">$1,275</div>
                  <div className="text-[10px] text-white/40">Rango: $1,148 — $1,403</div>
                </div>
              </motion.div>

              {/* Upload area */}
              <motion.div
                className="absolute bottom-3 left-3 right-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: phaseIdx >= 3 ? 1 : 0, y: phaseIdx >= 3 ? 0 : 10 }}
                transition={{ delay: 2.2 }}
              >
                <div className="bg-emerald-500/20 backdrop-blur border border-emerald-300/30 rounded-lg px-3 py-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] text-white font-medium">¡Lead calificado! Nombre + WhatsApp + Logo</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TEXTO COMPARATIVO FINAL ── */}
      <AnimatePresence>
        {phaseIdx >= 4 && (
          <motion.div
            key={`compare-${loopKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 left-4 right-4 z-40"
          >
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-[11px] text-white/70">
                  <span className="text-red-400 font-bold">40 min</span> de ida y vuelta
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-lime-400" />
                <span className="text-[11px] text-white/70">
                  <span className="text-lime-400 font-bold">2 min</span> y lead cerrado
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
