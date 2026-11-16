import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { STORY_STEPS, ServiceSlug, WHAT_I_BUILD_ITEMS } from '../data/portfolioData';
import { MaskingTape } from './Graphics';

interface AboutSectionProps {
  onNavigateService: (slug: ServiceSlug) => void;
}

export function AboutSection({ onNavigateService }: AboutSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <section id="about" className="bg-ruled-paper py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Polaroid Portrait + Step Counter */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative max-w-[330px] mx-auto lg:mx-0">
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
                  WHO IS ALDEN
                </span>

                {/* Portrait Image */}
                <div className="aspect-[3/4] w-full rounded-lg overflow-hidden border-2 border-[#18181A] bg-[#EAE6DC]">
                  <img
                    src="/src/assets/images/alden_portrait_1794749716543.jpg"
                    alt="Muhammad Alden Prabaswara"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Polaroid Caption */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <span className="text-xs font-bold text-[#18181A]">Malang, ID</span>
                  <span className="font-editorial-italic italic text-sm text-[#18181A]/85">
                    &ldquo;that&apos;s me, yeah&rdquo;
                  </span>
                </div>
              </div>

              {/* Active Step Indicator */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-3xl font-extrabold font-mono-code tabular-nums text-[#18181A]">
                  {STORY_STEPS[activeStep].number}
                </span>
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
                          ? 'w-7 bg-[#18181A]'
                          : 'w-2 bg-[#18181A]/25 hover:bg-[#18181A]/50'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono-code text-[#575650] tabular-nums">
                  {STORY_STEPS[activeStep].number} / 04
                </span>
              </div>
            </div>
          </div>

          {/* Right Scrollable Story Paragraphs */}
          <div className="lg:col-span-7 space-y-16 sm:space-y-24 pt-2">
            {STORY_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <motion.div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  initial={{ opacity: 0.45 }}
                  animate={{ opacity: isActive ? 1 : 0.42 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-default"
                >
                  <p className="text-[11px] font-mono-code font-bold tracking-[0.16em] uppercase text-[#575650] mb-3">
                    {step.number} / {step.kicker}
                  </p>
                  <p className="text-xl sm:text-[26px] font-semibold leading-[1.42] tracking-[-0.015em] text-[#18181A]">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* WHAT I BUILD Interactive 3-Row Strip */}
        <div className="mt-24 sm:mt-32">
          <p className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-[#575650] mb-4">
            WHAT I BUILD
          </p>
          <div className="border-t-2 border-[#18181A]">
            {WHAT_I_BUILD_ITEMS.map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => onNavigateService(item.slug)}
                className="group relative w-full text-left border-b-2 border-[#18181A] py-5 sm:py-6 px-3 sm:px-5 flex items-center justify-between gap-4 overflow-hidden cursor-pointer"
              >
                {/* Sliding Yellow Hover Background */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#F4C542] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <span className="relative z-10 flex items-center gap-3 text-lg sm:text-2xl font-bold tracking-tight text-[#18181A]">
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>{item.label}</span>
                </span>
                <span className="relative z-10 text-[11px] font-mono-code font-bold tracking-[0.15em] uppercase text-[#18181A]/75 whitespace-nowrap shrink-0">
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
