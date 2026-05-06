## Description
Brief description of what this PR does and why.

## Type of Change
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that changes existing behavior)
- [ ] 📝 Documentation update
- [ ] ⚡ Performance improvement
- [ ] ♻️ Code refactoring
- [ ] 🎨 Style / design tokens
- [ ] ♿ Accessibility improvement
- [ ] 🔧 Build / tooling / config

## Affected Area
- [ ] Home / Hero
- [ ] About / Resume Timeline / Testimonials
- [ ] Skills
- [ ] Projects (cards, iframe previews)
- [ ] Case Study (`/case-study/:slug`, `src/data/caseStudies.ts`)
- [ ] Blog (`/blog`, `/blog/:slug`, `src/data/blog.ts`)
- [ ] Contact / Hire Me
- [ ] Navbar / Footer
- [ ] Theme system (`index.css`, `tailwind.config.ts`)
- [ ] AI Chatbot (`ChatWidget.tsx`, `supabase/functions/ai-chat`)
- [ ] 404 page / Space Shooter
- [ ] 3D background / Scene3D
- [ ] Routing (`src/App.tsx`, `vercel.json`)
- [ ] Docs

## Changes Made
- 
- 
- 

## Screenshots / Recordings
Add before/after screenshots or a short clip for any visual change.

| Dark | Light |
|------|-------|
| _img_ | _img_ |

## Testing Checklist
- [ ] Tested on desktop
- [ ] Tested on mobile viewport
- [ ] Tested on tablet viewport
- [ ] Tested in **dark** theme
- [ ] Tested in **light** theme
- [ ] Verified all affected routes still load (including deep links after refresh)
- [ ] If route added: registered in `src/App.tsx` and works on Vercel via `vercel.json` rewrite
- [ ] If 404-related: invalid `/blog/:slug` and `/case-study/:slug` still render `<NotFound />`
- [ ] No console errors or warnings
- [ ] No TypeScript errors
- [ ] Production build passes (`npm run build`)
- [ ] Only semantic design tokens used (no `text-white`, `bg-black`, hex literals)
- [ ] Accessibility checked (semantic HTML, alt text, keyboard nav)
- [ ] Performance: no unnecessary re-renders, heavy assets lazy-loaded

## Related Issues
Closes #(issue number)

## Additional Notes
Anything reviewers should know — trade-offs, follow-up tasks, areas needing extra eyes.
