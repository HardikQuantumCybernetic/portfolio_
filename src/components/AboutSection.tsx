import { MapPin, Globe, Languages } from "lucide-react";

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

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="section-title mt-2">
              Building the <span className="text-gradient">Future</span> of Web
            </h2>
          </div>

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
            {keyFacts.map((fact, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
