# Project Context

This document provides context for AI assistants and contributors working on this portfolio website.

## Project Overview

A personal portfolio for **Hardik Jadhav** — full-stack developer focused on web, DevOps, AI, and security. The site showcases projects, skills, achievements, case studies, blog posts, and provides contact and hiring info, plus a Gemini-powered AI assistant and a playable 404 page.

## Architecture

### Frontend
- **React 18 + TypeScript** for type-safe UI
- **Vite** as the build tool / dev server
- **React Router** with animated `<PageTransition>` wrappers around each route
- **Direct rendering** — no lazy loading of routes (small SPA, fast TTFB preferred)

### Styling
- **Tailwind CSS** utility classes
- **Shadcn/ui** for primitives (in `src/components/ui/` — never modified directly)
- **CSS variables (HSL only)** in `src/index.css` for design tokens
- **Framer Motion** for animations and route transitions

### 3D & Visual
- **Three.js** via **React Three Fiber** + **@react-three/drei** for the global background
- `Scene3D` is mounted at the App level with `pointer-events-none`, `z-index: 1`
- Footer links and overlays must remain clickable above the background

### Backend / Integrations
- **Lovable Cloud (Supabase)** — `src/integrations/supabase/`
- **Edge Function** `supabase/functions/ai-chat/` — proxies messages to Google Gemini 2.0 Flash via the Lovable AI Gateway (no API keys required client-side)
- **No persistent DB writes** for forms — contact form uses `mailto:` and triggers a confetti celebration; chatbot conversations are not stored

### Key Design Decisions

1. **Theme System**
   - Dark mode: electric teal/cyan accents
   - Light mode: rusty, old-money palette
   - System preference detection + manual toggle (System / Dark / Light)

2. **Multi-page Structure**
   - Routes: `/`, `/about`, `/skills`, `/projects`, `/contact`, `/hire-me`, `/blog`, `/blog/:slug`, `/case-study/:slug`, `*` (404)
   - Home page intentionally minimal: Navbar + Hero + Footer only
   - Each non-home page = Navbar + content + Footer, wrapped in `<PageTransition>`

3. **404 Page**
   - Playable Space Shooter mini-game with `localStorage` best-score persistence
   - Touch controls on mobile (drag-to-aim canvas + on-screen movement / FIRE buttons)
   - Rotating jokes
   - CTAs: Home, Projects, Go Back
   - Invalid `/blog/:slug` and `/case-study/:slug` render `<NotFound />` instead of redirecting
   - SEO: `<title>`, description, `robots: noindex, follow`

4. **Project Previews**
   - Static screenshot fallback (via `thum.io`) for fast load
   - Live `<iframe>` swapped in only on hover
   - Optional `caseStudySlugs` linking each project to a `/case-study/:slug`

5. **Resume Generation**
   - Dynamic PDF via `jsPDF` from `src/utils/generateResume.ts`
   - Triggered from Navbar and About page

6. **AI Chatbot ("Hardik AI")**
   - Floating widget, mobile-safe width (`max-w-[calc(100vw-2rem)]`)
   - Loading micro-interaction ("Hardik AI is thinking…")
   - Sound toggle with subtle `AudioContext` ping; preference in `localStorage`

7. **Pricing Visibility**
   - No pricing on most pages
   - `/hire-me` is the only place pricing is displayed ($5/page)

## File Organization

```
src/
├── components/
│   ├── ui/                # Shadcn primitives (do not modify directly)
│   └── [Feature].tsx      # Feature components
├── pages/                 # Route pages
├── data/
│   ├── caseStudies.ts
│   └── blog.ts
├── hooks/
├── utils/                 # generateResume.ts, etc.
├── integrations/supabase/ # Auto-generated client + types
├── assets/                # Images, certificates
├── lib/                   # cn() and shared utilities
└── index.css              # Global styles + HSL design tokens

supabase/
└── functions/ai-chat/     # Gemini edge function

public/
├── og-image.jpg           # Open Graph link preview
├── favicon.png
└── robots.txt

vercel.json                # SPA rewrites for deep links on Vercel
```

## Constraints & Guidelines

### Do Not Modify
- `src/integrations/supabase/types.ts` — auto-generated
- `src/components/ui/*` — Shadcn primitives (extend via wrappers/variants)
- `package.json` directly — use `npm`/`bun` commands

### Styling Rules
- **Always** use semantic Tailwind tokens from the design system
- **Never** use direct colors (`text-white`, `bg-black`, hex literals)
- HSL only for CSS variables
- Test both dark and light themes

### Performance Targets
- Lighthouse Performance ≥ 90
- Lighthouse Accessibility ≥ 90
- Lighthouse Best Practices ≥ 90
- Defer heavy iframes — load on hover

### Privacy
- Privacy-friendly analytics only (Plausible / Fathom if any)
- No tracking without consent
- No backend persistence for contact form (mailto)
- JSON-LD structured data + Open Graph for SEO

### Routing
- New routes must be registered in `src/App.tsx`
- Vercel and any other static host must rewrite unknown routes to `index.html` (see `vercel.json`)

## Current Features

| Feature | Status | Notes |
|---------|--------|-------|
| 3D Background | ✅ | Floating shapes + mouse particles |
| Dark/Light Theme | ✅ | System detection + manual toggle |
| Page Transitions | ✅ | Framer Motion |
| Resume Download | ✅ | Dynamic PDF |
| Project Previews | ✅ | Screenshot → live iframe on hover |
| Case Studies | ✅ | `/case-study/:slug` |
| Blog | ✅ | `/blog`, `/blog/:slug` |
| Certificates Modal | ✅ | Clickable cards |
| Contact Form | ✅ | mailto + confetti on submit |
| Hire Me Page | ✅ | Services + pricing |
| Multi-language | ✅ | EN / HI / MR |
| AI Chatbot | ✅ | Gemini 2.0 Flash via edge function |
| 404 Mini-game | ✅ | Space Shooter, mobile-friendly, persistent best score |
| Background Music | ✅ | Cosmic Om Resonance, toggle |
| OG Image | ✅ | `public/og-image.jpg` |

## Common Tasks

### Add a Project
1. Edit `src/components/ProjectsSection.tsx`
2. Add to the `projects` array (title, description, screenshot, tech, demo URL, GitHub URL)
3. Optional: link a case study via `caseStudySlugs`

### Add a Case Study
1. Append to `src/data/caseStudies.ts` (slug, problem, solution, result, hero image)
2. Reachable at `/case-study/:slug`

### Add a Blog Post
1. Append to `src/data/blog.ts`
2. Reachable at `/blog/:slug`, listed on `/blog`

### Add a Skill
1. Edit `src/components/SkillsSection.tsx`
2. Add to the appropriate category (name, icon, optional level)

### Update Resume
1. Edit `src/utils/generateResume.ts`
2. Test PDF download from Navbar or About page

### Change Theme Colors
1. Edit `src/index.css` — `:root` and `.dark` HSL variables
2. Extend `tailwind.config.ts` if exposing new tokens

### Modify the 404 Game
- `src/components/SpaceShooter.tsx` — touch + keyboard input, score persistence in `localStorage`

### Update the AI Chatbot
- UI: `src/components/ChatWidget.tsx`
- Backend: `supabase/functions/ai-chat/index.ts`

## Contact for Questions

- **Developer**: Hardik Jadhav
- **Email**: hardikjadhav307@gmail.com
- **GitHub Issues**: Open an issue in the repository
