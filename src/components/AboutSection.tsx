import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { STORY_STEPS, ServiceSlug, WHAT_I_BUILD_ITEMS } from '../data/portfolioData';
import { MaskingTape } from './Graphics';

interface AboutSectionProps {
  onNavigateService: (slug: ServiceSlug) => void;
}

function StoryWord({
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
  const start = (index / total) * 0.65;
  const end = Math.min(1, start + 0.28);
  const opacity = useTransform(progress, [start, end], [0.22, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

function StoryParagraph({
  step,
  index,
  isActive,
  registerRef,
  onSelect,
}: {
  step: (typeof STORY_STEPS)[number];
  index: number;
  isActive: boolean;
  registerRef: (el: HTMLDivElement | null) => void;
  onSelect: () => void;
}) {
  const localRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ['start 0.88', 'center 0.45'],
  });
  const lines = step.text.split('\n');
  const words = lines.flatMap((line) => line.split(' '));
  let wordIndex = 0;

  return (
    <div
      ref={(el) => {
        localRef.current = el;
        registerRef(el);
      }}
      onClick={onSelect}
      className="cursor-default"
    >
      <p
        className={`text-[11px] font-mono-code font-bold tracking-[0.16em] uppercase mb-3 transition-colors duration-300 ${
          isActive
            ? 'text-[#18181A] dark:text-[#F4C542]'
            : 'text-[#575650] dark:text-[#FAF8F3]/50'
        }`}
      >
        {step.number} / {step.kicker}
      </p>
      <p className="text-xl sm:text-[20px] font-semibold leading-[1.42] tracking-[-0.015em] text-[#18181A] dark:text-[#FAF8F3]">
        {lines.map((line, lineIdx) => (
          <span key={`${step.number}-line-${lineIdx}`} className="block">
            {line.split(' ').map((word) => {
              const index = wordIndex++;
              return (
                <StoryWord
                  key={`${step.number}-${index}`}
                  word={word}
                  index={index}
                  total={words.length}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        ))}
      </p>
    </div>
  );
}

export function AboutSection({ onNavigateService }: AboutSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const polaroidRotate = useTransform(sectionProgress, [0, 0.5, 1], [-2.5, -0.5, 1.8]);
  const polaroidY = useTransform(sectionProgress, [0, 1], [10, -10]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          rootMargin: '-35% 0px -45% 0px',
          threshold: 0.1,
        },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-ruled-paper py-20 sm:py-28 px-5 sm:px-8"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Polaroid Portrait + Step Counter */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              style={{ rotate: polaroidRotate, y: polaroidY }}
              className="relative max-w-[330px] mx-auto lg:mx-0"
            >
              {/* Top Pink Masking Tape */}
              <MaskingTape
                color="#F43F8E"
                className="mx-auto -mb-2 relative z-20 -rotate-2"
              />

              {/* Yellow Polaroid Frame */}
              <div className="relative bg-[#F4C542] brutal-card-lg rounded-xl p-3 pb-5 -rotate-1">
                {/* Floating Stickers */}
                <span className="absolute -top-3 -left-3 z-20 px-2.5 py-0.5 bg-[#F43F8E] text-white text-[10px] font-mono-code font-bold uppercase tracking-wider border border-[#18181A] -rotate-6 shadow-[2px_2px_0px_#18181A]">
                  FOLLOW ME
                </span>
                <span className="hidden sm:inline-block absolute top-1/2 -right-8 z-20 px-2.5 py-0.5 bg-[#2F45FF] text-white text-[10px] font-mono-code font-bold uppercase tracking-wider border border-[#18181A] rotate-3 shadow-[2px_2px_0px_#18181A]">
                  WHO IS ARIQ
                </span>

                {/* Portrait Image */}
                <div className="aspect-[3/4] w-full rounded-lg overflow-hidden border-2 border-[#18181A] bg-[#EAE6DC]">
                  <img
                    src="/assets/images/porto.webp"
                    alt="Nawaf Ariq Hilalbi"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Polaroid Caption */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-[#18181A]">SURABAYA, INDONESIA</span>
                  <span className="font-editorial-italic italic text-sm text-[#18181A]/85">
                    &ldquo;that&apos;s me, yeah&rdquo;
                  </span>
                </div>
              </div>

              {/* Active Step Indicator */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-9 overflow-hidden flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={STORY_STEPS[activeStep].number}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="text-3xl font-extrabold font-mono-code tabular-nums text-[#18181A] dark:text-[#FAF8F3] inline-block"
                    >
                      {STORY_STEPS[activeStep].number}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div className="flex items-center gap-1.5">
                  {STORY_STEPS.map((s, idx) => (
                    <button
                      key={s.number}
                      type="button"
                      onClick={() => {
                        setActiveStep(idx);
                        stepRefs.current[idx]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                      }}
                      aria-label={`Jump to story step ${s.number}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeStep
                          ? 'w-7 bg-[#18181A] dark:bg-[#F4C542]'
                          : 'w-2 bg-[#18181A]/25 dark:bg-white/25 hover:bg-[#18181A]/50 dark:hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono-code text-[#575650] dark:text-[#FAF8F3]/60 tabular-nums">
                  {STORY_STEPS[activeStep].number} / 04
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Scrollable Story Paragraphs */}
          <div className="lg:col-span-7 space-y-16 sm:space-y-24 pt-2">
            {STORY_STEPS.map((step, idx) => (
              <StoryParagraph
                key={step.number}
                step={step}
                index={idx}
                isActive={idx === activeStep}
                registerRef={(el) => {
                  stepRefs.current[idx] = el;
                }}
                onSelect={() => setActiveStep(idx)}
              />
            ))}
          </div>
        </div>

        {/* WHAT I BUILD Interactive 3-Row Strip */}
        <div className="mt-24 sm:mt-32">
          <p className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-[#575650] dark:text-[#FAF8F3]/60 mb-4">
            WHAT I BUILD
          </p>
          <div className="border-t-2 border-[#18181A] dark:border-[#FAF8F3]/80">
            {WHAT_I_BUILD_ITEMS.map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => onNavigateService(item.slug)}
                className="group relative w-full text-left border-b-2 border-[#18181A] dark:border-[#FAF8F3]/80 py-5 sm:py-6 px-3 sm:px-5 flex items-center justify-between gap-4 overflow-hidden cursor-pointer"
              >
                {/* Sliding Yellow Hover Background */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#F4C542] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <span className="relative z-10 flex items-center gap-3 text-lg sm:text-2xl font-bold tracking-tight text-[#18181A] dark:text-[#FAF8F3] group-hover:text-[#18181A] transition-colors">
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>{item.label}</span>
                </span>
                <span className="relative z-10 text-[11px] font-mono-code font-bold tracking-[0.15em] uppercase text-[#18181A]/75 dark:text-[#FAF8F3]/70 group-hover:text-[#18181A] whitespace-nowrap shrink-0 transition-colors">
                  {item.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
