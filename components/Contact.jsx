import { site } from "../data/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container contact">
        <Reveal className="contact__intro">
          <p className="eyebrow">Start your build</p>
          <h2 className="section__title">Let's build your dream home together.</h2>
          <p className="contact__lead">
            Tell us a little about your project and Justin will reach out.
            Prefer to talk? Call anytime.
          </p>

          <div className="contact__details">
            <a href={site.phoneHref} className="contact__detail">
              <span className="contact__detail-label">Phone</span>
              <span className="contact__detail-value">{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="contact__detail">
              <span className="contact__detail-label">Email</span>
              <span className="contact__detail-value">{site.email}</span>
            </a>
            <div className="contact__detail">
              <span className="contact__detail-label">Where we build</span>
              <span className="contact__detail-value">{site.serviceArea.join(" · ")}</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact__form-wrap" delay={80}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
