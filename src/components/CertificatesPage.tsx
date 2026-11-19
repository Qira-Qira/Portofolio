import { ArrowLeft } from 'lucide-react';
import { CERTIFICATE_IMAGES } from '../data/portfolioData';
import { CertificateImageGallery } from './CertificateImageGallery';
import { TornEdge } from './Graphics';

interface CertificatesPageProps {
  onBackHome: () => void;
}

export function CertificatesPage({ onBackHome }: CertificatesPageProps) {
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
                All {CERTIFICATE_IMAGES.length} certificates and event credentials in one place.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl font-extrabold font-mono-code tabular-nums text-[#18181A] dark:text-[#FAF8F3]">
                {CERTIFICATE_IMAGES.length}
              </span>
              <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#575650] dark:text-[#FAF8F3]/60">
                CREDENTIALS EARNED
              </span>
            </div>
          </div>
        </div>
      </section>

      <TornEdge fill="#AEEBD2" />

      <section className="bg-[#AEEBD2] py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[1160px] mx-auto">
          <CertificateImageGallery />
        </div>
      </section>
    </main>
  );
}
