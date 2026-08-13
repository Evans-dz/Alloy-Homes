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
    title: home.name,
    description: home.blurb,
    openGraph: {
      title: `${home.name} · Alloy Homes`,
      description: home.blurb,
      images: [home.cover],
    },
  };
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
          {home.location ? (
            <p className="eyebrow eyebrow--light">{home.location}</p>
          ) : null}
          <h1 className="detail__title">{home.name}</h1>
        </div>
      </div>

      <div className="section section--dark">
        <div className="container detail__intro">
          <Reveal className="detail__lead">
            <p>{home.blurb}</p>
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
