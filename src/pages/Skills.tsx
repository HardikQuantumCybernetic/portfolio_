import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import PageTransition from "@/components/PageTransition";

const Skills = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <SkillsSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Skills;