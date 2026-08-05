import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import ServicesEcosystem from "../components/ServicesEcosystem";
import AISearchSection from "../components/AISearchSection";
import WhyThrust from "../components/WhyThrust";
import ProcessTimeline from "../components/ProcessTimeline";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollManager from "../components/ScrollManager";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollManager />
        <Hero />
        <ProblemSection />
        <ServicesEcosystem />
        <AISearchSection />
        <WhyThrust />
        <ProcessTimeline />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
