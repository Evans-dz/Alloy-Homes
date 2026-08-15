"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/testimonials";
import Reveal from "./Reveal";

function Testimonial({ t, index }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const quoteRef = useRef(null);

  // Only the quotes that actually get cut off should offer a toggle, so
  // measure the clamped height rather than assuming every quote is long.
  // Skipped while expanded — the clamp is off then, and re-measuring would
  // report "fits" and pull the control out from under the reader.
  useEffect(() => {
    if (expanded) return;
    const el = quoteRef.current;
    if (!el) return;
    const check = () => setOverflows(el.scrollHeight > el.clientHeight + 4);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [expanded]);

  const paragraphs = t.quote.split("\n\n");

  return (
    <Reveal
      className={`testimonial ${expanded ? "testimonial--open" : ""}`}
      as="figure"
      delay={index * 90}
    >
      <blockquote
        ref={quoteRef}
        className={`testimonial__quote ${expanded ? "" : "testimonial__quote--clamped"}`}
      >
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>

      {overflows ? (
        <button
          type="button"
          className="testimonial__more"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
          <span aria-hidden="true" className="testimonial__more-arrow">
            {expanded ? "↑" : "↓"}
          </span>
        </button>
      ) : null}

      {t.name ? (
        <figcaption className="testimonial__by">
          <span className="testimonial__name">{t.name}</span>
          {t.location ? (
            <span className="testimonial__loc">{t.location}</span>
          ) : null}
        </figcaption>
      ) : null}
    </Reveal>
  );
}

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
            <Testimonial key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
