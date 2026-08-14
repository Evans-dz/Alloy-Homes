import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section section--dark section--about" id="about">
      <div className="container about">
        <Reveal className="about__portrait">
          <SmartImage
            src="/images/about/justin.jpg"
            alt="Justin Gish, founder of Alloy Homes"
            label="Justin Gish"
            className="about__img"
          />
        </Reveal>

        <Reveal className="about__text" delay={80}>
          <p className="eyebrow eyebrow--light">The builder behind Alloy</p>
          <h2 className="section__title section__title--light">Meet Justin Gish.</h2>
          <p className="about__body">
            With more than 20 years in construction, Justin has been involved in
            just about every part of the building process along the way. Much of
            what he brings to Alloy today comes from years of hands-on
            experience building homes, solving problems, and working through the
            details that come with each project.
          </p>
          <p className="about__body">
            As the owner and builder behind Alloy Homes, Justin stays personally
            involved in every project. From early planning and budgeting through
            construction and move-in, he works alongside clients, architects,
            designers, engineers, and trades to keep every detail moving in the
            right direction.
          </p>
          <p className="about__body">
            That hands-on approach allows Alloy to remain selective about the
            homes we build and give each one the attention it deserves. The goal
            is simple: build exceptional homes, communicate clearly, and stand
            behind our work for years to come.
          </p>

          <a href="#contact" className="btn btn--primary">
            Work with Justin
          </a>
        </Reveal>
      </div>
    </section>
  );
}
