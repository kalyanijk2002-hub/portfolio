"use client";

import { useState } from "react";
import { experience, volunteer } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

const Chevron = ({ open }: { open: boolean }) => (
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
      open ? "rotate-180" : "rotate-0",
    ].join(" ")}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const BulletList = ({ bullets }: { bullets: string[] }) => (
  <ul className="space-y-4 max-w-prose">
    {bullets.map((bullet, i) => (
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
);

export default function Experience() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const [openExp, setOpenExp] = useState<number | null>(null);
  const [openVol, setOpenVol] = useState<number | null>(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="reveal bg-navy py-16 sm:py-24 lg:py-32"
    >
      <Container>

        {/* ── Work History ────────────────────────────────────── */}
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
            const isOpen = openExp === index;
            return (
              <article
                key={index}
                className={["rounded-xl bg-navy-700/50 transition-shadow duration-200", isOpen ? "shadow-lg shadow-black/30" : ""].join(" ")}
              >
                <button
                  onClick={() => setOpenExp((p) => (p === index ? null : index))}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-8 text-left"
                >
                  <div>
                    <h3 className="font-sans text-lg font-medium leading-snug text-white">{job.role}</h3>
                    <p className="mt-1 font-sans text-base font-medium text-gold">{job.company}</p>
                    <p className="mt-1 font-mono text-xs tracking-wide text-slate-500">{job.location}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-3">
                    <span className="inline-flex h-[26px] items-center rounded-full bg-navy-700/60 px-3 font-mono text-xs tracking-wide text-slate-400">
                      {job.period}
                    </span>
                    <Chevron open={isOpen} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-8">
                    <BulletList bullets={job.bullets} />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* ── Volunteer Work ──────────────────────────────────── */}
        <div className="mt-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Giving Back
          </p>
          <h3 className="mb-8 font-display text-xl font-light leading-snug tracking-tight text-white">
            Volunteer Work
          </h3>

          <div className="space-y-4">
            {volunteer.map((entry, index) => {
              const isOpen = openVol === index;
              return (
                <article
                  key={index}
                  className={["rounded-xl bg-navy-700/50 transition-shadow duration-200", isOpen ? "shadow-lg shadow-black/30" : ""].join(" ")}
                >
                  <button
                    onClick={() => setOpenVol((p) => (p === index ? null : index))}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 p-8 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gold" aria-hidden="true">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-sans text-base font-medium leading-snug text-white">{entry.role}</h4>
                        <p className="mt-0.5 font-sans text-sm font-light text-gold">{entry.organisation}</p>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-3">
                      <span className="inline-flex h-[26px] items-center rounded-full bg-navy-700/60 px-3 font-mono text-xs tracking-wide text-slate-400">
                        {entry.period}
                      </span>
                      <Chevron open={isOpen} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-8 pb-8">
                      <BulletList bullets={entry.bullets} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
}
