import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background relative">
        <Navbar />
        <HeroSection />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;