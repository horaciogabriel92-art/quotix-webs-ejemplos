"use client";

import Image from "next/image";
import { MessageCircle, Mail, Instagram, Facebook } from "lucide-react";
import { BRAND } from "@/lib/networkcapital-data";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo + slogan */}
          <div className="text-center md:text-left">
            <Image
              src="/networkcapital/logo.png"
              alt="Network Capital"
              width={200}
              height={60}
              className="object-contain mx-auto md:mx-0 mb-4"
            />
            <p className="text-white/50 text-sm">
              {BRAND.slogan}
            </p>
            <p className="text-[#F2B411] text-xs font-bold uppercase tracking-wider mt-2">
              Capital Co. · Hecho en Uruguay
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="text-white font-bold mb-4">NAVEGACIÓN</h4>
            <div className="flex flex-col gap-2">
              <a href="#productos" className="text-white/50 hover:text-[#F2B411] transition-colors text-sm">
                Productos
              </a>
              <a href={`https://wa.me/${BRAND.whatsapp}`} className="text-white/50 hover:text-[#F2B411] transition-colors text-sm">
                Cotizar
              </a>
              <a href={`mailto:${BRAND.email}`} className="text-white/50 hover:text-[#F2B411] transition-colors text-sm">
                Contacto
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-bold mb-4">CONTACTO</h4>
            <div className="flex flex-col gap-3 items-center md:items-end">
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-[#F2B411] transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 text-white/70 hover:text-[#F2B411] transition-colors text-sm"
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
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {BRAND.name} Co. Hecho en Uruguay.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
