import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-body">
      {/* ─── Header (light) ─── */}
      <header className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-headline text-2xl font-bold tracking-tight text-[#0f172a]">
            Quotix
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#como-funciona" className="text-sm text-slate-500 hover:text-[#0f172a] transition-colors">Cómo funciona</Link>
            <Link href="#planes" className="text-sm text-slate-500 hover:text-[#0f172a] transition-colors">Planes</Link>
            <a href="https://app.quotixos.com/login" className="text-sm text-slate-500 hover:text-[#0f172a] transition-colors">Ingresar</a>
          </nav>
          <Link href="#fundador">
            <Button className="h-10 px-5 rounded-xl text-sm bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium">
              Agendar Demo
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* ─── Hero (dark) ─── */}
        <section className="qx-section-dark py-20 md:py-28">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center">
              <div className="qx-badge mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d9469a]" />
                Para talleres de bordado que cotizan en serio
              </div>
              <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Tu cotizador online
                <br />
                <span className="text-[#d4f542]">en 48 horas.</span>
              </h1>
              <p className="qx-subtitle text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Cotizaciones instantáneas con mockups reales. Tus clientes suben su logo,
                eligen la prenda y posición, y ven el resultado al instante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#fundador">
                  <button className="qx-btn-lime">
                    Aplicar como Fundador →
                  </button>
                </Link>
                <a href="https://demo.quotixos.com">
                  <button className="qx-btn-outline">
                    ▶ Ver demo
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#d4f542]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Sin tarjeta de crédito
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#d4f542]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Setup en 24hs
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#d4f542]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Cancelás cuando querés
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Mockup visual (dark) ─── */}
        <section className="qx-section-dark pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-3xl overflow-hidden border border-[#334155] bg-[#1e293b]/50 backdrop-blur">
                <div className="p-3">
                  <div className="rounded-2xl bg-[#0f172a] aspect-[16/9] relative overflow-hidden flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6 max-w-3xl w-full px-12">
                      <div className="space-y-4">
                        <div className="h-3 w-24 bg-[#334155] rounded-full" />
                        <div className="h-10 w-full bg-[#1e293b] rounded-xl border border-[#334155]" />
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-20 bg-[#1e293b] rounded-xl border border-[#334155] flex items-center justify-center text-2xl">👕</div>
                          <div className="h-20 bg-[#bf3480]/10 rounded-xl border-2 border-[#bf3480]/30 flex items-center justify-center text-2xl">🧢</div>
                          <div className="h-20 bg-[#1e293b] rounded-xl border border-[#334155] flex items-center justify-center text-2xl">🎒</div>
                        </div>
                        <div className="h-32 bg-[#1e293b] rounded-xl border border-[#334155] flex items-center justify-center">
                          <span className="text-[#64748b] text-sm">Sube tu logo</span>
                        </div>
                      </div>
                      <div className="bg-[#1e293b] rounded-2xl border border-[#334155] aspect-square relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-48 h-48 bg-[#334155] rounded-full opacity-30" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#bf3480]/20 rounded-lg border-2 border-dashed border-[#bf3480]/40 flex items-center justify-center">
                          <span className="text-[#d9469a] text-xs font-bold">LOGO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pain points (dark) ─── */}
        <section className="qx-section-dark py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="qx-badge mb-4">¿Te suena familiar?</div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                Tu taller está perdiendo tiempo
                <br />
                <span className="text-[#94a3b8]">y no es tu culpa</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "⏱️", title: "45 minutos por cotización", items: ["El cliente se cansa de esperar y llama a otro", "Solo podés hacer 8-10 cotizaciones al día", "El equipo trabaja hasta tarde en tareas mecánicas"], metric: "Pérdida de tiempo", pct: "85%" },
                { icon: "⚠️", title: "Errores que te cuestan plata", items: ["Una coma mal puesta y tu ganancia desaparece", "Le cobrás mal al cliente y perdés credibilidad", "Rehacer cotizaciones que ya habías terminado"], metric: "Riesgo de error", pct: "73%" },
                { icon: "📋", title: "Cada vendedor hace lo suyo", items: ["Uno usa Word, otro Excel, otro WhatsApp", "Tu marca parece amateur sin consistencia", "No sabés quién cotizó qué ni cuándo"], metric: "Falta de control", pct: "91%" },
              ].map((card) => (
                <div key={card.title} className="qx-card-dark p-8">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="font-bold text-lg mb-4 text-white">{card.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#94a3b8]">
                        <span className="text-[#bf3480] font-bold mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#64748b]">{card.metric}</span>
                    <span className="text-white font-semibold">{card.pct}</span>
                  </div>
                  <div className="h-1 bg-[#334155] rounded-full overflow-hidden">
                    <div className="h-full rounded-full qx-gradient-bar" style={{ width: card.pct }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-[#94a3b8] mt-12 mb-8">¿Te resuena alguno de estos problemas?</p>
            <div className="flex justify-center">
              <Link href="#fundador">
                <button className="qx-btn-lime">Agendá una demo y veamos cómo lo resolvemos →</button>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Cómo funciona (light) ─── */}
        <section id="como-funciona" className="qx-section-light py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <div className="qx-badge mb-4" style={{ backgroundColor: "rgba(191,52,128,0.1)" }}>Sin curva de aprendizaje</div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 qx-title">
                Tres pasos. Sin capacitación.
                <br />
                <span className="text-[#64748b]">Sin cambiar tu proceso.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", icon: "📋", title: "COPIÁS Y PEGÁS EL CATÁLOGO", desc: "Desde tu lista actual. Copiás los productos y los pegás en Quotix. Así de simple." },
                { step: "02", icon: "⚡", title: "REVISÁS EN SEGUNDOS", desc: "El sistema arma todo automáticamente. Mockups, zonas, precios. Zero errores." },
                { step: "03", icon: "📄", title: "ENVIÁS EL PDF", desc: "Generás una cotización profesional con tu logo, la enviás al cliente y seguís con la siguiente." },
              ].map((item) => (
                <div key={item.step} className="card-shadow-hover p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-slate-100 flex items-center justify-center text-2xl mx-auto mb-5">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-[#bf3480] tracking-wider mb-3">PASO {item.step}</div>
                  <h3 className="font-bold text-base mb-3 text-[#0f172a]">{item.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-[#64748b] text-sm mb-4">¿Tan fácil? Sí.</p>
              <a href="https://demo.quotixos.com">
                <button className="qx-btn-navy">Quiero verlo en vivo →</button>
              </a>
            </div>
          </div>
        </section>

        {/* ─── Features (light) ─── */}
        <section className="qx-section-light py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 qx-title">Todo lo que necesitás</h2>
              <p className="qx-subtitle">Una plataforma completa para tu taller</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📐", title: "Mockup interactivo", desc: "El cliente arrastra y escala su logo sobre la prenda" },
                { icon: "💰", title: "Cotización automática", desc: "Precio estimado al instante según cantidad y colores" },
                { icon: "📧", title: "Emails automáticos", desc: "Notificaciones al taller y confirmación al cliente" },
                { icon: "🎨", title: "Múltiples vistas", desc: "Frente, espalda, mangas — cada una con sus zonas" },
                { icon: "📱", title: "100% responsive", desc: "Funciona perfecto en celular, tablet y desktop" },
                { icon: "🏷️", title: "Tu marca", desc: "Tu logo, colores y dominio propio" },
                { icon: "📊", title: "Panel de control", desc: "Gestiona productos, precios y cotizaciones" },
                { icon: "⚡", title: "Setup rápido", desc: "De cero a online en menos de 48 horas" },
              ].map((f) => (
                <div key={f.title} className="card-shadow p-6">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-sm mb-1 text-[#0f172a]">{f.title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Fundador (dark) ─── */}
        <section id="fundador" className="qx-section-dark py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="qx-card-dark p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf3480]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="qx-badge mb-6">Edición Limitada — 20 cupos</div>
                <h2 className="font-headline text-4xl font-bold mb-4">Programa Fundador</h2>
                <p className="text-lg text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                  Para talleres de Uruguay y Argentina que quieren ser los primeros en digitalizarse.
                  Incluye setup completo y 3 meses de uso.
                </p>
                <div className="text-5xl font-headline font-bold mb-2 text-white">$300 USD</div>
                <p className="text-sm text-[#64748b] mb-8">Pago único • 3 meses incluidos • Dominio propio</p>
                <Link href="/aplicar-fundador">
                  <button className="qx-btn-lime">Aplicar Ahora</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Planes (light) ─── */}
        <section id="planes" className="qx-section-light py-24 bg-slate-50">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 qx-title">Planes mensuales</h2>
              <p className="qx-subtitle">Después de los 3 meses de fundador</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "$59", period: "/mes", features: ["Landing con cotizador", "Email-only (sin CRM)", "300 cotizaciones/mes", "Subdominio propio", "Soporte por email"], cta: "Elegir Starter", highlight: false },
                { name: "Pro", price: "$99", period: "/mes", features: ["Todo lo de Starter", "CRM Kanban completo", "800 cotizaciones/mes", "Exportar a Excel/PDF", "Soporte por WhatsApp"], cta: "Elegir Pro", highlight: true },
                { name: "Business", price: "$199", period: "/mes", features: ["Todo lo de Pro", "Web completa gestionada", "Cotizaciones ilimitadas", "Múltiples usuarios", "Soporte prioritario"], cta: "Elegir Business", highlight: false },
              ].map((plan) => (
                <div key={plan.name} className={`card-shadow p-8 ${plan.highlight ? "ring-2 ring-[#bf3480] relative" : ""}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#bf3480] text-white text-xs font-semibold rounded-full">
                      Más popular
                    </div>
                  )}
                  <h3 className="text-lg font-bold mb-1 text-[#0f172a]">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-headline font-bold text-[#0f172a]">{plan.price}</span>
                    <span className="text-[#94a3b8] text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 text-sm text-[#64748b] mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#bf3480] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full h-11 rounded-xl ${plan.highlight ? "bg-[#bf3480] hover:bg-[#a32d6d] text-white" : "bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a]"}`}>
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final CTA (dark) ─── */}
        <section className="qx-section-dark py-24">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para dejar de perder tiempo
              <br />
              en cotizaciones?
            </h2>
            <p className="qx-subtitle text-lg mb-8">
              Agendá una demo de 20 minutos. Vamos a:
            </p>
            <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
              {[
                "Hacer una cotización con tus datos reales",
                "Mostrarte cómo se integra con tu taller",
                "Darte un presupuesto exacto para tu negocio",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[#cbd5e1]">
                  <span className="w-6 h-6 rounded-full bg-[#d4f542]/20 text-[#d4f542] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-4">
              <button className="qx-btn-lime">Agendar demo gratuita</button>
            </div>
            <p className="text-sm text-[#64748b] mb-8">Sin compromiso. Sin tarjeta de crédito.</p>
            <div className="flex items-center justify-center gap-2 text-sm text-[#94a3b8]">
              <span className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center text-xs font-bold">MG</span>
              <span className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center text-xs font-bold">JR</span>
              <span className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center text-xs font-bold">AL</span>
              <span className="w-8 h-8 rounded-full bg-[#334155] flex items-center justify-center text-xs font-bold">PC</span>
              <span className="ml-2"><strong className="text-white">+200 talleres</strong> ya cotizan más rápido</span>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer (dark) ─── */}
      <footer className="bg-[#0a0f1e] border-t border-[#1e293b]">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-headline font-bold text-white text-xl">Quotix</div>
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} Quotix. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
