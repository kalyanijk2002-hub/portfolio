"use client";

/*
 * Hero — full-viewport opening section.
 *
 * Height: min(100svh, 700px minimum).
 * Content: true vertical centre via flex justify-center.
 * Layout: text left-aligned; single column on mobile, preserves left-align on desktop.
 *
 * Vertical gap stack (strict, from spec §6):
 *   Role chip          mb-6  (24px — --space-5)
 *   Hero name          mb-4  (16px — --space-4)
 *   Title subtitle     mb-6  (24px — --space-5)
 *   Tagline            mb-8  (32px — --space-6)
 *   Button row         mb-0
 *
 * Buttons: both h-12 (48px), gap-4 (16px) between.
 * Scroll indicator: absolute bottom-12, horizontally centred.
 */

import { personal } from "@/data/resume";
import Container from "./layout/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[max(100svh,700px)] flex-col items-start justify-center overflow-hidden bg-navy"
    >
      {/* Decorative dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(201,168,76,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial glow — centred behind text block */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
      />

      <Container className="relative z-10 pt-16">
        {/* ── Left column — max 680px to prevent orphaned text ── */}
        <div className="max-w-prose">

          {/* Role chip — eyebrow label */}
          <div className="mb-6">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-gold">
              Available for opportunities
            </span>
          </div>

          {/* Hero name — Cormorant Garamond 300, fluid size */}
          <h1
            className="mb-4 font-display font-light leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          >
            {personal.name}
          </h1>

          {/* Title subtitle */}
          <p className="mb-6 font-sans text-lg font-light leading-snug text-gold lg:text-xl">
            {personal.title}
          </p>

          {/* Tagline — capped at prose width, never orphans */}
          <p className="mb-8 font-sans text-base font-light leading-relaxed text-slate-300 lg:text-md">
            {personal.tagline}
          </p>

          {/* CTA button row — both 48px tall, gap-4 */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={personal.cvPath}
              download
              className="inline-flex h-12 min-w-40 items-center justify-center gap-2 rounded-full bg-gold px-6 font-sans text-sm font-medium uppercase tracking-wide text-navy shadow-lg shadow-gold/20 transition-all duration-200 hover:bg-gold-dark hover:shadow-gold/30 hover:scale-[1.02]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 min-w-36 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 font-sans text-sm font-medium uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-200 hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>

      {/* Scroll indicator — absolute, horizontally centred */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-label="Scroll down"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
