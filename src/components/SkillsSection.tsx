import { motion } from 'motion/react';
import {
  MARQUEE_RIBBON_BOTTOM,
  MARQUEE_RIBBON_TOP,
  SKILL_GROUPS,
} from '../data/portfolioData';

export function SkillsSection() {
  const repeatedTop = [...MARQUEE_RIBBON_TOP, ...MARQUEE_RIBBON_TOP, ...MARQUEE_RIBBON_TOP];
  const repeatedBottom = [
    ...MARQUEE_RIBBON_BOTTOM,
    ...MARQUEE_RIBBON_BOTTOM,
    ...MARQUEE_RIBBON_BOTTOM,
  ];

  return (
    <section id="skills" className="bg-ruled-paper py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 text-center mb-12">
        <span className="inline-block px-2.5 py-0.5 bg-[#AEEBD2] text-[#18181A] text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
          SKILLS
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] text-[#18181A] mb-3">
          What I work with.
        </h2>
        <p className="text-sm text-[#575650]">Tools I reach for first.</p>
      </div>

      {/* Dual Diagonal Marquee Ribbons */}
      <div className="relative py-8 marquee-paused select-none">
        {/* Yellow Ribbon */}
        <div className="w-[106%] -ml-[3%] bg-[#F4C542] border-y-2 border-[#18181A] py-3 -rotate-1 relative z-10 overflow-hidden shadow-[0_3px_0px_#18181A]">
          <div className="flex w-max animate-marquee-left">
            {repeatedTop.map((item, idx) => (
              <span
                key={`top-${idx}`}
                className="inline-flex items-center gap-5 px-4 text-xl sm:text-2xl font-extrabold tracking-tight text-[#18181A] whitespace-nowrap"
              >
                <span>{item}</span>
                <span className="text-[#18181A]/60" aria-hidden="true">
                  ✶
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Charcoal Ribbon */}
        <div className="w-[106%] -ml-[3%] bg-[#18181A] border-y-2 border-[#18181A] py-3 rotate-1 -mt-2 relative z-20 overflow-hidden">
          <div className="flex w-max animate-marquee-right">
            {repeatedBottom.map((item, idx) => (
              <span
                key={`bot-${idx}`}
                className="inline-flex items-center gap-5 px-4 text-xl sm:text-2xl font-extrabold tracking-tight text-[#FAF8F3] whitespace-nowrap"
              >
                <span>{item}</span>
                <span className="text-[#F4C542]" aria-hidden="true">
                  ✶
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 4-Column Stack Cards */}
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="bg-white brutal-card rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
            >
              <div>
                <span
                  className="inline-block px-2.5 py-0.5 text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-5"
                  style={{
                    backgroundColor: group.badgeColor,
                    color: group.badgeTextColor ?? '#18181A',
                  }}
                >
                  {group.label}
                </span>

                <ul className="space-y-2">
                  {group.items.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-sm font-medium text-[#18181A]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18181A]" aria-hidden="true" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
