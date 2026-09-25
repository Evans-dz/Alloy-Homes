import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Collection from "../components/Collection";
import Process from "../components/Process";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Seam from "../components/Seam";
import JsonLd, { businessSchema } from "../components/JsonLd";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <Hero />
      <Intro />
      <Seam label="Our homes" />
      <Collection />
      <Process />
      <Seam label="About" />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
