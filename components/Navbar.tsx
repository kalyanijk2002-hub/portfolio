"use client";

/*
 * Navbar — fixed, 64px tall exactly.
 * All vertical alignment is achieved via h-16 on the nav row, items-center.
 * Nav link gap: gap-12 (48px = --space-7).
 * Active-section underline: absolute 2px gold bar at bottom of navbar.
 * Theme toggle: preceded by a 1px × 20px vertical divider, gap-4 (16px) between.
 * Mobile hamburger: 44×44px tap target (WCAG 2.5.5).
 */

import { useEffect, useState } from "react";
import { navLinks, personal } from "@/data/resume";
import ThemeToggle from "./ThemeToggle";
import Container from "./layout/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 64);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track which section is currently in view for the underline indicator */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const initials = personal.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md dark:bg-navy-900/95"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* ── Main bar — exactly 64px (h-16) ─────────────────── */}
      <Container>
        <nav className="flex h-16 items-center justify-between">

          {/* Logo — 40×40px initials circle */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 hover:scale-105"
            aria-label="Back to top"
          >
            <span className="font-mono text-sm font-medium tracking-wide">
              {initials}
            </span>
          </a>

          {/* Desktop links — gap-12 (48px) */}
          <ul className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={link.href} className="relative flex h-16 items-center">
                  <a
                    href={link.href}
                    className={[
                      "font-sans text-sm font-medium tracking-wide transition-colors duration-200",
                      isActive
                        ? "text-gold"
                        : "text-navy-600 hover:text-navy dark:text-slate-400 dark:hover:text-white",
                    ].join(" ")}
                  >
                    {link.label}
                  </a>
                  {/* 2px gold underline pinned to bottom of navbar */}
                  {isActive && (
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
            {/* 1px × 20px vertical divider before toggle */}
            <span
              aria-hidden="true"
              className="mr-4 hidden h-5 w-px bg-navy-700/20 dark:bg-white/15 lg:block"
            />
            <ThemeToggle />

            {/* CV download — desktop only */}
            <a
              href={personal.cvPath}
              download
              className="ml-4 hidden items-center gap-2 rounded-full bg-gold px-5 py-2 font-sans text-sm font-medium uppercase tracking-wide text-navy transition-colors duration-200 hover:bg-gold-dark lg:inline-flex"
            >
              Download CV
            </a>

            {/* Hamburger — 44×44px tap target, mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="ml-2 flex h-11 w-11 items-center justify-center rounded-md text-navy-600 transition-colors duration-200 hover:bg-navy/5 dark:text-slate-400 dark:hover:bg-white/5 lg:hidden"
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

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="border-t border-navy/10 bg-white/98 backdrop-blur-md dark:border-white/10 dark:bg-navy-900/98 lg:hidden">
          <Container>
            <ul className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-3 font-sans text-base font-medium text-navy-600 transition-colors duration-200 hover:bg-gold/5 hover:text-gold dark:text-slate-300 dark:hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3 pt-3 border-t border-navy/10 dark:border-white/10">
                <a
                  href={personal.cvPath}
                  download
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-sans text-sm font-medium uppercase tracking-wide text-navy transition-colors duration-200 hover:bg-gold-dark"
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
