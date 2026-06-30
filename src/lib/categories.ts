import { PRODUCTS } from "./networkcapital-data";

export interface Category {
  slug: string;
  name: string;
  count: number;
  image: string;
}

export function getCategories(): Category[] {
  const map = new Map<string, { name: string; image: string; count: number }>();

  for (const product of PRODUCTS) {
    const existing = map.get(product.category);
    if (existing) {
      existing.count++;
    } else {
      map.set(product.category, {
        name: product.category,
        image: product.image,
        count: 1,
      });
    }
  }

  return Array.from(map.entries()).map(([name, data]) => ({
    slug: name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ñ/g, "n")
      .replace(/\s+/g, "-"),
    name,
    count: data.count,
    image: data.image,
  }));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getProductsByCategory(categoryName: string) {
  return PRODUCTS.filter((p) => p.category === categoryName);
}
