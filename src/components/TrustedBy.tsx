import { motion } from "framer-motion";
import { Briefcase, Code2, Stethoscope, GraduationCap, Sparkles, Shield } from "lucide-react";

const clients = [
  { name: "Cybernetic Tech Solution", icon: Shield },
  { name: "Hardik Dental", icon: Stethoscope },
  { name: "Kuber Pure Veg", icon: Briefcase },
  { name: "DocReader", icon: Code2 },
  { name: "GeeksforGeeks", icon: GraduationCap },
  { name: "IJRAR Journal", icon: Sparkles },
];

const TrustedBy = () => {
  return (
    <section className="relative z-10 py-12 border-y border-border/50 bg-background/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Trusted by clients & featured in
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
            >
              <c.icon className="w-5 h-5" />
              <span className="font-heading font-medium text-sm md:text-base whitespace-nowrap">
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
