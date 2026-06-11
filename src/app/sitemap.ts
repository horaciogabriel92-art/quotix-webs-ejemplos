import type { MetadataRoute } from "next";
import { getCategories } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://networkcapital.quotixos.com";
  const categories = getCategories();

  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/networkcapital/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/networkcapital`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryUrls,
  ];
}
