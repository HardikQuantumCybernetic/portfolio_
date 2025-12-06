import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Monitor, X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProjectsSection = () => {
  const [expandedPreview, setExpandedPreview] = useState<string | null>(null);

  const projects = [
    {
      title: "hardik-dental",
      shortDesc: "Dental clinic management web app — appointments, patient records, basic billing.",
      tech: ["React", "Tailwind", "Node/Express", "MySQL"],
      github: "https://github.com/HardikQuantumCybernetic/hardik-dental",
      liveUrl: "https://hardik-dental.lovable.app",
      caseStudy: {
        problem: "Streamline clinic workflows and reduce administrative overhead",
        solution: "Built an appointment scheduler, patient database, and role-based access control",
        result: "Estimated 30–50% time saved per admin task",
      },
    },
    {
      title: "kuber",
      shortDesc: "Kubernetes tooling / orchestration helper with scripts and utilities to manage deployments.",
      tech: ["Python", "Bash", "Docker", "kubectl"],
      github: "https://github.com/HardikQuantumCybernetic/kuber",
      liveUrl: "https://kuber-demo.lovable.app",
      caseStudy: {
        problem: "Simplify complex Kubernetes deployment workflows",
        solution: "Created CLI utilities and reusable templates",
        result: "Reduced deployment steps significantly",
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
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
