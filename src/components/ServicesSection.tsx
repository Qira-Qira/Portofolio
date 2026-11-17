import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ServiceSlug } from '../data/portfolioData';
import { MaskingTape } from './Graphics';
import { SectionHeadingGroup, SectionHeadingItem } from './SectionHeadingReveal';

const SERVICE_ROWS: { number: string; title: string; slug: ServiceSlug }[] = [
  { number: '01', title: 'Websites', slug: 'websites' },
  { number: '02', title: 'Web Applications', slug: 'web-applications' },
  { number: '03', title: 'Mobile Applications', slug: 'mobile-applications' },
];

export function ServicesSection({
  onNavigateService,
}: {
  onNavigateService: (slug: ServiceSlug) => void;
}) {
  return (
    <section id="services" className="bg-ruled-paper py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-[1160px] mx-auto">
        {/* Top Split: Heading + 3-Device Wireframe Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          <SectionHeadingGroup testId="services-heading-reveal" className="lg:col-span-6">
            <SectionHeadingItem>
              <span className="inline-block px-2.5 py-0.5 bg-[#F4C542] text-[#18181A] text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
                SERVICES
              </span>
            </SectionHeadingItem>
            <SectionHeadingItem>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.08] text-[#18181A] dark:text-[#FAF8F3] mb-5">
                Built for screens.{' '}
                <br />
                Made to last.
              </h2>
            </SectionHeadingItem>
            <SectionHeadingItem>
              <p className="text-sm sm:text-base text-[#575650] dark:text-[#FAF8F3]/70 leading-relaxed max-w-[480px]">
                Three things I build at Niconsite: websites, web applications, and Android mobile
                applications. Every pixel deliberate, every interaction considered, software that holds
                up under real use.
              </p>
            </SectionHeadingItem>
          </SectionHeadingGroup>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[460px] mx-auto pt-2"
            >
              <MaskingTape color="#F4C542" className="mx-auto -mb-2 relative z-20 rotate-1" />
              <div className="bg-white dark:bg-[#1F1F24] brutal-card-lg rounded-xl p-6 sm:p-8">
                {/* 3 Connected Devices Wireframe SVG */}
                <svg
                  viewBox="0 0 380 160"
                  fill="none"
                  className="w-full h-auto"
                  aria-label="Desktop, laptop, and mobile wireframe diagram"
                >
                  {/* Desktop Browser */}
                  <rect
                    x="10"
                    y="18"
                    width="138"
                    height="98"
                    rx="6"
                    fill="#FAF8F3"
                    stroke="#18181A"
                    strokeWidth="2"
                  />
                  <line x1="10" y1="34" x2="148" y2="34" stroke="#18181A" strokeWidth="1.5" />
                  <circle cx="20" cy="26" r="2.5" fill="#F43F8E" />
                  <circle cx="29" cy="26" r="2.5" fill="#F4C542" />
                  <circle cx="38" cy="26" r="2.5" fill="#AEEBD2" />
                  <rect
                    x="20"
                    y="44"
                    width="60"
                    height="12"
                    rx="2"
                    fill="#F4C542"
                    stroke="#18181A"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="20"
                    y="64"
                    width="116"
                    height="40"
                    rx="3"
                    fill="white"
                    stroke="#18181A"
                    strokeWidth="1.5"
                  />

                  {/* Web App Laptop */}
                  <rect
                    x="166"
                    y="24"
                    width="124"
                    height="88"
                    rx="6"
                    fill="white"
                    stroke="#18181A"
                    strokeWidth="2"
                  />
                  <rect
                    x="176"
                    y="34"
                    width="28"
                    height="68"
                    rx="2"
                    fill="#AEEBD2"
                    stroke="#18181A"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="212"
                    y="34"
                    width="68"
                    height="28"
                    rx="2"
                    fill="#FAF8F3"
                    stroke="#18181A"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="212"
                    y="68"
                    width="32"
                    height="34"
                    rx="2"
                    fill="#2F45FF"
                    stroke="#18181A"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="248"
                    y="68"
                    width="32"
                    height="34"
                    rx="2"
                    fill="#FAF8F3"
                    stroke="#18181A"
                    strokeWidth="1.5"
                  />
                  <rect x="158" y="114" width="140" height="8" rx="3" fill="#18181A" />

                  {/* Mobile Phone */}
                  <rect
                    x="310"
                    y="28"
                    width="56"
                    height="104"
                    rx="10"
                    fill="white"
                    stroke="#18181A"
                    strokeWidth="2"
                  />
                  <line
                    x1="330"
                    y1="36"
                    x2="346"
                    y2="36"
                    stroke="#18181A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="318"
                    y="46"
                    width="40"
                    height="26"
                    rx="3"
                    fill="#F43F8E"
                    stroke="#18181A"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="318"
                    y="78"
                    width="40"
                    height="14"
                    rx="2"
                    fill="#FAF8F3"
                    stroke="#18181A"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="318"
                    y="96"
                    width="40"
                    height="14"
                    rx="2"
                    fill="#FAF8F3"
                    stroke="#18181A"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3 Interactive Service Rows */}
        <div className="border-t-2 border-[#18181A] dark:border-[#FAF8F3]/80">
          {SERVICE_ROWS.map((row) => (
            <button
              key={row.slug}
              type="button"
              onClick={() => onNavigateService(row.slug)}
              className="group relative w-full text-left border-b-2 border-[#18181A] dark:border-[#FAF8F3]/80 py-6 sm:py-7 px-3 sm:px-6 flex items-center justify-between gap-4 overflow-hidden cursor-pointer"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[#F4C542] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <span className="relative z-10 flex items-center gap-5 sm:gap-8">
                <span className="text-xs font-mono-code font-bold text-[#575650] dark:text-[#FAF8F3]/60 group-hover:text-[#18181A] transition-colors">
                  {row.number}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#18181A] dark:text-[#FAF8F3] group-hover:text-[#18181A] transition-colors">
                  {row.title}
                </span>
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 text-[#18181A] dark:text-[#FAF8F3] group-hover:text-[#18181A] transition-all duration-200 group-hover:translate-x-1.5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
