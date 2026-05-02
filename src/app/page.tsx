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
            <Link href="#fundador" className="text-sm text-slate-500 hover:text-[#0f172a] transition-colors">Oferta Fundador</Link>
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
        <section className="qx-section-dark py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="qx-badge mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d9469a]" />
                  Para talleres de personalización y bordado que quieren escalar
                </div>
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Deja de perder horas cotizando por WhatsApp.
                  <br />
                  <span className="text-[#d4f542]">Que tus clientes se coticen solos.</span>
                </h1>
                <p className="qx-subtitle text-lg md:text-xl mb-10 leading-relaxed text-[#cbd5e1]">
                  Convierte a los curiosos en clientes. Un cotizador visual e interactivo donde tu cliente sube su logo, ve cómo queda en la prenda y obtiene un rango de precio al instante. Tú solo recibes el pedido cerrado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#fundador">
                    <button className="qx-btn-lime">
                      Quiero aprovechar la Oferta Fundador →
                    </button>
                  </Link>
                  <a href="https://demo.quotixos.com" target="_blank" rel="noreferrer">
                    <button className="qx-btn-outline">
                      ▶ Ver Demo Interactiva
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative">
                {/* [FLAG_ANIMACION: Hero_ChatToMockup - Animación de un chat de WhatsApp aburrido que transiciona a la interfaz de Quotix donde se arrastra un logo sobre una prenda y aparece el precio estimado] */}
                <div className="w-full aspect-square bg-[#1e293b] rounded-3xl border border-[#334155] flex items-center justify-center p-8 text-center border-dashed">
                  <span className="text-slate-500 font-mono text-sm">
                    {`/* [FLAG_ANIMACION: Hero_ChatToMockup] */`}
                    <br/><br/>
                    (Aquí va la animación del chat de WhatsApp transformándose en el cotizador interactivo)
                  </span>
                </div>
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
                El proceso actual te está robando tiempo y ventas.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "😩", title: "El cliente ansioso", desc: "Te pide precio de 'una remera con un loguito'. Le pides el logo, te lo manda pixelado, no sabe el tamaño. Pierdes 40 minutos en un ida y vuelta." },
                { icon: "💸", title: "El síndrome del 'es muy caro'", desc: "Haces todo el trabajo manual de calcular puntadas, armar el presupuesto y al final el cliente te dice 'ah, pensé que era más barato' y desaparece." },
                { icon: "⏳", title: "Cuellos de botella", desc: "Tú eres el único que sabe cotizar. Si tú no estás frente a la computadora, el negocio simplemente no vende ni avanza." },
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
                La experiencia de compra que tus clientes esperan
                <br />
                <span className="text-[#94a3b8]">(y que tu competencia no tiene).</span>
              </h2>
            </div>
            
            <div className="space-y-20">
              {/* Paso 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-[#d4f542] font-mono text-sm font-bold mb-2">PASO 01</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">El efecto "WOW" visual.</h3>
                  <p className="text-[#cbd5e1] leading-relaxed">
                    El cliente sube su logo y el sistema lo superpone en la prenda con la textura y el color correctos. Una imagen vale más que mil presupuestos en PDF.
                  </p>
                </div>
                <div className="bg-[#1e293b] rounded-2xl border border-[#334155] p-6 aspect-video flex items-center justify-center border-dashed">
                  {/* [FLAG_ANIMACION: Solucion_ColorToggle - Animación de un selector de colores cambiando instantáneamente el color de una prenda de fondo mientras el logo permanece intacto] */}
                  <span className="text-slate-500 font-mono text-sm text-center">
                    {`/* [FLAG_ANIMACION: Solucion_ColorToggle] */`}
                    <br/>
                    (Animación de prenda cambiando de color fluido)
                  </span>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <div className="text-[#d4f542] font-mono text-sm font-bold mb-2">PASO 02</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Transparencia sin compromiso.</h3>
                  <p className="text-[#cbd5e1] leading-relaxed">
                    El sistema calcula un rango de precios (pseudo-cotización) basado en tus reglas ocultas (colores, cantidad, técnica). Filtras a los curiosos al instante sin perder tu tiempo.
                  </p>
                </div>
                <div className="bg-[#1e293b] rounded-2xl border border-[#334155] p-6 aspect-video flex items-center justify-center md:order-1 border-dashed">
                  {/* [FLAG_ANIMACION: Solucion_PriceSlider - Animación de un slider numérico de cantidad que actualiza en tiempo real un precio tachado por uno con descuento por volumen] */}
                  <span className="text-slate-500 font-mono text-sm text-center">
                    {`/* [FLAG_ANIMACION: Solucion_PriceSlider] */`}
                    <br/>
                    (Animación de slider de cantidad ajustando precio en tiempo real)
                  </span>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-[#d4f542] font-mono text-sm font-bold mb-2">PASO 03</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Captura de Datos Inmediata.</h3>
                  <p className="text-[#cbd5e1] leading-relaxed">
                    Para enviar la cotización final, el cliente te deja su nombre, WhatsApp y el logo ya vectorizado o listo para revisar. Tú recibes un lead caliente, 100% interesado.
                  </p>
                </div>
                <div className="bg-[#1e293b] rounded-2xl border border-[#334155] p-6 aspect-video flex items-center justify-center border-dashed">
                  {/* [FLAG_ANIMACION: Beneficios_LeadNotification - Animación en bucle de una tarjeta estilo notificación cayendo en la pantalla: "🎯 Nuevo pedido de cotización: Juan Pérez"] */}
                  <span className="text-slate-500 font-mono text-sm text-center">
                    {`/* [FLAG_ANIMACION: Beneficios_LeadNotification] */`}
                    <br/>
                    (Notificación cayendo: "Nuevo pedido de cotización")
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Beneficios (light) ─── */}
        <section className="qx-section-light py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold mb-12 text-[#0f172a]">
              No es solo un cotizador, es tu vendedor 24/7.
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-xl">⚙️</div>
                <h4 className="font-bold text-[#0f172a] mb-2">Precios dinámicos</h4>
                <p className="text-sm text-slate-600">Configura márgenes, recargos por urgencia y descuentos por volumen bajo tu total control.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 text-xl">🚀</div>
                <h4 className="font-bold text-[#0f172a] mb-2">Cero habilidades técnicas</h4>
                <p className="text-sm text-slate-600">Nosotros armamos todo tu catálogo y fórmulas. Tú solo recibes los pedidos listos.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4 text-xl">✨</div>
                <h4 className="font-bold text-[#0f172a] mb-2">Imagen hiper-profesional</h4>
                <p className="text-sm text-slate-600">Posiciona tu marca automáticamente por encima de la competencia que cotiza en un bloc de notas.</p>
              </div>
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
                  Cupos Limitados (Solo 20 talleres)
                </div>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-white">
                  Programa Fundador: Digitaliza tu taller hoy.
                </h2>
                <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
                  No queremos venderte un software más, queremos armarte la presencia digital completa para que vendas más y mejor.
                </p>
              </div>

              <div className="bg-[#0f172a] rounded-2xl p-6 md:p-8 mb-10 border border-[#334155]">
                <h3 className="text-xl font-bold text-white mb-6">📦 Lo que te llevas hoy:</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <strong className="text-white block">Tu Landing Page Profesional Propia</strong>
                      <span className="text-[#94a3b8] text-sm">Diseño exclusivo y dominio propio. <em className="text-[#cbd5e1]">(Valor normal: $200 USD)</em></span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <strong className="text-white block">3 Meses de Acceso Total a Quotix PRO</strong>
                      <span className="text-[#94a3b8] text-sm">Cotizador visual, panel de control, leads ilimitados. <em className="text-[#cbd5e1]">(Valor normal: $300 USD)</em></span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">🛠️</span>
                    <div>
                      <strong className="text-white block">Configuración inicial "Llave en mano"</strong>
                      <span className="text-[#94a3b8] text-sm">Nosotros subimos tus prendas y ajustamos tus fórmulas de precio. <em className="text-[#cbd5e1]">(Invaluable)</em></span>
                    </div>
                  </li>
                </ul>

                <div className="pt-6 border-t border-[#334155] text-center">
                  <div className="text-[#94a3b8] text-lg mb-2">Valor Total Real: <s>$500 USD</s></div>
                  <div className="text-[#d4f542] text-5xl font-headline font-bold mb-4">
                    $275 <span className="text-2xl">USD</span>
                  </div>
                  <p className="text-sm text-white mb-6 bg-white/5 inline-block px-4 py-2 rounded-lg">
                    💳 Puedes pagarlo hasta en <strong>12 cuotas</strong> con Mercado Pago.
                  </p>
                  <Link href="/aplicar-fundador">
                    <button className="qx-btn-lime w-full text-lg h-14">
                      Quiero ser Fundador por $275 USD
                    </button>
                  </Link>
                </div>
              </div>

              {/* Garantía */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4 border border-slate-700 text-2xl">
                  🛡️
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Cero riesgo para ti.</h4>
                <p className="text-[#94a3b8] text-sm max-w-2xl mx-auto leading-relaxed">
                  Pasados los 3 meses de prueba del sistema PRO, tú decides:
                  <br className="mb-2"/>
                  👉 <strong>Opción A:</strong> Te quedas con el plan completo por $99 USD/mes para seguir automatizando tus ventas.
                  <br/>
                  👉 <strong>Opción B:</strong> Cancelas la suscripción al cotizador, <strong>pero la Landing Page profesional sigue siendo tuya para siempre</strong> (solo pagas el mantenimiento básico de hosting). ¡No tienes nada que perder!
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
                <h4 className="font-bold text-[#0f172a] mb-2">¿Tengo que saber programar?</h4>
                <p className="text-slate-600 text-sm">No, nosotros nos encargamos de toda la configuración técnica. Te entregamos el sistema funcionando en tu propio dominio, listo para recibir clientes.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0f172a] mb-2">¿El precio que da el cotizador es final?</h4>
                <p className="text-slate-600 text-sm">No, el sistema da una pseudo-cotización (un rango estimado). El precio final lo confirmas tú cuando revisas el logo y los detalles, pero esto te garantiza que el cliente ya está de acuerdo con ese rango de precio, filtrando a los que buscan lo más barato.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-[#0f172a] mb-2">¿Qué pasa después de los 3 meses incluidos?</h4>
                <p className="text-slate-600 text-sm">Si amas el sistema (y creemos que lo harás), pasas a abonar la suscripción mensual de $99 USD. Si decides que no es para ti, te quedas con la Landing Page que te armamos como tu sitio web principal, sin obligación de pagar el SaaS.</p>
              </div>
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
