import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactSkeleton } from "@/components/SkeletonLoader";

const ContactSection = lazy(() => import("@/components/ContactSection"));

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Suspense fallback={<ContactSkeleton />}>
          <ContactSection />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
