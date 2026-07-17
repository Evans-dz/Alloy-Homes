// =============================================================
// ALLOY HOMES — THE COLLECTION (real projects)
// -------------------------------------------------------------
// Two completed Alloy homes with real photography.
//   cover   -> card / showcase image
//   gallery -> photos shown on the home's detail page (/homes/<slug>)
//
// NOTE: sqft / beds / baths are ESTIMATES — replace with the real
// figures from Justin. Any spec left as an empty string ("") is
// simply hidden, so it's safe to blank one out until confirmed.
// Locations are best-guess (Red Mountain area) — confirm the city.
// =============================================================

export const homes = [
  {
    slug: "coral-autumn",
    name: "Coral Autumn",
    style: "Modern Desert Estate",
    location: "Ivins, UT", // confirm
    sqft: "6,500", // estimate — confirm
    beds: "5", // estimate — confirm
    baths: "6", // estimate — confirm
    garage: "Oversized", // confirm
    featured: true,
    cover: "/images/homes/coral-autumn/cover.jpg",
    gallery: [
      "/images/homes/coral-autumn/gallery-01.jpg",
      "/images/homes/coral-autumn/gallery-02.jpg",
      "/images/homes/coral-autumn/gallery-03.jpg",
      "/images/homes/coral-autumn/gallery-04.jpg",
      "/images/homes/coral-autumn/gallery-05.jpg",
      "/images/homes/coral-autumn/gallery-06.jpg",
      "/images/homes/coral-autumn/gallery-07.jpg",
    ],
    features: [
      "Resort pool & spa",
      "Fire features",
      "Sport court & putting green",
      "Steel-beam carport",
      "Bunk room",
    ],
    blurb:
      "A single-level desert estate built for gathering. Walls of glass open the great room to a resort backyard — pool, spa, fire features, and a sport court framed by red rock. Inside, a stacked-stone fireplace anchors the living space and warm walnut runs throughout.",
  },
  {
    slug: "juniper",
    name: "Juniper Way",
    style: "Desert Contemporary",
    location: "Ivins, UT", // confirm
    sqft: "3,000", // estimate — confirm
    beds: "4", // estimate — confirm
    baths: "3.5", // estimate — confirm
    garage: "3-car", // confirm
    featured: false,
    cover: "/images/homes/juniper/cover.jpg",
    gallery: [
      "/images/homes/juniper/gallery-01.jpg",
      "/images/homes/juniper/gallery-02.jpg",
      "/images/homes/juniper/gallery-03.jpg",
      "/images/homes/juniper/gallery-04.jpg",
      "/images/homes/juniper/gallery-05.jpg",
      "/images/homes/juniper/gallery-06.jpg",
      "/images/homes/juniper/gallery-07.jpg",
      "/images/homes/juniper/gallery-08.jpg",
    ],
    features: [
      "Single-level living",
      "Great-room stone fireplace",
      "Chef's kitchen",
      "Covered patio",
      "Red-rock views",
    ],
    blurb:
      "Clean desert-contemporary lines with a warm, livable core. An open great room and chef's kitchen in walnut and stone flow out to a covered patio and turf yard, with the red cliffs as a backdrop and a spa-like owner's bath finished down to the detail.",
  },
];

export function getHome(slug) {
  return homes.find((h) => h.slug === slug);
}
