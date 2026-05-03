"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Target } from "lucide-react";

const LEADS = [
  { name: "Juan Pérez", product: "20 remeras con logo", time: "Hace 12 segundos" },
  { name: "María González", product: "15 gorras bordadas", time: "Hace 28 segundos" },
  { name: "Carlos Ruiz", product: "50 polos corporativos", time: "Hace 45 segundos" },
  { name: "Ana Martínez", product: "10 camperas personalizadas", time: "Hace 1 minuto" },
  { name: "Bordados del Sur", product: "100 bolsas de tela", time: "Hace 2 minutos" },
];

export default function LeadNotification() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % LEADS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Sutil glow de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#bf3480]/10 rounded-full blur-3xl" />
      </div>

      {/* Área donde caen las notificaciones */}
      <div className="relative w-full h-full flex items-start justify-center pt-8 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: -120, opacity: 0, scale: 0.85 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ x: 200, opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-xs"
          >
            <div className="relative group">
              {/* Glow detrás de la tarjeta */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#bf3480]/30 to-[#d4f542]/20 rounded-2xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Tarjeta */}
              <div className="relative flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl shadow-2xl">
                <div className="w-9 h-9 rounded-full bg-[#bf3480]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-[#d9469a]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white leading-snug">
                    Nuevo pedido de cotización
                  </p>
                  <p className="text-xs text-[#94a3b8] mt-0.5 truncate">
                    {LEADS[index].name} — {LEADS[index].product}
                  </p>
                  <p className="text-[10px] text-[#64748b] mt-1 font-medium">
                    {LEADS[index].time}
                  </p>
                </div>

                {/* Indicador de estado */}
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#d4f542] shadow-[0_0_8px_rgba(212,245,66,0.6)]" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Líneas decorativas sutiles tipo "scan" */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent opacity-50" />
      <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#334155]/50 to-transparent opacity-30" />
    </div>
  );
}
