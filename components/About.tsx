"use client";

/*
 * About — professional summary, quick facts, languages, and interests.
 *
 * Section anatomy (§3):
 *   py-16 sm:py-24 lg:py-32  (--space-8/9/10)
 *   Label   mb-3  (12px)
 *   Heading mb-6  (24px)
 *   Content gap-8 (32px) between columns
 */

import { about, additional, personal } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="reveal bg-white py-16 sm:py-24 lg:py-32 dark:bg-navy-800"
    >
      <Container>
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Who I Am
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-navy dark:text-white lg:text-3xl">
            About Me
          </h2>
        </div>

        {/* Content grid — 2/3 prose + 1/3 sidebar */}
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">

          {/* Left — prose paragraphs, languages, interests */}
          <div>
            <div className="space-y-5 max-w-prose">
              {about.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base font-light leading-relaxed text-navy-600 dark:text-slate-300"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-navy-700 dark:text-slate-400">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {additional.languages.map(({ language, level }) => (
                  <span
                    key={language}
                    className="inline-flex h-[30px] items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-4 font-mono text-xs tracking-wide text-gold-dark dark:text-gold"
                  >
                    {language}
                    <span className="text-navy-600/50 dark:text-slate-500">
                      · {level}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="mt-6">
              <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-navy-700 dark:text-slate-400">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {additional.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex h-[30px] items-center rounded-full border border-navy/10 bg-slate-50 px-4 font-mono text-xs tracking-wide text-navy-600 dark:border-white/10 dark:bg-navy-700/40 dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — quick-facts card */}
          <div className="rounded-xl border border-navy/10 bg-slate-50 p-8 dark:border-white/10 dark:bg-navy-700/30">
            <h3 className="mb-6 font-display text-lg font-light tracking-tight text-navy dark:text-white">
              Quick Facts
            </h3>
            <ul className="space-y-4">
              {[
                { icon: "🎓", text: "MSc Finance & Management — Strathclyde" },
                { icon: "📍", text: "Glasgow, UK" },
                { icon: "💼", text: "Aspiring Investment Professional" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-base" aria-hidden="true">{icon}</span>
                  <span className="font-sans text-sm font-light leading-normal text-navy-600 dark:text-slate-300">
                    {text}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-base" aria-hidden="true">✉️</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="break-all font-sans text-sm font-light leading-normal text-gold underline-offset-2 transition-colors duration-200 hover:text-gold-dark hover:underline"
                >
                  {personal.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-base" aria-hidden="true">📞</span>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="font-sans text-sm font-light leading-normal text-navy-600 transition-colors duration-200 hover:text-gold dark:text-slate-300"
                >
                  {personal.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-base" aria-hidden="true">🇬🇧</span>
                <span className="font-sans text-sm font-light leading-normal text-navy-600 dark:text-slate-300">
                  {additional.rightToWork}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
