"use client";

import { personal } from "@/data/resume";
import { useReveal } from "./useReveal";
import { useState } from "react";
import Container from "./layout/Container";

const inputBase =
  "w-full rounded-lg border border-white/8 bg-navy-700/50 px-5 font-sans text-sm font-light text-white placeholder-slate-600 outline-none transition-all duration-200 focus:border-gold/60 focus:ring-[3px] focus:ring-gold/12";

export default function Contact() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`Hi Kalyani,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="reveal bg-navy py-16 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
            Get In Touch
          </p>
          <h2 className="font-display text-2xl font-light leading-snug tracking-tight text-white lg:text-3xl">
            Contact Me
          </h2>
        </div>

        {/* 40 / 60 split */}
        <div className="grid items-start gap-16 lg:grid-cols-[2fr_3fr]">

          {/* Left */}
          <div>
            <p className="mb-8 max-w-prose font-sans text-base font-light leading-relaxed text-slate-300">
              I&apos;m open to internship opportunities, graduate roles, and networking conversations in finance and investment management.
            </p>

            <h3 className="mb-5 font-display text-xl font-light tracking-tight text-white">
              Direct Contact
            </h3>

            <div className="space-y-3">
              {[
                {
                  href: `mailto:${personal.email}`,
                  label: "Email",
                  value: personal.email,
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
                {
                  href: `tel:${personal.phone.replace(/\s/g, "")}`,
                  label: "Phone",
                  value: personal.phone,
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1.17h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, value, icon }) => (
                <a key={label} href={href} className="group flex items-center gap-4 rounded-lg border border-white/8 bg-navy-700/50 px-5 py-4 transition-all duration-200 hover:border-gold/30 hover:bg-gold/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">{icon}</div>
                  <div>
                    <p className="font-mono text-xs tracking-wide text-slate-500">{label}</p>
                    <p className="font-sans text-sm font-light text-white transition-colors duration-200 group-hover:text-gold">{value}</p>
                  </div>
                </a>
              ))}

              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-lg border border-white/8 bg-navy-700/50 px-5 py-4 transition-all duration-200 hover:border-gold/30 hover:bg-gold/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs tracking-wide text-slate-500">LinkedIn</p>
                  <p className="font-sans text-sm font-light text-white transition-colors duration-200 group-hover:text-gold">View Profile</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h3 className="font-display text-xl font-light tracking-tight text-white">
              Send a Message
            </h3>

            <div>
              <label htmlFor="name" className="mb-2 block font-sans text-sm font-medium text-slate-300">Your Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={`${inputBase} h-[52px]`} />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-sans text-sm font-medium text-slate-300">Your Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" className={`${inputBase} h-[52px]`} />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-sans text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="I'd love to connect about..." className={`${inputBase} h-40 resize-none py-4`} />
            </div>

            {/* Primary gold button */}
            <button type="submit" className="flex h-[52px] w-full items-center justify-center rounded-lg bg-gold font-sans text-sm font-medium uppercase tracking-wide text-navy transition-all duration-200 hover:bg-gold-dark">
              Send via Email Client
            </button>

            <p className="text-center font-sans text-xs font-light text-slate-600">
              Opens your default email app with the message pre-filled.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
