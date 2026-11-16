import { motion } from 'motion/react';
import { ArrowDown, Mail } from 'lucide-react';
import { PinkStarburst, PixelWordmark } from './Graphics';

interface HeroSectionProps {
  onOpenContact: () => void;
  onSeeWork: () => void;
}

export function HeroSection({ onOpenContact, onSeeWork }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative bg-ruled-paper pt-12 sm:pt-16 pb-20 sm:pb-28 px-5 sm:px-8 overflow-hidden"
    >
      <div className="max-w-[1060px] mx-auto flex flex-col items-center text-center">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial-italic italic text-2xl sm:text-3xl text-[#18181A]/85 mb-5"
        >
          hi, i&apos;m
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block px-7 sm:px-14 py-5 sm:py-7 border-2 border-[#E14B32]/85 bg-[#FAF8F3]/75 mb-5"
        >
          {/* 4 Figma selection corner handles */}
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#E14B32]" />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#E14B32]" />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#E14B32]" />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#E14B32]" />

          {/* Floating tilted stickers */}
          <motion.span
            initial={{ opacity: 0, x: -12, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="hidden sm:inline-block absolute -top-5 -left-16 px-2.5 py-1 bg-[#DCE8FF] border border-[#18181A] shadow-[2px_2px_0px_#18181A] text-[10px] font-mono-code font-bold tracking-wider uppercase text-[#18181A]"
          >
            FULL-STACK DEV
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 12, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 4 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="hidden sm:inline-block absolute -top-5 -right-20 px-2.5 py-1 bg-[#F4C542] border border-[#18181A] shadow-[2px_2px_0px_#18181A] text-[10px] font-mono-code font-bold tracking-wider uppercase text-[#18181A]"
          >
            MEET THE BUILDER
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 8, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="hidden sm:inline-block absolute -bottom-4 -left-12 px-2.5 py-1 bg-[#FFE2EC] border border-[#18181A] shadow-[2px_2px_0px_#18181A] text-[10px] font-mono-code font-bold tracking-wider uppercase text-[#18181A]"
          >
            REAL IMPACT
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 8, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="hidden sm:inline-block absolute -bottom-4 -right-10 px-2.5 py-1 bg-[#AEEBD2] border border-[#18181A] shadow-[2px_2px_0px_#18181A] text-[10px] font-mono-code font-bold tracking-wider uppercase text-[#18181A]"
          >
            SHIP IT
          </motion.span>

          <div className="w-[240px] sm:w-[390px] md:w-[460px]">
            <PixelWordmark word="ARIQ" color="#18181A" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* Sub-line caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="text-[11px] font-mono-code tracking-[0.16em] uppercase text-[#575650] mb-9"
        >
          ✦ TAKING NEW PROJECTS AT NICONSITE
        </motion.p>

        {/* Main Hero Display Headline with inline badges & portrait */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-[58px] font-extrabold tracking-[-0.025em] leading-[1.14] text-[#18181A] max-w-[820px] mb-6"
          style={{ textWrap: 'balance' }}
        >
          I build platforms that{' '}
          <span
            className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#19B56F] border-2 border-[#18181A] align-middle -translate-y-1 mx-0.5"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none">
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.2" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </span>
          <br className="hidden sm:inline" />{' '}
          <span className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#18181A] align-middle -translate-y-1 mr-2">
            <img
              src="/src/assets/images/alden_portrait_1794749716543.jpg"
              alt="Alden avatar"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </span>
          ship, scale, and last.{' '}
          <PinkStarburst className="inline-block w-7 h-7 sm:w-9 sm:h-9 align-middle -translate-y-1 mx-0.5" />
          <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-[#18181A] align-middle -translate-y-1 ml-1">
            <img
              src="/src/assets/images/alden_portrait_1794749716543.jpg"
              alt="Alden portrait badge"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </span>
        </motion.h1>

        {/* Sub-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm sm:text-base text-[#575650] max-w-[540px] leading-relaxed mb-9"
        >
          Ariq builds websites, web applications, and Android mobile applications at Niconsite, with
          a focus on software that is reliable, maintainable, and ready to ship.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3.5"
        >
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#18181A] text-[#FAF8F3] text-xs font-mono-code font-bold tracking-wider uppercase border-2 border-[#18181A] shadow-[3px_3px_0px_#F4C542] hover:-translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>HIRE ARIQ</span>
          </button>
          <button
            type="button"
            onClick={onSeeWork}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-[#18181A] text-xs font-mono-code font-bold tracking-wider uppercase border-2 border-[#18181A] shadow-[3px_3px_0px_#18181A] hover:bg-[#F4C542] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>SEE MY WORK</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
