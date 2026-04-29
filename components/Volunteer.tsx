"use client";

import { volunteer } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function Volunteer() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="volunteer"
      ref={sectionRef}
      className="reveal bg-navy-800 py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Giving Back
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-white lg:text-3xl">
            Volunteer Work
          </h2>
        </div>

        <div className="space-y-8">
          {volunteer.map((entry, index) => (
            <div key={index} className="rounded-xl border-t-2 border-gold bg-navy-700/50 p-12">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gold" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-medium leading-snug text-white">{entry.role}</h3>
                    <p className="mt-1 font-sans text-sm font-light text-gold">{entry.organisation}</p>
                  </div>
                </div>
                <span className="inline-flex h-[26px] shrink-0 items-center rounded-full border border-white/10 bg-navy-700/60 px-3 font-mono text-xs tracking-wide text-slate-400">
                  {entry.period}
                </span>
              </div>

              <div className="my-6 h-px bg-white/8" />

              <ul className="space-y-4 max-w-prose">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="font-sans text-sm font-light leading-relaxed text-slate-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
