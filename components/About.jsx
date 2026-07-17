import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

const credentials = [
  "St. George, UT",
  "15+ Years Building",
  "USU · BBA",
  "Weber State · Construction Mgmt",
];

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
            Justin grew up in Cache Valley with an early love of building. He
            studied business at Utah State and construction management at Weber
            State, and has spent more than fifteen years in the industry —
            always searching for new ways to become a better builder.
          </p>
          <p className="about__body">
            He believes in giving you the highest-quality home alongside an
            open, positive experience. Attention to detail and honest
            communication about your needs matter to him, so the process feels
            calm and stress-free — and you get to enjoy building your dream home.
          </p>

          <ul className="chips">
            {credentials.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn--primary">
            Work with Justin
          </a>
        </Reveal>
      </div>
    </section>
  );
}
