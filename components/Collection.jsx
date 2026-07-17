import { homes } from "../data/homes";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

function Specs({ home }) {
  const items = [
    [home.sqft, "sq ft"],
    [home.beds, "beds"],
    [home.baths, "baths"],
    [home.garage, "garage"],
  ].filter(([v]) => v);
  if (!items.length) return null;
  return (
    <ul className="specs" aria-label="Home specifications">
      {items.map(([value, label]) => (
        <li key={label}>
          <span className="specs__num">{value}</span>
          <span className="specs__label">{label}</span>
        </li>
      ))}
    </ul>
  );
}

function Showcase({ home, index }) {
  return (
    <Reveal className={`showcase ${index % 2 === 1 ? "showcase--flip" : ""}`} as="article">
      <a href={`/homes/${home.slug}`} className="showcase__media" aria-label={`View ${home.name}`}>
        <SmartImage src={home.cover} alt={home.name} label={home.name} className="showcase__img" />
        <span className="showcase__style">{home.style}</span>
      </a>
      <div className="showcase__body">
        <p className="showcase__index">
          {String(index + 1).padStart(2, "0")} — {home.location}
        </p>
        <h3 className="showcase__name">{home.name}</h3>
        <p className="showcase__blurb">{home.blurb}</p>
        {home.features && home.features.length ? (
          <ul className="tags">
            {home.features.map((f) => (
              <li key={f} className="tag">
                {f}
              </li>
            ))}
          </ul>
        ) : null}
        <Specs home={home} />
        <a href={`/homes/${home.slug}`} className="showcase__link">
          View this home
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </Reveal>
  );
}

export default function Collection() {
  return (
    <section className="section section--dark section--homes" id="homes">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow eyebrow--light">The Collection</p>
          <h2 className="section__title section__title--light">Homes built one of one.</h2>
          <p className="section__intro">
            No two Alloy homes are the same. A closer look at recent custom work
            across Southern Utah — each one designed and built around the people
            who live there.
          </p>
        </Reveal>

        <div className="showcases">
          {homes.map((home, i) => (
            <Showcase key={home.slug} home={home} index={i} />
          ))}
        </div>

        <Reveal className="section__foot">
          <a href="#contact" className="btn btn--primary">
            Start your build
          </a>
        </Reveal>
      </div>
    </section>
  );
}
