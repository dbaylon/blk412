# Website Development Rules & Guidelines

## Frontend Design Workflow

### Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions
- Review brand assets in `brand_assets/` folder before designing
- Understand the context: purpose, audience, and aesthetic direction before coding

### Reference Images
- **If a reference image is provided**: Match layout, spacing, typography, and color exactly
  - Swap in placeholder content (images via `https://placehold.co/`, generic copy)
  - Do not improve or add to the design
  - Screenshot your output, compare against reference, fix mismatches, re-screenshot
  - Do at least 2 comparison rounds until no visible differences remain
- **If no reference image**: Design from scratch with high craft (see Anti-Generic Guardrails below)

### Screenshot & Testing Workflow
- **Always serve on localhost** — never screenshot a `file:///` URL
- Start dev server before taking screenshots
- Compare screenshots against reference designs with specificity:
  - Check spacing/padding, font size/weight/line-height
  - Verify colors (exact hex values)
  - Validate alignment, border-radius, shadows, image sizing
- When comparing: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"

### Brand Assets
- Always check the `brand_assets/` folder before designing
- May contain: logos, color guides, style guides, or images
- If assets exist, use them — do not use placeholders where real assets are available
- If a logo is present, use it
- If a color palette is defined, use those exact values — do not invent brand colors

## Anti-Generic Design Guardrails

### Critical Rules (Hard Constraints)
- **Do not add** sections, features, or content not in the reference
- **Do not "improve"** a reference design — match it exactly
- **Do not stop** after one screenshot/comparison pass
- **Do not use** `transition-all` in CSS
- **Do not use** default Tailwind blue/indigo as primary color

### Color Treatment
- **Never use default Tailwind palette** (indigo-500, blue-600, etc.)
- Pick a custom brand color and derive variations from it
- Use CSS custom properties for consistent theming
- Create color-tinted shadows with low opacity for depth

### Shadows & Depth
- **Never use flat shadows** like `shadow-md`
- Use layered, color-tinted shadows with low opacity
- Implement a layering system: base → elevated → floating
- All surfaces should not sit at the same z-plane

### Typography
- **Never use the same font** for headings and body text
- Pair a display/serif with a clean sans-serif
- Apply tight tracking (`-0.03em` or `letter-spacing: -0.03em`) on large headings
- Use generous line-height (`1.7`) on body text
- Choose distinctive, characterful fonts that match the aesthetic

### Gradients & Textures
- Layer multiple radial gradients for depth
- Add grain/texture via SVG noise filter
- Avoid flat, single-color backgrounds
- Use gradient overlays on images (`bg-gradient-to-t from-black/60`)
- Apply color treatment layers with `mix-blend-multiply`

### Animations & Transitions
- **Only animate** `transform` and `opacity`
- **Never use** `transition-all`
- Use spring-style easing functions
- Focus on high-impact moments: orchestrated page loads with staggered reveals
- Use `animation-delay` for sequential animations

### Interactive States
- **Every clickable element needs**: hover, focus-visible, and active states
- No exceptions to interactive state requirements
- Ensure keyboard focus indicators are visible and distinctive
- Make hover states surprising and delightful

### Spacing & Layout
- Use intentional, consistent spacing tokens
- Do not use random Tailwind spacing steps
- Either generous negative space OR controlled density
- Implement unexpected layouts: asymmetry, overlap, diagonal flow, grid-breaking

### Images
- Always add gradient overlay for text readability
- Apply color treatment layers with blend modes
- Optimize image sizes and formats (WebP, AVIF)
- Use descriptive alt text

## Output Defaults

### Standard Structure
- Single `index.html` file with inline styles (unless specified otherwise)
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive design approach

## Tech Stack & Framework Guidelines

### Core Technologies
- Use modern JavaScript (ES6+) with TypeScript when appropriate
- Prefer vanilla CSS or CSS-in-JS solutions over heavy frameworks when possible
- Use semantic HTML5 elements for better accessibility and SEO
- Implement progressive enhancement principles

### Build Tools & Dependencies
- Keep dependencies minimal and justified
- Audit dependencies regularly for security and size
- Use bundlers (Vite, Webpack, etc.) with proper optimization
- Implement code splitting for better performance

## Development & Testing Environment

### Local Development Server
- **Always serve on localhost** during development and testing
- Never test or screenshot from `file:///` URLs
- Use appropriate local server for your stack:
  - Node.js: `node serve.mjs` or similar
  - Python: `python -m http.server`
  - PHP: `php -S localhost:8000`
  - Or use framework dev servers (Vite, Next.js, etc.)
