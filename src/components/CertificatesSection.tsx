import { LayoutGrid } from 'lucide-react';
import { CERTIFICATES, CertificateItem } from '../data/portfolioData';
import { CertificateCard } from './CertificateCard';
import { TornEdge } from './Graphics';

interface CertificatesSectionProps {
  onOpenAllCertificates: () => void;
  onInspectCertificate: (cert: CertificateItem) => void;
}

export function CertificatesSection({
  onOpenAllCertificates,
  onInspectCertificate,
}: CertificatesSectionProps) {
  const topThree = CERTIFICATES.slice(0, 3);

  return (
    <section id="certificates" className="relative bg-[#AEEBD2] pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-2.5 py-0.5 bg-[#F43F8E] text-white text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
              CERTIFICATES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] text-[#18181A] mb-2">
              Proof, on paper.
            </h2>
            <p className="text-sm text-[#18181A]/75">
              Courses, certifications, and competitions that sharpened the craft.
            </p>
          </div>

          <div className="flex items-baseline gap-2.5">
            <span className="text-5xl font-extrabold font-mono-code tabular-nums text-[#18181A]">
              04
            </span>
            <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#18181A]/75">
              CREDENTIALS
            </span>
          </div>
        </div>

        {/* 3-Column Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topThree.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onInspect={onInspectCertificate}
            />
          ))}
        </div>

        {/* Footer Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#18181A]/15">
          <span className="text-xs font-mono-code text-[#18181A]/75 uppercase tracking-wider">
            SHOWING 03 / 04
          </span>
          <button
            type="button"
            onClick={onOpenAllCertificates}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#18181A] text-white text-xs font-mono-code font-bold tracking-wider uppercase border-2 border-[#18181A] shadow-[3px_3px_0px_#FFFFFF] hover:bg-[#2F45FF] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>ALL CERTIFICATES</span>
          </button>
        </div>
      </div>

      <div className="mt-16 -mb-16 sm:-mb-24">
        <TornEdge fill="#FAF8F3" />
      </div>
    </section>
  );
}
