import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AboutSkeleton } from "@/components/SkeletonLoader";

const AboutSection = lazy(() => import("@/components/AboutSection"));

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Suspense fallback={<AboutSkeleton />}>
          <AboutSection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default About;
