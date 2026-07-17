import { pillars } from "../data/site";
import Reveal from "./Reveal";

// The thesis: connect the name "Alloy" to the way the homes are built.
export default function Intro() {
  return (
    <section className="section section--intro" id="intro">
      <div className="container">
        <Reveal className="intro__thesis">
          <p className="eyebrow">What an alloy is</p>
          <h2 className="intro__statement">
            Refined materials, fused to be{" "}
            <em>stronger</em> and last <em>longer.</em>
          </h2>
          <p className="intro__body">
            That's an alloy — and it's how we build. As a true custom
            design-build company in Southern Utah, Alloy Homes brings the
            planning, craftsmanship, and finish work together under one
            accountable team. The result is a home that's unmistakably yours,
            engineered to endure the desert and the decades.
          </p>
        </Reveal>

        <div className="pillars">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} className="pillar" delay={i * 90}>
              <span className="pillar__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pillar__title">{pillar.title}</h3>
              <p className="pillar__body">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
