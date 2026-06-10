import { education } from '@/lib/education';
import ScrollReveal from './ScrollReveal';

export default function EducationSection() {
  return (
    <section id="education" className="bg-surface-light py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <ScrollReveal>
          <header className="mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal/80">
              Foundations
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-forest md:text-4xl">
              Education
            </h2>
          </header>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <ScrollReveal key={e.institution} delay={i * 80}>
              <article className="h-full rounded-lg border border-teal/10 bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl font-medium text-forest">
                  {e.institution}
                </h3>
                <p className="mt-1 font-body text-[15px] text-ink/80">
                  {e.degree} · {e.field}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-gray-mid">
                  {e.year}
                </p>
                <ul className="mt-4 space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-3 font-body text-[14px] text-ink/75">
                      <span className="mt-[0.5rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
