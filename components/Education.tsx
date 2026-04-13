"use client";

/*
 * Education — engineering-grade vertical timeline (spec §8).
 *
 * Timeline container:  position relative, padding-left 64px (pl-16)
 * Vertical line:       absolute left-[11px], top-2, bottom-0, 1px, border-subtle
 * Node:                absolute left-0 top-2, 24×24px circle, gold bg, 3px white border
 * Item gap:            mb-24 (96px — --space-9)
 * Date badge:          inline-flex, DM Mono xs, pill border
 */

import { education } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function Education() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="education"
      ref={sectionRef}
      className="reveal bg-slate-50 py-16 sm:py-24 lg:py-32 dark:bg-navy"
    >
      <Container>
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Academic Background
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-navy dark:text-white lg:text-3xl">
            Education
          </h2>
        </div>

        {/* Timeline — 64px left-padding, 1px absolute vertical line */}
        <ol className="relative pl-16">
          {/* Vertical line: left-[11px] centres it behind the 24px node */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[11px] top-2 w-px bg-navy/10 dark:bg-white/10"
          />

          {education.map((edu, index) => (
            <li
              key={index}
              className={index < education.length - 1 ? "mb-24" : ""}
            >
              {/* Timeline node — 24×24px, gold, 3px white border, gold ring */}
              <span
                aria-hidden="true"
                className={[
                  "absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-[3px]",
                  edu.current
                    ? "border-white bg-gold shadow-[0_0_0_1px_#C9A84C] dark:border-navy"
                    : "border-white bg-navy-700 shadow-[0_0_0_1px_rgba(201,168,76,0.5)] dark:border-navy dark:bg-navy-700",
                ].join(" ")}
              />

              {/* Date badge */}
              <div className="mb-3">
                <span className="inline-flex h-[26px] items-center rounded-full border border-navy/15 bg-white px-3 font-mono text-xs tracking-wide text-navy-600 dark:border-white/10 dark:bg-navy-800 dark:text-slate-400">
                  {edu.period}
                  {edu.current && (
                    <span className="ml-2 font-sans text-emerald-500">· In Progress</span>
                  )}
                </span>
              </div>

              {/* Card */}
              <div className="rounded-xl border-t-2 border-gold bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gold dark:bg-navy-800">
                <h3 className="font-sans text-lg font-medium leading-snug text-navy dark:text-white">
                  {edu.institution}
                </h3>
                <p className="mt-1 font-sans text-sm font-medium text-gold">
                  {edu.degree}
                </p>
                <p className="mt-1 font-mono text-xs tracking-wide text-navy-600 dark:text-slate-400">
                  {edu.location}
                </p>

                {edu.grade && (
                  <p className="mt-3 font-sans text-sm text-navy dark:text-slate-200">
                    Grade:{" "}
                    <span className="font-medium text-gold">{edu.grade}</span>
                  </p>
                )}

                {edu.bullets && edu.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {edu.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
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
                        <span className="max-w-prose font-sans text-sm font-light leading-relaxed text-navy-600 dark:text-slate-300">
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
      </Container>
    </section>
  );
}
