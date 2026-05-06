# Contributing to Hardik's Portfolio

Thanks for your interest in contributing! This guide covers everything from setup to PR review.

## Getting Started

### Prerequisites

- Node.js 18+
- npm, bun, or yarn
- Git
- Familiarity with React, TypeScript, Tailwind CSS, and (for some areas) Framer Motion / Three.js / Supabase Edge Functions

### Setup

```bash
# 1. Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install
npm install

# 3. Run the dev server
npm run dev

# 4. Branch off main
git checkout -b feature/your-feature-name
```

## Project Areas

| Area | Where it lives |
|------|----------------|
| Pages / routes | `src/pages/`, `src/App.tsx` |
| UI components | `src/components/` |
| Shadcn primitives | `src/components/ui/` (don't modify directly) |
| Design tokens | `src/index.css`, `tailwind.config.ts` |
| Case studies content | `src/data/caseStudies.ts` |
| Blog content | `src/data/blog.ts` |
| Resume content | `src/utils/generateResume.ts` |
| AI chatbot backend | `supabase/functions/ai-chat/index.ts` |
| 404 game | `src/components/SpaceShooter.tsx` |
| 3D background | `src/components/Scene3D.tsx` |
| Vercel SPA rewrites | `vercel.json` |

## Development Guidelines

### TypeScript & Code Style
- TypeScript for all new files
- Define interfaces for component props
- Meaningful names, small focused components
- Comment non-obvious logic

### Styling Rules (CRITICAL)
- **Always** use semantic Tailwind tokens (`text-foreground`, `bg-primary`, `border-border`, …)
- **Never** use direct colors (`text-white`, `bg-purple-500`, hex/RGB literals)
- Define new tokens in `src/index.css` (HSL only) and extend in `tailwind.config.ts`
- Test both **dark** and **light** themes for every change

```tsx
// ❌ WRONG
<div className="text-white bg-purple-500">

// ✅ CORRECT
<div className="text-foreground bg-primary">
```

### Component Guidelines
- Keep components small and single-purpose
- Place reusable UI in `src/components/`, route shells in `src/pages/`
- Wrap pages in `<PageTransition>` for consistent route animations
- For animations, prefer Framer Motion variants over ad-hoc CSS

### File Naming
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Hooks: `use-kebab-case.ts` (e.g., `use-mobile.tsx`)
- Utilities / data: `camelCase.ts` (e.g., `generateResume.ts`, `caseStudies.ts`)
- Pages: `PascalCase.tsx`

### Adding Content

**New project**
1. Edit `src/components/ProjectsSection.tsx`
2. Add an entry to the projects array (title, description, screenshot/iframe URL, tech, links)
3. Optionally link a case study via `caseStudySlugs`

**New case study**
1. Append an entry to `src/data/caseStudies.ts` (slug, problem, solution, result)
2. It will be reachable at `/case-study/:slug`

**New blog post**
1. Append an entry to `src/data/blog.ts`
2. Available at `/blog/:slug` and listed on `/blog`

**New skill / certificate**
- Skill: `src/components/SkillsSection.tsx`
- Certificate: drop image into `src/assets/certificates/` and reference in `AboutSection.tsx`

### Routing & 404
- All new routes must be added in `src/App.tsx`
- Invalid `/case-study/*` and `/blog/*` slugs render `<NotFound />`
- If deploying somewhere new, ensure SPA rewrites mirror `vercel.json`

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, single `<h1>` per page)
- Alt text on all images
- Keyboard-navigable interactive elements
- Sufficient contrast in both themes

## Pull Request Process

1. Sync with upstream
   ```bash
   git fetch upstream
   git merge upstream/main
   ```
2. Make focused, atomic changes
3. Conventional commits:
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` docs only
   - `style:` formatting
   - `refactor:` code restructuring
   - `perf:` performance
   - `test:` tests
   - `chore:` maintenance
4. Push and open a PR using the template

### PR Checklist
- [ ] Follows existing patterns
- [ ] No TypeScript errors
- [ ] Tested on desktop **and** mobile viewports
- [ ] Tested in **dark and light** themes
- [ ] No console errors or warnings
- [ ] Only semantic tokens used (no direct colors)
- [ ] New routes added to `src/App.tsx` if applicable
- [ ] Docs updated if behavior or content changed
- [ ] Conventional commit messages

## Manual Testing

Before requesting review:

1. Pages: `/`, `/about`, `/skills`, `/projects`, `/contact`, `/hire-me`, `/blog`, sample `/blog/:slug`, sample `/case-study/:slug`
2. 404 behavior: visit `/totally-not-a-route`, `/blog/nope`, `/case-study/nope`
3. 404 game: play on desktop (keyboard) and mobile (touch); confirm best-score persists across refresh
4. Theme toggle (System / Dark / Light)
5. Navbar + footer links
6. Resume PDF download
7. Contact form submit (confetti should fire)
8. Chatbot: open, send a message, toggle sound
9. Background music toggle
10. Production build:
    ```bash
    npm run build
    npm run preview
    ```

## Reporting Issues

Use the templates in `.github/ISSUE_TEMPLATE/`.

**Bug reports** should include browser/device/OS, theme, steps to reproduce, expected vs. actual behavior, and screenshots/console logs if possible.

**Feature requests** should describe the problem, proposed solution, alternatives considered, and (optionally) implementation ideas.

## Code Review Criteria

- Code quality, clarity, and consistency with existing patterns
- Performance (bundle size, render cost, no unnecessary re-renders)
- Accessibility
- Mobile responsiveness
- Theme compatibility (dark + light)
- Security considerations (especially around the AI chatbot edge function and any new external calls)

## Questions?

- Open a GitHub issue
- Email: hardikjadhav307@gmail.com
- LinkedIn: [Hardik Jadhav](https://www.linkedin.com/in/hardik-jadhav-500b48301/)

## License

By contributing, you agree your contributions will be licensed under the MIT License.
