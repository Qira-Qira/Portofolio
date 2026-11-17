import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AMonogram, PinkStarburst } from './Graphics';
import { formatCounter } from '../utils/portfolioLogic';

const GREETINGS = ['Hai.', 'Halo.', 'Hola.', 'Ariq.'];

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
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'exiting' | 'done'>(skip ? 'done' : 'loading');
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (skip) {
      onCompleteRef.current();
      return;
    }

    const start = performance.now();
    const duration = 1750;
    let rafId = 0;

    const g1 = window.setTimeout(() => setGreetingIndex(1), 360);
    const g2 = window.setTimeout(() => setGreetingIndex(2), 740);
    const g3 = window.setTimeout(() => setGreetingIndex(3), 1120);

    let tExit = 0;
    let tHero = 0;
    let tDone = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - ratio, 2);
      setProgress(Math.round(eased * 100));

      if (ratio < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setGreetingIndex(3);
        tExit = window.setTimeout(() => {
          setPhase('exiting');
          tHero = window.setTimeout(() => {
            onCompleteRef.current();
          }, 420);
          tDone = window.setTimeout(() => {
            setPhase('done');
          }, 1050);
        }, 200);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(g1);
      clearTimeout(g2);
      clearTimeout(g3);
      clearTimeout(tExit);
      clearTimeout(tHero);
      clearTimeout(tDone);
    };
  }, [skip]);

  if (phase === 'done') return null;

  const filledBlocks = Math.ceil((progress / 100) * COLOR_BLOCKS.length);
  const activeGreeting = GREETINGS[greetingIndex];

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden"
      data-testid="preloader"
    >
      {/* Trailing Multi-Color Curved Wipe Layers (Yellow -> Cobalt -> Hot Pink) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={phase === 'exiting' ? { y: '-115%' } : { y: '0%' }}
        transition={{ duration: 0.78, delay: 0.24, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-x-0 top-0 h-[116vh] bg-[#F4C542]"
        style={{ clipPath: 'ellipse(95% 98% at 50% 0%)' }}
      />
      <motion.div
        initial={{ y: '0%' }}
        animate={phase === 'exiting' ? { y: '-115%' } : { y: '0%' }}
        transition={{ duration: 0.74, delay: 0.16, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-x-0 top-0 h-[116vh] bg-[#2F45FF]"
        style={{ clipPath: 'ellipse(95% 98% at 50% 0%)' }}
      />
      <motion.div
        initial={{ y: '0%' }}
        animate={phase === 'exiting' ? { y: '-115%' } : { y: '0%' }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-x-0 top-0 h-[116vh] bg-[#F43F8E]"
        style={{ clipPath: 'ellipse(95% 98% at 50% 0%)' }}
      />

      {/* Primary Dark Preloader Screen */}
      <motion.div
        initial={{ y: '0%' }}
        animate={phase === 'exiting' ? { y: '-115%' } : { y: '0%' }}
        transition={{ duration: 0.66, delay: 0, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-x-0 top-0 h-[116vh] bg-dark-ruled text-[#FAF8F3] pointer-events-auto"
        style={{
          clipPath: phase === 'exiting' ? 'ellipse(95% 98% at 50% 0%)' : 'none',
        }}
      >
        <div className="h-[100vh] flex flex-col justify-between px-6 sm:px-10 py-7">
          {/* Top metadata */}
          <div className="flex items-center justify-between text-[11px] font-mono-code tracking-[0.22em] text-[#FAF8F3]/60 uppercase">
            <span>PORTFOLIO</span>
            <span>SURABAYA, INDONESIA</span>
          </div>

          {/* Center Folder + Cycling Greeting */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotate: -6 }}
              animate={{ scale: 1, opacity: 1, rotate: progress >= 100 ? -2 : 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-7"
            >
              <motion.div
                animate={{ rotate: [0, 28, 0], scale: [1, 1.18, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute -top-3.5 -right-4"
              >
                <PinkStarburst className="w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.2, 0.9] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="absolute -bottom-2 -left-4 text-[#F4C542] text-base font-bold"
              >
                ✦
              </motion.div>

              <div className="relative w-28 sm:w-32 h-22 sm:h-24">
                <div className="absolute top-0 left-0 w-12 h-4 bg-[#D8AA29] rounded-t-md border-2 border-[#18181A]" />
                <div className="absolute top-2.5 inset-x-0 bottom-0 bg-[#F4C542] rounded-lg border-2 border-[#18181A] shadow-[4px_4px_0px_#000000] flex items-center justify-center">
                  <AMonogram className="w-12 h-9" color="#18181A" />
                </div>
              </div>
            </motion.div>

            <div className="h-12 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGreeting}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.13, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
                >
                  {activeGreeting.slice(0, -1)}
                  <span className="text-[#F4C542]">.</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] sm:text-xs font-mono-code tracking-[0.2em] text-[#FAF8F3]/60 uppercase mb-2.5">
                ARIQ
              </p>
              <div className="flex items-center gap-1.5">
                {COLOR_BLOCKS.map((hex, i) => (
                  <span
                    key={i}
                    className="w-3.5 sm:w-4 h-2 transition-colors duration-150"
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
        </div>
      </motion.div>
    </div>
  );
}
