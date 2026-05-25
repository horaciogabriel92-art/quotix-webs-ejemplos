"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { stores } from "@/lib/store-mocks";
import { useCurrency } from "@/context/CurrencyContext";

export default function Plantilla4() {
  const { format } = useCurrency();
  const s = stores[3];
  const c = s.colors;

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: c.bg, color: c.text }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${c.bg}ee`, borderColor: c.border }}>
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-medium text-sm" style={{ backgroundColor: c.primary, color: c.ctaText }}>
              {s.logoText.charAt(0)}
            </div>
            <span className="font-medium text-lg tracking-tight">{s.logoText}</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm" style={{ color: c.textMuted }}>
            <a href="#servicios" className="hover:text-slate-900 transition-colors">Servicios</a>
            <a href="#trabajos" className="hover:text-slate-900 transition-colors">Trabajos</a>
            <a href="#contacto" className="hover:text-slate-900 transition-colors">Contacto</a>
          </nav>
          <a
            href={s.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
          >
            Cotizá tu proyecto
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] mb-8" style={{ color: c.textMuted }}>
              Taller de bordado y estampado
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 tracking-tight">
              {s.tagline.split(",").map((part, i, arr) => (
                <span key={i}>
                  {part.trim()}
                  {i < arr.length - 1 && ", "}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: c.textMuted }}>
              {s.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={s.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors hover:opacity-90"
                style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
              >
                Cotizá tu proyecto
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${s.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full border font-medium transition-colors hover:bg-slate-100"
                style={{ borderColor: c.border, color: c.text }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden" style={{ backgroundColor: c.cardBg, border: `1px solid ${c.border}` }}>
            <Image src={s.heroImage} alt="Ejemplo de trabajo" width={800} height={800} className="w-full max-w-lg mx-auto" unoptimized />
            <div className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[18%] aspect-square bg-white rounded-md flex items-center justify-center text-slate-900 font-bold text-xl shadow-md">
              Q
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 md:py-32" style={{ backgroundColor: c.cardBg }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: c.textMuted }}>Servicios</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Tres maneras de dejar tu marca.
            </h2>
          </div>
          <div className="space-y-0">
            {s.services.map((svc, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-t group hover:bg-white/50 transition-colors -mx-6 px-6"
                style={{ borderColor: c.border }}
              >
                <div className="text-3xl md:w-12 shrink-0">{svc.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-xl mb-2">{svc.title}</h3>
                  <p className="leading-relaxed max-w-lg mb-4" style={{ color: c.textMuted }}>{svc.desc}</p>
                  <p className="font-medium text-sm mb-4">Desde {format(svc.priceFromUsd)} por prenda</p>
                  <a
                    href={s.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
                    style={{ color: c.text }}
                  >
                    Cotizá tu proyecto
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trabajos */}
      <section id="trabajos" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: c.textMuted }}>Trabajos</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Cada proyecto es distinto.
            </h2>
          </div>
          <div className="space-y-0">
            {s.portfolio.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-t group hover:bg-slate-50/50 transition-colors -mx-6 px-6"
                style={{ borderColor: c.border }}
              >
                <div className="text-3xl md:w-12 shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-xl mb-2">{item.title}</h3>
                  <p className="leading-relaxed max-w-lg" style={{ color: c.textMuted }}>{item.desc}</p>
                </div>
                <div className="hidden md:block" style={{ color: c.textMuted }}>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ backgroundColor: c.text, color: c.bg }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] mb-8" style={{ opacity: 0.5 }}>
            Cotizador online
          </p>
          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Presupuesto estimado
            <br />
            <span className="font-medium">en menos de 2 minutos.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12 leading-relaxed" style={{ opacity: 0.7 }}>
            Subí tu diseño, elegí la técnica y la cantidad, y recibí un rango de precio basado en nuestra fórmula.
          </p>
          <a
            href={s.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: c.bg, color: c.text }}
          >
            Cotizá tu proyecto
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 md:py-32" style={{ backgroundColor: c.cardBg }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: c.textMuted }}>Contacto</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
                Hablamos.
              </h2>
              <p className="leading-relaxed" style={{ color: c.textMuted }}>
                Respondemos por WhatsApp y email en el día.
                Si querés pasar por el taller, avisanos antes para coordinar.
              </p>
            </div>
            <div className="space-y-6">
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
                  className="flex items-center gap-5 py-5 border-b group transition-colors hover:border-slate-300"
                  style={{ borderColor: c.border }}
                >
                  <item.icon className="w-5 h-5 shrink-0" style={{ color: c.textMuted }} />
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: c.textMuted }}>{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: c.border }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-medium text-xs text-white" style={{ backgroundColor: c.primary }}>
              {s.logoText.charAt(0)}
            </div>
            <span className="font-medium">{s.name}</span>
          </div>
          <p className="text-sm" style={{ color: c.textMuted }}>
            © {new Date().getFullYear()} {s.name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
