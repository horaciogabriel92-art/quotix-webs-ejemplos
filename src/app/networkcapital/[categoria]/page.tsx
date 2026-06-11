import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/networkcapital/Header";
import Footer from "@/components/networkcapital/Footer";
import WhatsAppSticky from "@/components/networkcapital/WhatsAppSticky";
import ProductGrid from "@/components/networkcapital/ProductGrid";
import JsonLd from "@/components/networkcapital/JsonLd";
import {
  getCategoryBySlug,
  getCategories,
  getProductsByCategory,
} from "@/lib/categories";

interface Props {
  params: Promise<{ categoria: string }>;
}

const CATEGORY_KEYWORDS: Record<string, string> = {
  remeras: "remeras personalizadas, remeras por mayor Uruguay, remeras serigrafía, remeras DTF",
  buzos: "buzos personalizados, buzos por mayor Uruguay, buzos serigrafía, buzos DTF",
  camperas: "camperas personalizadas, camperas por mayor Uruguay, camperas serigrafía",
  canguros: "canguros personalizados, canguros por mayor Uruguay, canguros serigrafía",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);
  if (!category) {
    return { title: "Categoría no encontrada — Network Capital" };
  }
  const slug = category.slug;
  const keywords = CATEGORY_KEYWORDS[slug] || "personalización de prendas, serigrafía, DTF";
  return {
    title: `${category.name} personalizadas por mayor — Network Capital`,
    description: `Catálogo de ${category.name.toLowerCase()} personalizadas por mayor en Uruguay. ${category.count} modelos para estampar con serigrafía y DTF. Mínimo 10 unidades. Calidad premium local.`,
    keywords: keywords.split(", "),
    alternates: {
      canonical: `/networkcapital/${slug}`,
    },
    openGraph: {
      url: `https://networkcapital.quotixos.com/networkcapital/${slug}`,
      title: `${category.name} personalizadas por mayor — Network Capital`,
      description: `Catálogo de ${category.name.toLowerCase()} personalizadas por mayor en Uruguay. ${category.count} modelos para estampar con serigrafía y DTF.`,
      images: [category.image],
    },
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

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} personalizadas por mayor`,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: `https://networkcapital.quotixos.com${product.image}`,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: "Network Capital",
        },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: product.priceFrom,
          priceCurrency: "UYU",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <main className="bg-[#0B1628] min-h-screen">
      <JsonLd data={itemListSchema} />
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

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-black text-white">
                {category.name} personalizadas
              </h1>
              <span className="px-3 py-1 bg-[#F2B411]/10 text-[#F2B411] text-sm font-bold rounded-full">
                {category.count} productos
              </span>
            </div>
            <p className="text-white/50 text-lg max-w-2xl">
              Calidad premium para tu marca. Todos los productos de{" "}
              {category.name.toLowerCase()} están pensados para personalizar con serigrafía y DTF.
            </p>
          </div>
        </div>
      </section>

      {/* Productos de la categoría */}
      <ProductGrid products={products} showHeader={false} />

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
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2 py-0.5 bg-[#F2B411] text-black text-[10px] font-bold rounded-full uppercase">
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
