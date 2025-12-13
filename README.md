# Hardik's Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Three.js featuring 3D elements, smooth animations, and a stunning visual experience.

![Portfolio Preview](public/favicon.png)

## ✨ Features

- **3D Interactive Background** - Floating geometric shapes and mouse-following particles
- **Theme Support** - Dark (teal/cyan) and Light (rusty old-money) color schemes
- **Smooth Animations** - Page transitions, parallax scrolling, and micro-interactions
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Multi-language Support** - English, Hindi, and Marathi
- **Dynamic Resume Generation** - PDF resume generated from portfolio data
- **Live Project Previews** - Embedded iframe previews of live projects
- **SEO Optimized** - Structured data, meta tags, and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/HardikQuantumCybernetic/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Three.js / React Three Fiber** | 3D Graphics |
| **Shadcn/ui** | UI Components |
| **React Router** | Navigation |
| **jsPDF** | Resume Generation |

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
│   ├── certificates/    # Achievement certificates
│   └── hardik.jpg       # Profile photo
├── components/          # React components
│   ├── ui/              # Shadcn UI components
│   ├── HeroSection.tsx  # Landing hero
│   ├── AboutSection.tsx # About me content
│   ├── SkillsSection.tsx# Skills display
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── ContactSection.tsx  # Contact form
│   ├── Scene3D.tsx      # 3D background
│   ├── Navbar.tsx       # Navigation
│   ├── Footer.tsx       # Footer links
│   └── ...
├── pages/               # Page components
│   ├── Index.tsx        # Home page
│   ├── About.tsx        # About page
│   ├── Skills.tsx       # Skills page
│   ├── Projects.tsx     # Projects page
│   ├── Contact.tsx      # Contact page
│   └── HireMe.tsx       # Hire me page
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
│   └── generateResume.ts# PDF resume generator
├── lib/                 # Library utilities
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles & design tokens
```

## 🎨 Customization

### Updating Personal Information

1. **Profile Photo**: Replace `src/assets/hardik.jpg`
2. **Certificates**: Add/replace images in `src/assets/certificates/`
3. **Contact Info**: Update links in `Footer.tsx` and `ContactSection.tsx`
4. **Projects**: Modify project data in `ProjectsSection.tsx`
5. **Skills**: Update skills in `SkillsSection.tsx`
6. **Resume**: Modify content in `src/utils/generateResume.ts`

### Theme Customization

Edit `src/index.css` to modify:
- Color palette (primary, secondary, accent colors)
- Typography (font families, sizes)
- Spacing and layout variables

Edit `tailwind.config.ts` to extend:
- Custom colors
- Animation keyframes
- Font configurations

### 3D Elements

Modify `src/components/Scene3D.tsx` to:
- Change floating shapes
- Adjust particle count and behavior
- Modify theme-based colors

## 🌐 Deployment

### Lovable (Recommended)
1. Push changes to GitHub
2. Open [Lovable](https://lovable.dev)
3. Click Share → Publish

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Self-Hosting
```bash
npm run build
# Serve the 'dist' folder with any static server
npx serve dist
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and patterns
- Use TypeScript for type safety
- Use Tailwind semantic tokens (not direct colors)
- Test on both dark and light themes
- Ensure mobile responsiveness

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: hardikjadhav307@gmail.com
- **LinkedIn**: [Hardik Jadhav](https://www.linkedin.com/in/hardik-jadhav-500b48301/)
- **GitHub**: [HardikQuantumCybernetic](https://github.com/HardikQuantumCybernetic)
- **WhatsApp**: [+91 8080950921](https://wa.me/918080950921)

## 💡 Suggestions for Improvement

Here are some features you can add to enhance customer interaction:

1. **Live Chat Widget** - Add a chat bubble for real-time communication
2. **Blog Section** - Share technical articles and tutorials
3. **Newsletter Signup** - Build an email list for updates
4. **Project Case Studies** - Detailed breakdowns of featured work
5. **Interactive Skills Chart** - Visual skill proficiency display
6. **Client Portal** - Dashboard for project tracking
7. **Scheduling Integration** - Calendly or similar for booking calls
8. **Testimonials Carousel** - More social proof from clients
9. **Analytics Dashboard** - Track visitor engagement
10. **Multi-currency Pricing** - Display prices in user's currency

---

Made with ❤️ by Hardik Jadhav
