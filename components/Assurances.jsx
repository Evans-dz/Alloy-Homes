import { assurances } from "../data/site";
import Reveal from "./Reveal";

export default function Assurances() {
  return (
    <section className="section section--assurances">
      <div className="container">
        <Reveal className="section__head section__head--left">
          <p className="eyebrow">Why Alloy</p>
          <h2 className="section__title">Built to be lived in for a long time.</h2>
        </Reveal>

        <div className="assurances">
          {assurances.map((item, i) => (
            <Reveal key={item.title} className="assurance" delay={i * 80}>
              <span className="assurance__rule" aria-hidden="true" />
              <h3 className="assurance__title">{item.title}</h3>
              <p className="assurance__body">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
