"use client";

// Skills — grouped pill badges organised by category.

import { skills } from "@/data/resume";
import { useReveal } from "./useReveal";

// One colour per group index for visual variety
const groupColours = [
  "border-gold/40 bg-gold/5 text-gold-dark dark:text-gold",
  "border-teal-500/40 bg-teal-500/5 text-teal-700 dark:text-teal-400",
  "border-violet-500/40 bg-violet-500/5 text-violet-700 dark:text-violet-400",
  "border-rose-500/40 bg-rose-500/5 text-rose-700 dark:text-rose-400",
];

export default function Skills() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="reveal bg-slate-50 py-20 dark:bg-navy"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Expertise
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            Skills
          </h2>
          <div className="section-rule mt-4" />
        </div>

        {/* Skill groups grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items], groupIndex) => (
            <div
              key={group}
              className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-800"
            >
              <h3 className="mb-4 font-[var(--font-playfair)] text-base font-semibold text-navy dark:text-white">
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-block rounded-full border px-3 py-1 text-xs font-medium transition-transform hover:scale-105 ${
                      groupColours[groupIndex % groupColours.length]
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
