import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { CERTIFICATES, CertificateItem } from '../data/portfolioData';
import { filterCertificates } from '../utils/portfolioLogic';
import { CertificateCard } from './CertificateCard';
import { TornEdge } from './Graphics';

interface CertificatesPageProps {
  onBackHome: () => void;
  onInspectCertificate: (cert: CertificateItem) => void;
}

const CATEGORIES: ('All' | CertificateItem['category'])[] = [
  'All',
  'Field Work',
  'Language',
  'AI Engineering',
];

export function CertificatesPage({
  onBackHome,
  onInspectCertificate,
}: CertificatesPageProps) {
  const [category, setCategory] = useState<'All' | CertificateItem['category']>('All');
  const filtered = filterCertificates(CERTIFICATES, category);

  return (
    <main>
      <section className="bg-ruled-paper pt-10 pb-14 px-5 sm:px-8">
        <div className="max-w-[1160px] mx-auto">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-[11px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#575650] dark:text-[#FAF8F3]/65 hover:text-[#18181A] dark:hover:text-[#FAF8F3] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#F43F8E] text-white text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
                ALL CREDENTIALS
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.035em] text-[#18181A] dark:text-[#FAF8F3] mb-3">
                The full collection.
              </h1>
              <p className="text-sm sm:text-base text-[#575650] dark:text-[#FAF8F3]/70 max-w-[460px]">
                Every course, certification, and field work credential I have earned so far, in one
                place.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl font-extrabold font-mono-code tabular-nums text-[#18181A] dark:text-[#FAF8F3]">
                0{filtered.length}
              </span>
              <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#575650] dark:text-[#FAF8F3]/60">
                CREDENTIALS EARNED
              </span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-code font-bold uppercase border-2 border-[#18181A] dark:border-white/75 transition-colors cursor-pointer ${
                  category === cat
                    ? 'bg-[#18181A] dark:bg-[#F4C542] text-white dark:text-[#18181A]'
                    : 'bg-white dark:bg-[#1F1F24] text-[#18181A] dark:text-[#FAF8F3] hover:bg-[#F4C542] dark:hover:text-[#18181A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <TornEdge fill="#AEEBD2" />

      <section className="bg-[#AEEBD2] py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((cert, idx) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={idx}
              onInspect={onInspectCertificate}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
