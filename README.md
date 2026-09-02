# Dalu — Portfolio

A minimalist, whitespace-driven personal portfolio for a multidisciplinary creator working across fullstack development, graphic design, and content creation.

**Built with React · TypeScript · Tailwind CSS · Vite**

<!-- **Live site:** [add your deployed URL here] -->

---

## About This Project

This portfolio moves away from a previous neo-brutalist design toward something quieter and more spacious — generous negative space, confident typography, and a restrained color palette. The goal was to let the work itself carry the page rather than the UI around it.

It presents three lanes as one identity rather than forcing a single generic title:

- **Build** — fullstack development (MERN+TypeScript)
- **Design** — graphic design under Dalu GraphiXX
- **Create** — content creation via Muny_memes

---

## Features

- Asymmetric hero section with animated stat counters
- Scroll-triggered reveal animations (IntersectionObserver-based, no external animation library required)
- Sticky nav that gains a border on scroll
- Responsive project grid with hover states
- Fully responsive layout — deliberate mobile spacing rules, not just scaled-down desktop spacing
- Respects `prefers-reduced-motion` for accessibility
- Zero backend — fully static, deployable anywhere

---

## Tech Stack

| Layer      | Tools                                     |
| ---------- | ----------------------------------------- |
| Framework  | React 18 + TypeScript                     |
| Build tool | Vite                                      |
| Styling    | Tailwind CSS + custom component classes   |
| Fonts      | DM Serif Display (headings), Inter (body) |
| Deployment | Vercel / Netlify (static hosting)         |

No backend, no database, no auth — this is a static content site. See [Architecture Notes](#architecture-notes) below for why, and what would change that.

---

## Project Structure

```
dalu-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Nav.tsx        — sticky nav, border-on-scroll
│   │   ├── Hero.tsx        — asymmetric hero + stats
│   │   ├── About.tsx       — bio + three-pillar framing
│   │   ├── Work.tsx        — project grid (edit PROJECTS array to update)
│   │   ├── Skills.tsx      — grouped skill list (edit SKILL_GROUPS to update)
│   │   ├── Contact.tsx     — contact links (edit CONTACT_LINES to update)
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useReveal.ts    — IntersectionObserver scroll reveal
│   │   └── useScrolled.ts  — tracks scroll position for nav border
│   ├── index.css           — Tailwind directives + custom component classes
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <your-repo-url>
cd dalu-portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

---

## Deployment

This is a static site — connect the repo to **Vercel** or **Netlify** and both will auto-detect the Vite config with zero setup required. Every push to `main` redeploys automatically.

---

## Customization Guide

| To change...                                           | Edit this file                                                         |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| Project cards (titles, descriptions, links, tech tags) | `src/components/Work.tsx` → `PROJECTS` array                           |
| Skills list                                            | `src/components/Skills.tsx` → `SKILL_GROUPS` array                     |
| Email / social / contact links                         | `src/components/Contact.tsx` → `CONTACT_LINES` array                   |
| Hero stats (years, projects shipped)                   | `src/components/Hero.tsx` → `STATS` array                              |
| Color palette                                          | `tailwind.config.js` → `theme.extend.colors`                           |
| Fonts                                                  | `index.html` (Google Fonts link) + `tailwind.config.js` → `fontFamily` |
| Page title / meta tags                                 | `index.html`                                                           |

---

## Architecture Notes

**Why no backend?** A portfolio is content, not an application — projects, bio, and contact links don't change per visitor and don't need to be stored anywhere. A static site covers all of it and is faster and cheaper to host.

**If a contact form is added later:** rather than standing up a backend, this project is set up to work well with a form-handling service like **Formspree**, **Resend**, or **EmailJS** — a few lines of frontend code, no server to maintain.

---

## Roadmap / Ideas

- [ ] Wire up a working contact form (Formspree/Resend)
- [ ] Add Open Graph + Twitter meta tags for social sharing previews
- [ ] Add a dark mode toggle (palette already defined with CSS variables in mind)
- [ ] Add case study pages per project instead of card-only summaries

---

## License

© 2026 Dalu. All rights reserved.

Built with React · TypeScript · Tailwind CSS · Vite.