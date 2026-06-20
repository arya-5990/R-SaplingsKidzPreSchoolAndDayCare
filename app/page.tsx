import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import JourneySection from "@/components/JourneySection";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
  <Navbar />

  <Hero />

  <JourneySection />

  <Philosophy />

  <Testimonials />

  <Footer />
</>
  );
}