import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import WhyWebsite from "./components/WhyWebsite";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyWebsite />
        <Services />
        <WhyChooseMe />
        <Portfolio />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
