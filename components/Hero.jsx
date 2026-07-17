import { site } from "../data/site";

// Full-bleed hero. Uses a still image of a finished Alloy home, with a
// basalt gradient scrim over it so the headline stays readable.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img
          className="hero__video"
          src="/images/hero/hero.jpg"
          alt=""
          fetchPriority="high"
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner">
        <p className="eyebrow eyebrow--light">
          Custom Home Builder · {site.city}
        </p>
        <h1 className="hero__title">
          Come home to
          <br />
          <em>luxury.</em>
        </h1>
        <p className="hero__lead">{site.positioning}</p>
        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary">
            Start your build
          </a>
          <a href="#homes" className="btn btn--ghost">
            View our homes
          </a>
        </div>
      </div>

      <a href="#intro" className="hero__scroll" aria-label="Scroll to content">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-word">Scroll</span>
      </a>
    </section>
  );
}
