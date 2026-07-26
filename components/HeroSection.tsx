import Link from 'next/link';
import { personas } from '@/lib/personas';
import type { PersonaId } from '@/lib/types';
import BirdOfParadise from './BirdOfParadise';

type Props = {
  selected: PersonaId[];
  onTogglePersona: (id: PersonaId) => void;
};

export default function HeroSection({ selected, onTogglePersona }: Props) {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-cream grain">
      <BirdOfParadise
        className="pointer-events-none absolute -right-20 top-8 h-[520px] w-[520px] md:-right-10 md:h-[640px] md:w-[640px]"
        opacity={0.28}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p
              className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-amber animate-fade-in"
              style={{ animationDelay: '0ms' }}
            >
              christiandsmith.com
            </p>
            <h1 className="font-display leading-[1.05] animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <Link href="/" className="text-5xl font-bold text-cream md:text-7xl no-underline hover:text-cream">
                Christian D. Smith
              </Link>
            </h1>
            <p
              className="mt-2 font-display text-2xl font-light text-cream/70 md:text-3xl animate-fade-in-up"
              style={{ animationDelay: '150ms' }}
            >
              M.B.A.
            </p>
            <p
              className="mt-6 font-display text-xl font-medium text-amber md:text-2xl animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              Product Engineer <span className="text-gray-mid">|</span>{' '}
              Strategy
            </p>
            <p
              className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-cream/70 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              Twelve-plus years building at the intersection of product,
              engineering, and business strategy: Microsoft, Sequoia-backed
              startups, AWS, and now Smith Labs. One career, many lenses.
              Choose the one that matches what you&apos;re hiring for.
            </p>
            <div
              className="mt-8 flex flex-col gap-1 font-mono text-xs text-cream/60 animate-fade-in-up"
              style={{ animationDelay: '450ms' }}
            >
              <a
                href="mailto:christian@christiandsmith.com"
                className="project-link w-fit hover:text-amber"
              >
                christian@christiandsmith.com
              </a>
              <span>New York | New Jersey</span>
            </div>
          </div>

          <div
            className="flex flex-col gap-2 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
              Choose your lens
            </p>
            {personas.map((p) => {
              const isActive = selected.includes(p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onTogglePersona(p.id)}
                  aria-pressed={isActive}
                  className={`persona-pill group flex items-center justify-between gap-3 rounded-sm border border-cream/15 px-4 py-3 text-left font-display text-sm ${
                    isActive
                      ? 'border-amber bg-amber text-surface-dark'
                      : 'bg-surface-card/60 text-cream hover:border-amber/50'
                  }`}
                >
                  <span className="font-medium">{p.label}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest ${
                      isActive ? 'text-surface-dark/70' : 'text-amber/80'
                    }`}
                  >
                    {p.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
    </section>
  );
}
