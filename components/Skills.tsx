"use client";

import { skills } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function Skills() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="reveal bg-navy-800 py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Expertise
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-white lg:text-3xl">
            Skills &amp; Tools
          </h2>
        </div>

        {/* 2-col grid — equal height */}
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-xl border-t-2 border-gold bg-navy-700/50 p-8"
            >
              {/* Group header — left gold border */}
              <h3 className="mb-4 border-l-2 border-gold pl-4 font-sans text-xs font-medium uppercase tracking-wider text-slate-400">
                {group}
              </h3>

              {/* Skill tags — gold bg/border/text per spec */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex h-[30px] items-center whitespace-nowrap rounded-full border border-gold/30 bg-gold/10 px-4 font-mono text-xs tracking-wide text-gold transition-transform duration-150 hover:scale-105"
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
