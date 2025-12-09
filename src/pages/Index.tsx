import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { GlowingOrb } from "@/components/MagneticCursor";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <GlowingOrb />
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
};

export default Index;