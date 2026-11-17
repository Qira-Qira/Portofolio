import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { PinkStarburst, TornEdge, YellowSquiggle } from './Graphics';

const STATEMENT_WORDS = 'At my workspace, I build software to serve long-term impact.'.split(' ');

function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = (index / total) * 0.72;
  const end = Math.min(1, start + 0.22);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.26em]">
      {word}
    </motion.span>
  );
}

export function DarkStatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.86', 'center 0.42'],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FAF8F3] dark:bg-[#161618] transition-colors duration-300"
    >
      <TornEdge fill="currentColor" className="text-[#161618] dark:text-[#0C0C0E]" />

      <div className="bg-dark-ruled dark:bg-[#0C0C0E] text-[#FAF8F3] py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[1060px] mx-auto relative">
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 bg-[#F4C542] text-[#18181A] text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A]">
                ABOUT
              </span>
              <span className="text-[#FAF8F3]/40 font-mono-code text-sm">+</span>
            </div>

            <motion.div
              animate={{ rotate: [0, 35, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PinkStarburst className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-[54px] font-extrabold tracking-[-0.03em] leading-[1.12] max-w-[780px] text-white"
            style={{ textWrap: 'balance' }}
          >
            {STATEMENT_WORDS.map((word, idx) => (
              <ScrollWord
                key={`${word}-${idx}`}
                word={word}
                index={idx}
                total={STATEMENT_WORDS.length}
                progress={scrollYProgress}
              />
            ))}
          </h2>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 w-28"
          >
            <YellowSquiggle className="w-28 h-4" />
          </motion.div>
        </div>
      </div>

      <TornEdge fill="currentColor" flip className="text-[#161618] dark:text-[#0C0C0E]" />
    </section>
  );
}
