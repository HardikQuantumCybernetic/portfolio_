import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      level: "Advanced",
      color: "text-primary",
      skills: ["JavaScript", "HTML5", "CSS3", "React"],
    },
    {
      level: "Intermediate",
      color: "text-foreground",
      skills: ["Python", "C", "C++"],
    },
    {
      level: "Learning",
      color: "text-muted-foreground",
      skills: ["Rust", "Cloud & DevOps"],
    },
  ];

  const tools = [
    "SQL",
    "MySQL",
    "SQLite",
    "Git",
    "GitHub",
    "VS Code",
    "TailwindCSS",
    "Node.js",
  ];

  const services = [
    {
      title: "Web Application Development",
      description: "Full-stack frontend and backend solutions",
    },
    {
      title: "Secure Web Apps & Hardening",
      description: "OWASP-aware security implementations",
    },
    {
      title: "Performance Optimization",
      description: "Code audits and speed improvements",
    },
    {
      title: "Technical Consulting",
      description: "Architecture, deployment, DevOps basics",
    },
  ];

  return (
    <section id="skills" className="py-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="section-title mt-2">
            Skills & <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div className="space-y-10 animate-fade-up delay-100">
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              Technical Skills
            </h3>

            {skillCategories.map((category) => (
              <div key={category.level} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${category.level === 'Advanced' ? 'bg-primary' : category.level === 'Intermediate' ? 'bg-foreground' : 'bg-muted-foreground'}`} />
                  <span className={`font-medium ${category.color}`}>
                    {category.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Tools */}
            <div className="space-y-4 pt-6 border-t border-border">
              <span className="font-medium text-muted-foreground">
                Databases & Tools
              </span>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-muted-foreground border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 animate-fade-up delay-200">
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              What I Offer
            </h3>

            <div className="grid gap-4">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 
                           transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg accent-gradient flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
