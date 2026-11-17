import { AnimatePresence, motion } from 'motion/react';
import { AMonogram } from './Graphics';

export function CurtainTransition({
  label,
  isActive,
}: {
  label: string | null;
  isActive: boolean;
}) {
  return (
    <AnimatePresence>
      {isActive && label && (
        <motion.div
          key="curtain"
          initial={{ y: '100%' }}
          animate={{
            y: '0%',
            transition: { duration: 0.42, ease: [0.76, 0, 0.24, 1] },
          }}
          exit={{
            y: '-105%',
            transition: { duration: 0.48, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[95] pointer-events-none select-none"
          aria-hidden="true"
        >
          {/* Curved SVG Top Edge (visible on entry) */}
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-16 -mt-12 sm:-mt-16 block"
          >
            <path d="M0,90 Q720,0 1440,90 L1440,90 L0,90 Z" fill="#161618" />
          </svg>

          <div className="w-full h-full bg-[#161618] text-white flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ delay: 0.1, duration: 0.26 }}
              className="flex flex-col items-center gap-4"
            >
              <AMonogram className="w-12 h-9" color="#FAF8F3" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F3]">
                {label}
              </span>
            </motion.div>
          </div>

          {/* Curved SVG Bottom Edge (visible on exit upward) */}
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-16 block"
          >
            <path d="M0,0 Q720,90 1440,0 L1440,0 L0,0 Z" fill="#161618" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
