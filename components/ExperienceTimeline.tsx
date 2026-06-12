import { experience } from '@/lib/experience';
import { personas } from '@/lib/personas';
import type { PersonaId } from '@/lib/types';
import ExperienceCard from './ExperienceCard';
import ScrollReveal from './ScrollReveal';

type Props = {
  selected: PersonaId[];
};

export default function ExperienceTimeline({ selected }: Props) {
  const activeNarrative =
    selected.length === 1
      ? personas.find((p) => p.id === selected[0])
      : undefined;

  return (
    <section id="experience" className="bg-surface-light py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <ScrollReveal>
          <header className="mb-10 md:mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal/80">
              15 years · 10 companies · 1 career
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-forest md:text-4xl">
              Experience
            </h2>
            {activeNarrative && (
              <blockquote className="mt-5 max-w-2xl border-l-2 border-amber pl-4 font-body text-[15px] italic leading-relaxed text-ink/75">
                {activeNarrative.narrative}
              </blockquote>
            )}
          </header>
        </ScrollReveal>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[10px] top-2 hidden h-full w-[2px] bg-teal/30 md:block md:left-[14px]"
          />
          <div className="space-y-0">
            {experience.map((e, i) => (
              <ScrollReveal key={e.id} delay={i * 80}>
                <ExperienceCard entry={e} selected={selected} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
