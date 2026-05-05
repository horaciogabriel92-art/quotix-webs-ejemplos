"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { stores } from "@/lib/store-mocks";

export default function Plantilla1() {
  const s = stores[0];
  const c = s.colors;

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: c.bg, color: c.text }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${c.bg}cc`, borderColor: c.border }}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg" style={{ backgroundColor: c.primary, color: c.ctaText }}>
              {s.logoText.charAt(0)}
            </div>
            <span className="font-bold text-lg">{s.logoText}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: c.textMuted }}>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#trabajos" className="hover:text-white transition-colors">Trabajos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <a
            href={s.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full font-bold text-sm transition-colors"
            style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
          >
            Cotizá tu proyecto
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom right, ${c.heroGradientFrom}, ${c.heroGradientTo})` }} />
        <div className="container mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {s.tagline.split(" ").slice(0, 4).join(" ")}{" "}
                <span style={{ color: c.accent }}>{s.tagline.split(" ").slice(4).join(" ")}</span>
              </h1>
              <p className="text-lg mb-8 max-w-lg" style={{ color: c.textMuted }}>
                {s.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={s.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2 transition-colors"
                  style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
                >
                  Cotizá tu proyecto
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${s.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl font-medium border transition-colors hover:bg-white/5"
                  style={{ borderColor: c.border, color: c.text }}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-3xl opacity-30" style={{ backgroundColor: c.primary }} />
              <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: c.border, backgroundColor: c.cardBg }}>
                <Image src={s.heroImage} alt="Ejemplo de trabajo" width={600} height={600} className="w-full" unoptimized />
                <div className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold text-2xl shadow-2xl">
                  Q
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros servicios</h2>
            <p className="max-w-xl mx-auto" style={{ color: c.textMuted }}>
              Elegí la técnica que mejor se adapte a tu proyecto. Cotizá online al instante.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {s.services.map((svc, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: c.cardBg, borderColor: c.border }}
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="font-bold text-xl mb-2">{svc.title}</h3>
                <p className="mb-4" style={{ color: c.textMuted }}>{svc.desc}</p>
                <p className="font-bold text-sm mb-5" style={{ color: c.accent }}>Desde {svc.priceFrom} por prenda</p>
                <a
                  href={s.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
                  style={{ backgroundColor: c.primary, color: c.ctaText }}
                >
                  Cotizá tu proyecto
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Trabajos */}
      <section id="trabajos" className="py-20" style={{ backgroundColor: c.cardBg }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">En qué trabajamos</h2>
            <p className="max-w-xl mx-auto" style={{ color: c.textMuted }}>
              Cada proyecto es distinto. Acá algunos ejemplos de lo que hacemos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {s.portfolio.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: c.bg, borderColor: c.border }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p style={{ color: c.textMuted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div
            className="rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden"
            style={{ backgroundColor: c.primary }}
          >
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: c.ctaText }}>
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: c.ctaText, opacity: 0.85 }}>
                Usá nuestro cotizador online. En menos de 2 minutos tenés un presupuesto estimado basado en tu diseño.
              </p>
              <a
                href={s.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg transition-colors"
                style={{ backgroundColor: c.bg, color: c.text }}
              >
                Cotizá tu proyecto
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 border-t" style={{ borderColor: c.border }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
            <p style={{ color: c.textMuted }}>Preferís hablar directo? Acá estamos.</p>
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
                className="flex items-center gap-4 p-6 rounded-2xl border transition-colors hover:bg-white/5"
                style={{ borderColor: c.border, backgroundColor: c.cardBg }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${c.primary}22`, color: c.primary }}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm" style={{ color: c.textMuted }}>{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: c.border }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style={{ backgroundColor: c.primary, color: c.ctaText }}>
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
