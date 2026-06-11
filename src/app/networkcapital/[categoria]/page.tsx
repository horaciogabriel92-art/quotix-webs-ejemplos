import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/networkcapital/Header";
import Footer from "@/components/networkcapital/Footer";
import WhatsAppSticky from "@/components/networkcapital/WhatsAppSticky";
import {
  getCategoryBySlug,
  getCategories,
  getProductsByCategory,
} from "@/lib/categories";
import { BRAND, type Product } from "@/lib/networkcapital-data";

interface Props {
  params: Promise<{ categoria: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);
  if (!category) {
    return { title: "Categoría no encontrada — Network Capital" };
  }
  return {
    title: `${category.name} — Network Capital`,
    description: `Catálogo de ${category.name.toLowerCase()} por mayor. ${category.count} productos para estampar y personalizar. Hecho en Uruguay.`,
  };
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((c) => ({ categoria: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.name);
  const otherCategories = getCategories().filter(
    (c) => c.slug !== category.slug
  );

  return (
    <main className="bg-[#0B1628] min-h-screen">
      <Header />

      {/* Hero de categoría */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#0B1628] via-[#061828] to-[#0B1628]">
        <div className="container mx-auto px-6">
          <div>
            <Link
              href="/networkcapital"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#F2B411] text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al catálogo
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-black text-white">
                {category.name}
              </h1>
              <span className="px-3 py-1 bg-[#F2B411]/10 text-[#F2B411] text-sm font-bold rounded-full">
                {category.count} productos
              </span>
            </div>
            <p className="text-white/50 text-lg max-w-2xl">
              Calidad premium para tu marca. Todos los productos de{" "}
              {category.name.toLowerCase()} están pensados para estampar con serigrafía y DTF.
            </p>
          </div>
        </div>
      </section>

      {/* Productos de la categoría */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Otras categorías */}
      <section className="py-20 border-t border-[#007DB8]/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              OTRAS <span className="text-[#F2B411]">CATEGORÍAS</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Seguí explorando nuestro catálogo
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/networkcapital/${cat.slug}`}
                className="group block bg-[#131d2b] rounded-xl overflow-hidden border border-[#007DB8]/10 hover:border-[#F2B411]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2 py-0.5 bg-[#F2B411] text-[#007DB8] text-[10px] font-bold rounded-full uppercase">
                      {cat.count} prod.
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white font-bold text-sm group-hover:text-[#F2B411] transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppSticky />
    </main>
  );
}

// ProductCard inline para la página de categoría (reusa estilo de ProductGrid)
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div
      style={{
        animationDelay: `${index * 0.08}s`,
      }}
      className="animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-backwards"
    >
      <Link
        href={`${BRAND.ctaUrl}/?producto=${product.id}`}
        className="group block bg-[#131d2b] rounded-2xl overflow-hidden border border-[#007DB8]/10 hover:border-[#F2B411]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,125,184,0.15)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-[#F2B411] text-[#007DB8] text-xs font-bold rounded-full uppercase">
              {product.category}
            </span>
          </div>
          {product.weight && product.weight !== "—" && (
            <div className="absolute bottom-3 right-3">
              <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold rounded-lg uppercase">
                {product.weight}
              </span>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#F2B411] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <p className="text-[#F2B411] font-extrabold text-xl">
              Desde ${product.priceFrom.toLocaleString("es-UY")}
            </p>
            <p className="text-white/30 text-xs line-through">c/estampado</p>
          </div>
          <p className="text-white/40 text-sm mt-1">
            Mínimo {product.minQty} unidades
          </p>
          <div className="mt-4 flex items-center gap-1 text-[#007DB8] text-sm font-medium">
            Cotizar ahora <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </div>
  );
}
