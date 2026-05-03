"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Zap, ArrowRight, CheckCircle2, ImageIcon, Upload, User, Phone, ChevronRight } from "lucide-react";

// ── WHATSAPP MESSAGES ──
const PHONE_MESSAGES = [
  { from: "client", text: "Hola, ¿cuánto sale una remera con un logo chiquito?", delay: 0 },
  { from: "you", text: "Hola! Depende del logo. Me lo pasás?", delay: 800 },
  { from: "client", text: "*envía imagen pixelada*", delay: 1600, type: "image" },
  { from: "you", text: "¿En qué formato lo tenés? Ese no sirve para bordar.", delay: 2400 },
  { from: "client", text: "Uh, no sé. Es el único que tengo.", delay: 3200 },
  { from: "you", text: "¿Cuántas unidades serían? ¿Qué color de remera?", delay: 4000 },
  { from: "client", text: "No sé todavía, era para ver más o menos.", delay: 4800 },
];

// ── QUOTIX STEPS (el flujo completo del cotizador) ──
const QUOTIX_STEPS = [
  { id: "color", label: "Paso 1: Elegí tu prenda", duration: 2500 },
  { id: "upload", label: "Paso 2: Subí tu logo", duration: 2500 },
  { id: "position", label: "Paso 3: Posicioná el logo", duration: 3500 },
  { id: "quantity", label: "Paso 4: Elegí la cantidad", duration: 3000 },
  { id: "data", label: "Paso 5: Completá tus datos", duration: 3000 },
  { id: "result", label: "Paso 6: ¡Cotización lista!", duration: 4500 },
];

const PHASES = [
  { id: "whatsapp", duration: 7000 },
  { id: "timeout", duration: 2500 },
  { id: "split", duration: 500 },
  { id: "quotix", duration: 20000 }, // todos los pasos de Quotix juntos
  { id: "compare", duration: 4000 },
];

