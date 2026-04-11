# Kalyani Krishnan — Personal Portfolio

A clean, modern, single-page portfolio website built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and deployed via **Vercel**.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 16 (App Router) | React framework, routing, font optimisation |
| Tailwind CSS v4 | Utility-first styling (configured via CSS, no config file) |
| TypeScript | Type safety |
| Vercel | Zero-config deployment |

---

## Project Structure

```
kalyani-portfolio/
├── app/
│   ├── layout.tsx        # Root layout — fonts, metadata, dark-mode script
│   ├── page.tsx          # Single-page composition of all sections
│   └── globals.css       # Tailwind v4 theme tokens, animations, base styles
├── components/
│   ├── Navbar.tsx        # Sticky nav with hamburger menu + dark-mode toggle
│   ├── Hero.tsx          # Full-screen opening section
│   ├── About.tsx         # Professional summary + quick facts
│   ├── Education.tsx     # Timeline of academic qualifications
│   ├── Experience.tsx    # Work history cards
│   ├── Skills.tsx        # Grouped skill badges
│   ├── Certifications.tsx# Professional certificates
│   ├── Volunteer.tsx     # Community service
│   ├── Contact.tsx       # mailto-powered form + direct links
│   ├── Footer.tsx        # Copyright strip
│   ├── ThemeToggle.tsx   # Sun/moon dark-mode toggle button
│   └── useReveal.ts      # IntersectionObserver scroll-reveal hook
├── data/
│   └── resume.ts         # ← EDIT THIS FILE to update all content
└── public/
    └── Kalyani_Krishnan_CV.pdf   # Replace with your actual CV
```

---

## Updating Content

**All CV data lives in a single file: `data/resume.ts`.**

You can update your name, contact details, education, experience, skills, certifications, and volunteer work without touching any React component.

---

## Local Development

**Prerequisites:** Node.js 18+ and npm (or pnpm / yarn / bun).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Before Going Live — Checklist

- [ ] Replace `public/Kalyani_Krishnan_CV.pdf` with your actual CV file
- [ ] Update `personal.linkedin` in `data/resume.ts` with your real LinkedIn URL
- [ ] Add a real `public/og-image.png` (1200×630 px) for social sharing previews
- [ ] Replace the placeholder `public/favicon.ico` with your own favicon
- [ ] Update the `url` field in `app/layout.tsx` metadata with your deployed domain
- [ ] Update the `openGraph.url` in `app/layout.tsx` to match your Vercel URL

---

## Deploying to Vercel

### Option A — Vercel CLI (recommended)

```bash
# Install the CLI globally (one-time)
npm install -g vercel

# Deploy from the project root
vercel
```

Follow the prompts. Vercel will detect Next.js automatically.

### Option B — Vercel Dashboard (no CLI)

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Click **"Import Git Repository"** and select your repo.
4. Leave all settings as defaults — Vercel auto-detects Next.js.
5. Click **Deploy**.

Every subsequent push to `main` will trigger an automatic redeployment.

---

## Dark Mode

Dark mode is toggled via the sun/moon button in the navigation bar. The user's preference is stored in `localStorage` and applied immediately on page load (no flash of incorrect theme).

---

## Customising the Colour Palette

Open `app/globals.css` and edit the `@theme` block:

```css
@theme {
  --color-navy: #0F172A;   /* primary background */
  --color-gold:  #F59E0B;  /* accent colour */
  /* add more tokens here */
}
```

---

## Adding / Removing Sections

1. Create a new component in `components/`.
2. Import it in `app/page.tsx`.
3. Add a nav link to `navLinks` in `data/resume.ts`.

---

## License

This project is for personal use. Feel free to adapt the code for your own portfolio.
