// =============================================================
// ALLOY HOMES — SITE CONFIG
// Edit this file to update company info across the entire site.
// =============================================================

export const site = {
  name: "Alloy Homes",
  legalName: "Alloy Homes LLC",
  tagline: "Come home to luxury.",
  // One-line positioning used in the hero + meta description.
  positioning:
    "Custom design-build homes crafted for Southern Utah — refined, enduring, and entirely your own.",

  // ---- Contact ----
  phone: "(435) 770-1232",
  phoneHref: "tel:4357701232",
  // Set this to the address you want inquiry emails delivered to.
  email: "justin@alloy-homes.com",
  city: "St. George, Utah",

  // Towns you build in (shown in the footer + contact section).
  serviceArea: [
    "St. George",
    "Washington",
    "Hurricane",
    "Ivins",
    "Santa Clara",
    "Washington County",
  ],

  // ---- Social links (replace # with real profiles, or delete) ----
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],

  // ---- Primary navigation ----
  nav: [
    { label: "Homes", href: "#homes" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

// The three brand pillars from Alloy's current messaging, refined.
export const pillars = [
  {
    title: "Innovation",
    body: "We pursue the best available in the building industry — materials, methods, and finishes — so your home is built with what's next, not what's easy.",
  },
  {
    title: "Customization",
    body: "As a true custom builder, your hand is on every detail: from exterior palette to the placement of a single outlet, and everything in between.",
  },
  {
    title: "Longevity",
    body: "Built to stand the test of time and backed by a warranty on our labor and materials. After move-in, our team stays close to your investment.",
  },
];

// The build process (a true sequence — hence the numbering).
export const process = [
  {
    step: "01",
    title: "Pre-construction",
    body: "From selecting a lot to a detailed review of your floor plan, you're involved in every decision. We work to fully understand what you want from your home, then guide each step to realize it.",
  },
  {
    step: "02",
    title: "Construction",
    body: "Once we break ground, your vision starts to take shape. You'll receive timely updates and walk the home with our tradesmen, customizing as we go. Quality control at this stage is where our attention to detail shows.",
  },
  {
    step: "03",
    title: "Post-construction",
    body: "The keys are yours. As you settle in, we stay available to you and your investment — because the relationship we build over your project is meant to last well beyond move-in day.",
  },
];

// Assurances (honest, qualitative — no invented numbers).
export const assurances = [
  {
    title: "Design-build, under one roof",
    body: "Design and construction handled by one accountable team. Fewer handoffs, fewer surprises, one point of contact from first sketch to final key.",
  },
  {
    title: "Warranty on labor & materials",
    body: "We stand behind the work. Our warranty covers both the craftsmanship and the materials that go into your home.",
  },
  {
    title: "Open, calm communication",
    body: "Building a home should be exciting, not stressful. We keep you informed and involved so the process feels clear the whole way through.",
  },
  {
    title: "15+ years of building",
    body: "Justin has spent more than fifteen years in the building industry, with a constant habit of learning new ways to build better.",
  },
];
