import { notFound } from "next/navigation";
import { homes, getHome } from "../../../data/homes";
import { site } from "../../../data/site";
import SmartImage from "../../../components/SmartImage";
import Gallery from "../../../components/Gallery";
import Reveal from "../../../components/Reveal";

export function generateStaticParams() {
  return homes.map((h) => ({ slug: h.slug }));
}

export function generateMetadata({ params }) {
  const home = getHome(params.slug);
  if (!home) return { title: "Home not found" };
  return {
    title: `${home.name} — ${home.style}`,
    description: home.blurb,
    openGraph: {
      title: `${home.name} · Alloy Homes`,
      description: home.blurb,
      images: [home.cover],
    },
  };
}

function Specs({ home }) {
  const items = [
    [home.sqft, "sq ft"],
    [home.beds, "beds"],
    [home.baths, "baths"],
    [home.garage, "garage"],
  ].filter(([v]) => v);
  if (!items.length) return null;
  return (
    <ul className="specs specs--lg" aria-label="Home specifications">
      {items.map(([value, label]) => (
        <li key={label}>
          <span className="specs__num">{value}</span>
          <span className="specs__label">{label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HomeDetail({ params }) {
  const home = getHome(params.slug);
  if (!home) notFound();

  return (
    <article className="detail">
      <div className="detail__hero">
        <SmartImage src={home.cover} alt={home.name} label={home.name} className="detail__hero-img" />
        <div className="detail__hero-scrim" />
        <div className="container detail__hero-inner">
          <a href="/#homes" className="detail__back">
            &larr; The Collection
          </a>
          <p className="eyebrow eyebrow--light">{home.style} · {home.location}</p>
          <h1 className="detail__title">{home.name}</h1>
        </div>
      </div>

      <div className="section section--dark">
        <div className="container detail__intro">
          <Reveal className="detail__lead">
            <p>{home.blurb}</p>
          </Reveal>
          <Reveal className="detail__meta" delay={80}>
            <Specs home={home} />
            {home.features && home.features.length ? (
              <ul className="tags">
                {home.features.map((f) => (
                  <li key={f} className="tag">
                    {f}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </div>

        <div className="container">
          <Gallery images={home.gallery || []} name={home.name} />
        </div>

        <div className="container detail__cta">
          <h2 className="section__title section__title--light">Want something like this?</h2>
          <p className="section__intro">
            Every Alloy home starts from a blank page. Tell us about yours.
          </p>
          <div className="detail__cta-actions">
            <a href="/#contact" className="btn btn--primary">
              Start your build
            </a>
            <a href={site.phoneHref} className="btn btn--ghost btn--light">
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
