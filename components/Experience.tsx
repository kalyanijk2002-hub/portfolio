"use client";

/*
 * Experience — collapsible accordion cards.
 * First card opens by default. Clicking the header row toggles the bullet list.
 * Chevron rotates 180° when expanded.
 */

import { useState } from "react";
import { experience } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function Experience() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  // First card open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="reveal bg-navy py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Work History
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-white lg:text-3xl">
            Experience
          </h2>
        </div>

        <div className="space-y-4">
          {experience.map((job, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className={[
                  "rounded-xl border-t-2 border-gold bg-navy-700/50 transition-shadow duration-200",
                  isOpen ? "shadow-lg shadow-black/30" : "",
                ].join(" ")}
              >
                {/* Accordion header — clickable */}
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-8 text-left"
                >
                  <div>
                    <h3 className="font-sans text-lg font-medium leading-snug text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-sans text-base font-medium text-gold">
                      {job.company}
                    </p>
                    <p className="mt-1 font-mono text-xs tracking-wide text-slate-500">
                      {job.location}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-3">
                    {/* Date badge */}
                    <span className="inline-flex h-[26px] items-center rounded-full border border-white/10 bg-navy-700/60 px-3 font-mono text-xs tracking-wide text-slate-400">
                      {job.period}
                    </span>

                    {/* Animated chevron */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={[
                        "h-4 w-4 text-gold transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {/* Collapsible body */}
                {isOpen && (
                  <div className="px-8 pb-8">
                    <div className="mb-6 h-px bg-white/8" />
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
                          <span className="font-sans text-sm font-light leading-relaxed text-slate-300">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
