import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Database, Globe, Palette, Server, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveCard from "@/components/InteractiveCard";

const HireMe = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom responsive websites tailored to your needs",
    },
    {
      icon: Palette,
      title: "Advertisement Websites",
      description: "Eye-catching landing pages and promotional sites",
    },
    {
      icon: Database,
      title: "Database Integration",
      description: "Full database support for dynamic web applications",
    },
    {
      icon: Server,
      title: "Any Type of Website",
      description: "E-commerce, portfolios, blogs, dashboards, and more",
    },
  ];

  const features = [
    "Responsive design for all devices",
    "Modern UI/UX design",
    "SEO optimized",
    "Fast loading speed",
    "Database integration available",
    "Ongoing support available",
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918080950921", "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hardikjadhav307@gmail.com?subject=Website%20Development%20Inquiry&body=Hi%20Hardik,%0A%0AI'm%20interested%20in%20your%20web%20development%20services.%0A%0APlease%20let%20me%20know%20more%20details.%0A%0AThanks!";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4">
              Let Me Build Your <span className="text-gradient">Website</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
              Professional web development services at affordable prices. From simple landing pages to complex web applications.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto mb-16 animate-fade-up delay-100">
            <InteractiveCard>
              <div className="relative p-8 rounded-2xl card-gradient border border-primary/50 glow-box">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Simple Pricing
                </div>
                
                <div className="text-center pt-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-heading font-bold text-primary">$5</span>
                    <span className="text-muted-foreground">USD</span>
                  </div>
                  <p className="text-foreground font-medium mt-2">per page</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hosting charges are separate
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    size="lg"
                    className="w-full gap-2 accent-gradient text-primary-foreground hover:opacity-90 glow-box"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact via WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={handleEmailClick}
                  >
                    <Mail className="w-5 h-5" />
                    Contact via Email
                  </Button>
                </div>
              </div>
            </InteractiveCard>
          </div>

          {/* Services Grid */}
          <div className="mb-16 animate-fade-up delay-200">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">
              What I Can <span className="text-gradient">Build</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <InteractiveCard key={index}>
                  <div className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 h-full">
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up delay-300">
            <p className="text-muted-foreground mb-6">
              Have questions? Check out my work first!
            </p>
            <Button
              variant="outline"
              className="gap-2 border-border hover:border-primary hover:text-primary"
              asChild
            >
              <Link to="/projects">
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HireMe;
