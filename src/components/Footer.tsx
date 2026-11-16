import { ArrowUp, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { AQMonogram, PixelWordmark, TornEdge } from './Graphics';
import { ServiceSlug } from '../data/portfolioData';

interface FooterProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: ServiceSlug) => void;
  onNavigateCertificates: () => void;
  onNavigateProjects: () => void;
  onOpenContact: () => void;
}

export function Footer({
  onNavigateHome,
  onNavigateService,
  onNavigateCertificates,
  onNavigateProjects,
  onOpenContact,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#2F45FF]">
      <TornEdge fill="#161618" />

      <div className="bg-dark-ruled text-[#FAF8F3] pt-16 sm:pt-20 pb-8 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
            {/* Brand Summary */}
            <div className="lg:col-span-5">
              <AQMonogram className="w-10 h-8 mb-4" color="#FAF8F3" />
              <p className="text-sm text-white/65 max-w-[270px] leading-relaxed mb-5">
                Websites, web applications, and Android mobile applications that ship.
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/QIra-Qira"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center hover:border-[#F4C542] hover:text-[#F4C542] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nawaf-ariq-hilalbi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center hover:border-[#F4C542] hover:text-[#F4C542] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Navigate */}
            <div className="lg:col-span-2">
              <p className="text-[10px] font-mono-code tracking-[0.18em] uppercase text-white/45 mb-4">
                NAVIGATE
              </p>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome()}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('about')}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('experience')}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateHome('skills')}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onNavigateProjects}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onNavigateCertificates}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    Certificates
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <p className="text-[10px] font-mono-code tracking-[0.18em] uppercase text-white/45 mb-4">
                SERVICES
              </p>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateService('websites')}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    Websites
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateService('web-applications')}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    Web Applications
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigateService('mobile-applications')}
                    className="hover:text-[#F4C542] transition-colors cursor-pointer"
                  >
                    Mobile Applications
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-3">
              <p className="text-[10px] font-mono-code tracking-[0.18em] uppercase text-white/45 mb-4">
                CONNECT
              </p>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <a
                    href="https://github.com/Qira-Qira"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F4C542] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nawaf-ariq-hilalbi/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F4C542] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:nawaf.hilalbi25@student.uisi.ac.id"
                    className="hover:text-[#F4C542] transition-colors break-all"
                  >
                    nawaf.hilalbi25@student.uisi.ac.id
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1 text-[#F4C542] font-semibold hover:underline cursor-pointer"
                  >
                    <span>Taking new projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-10 sm:py-14">
            <PixelWordmark word="ARIQ" color="#FAF8F3" className="w-full h-auto" />
          </div>

          {/* Bottom Legal Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-code text-white/45">
            <span>© 2026 Nawaf Ariq Hilalbi</span>
            <span>Designed and built by Nawaf Ariq Hilalbi</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white/75 hover:text-[#F4C542] uppercase tracking-wider cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
