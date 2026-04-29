import { personal } from "@/data/resume";
import Container from "./layout/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-navy py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-xs tracking-wide text-slate-600">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-wide text-slate-600">
            Built with <span className="text-gold">Next.js</span> · <span className="text-gold">Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
