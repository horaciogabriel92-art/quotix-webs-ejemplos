"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "motion/react";
import { TrendingDown, Zap, ShieldCheck } from "lucide-react";

const BASE_PRICE = 15;

const SCENES = [
  { qty: 10, label: "Pedido mínimo", duration: 2500 },
  { qty: 50, label: "Descuento por volumen", duration: 3000 },
  { qty: 100, label: "Precio mayorista", duration: 3000 },
  { qty: 200, label: "Mejor precio garantizado", duration: 3500 },
];

function calc(qty: number) {
  const volumen = qty >= 100 ? 0.85 : qty >= 50 ? 0.9 : 1;
  const unit = +(BASE_PRICE * volumen).toFixed(2);
  const total = +(unit * qty).toFixed(0);
  const min = Math.floor(total * 0.9);
  const max = Math.ceil(total * 1.1);
  const discount = Math.round((1 - volumen) * 100);
  return { unit, total, min, max, discount, volumen };
}

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsub = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [display]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export default function PriceSlider() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [loopKey, setLoopKey] = useState(0);
  const [showSavings, setShowSavings] = useState(false);

  const scene = SCENES[sceneIdx];
  const { qty } = scene;
  const { unit, total, min, max, discount } = calc(qty);
  const pct = ((qty - 10) / (200 - 10)) * 100;

  const run = useCallback(() => {
    setSceneIdx(0);
    setShowSavings(false);
    const timers: NodeJS.Timeout[] = [];
    let delay = 0;
    for (let i = 1; i < SCENES.length; i++) {
      delay += SCENES[i - 1].duration;
      timers.push(setTimeout(() => setSceneIdx(i), delay));
      if (i === 1) timers.push(setTimeout(() => setShowSavings(true), delay + 400));
    }
    const totalDur = delay + SCENES[SCENES.length - 1].duration;
    timers.push(setTimeout(() => setLoopKey((k) => k + 1), totalDur + 600));
    return timers;
  }, []);

  useEffect(() => {
    const timers = run();
    return () => timers.forEach(clearTimeout);
  }, [run, loopKey]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-lime-400" />
          <h3 className="text-sm font-bold text-white">Cotización Instantánea</h3>
        </div>
        <span className="text-[10px] bg-lime-400 text-slate-900 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          En vivo
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex flex-col justify-center px-5 gap-4">
        {/* ── Cantidad + Slider ── */}
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs text-white/50">Cantidad</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={`qty-${qty}-${loopKey}`}
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-2xl font-bold text-white"
              >
                {qty} <span className="text-sm font-normal text-white/50">u.</span>
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Track */}
          <div className="relative h-3 bg-white/10 rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
              animate={{ width: `${pct}%` }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            />
            {/* Thumb */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-[3px] border-blue-400 flex items-center justify-center"
              animate={{ left: `${pct}%`, x: "-50%" }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            >
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </motion.div>
            {/* Marcas */}
            {[10, 50, 100, 200].map((mark) => (
              <div
                key={mark}
                className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-white/30 rounded-full"
                style={{ left: `${((mark - 10) / 190) * 100}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-white/30 mt-1.5">
            <span>10</span>
            <span>50</span>
            <span>100</span>
            <span>200</span>
          </div>
        </div>

        {/* ── Precio unitario con descuento ── */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/50 shrink-0">Precio unitario:</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={`unit-${qty}-${loopKey}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2"
            >
              {discount > 0 && (
                <span className="text-sm text-white/40 line-through">
                  ${BASE_PRICE.toFixed(2)}
                </span>
              )}
              <span className="text-lg font-bold text-white">${unit.toFixed(2)}</span>
              {discount > 0 && (
                <motion.span
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  className="text-[10px] bg-red-500 text-white font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5"
                >
                  <TrendingDown className="w-3 h-3" />
                  -{discount}%
                </motion.span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Total grande + rango ── */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 relative overflow-hidden">
          {/* Glow */}
          <motion.div
            className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Total estimado</div>
          <div className="text-4xl font-bold text-white tracking-tight">
            $<AnimatedNumber value={total} />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-white/40">
              Rango: ${min.toLocaleString()} — ${max.toLocaleString()}
            </span>
            <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
          </div>

          {/* Ahorro acumulado */}
          <AnimatePresence>
            {showSavings && discount > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 pt-2 border-t border-white/10"
              >
                <span className="text-[10px] text-lime-400 font-medium">
                  Ahorrás ${((BASE_PRICE - unit) * qty).toLocaleString()} vs. precio base
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Barra de escena / explicación ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`scene-${sceneIdx}-${loopKey}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-xs text-white/70">{scene.label}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer mini */}
      <div className="px-5 pb-3 shrink-0">
        <p className="text-[10px] text-white/30">
          El precio final se confirma al solicitar cotización formal.
        </p>
      </div>
    </div>
  );
}
