import LegalPage from "../../components/LegalPage";
import { site } from "../../data/site";

export const metadata = {
  title: "Privacy policy",
  description:
    "What information the Alloy Homes website collects, why, and which services handle it for us. Plain language, no fine print.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", images: [site.shareImage] },
};

// Keep this in step with the site's real processors. If a service is added
// or removed (form handler, analytics, email host), update the list below.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      path="/privacy"
      updated="September 25, 2026"
      intro={`This page explains what information this website collects, why, and who handles it for us. It covers this website only. The site is run by ${site.legalName} ("Alloy Homes", "we").`}
    >
      <h2>The short version</h2>
      <ul>
        <li>
          We only receive personal details you choose to send us, through the
          inquiry form, by email, or by phone.
        </li>
        <li>
          We use those details to reply to you about your project. We don't
          sell them or share them for anyone else's marketing.
        </li>
        <li>
          We measure how the site is used with Vercel Web Analytics and Google
          Analytics. Google Analytics is the only thing on the site that sets
          cookies.
        </li>
      </ul>

      <h2>What you send us</h2>
      <p>
        When you use the inquiry form, we receive what you type: your name,
        email address, phone number, where you'd like to build, your timeline,
        and your message. Name and email are required. Everything else is
        optional. The form is sent over an encrypted (HTTPS) connection.
      </p>
      <p>
        We use this to reply, to talk with you about a possible build and to
        keep a record of the conversation. If you become a client, it becomes
        part of our project records.
      </p>

      <h2>Who handles it for us</h2>
      <p>We use a small number of services to run the site:</p>
      <ul>
        <li>
          <strong>Vercel</strong> hosts the website. Like any web host, its
          servers log basic request details (IP address, browser type, and the
          page requested) to deliver the site and keep it secure.
        </li>
        <li>
          <strong>Resend</strong> delivers each inquiry form submission to our
          inbox as an email. It handles the form contents only to send that
          email.
        </li>
        <li>
          <strong>Microsoft 365</strong> hosts our business email
          ({site.email}), where inquiries are received and kept.
        </li>
        <li>
          <strong>Vercel Web Analytics</strong> counts page views so we can see
          which pages people visit. It doesn't use cookies and doesn't identify
          individual visitors.
        </li>
        <li>
          <strong>Google Analytics</strong> tells us how people find and use
          the site: pages viewed, time on the site, the site that sent you
          here, device and browser type, and approximate location (city or
          region). We see this as totals and trends, not as named people.
        </li>
      </ul>
      <p>
        The site's fonts are served from our own website, so loading a page
        doesn't send a request to Google Fonts.
      </p>

      <h2>Cookies</h2>
      <p>
        Google Analytics sets two first-party cookies (named <code>_ga</code>{" "}
        and <code>_ga_</code> followed by an ID) that recognize a returning
        browser for up to two years. We don't use advertising cookies, and the
        site works fully with cookies blocked. You can block or clear cookies
        in your browser settings, or install Google's{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
          Analytics opt-out add-on
        </a>
        .
      </p>

      <h2>Links to other sites</h2>
      <p>
        Our Instagram and Facebook pages, the builder associations listed in
        the footer, and the agency that built this site are separate websites
        with their own privacy policies.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep inquiries for as long as we need them to respond to you and
        for our normal business records. Analytics data is kept under each
        provider's own retention settings.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask what information we have from you, ask us to correct it,
        or ask us to delete it. Email <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
        or call <a href={site.phoneHref}>{site.phone}</a> and we'll take care
        of it.
      </p>

      <h2>Children</h2>
      <p>
        This site is meant for adults planning a home. We don't knowingly
        collect information from children under 13.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change how we handle information, we'll update this page and the
        date at the top.
      </p>

      <h2>Contact</h2>
      <p>
        {site.legalName} · {site.city}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
        <a href={site.phoneHref}>{site.phone}</a>
      </p>
    </LegalPage>
  );
}
