import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { createHeadingStaggerVariants } from '../utils/portfolioLogic';

interface SectionHeadingGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
  testId?: string;
}

export function SectionHeadingGroup({
  children,
  className = '',
  staggerDelay,
  amount = 0.25,
  testId = 'section-heading-group',
}: SectionHeadingGroupProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const variants = createHeadingStaggerVariants({
    staggerDelay,
    reducedMotion: shouldReduceMotion,
  });

  return (
    <motion.div
      data-testid={testId}
      variants={variants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingItemProps {
  children: ReactNode;
  className?: string;
  distanceY?: number;
}

export function SectionHeadingItem({
  children,
  className = '',
  distanceY,
}: SectionHeadingItemProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const variants = createHeadingStaggerVariants({
    distanceY,
    reducedMotion: shouldReduceMotion,
  });

  return (
    <motion.div variants={variants.item} className={className}>
      {children}
    </motion.div>
  );
}
