"use client";

// Education — vertical timeline of academic qualifications.

import { education } from "@/data/resume";
import { useReveal } from "./useReveal";

export default function Education() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="education"
      ref={sectionRef}
      className="reveal bg-slate-50 py-20 dark:bg-navy"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Academic Background
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            Education
          </h2>
          <div className="section-rule mt-4" />
        </div>

        {/* Timeline */}
        <ol className="relative border-l-2 border-gold/30 pl-8">
          {education.map((edu, index) => (
            <li key={index} className="mb-10 last:mb-0">
              {/* Timeline dot */}
              <span
                className={`absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                  edu.current
                    ? "border-gold bg-gold"
                    : "border-gold/60 bg-white dark:bg-navy"
                }`}
                aria-hidden="true"
              />

              {/* Card */}
              <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-navy-800">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-navy dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-gold">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark dark:text-gold">
                      {edu.period}
                    </span>
                    {edu.current && (
                      <p className="mt-1 text-xs font-medium text-emerald-500">
                        ● In Progress
                      </p>
                    )}
                  </div>
                </div>

                <p className="mt-1 text-sm text-navy-600 dark:text-slate-400">
                  {edu.location}
                </p>

                {edu.grade && (
                  <p className="mt-2 text-sm font-medium text-navy dark:text-slate-200">
                    Grade:{" "}
                    <span className="font-semibold text-gold">{edu.grade}</span>
                  </p>
                )}

                {/* Bullet points from CV */}
                {edu.bullets && edu.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {edu.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
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
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
