// Footer — minimal copyright strip.

import { personal } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-8 text-center">
      <p className="text-xs text-slate-500">
        © {year} {personal.name}. Built with{" "}
        <span className="text-gold">Next.js</span> &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
