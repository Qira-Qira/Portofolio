import { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { PaperPlaneDoodle, PinkStarburst } from './Graphics';

export function CTASection({ onOpenContact }: { onOpenContact: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('aldenprabaswara@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const ribbonItems = Array.from({ length: 12 }, () => 'TAKING NEW PROJECTS');

  return (
    <section className="relative overflow-hidden bg-[#2F45FF]">
      {/* Diagonal Yellow Marquee Strip */}
      <div className="bg-[#FAF8F3] pt-3 pb-2 overflow-hidden">
        <div className="w-[108%] -ml-[4%] bg-[#F4C542] border-y-2 border-[#18181A] py-2 -rotate-1 overflow-hidden">
          <div className="flex w-max animate-marquee-left">
            {[...ribbonItems, ...ribbonItems].map((text, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-4 px-4 text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-[#18181A] whitespace-nowrap"
              >
                <span>★</span>
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Cobalt Blue CTA Block */}
      <div className="bg-[#2F45FF] text-white py-24 sm:py-32 px-5 sm:px-8 relative">
        <div className="max-w-[960px] mx-auto text-center relative">
          {/* Decorative accents */}
          <div className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2">
            <PinkStarburst className="w-7 h-7" />
          </div>
          <div className="hidden sm:block absolute right-6 top-2">
            <PaperPlaneDoodle className="w-7 h-7 text-white/75" color="#FFFFFF" />
          </div>

          <p className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-white/75 mb-5">
            TAKING NEW PROJECTS
          </p>

          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-[-0.04em] leading-[1.02] mb-10">
            <span className="text-white block">Let&apos;s build</span>
            <span className="text-[#F4C542] block">something</span>
            <span className="text-white block">together.</span>
          </h2>

          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#18181A] text-white text-xs font-mono-code font-bold tracking-wider uppercase border-2 border-[#18181A] shadow-[4px_4px_0px_#F4C542] hover:-translate-y-0.5 transition-transform cursor-pointer mb-8"
          >
            <Mail className="w-4 h-4" />
            <span>START A PROJECT</span>
          </button>

          <div>
            <p className="text-[10px] font-mono-code tracking-[0.16em] uppercase text-white/60 mb-1.5">
              OR WRITE TO ME DIRECTLY
            </p>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-sm font-mono-code text-white underline underline-offset-4 hover:text-[#F4C542] transition-colors cursor-pointer"
            >
              <span>aldenprabaswara@gmail.com</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#AEEBD2]" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-75" />
              )}
            </button>
            {copied && (
              <p className="text-xs font-mono-code text-[#AEEBD2] mt-1.5">
                Email copied to clipboard
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
