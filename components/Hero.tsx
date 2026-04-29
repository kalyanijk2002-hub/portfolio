"use client";

import { personal } from "@/data/resume";
import Container from "./layout/Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[max(100svh,700px)] flex-col items-start justify-center overflow-hidden bg-navy"
    >
      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(245,166,35,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gold glow — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/8 blur-3xl"
      />
      {/* Subtle green glow — top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-forest-600/40 blur-3xl"
      />

      <Container className="relative z-10 pt-16">
        <div className="max-w-prose">

          {/* Eyebrow chip */}
          <div className="mb-6">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-gold">
              Available for opportunities
            </span>
          </div>

          {/* Name — Cormorant Garamond 300, fluid */}
          <h1
            className="mb-4 font-display font-light leading-tight tracking-tight text-white"
            style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          >
            {personal.name}
          </h1>

          {/* Title */}
          <p className="mb-6 font-sans text-lg font-light leading-snug text-gold lg:text-xl">
            {personal.title}
          </p>

          {/* Tagline */}
          <p className="mb-10 font-sans text-base font-light leading-relaxed text-slate-300 lg:text-md">
            {personal.tagline}
          </p>

          {/* CTAs — both h-12 (48px) */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={personal.cvPath}
              download
              className="inline-flex h-12 min-w-40 items-center justify-center gap-2 rounded-full bg-gold px-6 font-sans text-sm font-medium uppercase tracking-wide text-navy shadow-lg shadow-gold/20 transition-all duration-200 hover:bg-gold-dark hover:scale-[1.02]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>

            {/* Ghost button — transparent, gold border + text */}
            <a
              href="#contact"
              className="inline-flex h-12 min-w-36 items-center justify-center rounded-full border border-gold/40 bg-transparent px-6 font-sans text-sm font-medium uppercase tracking-wide text-gold transition-all duration-200 hover:bg-gold/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-gold/40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-label="Scroll down">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
