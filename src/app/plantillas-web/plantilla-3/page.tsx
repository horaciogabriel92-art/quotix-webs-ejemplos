"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { tenantMock } from "@/lib/tenant-mock";

export default function Plantilla3() {
  const t = tenantMock;

  return (
    <div className="min-h-screen bg-[#bf3480] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#bf3480]/90 border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-[#bf3480] text-lg">
              {t.logoText.charAt(0)}
            </div>
            <span className="font-bold text-lg">{t.logoText}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#cotizar" className="hover:text-white transition-colors">Cotizar</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <a
            href={t.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-[#bf3480] font-bold text-sm hover:bg-white/90 transition-colors"
          >
            Cotizar ahora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tight">
                TU LOGO.
                <br />
                TU EQUIPO.
                <br />
                <span className="text-[#d4f542]">TU IDENTIDAD.</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-md">
                Equipos deportivos, eventos corporativos, merchandising.
                Cotizá online y tené tu presupuesto en segundos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={t.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-[#bf3480] font-black text-lg hover:bg-[#d4f542] hover:text-[#0f172a] transition-colors inline-flex items-center gap-2"
                >
                  COTIZAR MI DISEÑO
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+59898133523"
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors"
                >
                  LLAMAR AL TALLER
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-4 border-white/20">
                <Image
                  src="/mockups/polo-black-front.png"
                  alt="Polo con bordado"
                  width={600}
                  height={600}
                  className="w-full"
                  unoptimized
                />
                <div className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[22%] aspect-square bg-white rounded-lg flex items-center justify-center text-[#bf3480] font-black text-2xl shadow-2xl">
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
            <p className="text-slate-600 max-w-xl mx-auto text-lg">
              Tres técnicas. Un solo objetivo: que tu marca se vea impecable.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-50 border-2 border-slate-100 hover:border-[#bf3480] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="font-black text-2xl mb-3">{s.title.toUpperCase()}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cotización */}
      <section id="cotizar" className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            DEJÁ DE ESPERAR POR PRESUPUESTOS.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            En menos de 2 minutos tenés tu cotización.
            Sin compromiso. Sin llamadas. Sin demoras.
          </p>
          <a
            href={t.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#d4f542] text-[#0f172a] font-black text-xl hover:bg-[#e5ff66] transition-colors"
          >
            IR AL COTIZADOR
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4">CONTACTANOS</h2>
            <p className="text-slate-600">
              Si preferís hablar directo, acá estamos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href={`https://wa.me/${t.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-[#25d366] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/10 flex items-center justify-center text-[#25d366]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">WhatsApp</div>
                <div className="font-bold">{t.phone}</div>
              </div>
            </a>
            <a
              href={`mailto:${t.email}`}
              className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 hover:border-[#bf3480] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#bf3480]/10 flex items-center justify-center text-[#bf3480]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <div className="font-bold">{t.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Dirección</div>
                <div className="font-bold">{t.address}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border-2 border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Horarios</div>
                <div className="font-bold">{t.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-slate-100 py-10 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#bf3480] flex items-center justify-center font-bold text-white text-sm">
              {t.logoText.charAt(0)}
            </div>
            <span className="font-bold text-slate-900">{t.logoText}</span>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {t.name}. A product of QUOTIXOS GROUP LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
