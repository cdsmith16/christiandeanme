import { Wallet, Contact } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WalletDownload() {
  return (
    <section
      id="wallet"
      className="relative overflow-hidden bg-surface-dark py-20 text-cream"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <ScrollReveal>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber/80">
                Digital Business Card
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-amber md:text-4xl">
                Add me to your wallet
              </h2>
              <p className="mt-4 max-w-lg font-body text-[15px] text-cream/70">
                Download my digital business card for Apple Wallet — phone,
                email, LinkedIn, and a QR code to this page.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="/ChristianDean.pkpass"
                download
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-amber px-6 py-4 font-display text-base font-medium text-surface-dark transition-transform hover:scale-[1.02]"
              >
                <Wallet size={20} strokeWidth={2} />
                Add to Apple Wallet
              </a>
              <a
                href="/christian-dean.vcf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/20 px-6 py-3 font-display text-sm text-cream/80 transition-colors hover:border-amber hover:text-amber"
              >
                <Contact size={16} strokeWidth={1.75} />
                Save contact (.vcf)
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
