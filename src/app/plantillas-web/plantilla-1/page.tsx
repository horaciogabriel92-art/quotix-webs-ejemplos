"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShoppingBag } from "lucide-react";
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
            <a href="#productos" className="hover:text-white transition-colors">Productos</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <a
            href={`https://wa.me/${s.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full font-bold text-sm transition-colors"
            style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
          >
            Pedir presupuesto
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom right, ${c.heroGradientFrom}, ${c.heroGradientTo})` }} />
        <div className="container mx-auto px-6 py-20 md:py-28 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {s.tagline.split(" ").slice(0, 3).join(" ")}{" "}
              <span style={{ color: c.accent }}>{s.tagline.split(" ").slice(3).join(" ")}</span>
            </h1>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: c.textMuted }}>
              {s.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#productos"
                className="px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2 transition-colors"
                style={{ backgroundColor: c.ctaBg, color: c.ctaText }}
              >
                Ver productos
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

          {/* Productos destacados en hero */}
          <div id="productos" className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {s.products.map((p, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 group"
                style={{ backgroundColor: c.cardBg, borderColor: c.border }}
              >
                <div className="relative aspect-square bg-white/5">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-6" unoptimized />
                  {p.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: c.primary, color: c.ctaText }}>
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                  <p className="text-sm mb-3" style={{ color: c.textMuted }}>Desde {p.priceFrom}</p>
                  <button
                    className="w-full py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2"
                    style={{ backgroundColor: c.primary, color: c.ctaText }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Consultar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros servicios</h2>
            <p className="max-w-xl mx-auto" style={{ color: c.textMuted }}>
              Tres técnicas para que tu diseño quede impecable.
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
                <h3 className="font-bold text-xl mb-3">{svc.title}</h3>
                <p style={{ color: c.textMuted }}>{svc.desc}</p>
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
                ¿Tenés un diseño en mente?
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: c.ctaText, opacity: 0.85 }}>
                Escribinos por WhatsApp con tu idea y te damos un presupuesto sin compromiso.
              </p>
              <a
                href={`https://wa.me/${s.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg transition-colors"
                style={{ backgroundColor: c.bg, color: c.text }}
              >
                Escribir por WhatsApp
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
            <p style={{ color: c.textMuted }}>Acá nos encontrás.</p>
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
