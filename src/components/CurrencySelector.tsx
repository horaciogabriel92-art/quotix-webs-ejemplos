"use client";

import { useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { CURRENCIES, type CurrencyCode } from "@/lib/currencies";
import { ChevronDown } from "lucide-react";

interface Props {
  variant?: "light" | "dark";
}

export function CurrencySelector({ variant = "light" }: Props) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  const info = CURRENCIES[currency];
  const isLight = variant === "light";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1.5 text-sm font-medium rounded-lg px-3 py-1.5 transition-colors ${
          isLight
            ? "text-slate-600 hover:text-[#0f172a] hover:bg-slate-100"
            : "text-slate-300 hover:text-white hover:bg-white/10"
        }`}
      >
        <span>{info.flag}</span>
        <span>{info.symbol}</span>
        <span className="hidden sm:inline">{info.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute right-0 top-full mt-1.5 z-50 w-44 rounded-xl border shadow-lg overflow-hidden ${
              isLight
                ? "bg-white border-slate-200 shadow-slate-200/50"
                : "bg-[#1e293b] border-[#334155] shadow-black/30"
            }`}
          >
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
              const c = CURRENCIES[code];
              const active = code === currency;
              return (
                <button
                  key={code}
                  onClick={() => {
                    setCurrency(code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-colors text-left ${
                    active
                      ? isLight
                        ? "bg-blue-50 text-blue-700"
                        : "bg-blue-500/15 text-blue-400"
                      : isLight
                        ? "text-slate-700 hover:bg-slate-50"
                        : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
                  <span className="font-medium">{c.code}</span>
                  <span className={`text-xs ml-auto ${isLight ? "text-slate-400" : "text-slate-500"}`}>
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
