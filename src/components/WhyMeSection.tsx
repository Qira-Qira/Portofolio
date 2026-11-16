import { motion } from 'motion/react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { WHY_ME_CARDS } from '../data/portfolioData';
import { PaperPlaneDoodle, PinkStarburst } from './Graphics';

export function WhyMeSection() {
  return (
    <section className="bg-ruled-paper py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-[920px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-2.5 py-0.5 bg-[#F43F8E] text-white text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
            WHY ME
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] text-[#18181A]">
            Why work with me.
          </h2>
        </div>

        {/* Sticky Stacking Cards */}
        <div className="space-y-6">
          {WHY_ME_CARDS.map((card, idx) => {
            const topOffset = 88 + idx * 18;
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="sticky rounded-2xl brutal-card-lg p-7 sm:p-10 min-h-[210px] flex flex-col justify-between transition-transform"
                style={{
                  backgroundColor: card.bgColor,
                  color: card.textColor,
                  top: `${topOffset}px`,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-3">
                    <span className="font-mono-code text-5xl sm:text-6xl font-extrabold tracking-tight leading-none">
                      {card.number}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed max-w-[540px] ${
                        card.textColor === '#FFFFFF' ? 'text-white/85' : 'text-[#18181A]/80'
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom-right signature icon */}
                <div className="flex justify-end mt-6">
                  {card.icon === 'plane' && (
                    <PaperPlaneDoodle className="w-6 h-6" color={card.textColor} />
                  )}
                  {card.icon === 'asterisk' && (
                    <PinkStarburst className="w-6 h-6" color={card.textColor} />
                  )}
                  {card.icon === 'plus' && (
                    <Plus className="w-6 h-6" strokeWidth={2.5} />
                  )}
                  {card.icon === 'arrow' && (
                    <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
