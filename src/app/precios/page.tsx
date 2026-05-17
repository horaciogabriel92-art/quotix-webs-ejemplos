"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, X, ArrowRight, Sparkles, Zap, Crown, Building2 } from "lucide-react";

const PLANS = [
  {
    id: "free",
    name: "Free",
    description: "Para probar sin compromiso",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Sparkles,
    cta: "Empezar gratis",
    ctaUrl: "https://app.quotixos.com/registro",
    popular: false,
    features: [
      { text: "40 cotizaciones / mes", included: true },
      { text: "3 productos", included: true },
      { text: "1 usuario", included: true },
      { text: "Subdominio .quotixos.com", included: true },
      { text: "Mockup interactivo", included: true },
      { text: "Matriz de precios", included: true },
      { text: "Email de notificación", included: true },
      { text: "Email profesional al cliente", included: false },
      { text: "PDF de cotización", included: false },
      { text: "Kanban de cotizaciones", included: false },
      { text: "CRM de clientes", included: false },
      { text: "Dominio propio", included: false },
      { text: "Landing page", included: false },
      { text: "Marca Quotix en footer", included: true, badge: "Sí" },
    ],
  },
  {
    id: "basico",
    name: "Básico",
    description: "Para talleres en crecimiento",
    monthlyPrice: 39,
    yearlyPrice: 390,
    icon: Zap,
    cta: "Suscribirse",
    ctaUrl: "https://wa.me/59898133523?text=Quiero%20suscribirme%20al%20plan%20Básico",
    popular: false,
    features: [
      { text: "80 cotizaciones / mes", included: true },
      { text: "20 productos", included: true },
      { text: "1 usuario", included: true },
      { text: "Subdominio .quotixos.com", included: true },
      { text: "Mockup interactivo", included: true },
      { text: "Matriz de precios", included: true },
      { text: "Email de notificación", included: true },
      { text: "Email profesional al cliente", included: true },
      { text: "PDF de cotización", included: true },
      { text: "Kanban de cotizaciones", included: false },
      { text: "CRM de clientes", included: false },
      { text: "Dominio propio", included: false },
      { text: "Landing page", included: false },
      { text: "Sin marca Quotix", included: true, badge: "Sí" },
    ],
  },
  {
    id: "pro",
    name: "Profesional",
    description: "Para talleres que venden en serio",
    monthlyPrice: 79,
    yearlyPrice: 790,
    icon: Crown,
    cta: "Suscribirse",
    ctaUrl: "https://wa.me/59898133523?text=Quiero%20suscribirme%20al%20plan%20Profesional",
    popular: true,
    features: [
      { text: "Cotizaciones ilimitadas", included: true },
      { text: "Productos ilimitados", included: true },
      { text: "Hasta 4 usuarios", included: true },
      { text: "Subdominio .quotixos.com", included: true },
      { text: "Mockup interactivo", included: true },
      { text: "Matriz de precios", included: true },
      { text: "Email de notificación", included: true },
      { text: "Email profesional al cliente", included: true },
      { text: "PDF de cotización", included: true },
      { text: "Kanban de cotizaciones", included: true },
      { text: "CRM de clientes", included: true },
      { text: "Dominio propio", included: true },
      { text: "Landing page", included: true },
      { text: "Sin marca Quotix", included: true, badge: "Sí" },
    ],
  },
  {
    id: "empresa",
    name: "Empresa",
    description: "Para fábricas y grandes equipos",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    icon: Building2,
    cta: "Contactar ventas",
    ctaUrl: "https://wa.me/59898133523?text=Quiero%20info%20del%20plan%20Empresa",
    popular: false,
    features: [
      { text: "Cotizaciones ilimitadas", included: true },
      { text: "Productos ilimitados", included: true },
      { text: "Usuarios ilimitados", included: true },
      { text: "Subdominio .quotixos.com", included: true },
      { text: "Mockup interactivo", included: true },
      { text: "Matriz de precios", included: true },
      { text: "Email de notificación", included: true },
      { text: "Email profesional al cliente", included: true },
      { text: "PDF de cotización", included: true },
      { text: "Kanban de cotizaciones", included: true },
      { text: "CRM de clientes", included: true },
      { text: "Dominio propio", included: true },
      { text: "Landing page", included: true },
      { text: "API access", included: true },
    ],
  },
];

