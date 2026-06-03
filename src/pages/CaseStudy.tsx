import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getCaseStudy } from "@/data/caseStudies";
import NotFound from "./NotFound";

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? getCaseStudy(slug) : undefined;
  if (!cs) return <NotFound />;

  return (
    <PageTransition>
      <SEO
        title={`${cs.title} — Case Study | Hardik Jadhav`}
        description={cs.tagline}
        path={`/case-study/${slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: cs.title,
          description: cs.tagline,
          author: { "@type": "Person", name: "Hardik Jadhav" },
          keywords: cs.stack.join(", "),
        }}
      />
      <div className="min-h-screen bg-background relative z-10">
        <Navbar />
        <article className="container mx-auto px-6 pt-28 pb-20 max-w-4xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <span className="text-primary text-xs tracking-wider uppercase">
              Case Study
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2">
              <span className="text-gradient">{cs.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4">{cs.tagline}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild className="gap-2">
                <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> Live demo
                </a>
              </Button>
              {cs.github && (
                <Button asChild variant="outline" className="gap-2">
                  <a href={cs.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </Button>
              )}
            </div>
          </motion.header>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Role", value: cs.role },
              { label: "Duration", value: cs.duration },
              { label: "Stack", value: cs.stack.length + " technologies" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border p-4 card-gradient"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
                <div className="text-foreground font-medium mt-1">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {cs.stack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>

          <section className="space-y-8">
            {[
              { heading: "Problem", body: cs.problem },
              { heading: "Solution", body: cs.solution },
              { heading: "Result", body: cs.result },
              ...cs.sections,
            ].map((s, i) => (
              <motion.div
                key={s.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {s.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </section>

          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            {cs.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-primary/30 p-5 text-center card-gradient glow-box"
              >
                <div className="text-2xl font-heading font-bold text-primary">
                  {h.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </article>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CaseStudyPage;
