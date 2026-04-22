'use client';

import { useEffect, useRef, useState } from 'react';
import {
  LayoutGrid,
  Network,
  Users,
  Database,
  Cpu,
  X,
  type LucideIcon,
} from 'lucide-react';
import { personas } from '@/lib/personas';
import type { PersonaId } from '@/lib/types';

const ICONS: Record<string, LucideIcon> = {
  LayoutGrid,
  Network,
  Users,
  Database,
  Cpu,
};

type Props = {
  selected: PersonaId[];
  onToggle: (id: PersonaId) => void;
  onClear: () => void;
  visibleCount: number;
  totalCount: number;
};

export default function PersonaSelector({
  selected,
  onToggle,
  onClear,
  visibleCount,
  totalCount,
}: Props) {
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-px" />
      <div
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isStuck ? 'sticky-shadow' : 'bg-surface-light'
        }`}
      >
        <div className="mx-auto max-w-5xl px-6 py-4 md:px-10">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal/80">
              Choose Your Perspective
            </p>
            {selected.length > 0 && (
              <button
                type="button"
                onClick={onClear}
                className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-gray-mid transition-colors hover:text-forest"
              >
                <X size={12} />
                Clear
              </button>
            )}
          </div>

          <div className="mt-3 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
            {personas.map((p) => {
              const Icon = ICONS[p.icon];
              const isActive = selected.includes(p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onToggle(p.id)}
                  aria-pressed={isActive}
                  title={p.description}
                  className={`persona-pill flex min-h-[44px] shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 font-display text-sm ${
                    isActive
                      ? 'border-amber bg-amber text-surface-dark shadow-soft'
                      : 'border-gray-mid/40 bg-white text-ink hover:border-amber'
                  }`}
                >
                  {Icon && <Icon size={16} strokeWidth={1.75} />}
                  <span className="font-medium">
                    <span className="hidden sm:inline">{p.label}</span>
                    <span className="sm:hidden">{p.shortLabel}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-3 font-mono text-[11px] text-gray-mid">
            Showing{' '}
            <span className="font-bold text-forest">{visibleCount}</span> of{' '}
            <span className="font-bold text-forest">{totalCount}</span>{' '}
            highlights
            {selected.length > 0 && (
              <span className="text-gray-mid/70">
                {' '}
                · filter:{' '}
                {selected
                  .map((id) => personas.find((p) => p.id === id)?.shortLabel)
                  .join(' · ')}
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
