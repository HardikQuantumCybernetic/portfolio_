import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  return (
    <PageTransition>
      <SEO
        title="Blog — Hardik Jadhav | Notes on web dev & cybertech"
        description="Articles by Hardik Jadhav on React, full-stack development, cybersecurity, and founding Cybernetic Tech Solution."
        path="/blog"
      />
      <div className="min-h-screen bg-background relative z-10">
        <Navbar />
        <main className="container mx-auto px-6 pt-28 pb-20 max-w-4xl">
          <div className="mb-12">
            <span className="text-primary text-xs tracking-wider uppercase">
              Journal
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-2">
              <span className="text-gradient">Notes</span> & writing
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Thoughts on building, founding Cybernetic Tech Solution, and the craft of front-end engineering.
            </p>
          </div>

          <div className="grid gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-border card-gradient p-6 hover:border-primary/50 hover:glow-box transition-all"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
