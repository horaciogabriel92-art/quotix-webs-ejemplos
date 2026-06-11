"use client";

import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { BRAND } from "@/lib/networkcapital-data";

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-[#0B1628] relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 bg-white/15 text-white text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
            Encontranos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            DÓNDE <span className="text-[#F2B411]">ESTAMOS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info card */}
          <div className="bg-[#131d2b] border border-[#007DB8]/10 rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-[#F2B411]/10 rounded-xl shrink-0">
                <MapPin className="w-6 h-6 text-[#F2B411]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Dirección</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  {BRAND.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Horario</h3>
                <p className="text-white/60 text-lg">
                  Lun a Vie: 9:00 - 18:00
                </p>
                <p className="text-white/60 text-lg">Sáb: 9:00 - 13:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#E91E8C]/10 rounded-xl shrink-0">
                <Phone className="w-6 h-6 text-[#E91E8C]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Teléfono</h3>
                <p className="text-white/60 text-lg">{BRAND.phone}</p>
              </div>
            </div>

            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#F2B411] text-black font-black text-lg rounded-xl hover:bg-[#FFD700] transition-all"
            >
              <Navigation className="w-5 h-5" />
              CÓMO LLEGAR
            </a>
          </div>

          {/* Map embed placeholder */}
          <div className="bg-[#131d2b] border border-white/10 rounded-3xl overflow-hidden min-h-[360px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.748509498104!2d-56.1773!3d-34.9106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU0JzM4LjIiUyA1NsKwMTAnMzguMyJX!5e0!3m2!1ses!2suy!4v1"
              title="Ubicación de Network Capital en Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
