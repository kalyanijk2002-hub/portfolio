"use client";

/*
 * Certifications — professional qualification cards.
 *
 * Card anatomy (spec §7):
 *   padding:     p-12 (48px)
 *   border-top:  border-t-2 border-gold
 *   radius:      rounded-xl
 *
 * Internal order (top → bottom):
 *   Title (h3, DM Sans 500, text-lg)  mb-1
 *   Issuer (DM Sans 400, text-sm)     mb-1
 *   Date (DM Mono, text-xs)           mb-5
 *   Description (body)                leading-relaxed
 *   Badge row                         mt-6
 */

import { certifications } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function Certifications() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="reveal bg-white py-16 sm:py-24 lg:py-32 dark:bg-navy-800"
    >
      <Container>
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Qualifications
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-navy dark:text-white lg:text-3xl">
            Certifications
          </h2>
        </div>

        {/* 2-col grid — equal height, gap-6 */}
        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-xl border-t-2 border-gold bg-slate-50 p-8 transition-shadow duration-200 hover:shadow-md dark:bg-navy-700/30"
            >
              {/* Title */}
              <h3 className="font-sans text-lg font-medium leading-snug text-navy dark:text-white">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="mt-1 font-sans text-sm font-light text-gold">
                {cert.issuer}
              </p>

              {/* Date — only rendered if present */}
              {cert.date && (
                <p className="mt-1 font-mono text-xs tracking-wide text-navy-600 dark:text-slate-400">
                  {cert.date}
                </p>
              )}

              {/* Divider */}
              <div className="my-5 h-px bg-navy/10 dark:bg-white/10" />

              {/* Description — max-w-prose capped inside grid cell */}
              <p className="grow font-sans text-sm font-light leading-relaxed text-navy-600 dark:text-slate-300">
                {cert.description}
              </p>

              {/* Badge row */}
              <div className="mt-6 flex items-center gap-1.5 font-mono text-xs tracking-wide text-gold">
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
      </Container>
    </section>
  );
}
