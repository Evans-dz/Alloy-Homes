# Alloy Homes — Website

A custom marketing site for Alloy Homes (Justin Gish), custom design-build
home builder in St. George / Southern Utah. Built with **Next.js 14** (App
Router). No database, no build config to fuss with — deploys clean on Vercel.

---

## What's here

```
app/
  layout.jsx        ← fonts, SEO metadata, header + footer
  page.jsx          ← the homepage (composes the sections)
  globals.css       ← the entire visual system (edit styles here)
  api/contact/route.js  ← handles the inquiry form
components/          ← Hero, Collection, Process, About, Contact, etc.
data/
  site.js           ← company info, contact, nav, service area  ← EDIT ME
  homes.js          ← the home collection (names, specs, photos)  ← EDIT ME
  testimonials.js   ← client reviews  ← EDIT ME
public/images/      ← drop photos + hero video here (see PUT-IMAGES-HERE.md)
```

---

## 1) Put it on GitHub (browser only)

1. Create a new repo on github.com (e.g. `alloy-homes`), no README.
2. Upload every file/folder from this project (drag-and-drop into the
   GitHub web uploader, or "Add file → Upload files"). Keep the folder
   structure intact.

## 2) Deploy on Vercel

1. Go to vercel.com → **Add New… → Project** → import the `alloy-homes` repo.
2. Framework preset auto-detects **Next.js**. Leave build settings default.
3. Deploy. You'll get a live `*.vercel.app` preview link to send Justin.

Every time you commit on GitHub, Vercel redeploys automatically.

## 3) Photos & hero video — already done

Justin's two homes (Coral Autumn / 714 E Coral Autumn Lane and Juniper Way /
583 Juniper Way) are already wired in with optimized photos, and the hero
uses his drone footage. See `public/images/PUT-IMAGES-HERE.md` for the layout,
how to add Justin's portrait, and how to add more homes later. The only image
still missing is Justin's portrait for the About section (shows a placeholder
until added).

## 4) Make the inquiry form deliver email

The form works immediately in preview (submissions are accepted and logged).
To actually receive emails, connect [Resend](https://resend.com) (free tier):

1. Create a Resend account, verify a sending domain (or use their test
   address to start), and copy an **API key**.
2. In Vercel → your project → **Settings → Environment Variables**, add:

   | Name             | Value                                   |
   |------------------|-----------------------------------------|
   | `RESEND_API_KEY` | your Resend API key                     |
   | `CONTACT_TO`     | the inbox for inquiries (e.g. Justin's) |
   | `CONTACT_FROM`   | `Alloy Homes <hello@yourdomain.com>` *(must be a verified domain; optional — defaults to Resend's test sender)* |

3. Redeploy. Inquiries now land in the inbox, with the sender's email set as
   reply-to.

(Prefer Formspree or another service instead? The form just POSTs JSON to
`/api/contact` — swap the logic in `app/api/contact/route.js`.)

## 5) Point the domain

In Vercel → project → **Settings → Domains**, add `alloy-homes.com` and
follow the DNS records Vercel shows (add them at the current registrar).

---

## Editing content — the quick version

- **Phone, email, service area, social links** → `data/site.js`
- **The homes** (names, specs, which photo) → `data/homes.js`
- **Testimonials** → `data/testimonials.js`
- **Colors, spacing, type** → CSS variables at the top of `app/globals.css`

## Before going live — checklist

- [ ] Confirm each home's **sq ft / beds / baths / garage** in `data/homes.js`
      (currently estimates) and the **city** (both set to Ivins) and **names**
- [ ] Add Justin's portrait at `public/images/about/justin.jpg`
- [ ] Replace placeholder testimonials in `data/testimonials.js`
- [ ] Set real Instagram/Facebook URLs in `data/site.js` (or remove them)
- [ ] Confirm the inquiry email address (`CONTACT_TO`) + add `RESEND_API_KEY`
- [ ] (Optional) delete `hero-alt-1.mp4` / `hero-alt-2.mp4`, or swap one in
- [ ] (Optional) add a `favicon.ico` / `app/icon.png`

---

Design note: the identity is "Bronze & Basalt" — a dark, gallery-style base
that makes the home photography glow, with warm bronze metal accents (a nod
to *alloy*) and a recurring "seam" divider (the weld line where an alloy
fuses). Type is Cormorant Garamond (display), Hanken Grotesk (text), and
JetBrains Mono (specs/labels).
