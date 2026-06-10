'use client';

import { useMemo, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import PersonaSelector from '@/components/PersonaSelector';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import WalletDownload from '@/components/WalletDownload';
import Footer from '@/components/Footer';
import { experience } from '@/lib/experience';
import type { PersonaId } from '@/lib/types';

export default function Home() {
  const [selected, setSelected] = useState<PersonaId[]>([]);

  const togglePersona = (id: PersonaId) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const clearPersonas = () => setSelected([]);

  const { total, visible } = useMemo(() => {
    const total = experience.reduce((sum, e) => sum + e.bullets.length, 0);
    const visible =
      selected.length === 0
        ? total
        : experience.reduce(
            (sum, e) =>
              sum +
              e.bullets.filter((b) =>
                b.personas.some((p) => selected.includes(p))
              ).length,
            0
          );
    return { total, visible };
  }, [selected]);

  return (
    <main className="min-h-screen bg-surface-light text-ink">
      <HeroSection
        selected={selected}
        onTogglePersona={togglePersona}
      />
      <PersonaSelector
        selected={selected}
        onToggle={togglePersona}
        onClear={clearPersonas}
        visibleCount={visible}
        totalCount={total}
      />
      <ExperienceTimeline selected={selected} />
      <EducationSection />
      <SkillsSection />
      <WalletDownload />
      <Footer />
    </main>
  );
}
