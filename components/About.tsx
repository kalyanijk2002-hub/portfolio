"use client";

import { about, additional, personal } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="reveal bg-navy-800 py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Who I Am
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-white lg:text-3xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Prose */}
          <div>
            <div className="space-y-5 max-w-prose">
              {about.paragraphs.map((para, i) => (
                <p key={i} className="font-sans text-base font-light leading-relaxed text-slate-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-slate-500">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {additional.languages.map(({ language, level }) => (
                  <span
                    key={language}
                    className="inline-flex h-[30px] items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-4 font-mono text-xs tracking-wide text-gold"
                  >
                    {language}
                    <span className="text-slate-500">· {level}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="mt-6">
              <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-slate-500">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {additional.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex h-[30px] items-center rounded-full border border-white/8 bg-navy-700/60 px-4 font-mono text-xs tracking-wide text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick facts card */}
          <div className="rounded-xl border border-white/8 bg-navy-700/50 p-8">
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
      </Container>
    </section>
  );
}
