import { homes } from "../data/homes";
import { site } from "../data/site";

const BASE = site.url;

export default function sitemap() {
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...homes.map((home) => ({
      url: `${BASE}/homes/${home.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...site.legal.map((page) => ({
      url: `${BASE}${page.href}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    })),
  ];
}
