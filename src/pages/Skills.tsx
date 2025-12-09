import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SkillsSkeleton } from "@/components/SkeletonLoader";

const SkillsSection = lazy(() => import("@/components/SkillsSection"));

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Suspense fallback={<SkillsSkeleton />}>
          <SkillsSection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
