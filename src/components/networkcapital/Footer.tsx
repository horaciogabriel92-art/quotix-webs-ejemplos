"use client";

import Image from "next/image";
import { Mail, Instagram, Facebook, ExternalLink, MapPin } from "lucide-react";
import { BRAND } from "@/lib/networkcapital-data";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0B1628] border-t border-[#007DB8]/15">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 items-start text-center md:text-left">
          {/* Logo + slogan */}
          <div className="md:col-span-1">
            <Image
              src="/networkcapital/logo.png"
              alt="Network Capital"
              width={220}
              height={70}
              className="object-contain mb-4 mx-auto md:mx-0 h-14 w-auto"
            />
            <p className="text-white/50 text-sm mb-2">{BRAND.slogan}</p>
            <p className="text-[#F2B411] text-xs font-bold uppercase tracking-wider">
              Capital Co. · Hecho en Uruguay
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a
                href="#inicio"
                className="text-white/50 hover:text-[#F2B411] transition-colors text-sm"
              >
                Inicio
              </a>
              <a
                href="#productos"
                className="text-white/50 hover:text-[#F2B411] transition-colors text-sm"
              >
                Productos
              </a>
              <a
                href="#ubicacion"
                className="text-white/50 hover:text-[#F2B411] transition-colors text-sm"
              >
                Ubicación
              </a>
              <a
                href={BRAND.ctaUrl}
                className="text-white/50 hover:text-[#F2B411] transition-colors text-sm"
              >
                Cotizar
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#F2B411]" />
                <span>{BRAND.address}</span>
              </div>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#F2B411] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {BRAND.email}
              </a>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-[#F2B411]/20 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-white/70" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-[#F2B411]/20 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-white/70" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              ¿Empezamos?
            </h4>
            <p className="text-white/50 text-sm mb-4">
              Mínimo 10 unidades. Cotizá tu producción por mayor hoy mismo.
            </p>
            <a
              href="https://app-networkcapital.quotixos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2B411] text-[#007DB8] font-bold rounded-xl hover:bg-[#FFD700] transition-all text-sm"
            >
              Cotizar ahora
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {BRAND.name} Co. Hecho en Uruguay.
            Todos los derechos reservados.
          </p>
          <a
            href="https://enb.quotixos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#F2B411] transition-colors text-xs"
          >
            <span>Creado por</span>
            <span className="font-bold">Quotix</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
