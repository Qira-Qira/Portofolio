import { ProjectItem } from '../data/portfolioData';

export function ProjectMockup({ type }: { type: ProjectItem['mockupType'] }) {
  if (type === 'pos-kasir') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5">
        <div className="w-full max-w-[300px] bg-white border-2 border-[#18181A] rounded-xl p-3.5 shadow-[4px_4px_0px_#18181A]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-extrabold text-[#18181A]">POS Kasir</span>
            <span className="px-2 py-0.5 bg-[#19B56F] text-white text-[8px] font-mono-code font-bold rounded">ACTIVE</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2.5">
            {['Produk', 'Pengguna', 'Transaksi'].map((label, index) => (
              <div key={label} className="p-2 rounded bg-[#FAF8F3] border border-[#18181A]/15">
                <div className="text-[7px] text-[#575650]">{label}</div>
                <div className="text-xs font-extrabold">{[24, 8, 156][index]}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['Latte', 'Sandwich', 'Tea', 'Croissant'].map((item, index) => (
              <div key={item} className="p-2 rounded border border-[#18181A]/15 bg-white text-[8px] font-bold">
                <span className="inline-block w-5 h-5 mr-1.5 align-middle rounded bg-[#AEEBD2]" />
                {item}<span className="float-right text-[#19B56F]">{[18, 22, 12, 20][index]}k</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'smk-sunan-giri') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5">
        <div className="w-full max-w-[300px] bg-white border-2 border-[#18181A] rounded-xl p-3 shadow-[4px_4px_0px_#18181A]">
          <div className="flex items-center justify-between border-b border-[#18181A]/15 pb-2 mb-2.5">
            <span className="text-[10px] font-extrabold">SMK SUNAN GIRI</span>
            <span className="text-[8px] font-mono-code text-[#F43F8E]">ADMIN</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2.5">
            {['PPDB', 'Alumni', 'BKK'].map((label) => (
              <div key={label} className="p-2 rounded-lg bg-[#FFF0F6] border border-[#18181A]/15 text-center text-[8px] font-bold">{label}</div>
            ))}
          </div>
          <div className="p-2.5 rounded-lg bg-[#FAF8F3] border border-[#18181A]/15">
            <div className="text-[8px] font-mono-code text-[#575650] mb-2">RECOMMENDATION RESULT</div>
            <div className="h-3 w-full rounded-full bg-[#E8E8E5] overflow-hidden"><div className="h-full w-[86%] bg-[#F43F8E]" /></div>
            <div className="mt-2 text-[9px] font-bold">Teknik Komputer & Jaringan — 86%</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'informatika-si-13') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5">
        <div className="w-full max-w-[300px] bg-white border-2 border-[#18181A] rounded-xl overflow-hidden shadow-[4px_4px_0px_#18181A]">
          <div className="bg-[#18181A] px-3 py-2 text-white text-[9px] font-bold flex justify-between"><span>INFORMATIKA UISI</span><span className="text-[#AEEBD2]">ANGK. 13</span></div>
          <div className="p-3">
            <div className="h-20 rounded-lg bg-gradient-to-br from-[#2F45FF] to-[#9FE6C7] border border-[#18181A] mb-2 p-2 flex items-end text-white text-[9px] font-bold">Academic & Community Activities</div>
            <div className="grid grid-cols-3 gap-1.5">{['Profil', 'Kegiatan', 'Berita'].map((label) => <div key={label} className="h-9 rounded bg-[#FAF8F3] border border-[#18181A]/20 text-[8px] font-bold flex items-center justify-center">{label}</div>)}</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'green-harvest-hub') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5 relative">
        <div className="w-full max-w-[270px] bg-white border-2 border-[#18181A] rounded-xl overflow-hidden shadow-[4px_4px_0px_#18181A]">
          <div className="bg-[#19B56F] px-3 py-2 text-white text-[9px] font-bold">Green Harvest Hub</div>
          <div className="p-3">
            <div className="h-16 rounded-lg bg-gradient-to-br from-[#AEEBD2] to-[#F4C542]/50 border border-[#18181A] mb-2 flex items-end p-2 text-[9px] font-extrabold">Fresh Organic Products</div>
            <div className="grid grid-cols-3 gap-1.5">{['Sayur', 'Buah', 'Jamu'].map((label) => <div key={label} className="h-10 rounded bg-[#FAF8F3] border border-[#18181A]/20 text-[8px] font-bold flex items-center justify-center">{label}</div>)}</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'wedding') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5">
        <div className="w-36 bg-white border-2 border-[#18181A] rounded-[22px] p-3 shadow-[4px_4px_0px_#18181A] text-center">
          <div className="w-8 h-1 bg-[#18181A]/20 rounded-full mx-auto mb-3" />
          <div className="text-[8px] font-mono-code text-[#575650] mb-2">THE WEDDING OF</div>
          <div className="text-xl font-serif font-extrabold text-[#18181A] leading-tight">Gresma<br /><span className="text-[#F43F8E]">&</span><br />Siska</div>
          <div className="mt-3 h-8 rounded-lg bg-[#F4C542]/60 border border-[#18181A]/20 flex items-center justify-center text-[8px] font-bold">Lihat Undangan</div>
        </div>
      </div>
    );
  }

  if (type === 'itqan') {
    return (
      <div className="w-full h-full flex items-center justify-center gap-2.5 sm:gap-3 px-4 py-6">
        {/* Phone 1 */}
        <div className="w-24 sm:w-28 bg-white border-2 border-[#18181A] rounded-2xl p-2 shadow-[3px_3px_0px_#18181A] -rotate-2">
          <div className="w-8 h-1 bg-[#18181A]/20 rounded-full mx-auto mb-2" />
          <div className="bg-[#E8FBF1] border border-[#18181A]/20 rounded-lg p-2 mb-2">
            <div className="text-[8px] font-mono-code font-bold text-[#19B56F]">ITQAN</div>
            <div className="text-[9px] font-bold text-[#18181A] mt-0.5">Surah Al-Mulk</div>
            <div className="mt-1.5 h-1.5 bg-[#19B56F] rounded-full w-4/5" />
          </div>
          <div className="space-y-1.5">
            <div className="h-4 rounded bg-[#FAF8F3] border border-[#18181A]/15" />
            <div className="h-4 rounded bg-[#FAF8F3] border border-[#18181A]/15" />
            <div className="h-4 rounded bg-[#FAF8F3] border border-[#18181A]/15" />
          </div>
        </div>

        {/* Phone 2 (center featured) */}
        <div className="w-28 sm:w-32 bg-white border-2 border-[#18181A] rounded-2xl p-2.5 shadow-[4px_4px_0px_#18181A] z-10">
          <div className="w-10 h-1 bg-[#18181A]/20 rounded-full mx-auto mb-2" />
          <div className="bg-[#18181A] text-white rounded-lg p-2.5 mb-2">
            <div className="text-[8px] font-mono-code text-[#AEEBD2]">SM-2 QUEUE</div>
            <div className="text-xs font-extrabold mt-0.5">18 Ayah Due</div>
            <div className="mt-2 inline-block px-2 py-0.5 bg-[#AEEBD2] text-[#18181A] text-[8px] font-bold rounded">
              Start Review
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="p-1.5 rounded bg-[#FAF8F3] border border-[#18181A]/15 text-[8px] font-bold">
              94% Recall
            </div>
            <div className="p-1.5 rounded bg-[#FAF8F3] border border-[#18181A]/15 text-[8px] font-bold">
              12d Streak
            </div>
          </div>
        </div>

        {/* Phone 3 */}
        <div className="hidden sm:block w-24 sm:w-28 bg-white border-2 border-[#18181A] rounded-2xl p-2 shadow-[3px_3px_0px_#18181A] rotate-2">
          <div className="w-8 h-1 bg-[#18181A]/20 rounded-full mx-auto mb-2" />
          <div className="bg-[#EEF0FF] border border-[#18181A]/20 rounded-lg p-2 mb-2">
            <div className="text-[8px] font-mono-code font-bold text-[#2F45FF]">SYNC</div>
            <div className="text-[9px] font-bold text-[#18181A] mt-0.5">Drive Backup</div>
          </div>
          <div className="space-y-1.5">
            <div className="h-3 rounded bg-[#AEEBD2]/60 border border-[#18181A]/15" />
            <div className="h-3 rounded bg-[#FAF8F3] border border-[#18181A]/15" />
            <div className="h-6 rounded bg-[#F4C542]/40 border border-[#18181A]/15" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'recruitai') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5">
        <div className="w-full max-w-[300px]">
          {/* Laptop screen */}
          <div className="bg-white border-2 border-[#18181A] rounded-t-xl p-3 shadow-[4px_4px_0px_#18181A]">
            <div className="flex items-center justify-between border-b border-[#18181A]/15 pb-2 mb-2.5">
              <span className="text-[10px] font-extrabold text-[#18181A]">RecruitAI</span>
              <span className="px-1.5 py-0.5 bg-[#F43F8E] text-white text-[8px] font-mono-code font-bold rounded">
                AI SCORING
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-2.5">
              <div className="p-2 rounded bg-[#FAF8F3] border border-[#18181A]/15">
                <div className="text-[8px] text-[#575650]">Applicants</div>
                <div className="text-xs font-extrabold">248</div>
              </div>
              <div className="p-2 rounded bg-[#FFE2EC] border border-[#18181A]/15">
                <div className="text-[8px] text-[#575650]">Shortlisted</div>
                <div className="text-xs font-extrabold">34</div>
              </div>
              <div className="p-2 rounded bg-[#AEEBD2]/50 border border-[#18181A]/15">
                <div className="text-[8px] text-[#575650]">Match Avg</div>
                <div className="text-xs font-extrabold">91%</div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#FAF8F3] border border-[#18181A]/15 text-[9px] font-semibold">
                <span>Frontend Engineer</span>
                <span className="font-mono-code text-[#19B56F]">96/100</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#FAF8F3] border border-[#18181A]/15 text-[9px] font-semibold">
                <span>Android Kotlin Dev</span>
                <span className="font-mono-code text-[#2F45FF]">89/100</span>
              </div>
            </div>
          </div>
          {/* Laptop base */}
          <div className="h-3 bg-[#18181A] rounded-b-lg mx-auto w-[106%] -ml-[3%]" />
        </div>
      </div>
    );
  }

  if (type === 'fni') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5">
        <div className="w-full max-w-[300px] bg-white border-2 border-[#18181A] rounded-xl p-3.5 shadow-[4px_4px_0px_#18181A]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F43F8E] border border-[#18181A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4C542] border border-[#18181A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#AEEBD2] border border-[#18181A]" />
            </div>
            <span className="text-[9px] font-mono-code font-bold text-[#575650]">
              FNI OPS CONSOLE
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {/* Bar chart */}
            <div className="p-2.5 rounded-lg bg-[#FAF8F3] border border-[#18181A]/20">
              <div className="text-[8px] font-mono-code text-[#575650] mb-2">REVENUE</div>
              <div className="flex items-end gap-1.5 h-16">
                <div className="flex-1 bg-[#2F45FF] h-7 rounded-t" />
                <div className="flex-1 bg-[#2F45FF] h-11 rounded-t" />
                <div className="flex-1 bg-[#F4C542] h-9 rounded-t" />
                <div className="flex-1 bg-[#2F45FF] h-14 rounded-t" />
                <div className="flex-1 bg-[#19B56F] h-16 rounded-t" />
              </div>
            </div>
            {/* Line chart */}
            <div className="p-2.5 rounded-lg bg-[#FAF8F3] border border-[#18181A]/20 flex flex-col justify-between">
              <div className="text-[8px] font-mono-code text-[#575650]">PAYOUTS</div>
              <svg viewBox="0 0 100 50" className="w-full h-14">
                <polyline
                  fill="none"
                  stroke="#18181A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="5,42 25,30 48,34 72,14 95,8"
                />
                <circle cx="95" cy="8" r="4" fill="#F43F8E" stroke="#18181A" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dinar') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5 relative">
        <div className="w-full max-w-[260px] bg-white border-2 border-[#18181A] rounded-xl overflow-hidden shadow-[4px_4px_0px_#F4C542]">
          <div className="bg-[#18181A] text-[#F4C542] px-3 py-2 flex items-center justify-between">
            <span className="text-[9px] font-bold">Dinar Khoirur Rooziqiin</span>
            <span className="text-[8px] font-mono-code text-white/70">CATALOG</span>
          </div>
          <div className="p-3 space-y-2">
            <div className="h-16 rounded-lg bg-gradient-to-br from-[#F4C542]/45 to-[#FF7849]/35 border border-[#18181A] p-2 flex flex-col justify-end">
              <span className="text-[9px] font-extrabold text-[#18181A]">Artisan Culinary Box</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-9 rounded bg-[#FAF8F3] border border-[#18181A]/20" />
              <div className="h-9 rounded bg-[#FAF8F3] border border-[#18181A]/20" />
              <div className="h-9 rounded bg-[#AEEBD2]/50 border border-[#18181A]/20" />
            </div>
          </div>
        </div>
        {/* Mobile companion frame */}
        <div className="hidden sm:block w-20 bg-white border-2 border-[#18181A] rounded-xl p-1.5 shadow-[3px_3px_0px_#F43F8E] -ml-5 mt-10 z-10">
          <div className="h-12 rounded bg-[#F4C542]/50 border border-[#18181A]/20 mb-1.5" />
          <div className="h-3 rounded bg-[#19B56F] text-white text-[6px] font-bold flex items-center justify-center">
            WhatsApp
          </div>
        </div>
      </div>
    );
  }

  if (type === 'flipomo') {
    return (
      <div className="w-full h-full flex items-center justify-center p-5">
        <div className="w-32 bg-white border-2 border-[#18181A] rounded-[22px] p-3 shadow-[4px_4px_0px_#18181A] text-center">
          <div className="w-10 h-1 bg-[#18181A]/20 rounded-full mx-auto mb-3" />
          <div className="text-[8px] font-mono-code font-bold text-[#575650] uppercase mb-2">
            FOCUS SESSION
          </div>
          <div className="w-20 h-20 rounded-full border-4 border-[#F43F8E] mx-auto flex items-center justify-center mb-3 bg-[#FAF8F3]">
            <span className="font-mono-code font-extrabold text-base text-[#18181A]">25:00</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="px-2.5 py-1 bg-[#18181A] text-white text-[8px] font-bold rounded-md">
              PAUSE
            </span>
            <span className="px-2 py-1 bg-[#F4C542] text-[#18181A] text-[8px] font-bold rounded-md border border-[#18181A]">
              SKIP
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-5">
      <div className="w-full max-w-[270px] bg-white border-2 border-[#18181A] rounded-xl p-4 shadow-[4px_4px_0px_#18181A]">
        <div className="text-xs font-extrabold mb-1">Niconsite Studio</div>
        <div className="text-[10px] text-[#575650] mb-3">Static Astro + React Architecture</div>
        <div className="h-16 rounded-lg bg-[#FAF8F3] border border-[#18181A]/20" />
      </div>
    </div>
  );
}
