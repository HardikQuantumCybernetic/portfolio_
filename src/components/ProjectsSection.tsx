import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "hardik-dental",
      shortDesc: "Dental clinic management web app — appointments, patient records, basic billing.",
      tech: ["React", "Tailwind", "Node/Express", "MySQL"],
      github: "https://github.com/HardikQuantumCybernetic/hardik-dental",
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
                        animate-fade-up delay-${(index + 1) * 100}`}
            >
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

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
