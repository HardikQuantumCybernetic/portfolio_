# Hardik's Portfolio Website

A modern, interactive portfolio website built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Three.js** — featuring a 3D background, a Gemini-powered AI chatbot, case studies, a blog, and a playable 404 page.

![Portfolio Preview](public/favicon.png)

## ✨ Features

### Core
- **3D Interactive Background** — floating geometric shapes and mouse-following particles (Three.js / React Three Fiber)
- **Dual Theme** — Dark (electric teal/cyan) and Light (rusty old-money), with system detection
- **Multi-language Support** — English, Hindi, Marathi
- **Page Transitions** — fade/slide route animations via Framer Motion
- **Responsive Design** — works on mobile, tablet, and desktop
- **SEO Optimized** — JSON-LD structured data, Open Graph image, semantic HTML, robots config

### Content & Engagement
- **Hero Section** — rotating typewriter tagline with primary "Hire Me" + secondary "View Projects" CTAs
- **Trusted By Strip** — social-proof client/brand logos above the fold
- **Interactive Resume Timeline** — animated vertical timeline of education and journey
- **Case Study Pages** — Problem → Solution → Result narratives at `/case-study/:slug`
- **Blog System** — index at `/blog` and detail pages at `/blog/:slug`
- **Project Cards** — static screenshot fallback (via thum.io) with live iframe preview on hover
- **Achievements Wall** — clickable certificate modals
- **Testimonials Section** — client and peer quotes
- **Hire Me Page** — services and transparent pricing ($5/page)
- **Dynamic Resume Generation** — PDF generated from portfolio data via jsPDF
- **Background Music** — optional ambient audio (Cosmic Om Resonance)

### Interactivity
- **AI Chatbot ("Hardik AI")** — Gemini 2.0 Flash via Supabase Edge Function, with thinking animation, sound toggle, and `localStorage` preference
- **Confetti** — celebration burst on contact form submit (canvas-confetti)
- **Magnetic Cursor & Interactive Cards** — micro-interactions
- **Scroll Progress Bar**
- **Playable 404 Page** — Space Shooter mini-game with persistent best score (`localStorage`), touch controls for mobile, plus rotating jokes
- **404 CTAs** — Home, Projects, and Go-Back buttons; renders for invalid `/case-study/*` and `/blog/*` slugs too

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, bun, or yarn

### Installation

```bash
git clone https://github.com/HardikQuantumCybernetic/portfolio.git
cd portfolio
npm install
npm run dev
```

App runs at `http://localhost:5173`.

### Build

```bash
npm run build      # production build
npm run preview    # preview production build
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS + Shadcn/ui | Styling & components |
| Framer Motion | Animations & page transitions |
| Three.js / React Three Fiber / Drei | 3D background |
| React Router | Client-side routing |
| jsPDF | Resume generation |
| canvas-confetti | Form-submit celebration |
| Supabase (Lovable Cloud) | Edge Functions for AI chatbot |
| Google Gemini 2.0 Flash | Chatbot LLM (via Lovable AI Gateway) |

## 📁 Project Structure

```
src/
├── assets/                   # Images, certificates, profile photo
├── components/
│   ├── ui/                   # Shadcn primitives (do not modify directly)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   ├── ResumeTimeline.tsx
│   ├── Testimonials.tsx
│   ├── TrustedBy.tsx
│   ├── ChatWidget.tsx        # Gemini-powered AI bot
│   ├── SpaceShooter.tsx      # 404 mini-game
│   ├── Scene3D.tsx           # Global 3D background
│   ├── PageTransition.tsx
│   ├── Navbar.tsx / Footer.tsx
│   └── ...
├── pages/
│   ├── Index.tsx             # Home (Hero + Footer only)
│   ├── About.tsx             # About + Timeline + Testimonials
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── CaseStudy.tsx         # /case-study/:slug
│   ├── Blog.tsx              # /blog
│   ├── BlogPost.tsx          # /blog/:slug
│   ├── Contact.tsx
│   ├── HireMe.tsx
│   └── NotFound.tsx          # Playable 404
├── data/
│   ├── caseStudies.ts
│   └── blog.ts
├── integrations/supabase/    # Auto-generated client + types
├── hooks/
├── utils/generateResume.ts
├── lib/utils.ts
├── App.tsx
├── main.tsx
└── index.css                 # Design tokens (HSL semantic variables)

supabase/
└── functions/ai-chat/        # Gemini-powered Edge Function
```

## 🎨 Customization

### Personal Info
- **Profile Photo** — `src/assets/hardik.jpg`
- **Certificates** — `src/assets/certificates/`
- **Contact links** — `Footer.tsx`, `ContactSection.tsx`
- **Projects** — `src/components/ProjectsSection.tsx`
- **Case Studies** — `src/data/caseStudies.ts`
- **Blog Posts** — `src/data/blog.ts`
- **Skills** — `src/components/SkillsSection.tsx`
- **Resume content** — `src/utils/generateResume.ts`

### Theme & Tokens
All colors are HSL semantic tokens. Edit:
- `src/index.css` — CSS variables for `:root` and `.dark`
- `tailwind.config.ts` — extend tokens, animations, fonts

> **Never** use direct color classes (`text-white`, `bg-purple-500`). Always use semantic tokens (`text-foreground`, `bg-primary`, etc.).

### AI Chatbot
The chatbot calls the `ai-chat` Supabase Edge Function (`supabase/functions/ai-chat/index.ts`). The model is wired through the Lovable AI Gateway — no extra API keys needed locally when using Lovable Cloud.

## 🌐 Deployment

### Lovable
Open the project in [Lovable](https://lovable.dev) → Share → Publish.

### Vercel
SPA rewrites are configured in `vercel.json` so deep links like `/blog/foo` and `/case-study/bar` work after refresh.

```bash
npm i -g vercel
vercel
```

### Netlify / Static Hosts
```bash
npm run build
# deploy the 'dist' folder
```
Ensure your host rewrites unknown routes to `index.html`.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines. Quick version:

1. Fork → branch (`feature/your-feature`)
2. Use semantic tokens, test both themes & viewports
3. Conventional commits (`feat:`, `fix:`, `docs:`…)
4. Open a PR using the template

Issue templates live in `.github/ISSUE_TEMPLATE/`.

## 📄 License

MIT — see [LICENSE](LICENSE).

## 📞 Contact

- **Email**: hardikjadhav307@gmail.com
- **LinkedIn**: [Hardik Jadhav](https://www.linkedin.com/in/hardik-jadhav-500b48301/)
- **GitHub**: [HardikQuantumCybernetic](https://github.com/HardikQuantumCybernetic)
- **WhatsApp**: [+91 8080950921](https://wa.me/918080950921)

---

Made with ❤️ by Hardik Jadhav
