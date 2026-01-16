import AboutSection from "@/components/pages/Home/AboutSec/AboutSection";
import CTA from "@/components/pages/Home/CTA/CTA";
import Hero from "@/components/pages/Home/Hero/Hero";
import Services from "@/components/pages/Home/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <CTA />
    </>
  );
}