export default function HeroChatToMockup() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [loopKey, setLoopKey] = useState(0);
  const [msgIdx, setMsgIdx] = useState(-1);
  const [showTyping, setShowTyping] = useState(false);

  // Sub-estado para los pasos de Quotix
  const [qxStep, setQxStep] = useState(0);
  const [qxQty, setQxQty] = useState(10);

  const phase = PHASES[phaseIdx].id;

  const run = useCallback(() => {
    setPhaseIdx(0);
    setMsgIdx(-1);
    setShowTyping(false);
    setQxStep(0);
    setQxQty(10);

    const timers: NodeJS.Timeout[] = [];

    // WhatsApp messages
    PHONE_MESSAGES.forEach((m, i) => {
      timers.push(
        setTimeout(() => {
          setMsgIdx(i);
          setShowTyping(false);
          const next = PHONE_MESSAGES[i + 1];
          if (next && next.from !== m.from) {
            timers.push(setTimeout(() => setShowTyping(true), 300));
          }
        }, m.delay)
      );
    });

    // Main phases
    let delay = 0;
    for (let i = 1; i < PHASES.length; i++) {
      delay += PHASES[i - 1].duration;
      timers.push(setTimeout(() => setPhaseIdx(i), delay));
    }

    // Quotix sub-steps (se activan durante la fase "quotix")
    let qxDelay = PHASES[0].duration + PHASES[1].duration + PHASES[2].duration;
    for (let i = 1; i < QUOTIX_STEPS.length; i++) {
      qxDelay += QUOTIX_STEPS[i - 1].duration;
      timers.push(setTimeout(() => setQxStep(i), qxDelay));
    }
    // Cantidad: animar de 10 a 100 durante el paso "quantity"
    const qtyStart = qxDelay - QUOTIX_STEPS[3].duration + 500;
    timers.push(setTimeout(() => setQxQty(100), qtyStart));

    const total = delay + PHASES[PHASES.length - 1].duration;
    timers.push(setTimeout(() => setLoopKey((k) => k + 1), total + 600));

    return timers;
  }, []);

  useEffect(() => {
    const timers = run();
    return () => timers.forEach(clearTimeout);
  }, [run, loopKey]);

  const qxStepData = QUOTIX_STEPS[qxStep];

  return (
    <div className="relative w-full h-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
      {/* ════════════════════════════════════════════════════
          FASE WHATSAPP (izquierda, se encoge en split)
          ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {phaseIdx <= 1 && (
          <motion.div
            key={`wa-${loopKey}`}
            className="absolute inset-0 flex flex-col z-10"
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: phaseIdx >= 2 ? 0.25 : 1,
              scale: phaseIdx >= 2 ? 0.82 : 1,
              x: phaseIdx >= 2 ? "-26%" : "0%",
            }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
          >
            {/* Header WhatsApp */}
            <div className="bg-[#075e54] px-3 py-2.5 flex items-center gap-2 shrink-0">
              <div className="w-7 h-7 rounded-full bg-slate-300 flex items-center justify-center text-xs">👤</div>
              <div>
                <div className="text-[11px] font-semibold text-white">Cliente potencial</div>
                <div className="text-[9px] text-white/60">en línea</div>
              </div>
            </div>

            {/* Chat */}
            <div className="flex-1 bg-[#e5ddd5] relative overflow-hidden p-2.5 flex flex-col gap-1.5">
              {PHONE_MESSAGES.map((m, i) => (
                <AnimatePresence key={`msg-${i}-${loopKey}`}>
                  {msgIdx >= i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`max-w-[85%] ${m.from === "client" ? "self-start" : "self-end"}`}
                    >
                      <div
                        className={`rounded-lg px-2.5 py-1.5 text-[10px] leading-snug shadow-sm ${
                          m.from === "client"
                            ? "bg-white text-slate-800 rounded-tl-none"
                            : "bg-[#dcf8c6] text-slate-800 rounded-tr-none"
                        }`}
                      >
                        {m.type === "image" ? (
                          <div className="bg-slate-200 rounded w-20 h-12 flex items-center justify-center">
                            <ImageIcon className="w-4 h-4 text-slate-400" />
                          </div>
                        ) : (
                          m.text
                        )}
                        <div className="text-[8px] text-slate-400 text-right mt-0.5">
                          {m.from === "you" && <CheckCircle2 className="w-2.5 h-2.5 inline text-blue-400 mr-0.5" />}
                          10:{String(12 + i * 3).padStart(2, "0")}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}

              <AnimatePresence>
                {showTyping && msgIdx < PHONE_MESSAGES.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="self-start bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm"
                  >
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="bg-[#f0f0f0] px-2.5 py-1.5 flex items-center gap-2 shrink-0">
              <div className="flex-1 bg-white rounded-full h-7 flex items-center px-3 text-[10px] text-slate-400">
                Escribe un mensaje
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════
          OVERLAY "40 MIN DESPUÉS"
          ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {phaseIdx === 1 && (
          <motion.div
            key={`timeout-${loopKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-xs font-bold text-white">40 minutos después...</p>
                <p className="text-[10px] text-white/60">El cliente sigue sin responder. No cerraste la venta.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════
          FLECHA / VS
          ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {phaseIdx >= 2 && (
          <motion.div
            key={`vs-${loopKey}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════
          LABELS "ANTES" / "DESPUÉS"
          ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {phaseIdx >= 2 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-2.5 left-3 z-30 text-[9px] font-bold uppercase tracking-wider text-red-400 bg-black/40 px-1.5 py-0.5 rounded"
            >
              Antes
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-2.5 right-3 z-30 text-[9px] font-bold uppercase tracking-wider text-lime-400 bg-black/40 px-1.5 py-0.5 rounded"
            >
              Después
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════
          PANEL QUOTIX (desde la derecha)
          ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {phaseIdx >= 2 && (
          <motion.div
            key={`qx-${loopKey}`}
            className="absolute inset-0 flex flex-col z-10"
            initial={{ opacity: 0, x: "55%", scale: 0.88 }}
            animate={{
              opacity: 1,
              x: phaseIdx >= 3 ? "26%" : "55%",
              scale: phaseIdx >= 3 ? 1 : 0.88,
            }}
            transition={{ type: "spring", stiffness: 65, damping: 15 }}
          >
            {/* Header Quotix */}
            <div className="bg-[#0f172a] border-b border-slate-700 px-3 py-2 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-[#d9469a] flex items-center justify-center text-white text-[9px] font-bold">Q</div>
                <span className="text-[11px] font-semibold text-white">Quotix</span>
              </div>
              <span className="text-[9px] bg-lime-400 text-slate-900 font-bold px-1.5 py-0.5 rounded-full">En vivo</span>
            </div>

            {/* ── ÁREA DE PRENDA ── */}
            <div className="flex-1 min-h-0 relative bg-slate-800 overflow-hidden">
              <img
                src="/mockups/polo-black-front.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

              {/* Logo Q animado */}
              <AnimatePresence>
                {qxStep >= 2 && (
                  <motion.div
                    key={`qxlogo-${loopKey}`}
                    className="absolute"
                    style={{ width: 32, height: 32 }}
                    initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 2.5, opacity: 0 }}
                    animate={{
                      top: qxStep >= 3 ? "28%" : "50%",
                      left: qxStep >= 3 ? "52%" : "50%",
                      x: "-50%",
                      y: "-50%",
                      scale: qxStep >= 3 ? 0.9 : 2.5,
                      opacity: 1,
                      rotate: qxStep >= 3 ? -3 : 0,
                    }}
                    transition={{ type: "spring", stiffness: qxStep >= 3 ? 80 : 140, damping: 14 }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_3px_10px_rgba(217,70,154,0.6)]">
                      <circle cx="50" cy="50" r="48" fill="#d9469a" />
                      <text x="50" y="68" textAnchor="middle" fill="white" fontSize="56" fontWeight="bold">Q</text>
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Badge medida */}
              <AnimatePresence>
                {qxStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute top-[38%] left-[56%] bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-lg"
                  >
                    ~6.1 cm
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Miniaturas de color (paso color) */}
              <AnimatePresence>
                {qxStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bottom-2 left-2 right-2 flex justify-center gap-2"
                  >
                    {[
                      { src: "/mockups/polo-white-front.png", label: "Blanco" },
                      { src: "/mockups/polo-blue-front.png", label: "Azul" },
                      { src: "/mockups/polo-black-front.png", label: "Negro", active: true },
                    ].map((c) => (
                      <div key={c.label} className="flex flex-col items-center gap-0.5">
                        <div className={`w-8 h-8 rounded-md border-2 overflow-hidden ${c.active ? "border-white shadow-lg" : "border-white/30 opacity-50"}`}>
                          <img src={c.src} alt={c.label} className="w-full h-full object-cover" />
                        </div>
                        <span className={`text-[8px] ${c.active ? "text-white font-semibold" : "text-white/40"}`}>{c.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Upload area (paso upload) */}
              <AnimatePresence>
                {qxStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bottom-2 left-2 right-2"
                  >
                    <div className="bg-blue-500/30 backdrop-blur border border-blue-300/30 rounded-lg px-3 py-2 flex items-center gap-2 animate-pulse">
                      <Upload className="w-3.5 h-3.5 text-blue-200 shrink-0" />
                      <div>
                        <p className="text-[10px] font-medium text-white">Subiendo logo_quotix.png...</p>
                        <div className="w-24 h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
                          <motion.div className="h-full bg-white rounded-full" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2 }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Slider cantidad (paso quantity) */}
              <AnimatePresence>
                {qxStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bottom-2 left-2 right-2"
                  >
                    <div className="bg-slate-900/70 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
                      <div className="flex justify-between text-[9px] text-white/60 mb-1">
                        <span>Cantidad</span>
                        <motion.span className="font-bold text-white">{qxQty} u.</motion.span>
                      </div>
                      <div className="relative h-1.5 bg-white/10 rounded-full">
                        <motion.div className="absolute inset-y-0 left-0 bg-blue-500 rounded-full" animate={{ width: `${((qxQty - 10) / 190) * 100}%` }} transition={{ type: "spring", stiffness: 40 }} />
                        <motion.div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow border-2 border-blue-500" animate={{ left: `${((qxQty - 10) / 190) * 100}%`, x: "-50%" }} transition={{ type: "spring", stiffness: 40 }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── ÁREA DE CONTROLES / PASOS ── */}
            <div className="bg-[#0f172a] border-t border-slate-700 px-3 py-2.5 shrink-0 min-h-[72px]">
              {/* Label del paso */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`qxlabel-${qxStep}-${loopKey}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-1.5 mb-1.5"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-medium text-white/80">{qxStepData.label}</span>
                </motion.div>
              </AnimatePresence>

              {/* Contenido según paso */}
              <AnimatePresence mode="wait">
                {/* Paso 0: Color — ya se ve en la prenda */}
                {qxStep === 0 && (
                  <motion.div key="c0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[9px] text-white/40">
                    El cliente toca el color que quiere
                  </motion.div>
                )}

                {/* Paso 1: Upload — ya se ve en la prenda */}
                {qxStep === 1 && (
                  <motion.div key="c1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[9px] text-white/40">
                    Arrastra o toca para subir
                  </motion.div>
                )}

                {/* Paso 2: Posición — ya se ve en la prenda */}
                {qxStep === 2 && (
                  <motion.div key="c2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[9px] text-white/40">
                    El logo aparece en el centro. Lo arrastra al pecho.
                  </motion.div>
                )}

                {/* Paso 3: Cantidad — slider ya se ve en la prenda */}
                {qxStep === 3 && (
                  <motion.div key="c3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-between">
                    <span className="text-[9px] text-white/40">Desliza para ajustar</span>
                    <span className="text-[9px] text-blue-400 font-semibold">100 u. = -15%</span>
                  </motion.div>
                )}

                {/* Paso 4: Datos */}
                {qxStep === 4 && (
                  <motion.div key="c4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-1.5">
                    <div className="flex items-center gap-2 bg-slate-800 rounded-md px-2 py-1 border border-slate-700">
                      <User className="w-3 h-3 text-slate-500 shrink-0" />
                      <motion.span className="text-[10px] text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Carlos López</motion.span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-800 rounded-md px-2 py-1 border border-slate-700">
                      <Phone className="w-3 h-3 text-slate-500 shrink-0" />
                      <motion.span className="text-[10px] text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>+598 98 123 456</motion.span>
                    </div>
                  </motion.div>
                )}

                {/* Paso 5: Resultado */}
                {qxStep === 5 && (
                  <motion.div key="c5" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-white/50">100 u. · Negro Frente · Logo pecho</span>
                      <span className="text-[9px] bg-red-500/20 text-red-300 px-1 py-0.5 rounded">-15%</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-white">$1,275</span>
                      <span className="text-[9px] text-white/40">$1,148 — $1,403</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-400/20 rounded-md px-2 py-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-[9px] text-emerald-300 font-medium">Lead calificado enviado al taller</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════
          TEXTO COMPARATIVO FINAL
          ════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {phaseIdx >= 4 && (
          <motion.div
            key={`compare-${loopKey}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-3 left-3 right-3 z-40"
          >
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-400" />
                <span className="text-[10px] text-white/70">
                  <span className="text-red-400 font-bold">40 min</span> de ida y vuelta
                </span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-lime-400" />
                <span className="text-[10px] text-white/70">
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
