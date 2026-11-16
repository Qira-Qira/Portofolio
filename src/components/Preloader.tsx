import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ApMonogram, PinkStarburst } from './Graphics';
import { formatCounter } from '../utils/portfolioLogic';

const COLOR_BLOCKS = [
  '#2F45FF',
  '#F43F8E',
  '#F4C542',
  '#AEEBD2',
  '#FF7849',
  '#2F45FF',
  '#F43F8E',
  '#F4C542',
  '#AEEBD2',
  '#FFFFFF',
];

export function Preloader({
  skip = false,
  onComplete,
}: {
  skip?: boolean;
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(skip ? 100 : 0);
  const [visible, setVisible] = useState(!skip);

  useEffect(() => {
    if (skip) {
      onComplete();
      return;
    }

    const start = performance.now();
    const duration = 1250;
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / duration);
      // Smooth eased progress curve
      const eased = 1 - Math.pow(1 - ratio, 2.2);
      setProgress(Math.round(eased * 100));

      if (ratio < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 260);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [skip, onComplete]);

  const filledBlocks = Math.ceil((progress / 100) * COLOR_BLOCKS.length);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-dark-ruled text-[#FAF8F3] flex flex-col justify-between px-6 sm:px-10 py-7 select-none"
          data-testid="preloader"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between text-[11px] font-mono-code tracking-[0.22em] text-[#FAF8F3]/60 uppercase">
            <span>PORTFOLIO</span>
            <span>MALANG, ID</span>
          </div>

          {/* Center Folder + Brand */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotate: -4 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              {/* Pink sparkle top right */}
              <motion.div
                animate={{ rotate: [0, 22, 0], scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-4"
              >
                <PinkStarburst className="w-6 h-6" />
              </motion.div>

              {/* Tiny yellow sparkle bottom left */}
              <div className="absolute -bottom-2 -left-4 text-[#F4C542] text-base font-bold">
                ✦
              </div>

              {/* Yellow Folder Icon */}
              <div className="relative w-28 sm:w-32 h-22 sm:h-24">
                {/* Folder back tab */}
                <div className="absolute top-0 left-0 w-12 h-4 bg-[#D8AA29] rounded-t-md border-2 border-[#18181A]" />
                {/* Folder body */}
                <div className="absolute top-2.5 inset-x-0 bottom-0 bg-[#F4C542] rounded-lg border-2 border-[#18181A] shadow-[4px_4px_0px_#000000] flex items-center justify-center">
                  <ApMonogram className="w-12 h-9" color="#18181A" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
            >
              Alden<span className="text-[#F4C542]">.</span>
            </motion.div>
          </div>

          {/* Bottom Bar: Name + Multi-color blocks + Big Counter */}
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] sm:text-xs font-mono-code tracking-[0.2em] text-[#FAF8F3]/60 uppercase mb-2.5">
                ALDEN PRABASWARA
              </p>
              <div className="flex items-center gap-1.5">
                {COLOR_BLOCKS.map((hex, i) => (
                  <span
                    key={i}
                    className="w-3.5 sm:w-4 h-2 transition-opacity duration-150"
                    style={{
                      backgroundColor: i < filledBlocks ? hex : 'rgba(255,255,255,0.12)',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="font-pixel text-4xl sm:text-6xl tracking-tight text-white tabular-nums leading-none">
              {formatCounter(progress)}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
