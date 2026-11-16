import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ServiceSlug } from '../data/portfolioData';
import { getOtherServices, getServiceBySlug } from '../utils/portfolioLogic';
import { MaskingTape } from './Graphics';
import { ServiceDiagram } from './ServiceDiagrams';

interface ServiceDetailPageProps {
  slug: ServiceSlug;
  onBackHome: () => void;
  onNavigateService: (slug: ServiceSlug) => void;
}

export function ServiceDetailPage({
  slug,
  onBackHome,
  onNavigateService,
}: ServiceDetailPageProps) {
  const service = getServiceBySlug(slug);
  const otherServices = getOtherServices(slug);

  return (
    <main className="bg-ruled-paper pt-10 pb-20 px-5 sm:px-8">
      <div className="max-w-[1120px] mx-auto">
        {/* Back Link */}
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-[11px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#575650] hover:text-[#18181A] mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO HOME</span>
        </button>

        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 border-b border-[#18181A]/15">
          <div className="lg:col-span-6">
            <span className="inline-block px-2.5 py-0.5 bg-[#F4C542] text-[#18181A] text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
              {service.heroBadge}
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.035em] leading-[1.06] text-[#18181A] mb-5">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-[#575650] leading-relaxed max-w-[490px]">
              {service.description}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative max-w-[420px] mx-auto pt-2">
              <MaskingTape color="#F43F8E" className="mx-auto -mb-2 relative z-20 -rotate-2" />
              <div className="bg-[#F4C542] brutal-card-lg rounded-xl p-6 sm:p-8 rotate-1">
                <div className="bg-white border-2 border-[#18181A] rounded-lg p-5">
                  <ServiceDiagram type={service.principles[0].diagramType} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Alternating Engineering Principles */}
        <div className="py-16 sm:py-24 space-y-16 sm:space-y-24">
          {service.principles.map((principle, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0.92, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <span className="font-mono-code text-4xl sm:text-5xl font-extrabold text-[#2F45FF] block mb-3">
                    {principle.number}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#18181A] mb-4">
                    {principle.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#575650] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="bg-white brutal-card-lg rounded-xl p-6">
                    <ServiceDiagram type={principle.diagramType} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stack Section */}
        <div className="pt-12 border-t border-[#18181A]/15">
          <span className="inline-block px-2.5 py-0.5 bg-[#AEEBD2] text-[#18181A] text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
            STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#18181A] mb-8">
            {service.stackHeading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {service.stackGroups.map((group) => (
              <div key={group.label} className="bg-white brutal-card rounded-xl p-5">
                <span
                  className="inline-block px-2.5 py-0.5 text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4"
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
            ))}
          </div>

          {/* Other Services Navigation */}
          <div>
            <p className="text-[11px] font-mono-code font-bold tracking-[0.18em] uppercase text-[#575650] mb-4">
              OTHER SERVICES
            </p>
            <div className="border-t-2 border-[#18181A]">
              {otherServices.map((other) => (
                <button
                  key={other.slug}
                  type="button"
                  onClick={() => onNavigateService(other.slug)}
                  className="group relative w-full text-left border-b-2 border-[#18181A] py-5 px-4 flex items-center justify-between gap-4 overflow-hidden cursor-pointer"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#F4C542] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <span className="relative z-10 text-xl sm:text-2xl font-extrabold tracking-tight text-[#18181A]">
                    {other.title}
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-[#18181A] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
