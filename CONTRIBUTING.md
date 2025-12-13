# Contributing to Hardik's Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Setting Up Development Environment

1. **Fork the Repository**
   - Click the "Fork" button on GitHub
   - Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow existing code patterns and conventions
- Use meaningful variable and function names
- Add comments for complex logic

### Styling

- **ALWAYS** use Tailwind semantic tokens from the design system
- **NEVER** use direct colors like `text-white`, `bg-black`
- Use CSS variables defined in `index.css`
- Test both dark and light themes

```tsx
// ❌ WRONG
<div className="text-white bg-purple-500">

// ✅ CORRECT
<div className="text-foreground bg-primary">
```

### Component Guidelines

- Keep components small and focused
- Use TypeScript interfaces for props
- Export components as default
- Place reusable components in `src/components/`
- Place page components in `src/pages/`

### File Naming

- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Hooks: `use-kebab-case.ts` (e.g., `use-mobile.tsx`)
- Utilities: `camelCase.ts` (e.g., `generateResume.ts`)
- Pages: `PascalCase.tsx` (e.g., `About.tsx`)

## Making Changes

### Types of Contributions

1. **Bug Fixes** - Fix issues with existing functionality
2. **Features** - Add new functionality
3. **Documentation** - Improve docs and comments
4. **Performance** - Optimize existing code
5. **Accessibility** - Improve a11y compliance
6. **Design** - UI/UX improvements

### Pull Request Process

1. **Update Your Fork**
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Make Your Changes**
   - Keep changes focused and atomic
   - Test thoroughly on both themes
   - Ensure responsive design works

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```
   
   Use conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `style:` - Formatting (no code change)
   - `refactor:` - Code refactoring
   - `perf:` - Performance improvement
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

4. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Request review

### PR Checklist

Before submitting, ensure:

- [ ] Code follows existing patterns
- [ ] All TypeScript errors are resolved
- [ ] Tested on desktop and mobile
- [ ] Tested in both dark and light themes
- [ ] No console errors or warnings
- [ ] Semantic tokens used (no direct colors)
- [ ] Documentation updated if needed
- [ ] Commit messages follow conventions

## Testing

### Manual Testing

1. Test all pages: Home, About, Skills, Projects, Contact, Hire Me
2. Test navigation (footer links, navbar)
3. Test theme toggle
4. Test on mobile viewport
5. Test 3D elements visibility
6. Test resume download
7. Test external links

### Build Testing

```bash
# Check for build errors
npm run build

# Preview production build
npm run preview
```

## Reporting Issues

### Bug Reports

Include:
- Browser and version
- Device type (desktop/mobile)
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Feature Requests

Include:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Mockups or examples if available

## Code Review

PRs will be reviewed for:
- Code quality and consistency
- Performance implications
- Accessibility compliance
- Mobile responsiveness
- Theme compatibility
- Security considerations

## Questions?

- Open a GitHub issue
- Email: hardikjadhav307@gmail.com
- LinkedIn: [Hardik Jadhav](https://www.linkedin.com/in/hardik-jadhav-500b48301/)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
