import { MapPin, Globe, Languages, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import devopsCert from "@/assets/certificates/devops-certificate.jpg";
import fullstackCert from "@/assets/certificates/fullstack-certificate.jpg";
import aiCert from "@/assets/certificates/ai-certificate.jpg";
import researchCert from "@/assets/certificates/research-paper-certificate.jpg";
import gitCert from "@/assets/certificates/git-certificate.jpg";
import generativeAiCert from "@/assets/certificates/generative-ai-certificate.jpg";

const AboutSection = () => {
  const keyFacts = [
    {
      icon: MapPin,
      title: "Location",
      value: "Sangli, Maharashtra, India — Remote worldwide",
    },
    {
      icon: Globe,
      title: "Availability",
      value: "Freelance, contract, or full-time remote",
    },
    {
      icon: Languages,
      title: "Languages",
      value: "English, Hindi, Marathi",
    },
  ];

  const achievements = [
    {
      title: "DevOps - Skill Up",
      issuer: "GeeksforGeeks",
      image: devopsCert,
      category: "DevOps",
    },
    {
      title: "Full Stack Web Development - Skill Up",
      issuer: "GeeksforGeeks",
      image: fullstackCert,
      category: "Web Development",
    },
    {
      title: "AI Tools Skill Up",
      issuer: "GeeksforGeeks",
      image: aiCert,
      category: "Artificial Intelligence",
    },
    {
      title: "Git - Skill Up",
      issuer: "GeeksforGeeks",
      image: gitCert,
      category: "Version Control",
    },
    {
      title: "Generative AI Revolution Workshop",
      issuer: "AspireForHer",
      description: "Unleashing Innovation: The Generative AI Revolution - Workshop hosted by industry leaders",
      image: generativeAiCert,
      category: "Artificial Intelligence",
    },
    {
      title: "Research Paper Publication",
      issuer: "IJRAR - International Journal",
      description: "A Brief Overview on Ethical Hacking, its Attacks and Hardware Tools with Web Penetration Testing",
      image: researchCert,
      category: "Research",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="section-title mt-2">
              Building the <span className="text-gradient">Future</span> of Web
            </h2>
          </motion.div>

          {/* About Content */}
          <div className="space-y-8 animate-fade-up delay-100">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Born on 30/07/2006 in Sangli, Maharashtra, I build robust web applications 
              and system-level tools with a strong focus on security and performance. 
              I work across stacks and industries — startups, SaaS, healthcare, and 
              security teams — delivering reliable, maintainable solutions.
            </p>

            {/* Multilingual Quotes */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-xl card-gradient border border-border">
                <span className="text-xs text-primary font-medium tracking-wider uppercase">
                  हिंदी
                </span>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  मैं 30/07/2006 को सांगली, महाराष्ट्र में जन्मा। मैं सुरक्षा और प्रदर्शन 
                  पर केन्द्रित मजबूत वेब एप्लिकेशन और सिस्टम टूल बनाता हूँ।
                </p>
              </div>
              <div className="p-6 rounded-xl card-gradient border border-border">
                <span className="text-xs text-primary font-medium tracking-wider uppercase">
                  मराठी
                </span>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  मी 30/07/2006 रोजी सांगली, महाराष्ट्र मध्ये जन्मलो. मी सुरक्षा आणि 
                  कामगिरीवर भर देऊन मजबूत वेब अॅप्स व सिस्टम टूल्स तयार करतो.
                </p>
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-up delay-200">
            {keyFacts.map((fact) => (
              <div
                key={fact.title}
                className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <fact.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-foreground font-medium mb-1">{fact.title}</h3>
                <p className="text-sm text-muted-foreground">{fact.value}</p>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-20 animate-fade-up delay-300">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm tracking-wider uppercase">
                  Achievements
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Certifications & <span className="text-gradient">Publications</span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <Dialog key={achievement.title}>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer rounded-xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:glow-box">
                      {/* Certificate Preview */}
                      <div className="relative h-40 overflow-hidden bg-secondary/50">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                            {achievement.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60">
                          <ExternalLink className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Certificate Info */}
                      <div className="p-4">
                        <h4 className="font-medium text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {achievement.issuer}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden">
                    <DialogHeader className="px-6 py-4 border-b border-border bg-background/50">
                      <DialogTitle className="text-lg font-heading">
                        {achievement.title}
                      </DialogTitle>
                      <p className="text-sm text-muted-foreground">
                        {achievement.issuer}
                        {achievement.description && (
                          <span className="block mt-1 text-xs italic">
                            {achievement.description}
                          </span>
                        )}
                      </p>
                    </DialogHeader>
                    <div className="p-4 bg-secondary/20 max-h-[70vh] overflow-auto">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
