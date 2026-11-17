import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Search } from 'lucide-react';
import { PROJECTS, ProjectCategory } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolioLogic';
import { ProjectMockup } from './ProjectMockup';
import { TornEdge } from './Graphics';

const PROJECT_CATEGORIES: ('All' | ProjectCategory)[] = ['All', 'Website', 'Web App', 'Mobile App'];

export function ProjectsArchivePage({ onBackHome }: { onBackHome: () => void }) {
  const [category, setCategory] = useState<'All' | ProjectCategory>('All');
  const [query, setQuery] = useState('');

  const visibleProjects = filterProjects(PROJECTS, category, query);

  return (
    <main>
      <section className="bg-ruled-paper pt-10 pb-14 px-5 sm:px-8">
        <div className="max-w-[1160px] mx-auto">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-[11px] font-mono-code font-bold tracking-[0.14em] uppercase text-[#575650] dark:text-[#FAF8F3]/65 hover:text-[#18181A] dark:hover:text-[#FAF8F3] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#2F45FF] text-white text-[10px] font-mono-code font-bold tracking-widest uppercase border border-[#18181A] mb-4">
                PROJECT ARCHIVE
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.035em] text-[#18181A] dark:text-[#FAF8F3] mb-3">
                All shipped work.
              </h1>
              <p className="text-sm sm:text-base text-[#575650] dark:text-[#FAF8F3]/70 max-w-[480px]">
                Every website, web application, and Android mobile app built across client work and
                personal engineering projects.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl font-extrabold font-mono-code tabular-nums text-[#18181A] dark:text-[#FAF8F3]">
                0{visibleProjects.length}
              </span>
              <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#575650] dark:text-[#FAF8F3]/60">
                PROJECTS SHOWN
              </span>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono-code font-bold uppercase border-2 border-[#18181A] dark:border-white/75 transition-colors cursor-pointer ${
                    category === cat
                      ? 'bg-[#18181A] dark:bg-[#F4C542] text-white dark:text-[#18181A]'
                      : 'bg-white dark:bg-[#1F1F24] text-[#18181A] dark:text-[#FAF8F3] hover:bg-[#F4C542] dark:hover:text-[#18181A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#575650] dark:text-[#FAF8F3]/60 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by stack or title..."
                aria-label="Search projects"
                className="w-full pl-9 pr-3.5 py-2 rounded-lg border-2 border-[#18181A] dark:border-white/75 bg-white dark:bg-[#1F1F24] text-sm text-[#18181A] dark:text-[#FAF8F3] placeholder:text-[#575650]/70 dark:placeholder:text-[#FAF8F3]/45 focus:outline-none focus:ring-2 focus:ring-[#F4C542]"
              />
            </div>
          </div>
        </div>
      </section>

      <TornEdge fill="#F4C542" />

      <section className="bg-[#F4C542] py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[1160px] mx-auto">
          {visibleProjects.length === 0 ? (
            <div className="bg-white dark:bg-[#1F1F24] brutal-card-lg rounded-2xl p-10 text-center">
              <p className="text-lg font-extrabold text-[#18181A] dark:text-[#FAF8F3] mb-2">
                No projects match &ldquo;{query}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory('All');
                  setQuery('');
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-[#18181A] text-white text-xs font-mono-code font-bold uppercase cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
              {visibleProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: (idx % 2) * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-[#1F1F24] brutal-card-lg rounded-2xl overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div
                    className="h-56 border-b-2 border-[#18181A] dark:border-white/75 relative"
                    style={{ backgroundColor: project.panelBg }}
                  >
                    <span className="absolute top-3 left-4 font-mono-code text-2xl font-extrabold text-[#18181A]/25">
                      {project.number}
                    </span>
                    <ProjectMockup type={project.mockupType} />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-[10px] font-mono-code font-bold uppercase text-[#575650] dark:text-[#FAF8F3]/65 mb-2">
                        <span className="px-2 py-0.5 bg-[#F4C542] text-[#18181A] border border-[#18181A]">
                          {project.category}
                        </span>
                        <span className="tabular-nums">{project.year}</span>
                      </div>
                      <h2 className="text-2xl font-extrabold tracking-tight text-[#18181A] dark:text-[#FAF8F3] mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-[#575650] dark:text-[#FAF8F3]/75 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#18181A]/15 dark:border-white/15 flex items-center justify-between gap-3">
                      <span className="text-[10px] font-mono-code text-[#575650] dark:text-[#FAF8F3]/65 truncate">
                        {project.stack.join(' · ')}
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono-code font-bold uppercase text-[#18181A] dark:text-[#F4C542] hover:text-[#2F45FF] dark:hover:text-white shrink-0"
                      >
                        <span>OPEN</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
