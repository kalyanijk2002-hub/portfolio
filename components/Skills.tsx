"use client";

/*
 * Skills — grouped competency badges.
 *
 * Group header (spec §9):
 *   DM Sans 500, text-xs, uppercase, tracking-wider
 *   padding-left: pl-4 (16px)
 *   border-left:  border-l-2 border-gold
 *   margin-bottom: mb-4 (16px)
 *
 * Each tag (spec §9):
 *   h-[30px], px-4, inline-flex, items-center
 *   DM Mono 400, text-xs, tracking-wide
 *   white-space: nowrap
 *
 * Grid: 2 cols on sm+, gap-6 (32px) between cards.
 */

import { skills } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function Skills() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="reveal bg-slate-50 py-16 sm:py-24 lg:py-32 dark:bg-navy"
    >
      <Container>
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Expertise
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-navy dark:text-white lg:text-3xl">
            Skills
          </h2>
        </div>

        {/* Skill group grid — 2 cols on sm+, equal height via align-items stretch */}
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-xl border-t-2 border-gold bg-white p-8 dark:bg-navy-800"
            >
              {/* Group header — left gold border, DM Sans 500 */}
              <h3 className="mb-4 border-l-2 border-gold pl-4 font-sans text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-slate-400">
                {group}
              </h3>

              {/* Tags — flex-wrap, gap-2 */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex h-[30px] items-center whitespace-nowrap rounded-full border border-gold/25 bg-gold/5 px-4 font-mono text-xs tracking-wide text-gold-dark transition-transform duration-150 hover:scale-105 dark:text-gold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
