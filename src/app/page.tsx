"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/config";
import MobileHeader from "@/components/MobileHeader";
import LeadNotification from "@/components/animations/LeadNotification";
import ColorToggle from "@/components/animations/ColorToggle";
import PriceSlider from "@/components/animations/PriceSlider";
import HeroChatToMockup from "@/components/animations/HeroChatToMockup";
import { useCurrency } from "@/context/CurrencyContext";
import { CurrencySelector } from "@/components/CurrencySelector";

export default function LandingPage() {
  const { format, currency } = useCurrency();
  return (
    <div className="min-h-screen font-body">
      <MobileHeader />

      <main>
        {/* ─── Hero (dark) ─── */}
        <section className="qx-section-dark py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="qx-badge mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d9469a]" />
                  El cotizador que usan los talleres que facturan más
                </div>
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Tu cliente ve su logo en la prenda
                  <br />
                  <span className="text-[#d4f542]">y recibe un precio en segundos.</span>
                </h1>
                <p className="qx-subtitle text-lg md:text-xl mb-10 leading-relaxed text-[#cbd5e1]">
                  Quotix es un cotizador visual para talleres de bordado y personalización. Tu cliente sube su diseño, elige la prenda y obtiene un precio estimado al instante. Vos recibís un contacto calificado con todo listo para producir.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://app.quotixos.com/registro" target="_blank" rel="noreferrer">
                    <button className="qx-btn-lime">
                      Empezar gratis →
                    </button>
                  </a>
                  <a href="https://demo.quotixos.com" target="_blank" rel="noreferrer">
                    <button className="qx-btn-outline">
                      ▶ Ver demo interactiva
                    </button>
                  </a>
                  <Link href="/precios">
                    <button className="qx-btn-outline" style={{ borderColor: "#475569" }}>
                      Ver planes
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square">
                <HeroChatToMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pain points (light) ─── */}
        <section className="qx-section-light py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="qx-badge mb-4" style={{ backgroundColor: "rgba(226,232,240,0.5)", color: "#475569" }}>El problema</div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 qx-title text-[#0f172a]">
                El 80% de tu tiempo de ventas se pierde en preguntas que podrían responderse solas.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "😩", title: "El ciclo del '¿cuánto sale?'", desc: "Te piden precio por WhatsApp. Les pedís el logo. Te lo mandan en baja calidad. No saben la cantidad. No saben el color. 45 minutos después, todavía no cotizaste nada." },
                { icon: "💸", title: "Los presupuestos que nunca cierran", desc: "Armás el cálculo manualmente. Les mandás PDF. Te dicen 'pensé que era menos'. Desaparecen. Y nunca sabés si el precio los espantó o si nunca iban a comprar." },
                { icon: "⏳", title: "El negocio para cuando vos no estás", desc: "Sos el único que sabe cotizar. Si estás en producción, en un fin de semana o de vacaciones, los clientes esperan. Y muchos no esperan." },
              ].map((card) => (
                <div key={card.title} className="card-shadow p-8 bg-white">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-bold text-lg mb-3 text-[#0f172a]">{card.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cómo funciona / Solución (dark) ─── */}
        <section id="como-funciona" className="qx-section-dark py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                Tu cliente se cotiza solo.
                <br />
                <span className="text-[#94a3b8]">Vos recibís el pedido listo.</span>
              </h2>
            </div>
            
            <div className="space-y-20">
              {/* Paso 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-[#d4f542] font-mono text-sm font-bold mb-2">PASO 01</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Tu logo en la prenda, antes de cotizar.</h3>
                  <p className="text-[#cbd5e1] leading-relaxed">
                    El cliente sube su diseño y lo ve sobre la prenda en tiempo real: con el color que eligió, el tamaño real y la posición exacta. Sabe cómo va a quedar antes de pedirte un presupuesto. Menos preguntas, menos vueltas.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video border border-[#334155]">
                  <ColorToggle />
                </div>
              </div>

              {/* Paso 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <div className="text-[#d4f542] font-mono text-sm font-bold mb-2">PASO 02</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Rango de precio estimado, basado en tus reglas.</h3>
                  <p className="text-[#cbd5e1] leading-relaxed">
                    El sistema calcula una aproximación usando la fórmula que vos configurás: cantidad, técnica, tamaño del diseño. Si cobrás $X por 5 remeras con bordado de hasta 5 cm, esa información es la que usa. Con cada cotización que cerrás, el sistema aprende y ajusta para dar números cada vez más certeros. El precio final siempre lo confirmás vos.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video border border-[#334155] md:order-1">
                  <PriceSlider />
                </div>
              </div>

              {/* Paso 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-[#d4f542] font-mono text-sm font-bold mb-2">PASO 03</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">El contacto llega con todo listo.</h3>
                  <p className="text-[#cbd5e1] leading-relaxed">
                    Para recibir la cotización formal, el cliente deja nombre, WhatsApp y el logo en alta calidad. Vos recibís un contacto 100% interesado, con los datos que necesitás para producir. Sin chasear. Sin insistir.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video border border-[#334155]">
                  <LeadNotification />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Beneficios (light) ─── */}
        <section className="qx-section-light py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="font-headline text-3xl font-bold mb-12 text-[#0f172a]">
              Lo que cambia cuando el cotizador trabaja por vos.
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: "⚙️", color: "bg-blue-100", title: "Cotizaciones que se ajustan solas", desc: "Tus reglas de precio configuradas una vez. Descuentos por volumen, recargos por urgencia, márgenes por técnica. Todo automático." },
                { icon: "🚀", color: "bg-green-100", title: "Funciona sin vos", desc: "No necesitás estar frente al celular. El cotizador atiende 24/7, filtra curiosos y deja los pedidos listos para que vos solo confirmes." },
                { icon: "✨", color: "bg-purple-100", title: "Te ves como la opción premium", desc: "Un cotizador visual y profesional posiciona tu marca por encima del taller que responde en WhatsApp con \"depende\"." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="card-shadow bg-white rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center mx-auto mb-4 text-xl`}>
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-[#0f172a] mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Oferta Fundador (dark) ─── */}
        <section id="fundador" className="qx-section-dark py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#bf3480]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4f542]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="qx-card-dark p-8 md:p-12 border-2 border-[#bf3480]/50">
              <div className="text-center mb-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#bf3480] text-white text-xs font-bold uppercase tracking-wider mb-6">
                  Solo 20 lugares este mes
                </div>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-white">
                  Tu página web con cotizador visual y administrador de pedidos.
                </h2>
                <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
                  Una estructura digital completa para tu negocio que incluye una landing page profesional con tu marca, cotizador automático en tiempo real para tus clientes y la configuración inicial de todo el sistema.
                </p>
              </div>

              <div className="bg-[#0f172a] rounded-2xl p-6 md:p-8 mb-10 border border-[#334155]">
                <h3 className="text-xl font-bold text-white mb-6">📦 Lo que te llevas hoy:</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
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

                <div className="pt-6 border-t border-[#334155] text-center space-y-4">
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
                      <div className="text-[#94a3b8] text-lg">Setup + 3 meses PRO: <s>{format(500)}</s></div>
                      <div className="text-[#d4f542] text-5xl font-headline font-bold">
                        {format(275)}
                      </div>
                      <p className="text-sm text-white mb-2 bg-white/5 inline-block px-4 py-2 rounded-lg">
                        💳 Puedes pagarlo hasta en <strong>12 cuotas</strong> con Mercado Pago.
                      </p>
                    </>
                  )}
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block pt-2">
                    <button className="qx-btn-lime w-full text-lg h-14">
                      Digitalizar mi taller ahora →
                    </button>
                  </a>
                </div>
              </div>

              {/* ¿Qué pasa después de los 3 meses? */}
              <div className="bg-[#0f172a] rounded-2xl p-6 md:p-8 mb-10 border border-[#334155]">
                <h4 className="text-lg font-bold text-white mb-3">¿Qué pasa después de los 3 meses?</h4>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  La página web y el dominio siguen siendo de tu taller. El sistema de cotizaciones online te viene bonificado los primeros 90 días. Al cuarto mes, vos elegís: si la herramienta te dio resultados y te ahorró tiempo, mantenés el cotizador activo por una suscripción mensual desde {format(39)} (unos $1.500 pesos). Si decidís no continuar con el cotizador, la página te queda activa igual como un catálogo digital estático para tu negocio. No hay contratos de permanencia.
                </p>
              </div>

              {/* Garantía */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4 border border-slate-700 text-2xl">
                  🛡️
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Sin compromiso de permanencia.</h4>
                <p className="text-[#94a3b8] text-sm max-w-2xl mx-auto leading-relaxed">
                  Pasados los 3 meses, tenés dos opciones:
                  <br className="mb-2"/>
                  <strong>Seguir con Quotix PRO</strong> por {format(99)}/mes y seguir recibiendo pedidos cerrados automáticamente.
                  <br/>
                  <strong>O cancelar el SaaS</strong> y quedarte con la landing page profesional como tu sitio web principal. El dominio y el diseño son tuyos. Solo pagás hosting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ (light) ─── */}
        <section className="qx-section-light py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-headline text-3xl font-bold mb-12 text-center text-[#0f172a]">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0f172a] mb-2">¿Necesito saber de tecnología?</h4>
                <p className="text-slate-600 text-sm">No. Nosotros configuramos todo: subimos tus prendas, ajustamos tus fórmulas de precio y te entregamos el sistema listo en tu dominio. Vos solo recibís los pedidos.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0f172a] mb-2">¿El precio que muestra el cotizador es el definitivo?</h4>
                <p className="text-slate-600 text-sm">No, y eso es lo que lo hace inteligente. El cliente recibe un rango estimado basado en tus reglas. Si le cierra, te deja sus datos. Vos revisás el diseño, confirmás el precio final y cerrás la venta. Filtrás curiosos sin perder oportunidades.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0f172a] mb-2">¿Y si después de 3 meses no quiero pagar el SaaS?</h4>
                <p className="text-slate-600 text-sm">Te quedás con la landing page profesional como tu sitio web principal, sin costo de software. El dominio y el diseño son tuyos. Solo pagás el hosting básico. No hay letra chica.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer (dark) ─── */}
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
