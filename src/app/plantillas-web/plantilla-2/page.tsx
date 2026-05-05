"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { tenantMock } from "@/lib/tenant-mock";

export default function Plantilla2() {
  const t = tenantMock;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-lg">
              {t.logoText.charAt(0)}
            </div>
            <span className="font-bold text-lg text-slate-900">{t.logoText}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#cotizar" className="hover:text-blue-600 transition-colors">Cotizar</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
          <a
            href={t.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
          >
            Cotizar ahora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6">
                <CheckCircle className="w-3.5 h-3.5" />
                Cotizador online activo
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Bordados de calidad,{" "}
                <span className="text-blue-600">
                  cotizados al instante.
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Más de 15 años bordando para empresas, equipos deportivos y eventos.
                Ahora con cotización online para que no pierdas tiempo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={t.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  Cotizar mi diseño
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+59898133523"
                  className="px-8 py-4 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                  Llamar al taller
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                <Image
                  src="/mockups/polo-blue-front.png"
                  alt="Polo con bordado"
                  width={600}
                  height={600}
                  className="w-full"
                  unoptimized
                />
                <div className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg">
                  Q
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros servicios</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Tres técnicas para que tu logo quede como vos querés.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cotización */}
      <section id="cotizar" className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="rounded-[2rem] bg-blue-600 p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Cotizá en segundos, no en horas.
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Subí tu logo, elegí la prenda y la posición, y recibí un precio estimado al instante.
              Si te cierra, nos contactamos para confirmar.
            </p>
            <a
              href={t.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Ir al cotizador
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contactanos</h2>
            <p className="text-slate-600">
              Si preferís hablar directo, acá estamos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href={`https://wa.me/${t.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/10 flex items-center justify-center text-[#25d366]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">WhatsApp</div>
                <div className="font-medium text-slate-900">{t.phone}</div>
              </div>
            </a>
            <a
              href={`mailto:${t.email}`}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <div className="font-medium text-slate-900">{t.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Dirección</div>
                <div className="font-medium text-slate-900">{t.address}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Horarios</div>
                <div className="font-medium text-slate-900">{t.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-10 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
              {t.logoText.charAt(0)}
            </div>
            <span className="font-medium text-slate-900">{t.logoText}</span>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {t.name}. A product of QUOTIXOS GROUP LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
