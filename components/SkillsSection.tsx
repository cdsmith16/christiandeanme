import { skills } from '@/lib/skills';
import ScrollReveal from './ScrollReveal';

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-surface-light py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <ScrollReveal>
          <header className="mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal/80">
              Tooling
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-forest md:text-4xl">
              Skills &amp; Tools
            </h2>
          </header>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, i) => (
            <ScrollReveal key={group.name} delay={i * 60}>
              <div className="rounded-lg border border-teal/10 bg-white p-5 shadow-soft">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal">
                  {group.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-surface-light px-3 py-1 font-mono text-[11px] text-forest"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
