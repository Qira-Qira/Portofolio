import { motion } from 'motion/react';
import { PinkStarburst, TornEdge, YellowSquiggle } from './Graphics';

export function DarkStatementSection() {
  return (
    <section className="relative bg-[#FAF8F3]">
      <TornEdge fill="#161618" />

      <div className="bg-dark-ruled text-[#FAF8F3] py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto relative">
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 bg-[#F4C542] text-[#18181A] text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A]">
                ABOUT
              </span>
              <span className="text-[#FAF8F3]/40 font-mono-code text-sm">+</span>
            </div>

            <motion.div
              animate={{ rotate: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PinkStarburst className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-[54px] font-extrabold tracking-[-0.03em] leading-[1.12] max-w-[780px] text-white"
            style={{ textWrap: 'balance' }}
          >
            At my workspace, I build software to serve long-term impact.
          </motion.h2>

          <div className="mt-7">
            <YellowSquiggle className="w-28 h-4" />
          </div>
        </div>
      </div>

      <TornEdge fill="#161618" flip />
    </section>
  );
}
