import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton({ enabled = true }: { enabled?: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    const heroEl = document.getElementById('hero');
    if (!heroEl) {
      setVisible(false);
      return;
    }

    const updateVisibility = () => {
      const rect = heroEl.getBoundingClientRect();
      setVisible(rect.bottom <= 64);
    };

    updateVisibility();

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom <= 64);
      },
      {
        rootMargin: '-64px 0px 0px 0px',
        threshold: 0,
      },
    );

    observer.observe(heroEl);
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateVisibility);
    };
  }, [enabled]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {enabled && visible && (
        <motion.button
          key="back-to-top-fab"
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
          data-testid="back-to-top-button"
          initial={{ opacity: 0, scale: 0.75, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 16 }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-[88px] right-4 lg:bottom-8 lg:right-8 z-40 w-12 h-12 rounded-full bg-[#F4C542] text-[#18181A] border-2 border-[#18181A] dark:border-[#FAF8F3] shadow-[3px_3px_0px_#18181A] dark:shadow-[3px_3px_0px_#FAF8F3] flex items-center justify-center hover:bg-[#18181A] hover:text-[#FAF8F3] dark:hover:bg-[#FAF8F3] dark:hover:text-[#18181A] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2F45FF]"
        >
          <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
