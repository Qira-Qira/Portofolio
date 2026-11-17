import { FormEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { ContactFormInput, validateContactForm } from '../utils/portfolioLogic';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="contact-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] bg-black/55 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[480px] bg-white dark:bg-[#1F1F24] brutal-card-lg rounded-2xl p-6 sm:p-8 relative"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close contact dialog"
              className="absolute top-5 right-5 w-9 h-9 rounded-full border-2 border-[#18181A] dark:border-white/75 bg-[#FAF8F3] dark:bg-[#2A2A30] flex items-center justify-center hover:bg-[#F4C542] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 text-[#18181A] dark:text-[#FAF8F3]" />
            </button>

            <span className="inline-block px-2.5 py-0.5 bg-[#F4C542] text-[#18181A] text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-3">
              GET IN TOUCH
            </span>

            <h2
              id="contact-modal-title"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#18181A] dark:text-[#FAF8F3] mb-6 pr-8"
            >
              Let&apos;s build something together.
            </h2>

            {submitted ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#AEEBD2] border-2 border-[#18181A] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#18181A]" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[#18181A] dark:text-[#FAF8F3]">
                    Message received!
                  </h3>
                  <p className="text-sm text-[#575650] dark:text-[#FAF8F3]/70 mt-1">
                    Thanks,{' '}
                    <span className="font-semibold text-[#18181A] dark:text-[#FAF8F3]">
                      {form.name}
                    </span>
                    . Ariq will reply to{' '}
                    <span className="font-mono-code text-xs text-[#18181A] dark:text-[#F4C542]">
                      {form.email}
                    </span>{' '}
                    within 24 hours.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 rounded-lg border-2 border-[#18181A] dark:border-white/75 text-xs font-mono-code font-bold uppercase text-[#18181A] dark:text-[#FAF8F3] hover:bg-[#FAF8F3] dark:hover:bg-white/10 cursor-pointer"
                  >
                    Send Another
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg bg-[#18181A] dark:bg-[#F4C542] text-white dark:text-[#18181A] text-xs font-mono-code font-bold uppercase cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[10px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#575650] dark:text-[#FAF8F3]/65 mb-1.5"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#18181A] dark:border-white/75 bg-[#FAF8F3] dark:bg-[#161618] text-sm text-[#18181A] dark:text-[#FAF8F3] placeholder:text-[#575650]/70 dark:placeholder:text-[#FAF8F3]/40 focus:outline-none focus:bg-white dark:focus:bg-[#1A1A1F] focus:ring-2 focus:ring-[#F4C542]"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#E11D48] font-medium mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[10px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#575650] dark:text-[#FAF8F3]/65 mb-1.5"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#18181A] dark:border-white/75 bg-[#FAF8F3] dark:bg-[#161618] text-sm text-[#18181A] dark:text-[#FAF8F3] placeholder:text-[#575650]/70 dark:placeholder:text-[#FAF8F3]/40 focus:outline-none focus:bg-white dark:focus:bg-[#1A1A1F] focus:ring-2 focus:ring-[#F4C542]"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#E11D48] font-medium mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#575650] dark:text-[#FAF8F3]/65 mb-1.5"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about your project, timeline, or what you are trying to ship..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#18181A] dark:border-white/75 bg-[#FAF8F3] dark:bg-[#161618] text-sm text-[#18181A] dark:text-[#FAF8F3] placeholder:text-[#575650]/70 dark:placeholder:text-[#FAF8F3]/40 focus:outline-none focus:bg-white dark:focus:bg-[#1A1A1F] focus:ring-2 focus:ring-[#F4C542] resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-[#E11D48] font-medium mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#18181A] dark:bg-[#F4C542] text-white dark:text-[#18181A] text-xs font-mono-code font-bold tracking-[0.14em] uppercase hover:bg-[#2F45FF] dark:hover:bg-white transition-colors cursor-pointer"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
