import { homes } from "../data/homes";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

function Showcase({ home, index }) {
  return (
    <Reveal className={`showcase ${index % 2 === 1 ? "showcase--flip" : ""}`} as="article">
      <a href={`/homes/${home.slug}`} className="showcase__media" aria-label={`View ${home.name}`}>
        <SmartImage src={home.cover} alt={home.name} label={home.name} className="showcase__img" />
        <span className="showcase__overlay" aria-hidden="true">
          <span className="showcase__overlay-label">
            View this home <span aria-hidden="true">&rarr;</span>
          </span>
        </span>
      </a>
      <div className="showcase__body">
        <p className="showcase__index">
          {String(index + 1).padStart(2, "0")} — {home.location}
        </p>
        <h3 className="showcase__name">{home.name}</h3>
        <p className="showcase__blurb">{home.blurb}</p>
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
            No two Alloy homes are the same. Explore a collection of custom
            homes, each thoughtfully designed for the people who call it home.
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
