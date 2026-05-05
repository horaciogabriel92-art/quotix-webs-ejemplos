"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { tenantMock } from "@/lib/tenant-mock";

export default function Plantilla4() {
  const t = tenantMock;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center font-medium text-white text-sm">
              {t.logoText.charAt(0)}
            </div>
            <span className="font-medium text-lg tracking-tight">{t.logoText}</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm text-slate-500">
            <a href="#servicios" className="hover:text-slate-900 transition-colors">Servicios</a>
            <a href="#cotizar" className="hover:text-slate-900 transition-colors">Cotizar</a>
            <a href="#contacto" className="hover:text-slate-900 transition-colors">Contacto</a>
          </nav>
          <a
            href={t.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            Cotizar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm text-slate-400 uppercase tracking-[0.3em] mb-8">
              Cotizador online activo
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 tracking-tight">
              Bordados con precisión,
              <br />
              <span className="font-medium">cotizados con claridad.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
              Subí tu diseño, elegí la prenda y conocé el precio estimado al instante.
              Sin compromiso. Sin esperas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={t.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
              >
                Cotizar mi diseño
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${t.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full border border-slate-200 text-slate-700 font-medium hover:border-slate-300 transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image — full bleed minimal */}
      <section className="px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden bg-slate-50">
            <Image
              src="/mockups/polo-white-front.png"
              alt="Polo con bordado"
              width={800}
              height={800}
              className="w-full max-w-lg mx-auto"
              unoptimized
            />
            <div className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square bg-white rounded-md flex items-center justify-center text-slate-900 font-bold text-xl shadow-md">
              Q
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-20">
            <p className="text-sm text-slate-400 uppercase tracking-[0.3em] mb-4">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Tres técnicas. Un resultado.
            </h2>
          </div>
          <div className="space-y-0">
            {t.services.map((s, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 border-t border-slate-100 group hover:bg-slate-50/50 transition-colors -mx-6 px-6"
              >
                <div className="text-3xl md:w-12 shrink-0">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-xl mb-2">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed max-w-lg">{s.desc}</p>
                </div>
                <div className="hidden md:block text-slate-300 group-hover:text-slate-400 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cotización */}
      <section id="cotizar" className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-sm text-slate-500 uppercase tracking-[0.3em] mb-8">
            Cotización online
          </p>
          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Precio estimado
            <br />
            <span className="font-medium">en menos de 2 minutos.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
            Elegí la prenda, subí tu logo, seleccioná la posición y cantidad.
            Vamos a darte un rango de precio basado en nuestra fórmula.
          </p>
          <a
            href={t.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors"
          >
            Ir al cotizador
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-sm text-slate-400 uppercase tracking-[0.3em] mb-4">Contacto</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
                Hablamos.
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Si preferís charlar antes de cotizar, escribinos por WhatsApp o email.
                Respondemos en el día.
              </p>
            </div>
            <div className="space-y-6">
              <a
                href={`https://wa.me/${t.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 py-5 border-b border-slate-100 hover:border-slate-300 transition-colors group"
              >
                <Phone className="w-5 h-5 text-slate-400 group-hover:text-[#25d366] transition-colors" />
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp</div>
                  <div className="font-medium">{t.phone}</div>
                </div>
              </a>
              <a
                href={`mailto:${t.email}`}
                className="flex items-center gap-5 py-5 border-b border-slate-100 hover:border-slate-300 transition-colors group"
              >
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Email</div>
                  <div className="font-medium">{t.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-5 py-5 border-b border-slate-100">
                <MapPin className="w-5 h-5 text-slate-400" />
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Dirección</div>
                  <div className="font-medium">{t.address}</div>
                </div>
              </div>
              <div className="flex items-center gap-5 py-5 border-b border-slate-100">
                <Clock className="w-5 h-5 text-slate-400" />
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Horarios</div>
                  <div className="font-medium">{t.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center font-medium text-white text-xs">
              {t.logoText.charAt(0)}
            </div>
            <span className="font-medium">{t.logoText}</span>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {t.name}. A product of QUOTIXOS GROUP LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
