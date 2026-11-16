import { AnimatePresence, motion } from 'motion/react';
import { AQMonogram } from './Graphics';

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
            transition: { duration: 0.38, ease: [0.76, 0, 0.24, 1] },
          }}
          exit={{
            y: '-100%',
            transition: { duration: 0.44, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[95] bg-[#161618] text-white flex flex-col items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.25 }}
            className="flex flex-col items-center gap-4"
          >
            <AQMonogram className="w-12 h-9" color="#FAF8F3" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F3]">
              {label}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
