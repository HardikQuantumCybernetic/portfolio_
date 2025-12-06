import { useState } from "react";
import { Mail, Linkedin, Github, Phone, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll respond within 24–48 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "hardikjadhav307@gmail.com",
      href: "mailto:hardikjadhav307@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+91 80809 50921",
      href: "https://wa.me/918080950921",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Hardik Jadhav",
      href: "https://www.linkedin.com/in/hardik-jadhav-500b48301/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "HardikQuantumCybernetic",
      href: "https://github.com/HardikQuantumCybernetic",
    },
  ];

  return (
    <section id="contact" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="section-title mt-2">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Looking to build something together? Tell me about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up delay-100">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Sangli, Maharashtra, India — Available worldwide</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 
                           transition-all duration-300"
                >
                  <link.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {link.label}
                  </div>
                  <div className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                    {link.value}
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground font-medium">
                  Currently available for new projects
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Freelance, contract, or full-time remote opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up delay-200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Name *
                </label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Company <span className="text-muted-foreground">(optional)</span>
              </label>
              <Input
                placeholder="Your company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="bg-secondary border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Message *
              </label>
              <Textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-secondary border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 accent-gradient text-primary-foreground hover:opacity-90 glow-box"
            >
              Send Message
              <Send className="w-4 h-4" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              I'll respond within 24–48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
