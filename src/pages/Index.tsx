import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
