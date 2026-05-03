import { ExternalLink, Github, Monitor, Maximize2, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const screenshotUrl = (url: string) =>
  `https://image.thum.io/get/width/800/crop/500/noanimate/${url}`;

const caseStudySlugs: Record<string, string> = {
  "hardik-dental": "hardik-dental",
  "portfolio": "portfolio",
  "Cybernetic Tech Solution": "cybernetic-tech-solution",
};

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const projects: Array<{
    title: string;
    shortDesc: string;
    tech: string[];
    github?: string;
    liveUrl: string;
    caseStudy: { problem: string; solution: string; result: string };
  }> = [
    {
      title: "hardik-dental",
      shortDesc: "Dental clinic management web app — appointments, patient records, basic billing.",
      tech: ["React", "Tailwind", "Node/Express", "MySQL"],
      github: "https://github.com/HardikQuantumCybernetic/hardik-dental",
      liveUrl: "https://secondlasttry-gray.vercel.app/",
      caseStudy: {
        problem: "Streamline clinic workflows and reduce administrative overhead",
        solution: "Built an appointment scheduler, patient database, and role-based access control",
        result: "Estimated 30–50% time saved per admin task",
      },
    },
    {
      title: "kuber",
      shortDesc: "Pure vegetarian restaurant website with menu and online ordering features.",
      tech: ["React", "Tailwind", "JavaScript"],
      github: "https://github.com/HardikQuantumCybernetic/kuber",
      liveUrl: "https://kuberpureveg.netlify.app/",
      caseStudy: {
        problem: "Create an attractive online presence for a vegetarian restaurant",
        solution: "Designed a modern, responsive website with menu showcase",
        result: "Increased online visibility and customer engagement",
      },
    },
    {
      title: "portfolio",
      shortDesc: "Personal portfolio website showcasing projects and skills with modern design.",
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      github: "https://github.com/HardikQuantumCybernetic/portfolio_",
      liveUrl: "https://hardik-s-digital-studio.vercel.app/",
      caseStudy: {
        problem: "Showcase skills and projects in a professional manner",
        solution: "Built a modern portfolio with live project previews and responsive design",
        result: "Professional online presence for freelance opportunities",
      },
    },
    {
      title: "DocReader",
      shortDesc: "Privacy-first, client-side document reader with TTS, word highlighting, WAV export, EPUB navigation, and OCR. Supports PDF, EPUB, DOCX, TXT & images — no data leaves your browser.",
      tech: ["React", "TypeScript", "PDF.js", "Tesseract.js", "Web Speech API"],
      github: "https://github.com/HardikQuantumCybernetic/vox-scroll-scribe",
      liveUrl: "https://vox-scroll-scribe.vercel.app/",
      caseStudy: {
        problem: "Users need a private, offline-capable way to read and listen to documents",
        solution: "Built a fully client-side reader with multi-format support, TTS with word-level highlighting, and WAV audio export",
        result: "100% privacy-preserving document reader with zero server dependency",
      },
    },
    {
      title: "Cybernetic Tech Solution",
      shortDesc: "Premium, sleek website for Cybernetic Tech Solution — a tech internship and career training company based in Sangli, Maharashtra. Multi-page responsive site with 3D scenes, contact form backed by Postgres + Resend email delivery, and a cybernetic / AWS-inspired dark aesthetic with neon accents.",
      tech: ["React 18", "Vite", "TypeScript", "Tailwind", "Three.js", "Lovable Cloud", "Resend"],
      liveUrl: "https://cybernetic-launchpad-ten.vercel.app",
      caseStudy: {
        problem: "Establish a premium online presence for a tech internship & career training company with a reliable lead-capture pipeline",
        solution: "Built a multi-page responsive website with interactive Three.js scenes, semantic SEO, and a contact form persisted in Postgres with email delivery via Resend through Supabase Edge Functions",
        result: "Fully production-ready company website live at cyberneticts.in with a working contact-to-inbox lead pipeline",
      },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="section-title mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group rounded-2xl card-gradient border border-border overflow-hidden 
                        hover:border-primary/50 transition-all duration-500 hover:glow-box
                        animate-fade-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Live Website Preview */}
              <div className="relative bg-secondary/50 border-b border-border">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-background/50 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 font-mono truncate max-w-[200px]">
                      {project.liveUrl}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="p-1.5 rounded hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors">
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl w-[95vw] h-[85vh] p-0 overflow-hidden">
                        <DialogHeader className="px-4 py-3 border-b border-border bg-background/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                              </div>
                              <DialogTitle className="text-sm font-mono text-muted-foreground">
                                {project.liveUrl}
                              </DialogTitle>
                            </div>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-primary hover:underline"
                            >
                              Open in new tab
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </DialogHeader>
                        <div className="flex-1 h-[calc(85vh-60px)]">
                          <iframe
                            src={project.liveUrl}
                            title={`${project.title} preview`}
                            className="w-full h-full border-0"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Iframe Preview */}
                <div className="relative h-48 overflow-hidden">
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} preview`}
                    className="w-full h-[400px] border-0 scale-[0.5] origin-top-left pointer-events-none"
                    style={{ width: "200%", height: "400px" }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card pointer-events-none" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Monitor className="w-4 h-4" />
                          View Live Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl w-[95vw] h-[85vh] p-0 overflow-hidden">
                        <DialogHeader className="px-4 py-3 border-b border-border bg-background/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                              </div>
                              <DialogTitle className="text-sm font-mono text-muted-foreground">
                                {project.liveUrl}
                              </DialogTitle>
                            </div>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-primary hover:underline"
                            >
                              Open in new tab
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </DialogHeader>
                        <div className="flex-1 h-[calc(85vh-60px)]">
                          <iframe
                            src={project.liveUrl}
                            title={`${project.title} preview`}
                            className="w-full h-full border-0"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              {/* Project Header */}
              <div className="p-8 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="p-8 mt-6 bg-secondary/30 border-t border-border">
                <h4 className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                  Case Study
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Problem
                    </span>
                    <p className="text-foreground text-sm mt-1">
                      {project.caseStudy.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Solution
                    </span>
                    <p className="text-foreground text-sm mt-1">
                      {project.caseStudy.solution}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Result
                    </span>
                    <p className="text-primary text-sm mt-1 font-medium">
                      {project.caseStudy.result}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