const TABLE_FEATURES = [
  { label: "Cotizaciones", free: "40 / mes", basico: "80 / mes", pro: "Ilimitadas", empresa: "Ilimitadas" },
  { label: "Productos", free: "3", basico: "20", pro: "Ilimitados", empresa: "Ilimitados" },
  { label: "Usuarios", free: "1", basico: "1", pro: "4", empresa: "Ilimitados" },
  { label: "Subdominio .quotixos.com", free: true, basico: true, pro: true, empresa: true },
  { label: "Dominio propio", free: false, basico: false, pro: true, empresa: true },
  { label: "Landing page", free: false, basico: false, pro: true, empresa: true },
  { label: "Mockup interactivo", free: true, basico: true, pro: true, empresa: true },
  { label: "Matriz de precios", free: true, basico: true, pro: true, empresa: true },
  { label: "Email al admin", free: true, basico: true, pro: true, empresa: true },
  { label: "Email profesional al cliente", free: false, basico: true, pro: true, empresa: true },
  { label: "PDF de cotización", free: false, basico: true, pro: true, empresa: true },
  { label: "Kanban de cotizaciones", free: false, basico: false, pro: true, empresa: true },
  { label: "CRM de clientes", free: false, basico: false, pro: true, empresa: true },
  { label: "Múltiples usuarios con roles", free: false, basico: false, pro: true, empresa: true },
  { label: "Marca Quotix en footer", free: true, basico: false, pro: false, empresa: false },
  { label: "Soporte", free: "FAQ/Email", basico: "FAQ/Email", pro: "WhatsApp/Email", empresa: "Prioritario" },
  { label: "API access", free: false, basico: false, pro: false, empresa: true },
];

