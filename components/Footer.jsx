import { site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="wordmark wordmark--footer" aria-label="Alloy Homes — home">
            <span className="wordmark__mark" aria-hidden="true">
              A
            </span>
            <span className="wordmark__text">
              ALLOY <span className="wordmark__thin">HOMES</span>
            </span>
          </a>
          <p className="footer__tagline">{site.tagline}</p>
          <a href={site.phoneHref} className="footer__phone">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="footer__email">
            {site.email}
          </a>
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
          <ul className="footer__list">
            {site.serviceArea.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Follow</h4>
          <ul className="footer__list">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>
            © {year} {site.legalName}
          </span>
          <span className="footer__built">Custom homes · {site.city}</span>
        </div>
      </div>
    </footer>
  );
}
