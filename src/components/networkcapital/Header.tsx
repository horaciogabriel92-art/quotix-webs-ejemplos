"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/networkcapital-data";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1628]/95 backdrop-blur-md border-b border-[#007DB8]/20 shadow-lg shadow-[#0B1628]/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/networkcapital/logo.png"
              alt={BRAND.name}
              width={180}
              height={50}
              className="object-contain h-14 md:h-20 w-auto drop-shadow-[0_0_16px_rgba(242,180,17,0.5)]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-[#F2B411] font-semibold text-sm tracking-wide uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#productos"
              className="px-5 py-2.5 bg-[#F2B411] text-[#007DB8] font-bold text-sm rounded-lg hover:bg-[#FFD700] transition-colors"
            >
              Cotizar
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1628]/98 backdrop-blur-lg border-t border-white/10">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-[#F2B411] font-semibold text-lg py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#productos"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-6 py-3 bg-[#F2B411] text-[#007DB8] font-bold text-center rounded-lg"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
