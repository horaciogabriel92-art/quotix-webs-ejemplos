"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { tenantMock } from "@/lib/tenant-mock";

export default function Plantilla1() {
  const t = tenantMock;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0f172a]/80 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#bf3480] to-[#d9469a] flex items-center justify-center font-bold text-lg">
              {t.logoText.charAt(0)}
            </div>
            <span className="font-bold text-lg tracking-tight">{t.logoText}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#cotizar" className="hover:text-white transition-colors">Cotizar</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <a
            href={t.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#d4f542] text-[#0f172a] font-bold text-sm hover:bg-[#e5ff66] transition-colors"
          >
            Cotizar ahora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#bf3480]/20 via-transparent to-[#d4f542]/10" />
        <div className="container mx-auto px-6 py-20 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-[#d4f542] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4f542] animate-pulse" />
                Cotizador online activo
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Tu logo en la prenda,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf3480] to-[#d4f542]">
                  antes de que exista.
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-lg">
                Elegís la prenda, subís tu diseño y en segundos sabés cuánto sale.
                Sin llamadas. Sin esperas. Sin sorpresas.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={t.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-[#d4f542] text-[#0f172a] font-bold text-base hover:bg-[#e5ff66] transition-colors inline-flex items-center gap-2"
                >
                  Cotizar mi diseño
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+59898133523"
                  className="px-8 py-4 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  Llamar al taller
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#bf3480]/30 to-[#d4f542]/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <Image
                  src="/mockups/polo-white-front.png"
                  alt="Polo con bordado de muestra"
                  width={600}
                  height={600}
                  className="w-full"
                  unoptimized
                />
                <div className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[22%] aspect-square bg-white rounded-lg flex items-center justify-center text-[#0f172a] font-bold text-2xl shadow-2xl">
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
            <p className="text-slate-400 max-w-xl mx-auto">
              Tres técnicas para que tu logo quede como vos querés.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cotización */}
      <section id="cotizar" className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#bf3480] to-[#d9469a] p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-30" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cotizá en segundos, no en horas.
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Subí tu logo, elegí la prenda y la posición, y recibí un precio estimado al instante.
                Si te cierra, nos contactamos para confirmar.
              </p>
              <a
                href={t.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-[#0f172a] text-white font-bold text-lg hover:bg-[#1e293b] transition-colors"
              >
                Ir al cotizador
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactanos</h2>
            <p className="text-slate-400">
              Si preferís hablar directo, acá estamos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href={`https://wa.me/${t.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/20 flex items-center justify-center text-[#25d366]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-400">WhatsApp</div>
                <div className="font-medium">{t.phone}</div>
              </div>
            </a>
            <a
              href={`mailto:${t.email}`}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Email</div>
                <div className="font-medium">{t.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Dirección</div>
                <div className="font-medium">{t.address}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Horarios</div>
                <div className="font-medium">{t.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#bf3480] to-[#d9469a] flex items-center justify-center font-bold text-sm">
              {t.logoText.charAt(0)}
            </div>
            <span className="font-medium">{t.logoText}</span>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {t.name}. A product of QUOTIXOS GROUP LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
