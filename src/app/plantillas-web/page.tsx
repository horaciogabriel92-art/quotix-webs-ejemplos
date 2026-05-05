import Link from "next/link";

const PLANTILLAS = [
  {
    id: 1,
    name: "Modern Dark",
    desc: "Oscuro, glassmorphism y acentos vibrantes. Para talleres que quieren verse tech.",
    color: "from-[#0f172a] to-[#1e293b]",
    accent: "#d9469a",
    preview: "bg-[#0f172a]",
  },
  {
    id: 2,
    name: "Clean Light",
    desc: "Blanco, limpio y profesional. Para talleres tradicionales que buscan confianza.",
    color: "from-white to-slate-50",
    accent: "#2563eb",
    preview: "bg-white",
  },
  {
    id: 3,
    name: "Bold Color",
    desc: "Color de marca fuerte y tipografía audaz. Para equipos deportivos y eventos.",
    color: "from-[#bf3480] to-[#d9469a]",
    accent: "#ffffff",
    preview: "bg-[#bf3480]",
  },
  {
    id: 4,
    name: "Minimal",
    desc: "Mucho aire, tipografía elegante, cero distracciones. Para nichos premium.",
    color: "from-white to-gray-50",
    accent: "#0f172a",
    preview: "bg-gray-50",
  },
];

export default function PlantillasSelector() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Quotix
          </Link>
          <span className="text-sm text-slate-400">Plantillas de landing page para tenants</span>
        </div>
      </header>

      {/* Hero selector */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Elegí la cara de tu taller
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              4 plantillas profesionales listas para usar. Solo cambiás tu logo, tus textos y tu color de marca.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANTILLAS.map((p) => (
              <Link
                key={p.id}
                href={`/plantillas-web/plantilla-${p.id}`}
                className="group block rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Preview mini */}
                <div className={`h-40 ${p.preview} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80" />
                  <span
                    className="relative text-4xl font-bold"
                    style={{ color: p.accent }}
                  >
                    {p.id}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#d4f542] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                    Ver plantilla
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
