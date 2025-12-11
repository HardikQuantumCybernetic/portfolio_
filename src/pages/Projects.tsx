import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <ProjectsSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Projects;