import { site } from "../data/site";

// Full-bleed hero. Uses a background video when present, with a poster
// image fallback, and a basalt gradient underneath so the headline stays
// readable even if neither asset has been uploaded yet.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-poster.jpg"
        >
          <source src="/images/hero/hero.mp4" type="video/mp4" />
        </video>
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
