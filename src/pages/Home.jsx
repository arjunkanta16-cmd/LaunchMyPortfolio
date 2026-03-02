import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import ProblemSolution from "../sections/ProblemSolution";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Process from "../sections/Process";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}