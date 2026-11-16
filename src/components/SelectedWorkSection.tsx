import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { TornEdge } from './Graphics';

interface SelectedWorkSectionProps {
  onOpenArchive: () => void;
}

export function SelectedWorkSection({ onOpenArchive }: SelectedWorkSectionProps) {
  const featured = PROJECTS.filter((p) => p.featured);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (idx: number) => {
    const clamped = Math.max(0, Math.min(featured.length - 1, idx));
    setActiveIndex(clamped);
    const el = trackRef.current;
    if (!el) return;
    const targetCard = el.children[clamped + 1] as HTMLElement | undefined;
    if (targetCard) {
      el.scrollTo({
        left: Math.max(0, targetCard.offsetLeft - 40),
        behavior: 'smooth',
      });
    }
  };

  const handleScrollTrack = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const ratio = el.scrollLeft / maxScroll;
    const nextIdx = Math.min(featured.length - 1, Math.round(ratio * (featured.length - 1)));
    setActiveIndex(nextIdx);
  };

  return (
    <section id="projects" className="relative bg-[#FAF8F3]">
      <TornEdge fill="#F4C542" />

      <div className="bg-[#F4C542] py-16 sm:py-24 overflow-hidden">
        {/* Horizontal Track */}
        <div
          ref={trackRef}
          onScroll={handleScrollTrack}
          className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-5 sm:px-10 lg:px-16 pb-6 snap-x snap-mandatory"
        >
          {/* Intro Panel */}
          <div className="shrink-0 w-[290px] sm:w-[340px] flex flex-col justify-between py-4 snap-start">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#2F45FF] text-white text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-5">
                SELECTED WORK
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] leading-[1.06] text-[#18181A] mb-4">
                Selected work.
              </h2>
              <p className="text-sm text-[#18181A]/80 leading-relaxed mb-8">
                Websites, web applications, and mobile applications I have shipped. From Niconsite
                to client work.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono-code font-bold tracking-[0.15em] uppercase text-[#18181A]">
              <ArrowRight className="w-4 h-4" />
              <span>SCROLL</span>
            </div>
          </div>

          {/* 5 Project Cards */}
          {featured.map((project) => (
            <article
              key={project.id}
              className="shrink-0 w-[330px] sm:w-[680px] md:w-[760px] bg-white brutal-card-lg rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-12 snap-start"
            >
              {/* Left Colored Visual Mockup */}
              <div
                className="sm:col-span-6 border-b-2 sm:border-b-0 sm:border-r-2 border-[#18181A] relative min-h-[240px] sm:min-h-[360px]"
                style={{ backgroundColor: project.panelBg }}
              >
                <span className="absolute top-4 left-4 font-mono-code text-3xl sm:text-4xl font-extrabold text-[#18181A]/20 select-none">
                  {project.number}
                </span>
                <ProjectMockup type={project.mockupType} />
              </div>

              {/* Right Details Panel */}
              <div className="sm:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono-code font-bold tracking-[0.12em] uppercase text-[#575650] mb-3">
                    {project.tags.map((t, idx) => (
                      <span key={t} className="inline-flex items-center gap-2">
                        <span
                          className={
                            idx === 0
                              ? 'px-2 py-0.5 bg-[#F4C542] text-[#18181A] border border-[#18181A]'
                              : ''
                          }
                        >
                          {t}
                        </span>
                        {idx > 0 && idx < project.tags.length - 1 && (
                          <span aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#18181A] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#575650] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-[#18181A]/15 mb-4 text-xs">
                    <div>
                      <p className="text-[10px] font-mono-code uppercase text-[#575650] mb-0.5">
                        ROLE
                      </p>
                      <p className="font-bold text-[#18181A]">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono-code uppercase text-[#575650] mb-0.5">
                        YEAR
                      </p>
                      <p className="font-bold text-[#18181A] tabular-nums">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] font-mono-code font-semibold text-[#575650] mb-5">
                    {project.stack.map((tech, idx) => (
                      <span key={tech} className="inline-flex items-center gap-2.5">
                        <span>{tech}</span>
                        {idx < project.stack.length - 1 && (
                          <span aria-hidden="true" className="text-[#18181A]/30">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold uppercase tracking-wider text-[#18181A] hover:text-[#2F45FF] transition-colors"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* End Archive Card */}
          <div className="shrink-0 w-[290px] sm:w-[360px] flex flex-col justify-center items-start p-6 sm:p-8 snap-start">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-[#18181A] mb-6">
              There is more in the archive.
            </h3>
            <button
              type="button"
              onClick={onOpenArchive}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#18181A] text-white text-xs font-mono-code font-bold tracking-wider uppercase border-2 border-[#18181A] shadow-[3px_3px_0px_#FFFFFF] hover:bg-[#2F45FF] transition-colors cursor-pointer"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>ALL PROJECTS</span>
            </button>
          </div>
        </div>

        {/* Bottom Progress & Controls Bar */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-16 mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 max-w-[260px]">
            <span className="text-xs font-mono-code font-bold tabular-nums text-[#18181A]">
              0{activeIndex + 1} / 0{featured.length}
            </span>
            <div className="flex-1 h-1.5 bg-[#18181A]/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#18181A] transition-all duration-300"
                style={{ width: `${((activeIndex + 1) / featured.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToCard(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="w-9 h-9 rounded-lg bg-white border-2 border-[#18181A] flex items-center justify-center disabled:opacity-40 hover:bg-[#18181A] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToCard(activeIndex + 1)}
              disabled={activeIndex === featured.length - 1}
              aria-label="Next project"
              className="w-9 h-9 rounded-lg bg-white border-2 border-[#18181A] flex items-center justify-center disabled:opacity-40 hover:bg-[#18181A] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <TornEdge fill="#AEEBD2" />
    </section>
  );
}
