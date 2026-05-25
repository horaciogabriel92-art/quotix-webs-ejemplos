"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { stores } from "@/lib/store-mocks";
import { useCurrency } from "@/context/CurrencyContext";

export default function Plantilla3() {
  const { format } = useCurrency();
  const s = stores[2];
  const c = s.colors;

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: c.bg, color: c.text }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${c.bg}ee`, borderColor: c.border }}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg" style={{ backgroundColor: c.ctaBg, color: c.ctaText }}>
              {s.logoText.charAt(0)}
            </div>
            <span className="font-black text-lg tracking-tight">{s.logoText}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold" style={{ color: c.textMuted }}>
            <a href="#servicios" className="hover:text-white transition-colors">SERVICIOS</a>
            <a href="#trabajos" className="hover:text-white transition-colors">TRABAJOS</a>
            <a href="#contacto" className="hover:text-white transition-colors">CONTACTO</a>
          </nav>
          <a
            href={s.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full font-black text-sm transition-colors hover:brightness-110"
            style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
          >
            COTIZÁ TU PROYECTO
          </a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: `linear-gradient(to bottom, ${c.heroGradientFrom}, ${c.heroGradientTo})` }}>
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
                {s.tagline.split(".").map((part, i, arr) => (
                  <span key={i}>
                    {i === arr.length - 1 ? <span style={{ color: c.accent }}>{part}</span> : part}
                    {i < arr.length - 1 && "."}
                    <br />
                  </span>
                ))}
              </h1>
              <p className="text-lg mb-8 max-w-md leading-relaxed" style={{ color: c.textMuted }}>
                {s.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={s.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-black text-lg inline-flex items-center gap-2 transition-colors hover:brightness-110"
                  style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
                >
                  COTIZÁ TU PROYECTO
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${s.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-bold border-2 transition-colors hover:bg-white/10"
                  style={{ borderColor: c.border, color: c.text }}
                >
                  CONSULTAR
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-4" style={{ borderColor: c.border }}>
                <Image src={s.heroImage} alt="Ejemplo de trabajo" width={600} height={600} className="w-full" unoptimized />
                <div className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square bg-white rounded-lg flex items-center justify-center text-slate-900 font-black text-2xl shadow-2xl">
                  Q
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4">SERVICIOS</h2>
            <p className="text-slate-600 text-lg">Elegí la técnica. Cotizá online al instante.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {s.services.map((svc, i) => (
              <div key={i} className="p-8 rounded-3xl border-2 border-slate-100 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-5">{svc.icon}</div>
                <h3 className="font-black text-2xl mb-2">{svc.title}</h3>
                <p className="text-slate-600 mb-5">{svc.desc}</p>
                <p className="font-black text-sm mb-6 text-emerald-600">DESDE {format(svc.priceFromUsd)} POR PRENDA</p>
                <a
                  href={s.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-colors bg-emerald-500 text-white hover:bg-emerald-600"
                >
                  COTIZÁ TU PROYECTO
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trabajos */}
      <section id="trabajos" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4">TRABAJOS</h2>
            <p className="text-lg" style={{ color: c.textMuted }}>Algunos ejemplos de lo que hacemos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {s.portfolio.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border-2 hover:-translate-y-1 transition-all duration-300" style={{ borderColor: c.border, backgroundColor: c.cardBg }}>
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="font-black text-2xl mb-2">{item.title}</h3>
                <p style={{ color: c.textMuted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            DEJÁ DE ESPERAR POR PRESUPUESTOS.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
            Usá nuestro cotizador online. En menos de 2 minutos tenés un presupuesto estimado basado en tu diseño.
          </p>
          <a
            href={s.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-black text-xl transition-colors hover:brightness-110"
            style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
          >
            COTIZÁ TU PROYECTO
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4">CONTACTO</h2>
            <p className="text-slate-500">Preferís hablar directo? Acá estamos.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Phone, label: "WhatsApp", value: s.phone, href: `https://wa.me/${s.whatsapp}` },
              { icon: Mail, label: "Email", value: s.email, href: `mailto:${s.email}` },
              { icon: MapPin, label: "Dirección", value: s.address },
              { icon: Clock, label: "Horarios", value: s.hours },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href || undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-6 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-100 text-emerald-600">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                  <div className="font-bold">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-slate-100 py-10 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm text-white" style={{ backgroundColor: c.primary }}>
              {s.logoText.charAt(0)}
            </div>
            <span className="font-bold">{s.name}</span>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {s.name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
