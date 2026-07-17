import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Collection from "../components/Collection";
import Process from "../components/Process";
import About from "../components/About";
import Assurances from "../components/Assurances";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Seam from "../components/Seam";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Seam label="Our homes" />
      <Collection />
      <Process />
      <Seam label="About" />
      <About />
      <Assurances />
      <Testimonials />
      <Contact />
    </>
  );
}
