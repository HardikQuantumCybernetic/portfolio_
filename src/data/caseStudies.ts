export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  liveUrl: string;
  github?: string;
  role: string;
  duration: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
  highlights: { label: string; value: string }[];
  sections: { heading: string; body: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hardik-dental",
    title: "hardik-dental",
    tagline: "Dental clinic management web app — appointments, records, billing.",
    liveUrl: "https://secondlasttry-gray.vercel.app/",
    github: "https://github.com/HardikQuantumCybernetic/hardik-dental",
    role: "Full-stack developer",
    duration: "6 weeks",
    stack: ["React", "Tailwind", "Node/Express", "MySQL"],
    problem:
      "A local dental clinic struggled with paper-based scheduling and billing — leading to missed appointments and slow patient lookup.",
    solution:
      "Built a role-based web app with appointment scheduler, patient database, and basic billing. Designed an admin-friendly UI with quick search and one-click reschedule.",
    result:
      "Estimated 30–50% time saved per admin task, faster patient onboarding, and a single source of truth for clinic data.",
    highlights: [
      { label: "Admin time saved", value: "~40%" },
      { label: "Modules", value: "Appointments · Patients · Billing" },
      { label: "Auth", value: "Role-based" },
    ],
    sections: [
      {
        heading: "Architecture",
        body:
          "React SPA on the frontend with a Node/Express REST API, MySQL for relational integrity (patients, visits, invoices). Auth uses session tokens with role checks on every protected endpoint.",
      },
      {
        heading: "What I'd do next",
        body:
          "Add SMS reminders via a transactional provider, an analytics dashboard for repeat-patient trends, and migrate to Postgres for stronger constraints.",
      },
    ],
  },
  {
    slug: "portfolio",
    title: "Hardik's Portfolio",
    tagline: "This site — a 3D, animated, multi-page personal portfolio.",
    liveUrl: "https://hardik-s-digital-studio.vercel.app/",
    role: "Designer & developer",
    duration: "Ongoing",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind", "Three.js", "Framer Motion"],
    problem:
      "Generic portfolio templates didn't reflect a cybernetic / premium aesthetic, and most lacked interactive depth.",
    solution:
      "Designed a dual-theme (electric teal dark / rusty old-money light) site with a global 3D scene, animated route transitions, AI chatbot, and an interactive resume timeline.",
    result:
      "A distinctive online presence that doubles as a live demo of front-end craft — used to convert visitors into freelance & internship leads.",
    highlights: [
      { label: "Pages", value: "6" },
      { label: "Themes", value: "Dark · Light · System" },
      { label: "Interactive", value: "3D · AI chat · 404 game" },
    ],
    sections: [
      {
        heading: "Design system",
        body:
          "Strict semantic tokens in index.css drive every color. Two complete palettes share the same component contracts so the entire app re-themes in one click.",
      },
      {
        heading: "Performance",
        body:
          "3D scene uses a single shared canvas at z-index 1, screenshots replace iframes on project cards until hover, and routes render directly without lazy-loading penalties.",
      },
    ],
  },
  {
    slug: "cybernetic-tech-solution",
    title: "Cybernetic Tech Solution",
    tagline: "Premium company site for a tech internship & training startup.",
    liveUrl: "https://cybernetic-launchpad-ten.vercel.app",
    role: "Founder & lead developer",
    duration: "4 weeks",
    stack: ["React 18", "Vite", "TypeScript", "Tailwind", "Three.js", "Lovable Cloud", "Resend"],
    problem:
      "A new internship & training company needed a credible, premium online presence with a reliable lead-capture pipeline — fast.",
    solution:
      "Built a multi-page responsive site with interactive Three.js scenes, semantic SEO, and a contact form persisted to Postgres with email delivery via Resend through Supabase Edge Functions.",
    result:
      "Production-ready company website with a working contact-to-inbox lead pipeline, used as the primary acquisition channel.",
    highlights: [
      { label: "Lead pipeline", value: "Form → DB → Email" },
      { label: "Aesthetic", value: "Cybernetic / AWS-inspired" },
      { label: "Status", value: "Live" },
    ],
    sections: [
      {
        heading: "Backend",
        body:
          "Supabase Edge Function validates the contact payload, inserts to a Postgres table with RLS, and triggers a transactional email via Resend — all in a single round trip.",
      },
      {
        heading: "Brand",
        body:
          "Dark theme with neon accents, Three.js hero, and consistent typography across every page reinforce a premium technical brand.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
