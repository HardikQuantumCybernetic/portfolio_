import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectsSkeleton } from "@/components/SkeletonLoader";

const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsSection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
