import type { MetadataRoute } from "next";
import { categories } from "@/lib/courses";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/courses", "/employers", "/about", "/careers", "/student-information", "/safeguarding", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...categories.map((c) => ({ url: `${site.url}/courses/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
