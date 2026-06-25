"use client";

import { useState } from "react";
import Header from "@/components/networkcapital/Header";
import Hero from "@/components/networkcapital/Hero";
import CategoryGrid from "@/components/networkcapital/CategoryGrid";
import Location from "@/components/networkcapital/Location";
import Footer from "@/components/networkcapital/Footer";
import WhatsAppSticky from "@/components/networkcapital/WhatsAppSticky";
import AnimatedSection from "@/components/networkcapital/AnimatedSection";
import FAQ from "@/components/networkcapital/FAQ";
import PromoSection from "@/components/networkcapital/PromoSection";
import JsonLd from "@/components/networkcapital/JsonLd";
import { ShoppingBag, Truck, Award, Sparkles, Shirt, Palette } from "lucide-react";

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

const FAQS = [
  {
    question: "¿Qué técnicas de personalización de prendas usan?",
    answer:
      "Trabajamos serigrafía y DTF de alta calidad sobre remeras, buzos, camperas y canguros. Son las técnicas más duraderas para estampados por mayor en Uruguay.",
  },
  {
    question: "¿Cuál es el mínimo de unidades para remeras personalizadas?",
    answer:
      "El mínimo de pedido es de 10 unidades por diseño. Podés combinar colores y talles para llegar al mínimo.",
  },
  {
    question: "¿Hacen remeras personalizadas por mayor para marcas y emprendedores?",
    answer:
      "Sí. Network Capital fabrica indumentaria personalizable por mayor para emprendedores, marcas, eventos y empresas en todo Uruguay.",
  },
  {
    question: "¿Cuánto tarda la producción de un pedido personalizado?",
    answer:
      "El tiempo de producción es de 7 días hábiles una vez confirmado el diseño y abonada la seña del 50%.",
  },
  {
    question: "¿Hacen envíos a todo Uruguay?",
    answer:
      "Sí, realizamos envíos a todo el país con entrega estimada de 48 a 72 horas hábiles.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function NetworkCapitalPage() {
  const [entered, setEntered] = useState(false);

  return (
    <main className={`bg-[#0B1628] min-h-screen ${!entered ? "overflow-hidden h-screen" : ""}`}>
      <JsonLd data={faqSchema} />

      {/* Hero as full-screen locked gate */}
      <Hero isLocked={!entered} onEnterCatalog={() => setEntered(true)} />

      {entered && (
        <>
          {/* Sticky Header */}
          <Header />

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

      {/* Promos */}
      <PromoSection />

      {/* Categories */}
      <CategoryGrid />

      {/* SEO Rich Content */}
      <section className="py-16 bg-[#0B1628] border-t border-[#007DB8]/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-[#F2B411]/10 text-[#F2B411] text-sm font-bold rounded-full mb-4 uppercase tracking-wider">
              Personalización de prendas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              REMERAS PERSONALIZADAS Y MÁS PARA TU MARCA
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-invert prose-lg mx-auto text-white/70">
              <p>
                En <strong className="text-white">Network Capital</strong> fabricamos
                remeras personalizadas, buzos, camperas y canguros por mayor en Uruguay.
                Usamos serigrafía y DTF para lograr estampados duraderos y de alto
                impacto visual, ideales para emprendedores, marcas emergentes, eventos y
                empresas que buscan personalización de prendas con calidad premium.
              </p>
              <p>
                Nuestro catálogo incluye variedad de modelos, colores y talles. Podés
                combinar hasta dos diseños distintos cada 10 prendas, lo que te da
                flexibilidad para lanzar colecciones variadas sin necesidad de grandes
                volúmenes. Todos los productos son hechos en Uruguay y pensados para
                estampar con serigrafía y DTF.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Shirt, title: "Remeras y buzos", desc: "Cortes clásicos, oversize y stone wash." },
                { icon: Palette, title: "Serigrafía y DTF", desc: "Técnicas profesionales de estampado." },
                { icon: Sparkles, title: "Etiquetas y logos", desc: "Dale identidad a tu marca desde el primer lote." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 bg-[#131d2b] rounded-2xl border border-[#007DB8]/10"
                >
                  <item.icon className="w-6 h-6 text-[#F2B411] mb-3" />
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-[#0B1628] via-[#061828] to-[#0B1628] relative">
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

      {/* FAQ */}
      <FAQ items={FAQS} />

      {/* Location */}
      <Location />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#0B1628]/30 via-[#0B1628] to-[#E91E8C]/20 border-t border-[#007DB8]/20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              ¿LISTO PARA <span className="text-[#F2B411]">ROMPERLA?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
              Cotizá tu producción por mayor hoy mismo. Mínimo 10 unidades.
              Atención personalizada.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app-networkcapital.quotixos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F2B411] text-black font-black text-lg rounded-xl hover:bg-[#FFD700] transition-all shadow-[0_0_30px_rgba(242,180,17,0.2)]"
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

          {/* Schema WebSite */}
          <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Network Capital",
          url: "https://networkcapital.quotixos.com/networkcapital",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://networkcapital.quotixos.com/networkcapital?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
          />
        </>
      )}

      {/* WhatsApp sticky - always visible */}
      <WhatsAppSticky />
    </main>
  );
}