- Ensure server is running before taking screenshots or testing
- Do not start multiple instances of the same server

### Screenshot & Visual Testing
- Always screenshot from localhost, not file URLs
- Save screenshots to a designated folder (e.g., `temporary screenshots/`)
- Use incremental naming to avoid overwriting: `screenshot-1.png`, `screenshot-2.png`
- Compare screenshots against reference designs systematically
- Document differences with specific measurements and values
- Iterate until visual fidelity matches requirements

## File Structure & Organization

### Directory Structure
```
project/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── styles/         # Global styles and themes
│   ├── utils/          # Helper functions and utilities
│   ├── hooks/          # Custom React hooks (if applicable)
│   ├── services/       # API and external service integrations
│   └── assets/         # Images, fonts, icons
├── brand_assets/       # Brand logos, colors, style guides
├── public/             # Static files
├── temporary screenshots/ # Visual testing screenshots
└── tests/              # Test files
```

### File Naming Conventions
- Use **kebab-case** for file names: `user-profile.ts`, `navigation-menu.css`
- Components: Use **PascalCase** for component files: `UserProfile.tsx`, `NavigationMenu.tsx`
- Test files: Match source file with `.test` or `.spec` suffix: `user-profile.test.ts`
- Style files: Match component name: `UserProfile.module.css` or `user-profile.css`

## Code Style & Best Practices

### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Always include proper `<meta>` tags for SEO and social sharing
- Use `alt` attributes for all images
- Implement proper heading hierarchy (h1 → h6)
- Use `<button>` for actions, `<a>` for navigation
- Include `lang` attribute on `<html>` element

### CSS
- Use CSS custom properties (variables) for theming and brand colors
- Follow BEM methodology or CSS Modules for naming
- Implement mobile-first responsive design
- Use logical properties when appropriate (`inline-start` vs `left`)
- Avoid `!important` unless absolutely necessary
- **Never use `transition-all`** — specify exact properties to animate
- **Only animate `transform` and `opacity`** for performance
- Group related properties together
- Use rem/em units for typography, px for borders
- Implement CSS Grid and Flexbox for layouts
- Create custom shadows (layered, color-tinted) instead of default values
- Apply distinctive typography pairings (display/serif + clean sans)

### JavaScript/TypeScript
- Use `const` by default, `let` only when reassignment needed
- Prefer functional programming patterns and immutability
- Use async/await over promise chains
- Implement proper error handling with try/catch
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Avoid nested ternaries; use clear if/else statements
- Extract magic numbers into named constants
- Use descriptive variable and function names

### Component Guidelines
- Keep components small and focused (single responsibility)
- Prefer composition over inheritance
- Use props destructuring for clarity
- Implement TypeScript interfaces for props
- Document complex components with JSDoc comments
- Extract business logic into custom hooks or utilities
- Memoize expensive computations with useMemo/useCallback

## Performance Guidelines

### Loading Performance
- Lazy load images with `loading="lazy"` attribute
- Implement code splitting for routes and heavy components
- Use dynamic imports for non-critical code
- Optimize images (WebP, AVIF formats) with appropriate sizes
- Minimize and compress CSS/JS bundles
- Use CDN for static assets when appropriate
- Implement proper caching strategies

### Runtime Performance
- Avoid unnecessary re-renders (React.memo, useMemo, useCallback)
- Debounce/throttle expensive operations (scroll, resize handlers)
- Use Web Workers for heavy computations
- Implement virtual scrolling for long lists
- Minimize DOM manipulations
- Use CSS transforms for animations (GPU acceleration)

### Core Web Vitals
- Target LCP (Largest Contentful Paint) < 2.5s
- Target FID (First Input Delay) < 100ms
- Target CLS (Cumulative Layout Shift) < 0.1
- Use performance monitoring tools (Lighthouse, WebPageTest)

## Accessibility (a11y)

