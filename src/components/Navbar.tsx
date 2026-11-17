import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Award,
  ChevronDown,
  FolderKanban,
  Github,
  Home,
  Instagram,
  Layers,
  Linkedin,
  Moon,
  Sun,
  User,
  UsersRound,
  X,
} from 'lucide-react';
import { AMonogram } from './Graphics';
import { ServiceSlug, WHAT_I_BUILD_ITEMS } from '../data/portfolioData';
import {
  computeNavbarPillState,
  NAVBAR_PILL_SCROLL_THRESHOLD,
} from '../utils/portfolioLogic';

export type AppRoute =
  | { type: 'home' }
  | { type: 'service'; slug: ServiceSlug }
  | { type: 'certificates' }
  | { type: 'projects' };

type MobileNavTab = 'home' | 'about' | 'projects' | 'certificates' | 'services';

interface NavbarProps {
  route: AppRoute;
  darkMode: boolean;
  onToggleTheme: () => void;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: ServiceSlug) => void;
  onNavigateCertificates: () => void;
  onNavigateProjects: () => void;
}

export function Navbar({
  route,
  darkMode,
  onToggleTheme,
  onNavigateHome,
  onNavigateService,
  onNavigateCertificates,
  onNavigateProjects,
}: NavbarProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSocialOpen, setMobileSocialOpen] = useState(false);
  const [floatingBarExpanded, setFloatingBarExpanded] = useState(false);
  const [viewport, setViewport] = useState(() =>
    typeof window !== 'undefined'
      ? { width: window.innerWidth, isDesktop: window.innerWidth >= 1024 }
      : { width: 1440, isDesktop: true },
  );
  const isDesktop = viewport.isDesktop;
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > NAVBAR_PILL_SCROLL_THRESHOLD : false,
  );
  const [activeHomeSection, setActiveHomeSection] = useState<MobileNavTab>('home');
  const shellRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileBottomBarRef = useRef<HTMLElement>(null);
  const mobileSocialRef = useRef<HTMLDivElement>(null);
  const expandedScrollAnchorRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const syncViewport = () => {
      const width = window.innerWidth;
      const desktop = width >= 1024;
      setViewport((prev) =>
        prev.width === width && prev.isDesktop === desktop ? prev : { width, isDesktop: desktop },
      );
      if (!desktop) {
        expandedScrollAnchorRef.current = null;
        setFloatingBarExpanded(false);
        setServicesOpen(false);
      } else {
        setMobileServicesOpen(false);
        setMobileSocialOpen(false);
      }
    };

    syncViewport();
    window.addEventListener('resize', syncViewport, { passive: true });
    return () => window.removeEventListener('resize', syncViewport);
  }, []);

  useEffect(() => {
    const syncScroll = () => {
      const currentY = window.scrollY;
      const nextPast = isDesktop && currentY > NAVBAR_PILL_SCROLL_THRESHOLD;
      setScrolledPastThreshold((prev) => (prev === nextPast ? prev : nextPast));

      if (!isDesktop || !nextPast) {
        expandedScrollAnchorRef.current = null;
        setFloatingBarExpanded(false);
      } else if (
        expandedScrollAnchorRef.current !== null &&
        Math.abs(currentY - expandedScrollAnchorRef.current) > 40 &&
        !servicesOpen
      ) {
        expandedScrollAnchorRef.current = null;
        setFloatingBarExpanded(false);
      }

      if (route.type === 'home') {
        const probeY = currentY + 220;
        const sectionTargets: Array<{ id: string; tab: MobileNavTab }> = [
          { id: 'services', tab: 'services' },
          { id: 'certificates', tab: 'certificates' },
          { id: 'projects', tab: 'projects' },
          { id: 'about', tab: 'about' },
        ];
        let matched: MobileNavTab = 'home';
        for (const item of sectionTargets) {
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.getBoundingClientRect().top + currentY;
            if (probeY >= top) {
              matched = item.tab;
              break;
            }
          }
        }
        setActiveHomeSection((prev) => (prev === matched ? prev : matched));
      }
    };

    syncScroll();
    window.addEventListener('scroll', syncScroll, { passive: true });
    return () => window.removeEventListener('scroll', syncScroll);
  }, [route, isDesktop, servicesOpen]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (mobileBottomBarRef.current && !mobileBottomBarRef.current.contains(target)) {
        setMobileServicesOpen(false);
      }
      if (mobileSocialRef.current && !mobileSocialRef.current.contains(target)) {
        setMobileSocialOpen(false);
      }
      if (floatingBarExpanded && shellRef.current && !shellRef.current.contains(target)) {
        expandedScrollAnchorRef.current = null;
        setFloatingBarExpanded(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        expandedScrollAnchorRef.current = null;
        setFloatingBarExpanded(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
        setMobileSocialOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [floatingBarExpanded, mobileSocialOpen]);

  const { mode, showOnlyLogo, hasBackdropBlur } = computeNavbarPillState({
    scrollY: scrolledPastThreshold ? NAVBAR_PILL_SCROLL_THRESHOLD + 1 : 0,
    isDesktop,
    floatingBarExpanded,
    dropdownOpen: servicesOpen,
  });

  const handleLogoClick = () => {
    if (mode === 'pill-logo') {
      expandedScrollAnchorRef.current = typeof window !== 'undefined' ? window.scrollY : 0;
      setFloatingBarExpanded(true);
      return;
    }

    if (mode === 'floating-bar') {
      expandedScrollAnchorRef.current = null;
      setFloatingBarExpanded(false);
      setServicesOpen(false);
      return;
    }

    setMobileServicesOpen(false);
    onNavigateHome();
  };

  const collapseAfterNav = () => {
    expandedScrollAnchorRef.current = null;
    setFloatingBarExpanded(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const activeMobileTab: MobileNavTab = mobileServicesOpen
    ? 'services'
    : route.type === 'service'
      ? 'services'
      : route.type === 'certificates'
        ? 'certificates'
        : route.type === 'projects'
          ? 'projects'
          : activeHomeSection;

  const navLinkClass =
    'text-[11px] font-mono-code font-medium tracking-[0.14em] uppercase text-[#18181A]/80 dark:text-[#FAF8F3]/75 hover:text-[#18181A] dark:hover:text-[#FAF8F3] transition-colors whitespace-nowrap shrink-0';

  const pillMorphTransition = shouldReduceMotion
    ? { duration: 0.01 }
    : {
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1] as const,
      };

  const floatingBarWidth = Math.min(1160, Math.max(760, viewport.width - 48));
  const topSidePadding = viewport.width > 1280 ? (viewport.width - 1280) / 2 + 32 : 32;
  const minExpandedContentWidth = Math.max(660, floatingBarWidth - 104);

  const desktopAnimateTarget =
    mode === 'pill-logo'
      ? {
          width: 76,
          height: 48,
          y: 14,
          borderRadius: 24,
          paddingLeft: 0,
          paddingRight: 0,
        }
      : mode === 'floating-bar'
        ? {
            width: floatingBarWidth,
            height: 56,
            y: 14,
            borderRadius: 28,
            paddingLeft: 24,
            paddingRight: 24,
          }
        : {
            width: viewport.width,
            height: 64,
            y: 0,
            borderRadius: 0,
            paddingLeft: topSidePadding,
            paddingRight: topSidePadding,
          };

  const shellClassName = isDesktop
    ? `pointer-events-auto flex items-center ${servicesOpen ? 'overflow-visible' : 'overflow-hidden'} transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
        mode === 'pill-logo'
          ? 'bg-[#FAF8F3] dark:bg-[#161618] border-2 border-[#18181A] dark:border-[#FAF8F3]/85 shadow-[0_12px_32px_rgba(24,24,26,0.16),3px_3px_0px_#18181A] dark:shadow-[0_12px_32px_rgba(0,0,0,0.48),3px_3px_0px_#F4C542]'
          : mode === 'floating-bar'
            ? 'bg-[#FAF8F3]/72 dark:bg-[#161618]/72 backdrop-blur-xl border-2 border-[#18181A] dark:border-[#FAF8F3]/85 shadow-[0_16px_40px_rgba(24,24,26,0.18),4px_4px_0px_#18181A] dark:shadow-[0_16px_40px_rgba(0,0,0,0.52),4px_4px_0px_#F4C542]'
            : 'bg-[#FAF8F3] dark:bg-[#161618] border-b border-[#18181A]/12 dark:border-white/12'
      }`
    : 'pointer-events-auto w-full h-16 px-5 sm:px-8 flex items-center justify-between gap-4 bg-[#FAF8F3] dark:bg-[#161618] border-b border-[#18181A]/12 dark:border-white/12 transition-colors duration-300';

  const mobileTabClass = (tab: MobileNavTab) =>
    `flex flex-col items-center justify-center gap-1 min-h-[50px] rounded-lg px-1 py-1.5 transition-all cursor-pointer ${
      activeMobileTab === tab
        ? 'bg-[#F4C542] text-[#18181A] border border-[#18181A] shadow-[2px_2px_0px_#18181A]'
        : 'text-[#18181A]/75 dark:text-[#FAF8F3]/75 hover:bg-[#18181A]/5 dark:hover:bg-white/10 border border-transparent'
    }`;

  return (
    <>
      {/* Layout spacer preserves 64px header height so transitioning to floating pill/bar on desktop causes zero page jump */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />

      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
        <motion.div
          key={isDesktop ? 'desktop-navbar-shell' : 'mobile-navbar-shell'}
          ref={shellRef}
          initial={false}
          animate={isDesktop ? desktopAnimateTarget : false}
          data-testid="navbar-shell"
          data-navbar-state={mode}
          data-navbar-blur={hasBackdropBlur ? 'true' : 'false'}
          transition={pillMorphTransition}
          className={shellClassName}
        >
          {/* Left / Shrunk Pill Center: AQ Monogram */}
          <motion.button
            whileHover={mode !== 'top' ? { scale: 1.07 } : undefined}
            whileTap={mode !== 'top' ? { scale: 0.96 } : undefined}
            type="button"
            onClick={handleLogoClick}
            title={
              mode === 'pill-logo'
                ? 'Open navigation bar'
                : mode === 'floating-bar'
                  ? 'Shrink navigation bar'
                  : undefined
            }
            aria-expanded={mode === 'pill-logo' ? false : mode === 'floating-bar' ? true : undefined}
            className={`flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18181A] dark:focus-visible:outline-[#FAF8F3] shrink-0 cursor-pointer text-[#18181A] dark:text-[#FAF8F3] ${
              mode === 'pill-logo' ? 'w-full h-full' : 'px-3 py-3'
            }`}
            aria-label={
              mode === 'pill-logo'
                ? 'Open floating navigation bar'
                : mode === 'floating-bar'
                  ? 'Collapse floating navigation bar'
                  : 'Nawaf Ariq home'
            }
          >
            <AMonogram className="w-8 h-6" color="currentColor" />
          </motion.button>

          {/* Expanded Nav Links + Right Actions - smoothly masked & locked-width during pill shrink/expand */}
          <AnimatePresence initial={false}>
            {!showOnlyLogo && (
              <motion.div
                key="navbar-expanded-content"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: shouldReduceMotion
                    ? { duration: 0.01 }
                    : { duration: 0.22, delay: 0.14, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        scale: 0.98,
                        transition: { duration: 0.12, ease: [0.4, 0, 1, 1] },
                      }
                }
                style={
                  isDesktop
                    ? {
                        flex: '1 1 0%',
                        minWidth: minExpandedContentWidth,
                        marginLeft: 24,
                      }
                    : { flex: '1 1 0%', marginLeft: 16 }
                }
                className="flex items-center justify-end lg:justify-between gap-4"
              >
                {/* Center: Nav Links (Desktop) */}
                <nav
                  className="hidden lg:flex items-center gap-6 mx-auto"
                  aria-label="Primary Navigation"
                >
                  <button
                    type="button"
                    onClick={() => {
                      collapseAfterNav();
                      onNavigateHome('about');
                    }}
                    className={`${navLinkClass} cursor-pointer`}
                  >
                    ABOUT
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      collapseAfterNav();
                      onNavigateHome('experience');
                    }}
                    className={`${navLinkClass} cursor-pointer`}
                  >
                    EXPERIENCE
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      collapseAfterNav();
                      onNavigateHome('skills');
                    }}
                    className={`${navLinkClass} cursor-pointer`}
                  >
                    SKILLS
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      collapseAfterNav();
                      if (route.type === 'projects') {
                        onNavigateProjects();
                      } else {
                        onNavigateHome('projects');
                      }
                    }}
                    className={`${navLinkClass} cursor-pointer ${
                      route.type === 'projects'
                        ? 'underline underline-offset-4 text-[#18181A] dark:text-white'
                        : ''
                    }`}
                  >
                    PROJECTS
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      collapseAfterNav();
                      onNavigateCertificates();
                    }}
                    className={`px-2 py-0.5 text-[11px] font-mono-code font-semibold tracking-[0.12em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      route.type === 'certificates'
                        ? 'bg-[#F4C542] text-[#18181A] border border-[#18181A]'
                        : 'text-[#18181A]/80 dark:text-[#FAF8F3]/75 hover:text-[#18181A] dark:hover:text-[#FAF8F3]'
                    }`}
                  >
                    CERTIFICATES
                  </button>

                  {/* Services Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      aria-expanded={servicesOpen}
                      className={`flex items-center gap-1 ${navLinkClass} cursor-pointer ${
                        route.type === 'service'
                          ? 'bg-[#F4C542] text-[#18181A] dark:text-[#18181A] px-2 py-0.5 border border-[#18181A]'
                          : ''
                      }`}
                    >
                      <span>SERVICES</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-0 top-full mt-3 w-60 bg-[#FAF8F3]/95 dark:bg-[#1E1E22]/95 backdrop-blur-xl brutal-card rounded-lg p-1.5 z-50">
                        {WHAT_I_BUILD_ITEMS.map((item) => (
                          <button
                            key={item.slug}
                            type="button"
                            onClick={() => {
                              collapseAfterNav();
                              onNavigateService(item.slug);
                            }}
                            className={`w-full text-left px-3 py-2.5 rounded-md flex items-center justify-between text-xs font-semibold transition-colors cursor-pointer ${
                              route.type === 'service' && route.slug === item.slug
                                ? 'bg-[#F4C542] text-[#18181A]'
                                : 'hover:bg-[#F4C542]/45 text-[#18181A] dark:text-[#FAF8F3]'
                            }`}
                          >
                            <span>{item.label}</span>
                            <span className="text-[10px] font-mono-code opacity-70">{item.tag}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>

                {/* Right: Desktop Social Links + Theme Toggle + Mobile Social Menu */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="hidden lg:flex items-center gap-1.5">
                    <a
                      href="https://github.com/Qira-Qira"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub profile"
                      className="w-8 h-8 rounded-full border border-[#18181A] bg-[#F4C542] flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                    >
                      <Github className="w-3.5 h-3.5 text-[#18181A]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nawaf-ariq-hilalbi/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile"
                      className="w-8 h-8 rounded-full border border-[#18181A] bg-[#F43F8E] flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </a>
                    <a
                      href="https://instagram.com/qiraayyy"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram profile"
                      className="w-8 h-8 rounded-full border border-[#18181A] bg-white flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#18181A]" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={onToggleTheme}
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    className="w-8 h-8 rounded-full border border-[#18181A] dark:border-white/30 bg-white dark:bg-[#242428] text-[#18181A] dark:text-[#F4C542] flex items-center justify-center hover:-translate-y-0.5 transition-transform cursor-pointer"
                  >
                    {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                  </button>

                  <div className="relative lg:hidden" ref={mobileSocialRef}>
                    <button
                      type="button"
                      onClick={() => setMobileSocialOpen((open) => !open)}
                      aria-label={mobileSocialOpen ? 'Close social links' : 'Open social links'}
                      aria-expanded={mobileSocialOpen}
                      aria-haspopup="menu"
                      className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-[#18181A] bg-[#18181A] px-3 text-white hover:-translate-y-0.5 transition-transform cursor-pointer"
                    >
                      <UsersRound className="w-4 h-4" aria-hidden="true" />
                      <span className="text-xs font-semibold">Social</span>
                    </button>
                    <AnimatePresence>
                      {mobileSocialOpen && (
                        <motion.div
                          role="menu"
                          aria-label="Social links"
                          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.97 }}
                          transition={{ duration: 0.16 }}
                          className="absolute right-0 top-full mt-2 w-48 rounded-xl border-2 border-[#18181A] dark:border-white/25 bg-[#FAF8F3] dark:bg-[#1E1E22] p-1.5 shadow-[3px_3px_0px_#18181A] dark:shadow-[3px_3px_0px_#F4C542] z-50"
                        >
                          <a
                            href="https://github.com/Qira-Qira"
                            target="_blank"
                            rel="noreferrer"
                            role="menuitem"
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#18181A] dark:text-[#FAF8F3] hover:bg-[#F4C542]/45"
                          >
                            <Github className="w-4 h-4" aria-hidden="true" />
                            GitHub
                          </a>
                          <a
                            href="https://www.linkedin.com/in/nawaf-ariq-hilalbi/"
                            target="_blank"
                            rel="noreferrer"
                            role="menuitem"
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#18181A] dark:text-[#FAF8F3] hover:bg-[#F4C542]/45"
                          >
                            <Linkedin className="w-4 h-4" aria-hidden="true" />
                            LinkedIn
                          </a>
                          <a
                            href="https://instagram.com/qiraayyy"
                            target="_blank"
                            rel="noreferrer"
                            role="menuitem"
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#18181A] dark:text-[#FAF8F3] hover:bg-[#F4C542]/45"
                          >
                            <Instagram className="w-4 h-4" aria-hidden="true" />
                            Instagram
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Mobile Bottom Navigation Bar (Icon + Label) - Visible only below lg breakpoint */}
      <nav
        ref={mobileBottomBarRef}
        aria-label="Mobile Bottom Navigation"
        data-testid="mobile-bottom-bar"
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#FAF8F3]/92 dark:bg-[#161618]/92 backdrop-blur-xl border-t-2 border-[#18181A] dark:border-white/20 px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(24,24,26,0.08)] dark:shadow-[0_-8px_24px_rgba(0,0,0,0.45)]"
      >
        <AnimatePresence>
          {mobileServicesOpen && (
            <motion.div
              key="mobile-services-sheet"
              data-testid="mobile-services-popover"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-full right-3 mb-2.5 w-64 bg-[#FAF8F3] dark:bg-[#1E1E22] brutal-card rounded-xl p-2 z-50"
            >
              <div className="flex items-center justify-between px-2 pb-1.5 mb-1 border-b border-[#18181A]/12 dark:border-white/12">
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-[0.14em] text-[#575650] dark:text-[#FAF8F3]/65">
                  SERVICES
                </span>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(false)}
                  aria-label="Close services menu"
                  className="w-6 h-6 rounded-md flex items-center justify-center text-[#18181A]/75 dark:text-[#FAF8F3]/75 hover:bg-[#18181A]/10 dark:hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {WHAT_I_BUILD_ITEMS.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => {
                      collapseAfterNav();
                      onNavigateService(item.slug);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold transition-colors cursor-pointer ${
                      route.type === 'service' && route.slug === item.slug
                        ? 'bg-[#F4C542] text-[#18181A] border border-[#18181A]'
                        : 'hover:bg-[#F4C542]/45 text-[#18181A] dark:text-[#FAF8F3]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] font-mono-code opacity-70">{item.tag}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-5 gap-1 max-w-[520px] mx-auto">
          <button
            type="button"
            onClick={() => {
              collapseAfterNav();
              onNavigateHome();
            }}
            aria-current={activeMobileTab === 'home' ? 'page' : undefined}
            className={mobileTabClass('home')}
          >
            <Home className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-[10px] font-mono-code font-bold leading-none tracking-[0.04em]">
              Home
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              collapseAfterNav();
              onNavigateHome('about');
            }}
            aria-current={activeMobileTab === 'about' ? 'page' : undefined}
            className={mobileTabClass('about')}
          >
            <User className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-[10px] font-mono-code font-bold leading-none tracking-[0.04em]">
              About
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              collapseAfterNav();
              if (route.type === 'projects') {
                onNavigateProjects();
              } else {
                onNavigateHome('projects');
              }
            }}
            aria-current={activeMobileTab === 'projects' ? 'page' : undefined}
            className={mobileTabClass('projects')}
          >
            <FolderKanban className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-[10px] font-mono-code font-bold leading-none tracking-[0.04em]">
              Projects
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              collapseAfterNav();
              onNavigateCertificates();
            }}
            aria-current={activeMobileTab === 'certificates' ? 'page' : undefined}
            className={mobileTabClass('certificates')}
          >
            <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-[10px] font-mono-code font-bold leading-none tracking-[0.04em]">
              Certs
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
            aria-expanded={mobileServicesOpen}
            aria-haspopup="menu"
            className={mobileTabClass('services')}
          >
            <Layers className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-[10px] font-mono-code font-bold leading-none tracking-[0.04em]">
              Services
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
