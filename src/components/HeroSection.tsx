import { ArrowRight, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import hardikImage from "@/assets/hardik.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Sangli, Maharashtra — Available Worldwide
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Hi — I'm{" "}
                <span className="text-gradient">Hardik</span>
                <span className="text-primary">.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-muted-foreground">
                Web Developer & Cybertechnology Enthusiast
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I design secure, efficient web apps and system tools. Available for 
              international freelance contracts and remote collaboration.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gap-2 accent-gradient text-primary-foreground hover:opacity-90 glow-box"
                asChild
              >
                <a href="#contact">
                  Hire Me
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-border hover:border-primary hover:text-primary"
                asChild
              >
                <a href="#projects">See Projects</a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 text-muted-foreground hover:text-primary"
              >
                <Download className="w-4 h-4" />
                Download Résumé
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-heading font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right delay-200">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-box animate-float">
                <img
                  src={hardikImage}
                  alt="Hardik Jadhav"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary animate-glow-pulse" />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-primary/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
