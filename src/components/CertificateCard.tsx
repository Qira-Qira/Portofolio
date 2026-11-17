import { motion } from 'motion/react';
import { Award, ArrowUpRight } from 'lucide-react';
import { CertificateItem } from '../data/portfolioData';
import { MaskingTape } from './Graphics';

interface CertificateCardProps {
  cert: CertificateItem;
  onInspect: (cert: CertificateItem) => void;
  index?: number;
}

const TILT_PATTERN = [-1.4, 0.8, -1.0];

export function CertificateCard({ cert, onInspect, index = 0 }: CertificateCardProps) {
  const restingRotate = TILT_PATTERN[index % TILT_PATTERN.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, rotate: restingRotate * 1.4 }}
      whileInView={{ opacity: 1, y: 0, rotate: restingRotate }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, rotate: 0, scale: 1.015 }}
      className="relative pt-2 flex flex-col"
    >
      {/* Top colored masking tape */}
      <MaskingTape
        color={cert.tapeColor}
        className="mx-auto -mb-2 relative z-20 -rotate-1"
      />

      <div className="bg-white dark:bg-[#1F1F24] brutal-card rounded-xl p-4 sm:p-5 flex-1 flex flex-col justify-between transition-colors">
        {/* Framed Certificate Visual Preview */}
        <button
          type="button"
          onClick={() => onInspect(cert)}
          aria-label={`Inspect ${cert.title} certificate`}
          className="w-full text-left rounded-lg border-8 p-4 bg-[#FAF8F3] dark:bg-[#2A2A32] mb-4 cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#18181A] dark:focus-visible:outline-[#F4C542]"
          style={{ borderColor: cert.frameColor }}
        >
          <div className="border border-[#18181A]/20 dark:border-white/15 bg-white dark:bg-[#161618] p-3.5 text-center relative">
            <div className="flex items-center justify-between text-[8px] font-mono-code text-[#575650] dark:text-[#FAF8F3]/60 uppercase mb-2">
              <span>{cert.issuer}</span>
              <span>{cert.date}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FAF8F3] dark:bg-[#242429] border border-[#18181A] dark:border-white/70 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-4 h-4 text-[#18181A] dark:text-[#F4C542]" />
            </div>
            <p className="text-[9px] font-mono-code tracking-wider uppercase text-[#575650] dark:text-[#FAF8F3]/60 mb-1">
              CERTIFICATE OF COMPLETION
            </p>
            <p className="text-xs font-extrabold text-[#18181A] dark:text-[#FAF8F3] leading-snug line-clamp-2">
              {cert.title}
            </p>
            <p className="mt-2 text-[8px] font-mono-code text-[#575650] dark:text-[#FAF8F3]/55 truncate">
              ID: {cert.credentialId}
            </p>
          </div>
        </button>

        {/* Card Footer */}
        <div>
          <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-[#18181A] dark:text-[#FAF8F3] leading-snug mb-1">
            {cert.title}
          </h3>
          <p className="text-xs text-[#575650] dark:text-[#FAF8F3]/65 mb-4">
            {cert.issuer} · {cert.date}
          </p>

          <button
            type="button"
            onClick={() => onInspect(cert)}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono-code font-bold tracking-wider uppercase text-[#18181A] dark:text-[#F4C542] hover:text-[#2F45FF] dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>VERIFY CREDENTIAL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
