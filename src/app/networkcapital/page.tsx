import type { Metadata } from "next";
import Hero from "@/components/networkcapital/Hero";
import ProductGrid from "@/components/networkcapital/ProductGrid";
import Footer from "@/components/networkcapital/Footer";
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
    desc: "Mínimo 15 unidades",
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
    desc: "Seleccioná las prendas que necesitás de nuestro catálogo.",
  },
  {
    step: "02",
    title: "SUBÍ TU DISEÑO",
    desc: "Cargás tu logo en nuestro cotizador online y elegís las opciones.",
  },
  {
    step: "03",
    title: "RECIBÍ TU COTIZACIÓN",
    desc: "Te pasamos precio por mayor en menos de 24hs.",
  },
];

export default function NetworkCapitalPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      {/* Hero */}
      <Hero />

      {/* Trust Bar */}
      <section className="py-10 bg-[#0B1628] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <div className="p-3 bg-[#F2B411]/10 rounded-xl">
                  <item.icon className="w-6 h-6 text-[#F2B411]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{item.title}</p>
                  <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductGrid />

      {/* Process */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#007DB8]/10 text-[#007DB8] text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
              Cómo funciona
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              3 PASOS PARA{" "}
              <span className="text-[#F2B411]">TU MARCA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="relative p-8 bg-[#0B1628] rounded-3xl border border-white/5 text-center"
              >
                <span className="block text-5xl font-black text-[#F2B411]/20 mb-4">
                  {s.step}
                </span>
                <h3 className="text-white font-bold text-lg mb-3">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#F2B411]/10 via-[#007DB8]/10 to-[#E91E8C]/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            ¿LISTO PARA <span className="text-[#F2B411]">ROMPERLA?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Cotizá tu producción por mayor hoy mismo. Mínimo 15 unidades.
            Atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F2B411] text-[#0A0A0A] font-bold text-lg rounded-xl hover:bg-[#FFD700] transition-all"
            >
              Ver productos
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
            >
              Ver catálogo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
