import { site } from "../data/site";

// Structured data for search engines. Everything here is read from
// data/site.js so the schema can never disagree with what the page says.
export default function JsonLd({ data }) {
  // "<" is escaped so a stray "</script>" in any string can't close the tag.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

// The business itself, for the homepage. No street address: the site
// doesn't publish one, so the schema lists the region and the towns served.
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}/`,
    description: site.positioning,
    slogan: site.tagline,
    telephone: site.phoneIntl,
    email: site.email,
    logo: `${site.url}/images/logos/alloy-homes-black.png`,
    image: `${site.url}/images/hero/hero.jpg`,
    address: {
      "@type": "PostalAddress",
      addressRegion: site.region,
      addressCountry: "US",
    },
    areaServed: site.serviceArea.map((town) => ({
      "@type": "Place",
      name: `${town}, Utah`,
    })),
    founder: {
      "@type": "Person",
      name: "Justin Gish",
      jobTitle: "Owner and Builder",
    },
    memberOf: site.memberships.map((m) => ({
      "@type": "Organization",
      name: m.name,
      url: m.href,
    })),
    sameAs: site.social.map((s) => s.href),
  };
}

// Home > page trail for sub-pages. Pass [{ name, path }] after "Home".
export function breadcrumbSchema(trail) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}
