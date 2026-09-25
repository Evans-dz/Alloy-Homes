import { site, pillars, process } from "../../data/site";
import { homes } from "../../data/homes";

// /llms.txt: a plain summary of the business for AI search tools
// (https://llmstxt.org). Built from the data files so it can't drift from
// the site; rendered once at build time.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.legalName} is a custom design-build home builder in St. George and Southern Utah, led by owner and builder Justin Gish. Design, planning, and craftsmanship sit under one accountable team.`,
    "",
    "## Contact",
    "",
    `- Phone: ${site.phone}`,
    `- Email: ${site.email}`,
    `- Website: ${site.url}/`,
    ...site.social.map((s) => `- ${s.label}: ${s.href}`),
    "",
    "## Where we build",
    "",
    `${site.serviceArea.join(", ")} (Utah).`,
    "",
    "## How we work",
    "",
    "Every Alloy home is custom and starts from a blank page. One team handles design, planning, and construction.",
    "",
    ...pillars.map((p) => `- ${p.title}: ${p.body}`),
    "",
    "## The process",
    "",
    ...process.map((s) => `${s.step}. ${s.title}: ${s.body}`),
    "",
    "## About",
    "",
    "Justin Gish has more than 20 years in construction and stays personally involved in every Alloy project, from planning and budgeting through construction and move-in.",
    `Member of: ${site.memberships.map((m) => m.name).join("; ")}.`,
    "",
    "## Pages",
    "",
    `- [Home](${site.url}/): who we are, our homes, the build process, client reviews, and the inquiry form`,
    ...homes.map(
      (h) => `- [${h.name}](${site.url}/homes/${h.slug})${h.location ? ` (${h.location})` : ""}: ${h.blurb}`
    ),
    `- [Privacy policy](${site.url}/privacy)`,
    `- [Terms of use](${site.url}/terms)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
