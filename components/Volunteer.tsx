"use client";

// Volunteer — community service / volunteer experience section.

import { volunteer } from "@/data/resume";
import { useReveal } from "./useReveal";

export default function Volunteer() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="volunteer"
      ref={sectionRef}
      className="reveal bg-slate-50 py-20 dark:bg-navy"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Giving Back
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            Volunteer Work
          </h2>
          <div className="section-rule mt-4" />
        </div>

        {/* Volunteer cards */}
        <div className="space-y-6">
          {volunteer.map((entry, index) => (
            <div
              key={index}
              className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-navy-800"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  {/* Heart icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-gold"
                      aria-hidden="true"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-navy dark:text-white">
                      {entry.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-gold">
                      {entry.organisation}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark dark:text-gold">
                  {entry.period}
                </span>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-navy/10 dark:bg-white/10" />

              {/* Bullet points */}
              <ul className="space-y-3">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
