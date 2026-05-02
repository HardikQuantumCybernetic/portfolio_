import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import SpaceShooter from "@/components/SpaceShooter";

const jokes = [
  "404: This page is on a coffee break ☕",
  "// TODO: Build this page (it's been on the list since 2023)",
  "It's not a bug, it's an undocumented adventure 🚀",
  "git checkout -b feature/this-page-someday",
  "The page you seek is in another castle 🏰",
  "Error 404: Joke not found. Wait — that IS the joke.",
  "Have you tried turning the URL off and on again?",
  "This page got vibe-coded out of existence ✨",
  "Schrödinger's page: simultaneously here and not here.",
  "The hamsters powering this page need a vacation 🐹",
];

const NotFound = () => {
  const location = useLocation();
  const [joke, setJoke] = useState(jokes[0]);

  useEffect(() => {
    console.error("404:", location.pathname);
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    const id = setInterval(() => {
      setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    }, 5000);
    return () => clearInterval(id);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative z-10 flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs tracking-wider uppercase">
            Error 404
          </div>
          <h1 className="text-7xl md:text-8xl font-heading font-bold leading-none">
            <span className="text-gradient">Lost</span>
            <br />
            in space.
          </h1>
          <motion.p
            key={joke}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-muted-foreground italic min-h-[3rem]"
          >
            {joke}
          </motion.p>
          <p className="text-sm text-muted-foreground">
            The page <code className="px-2 py-0.5 rounded bg-secondary text-primary">{location.pathname}</code>{" "}
            doesn't exist — but while you're here, fancy a game?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md accent-gradient text-primary-foreground font-medium hover:opacity-90 glow-box"
            >
              <Home className="w-4 h-4" />
              Take me home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go back
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SpaceShooter />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
