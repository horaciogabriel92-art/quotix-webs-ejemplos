import type { Metadata } from "next";
import Header from "@/components/networkcapital/Header";
import Hero from "@/components/networkcapital/Hero";
import CategoryGrid from "@/components/networkcapital/CategoryGrid";
import Location from "@/components/networkcapital/Location";
import Footer from "@/components/networkcapital/Footer";
import WhatsAppSticky from "@/components/networkcapital/WhatsAppSticky";
import AnimatedSection from "@/components/networkcapital/AnimatedSection";
import { ShoppingBag, Truck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Network Capital — Venta por mayor de indumentaria personalizable",
  description:
    "Emprendé con estilo. Estampados personalizados, etiquetas y logos. Compra mínima 15 unidades. Hecho en Uruguay.",
};

const TRUST_ITEMS = [
  {
    icon: ShoppingBag,
    title: "Venta por mayor",
    desc: "Mínimo 10 unidades",
  },
  {
    icon: Award,
    title: "Hecho en Uruguay",
    desc: "Calidad premium local",
  },
  {
    icon: Truck,
    title: "Envíos a todo el país",
    desc: "Entrega en 48-72hs",
  },
];

const STEPS = [
  {
    step: "01",
    title: "ELEGÍ TU PRODUCTO",
    desc: "Seleccioná del catálogo y armá tu pedido desde 10 unidades.",
  },
  {
    step: "02",
    title: "PERSONALIZÁ TU DISEÑO",
    desc: "Hasta 2 estampas distintas cada 10 uds. Con tu logo, tu onda.",
  },
  {
    step: "03",
    title: "RECIBÍ TU PEDIDO",
    desc: "Producción en 7 días hábiles. Calidad premium lista para tu marca.",
  },
];

export default function NetworkCapitalPage() {
  return (
    <main className="bg-[#0B1628] min-h-screen">
      {/* Sticky Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Trust Bar */}
      <section className="py-10 bg-[#0B1628] border-y border-[#007DB8]/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {TRUST_ITEMS.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15} direction="left">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="p-3 bg-[#F2B411]/10 rounded-xl">
                    <item.icon className="w-6 h-6 text-[#F2B411]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{item.title}</p>
                    <p className="text-white/50 text-xs">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategoryGrid />

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-[#0B1628] via-[#061828] to-[#0B1628] relative">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-white/15 text-white text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
              Cómo funciona
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              ASÍ DE FÁCIL ES{" "}
              <span className="text-[#F2B411]">CREAR TU LÍNEA</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <AnimatedSection key={s.step} delay={i * 0.15}>
                <div className="relative p-8 bg-[#131d2b] rounded-3xl border border-[#007DB8]/30 hover:border-[#007DB8]/60 transition-all h-full shadow-[0_0_20px_rgba(0,125,184,0.08)] hover:shadow-[0_0_30px_rgba(0,125,184,0.15)]">
                  <span className="block text-6xl font-black text-[#007DB8]/30 mb-4 leading-none">
                    {s.step}
                  </span>
                  <h3 className="text-white font-black text-lg mb-3 uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <Location />

      {/* CTA Final — gradiente de marca */}
      <section className="py-20 bg-gradient-to-br from-[#0B1628]/30 via-[#0B1628] to-[#E91E8C]/20 border-t border-[#007DB8]/20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              ¿LISTO PARA <span className="text-[#F2B411]">ROMPERLA?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
              Cotizá tu producción por mayor hoy mismo. Mínimo 15 unidades.
              Atención personalizada.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app-networkcapital.quotixos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F2B411] text-[#007DB8] font-black text-lg rounded-xl hover:bg-[#FFD700] transition-all shadow-[0_0_30px_rgba(242,180,17,0.2)]"
              >
                Cotizar ahora
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all"
              >
                Ver productos
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp sticky */}
      <WhatsAppSticky />
    </main>
  );
}
