import { motion } from 'motion/react';
import { Check, Terminal } from 'lucide-react';
import { EXPERIENCE_PHOTOS, EXPERIENCE_ROLES } from '../data/portfolioData';

export function ExperienceSection() {
  const role = EXPERIENCE_ROLES[0];

  return (
    <section id="experience" className="bg-ruled-paper py-20 sm:py-28 px-5 sm:px-8 border-t border-[#18181A]/10">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Sticky Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <span className="inline-block px-2.5 py-0.5 bg-[#2F45FF] text-white text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
            EXPERIENCE
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] leading-[1.05] text-[#18181A] mb-4">
            Where I&apos;ve worked.
          </h2>
          <p className="text-sm text-[#575650] leading-relaxed max-w-[280px] mb-10">
            Internships, freelance, and team projects, newest first.
          </p>

          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-extrabold font-mono-code tabular-nums text-[#18181A]">
              01
            </span>
            <span className="text-[11px] font-mono-code tracking-[0.14em] uppercase text-[#575650]">
              LATEST ROLE
            </span>
          </div>
        </div>

        {/* Right Experience Cards Stack */}
        <div className="lg:col-span-8 space-y-8">
          {/* Card 01: Web Developer at PT. Niconsite */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white brutal-card-lg rounded-xl overflow-hidden"
          >
            {/* Top Yellow Header Bar */}
            <div className="bg-[#F4C542] border-b-2 border-[#18181A] px-5 py-2.5 flex items-center justify-between">
              <span className="font-mono-code font-extrabold text-sm text-[#18181A]">
                {role.index}
              </span>
              <span className="text-[11px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#18181A]">
                {role.period}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#AEEBD2] border-2 border-[#18181A] flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5 text-[#18181A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#18181A]">
                    {role.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-code text-[#575650]">
                    <span className="font-bold text-[#18181A]">{role.company}</span>
                    <span aria-hidden="true">·</span>
                    <span>{role.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>{role.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{role.mode}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#18181A]/90 leading-relaxed mb-6">
                {role.summary}
              </p>

              <ul className="space-y-2.5 mb-7">
                {role.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#575650] leading-relaxed">
                    <span className="mt-1 w-4 h-4 rounded-sm bg-[#F4C542]/40 border border-[#18181A] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#18181A]" strokeWidth={3} />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#18181A]/15 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-mono-code font-semibold tracking-wider text-[#575650]">
                {role.tags.map((tag, idx) => (
                  <span key={tag} className="inline-flex items-center gap-3">
                    <span>{tag}</span>
                    {idx < role.tags.length - 1 && (
                      <span aria-hidden="true" className="text-[#18181A]/30">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Card 02: Internship Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white brutal-card-lg rounded-xl p-4 sm:p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Large top photo spanning 2 cols */}
              <div className="sm:col-span-2 rounded-lg border-2 border-[#18181A] overflow-hidden bg-[#FAF8F3]">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={EXPERIENCE_PHOTOS[0].src}
                    alt={EXPERIENCE_PHOTOS[0].alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-3.5 py-2 border-t-2 border-[#18181A] bg-white">
                  <p className="text-[10px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#575650]">
                    {EXPERIENCE_PHOTOS[0].caption}
                  </p>
                </div>
              </div>

              {/* Bottom 2 photos */}
              {EXPERIENCE_PHOTOS.slice(1).map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-lg border-2 border-[#18181A] overflow-hidden bg-[#FAF8F3]"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="px-3 py-2 border-t-2 border-[#18181A] bg-white">
                    <p className="text-[10px] font-mono-code font-bold tracking-[0.12em] uppercase text-[#575650] truncate">
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
