"use client";

// Certifications — list of professional qualifications.

import { certifications } from "@/data/resume";
import { useReveal } from "./useReveal";

export default function Certifications() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="reveal bg-white py-20 dark:bg-navy-800"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Qualifications
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <div className="section-rule mt-4" />
        </div>

        {/* Certification cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-navy-700/30"
            >
              {/* Gold accent strip */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gold transition-all group-hover:w-1.5"
              />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-[var(--font-playfair)] text-base font-semibold text-navy dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {cert.issuer}
                  </p>
                </div>
                {cert.date && (
                  <span className="shrink-0 text-xs text-navy-600 dark:text-slate-400">
                    {cert.date}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-slate-300">
                {cert.description}
              </p>

              {/* Badge icon */}
              <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
