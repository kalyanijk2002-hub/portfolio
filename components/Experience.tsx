"use client";

/*
 * Experience — work history cards.
 *
 * Card anatomy (spec §7):
 *   padding:        p-12  (48px — --space-7)
 *   border-radius:  rounded-xl
 *   border-top:     border-t-2 border-gold
 *
 * Internal order:
 *   Role label      mb-1  (4px)
 *   Company         mb-1  (4px)
 *   Meta/location   mb-6  (24px)
 *   Divider         mb-6  (24px)
 *   Bullet list     space-y-4
 */

import { experience } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function Experience() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="reveal bg-white py-16 sm:py-24 lg:py-32 dark:bg-navy-800"
    >
      <Container>
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Work History
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-navy dark:text-white lg:text-3xl">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <article
              key={index}
              className="rounded-xl border-t-2 border-gold bg-slate-50 p-12 dark:bg-navy-700/30"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-lg font-medium leading-snug text-navy dark:text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-sans text-base font-medium text-gold">
                    {job.company}
                  </p>
                  <p className="mt-1 font-mono text-xs tracking-wide text-navy-600 dark:text-slate-400">
                    {job.location}
                  </p>
                </div>

                {/* Date badge */}
                <span className="inline-flex h-[26px] shrink-0 items-center rounded-full border border-navy/15 bg-white px-3 font-mono text-xs tracking-wide text-navy-600 dark:border-white/10 dark:bg-navy-800 dark:text-slate-400">
                  {job.period}
                </span>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-navy/10 dark:bg-white/10" />

              {/* Bullets — max-w-prose so no line exceeds readable width */}
              <ul className="space-y-4 max-w-prose">
                {job.bullets.map((bullet, i) => (
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
                    <span className="font-sans text-sm font-light leading-relaxed text-navy-600 dark:text-slate-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
