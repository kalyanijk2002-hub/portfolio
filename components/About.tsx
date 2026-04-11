"use client";

// About — professional summary, quick facts, languages, and interests.

import { about, additional, personal } from "@/data/resume";
import { useReveal } from "./useReveal";

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="reveal bg-white py-20 dark:bg-navy-800"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Who I Am
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="section-rule mt-4" />
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Professional profile paragraphs */}
          <div className="space-y-4 md:col-span-2">
            {about.paragraphs.map((para, i) => (
              <p
                key={i}
                className="leading-relaxed text-navy-600 dark:text-slate-300"
              >
                {para}
              </p>
            ))}

            {/* Languages */}
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy dark:text-white">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {additional.languages.map(({ language, level }) => (
                  <span
                    key={language}
                    title={level}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold-dark dark:text-gold"
                  >
                    {language}
                    <span className="text-navy-600/60 dark:text-slate-400">
                      · {level}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="mt-4">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-navy dark:text-white">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {additional.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-block rounded-full border border-navy/10 bg-slate-50 px-3 py-1 text-xs font-medium text-navy-600 dark:border-white/10 dark:bg-navy-700/40 dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick-facts card */}
          <div className="rounded-2xl border border-navy/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-navy-700/40">
            <h3 className="mb-4 font-[var(--font-playfair)] text-lg font-semibold text-navy dark:text-white">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden="true">🎓</span>
                <span className="text-navy-600 dark:text-slate-300">
                  MSc Finance &amp; Management — Strathclyde
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden="true">📍</span>
                <span className="text-navy-600 dark:text-slate-300">
                  Glasgow, UK
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden="true">💼</span>
                <span className="text-navy-600 dark:text-slate-300">
                  Aspiring Investment Professional
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden="true">✉️</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="break-all text-gold underline underline-offset-2 transition-colors hover:text-gold-dark"
                >
                  {personal.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden="true">📞</span>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="text-navy-600 transition-colors hover:text-gold dark:text-slate-300"
                >
                  {personal.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5" aria-hidden="true">🇬🇧</span>
                <span className="text-navy-600 dark:text-slate-300">
                  {additional.rightToWork}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
