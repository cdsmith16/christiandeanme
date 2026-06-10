'use client';

import { useEffect, useRef, useState } from 'react';
import type { ExperienceEntry, PersonaId } from '@/lib/types';
import BulletPoint from './BulletPoint';

type Props = {
  entry: ExperienceEntry;
  selected: PersonaId[];
};

export default function ExperienceCard({ entry, selected }: Props) {
  const matchingCount =
    selected.length === 0
      ? entry.bullets.length
      : entry.bullets.filter((b) =>
          b.personas.some((p) => selected.includes(p))
        ).length;

  const isVisible = matchingCount > 0;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>('auto');

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (isVisible) {
      const h = wrapperRef.current.scrollHeight;
      setMaxHeight(`${h}px`);
      const t = setTimeout(() => setMaxHeight('none'), 400);
      return () => clearTimeout(t);
    } else {
      if (wrapperRef.current) {
        setMaxHeight(`${wrapperRef.current.scrollHeight}px`);
        requestAnimationFrame(() => setMaxHeight('0px'));
      }
    }
  }, [isVisible]);

  return (
    <div
      className="card-collapse relative"
      style={{
        maxHeight,
        opacity: isVisible ? 1 : 0,
      }}
      aria-hidden={!isVisible}
    >
      <div ref={wrapperRef} className="relative pl-8 pb-10 md:pl-10">
        <span
          aria-hidden="true"
          className="absolute left-[5px] top-2 h-3 w-3 rounded-full border-2 border-teal bg-surface-light md:left-[9px]"
        />
        <div className="rounded-lg border border-transparent bg-white p-5 shadow-soft md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-xl font-medium text-forest md:text-2xl">
              {entry.company}
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-widest text-gray-mid">
              {entry.startDate} — {entry.endDate}
            </span>
          </div>
          <p className="mt-1 font-body text-[15px] text-ink/80">
            {entry.role}
            <span className="text-gray-mid"> · {entry.location}</span>
          </p>
          <div className="mt-4 space-y-1">
            {entry.bullets.map((b) => (
              <BulletPoint key={b.id} bullet={b} selected={selected} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
