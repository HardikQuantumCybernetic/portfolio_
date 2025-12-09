import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { HeroSkeleton } from "@/components/SkeletonLoader";
import { GlowingOrb } from "@/components/MagneticCursor";

const Scene3DHome = lazy(() => import("@/components/Scene3DHome"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <GlowingOrb />
      <Suspense fallback={null}>
        <Scene3DHome />
      </Suspense>
      <Navbar />
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Index;