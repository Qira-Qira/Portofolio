import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Mail } from 'lucide-react';
import { PaperPlaneDoodle, PinkStarburst } from './Graphics';

export function CTASection({ onOpenContact }: { onOpenContact: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nawaf.hilalbi25@student.uisi.ac.id');
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
      <div className="bg-[#FAF8F3] dark:bg-[#161618] pt-3 pb-2 overflow-hidden transition-colors duration-300">
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
          {/* Decorative animated accents */}
          <motion.div
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2"
          >
            <PinkStarburst className="w-7 h-7" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:block absolute right-6 top-2"
          >
            <PaperPlaneDoodle className="w-7 h-7 text-white/75" color="#FFFFFF" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-white/75 mb-5"
          >
            TAKING NEW PROJECTS
          </motion.p>

          <h2 className="text-5xl sm:text-7xl font-extrabold tracking-[-0.04em] leading-[1.02] mb-10">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-white block"
              >
                Let&apos;s build
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.14, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#F4C542] block"
              >
                something
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.22, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-white block"
              >
                together.
              </motion.span>
            </span>
          </h2>

          <motion.button
            type="button"
            onClick={onOpenContact}
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#18181A] text-white text-xs font-mono-code font-bold tracking-wider uppercase border-2 border-[#18181A] shadow-[4px_4px_0px_#F4C542] transition-colors hover:bg-white hover:text-[#18181A] cursor-pointer mb-8"
          >
            <Mail className="w-4 h-4" />
            <span>START A PROJECT</span>
          </motion.button>

          <div>
            <p className="text-[10px] font-mono-code tracking-[0.16em] uppercase text-white/60 mb-1.5">
              OR WRITE TO ME DIRECTLY
            </p>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-sm font-mono-code text-white underline underline-offset-4 hover:text-[#F4C542] transition-colors cursor-pointer"
            >
              <span>nawaf.hilalbi25@student.uisi.ac.id</span>
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
