import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Github, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';
import { ApMonogram } from './Graphics';
import { ServiceSlug, WHAT_I_BUILD_ITEMS } from '../data/portfolioData';

export type AppRoute =
  | { type: 'home' }
  | { type: 'service'; slug: ServiceSlug }
  | { type: 'certificates' }
  | { type: 'projects' };

interface NavbarProps {
  route: AppRoute;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: ServiceSlug) => void;
  onNavigateCertificates: () => void;
  onNavigateProjects: () => void;
  onOpenContact: () => void;
}

export function Navbar({
  route,
  onNavigateHome,
  onNavigateService,
  onNavigateCertificates,
  onNavigateProjects,
  onOpenContact,
}: NavbarProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const navLinkClass =
    'text-[11px] font-mono-code font-medium tracking-[0.14em] uppercase text-[#18181A]/80 hover:text-[#18181A] transition-colors whitespace-nowrap shrink-0';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#18181A]/12">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: AP Monogram */}
        <button
          type="button"
          onClick={() => {
            setMobileMenuOpen(false);
            onNavigateHome();
          }}
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18181A] shrink-0 cursor-pointer"
          aria-label="Alden Prabaswara home"
        >
          <ApMonogram className="w-8 h-6" color="#18181A" />
        </button>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary Navigation">
          <button
            type="button"
            onClick={() => onNavigateHome('about')}
            className={`${navLinkClass} cursor-pointer`}
          >
            ABOUT
          </button>
          <button
            type="button"
            onClick={() => onNavigateHome('experience')}
            className={`${navLinkClass} cursor-pointer`}
          >
            EXPERIENCE
          </button>
          <button
            type="button"
            onClick={() => onNavigateHome('skills')}
            className={`${navLinkClass} cursor-pointer`}
          >
            SKILLS
          </button>
          <button
            type="button"
            onClick={() =>
              route.type === 'projects' ? onNavigateProjects() : onNavigateHome('projects')
            }
            className={`${navLinkClass} cursor-pointer ${
              route.type === 'projects' ? 'underline underline-offset-4 text-[#18181A]' : ''
            }`}
          >
            PROJECTS
          </button>
          <button
            type="button"
            onClick={onNavigateCertificates}
            className={`px-2 py-0.5 text-[11px] font-mono-code font-semibold tracking-[0.12em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              route.type === 'certificates'
                ? 'bg-[#F4C542] text-[#18181A] border border-[#18181A]'
                : 'text-[#18181A]/80 hover:text-[#18181A]'
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
                route.type === 'service' ? 'bg-[#F4C542] px-2 py-0.5 border border-[#18181A]' : ''
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
              <div className="absolute left-0 top-full mt-2 w-60 bg-[#FAF8F3] brutal-card rounded-lg p-1.5 z-50">
                {WHAT_I_BUILD_ITEMS.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => {
                      setServicesOpen(false);
                      onNavigateService(item.slug);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-md flex items-center justify-between text-xs font-semibold transition-colors cursor-pointer ${
                      route.type === 'service' && route.slug === item.slug
                        ? 'bg-[#F4C542] text-[#18181A]'
                        : 'hover:bg-[#F4C542]/45 text-[#18181A]'
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

        {/* Right: Social Buttons + Hire Alden CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <a
              href="https://github.com/aldenprabaswara"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="w-8 h-8 rounded-full border border-[#18181A] bg-[#F4C542] flex items-center justify-center hover:-translate-y-0.5 transition-transform"
            >
              <Github className="w-3.5 h-3.5 text-[#18181A]" />
            </a>
            <a
              href="https://linkedin.com/in/aldenprabaswara"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="w-8 h-8 rounded-full border border-[#18181A] bg-[#F43F8E] flex items-center justify-center hover:-translate-y-0.5 transition-transform"
            >
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </a>
            <a
              href="https://instagram.com/aldenprabaswara"
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
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#18181A] text-[#FAF8F3] text-xs font-semibold tracking-tight hover:bg-[#2F45FF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Alden</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-9 h-9 rounded-lg border border-[#18181A] bg-white flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#18181A]/15 bg-[#FAF8F3] px-5 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome('about');
              }}
              className="px-3 py-2.5 text-left text-xs font-mono-code font-semibold border border-[#18181A]/20 rounded-md hover:bg-[#F4C542]/40"
            >
              ABOUT
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome('experience');
              }}
              className="px-3 py-2.5 text-left text-xs font-mono-code font-semibold border border-[#18181A]/20 rounded-md hover:bg-[#F4C542]/40"
            >
              EXPERIENCE
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome('skills');
              }}
              className="px-3 py-2.5 text-left text-xs font-mono-code font-semibold border border-[#18181A]/20 rounded-md hover:bg-[#F4C542]/40"
            >
              SKILLS
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateProjects();
              }}
              className="px-3 py-2.5 text-left text-xs font-mono-code font-semibold border border-[#18181A]/20 rounded-md hover:bg-[#F4C542]/40"
            >
              PROJECTS
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateCertificates();
              }}
              className="px-3 py-2.5 text-left text-xs font-mono-code font-semibold border border-[#18181A]/20 rounded-md hover:bg-[#F4C542]/40 col-span-2"
            >
              CERTIFICATES (04)
            </button>
          </div>

          <div className="pt-2 border-t border-[#18181A]/10">
            <p className="text-[10px] font-mono-code text-[#575650] uppercase tracking-wider mb-1.5">
              SERVICES
            </p>
            <div className="flex flex-col gap-1">
              {WHAT_I_BUILD_ITEMS.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateService(item.slug);
                  }}
                  className="px-3 py-2 text-left text-xs font-semibold bg-white border border-[#18181A]/20 rounded-md flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] font-mono-code text-[#575650]">{item.tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
