import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  const scaleX = shouldReduceMotion ? scrollYProgress : smoothProgress;

  return (
    <div
      data-testid="home-scroll-progress"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none bg-[#18181A]/8 dark:bg-white/10"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-[#F4C542]"
      />
    </div>
  );
}
