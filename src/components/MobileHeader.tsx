"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Cómo funciona", href: "/#como-funciona" },
    { label: "Precios", href: "/precios" },
  ];

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-[#0f172a]">
          Quotix
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 hover:text-[#0f172a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.quotixos.com/login"
            className="text-sm text-slate-500 hover:text-[#0f172a] transition-colors"
          >
            Ingresar
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.quotixos.com/login"
            className="h-10 px-5 rounded-xl text-sm border border-slate-200 text-slate-700 font-medium hover:border-slate-300 hover:bg-slate-50 transition-colors inline-flex items-center justify-center"
          >
            Log In
          </a>
          <a
            href="https://app.quotixos.com/registro"
            target="_blank"
            rel="noreferrer"
            className="h-10 px-5 rounded-xl text-sm bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium transition-colors inline-flex items-center justify-center"
          >
            Registrate gratis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-[#0f172a] hover:bg-slate-100 transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-[#0f172a] hover:text-[#bf3480] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.quotixos.com/login"
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-500 hover:text-[#0f172a] transition-colors"
            >
              Ingresar
            </a>

            <div className="pt-4 space-y-3">
              <a
                href="https://app.quotixos.com/login"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 rounded-xl text-center text-sm border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                Log In
              </a>
              <a
                href="https://app.quotixos.com/registro"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 rounded-xl text-center text-sm bg-[#0f172a] text-white font-medium transition-colors"
              >
                Registrate gratis
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
