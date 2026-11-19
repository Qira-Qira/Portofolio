import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { Check, Terminal } from 'lucide-react';
import { EXPERIENCE_PHOTOS, EXPERIENCE_ROLES } from '../data/portfolioData';
import { SectionHeadingGroup, SectionHeadingItem } from './SectionHeadingReveal';

export function ExperienceSection() {
  const role = EXPERIENCE_ROLES[0];
  const stackRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<'01' | '02'>('01');

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start 0.22', 'end 0.72'],
  });
  const roleScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const roleOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.92, 0.78]);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveCard(entry.isIntersecting ? '02' : '01');
        });
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="bg-ruled-paper py-20 sm:py-28 px-5 sm:px-8 border-t border-[#18181A]/10 dark:border-white/10"
    >
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <SectionHeadingGroup
          testId="experience-heading-reveal"
          className="lg:col-span-4 lg:sticky lg:top-24"
        >
          <SectionHeadingItem>
            <span className="inline-block px-2.5 py-0.5 bg-[#2F45FF] text-white text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
              EXPERIENCE
            </span>
          </SectionHeadingItem>
          <SectionHeadingItem>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] leading-[1.05] text-[#18181A] dark:text-[#FAF8F3] mb-4">
              Pengalaman Organisasi Kampus
            </h2>
          </SectionHeadingItem>
          <SectionHeadingItem>
            <p className="text-sm text-[#575650] dark:text-[#FAF8F3]/68 leading-relaxed max-w-[280px] mb-10">
              Internships, freelance, and team projects, newest first.
            </p>
          </SectionHeadingItem>

          <SectionHeadingItem className="flex items-baseline gap-3">
            <div className="h-14 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeCard}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl font-extrabold font-mono-code tabular-nums text-[#18181A] dark:text-[#FAF8F3] inline-block"
                >
                  {activeCard}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-[11px] font-mono-code tracking-[0.14em] uppercase text-[#575650] dark:text-[#FAF8F3]/60">
              {activeCard === '01' ? 'LATEST ROLE' : 'FIELD GALLERY'}
            </span>
          </SectionHeadingItem>
        </SectionHeadingGroup>

        <div ref={stackRef} className="lg:col-span-8 space-y-8 relative">
          <motion.article
            style={{ scale: roleScale, opacity: roleOpacity }}
            className="lg:sticky lg:top-24 bg-white dark:bg-[#1F1F24] brutal-card-lg rounded-xl overflow-hidden origin-top"
          >
            <div className="bg-[#F4C542] border-b-2 border-[#18181A] px-5 py-2.5 flex items-center justify-between">
              <span className="font-mono-code font-extrabold text-sm text-[#18181A]">
                {role.index}
              </span>
              {role.period && (
                <span className="text-[11px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#18181A]">
                  {role.period}
                </span>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#AEEBD2] border-2 border-[#18181A] flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5 text-[#18181A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#18181A] dark:text-[#FAF8F3]">
                    {role.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-code text-[#575650] dark:text-[#FAF8F3]/65">
                    <span className="font-bold text-[#18181A] dark:text-[#FAF8F3]">
                      {role.company}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{role.type}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#18181A]/90 dark:text-[#FAF8F3]/85 leading-relaxed mb-6">
                {role.summary}
              </p>

              <ul className="space-y-2.5 mb-7">
                {role.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-[#575650] dark:text-[#FAF8F3]/75 leading-relaxed"
                  >
                    <span className="mt-1 w-4 h-4 rounded-sm bg-[#F4C542]/45 border border-[#18181A] flex items-center justify-center shrink-0">
                      <Check
                        className="w-3 h-3 text-[#18181A] dark:text-[#FAF8F3]"
                        strokeWidth={3}
                      />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#18181A]/15 dark:border-white/15 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono-code font-semibold tracking-wider text-[#575650] dark:text-[#FAF8F3]/65">
                {role.tags.map((tag, idx) => (
                  <span key={tag} className="inline-flex items-center gap-3">
                    <span>{tag}</span>
                    {idx < role.tags.length - 1 && (
                      <span aria-hidden="true" className="text-[#18181A]/30 dark:text-white/30">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.div
            ref={galleryRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 bg-white dark:bg-[#1F1F24] brutal-card-lg rounded-xl p-4 sm:p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERIENCE_PHOTOS.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`${index === 0 ? 'sm:col-span-2' : ''} rounded-lg border-2 border-[#18181A] dark:border-white/75 overflow-hidden bg-[#FAF8F3] dark:bg-[#161618] group`}
                >
                  <div className={`${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'} w-full overflow-hidden`}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-3.5 py-2 border-t-2 border-[#18181A] dark:border-white/75 bg-white dark:bg-[#1F1F24]">
                    <p className="text-[10px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#575650] dark:text-[#FAF8F3]/70">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
