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
          backgroundImage: "radial-gradient(rgba(16,185,129,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gold glow — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/8 blur-3xl"
      />
      {/* Subtle blue glow — top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-navy-600/60 blur-3xl"
      />

      <Container className="relative z-10 pt-16">
        <div className="max-w-prose">

          {/* Eyebrow chip */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-gold">
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

        </div>
      </Container>

    </section>
  );
}
