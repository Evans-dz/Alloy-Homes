// =============================================================
// ALLOY HOMES — THE COLLECTION (real projects)
// -------------------------------------------------------------
// Two completed Alloy homes with real photography.
//   cover   -> card / showcase image
//   gallery -> photos shown on the home's detail page (/homes/<slug>)
//
// Per the owner: no square footage, bed/bath counts, feature lists,
// or style labels — just a photo, a short description, and a way to
// view the home.
// NOTE: locations are best-guess (Red Mountain area) — confirm with
// Justin. Set `location` to "" to hide it.
// =============================================================

export const homes = [
  {
    slug: "coral-autumn",
    name: "Coral Autumn",
    location: "Ivins, UT", // confirm
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
    blurb:
      "A single-level desert estate designed for gathering. Walls of glass connect the great room to a resort-style backyard framed by red rock, creating a seamless transition between indoor and outdoor living. Inside, a stacked-stone fireplace anchors the living space, while white oak cabinetry and doors bring warmth and continuity throughout the home.",
  },
  {
    slug: "juniper",
    name: "Juniper Way",
    location: "Ivins, UT", // confirm
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
    blurb:
      "Clean desert-contemporary architecture meets a warm, inviting interior. An open great room and chef's kitchen flow naturally to the covered patio, while expansive windows frame the surrounding red-rock views. Inside, rich walnut, natural stone, and thoughtfully detailed spaces bring warmth and character throughout the home.",
  },
];

export function getHome(slug) {
  return homes.find((h) => h.slug === slug);
}
