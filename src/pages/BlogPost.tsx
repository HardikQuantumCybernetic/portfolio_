import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { getPost } from "@/data/blog";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  if (!post) return <NotFound />;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative z-10">
        <Navbar />
        <article className="container mx-auto px-6 pt-28 pb-20 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              <span className="text-gradient">{post.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4">{post.excerpt}</p>
          </motion.header>

          <div className="prose prose-invert max-w-none">
            {post.body.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="text-foreground/90 leading-relaxed mb-5 whitespace-pre-line"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
