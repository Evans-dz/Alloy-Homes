import { process } from "../data/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="section section--process" id="process">
      <div className="container">
        <Reveal className="section__head section__head--left">
          <p className="eyebrow">The Process</p>
          <h2 className="section__title">From vision to home.</h2>
          <p className="section__intro">
            One team. One clear process. From the first conversation through
            move-in and beyond, we guide every step so you always know what
            comes next.
          </p>
        </Reveal>

        <ol className="process">
          {process.map((stage, i) => (
            <Reveal key={stage.step} className="process__step" as="li" delay={i * 90}>
              <span className="process__num">{stage.step}</span>
              <div className="process__content">
                <h3 className="process__title">{stage.title}</h3>
                <p className="process__body">{stage.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