### Essential Requirements
- Maintain keyboard navigation for all interactive elements
- Provide focus indicators (don't remove outline without replacement)
- Use proper ARIA labels and roles when needed
- Ensure color contrast ratios meet WCAG AA standards (4.5:1 for text)
- Support screen readers with semantic HTML and ARIA
- Make all functionality available without mouse
- Test with keyboard only navigation
- Provide text alternatives for non-text content

### Testing
- Use axe DevTools or similar for automated testing
- Test with actual screen readers (NVDA, JAWS, VoiceOver)
- Validate keyboard navigation paths
- Check color contrast for all text

## SEO Best Practices

### On-Page SEO
- Use descriptive, keyword-rich titles (50-60 characters)
- Write compelling meta descriptions (150-160 characters)
- Implement proper heading hierarchy with keywords
- Use descriptive URLs (kebab-case, include keywords)
- Add structured data (JSON-LD) for rich results
- Optimize images with descriptive file names and alt text
- Create XML sitemap and robots.txt

### Technical SEO
- Ensure fast page load times (< 3s)
- Implement proper canonical URLs
- Use HTTPS everywhere
- Make site mobile-friendly (responsive design)
- Fix broken links and 404 errors
- Implement proper redirects (301 for permanent)
- Use semantic HTML for better crawling

## Testing Strategy

### Unit Tests
- Test individual functions and components
- Aim for 80%+ code coverage for critical paths
- Mock external dependencies
- Test edge cases and error conditions

### Integration Tests
- Test component interactions
- Verify API integrations
- Test user workflows

### End-to-End Tests
- Test critical user journeys
- Verify cross-browser compatibility
- Test responsive behavior on different devices

### Testing Tools
- Unit: Jest, Vitest, Testing Library
- E2E: Playwright, Cypress
- Visual: Chromatic, Percy

## Documentation Standards

### Code Documentation
- Use JSDoc for complex functions and components
- Document props and return types
- Explain "why" not "what" in comments
- Keep comments up-to-date with code changes

### README Requirements
- Project overview and purpose
- Setup and installation instructions
- Development workflow
- Build and deployment process
- Contributing guidelines
- Environment variables documentation

### Component Documentation
- Document props and their types
- Provide usage examples
- Document component variants and states
- Include accessibility considerations

## Security Guidelines

### General Security
- Sanitize user input to prevent XSS attacks
- Use Content Security Policy (CSP) headers
- Implement HTTPS everywhere
- Validate data on both client and server
- Don't expose sensitive data in client-side code
- Use environment variables for secrets
- Implement rate limiting for APIs
- Keep dependencies updated for security patches

### Authentication & Authorization
- Use secure session management
- Implement proper CORS policies
- Use httpOnly and secure flags for cookies
- Implement proper password hashing (server-side)
- Use OAuth/JWT for authentication when appropriate

## Version Control & Git

### Commit Messages
- Use conventional commits format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Keep first line under 72 characters
- Add detailed description for complex changes

### Branch Strategy
- Use feature branches for new work
- Keep main/master branch stable and deployable
- Use descriptive branch names: `feature/user-authentication`, `fix/navigation-bug`
- Delete branches after merging

### Pull Request Guidelines
- Write clear PR descriptions
- Reference related issues
- Ensure all tests pass
- Request reviews from relevant team members
- Keep PRs focused and reasonably sized

## Deployment

### Pre-Deployment Checklist
- Run all tests and linters
- Verify build succeeds
- Test in production-like environment
- Check performance metrics
- Verify all environment variables are set
- Review security headers

### Post-Deployment
- Monitor error tracking (Sentry, etc.)
- Check analytics for issues
- Verify critical user flows work
- Monitor performance metrics
- Have rollback plan ready

---

## Critical Reminders

### Non-Negotiable Rules
1. **Always invoke `frontend-design` skill** before writing frontend code
2. **Never use `transition-all`** in CSS
3. **Never use default Tailwind blue/indigo** as primary color
4. **Every interactive element** must have hover, focus-visible, and active states
5. **Always serve on localhost** during development — never from `file:///`
6. **Match reference designs exactly** — do not improve or add features
7. **Check `brand_assets/` folder** before designing — use real assets when available
8. **Do not use generic fonts** like Inter, Roboto, Arial, or system fonts
9. **Only animate `transform` and `opacity`** for performance
10. **Never use flat shadows** — use layered, color-tinted shadows

### Quality Standards
- Write production-grade, functional code
- Create visually striking and memorable designs
- Maintain a cohesive aesthetic point-of-view
- Refine every detail meticulously
- Implement proper accessibility (WCAG AA minimum)
- Optimize for Core Web Vitals
- Document complex code and components
- Test thoroughly before deployment

---

**Remember**: These rules ensure consistency, quality, and maintainability. Follow them unless there's a compelling, documented reason to deviate. The goal is to create distinctive, high-craft frontend experiences that avoid generic "AI slop" aesthetics.
