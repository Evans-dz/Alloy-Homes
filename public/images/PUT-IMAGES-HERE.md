# Photos & video — what's already here, and what to add

Justin's two completed homes are already wired in with optimized photos,
and the hero uses his drone footage. This file explains the layout so you
can confirm details, add Justin's portrait, or add more homes later.

## Already populated ✔

    hero/hero.mp4            ← homepage background video (from IMG_0938, ~5 MB, 1600px, muted)
    hero/hero-poster.jpg     ← still shown before the video plays
    hero/hero-alt-1.mp4      ← OPTIONAL alternate clip (from IMG_0940) — rename to hero.mp4 to use
    hero/hero-alt-2.mp4      ← OPTIONAL alternate clip (from IMG_0939) — rename to hero.mp4 to use

    homes/coral-autumn/cover.jpg + gallery-01..07.jpg   ← 714 E Coral Autumn Lane
    homes/juniper/cover.jpg     + gallery-01..08.jpg    ← 583 Juniper Way

(You can delete hero-alt-1/2.mp4 to slim the repo if you don't want the spares.)

## Still to add

    about/justin.jpg         ← a portrait of Justin (roughly vertical / 4:5).
                               Until added, the About section shows a bronze placeholder.

## Adding another home later

1. Make a folder: `public/images/homes/<slug>/` with `cover.jpg` and
   `gallery-01.jpg`, `gallery-02.jpg`, … (landscape, ~1600–1800px wide,
   quality ~80 to keep them light).
2. Add an entry to `data/homes.js` (copy an existing one) with the matching
   slug, name, location, specs, features, blurb, cover, and gallery paths.
   The homepage showcase and the `/homes/<slug>` page build automatically.

## Confirm before going live

The homes are real, but a few fields are best-guesses in `data/homes.js`:
- **sq ft / beds / baths / garage** — currently estimates. Replace with the
  real numbers (or blank one out — empty specs are hidden automatically).
- **City** — both set to "Ivins, UT"; confirm the correct town.
- **Home names** — "Coral Autumn" and "Juniper Way" (from the street names).
  Change to whatever Justin calls them.
