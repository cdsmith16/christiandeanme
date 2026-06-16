'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';
import { resumeSlug } from '@/lib/resume';
import { LEAD_STORAGE_KEY, triggerResumeDownload } from '@/lib/downloadResume';
import type { PersonaId } from '@/lib/types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  selected: PersonaId[];
  onClose: () => void;
};

export default function EmailGateModal({ selected, onClose }: Props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState(''); // honeypot, hidden from real users
  const [error, setError] = useState<string | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailInputRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (company) {
      // Honeypot tripped — quietly let the bot "succeed" without saving anything.
      triggerResumeDownload(selected);
      onClose();
      return;
    }

    if (!EMAIL_RE.test(email)) {
      setError('Enter a valid email address');
      return;
    }
    setError(null);

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name,
        personas: selected,
        resumeSlug: resumeSlug(selected),
      }),
    }).catch(() => {});

    sessionStorage.setItem(LEAD_STORAGE_KEY, email);
    triggerResumeDownload(selected);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Download resume"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-lg bg-surface-light p-6 shadow-soft animate-fade-in-up"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-gray-mid transition-colors hover:text-forest"
        >
          <X size={18} />
        </button>

        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal/80">
          Almost there
        </p>
        <h2 className="mt-2 font-display text-xl font-bold text-ink">
          Where should this resume go?
        </h2>
        <p className="mt-2 font-body text-sm text-gray-mid">
          Drop your email and I&rsquo;ll follow up if it&rsquo;s a fit — no spam.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            ref={emailInputRef}
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-mid/40 bg-white px-3 py-2 font-body text-sm text-ink focus:border-teal focus:outline-none"
          />
          <input
            type="text"
            placeholder="Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-gray-mid/40 bg-white px-3 py-2 font-body text-sm text-ink focus:border-teal focus:outline-none"
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {error && <p className="font-mono text-[11px] text-bloom">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-md bg-amber py-2.5 font-display text-sm font-medium text-surface-dark transition-transform hover:scale-[1.01]"
          >
            Download resume (PDF)
          </button>
        </form>
      </div>
    </div>
  );
}
