import { site } from "../data/site";
import { AlloyLogo } from "./AlloyLogo";
import MemberLogo from "./MemberLogo";

// Inline so the icons carry the brand colour and need no extra request.
const ICONS = {
  Instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  Facebook:
    "M9 8H6v4h3v12h5V12h3.64l.36-4h-4V6.33c0-.95.19-1.33 1.11-1.33H18V0h-3.81C10.6 0 9 1.58 9 4.62V8z",
};

function SocialIcon({ name }) {
  const path = ICONS[name];
  if (!path) return null;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={path} fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="wordmark wordmark--footer" aria-label="Alloy Homes — home">
            <AlloyLogo className="wordmark__logo" />
          </a>
          <p className="footer__tagline">{site.tagline}</p>
          <a href={site.phoneHref} className="footer__phone">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="footer__email">
            {site.email}
          </a>
          {/* Socials live with the brand rather than in their own column —
              two buttons never filled one. */}
          <ul className="socials">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="social"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Alloy Homes on ${s.label}`}
                >
                  <SocialIcon name={s.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__heading">Service area</h4>
          <ul className="footer__list footer__list--areas">
            {site.serviceArea.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </div>
      </div>
      {site.memberships && site.memberships.length ? (
        <div className="footer__memberships">
          <div className="container memberships">
            <p className="memberships__label">Member of</p>
            <ul className="memberships__list">
              {site.memberships.map((m) => (
                <MemberLogo key={m.short} {...m} />
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>
            © {year} {site.legalName}
          </span>
          <span className="footer__built">Custom homes · {site.city}</span>
          <span className="footer__credit">
            Designed &amp; built by{" "}
            <a href={site.credit.href} target="_blank" rel="noreferrer">
              {site.credit.label}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
