"use client";

import { useEffect, useState } from "react";
import { navLinks, personal } from "@/data/resume";
import ThemeToggle from "./ThemeToggle";
import Container from "./layout/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 64); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const obs: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  const initials = personal.name.split(" ").map((w) => w[0]).join("");

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gold/20 bg-[rgba(10,26,15,0.9)] backdrop-blur-md shadow-lg shadow-black/30"
          : "border-b border-gold/10 bg-[rgba(10,26,15,0.6)] backdrop-blur-sm",
      ].join(" ")}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">

          {/* Initials circle — bold gold */}
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            aria-label="Back to top"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gold/10 text-gold transition-all duration-200 hover:bg-gold hover:text-navy"
          >
            <span className="font-mono text-sm font-bold">{initials}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const active = activeSection === id;
              return (
                <li key={link.href} className="relative flex h-16 items-center">
                  <a
                    href={link.href}
                    className={[
                      "font-sans text-sm font-medium tracking-wide transition-colors duration-200",
                      active
                        ? "text-gold"
                        : "text-slate-400 hover:text-white",
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center">
            <span aria-hidden="true" className="mr-4 hidden h-5 w-px bg-white/10 lg:block" />
            <ThemeToggle />

            {/* Primary CTA — gold background, dark text */}
            <a
              href={personal.cvPath}
              download
              className="ml-4 hidden items-center gap-2 rounded-full bg-gold px-5 py-2 font-sans text-sm font-medium uppercase tracking-wide text-navy transition-all duration-200 hover:bg-gold-dark hover:scale-[1.02] lg:inline-flex"
            >
              Download CV
            </a>

            {/* Hamburger — 44×44px */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="ml-2 flex h-11 w-11 items-center justify-center rounded-md text-slate-400 transition-colors duration-200 hover:bg-gold/10 hover:text-gold lg:hidden"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="border-t border-white/8 bg-[rgba(10,26,15,0.98)] backdrop-blur-md lg:hidden">
          <Container>
            <ul className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 font-sans text-base font-medium text-slate-300 transition-colors duration-200 hover:bg-gold/10 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3 border-t border-white/8 pt-3">
                <a
                  href={personal.cvPath}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 font-sans text-sm font-medium uppercase tracking-wide text-navy transition-colors duration-200 hover:bg-gold-dark"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
