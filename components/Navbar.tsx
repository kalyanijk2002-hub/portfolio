"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { navLinks, personal } from "@/data/resume";
import Container from "./layout/Container";

interface NavbarProps {
  activeTab: string;
  onTab: (tab: string) => void;
}

export default function Navbar({ activeTab, onTab }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const initials = personal.name.split(" ").map((w) => w[0]).join("");
  const allTabs = [{ label: "Home", href: "#home" }, ...navLinks];

  // Measure and slide the indicator to the active tab
  useLayoutEffect(() => {
    const activeIndex = allTabs.findIndex((t) => t.href.slice(1) === activeTab);
    const btn = buttonRefs.current[activeIndex];
    const container = tabsRef.current;
    if (!btn || !container) return;
    setIndicator({
      left: btn.offsetLeft,
      width: btn.offsetWidth,
    });
  }, [activeTab]);

  function handleTab(tab: string) {
    onTab(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-6 sm:px-8 lg:px-12">

      {/* Floating pill — desktop */}
      <nav className="mx-auto hidden w-full max-w-content items-center rounded-full border border-white/10 bg-[rgba(15,26,26,0.90)] px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-md lg:flex">

        {/* Initials circle */}
        <button
          onClick={() => handleTab("home")}
          aria-label="Back to home"
          className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 font-mono text-sm font-bold text-gold transition-colors duration-200 hover:bg-gold hover:text-navy"
        >
          {initials}
        </button>

        {/* Tabs — sliding indicator lives here */}
        <div ref={tabsRef} className="relative flex flex-1 items-center justify-evenly">

          {/* Sliding pill indicator */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-gold/30 bg-navy-700"
            style={{
              left: indicator.left,
              width: indicator.width,
              height: "calc(100% + 4px)",
              transition: "left 0.4s cubic-bezier(0.22, 1, 0.36, 1), width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* Shimmer */}
            <span
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.25) 50%, transparent 100%)",
                animation: "shimmer 2.5s ease-in-out infinite",
              }}
            />
            {/* Glare */}
            <span
              className="absolute inset-0"
              style={{
                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                animation: "shimmer 4s ease-in-out infinite",
                animationDelay: "1.2s",
              }}
            />
          </div>

          {/* Tab buttons */}
          {allTabs.map((link, i) => {
            const id = link.href.slice(1);
            const active = activeTab === id;
            return (
              <button
                key={id}
                ref={(el) => { buttonRefs.current[i] = el; }}
                onClick={() => handleTab(id)}
                className={[
                  "relative z-10 rounded-full px-5 py-2 font-sans text-sm font-medium transition-colors duration-300",
                  active ? "text-gold" : "text-slate-400 hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Download CV — expands in flow so tabs shift left evenly */}
        <a
          href={personal.cvPath}
          download
          aria-label="Download Resume"
          className="group ml-4 flex h-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gold text-navy"
          style={{
            width: "2.5rem",
            padding: "0",
            gap: "0",
            transition: "width 0.42s cubic-bezier(0.22,1,0.36,1), padding 0.42s cubic-bezier(0.22,1,0.36,1)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.width = "11rem";
            el.style.padding = "0 1rem";
            el.style.gap = "0.5rem";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.width = "2.5rem";
            el.style.padding = "0";
            el.style.gap = "0";
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="max-w-0 overflow-hidden whitespace-nowrap font-sans text-sm font-medium transition-[max-width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:max-w-[160px]">
            Download Resume
          </span>
        </a>
      </nav>

      {/* Mobile — full-width pill with hamburger */}
      <nav className="mx-auto flex w-full max-w-content items-center justify-between rounded-full border border-white/10 bg-[rgba(15,26,26,0.90)] px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-md lg:hidden">
        <button
          onClick={() => handleTab("home")}
          aria-label="Back to home"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 font-mono text-sm font-bold text-gold"
        >
          {initials}
        </button>

        <span className="font-sans text-sm font-medium capitalize text-gold">
          {activeTab}
        </span>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-gold/10 hover:text-gold"
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
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-16 mx-auto max-w-content rounded-2xl bg-[rgba(15,26,26,0.98)] p-4 shadow-xl shadow-black/50 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {allTabs.map((link) => {
              const id = link.href.slice(1);
              const active = activeTab === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => handleTab(id)}
                    className={[
                      "w-full rounded-xl px-4 py-3 text-left font-sans text-base font-medium transition-colors duration-200",
                      active ? "bg-gold/10 text-gold" : "text-slate-300 hover:bg-gold/10 hover:text-gold",
                    ].join(" ")}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
            <li className="mt-2 pt-2">
              <a
                href={personal.cvPath}
                download
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-sans text-sm font-medium uppercase tracking-wide text-navy hover:bg-gold-dark"
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
