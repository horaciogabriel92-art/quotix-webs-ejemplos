"use client";

"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, X, ArrowRight, Sparkles, Zap, Crown, Building2 } from "lucide-react";
import MobileHeader from "@/components/MobileHeader";
import { useCurrency } from "@/context/CurrencyContext";
import { CurrencySelector } from "@/components/CurrencySelector";

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
  const { format, currency } = useCurrency();

  return (
    <div className="min-h-screen font-body bg-white">
      <MobileHeader />

      {/* Hero */}
      <section className="qx-section-dark py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="qx-badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d9469a]" />
            Empezá gratis, pagá solo si necesitás más
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
                  Tu página web con cotizador visual y administrador de pedidos.
                </h2>
                <p className="text-[#94a3b8] max-w-2xl mx-auto">
                  Una estructura digital completa para tu negocio que incluye una landing page profesional con tu marca, cotizador automático en tiempo real para tus clientes y la configuración inicial de todo el sistema.
                </p>
              </div>

              {/* Value stack */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="rounded-2xl bg-[#0f172a]/60 border border-[#334155] p-6 text-center">
                  <div className="text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-2">Landing page profesional</h3>
                  <p className="text-sm text-[#94a3b8] mb-4">Diseño exclusivo con tu marca y tu propio dominio web (www.tumarca.com) incluido por un año entero. El diseño de la página te queda para siempre.</p>
                  <div className="text-lg">
                    <span className="text-[#64748b] line-through mr-2">{format(200)}</span>
                    <span className="text-[#d4f542] font-bold">Incluido</span>
                  </div>
                  <div className="text-xs text-[#64748b] mt-1">USD</div>
                </div>
                <div className="rounded-2xl bg-[#0f172a]/60 border border-[#334155] p-6 text-center">
                  <div className="text-3xl mb-3">🔥</div>
                  <h3 className="font-bold text-white mb-2">Cotizador y Administrador</h3>
                  <p className="text-sm text-[#94a3b8] mb-4">Acceso completo al sistema por 3 meses. Tus clientes se cotizan solos desde el celular y vos gestionás las órdenes en un panel organizado.</p>
                  <div className="text-lg">
                    <span className="text-[#64748b] line-through mr-2">{format(300)}</span>
                    <span className="text-[#d4f542] font-bold">Incluido</span>
                  </div>
                  <div className="text-xs text-[#64748b] mt-1">3 meses</div>
                </div>
                <div className="rounded-2xl bg-[#0f172a]/60 border border-[#334155] p-6 text-center">
                  <div className="text-3xl mb-3">🛠️</div>
                  <h3 className="font-bold text-white mb-2">Configuración inicial incluida</h3>
                  <p className="text-sm text-[#94a3b8] mb-4">Nosotros nos encargamos de la puesta a punto: cargamos tus prendas de catálogo y calibramos el cotizador con tus listas de precios actuales.</p>
                  <div className="text-lg">
                    <span className="text-[#64748b] line-through mr-2">{format(150)}+</span>
                    <span className="text-[#d4f542] font-bold">Incluido</span>
                  </div>
                  <div className="text-xs text-[#64748b] mt-1">Valor real</div>
                </div>
              </div>

              {/* Price anchoring */}
              <div className="rounded-2xl bg-[#0f172a] border border-[#334155] p-8 text-center space-y-4">
                {currency === "UYU" ? (
                  <>
                    <div className="text-[#94a3b8] text-lg">Valor real del montaje y configuración: <s>$U 20.000+</s></div>
                    <div className="text-[#d4f542] text-4xl font-headline font-bold">
                      12 cuotas sin recargo de $916
                    </div>
                    <p className="text-sm text-[#94a3b8]">Con mercado pago</p>
                    <p className="text-sm text-white/70">o 1 pago contado de $9.990</p>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-2">
                      <span className="text-[#94a3b8] text-lg">Valor real de todo:</span>
                      <span className="text-[#64748b] text-2xl line-through">{format(500)}+</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6">
                      <span className="text-white text-lg font-medium">Tu inversión hoy:</span>
                      <span className="text-[#d4f542] text-4xl font-headline font-bold">{format(275)}</span>
                    </div>
                    <p className="text-sm text-[#94a3b8] mb-6">
                      💳 Pagalo en hasta <strong className="text-white">12 cuotas</strong> con Mercado Pago. Sin permanencia.
                    </p>
                  </>
                )}
                <a
                  href="https://wa.me/59898133523?text=Quiero%20el%20Pack%20de%20Lanzamiento%20$275"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="qx-btn-lime text-lg h-14 px-10">
                    Digitalizar mi taller ahora →
                  </button>
                </a>
              </div>

              {/* ¿Qué pasa después de los 3 meses? */}
              <div className="rounded-2xl bg-[#0f172a]/60 border border-[#334155] p-6 md:p-8 mt-8">
                <h4 className="text-lg font-bold text-white mb-3">¿Qué pasa después de los 3 meses?</h4>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  La página web y el dominio siguen siendo de tu taller. El sistema de cotizaciones online te viene bonificado los primeros 90 días. Al cuarto mes, vos elegís: si la herramienta te dio resultados y te ahorró tiempo, mantenés el cotizador activo por una suscripción mensual desde {format(39)} (unos $1.500 pesos). Si decidís no continuar con el cotizador, la página te queda activa igual como un catálogo digital estático para tu negocio. No hay contratos de permanencia.
                </p>
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
                  className={`relative rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
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

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 mx-auto ${
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
                      {price === 0 ? "Gratis" : format(price)}
                    </span>
                    {price > 0 && (
                      <span className={`text-sm ml-1 ${plan.popular ? "text-[#94a3b8]" : "text-slate-400"}`}>
                        {period}
                      </span>
                    )}
                    {monthlyEquiv && (
                      <div className={`text-xs mt-1 ${plan.popular ? "text-[#d4f542]" : "text-[#bf3480]"}`}>
                        {monthlyEquiv.replace(/^\~(\$[\d.]+)/, `~${format(Math.round(price / 12))}`)}
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

                  <ul className="space-y-3 text-left">
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

      {/* FAQ */}
      <section className="qx-section-light py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-headline text-3xl font-bold text-center mb-4 text-[#0f172a]">
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-slate-500 text-sm mb-10">Quotix Uruguay</p>
          <div className="space-y-4">
            {[
              {
                q: "¿El pago de las 12 cuotas de $916 o los $9.990 contado se repite cada 3 meses?",
                a: "No. Ese valor es un pago único por el concepto de diseño, desarrollo y configuración inicial de tu página web. No vas a volver a pagar ese monto. El acceso al sistema cotizador online te viene bonificado y libre de costos por los primeros 3 meses.",
              },
              {
                q: "¿Qué pasa exactamente cuando se terminan los 3 meses incluidos?",
                a: "La página web y el dominio .com siguen siendo de tu taller. Al cuarto mes, tú decides cómo continuar con el sistema de cotizaciones interactivas: Si la herramienta te dio resultados y te ahorró tiempo en WhatsApp, mantienes el cotizador activo pasando a una suscripción mensual básica que va desde los $1499. Si decides no continuar con el cotizador automático, el sistema se desactiva pero tu página web queda online de forma permanente funcionando como un catálogo digital estático con tus productos. No tienes contratos de permanencia de ningún tipo.",
              },
              {
                q: "¿El dominio web .com es mío para siempre?",
                a: "El paquete de lanzamiento incluye la compra, registro a tu nombre y configuración técnica de tu dominio propio (ejemplo: www.tu-taller.com) bonificado por el primer año entero. A partir del segundo año, como funciona cualquier dirección en internet, la renovación anual del nombre del sitio corre por cuenta del taller (es un costo mínimo estándar del mercado de dominios).",
              },
              {
                q: "¿Qué tengo que hacer yo para configurar mis productos y precios?",
                a: "Nada. Nosotros nos encargamos de toda la puesta a punto inicial dentro del paquete llave en mano. Una vez realizado el pago, nos envías tu lista de precios actual en el formato que la tengas hoy (puede ser un archivo Excel, una foto de una lista en papel o incluso un audio explicándonos cómo cobras) y nosotros programamos las matrices de cálculo en tu sistema junto con tus prendas de catálogo.",
              },
              {
                q: "¿Qué pasa si un logo es muy complejo y el cotizador calcula mal el precio?",
                a: "El sistema está diseñado específicamente para proteger tu margen de ganancia. La plataforma no le da al cliente final un precio cerrado y obligatorio, sino un rango de precio estimado (un parámetro). Esto te sirve como filtro para descartar a los curiosos sin presupuesto. Cuando el cliente acepta el estimado, a ti te ingresa la orden al panel con el logo limpio, los datos de contacto y las especificaciones. Tú revisas el archivo con tu experiencia, ajustas el valor real final y el sistema te genera un PDF profesional para que se lo despaches por WhatsApp y confirmes la seña. El control total del precio final siempre lo tienes tú.",
              },
              {
                q: "¿El sistema sirve tanto para bordados como para estampados, serigrafía o DTF?",
                a: "Sí. El motor de cálculo se calibra a medida según las técnicas que manejes en tu taller. Puede calcular costos basados en cantidad de puntadas e hilos para bordados, o por cantidad de colores, shablones, tintas y centímetros cuadrados para sistemas de impresión como serigrafía, sublimación, DTF o vinilo.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0f172a] mb-2">{item.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
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

      {/* Trust Badges */}
      <section className="bg-[#0a0f1e] border-t border-[#1e293b] py-6">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs text-[#475569] uppercase tracking-wider mb-4">Pagá con confianza</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80">
              <svg viewBox="0 0 48 16" className="h-3.5 w-auto" fill="none"><rect width="48" height="16" rx="2" fill="#1A1F71"/><text x="24" y="11.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontStyle="italic" fontFamily="Arial, sans-serif">VISA</text></svg>
              Visa
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80">
              <svg viewBox="0 0 24 16" className="h-3.5 w-auto" fill="none"><circle cx="9" cy="8" r="7" fill="#EB001B"/><circle cx="15" cy="8" r="7" fill="#F79E1B"/><path d="M12 3a7 7 0 0 0 0 10 7 7 0 0 0 0-10z" fill="#FF5F00"/></svg>
              Mastercard
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80">
              <svg viewBox="0 0 16 16" className="h-3.5 w-auto" fill="none"><rect width="16" height="16" rx="3" fill="#00A650"/><text x="8" y="11" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">OCA</text></svg>
              OCA
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/80">
              <svg viewBox="0 0 16 16" className="h-3.5 w-auto" fill="none"><rect width="16" height="16" rx="3" fill="#635BFF"/><path d="M8 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4A4 4 0 0 1 4 8a4 4 0 0 1 4-4z" fill="white" opacity="0.3"/><circle cx="8" cy="8" r="1.5" fill="white"/></svg>
              Stripe
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#009ee3]/15 border border-[#009ee3]/30 rounded-lg px-3 py-1.5 text-xs text-[#00b2ff] font-medium">
              <svg viewBox="0 0 16 16" className="h-3.5 w-auto" fill="none"><rect width="16" height="16" rx="3" fill="#009ee3"/><circle cx="5" cy="8" r="3" fill="white"/><circle cx="11" cy="8" r="3" fill="white" opacity="0.6"/></svg>
              Mercado Pago
            </span>
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
            <CurrencySelector variant="dark" />
            <p className="text-xs text-[#475569]">
              © {new Date().getFullYear()} Quotix. A product of QUOTIXOS GROUP LLC. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
