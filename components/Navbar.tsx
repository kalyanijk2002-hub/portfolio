"use client";

// Navbar — sticky top navigation bar with smooth-scroll anchor links.
// Collapses into a hamburger menu on mobile.

import { useEffect, useState } from "react";
import { navLinks, personal } from "@/data/resume";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle backdrop-blur when the user has scrolled past the hero
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md dark:bg-navy/90"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="font-[var(--font-playfair)] text-lg font-semibold tracking-tight text-navy dark:text-white"
          onClick={closeMenu}
        >
          {personal.name.split(" ")[0]}{" "}
          <span className="text-gold">{personal.name.split(" ")[1]}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-navy-600 transition-colors hover:text-gold dark:text-slate-300 dark:hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* CV download button (desktop) */}
          <a
            href={personal.cvPath}
            download
            className="hidden rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark md:inline-flex"
          >
            Download CV
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md text-navy-600 transition-colors hover:bg-navy/5 dark:text-slate-300 dark:hover:bg-white/5 md:hidden"
          >
            {menuOpen ? (
              /* X icon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="border-t border-navy/10 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-white/10 dark:bg-navy/95 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-base font-medium text-navy-600 transition-colors hover:text-gold dark:text-slate-300 dark:hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.cvPath}
                download
                onClick={closeMenu}
                className="inline-flex rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
