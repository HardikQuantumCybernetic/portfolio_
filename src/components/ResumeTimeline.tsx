import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Award, Briefcase, Sparkles } from "lucide-react";

const events = [
  {
    year: "2022",
    title: "Diploma in Computer Engineering",
    place: "Sangli, Maharashtra",
    desc: "Started formal training in computer science fundamentals, programming, and networks.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "First Web Projects & Open Source",
    place: "Self-taught · React, Node",
    desc: "Built early projects (Kuber, hardik-dental) and contributed to open-source repos on GitHub.",
    icon: Code,
  },
  {
    year: "2024",
    title: "Research Paper Published",
    place: "IJRAR International Journal",
    desc: "Co-authored a paper on Ethical Hacking, Attack Vectors & Web Penetration Testing.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Freelance Web Developer",
    place: "Remote · Worldwide clients",
    desc: "Started taking international freelance contracts — full-stack apps, dashboards, landing pages.",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Built DocReader",
    place: "Open-source · Privacy-first",
    desc: "Shipped a fully client-side document reader with TTS, OCR, EPUB navigation, and WAV export.",
    icon: Sparkles,
  },
  {
    year: "2026",
    title: "Founder, Cybernetic Tech Solution",
    place: "Sangli, Maharashtra · India",
    desc: "Founded a tech internship & career-training company. Building the next generation of engineers.",
    icon: Rocket,
  },
];

const ResumeTimeline = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              The Journey
            </span>
            <h2 className="section-title mt-2">
              From <span className="text-gradient">Diploma</span> to{" "}
              <span className="text-gradient">Founder</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              A timeline of milestones, projects, and turning points.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {events.map((e, i) => {
                const isLeft = i % 2 === 0;
                const Icon = e.icon;
                return (
                  <motion.div
                    key={e.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Icon node */}
                    <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center glow-box">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 md:max-w-[calc(50%-3rem)] ${
                        isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/30 mb-3">
                          {e.year}
                        </span>
                        <h3 className="text-lg font-heading font-bold text-foreground">
                          {e.title}
                        </h3>
                        <p className="text-xs text-primary/80 mt-1 font-medium">
                          {e.place}
                        </p>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          {e.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeTimeline;
