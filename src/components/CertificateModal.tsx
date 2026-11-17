import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Award, ExternalLink, X } from 'lucide-react';
import { CertificateItem } from '../data/portfolioData';

export function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: CertificateItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!certificate) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate details for ${certificate.title}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[540px] bg-white dark:bg-[#1F1F24] brutal-card-lg rounded-2xl p-6 sm:p-8 relative"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="absolute top-5 right-5 w-9 h-9 rounded-full border-2 border-[#18181A] dark:border-white/75 bg-[#FAF8F3] dark:bg-[#2A2A30] text-[#18181A] dark:text-[#FAF8F3] flex items-center justify-center hover:bg-[#F4C542] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div
              className="rounded-xl border-8 p-6 bg-[#FAF8F3] dark:bg-[#2A2A32] text-center mb-5"
              style={{ borderColor: certificate.frameColor }}
            >
              <div className="bg-white dark:bg-[#161618] border border-[#18181A]/20 dark:border-white/15 p-6">
                <p className="text-[10px] font-mono-code uppercase tracking-[0.18em] text-[#575650] dark:text-[#FAF8F3]/65 mb-3">
                  {certificate.subtitle}
                </p>
                <div className="w-12 h-12 rounded-full bg-[#F4C542]/40 border-2 border-[#18181A] dark:border-[#F4C542] mx-auto mb-3 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#18181A] dark:text-[#F4C542]" />
                </div>
                <p className="text-xs font-mono-code text-[#575650] dark:text-[#FAF8F3]/60 mb-1">
                  AWARDED TO
                </p>
                <h3 className="text-xl font-extrabold text-[#18181A] dark:text-[#FAF8F3] mb-2">
                  Nawaf Ariq Hilalbi
                </h3>
                <p className="text-sm font-bold text-[#18181A] dark:text-[#FAF8F3] mb-4">
                  {certificate.title}
                </p>
                <div className="pt-3 border-t border-[#18181A]/15 dark:border-white/15 flex items-center justify-between text-[10px] font-mono-code text-[#575650] dark:text-[#FAF8F3]/65">
                  <span>{certificate.issuer}</span>
                  <span>{certificate.date}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono-code uppercase text-[#575650] dark:text-[#FAF8F3]/60">
                  CREDENTIAL ID
                </p>
                <p className="text-xs font-mono-code font-bold text-[#18181A] dark:text-[#FAF8F3]">
                  {certificate.credentialId}
                </p>
              </div>
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#18181A] dark:bg-[#F4C542] text-white dark:text-[#18181A] text-xs font-mono-code font-bold uppercase hover:bg-[#2F45FF] dark:hover:bg-white transition-colors"
              >
                <span>VERIFY ISSUER</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
