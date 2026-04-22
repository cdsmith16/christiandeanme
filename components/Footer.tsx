import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-teal/10 bg-surface-light py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-base font-medium text-forest">
            Christian D. Smith
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-gray-mid">
            Builder · Strategist · Polymath
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-gray-mid">
          <a
            href="mailto:christian@christiandean.me"
            aria-label="Email"
            className="transition-transform hover:scale-110 hover:text-forest"
          >
            <Mail size={18} strokeWidth={1.75} />
          </a>
          <a
            href="https://www.linkedin.com/in/christiandsmith"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-110 hover:text-forest"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href="https://github.com/cdsmith16"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="transition-transform hover:scale-110 hover:text-forest"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href="https://smithlabs.llc"
            target="_blank"
            rel="noreferrer noopener"
            className="project-link inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest hover:text-forest"
          >
            smithlabs.llc
            <ExternalLink size={12} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl px-6 md:px-10">
        <p className="font-mono text-[10px] text-gray-mid/80">
          © {year} Christian D. Smith. Built with Next.js, deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
