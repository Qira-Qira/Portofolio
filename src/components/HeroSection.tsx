import { motion } from 'motion/react';
import { ArrowDown, Mail } from 'lucide-react';
import { PinkStarburst, PixelWordmark } from './Graphics';

interface HeroSectionProps {
  ready: boolean;
  onOpenContact: () => void;
  onSeeWork: () => void;
}

export function HeroSection({ ready, onOpenContact, onSeeWork }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative bg-ruled-paper pt-12 sm:pt-16 pb-20 sm:pb-28 px-5 sm:px-8 overflow-hidden"
    >
      <div className="max-w-[1060px] mx-auto flex flex-col items-center text-center">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial-italic italic text-2xl sm:text-3xl text-[#18181A]/85 dark:text-[#FAF8F3]/85 mb-5"
        >
          hi, i&apos;m
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.72, scaleY: 0.9 }}
          animate={
            ready
              ? { opacity: 1, scaleX: 1, scaleY: 1 }
              : { opacity: 0, scaleX: 0.72, scaleY: 0.9 }
          }
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block px-7 sm:px-14 py-5 sm:py-7 border-2 border-[#E14B32]/85 bg-[#FAF8F3]/80 dark:bg-[#1E1E22]/85 mb-5"
        >
          {/* 4 Figma selection corner handles */}
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#E14B32]" />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#E14B32]" />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#E14B32]" />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#E14B32]" />

          {/* Floating tilted stickers with gentle continuous bob */}
          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: -14 }}
            animate={
              ready
                ? { opacity: 1, scale: 1, rotate: -6, y: [0, -4, 0] }
                : { opacity: 0, scale: 0.6 }
            }
            transition={{
              opacity: { delay: 0.42, duration: 0.35 },
              scale: { delay: 0.42, type: 'spring', stiffness: 280, damping: 18 },
              y: { delay: 0.8, duration: 3.4, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="inline-block absolute -top-3 left-1 sm:-top-5 sm:-left-16 px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-[#DCE8FF] border border-[#18181A] shadow-[2px_2px_0px_#18181A] text-[7px] sm:text-[10px] font-mono-code font-bold tracking-[0.04em] sm:tracking-wider uppercase whitespace-nowrap text-[#18181A]"
          >
            WEB DEVELOPMENT
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
            animate={
              ready
                ? { opacity: 1, scale: 1, rotate: 4, y: [0, -3, 0] }
                : { opacity: 0, scale: 0.6 }
            }
            transition={{
              opacity: { delay: 0.48, duration: 0.35 },
              scale: { delay: 0.48, type: 'spring', stiffness: 280, damping: 18 },
              y: { delay: 1.0, duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="inline-block absolute -top-3 right-1 sm:-top-5 sm:-right-20 px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-[#F4C542] border border-[#18181A] shadow-[2px_2px_0px_#18181A] text-[7px] sm:text-[10px] font-mono-code font-bold tracking-[0.04em] sm:tracking-wider uppercase whitespace-nowrap text-[#18181A]"
          >
            MOBILE DEV
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={
              ready
                ? { opacity: 1, scale: 1, rotate: -3, y: [0, 3, 0] }
                : { opacity: 0, scale: 0.6 }
            }
            transition={{
              opacity: { delay: 0.54, duration: 0.35 },
              scale: { delay: 0.54, type: 'spring', stiffness: 280, damping: 18 },
              y: { delay: 1.1, duration: 3.6, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="inline-block absolute -bottom-3 left-1 sm:-bottom-4 sm:-left-12 px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-[#FFE2EC] border border-[#18181A] shadow-[2px_2px_0px_#18181A] text-[7px] sm:text-[10px] font-mono-code font-bold tracking-[0.04em] sm:tracking-wider uppercase whitespace-nowrap text-[#18181A]"
          >
            EDITING
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
            animate={
              ready
                ? { opacity: 1, scale: 1, rotate: 5, y: [0, 4, 0] }
                : { opacity: 0, scale: 0.6 }
            }
            transition={{
              opacity: { delay: 0.6, duration: 0.35 },
              scale: { delay: 0.6, type: 'spring', stiffness: 280, damping: 18 },
              y: { delay: 0.9, duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="inline-block absolute -bottom-3 right-1 sm:-bottom-4 sm:-right-10 px-1.5 sm:px-2.5 py-0.5 sm:py-1 bg-[#AEEBD2] border border-[#18181A] shadow-[2px_2px_0px_#18181A] text-[7px] sm:text-[10px] font-mono-code font-bold tracking-[0.04em] sm:tracking-wider uppercase whitespace-nowrap text-[#18181A]"
          >
            PHOTOGRAPHER
          </motion.span>

          <div className="w-[240px] sm:w-[390px] md:w-[460px] text-[#18181A] dark:text-[#FAF8F3]">
            {ready && (
              <PixelWordmark
                word="ARIQ"
                color="currentColor"
                className="w-full h-auto"
                animated
                delayBase={0.14}
              />
            )}
          </div>
        </motion.div>

        {/* Sub-line caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="text-[11px] font-mono-code tracking-[0.16em] uppercase text-[#575650] dark:text-[#FAF8F3]/65 mb-9"
        >
          ✦ TAKING NEW PROJECTS AT NICONSITE
        </motion.p>

        {/* Main Hero Display Headline with line mask + popping inline badges */}
        <h1
          className="text-4xl sm:text-5xl md:text-[58px] font-extrabold tracking-[-0.025em] leading-[1.15] text-[#18181A] dark:text-[#FAF8F3] max-w-[820px] mb-6"
          style={{ textWrap: 'balance' }}
        >
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              initial={{ y: '105%' }}
              animate={ready ? { y: '0%' } : { y: '105%' }}
              transition={{ delay: 0.42, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Building Digital Products.{' '}
              <motion.span
                initial={{ scale: 0, rotate: -45 }}
                animate={ready ? { scale: 1, rotate: 0 } : { scale: 0 }}
                transition={{ delay: 0.65, type: 'spring', stiffness: 320, damping: 18 }}
                className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#19B56F] border-2 border-[#18181A] align-middle -translate-y-1 mx-0.5"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </motion.span>
            </motion.span>
          </span>
          <br className="hidden sm:inline" />
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              initial={{ y: '105%' }}
              animate={ready ? { y: '0%' } : { y: '105%' }}
              transition={{ delay: 0.52, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={ready ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.72, type: 'spring', stiffness: 300, damping: 18 }}
                className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#18181A] align-middle -translate-y-1 mr-2"
              >
                <img
                  src="/assets/images/porto2.webp"
                  alt="Ariq avatar"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </motion.span>
              Code, Capture, Create.{' '}
              <motion.span
                initial={{ scale: 0, rotate: -90 }}
                animate={ready ? { scale: 1, rotate: 0 } : { scale: 0 }}
                transition={{ delay: 0.78, type: 'spring', stiffness: 300, damping: 16 }}
                className="inline-block align-middle -translate-y-1 mx-0.5"
              >
                <PinkStarburst className="w-7 h-7 sm:w-9 sm:h-9" />
              </motion.span>
              <motion.span
                initial={{ scale: 0 }}
                animate={ready ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.84, type: 'spring', stiffness: 300, damping: 18 }}
                className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-[#18181A] align-middle -translate-y-1 ml-1"
              >
                <img
                  src="/assets/images/porto2.webp"
                  alt="Ariq portrait badge"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </motion.span>
            </motion.span>
          </span>
        </h1>

        {/* Sub-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-sm sm:text-base text-[#575650] dark:text-[#FAF8F3]/70 max-w-[540px] leading-relaxed mb-9"
        >
          I’m a Full-Stack & Mobile Developer with a photographer’s eye. I build fast, functional digital products and craft the visual stories that bring them to life.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.72, duration: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3.5"
        >
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#18181A] dark:bg-[#F4C542] text-[#FAF8F3] dark:text-[#18181A] text-xs font-mono-code font-bold tracking-wider uppercase border-2 border-[#18181A] shadow-[3px_3px_0px_#F4C542] dark:shadow-[3px_3px_0px_#FFFFFF] hover:-translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>HIRE ARIQ</span>
          </button>
          <button
            type="button"
            onClick={onSeeWork}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#222226] text-[#18181A] dark:text-[#FAF8F3] text-xs font-mono-code font-bold tracking-wider uppercase border-2 border-[#18181A] dark:border-white/80 shadow-[3px_3px_0px_#18181A] dark:shadow-[3px_3px_0px_#F4C542] hover:bg-[#F4C542] hover:text-[#18181A] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>SEE MY WORK</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
