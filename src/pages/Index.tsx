import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <main className="min-h-screen bg-background relative">
        <Navbar />
        <HeroSection />
        <Footer />
      </main>
    </motion.div>
  );
};

export default Index;