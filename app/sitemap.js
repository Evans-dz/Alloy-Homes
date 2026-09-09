import { homes } from "../data/homes";

const BASE = "https://www.alloy.homes";

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
  ];
}
