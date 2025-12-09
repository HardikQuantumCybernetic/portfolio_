import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;