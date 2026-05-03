export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-cybernetic-portfolio",
    title: "Building a Cybernetic Portfolio with React + Three.js",
    excerpt:
      "How I designed a dual-theme, 3D-driven portfolio that doubles as a front-end demo.",
    date: "2026-04-12",
    readingTime: "5 min read",
    tags: ["React", "Three.js", "Design"],
    body:
      "Most portfolios feel the same. I wanted mine to be a live demo of what I can build — a cybernetic aesthetic with a global 3D scene, two complete themes, and an animated resume timeline.\n\nThe trick was discipline: every color is a semantic token, every page reuses the same shared canvas at z-index 1, and routes render directly so navigation feels instant. The result is a site that looks expensive but ships fast.",
  },
  {
    slug: "founding-cybernetic-tech-solution",
    title: "Founding Cybernetic Tech Solution — lessons from week one",
    excerpt:
      "What I learned launching an internship & training startup from Sangli, Maharashtra.",
    date: "2026-03-28",
    readingTime: "4 min read",
    tags: ["Founder", "Startup", "Cybernetic"],
    body:
      "Cybernetic Tech Solution started as a simple question: why is great mentorship so rare for students outside metro cities? Week one was less about code and more about clarity — pricing, promise, and pipeline.\n\nThe site went live in four weeks: contact form → Postgres → email via Resend, all on a Supabase edge function. Small stack, real leads, zero excuses.",
  },
  {
    slug: "privacy-first-document-reader",
    title: "Building a privacy-first document reader (DocReader)",
    excerpt:
      "PDF + EPUB + DOCX + OCR + TTS, all running in your browser. No server, no upload.",
    date: "2026-02-18",
    readingTime: "6 min read",
    tags: ["DocReader", "Privacy", "Web Speech"],
    body:
      "DocReader is fully client-side: PDF.js for rendering, Tesseract.js for OCR, the Web Speech API for TTS with word-level highlighting, and a custom WAV exporter.\n\nThe constraint — no data leaves the browser — forced a cleaner architecture: workers for heavy parsing, IndexedDB for state, and a streaming pipeline for synthesis. Privacy is a feature, not a footnote.",
  },
];

export const getPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
