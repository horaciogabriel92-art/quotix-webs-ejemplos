import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/networkcapital",
      disallow: "/",
    },
    sitemap: "https://networkcapital.quotixos.com/sitemap.xml",
  };
}
