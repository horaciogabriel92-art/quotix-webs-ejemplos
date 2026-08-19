import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/networkcapital", "/sitemap.xml"],
      disallow: "/",
    },
    sitemap: "https://networkcapital.com.uy/sitemap.xml",
  };
}
