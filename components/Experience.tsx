"use client";

// Experience — cards for each work experience entry.

import { experience } from "@/data/resume";
import { useReveal } from "./useReveal";

export default function Experience() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="reveal bg-white py-20 dark:bg-navy-800"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Work History
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            Experience
          </h2>
          <div className="section-rule mt-4" />
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {experience.map((job, index) => (
            <article
              key={index}
              className="rounded-2xl border border-navy/10 bg-slate-50 p-8 shadow-sm dark:border-white/10 dark:bg-navy-700/30"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-navy dark:text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-base font-medium text-gold">
                    {job.company}
                  </p>
                  <p className="mt-0.5 text-sm text-navy-600 dark:text-slate-400">
                    {job.location}
                  </p>
                </div>
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark dark:text-gold">
                  {job.period}
                </span>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-navy/10 dark:bg-white/10" />

              {/* Bullet points */}
              <ul className="space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Gold chevron bullet */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-sm leading-relaxed text-navy-600 dark:text-slate-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
