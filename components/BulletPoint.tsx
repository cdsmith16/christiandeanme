'use client';

import { useEffect, useRef, useState } from 'react';
import type { BulletPoint as BulletPointData, PersonaId } from '@/lib/types';
import ProjectLink from './ProjectLink';
import { personas } from '@/lib/personas';

type Props = {
  bullet: BulletPointData;
  selected: PersonaId[];
};

export default function BulletPoint({ bullet, selected }: Props) {
  const isVisible =
    selected.length === 0 ||
    bullet.personas.some((p) => selected.includes(p));

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>('auto');

  useEffect(() => {
    if (!contentRef.current) return;
    if (isVisible) {
      const h = contentRef.current.scrollHeight;
      setMaxHeight(`${h}px`);
      const t = setTimeout(() => setMaxHeight('none'), 320);
      return () => clearTimeout(t);
    } else {
      if (contentRef.current) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
        requestAnimationFrame(() => setMaxHeight('0px'));
      }
    }
  }, [isVisible]);

  const tags = bullet.personas
    .map((id) => personas.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div
      className="bullet-collapse"
      style={{
        maxHeight,
        opacity: isVisible ? 1 : 0,
        marginTop: isVisible ? undefined : 0,
      }}
      aria-hidden={!isVisible}
    >
      <div ref={contentRef} className="py-1.5">
        <div className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.55rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70"
          />
          <div className="flex-1">
            <p className="font-body text-[15px] leading-relaxed text-ink/85">
              {renderText(bullet.text)}
              {bullet.links?.map((link, i) => (
                <span key={link.url}>
                  {i === 0 ? ' · ' : ' '}
                  <ProjectLink link={link} />
                </span>
              ))}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {tags.map((t) => (
                <span
                  key={t!.id}
                  className="rounded-sm bg-teal/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-teal"
                >
                  {t!.shortLabel}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderText(text: string) {
  return text;
}
