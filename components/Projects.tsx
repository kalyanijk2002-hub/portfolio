"use client";

import { projects } from "@/data/resume";
import { useReveal } from "./useReveal";
import Container from "./layout/Container";

export default function Projects() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="reveal bg-navy-800 py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Work & Research
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-white lg:text-3xl">
            Projects & Case Studies
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col rounded-xl border-t-2 border-gold bg-navy-700/50 p-8 transition-shadow duration-200 hover:shadow-lg hover:shadow-black/30"
            >
              {/* Header */}
              <div className="mb-6 flex items-start justify-between gap-3">
                <span
                  className={[
                    "inline-flex h-[22px] items-center rounded-full px-2.5 font-mono text-xs tracking-wide",
                    project.status === "Professional"
                      ? "bg-gold/15 text-gold"
                      : "border border-white/10 bg-navy-700/60 text-slate-400",
                  ].join(" ")}
                >
                  {project.status}
                </span>
                <span className="shrink-0 font-mono text-xs tracking-wide text-slate-500">
                  {project.period}
                </span>
              </div>

              {/* Title + category */}
              <h3 className="font-sans text-lg font-medium leading-snug text-white">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-gold">
                {project.category}
              </p>

              <div className="my-5 h-px bg-white/8" />

              {/* Description */}
              <p className="font-sans text-sm font-light leading-relaxed text-slate-300">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mt-5 grow space-y-3">
                {project.highlights.map((h, i) => (
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
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs tracking-wide text-gold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
