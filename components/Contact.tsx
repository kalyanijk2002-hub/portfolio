"use client";

// Contact — email link, LinkedIn button, and a mailto-powered contact form.
// No backend required: the form opens the user's email client.

import { personal } from "@/data/resume";
import { useReveal } from "./useReveal";
import { useState } from "react";

export default function Contact() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Kalyani,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="reveal bg-navy py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
            Get In Touch
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
            Contact Me
          </h2>
          <div className="section-rule mx-auto mt-4" />
          <p className="mx-auto mt-4 max-w-md text-slate-300">
            I&apos;m open to internship opportunities, graduate roles, and
            networking conversations in finance and investment management.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Direct contact details */}
          <div className="space-y-5">
            <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-white">
              Direct Contact
            </h3>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-gold/40 hover:bg-gold/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400">Email</p>
                <p className="text-sm font-medium text-white group-hover:text-gold">
                  {personal.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personal.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-gold/40 hover:bg-gold/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1.17h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400">Phone</p>
                <p className="text-sm font-medium text-white group-hover:text-gold">
                  {personal.phone}
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-gold/40 hover:bg-gold/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400">LinkedIn</p>
                <p className="text-sm font-medium text-white group-hover:text-gold">
                  View Profile
                </p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-[var(--font-playfair)] text-lg font-semibold text-white">
              Send a Message
            </h3>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-400">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-400">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="I'd love to connect about..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gold py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
            >
              Send via Email Client
            </button>

            <p className="text-center text-xs text-slate-500">
              This will open your default email app with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
