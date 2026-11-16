import { Award, ArrowUpRight } from 'lucide-react';
import { CertificateItem } from '../data/portfolioData';
import { MaskingTape } from './Graphics';

interface CertificateCardProps {
  cert: CertificateItem;
  onInspect: (cert: CertificateItem) => void;
}

export function CertificateCard({ cert, onInspect }: CertificateCardProps) {
  return (
    <article className="relative pt-2 flex flex-col">
      {/* Top colored masking tape */}
      <MaskingTape
        color={cert.tapeColor}
        className="mx-auto -mb-2 relative z-20 -rotate-1"
      />

      <div className="bg-white brutal-card rounded-xl p-4 sm:p-5 flex-1 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
        {/* Framed Certificate Visual Preview */}
        <button
          type="button"
          onClick={() => onInspect(cert)}
          aria-label={`Inspect ${cert.title} certificate`}
          className="w-full text-left rounded-lg border-8 p-4 bg-[#FAF8F3] mb-4 cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#18181A]"
          style={{ borderColor: cert.frameColor }}
        >
          <div className="border border-[#18181A]/20 bg-white p-3.5 text-center relative">
            <div className="flex items-center justify-between text-[8px] font-mono-code text-[#575650] uppercase mb-2">
              <span>{cert.issuer}</span>
              <span>{cert.date}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FAF8F3] border border-[#18181A] mx-auto mb-2 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Award className="w-4 h-4 text-[#18181A]" />
            </div>
            <p className="text-[9px] font-mono-code tracking-wider uppercase text-[#575650] mb-1">
              CERTIFICATE OF COMPLETION
            </p>
            <p className="text-xs font-extrabold text-[#18181A] leading-snug line-clamp-2">
              {cert.title}
            </p>
            <p className="mt-2 text-[8px] font-mono-code text-[#575650] truncate">
              ID: {cert.credentialId}
            </p>
          </div>
        </button>

        {/* Card Footer */}
        <div>
          <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-[#18181A] leading-snug mb-1">
            {cert.title}
          </h3>
          <p className="text-xs text-[#575650] mb-4">
            {cert.issuer} · {cert.date}
          </p>

          <button
            type="button"
            onClick={() => onInspect(cert)}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono-code font-bold tracking-wider uppercase text-[#18181A] hover:text-[#2F45FF] transition-colors cursor-pointer"
          >
            <span>VERIFY CREDENTIAL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
