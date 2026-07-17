import { testimonials } from "../data/testimonials";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section section--dark section--testimonials">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow eyebrow--light">In their words</p>
          <h2 className="section__title section__title--light">
            Families who built with us.
          </h2>
        </Reveal>

        <div className="testimonials">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} className="testimonial" as="figure" delay={i * 90}>
              <blockquote className="testimonial__quote">"{t.quote}"</blockquote>
              <figcaption className="testimonial__by">
                <span className="testimonial__name">{t.name}</span>
                <span className="testimonial__loc">{t.location}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
