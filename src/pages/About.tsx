import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ResumeTimeline from "@/components/ResumeTimeline";
import Testimonials from "@/components/Testimonials";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <AboutSection />
          <ResumeTimeline />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;