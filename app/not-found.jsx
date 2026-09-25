import { site } from "../data/site";
import { homes } from "../data/homes";

export const metadata = {
  title: "Page not found",
};

// Rendered for any unknown URL, and for /homes/<slug> when the slug isn't in
// data/homes.js. Next serves it with a real 404 status and adds the noindex
// tag itself.
export default function NotFound() {
  return (
    <section className="page-hero notfound">
      <div className="container">
        <p className="eyebrow eyebrow--light">404 · Page not found</p>
        <h1 className="page-hero__title">We couldn't find that page.</h1>
        <p className="page-hero__lead">
          The link may be out of date, or the page may have moved. Everything on
          the site is one click from here, or call and talk to Justin directly.
        </p>
        <div className="hero__cta">
          <a href="/" className="btn btn--primary">
            Back to home
          </a>
          <a href={site.phoneHref} className="btn btn--ghost">
            Call {site.phone}
          </a>
        </div>

        <nav className="notfound__nav" aria-label="Popular pages">
          <p className="notfound__label">Or go to</p>
          <ul className="notfound__links">
            <li>
              <a href="/#homes">Our homes</a>
            </li>
            {homes.map((home) => (
              <li key={home.slug}>
                <a href={`/homes/${home.slug}`}>{home.name}</a>
              </li>
            ))}
            <li>
              <a href="/#process">How we build</a>
            </li>
            <li>
              <a href="/#about">About Justin</a>
            </li>
            <li>
              <a href="/#contact">Start your build</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
