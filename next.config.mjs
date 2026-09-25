/** @type {import('next').NextConfig} */

// The previous WordPress site lived on alloy-homes.com. Apart from the privacy
// policy, none of its pages have a counterpart here (this is one page with
// anchors), so pointing that domain at Vercel and letting it redirect on its
// own would land every old URL on a 404, since Vercel preserves the path. Map
// the old routes by hand and sweep anything unlisted to the homepage.
//
// These only fire once alloy-homes.com is added to the Vercel project as a
// served domain (not a "Redirect to" domain) and its GoDaddy A/CNAME records
// point at Vercel. Leave that domain's MX and TXT records alone — it carries
// its own Microsoft 365 mailbox, separate from the one on alloy.homes.
//
// The old URLs all carried a trailing slash, so each takes two hops: Next
// strips the slash first, then these rules fire. Crawlers follow that fine.
const OLD_HOST = [{ type: "host", value: "(?:www\\.)?alloy-homes\\.com" }];
const NEW_SITE = "https://www.alloy.homes";

const OLD_ROUTES = {
  "/": "/",
  "/about": "/#about",
  "/services": "/#process",
  "/contact": "/#contact",
  "/blog": "/",
  "/blog-post-title": "/",
  "/privacy-policy": "/privacy",
};

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      ...Object.entries(OLD_ROUTES).map(([source, target]) => ({
        source,
        has: OLD_HOST,
        destination: `${NEW_SITE}${target}`,
        permanent: true,
      })),
      // Anything else on the old domain — stray indexed URLs, feeds, wp paths.
      {
        source: "/:path*",
        has: OLD_HOST,
        destination: NEW_SITE,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
