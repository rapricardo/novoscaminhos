# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **Associação Novos Caminhos**, a Brazilian nonprofit organization providing legal access to medicinal cannabis therapy. The project is in Portuguese (pt-BR).

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (port 4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Astro 5** - Static site generator with islands architecture
- **React 19** - Only for interactive components (Navbar)
- **Tailwind CSS 3** - Utility-first styling
- **Lucide React** - Icons (used in Navbar React component)
- Fonts: Inter (sans-serif) + Playfair Display (serif)

## Architecture

```
src/
├── layouts/
│   └── Layout.astro      # Base layout (head, fonts, Navbar)
├── components/
│   ├── Navbar.tsx        # REACT (client:load) - scroll detection + mobile menu
│   ├── Hero.astro        # STATIC
│   ├── About.astro       # STATIC
│   ├── Conditions.astro  # STATIC
│   ├── Steps.astro       # STATIC
│   ├── Testimonials.astro# STATIC
│   ├── Footer.astro      # STATIC
│   └── BeeIcon.astro     # STATIC (SVG)
├── pages/
│   └── index.astro       # Main page
└── styles/
    └── global.css        # Tailwind directives + animations
```

**Islands Architecture**: Only `Navbar.tsx` ships JavaScript to the client (via `client:load`). All other components render as static HTML.

## Brand Colors (tailwind.config.mjs)

- `brand-green`: #2F5233 (primary - deep forest green)
- `brand-sage`: #94A89A (soft sage)
- `brand-sand`: #F7F5F0 (background)
- `brand-gold`: #D4AF37 (accent)

## Content Reference

The `referencias/` folder contains:
- `prototipo/` - Original React prototype (reference only)
- `lp 1.md`, `lp 2.md`, `lp 3.md` - Landing page content specs with copy and compliance notes

## Important Context

- This is a **nonprofit association** (not a commercial entity) - language must reflect this
- All content must comply with ANVISA regulations (RDC 660/2022)
- Use "terapia canabinoide" or "terapia integrativa", avoid explicit drug references
- Ad-safe language is critical (see lp files for compliant copy)
