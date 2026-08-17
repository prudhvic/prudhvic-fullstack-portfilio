# Copilot Instructions for Prudhvi's Full Stack Portfolio

## Build & Run Commands

```bash
# Development server (with hot-reload)
npm run dev

# Production build
npm run build

# Start production server (after build)
npm start

# Lint code
npm run lint
```

**Notes:**
- Dev server runs on `http://localhost:3000` by default
- No test suite is currently configured; add tests before production deployment
- ESLint is configured with Next.js core web vitals and TypeScript support

## Project Architecture

### Tech Stack
- **Framework:** Next.js 16.2.9 (with App Router)
- **UI Library:** React 19.2.4 (client components)
- **Styling:** Tailwind CSS 4 + PostCSS
- **Animations:** Framer Motion 12.40.0
- **Icons:** Lucide React 1.21.0
- **Language:** TypeScript 5 (strict mode)

### Folder Structure
```
app/                    # Next.js App Router (not using src/ folder)
├── layout.tsx          # Root layout with metadata & fonts
├── page.tsx            # Home page (imports all sections)
└── globals.css         # Global styles & Tailwind directives

components/             # Reusable React components
├── About.tsx
├── Contact.tsx
├── Experience.tsx
├── Footer.tsx
├── Hero.tsx            # Hero section with Framer Motion animation
├── Navbar.tsx
├── Projects.tsx
├── Skills.tsx
└── [add new components here]

public/                 # Static assets
```

### Design Pattern
- **Single-page portfolio** imported as sections in `app/page.tsx`
- Components use **`"use client"`** directive for client-side interactivity (required for Framer Motion animations)
- Layout uses semantic HTML structure: `<section>` elements with Tailwind classes
- Geist font from Next.js is pre-configured (sans & mono variants)

### Styling Conventions
- Tailwind CSS for all styling (utility-first approach)
- Dark theme by default: `body` has `bg-black text-white`
- Common patterns:
  - `min-h-screen flex items-center justify-center` for full-screen sections
  - `px-6` for horizontal padding on mobile
  - `text-gray-400` / `text-gray-500` for secondary text
  - Framer Motion for animations (see Hero.tsx)

## Key Conventions

1. **Component Structure:** Each component is a separate file in `components/` and imported in `app/page.tsx`
2. **Client Components:** Use `"use client"` at the top of files using Framer Motion or hooks
3. **TypeScript:** Strict mode enabled; always type function parameters and return types
4. **Path Alias:** `@/*` points to `./src/*` in tsconfig, but project uses `app/` and `components/` at root level (not under src)
5. **Font Optimization:** Next.js Font Geist is already configured; no additional font imports needed
6. **Metadata:** Title and description set in `app/layout.tsx`; update as needed

## Important Notes

- **Next.js 16:** This version has breaking changes from earlier Next.js versions. Refer to `node_modules/next/dist/docs/` before making significant changes
- **ESLint v9:** Uses flat config format (`eslint.config.mjs`), not `.eslintrc`
- **Security Vulnerabilities:** 7 vulnerabilities detected on `npm i` (1 moderate, 6 high). Run `npm audit` to review; resolve before production
- **Install Scripts:** `sharp` and `unrs-resolver` have post-install scripts; review if changing dependencies

## Common Tasks

### Adding a New Section/Component
1. Create file in `components/NewSection.tsx`
2. Add `"use client"` directive if using hooks or animations
3. Import in `app/page.tsx` and add to JSX
4. Add navigation link in `Navbar.tsx` if needed

### Updating Styling
- Tailwind CSS is the only styling system; use Tailwind classes
- Global styles in `app/globals.css`
- Component-scoped styles: use Tailwind classes directly in JSX

### Deploying
- Build with `npm run build` (verifies TypeScript and ESLint)
- Resolve any TS/lint errors before deployment
- Optimized for Vercel (Next.js creator's platform)
