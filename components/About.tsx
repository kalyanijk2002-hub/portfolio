"use client";

import { about, additional, personal, skills } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="reveal bg-navy py-16 sm:py-24 lg:py-32"
    >
      <Container>
        {/* Grid: left has header + prose, right has Quick Facts — both start at same top */}
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">

          {/* Left — header + prose */}
          <div>
            <div className="mb-12">
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
                Who I Am
              </p>
              <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-white lg:text-3xl">
                About Me
              </h2>
            </div>

            <div className="space-y-5 max-w-prose">
              {about.paragraphs.map((para, i) => (
                <p key={i} className="font-sans text-base font-light leading-relaxed text-slate-300">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right — quick facts */}
          <div className="rounded-xl bg-navy-700/50 p-8">
            <h3 className="mb-6 font-display text-lg font-light tracking-tight text-white">
              Quick Facts
            </h3>
            <ul className="space-y-4">
              {[
                { icon: "🎓", text: "MSc Finance & Management — Strathclyde" },
                { icon: "📍", text: "Glasgow, UK" },
                { icon: "💼", text: "Aspiring Investment Professional" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" aria-hidden="true">{icon}</span>
                  <span className="font-sans text-sm font-light leading-normal text-slate-300">{text}</span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0" aria-hidden="true">✉️</span>
                <a href={`mailto:${personal.email}`} className="break-all font-sans text-sm font-light text-gold underline-offset-2 transition-colors duration-200 hover:text-gold-dark hover:underline">
                  {personal.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0" aria-hidden="true">📞</span>
                <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="font-sans text-sm font-light text-slate-300 transition-colors duration-200 hover:text-gold">
                  {personal.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0" aria-hidden="true">🇬🇧</span>
                <span className="font-sans text-sm font-light text-slate-300">{additional.rightToWork}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills — full width below */}
        <div className="mt-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Expertise
          </p>
          <h3 className="mb-8 font-display text-xl font-light leading-snug tracking-tight text-white">
            Skills &amp; Tools
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-xl bg-navy-700/50 p-6">
                {/* Group header */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-6 bg-gold" aria-hidden="true" />
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {group}
                  </h4>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-gold/10 px-3 py-1.5 font-sans text-sm font-light text-gold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
