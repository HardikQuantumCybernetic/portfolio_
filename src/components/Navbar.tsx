import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { generateResumePDF } from "@/utils/generateResume";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/hire-me", label: "Hire Me" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-heading font-bold text-foreground">
            Hardik<span className="text-primary">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className={`nav-link text-sm font-medium transition-colors ${isActive(link.href) ? "text-primary" : ""}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a href="https://github.com/HardikQuantumCybernetic" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/hardik-jadhav-500b48301/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <Button size="sm" className="gap-2 accent-gradient text-primary-foreground" onClick={generateResumePDF}>
              <FileText className="w-4 h-4" />
              Resume
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button className="text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className={`transition-colors ${isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <a href="https://github.com/HardikQuantumCybernetic" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/hardik-jadhav-500b48301/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin className="w-5 h-5" /></a>
                <Button size="sm" className="gap-2 accent-gradient text-primary-foreground" onClick={generateResumePDF}><FileText className="w-4 h-4" />Resume</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
