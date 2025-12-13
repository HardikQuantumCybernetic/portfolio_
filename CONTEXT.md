# Project Context

This document provides context for AI assistants and contributors working on this portfolio website.

## Project Overview

This is a personal portfolio website for Hardik Jadhav, a full-stack developer specializing in web development, DevOps, and AI. The site showcases projects, skills, achievements, and provides contact/hiring information.

## Architecture

### Frontend Framework
- **React 18** with TypeScript for type-safe development
- **Vite** as the build tool for fast development and optimized production builds
- **React Router** for client-side navigation with animated page transitions

### Styling
- **Tailwind CSS** for utility-first styling
- **Shadcn/ui** for pre-built, customizable UI components
- **CSS Variables** for theming (dark/light mode support)
- **Framer Motion** for animations and page transitions

### 3D Graphics
- **Three.js** via **React Three Fiber** for 3D background elements
- **@react-three/drei** for helper components (Float, etc.)
- Features: floating geometric shapes, mouse-following particles

### Key Design Decisions

1. **Theme System**
   - Dark mode: Electric teal/cyan accent colors
   - Light mode: Rusty, old-money color palette
   - System preference detection with manual override

2. **Multi-page Structure**
   - Separate routes for each section (/, /about, /skills, /projects, /contact, /hire-me)
   - Each page has Navbar, content section, and Footer
   - Animated page transitions using Framer Motion

3. **3D Elements Global Presence**
   - Scene3D component rendered at App level
   - Visible on all pages for consistent visual identity
   - Performance optimized with `pointer-events-none`

4. **Resume Generation**
   - Dynamic PDF generation using jsPDF
   - Content pulled from portfolio data
   - Available via download buttons in Navbar and Hero

## File Organization

```
src/
├── components/          # Reusable UI components
│   ├── ui/              # Shadcn base components (do not modify directly)
│   ├── [Feature].tsx    # Feature-specific components
├── pages/               # Route page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── assets/              # Static assets (images, certificates)
├── lib/                 # Library utilities (cn function)
└── index.css            # Global styles and CSS variables
```

## Constraints & Guidelines

### Do Not Modify
- `src/integrations/supabase/types.ts` - Auto-generated
- `package.json` - Use npm commands instead
- `node_modules/` - Dependencies

### Styling Rules
- ALWAYS use semantic Tailwind tokens from design system
- NEVER use direct colors (e.g., `text-white`, `bg-black`)
- Use HSL color format for CSS variables
- Test both dark and light themes

### Performance Targets
- Lighthouse Performance: ≥90
- Lighthouse Accessibility: ≥90
- Lighthouse Best Practices: ≥90

### Privacy
- Use privacy-friendly analytics only (if any)
- No tracking without consent
- Include JSON-LD structured data for SEO

## Current Features

| Feature | Status | Notes |
|---------|--------|-------|
| 3D Background | ✅ | Floating shapes + mouse particles |
| Dark/Light Theme | ✅ | System detection + manual toggle |
| Page Transitions | ✅ | Framer Motion animations |
| Resume Download | ✅ | Dynamic PDF generation |
| Project Previews | ✅ | Live iframe embeds |
| Certificates Modal | ✅ | Clickable achievement cards |
| Contact Form | ✅ | Email link backend |
| Hire Me Page | ✅ | Services + pricing |
| Multi-language | 🔄 | Structure ready, needs implementation |
| Blog Section | ❌ | Planned enhancement |

## Common Tasks

### Adding a New Project
1. Open `src/components/ProjectsSection.tsx`
2. Add project object to the `projects` array
3. Include: title, description, image, technologies, demo URL, GitHub URL

### Adding a New Skill
1. Open `src/components/SkillsSection.tsx`
2. Add skill to appropriate category array
3. Include: name, icon, level (optional)

### Updating Resume
1. Open `src/utils/generateResume.ts`
2. Modify content in the respective sections
3. Test PDF download

### Changing Theme Colors
1. Open `src/index.css`
2. Modify CSS variables in `:root` and `.dark` selectors
3. Update `tailwind.config.ts` if adding new colors

## Contact for Questions

- **Developer**: Hardik Jadhav
- **Email**: hardikjadhav307@gmail.com
- **GitHub Issues**: Open an issue in the repository