export default function PreciosPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen font-body bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-[#0f172a]">
            Quotix
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#como-funciona" className="text-sm text-slate-500 hover:text-[#0f172a] transition-colors">Cómo funciona</Link>
            <Link href="/precios" className="text-sm text-[#0f172a] font-medium">Precios</Link>
            <a href="https://app.quotixos.com/login" className="text-sm text-slate-500 hover:text-[#0f172a] transition-colors">Ingresar</a>
          </nav>
          <a href="https://app.quotixos.com/registro" className="inline-flex items-center justify-center h-10 px-5 rounded-xl text-sm bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium transition-colors">
            Registrate gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="qx-section-dark py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="qx-badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d9469a]" />
            Empezá gratis, upgradá cuando crezcas
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Elegí el plan que hace{" "}
            <span className="text-[#d4f542]">crecer tu taller.</span>
          </h1>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Todos los planes incluyen el cotizador visual. Pagás solo por las funciones que necesitás.
          </p>
        </div>
      </section>

      {/* Promo Fundador */}
      <section className="qx-section-dark pb-16 -mt-4">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#d4f542]/30 bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4f542]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4f542]/15 text-[#d4f542] text-xs font-bold uppercase tracking-wider mb-4">
                  Oferta de lanzamiento — Solo 20 lugares
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4">
                  Tu página web con cotizador visual + 3 meses de Profesional.
                </h2>
                <p className="text-[#94a3b8] max-w-2xl mx-auto">
                  No es solo un software. Es tu taller online completo: landing page profesional, cotizador visual en tiempo real, dominio propio y configuración llave en mano.
                </p>
              </div>

              {/* Value stack */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: "🌐", title: "Landing page profesional", desc: "Diseño exclusivo con tu marca y dominio propio.", value: "$200", valueNote: "USD" },
                  { icon: "🔥", title: "Cotizador visual PRO", desc: "3 meses de acceso total. Tu cliente se cotiza solo.", value: "$237", valueNote: "3 meses" },
                  { icon: "🛠️", title: "Setup llave en mano", desc: "Subimos tus prendas y calibramos tus precios.", value: "$150+", valueNote: "Valor real" },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl bg-[#0f172a]/60 border border-[#334155] p-6 text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-[#94a3b8] mb-4">{item.desc}</p>
                    <div className="text-lg">
                      <span className="text-[#64748b] line-through mr-2">{item.value}</span>
                      <span className="text-[#d4f542] font-bold">Incluido</span>
                    </div>
                    <div className="text-xs text-[#64748b] mt-1">{item.valueNote}</div>
                  </div>
                ))}
              </div>

              {/* Price anchoring */}
              <div className="rounded-2xl bg-[#0f172a] border border-[#334155] p-8 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-2">
                  <span className="text-[#94a3b8] text-lg">Valor real de todo:</span>
                  <span className="text-[#64748b] text-2xl line-through">$500+ USD</span>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6">
                  <span className="text-white text-lg font-medium">Tu inversión hoy:</span>
                  <span className="text-[#d4f542] text-4xl font-headline font-bold">$275 USD</span>
                </div>
                <p className="text-sm text-[#94a3b8] mb-6">
                  💳 Pagalo en hasta <strong className="text-white">12 cuotas</strong> con Mercado Pago. Sin permanencia.
                </p>
                <a
                  href="https://wa.me/59898133523?text=Quiero%20el%20Pack%20de%20Lanzamiento%20$275"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="qx-btn-lime text-lg h-14 px-10">
                    Quiero el pack →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle + Cards */}
      <section className="qx-section-light py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className={`text-sm font-medium ${!isYearly ? "text-[#0f172a]" : "text-slate-400"}`}>Mensual</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full transition-colors duration-300"
              style={{ backgroundColor: isYearly ? "#bf3480" : "#cbd5e1" }}
            >
              <div
                className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300"
                style={{ transform: isYearly ? "translateX(28px)" : "translateX(0)" }}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-[#0f172a]" : "text-slate-400"}`}>
              Anual
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-[#d4f542]/20 text-[#4d7c0f] text-xs font-bold">
                2 meses gratis
              </span>
            </span>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => {
              const Icon = plan.icon;
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
              const period = isYearly ? "/año" : "/mes";
              const monthlyEquiv = isYearly && price > 0 ? `~$${Math.round(price / 12)}/mes` : null;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? "border-2 border-[#bf3480] bg-[#0f172a] text-white shadow-xl shadow-[#bf3480]/10"
                      : plan.id === "free"
                      ? "border border-slate-200 bg-slate-50/50"
                      : "border border-slate-200 bg-white shadow-sm hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#bf3480] text-white text-xs font-bold">
                      Más popular
                    </div>
                  )}

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular ? "bg-[#bf3480]/20 text-[#d9469a]" : "bg-slate-100 text-slate-600"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className={`font-headline text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-[#0f172a]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-[#94a3b8]" : "text-slate-500"}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className={`font-headline text-4xl font-bold ${plan.popular ? "text-white" : "text-[#0f172a]"}`}>
                      {price === 0 ? "Gratis" : `$${price}`}
                    </span>
                    {price > 0 && (
                      <span className={`text-sm ml-1 ${plan.popular ? "text-[#94a3b8]" : "text-slate-400"}`}>
                        {period}
                      </span>
                    )}
                    {monthlyEquiv && (
                      <div className={`text-xs mt-1 ${plan.popular ? "text-[#d4f542]" : "text-[#bf3480]"}`}>
                        {monthlyEquiv}
                      </div>
                    )}
                  </div>

                  <a
                    href={plan.ctaUrl}
                    target={plan.ctaUrl.startsWith("http") ? "_blank" : undefined}
                    rel={plan.ctaUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`block w-full py-3 rounded-xl text-sm font-bold text-center transition-colors mb-8 ${
                      plan.popular
                        ? "bg-[#d4f542] text-[#0f172a] hover:bg-[#e0ff70]"
                        : plan.id === "free"
                        ? "border border-slate-300 text-slate-700 hover:bg-slate-100"
                        : "bg-[#0f172a] text-white hover:bg-[#1e293b]"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        {f.included ? (
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-[#d4f542]" : "text-[#059669]"}`} />
                        ) : (
                          <X className="w-4 h-4 shrink-0 mt-0.5 text-slate-300" />
                        )}
                        <span className={!f.included ? (plan.popular ? "text-[#64748b]" : "text-slate-400") : (plan.popular ? "text-white" : "text-slate-700")}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="qx-section-light py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-headline text-3xl font-bold text-center mb-12 text-[#0f172a]">
            Comparativa de funciones
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-medium text-slate-500">Función</th>
                  <th className="text-center py-4 px-4 font-bold text-[#0f172a]">Free</th>
                  <th className="text-center py-4 px-4 font-bold text-[#0f172a]">Básico</th>
                  <th className="text-center py-4 px-4 font-bold text-[#bf3480]">Profesional</th>
                  <th className="text-center py-4 px-4 font-bold text-[#0f172a]">Empresa</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_FEATURES.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{row.label}</td>
                    {["free", "basico", "pro", "empresa"].map((key) => {
                      const val = row[key as keyof typeof row];
                      return (
                        <td key={key} className="text-center py-3.5 px-4">
                          {typeof val === "boolean" ? (
                            val ? (
                              <Check className="w-5 h-5 text-[#059669] mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-slate-700 font-medium">{val as string}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="qx-section-dark py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            ¿Todavía no estás seguro?
          </h2>
          <p className="text-lg text-[#94a3b8] mb-10">
            Empezá gratis hoy. Sin tarjeta de crédito. Sin compromiso. Si en 30 días no te llegó ninguna cotización, te devolvemos la plata del Pack de Lanzamiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.quotixos.com/registro" className="qx-btn-lime">
              Empezar gratis →
            </a>
            <a href="https://demo.quotixos.com" target="_blank" rel="noopener noreferrer" className="qx-btn-outline">
              ▶ Ver demo interactiva
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1e] border-t border-[#1e293b]">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-headline font-bold text-white text-xl">Quotix</div>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#475569]">
              <Link href="/precios" className="hover:text-white transition-colors">Precios</Link>
              <a href="https://app.quotixos.com/registro" className="hover:text-white transition-colors">Registro</a>
              <a href="https://app.quotixos.com/login" className="hover:text-white transition-colors">Login</a>
              <a href="https://demo.quotixos.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Demo</a>
            </nav>
            <p className="text-xs text-[#475569]">
              © {new Date().getFullYear()} Quotix. A product of QUOTIXOS GROUP LLC. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
