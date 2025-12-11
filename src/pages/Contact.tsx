import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;