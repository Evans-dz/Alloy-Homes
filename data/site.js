// =============================================================
// ALLOY HOMES — SITE CONFIG
// Edit this file to update company info across the entire site.
// =============================================================

export const site = {
  name: "Alloy Homes",
  legalName: "Alloy Homes LLC",
  tagline: "Built around you. Built to endure.",
  // One-line positioning used in the hero + meta description.
  positioning:
    "Custom design-build homes in Southern Utah — design, planning, and craftsmanship under one accountable team.",

  // ---- Contact ----
  phone: "(435) 770-1232",
  phoneHref: "tel:4357701232",
  // Set this to the address you want inquiry emails delivered to.
  email: "info@alloy.homes",
  city: "Southern Utah",

  // Towns you build in (shown in the footer + contact section).
  // Grouped loosely by area: Washington County first, then Kane/Garfield.
  serviceArea: [
    "St. George",
    "Washington",
    "Hurricane",
    "Ivins",
    "Santa Clara",
    "Kanab",
    "Duck Creek",
    "Panguitch",
    "Panguitch Lake",
  ],

  // ---- Agency credit (bottom bar) ----
  credit: {
    label: "EZHD",
    href: "https://ez-hd.co",
  },

  // ---- Social links ----
  social: [
    { label: "Instagram", href: "https://www.instagram.com/alloy.homes" },
    { label: "Facebook", href: "https://www.facebook.com/Alloy.Homes.Utah" },
  ],

  // ---- Professional memberships (footer strip) ----
  // Ordered local -> state -> national. Drop the logo files into
  // public/images/memberships/; if one is missing the short name renders
  // in its place, so the row never shows a broken image.
  memberships: [
    {
      name: "Southern Utah Home Builders Association",
      short: "SUHBA",
      logo: "/images/memberships/suhba.png",
      href: "https://suhba.com/",
    },
    {
      name: "Utah Home Builders Association",
      short: "Utah HBA",
      logo: "/images/memberships/hbautah.png",
      href: "https://www.hbautah.com/",
    },
    {
      name: "National Association of Home Builders",
      short: "NAHB",
      logo: "/images/memberships/nahb.png",
      href: "https://www.nahb.org/",
    },
  ],

  // ---- Primary navigation ----
  nav: [
    { label: "Homes", href: "#homes" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

// The three brand pillars, in the owner's words.
export const pillars = [
  {
    title: "Design",
    body: "Every home begins with the people who will live there. From the way you move through the home to the smallest architectural details, we create spaces that are personal, purposeful, and entirely your own.",
  },
  {
    title: "Innovation",
    body: "We pursue the best available in the building industry — materials, methods, and finishes — and pair them with proven craftsmanship. Your home is built with what's next, not what's easy.",
  },
  {
    title: "Commitment",
    body: "Our commitment doesn't end at move-in. We're here for the years to come, standing behind our work and ready to help with whatever your home may need.",
  },
];

// The build process (a true sequence — hence the numbering).
export const process = [
  {
    step: "01",
    title: "Pre-Construction",
    body: "We plan before we build. From site evaluation and design to engineering, selections, budgeting, and permitting, we bring the pieces together early so expectations are clear before construction begins.",
  },
  {
    step: "02",
    title: "Construction",
    body: "This is where the planning becomes real. We coordinate the people, materials, schedule, and details while keeping you connected to the progress and decisions that matter along the way.",
  },
  {
    step: "03",
    title: "After Move-In",
    body: "Move-in isn't the end of our relationship. We remain a resource for you and your home, standing behind our work and here whenever you need us.",
  },
];
