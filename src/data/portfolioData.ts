export type ServiceSlug = 'photography-editing' | 'web-applications' | 'mobile-applications';

export type ProjectCategory = 'Website' | 'Web App' | 'Mobile App';

export interface StoryStep {
  number: string;
  kicker: string;
  text: string;
}

export interface ExperienceRole {
  index: string;
  period: string | null;
  title: string;
  company: string;
  type: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface ExperiencePhoto {
  id: string;
  caption: string;
  src: string;
  alt: string;
}

export interface CertificateImage {
  id: string;
  title: string;
  src: string;
}

export interface SkillGroup {
  label: string;
  badgeColor: string;
  badgeTextColor?: string;
  items: string[];
}

export interface WhyMeCard {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon: 'plane' | 'asterisk' | 'plus' | 'arrow';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  role: string;
  year: string;
  stack: string[];
  panelBg: string;
  mockupType: 'itqan' | 'recruitai' | 'fni' | 'dinar' | 'flipomo' | 'niconsite';
  liveUrl: string;
  featured: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Field Work' | 'Language' | 'AI Engineering';
  frameColor: string;
  tapeColor: string;
  credentialId: string;
  verifyUrl: string;
  subtitle: string;
}

export interface ServicePrinciple {
  number: string;
  title: string;
  description: string;
  diagramType:
    | 'folder-tree'
    | 'typescript-contract'
    | 'ui-scratch'
    | 'seo-perf'
    | 'api-contract'
    | 'three-states'
    | 'wrapped-services'
    | 'design-system'
    | 'mvvm-arch'
    | 'sm2-curve'
    | 'unidirectional-state'
    | 'real-devices'
    | 'photo-planning'
    | 'photo-capture'
    | 'photo-editing'
    | 'video-editing';
}

export interface ServiceDetail {
  slug: ServiceSlug;
  title: string;
  shortLabel: string;
  heroBadge: string;
  description: string;
  stackHeading: string;
  principles: ServicePrinciple[];
  stackGroups: SkillGroup[];
}

export const STORY_STEPS: StoryStep[] = [
  {
    number: '01',
    kicker: 'BIO',
    text: "Halo, saya Nawaf Ariq Hilalbi. Karya saya berada di titik temu antara rekayasa perangkat lunak dan seni visual—yang terangkum dalam tiga kata: Code. Capture. Create. Sebagai Web & Mobile Developer, saya berfokus membangun aplikasi yang fungsional, responsif, dan nyaman digunakan. Di sisi lain, sebagai Fotografer & Editor, saya mengolah cahaya, komposisi, serta alur visual untuk menghasilkan foto dan video yang bercerita. Kombinasi ini membuat saya tidak hanya mampu merancang sistem dari balik layar, tetapi juga memastikan setiap elemen visual di dalamnya tampil maksimal—mulai dari baris kode pertama hingga final render.",
  },
  {
    number: '02',
    kicker: 'HOW I WORK',
    text: "Saya tidak belajar hanya dengan membaca teori—saya belajar dengan langsung mengeksekusi dan merilis karya. Di dunia Web & Mobile Development, setiap proyek dimulai dari masalah nyata yang butuh solusi, dan harus berakhir sebagai sistem yang benar-benar berjalan di production, bukan sekadar kode yang berhenti di komputer lokal. Prinsip yang sama saya bawa ke balik lensa dan meja editing. Sebagai Fotografer & Editor, bagi saya proses belum selesai sampai cahaya tertangkap dengan komposisi yang tepat, alur cerita tersusun rapi di timeline, dan final render siap dinikmati audiens.",
  },
  {
    number: '03',
    kicker: 'WHAT I BUILD',
    text: "Karya saya merentang di berbagai domain dan skala. Saya telah merilis aplikasi mobile untuk konsumen, aplikasi web bisnis, dasbor internal, situs web klien—hingga produksi fotografi komersial dan editing video. Setiap proyek menuntut rangkaian keputusan yang berbeda, dan saya mengambil setiap keputusan tersebut secara sadar dan terukur.",
  },
  {
    number: '04',
    kicker: 'TECH STACK',
    text: 'Web Development: HTML, CSS, JavaScript, Bootstrap, Tailwind, PHP, Laravel, CodeIgniter 4, Express JS, React JS, Node JS, Next JS, TypeScript, GitHub (CI/CD), MySQL, MongoDB, PostgreSQL, Motoko\nMobile Development: Java, Dart, Flutter, Android Studio\nPhotography & Editing: Figma, Canva, CapCut',
  },
];

export const WHAT_I_BUILD_ITEMS: { label: string; tag: string; slug: ServiceSlug }[] = [
  { label: 'Photography & Editing', tag: 'PHOTO & VIDEO', slug: 'photography-editing' },
  { label: 'Web Application Development', tag: 'WEB APP', slug: 'web-applications' },
  { label: 'Android Mobile App Development', tag: 'MOBILE APP', slug: 'mobile-applications' },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    index: '01',
    period: null,
    title: 'PDD (Publikasi, Dekorasi, dan Dokumentasi)',
    company: 'Universitas Internasional Semen Indonesia',
    type: 'ORGANISASI KAMPUS',
    summary:
      'Berkontribusi dalam kegiatan kampus melalui dokumentasi foto dan video, serta editing konten untuk menyampaikan momen dan informasi kegiatan dengan menarik.',
    bullets: [
      'Mengambil foto dan video untuk mendokumentasikan kegiatan kampus',
      'Mengedit foto dan video agar siap digunakan sebagai materi publikasi',
    ],
    tags: ['PDD', 'PHOTOGRAPHY', 'VIDEOGRAPHY', 'EDITING'],
  },
];

export const EXPERIENCE_PHOTOS: ExperiencePhoto[] = [
  {
    id: 'banner-inagurasi',
    caption: 'BANNER INAGURASI',
    src: '/assets/images/Dokumentasi/Banner Inagurasi.webp',
    alt: 'Banner kegiatan inagurasi',
  },
  {
    id: 'flayer-roadshow',
    caption: 'FLAYER ROADSHOW',
    src: '/assets/images/Dokumentasi/Flayer Roadshow.webp',
    alt: 'Flayer kegiatan roadshow',
  },
  {
    id: 'poster-inagurasi',
    caption: 'POSTER INAGURASI',
    src: '/assets/images/Dokumentasi/POSTER INAGURASI.webp',
    alt: 'Poster kegiatan inagurasi',
  },
  {
    id: 'feed-ig',
    caption: 'INSTAGRAM FEED',
    src: '/assets/images/Dokumentasi/feed_ig.webp',
    alt: 'Konten Instagram kegiatan kampus',
  },
  {
    id: 'inagurasi',
    caption: 'INAGURASI',
    src: '/assets/images/Dokumentasi/inagurasi.webp',
    alt: 'Dokumentasi kegiatan inagurasi',
  },
  {
    id: 'kulap',
    caption: 'KULIAH LAPANGAN',
    src: '/assets/images/Dokumentasi/kulap.webp',
    alt: 'Dokumentasi kegiatan kuliah lapangan',
  },
  {
    id: 'kulap-2',
    caption: 'KULIAH LAPANGAN',
    src: '/assets/images/Dokumentasi/kulap_2.webp',
    alt: 'Foto kedua kegiatan kuliah lapangan',
  },
  {
    id: 'makrab-1',
    caption: 'MAKRAB',
    src: '/assets/images/Dokumentasi/makrab_1.webp',
    alt: 'Dokumentasi malam keakraban',
  },
  {
    id: 'makrab-2',
    caption: 'MAKRAB',
    src: '/assets/images/Dokumentasi/makrab_2.webp',
    alt: 'Foto kedua malam keakraban',
  },
  {
    id: 'poster-kulap',
    caption: 'POSTER KULIAH LAPANGAN',
    src: '/assets/images/Dokumentasi/poster_kulap.webp',
    alt: 'Poster kegiatan kuliah lapangan',
  },
  {
    id: 'poster-makrab',
    caption: 'POSTER MAKRAB',
    src: '/assets/images/Dokumentasi/poster_makrab.webp',
    alt: 'Poster kegiatan malam keakraban',
  },
  {
    id: 'recap-inagurasi',
    caption: 'RECAP INAGURASI',
    src: '/assets/images/Dokumentasi/recap_inagurasi.webp',
    alt: 'Rekap kegiatan inagurasi',
  },
  {
    id: 'recap-makrab',
    caption: 'RECAP MAKRAB',
    src: '/assets/images/Dokumentasi/recap_makrab.webp',
    alt: 'Rekap kegiatan malam keakraban',
  },
  {
    id: 'roadshow',
    caption: 'ROADSHOW',
    src: '/assets/images/Dokumentasi/roadshow.webp',
    alt: 'Dokumentasi kegiatan roadshow',
  },
  {
    id: 'vision-1',
    caption: 'VISION',
    src: '/assets/images/Dokumentasi/vision_1.webp',
    alt: 'Dokumentasi kegiatan Vision',
  },
  {
    id: 'vision-2',
    caption: 'VISION',
    src: '/assets/images/Dokumentasi/vision_2.webp',
    alt: 'Foto kedua kegiatan Vision',
  },
];

export const CERTIFICATE_IMAGES: CertificateImage[] = [
  { id: 'its-day', title: "IT's Day", src: "/assets/images/sertifikat/IT's Day.webp" },
  { id: 'ldk', title: 'Sertifikat LDK', src: '/assets/images/sertifikat/SERTIFIKAT_LDK-1.webp' },
  {
    id: 'lkmm-pra-td',
    title: 'Sertifikat LKMM Pra-TD',
    src: '/assets/images/sertifikat/SERTIFIKAT_LKMM-PRA-TD-1.webp',
  },
  {
    id: 'seminar-mental-health',
    title: 'Sertifikat Seminar Mental Health',
    src: '/assets/images/sertifikat/SERTIFIKAT_SEMINAR-MENTAL-HEALTH-1.webp',
  },
  {
    id: 'vision',
    title: 'Sertifikat Vision',
    src: '/assets/images/sertifikat/SERTIFIKAT_VISION-1.webp',
  },
  {
    id: 'pkkmb',
    title: 'Sertifikat PKKMB',
    src: '/assets/images/sertifikat/Sertifikat_PKKMB.webp',
  },
  { id: 'arhanud', title: 'Sertifikat Arhanud', src: '/assets/images/sertifikat/arhanud.webp' },
  {
    id: 'narasumber',
    title: 'Sertifikat Narasumber',
    src: '/assets/images/sertifikat/narasumber.webp',
  },
  {
    id: 'pelatihan-ctf',
    title: 'Sertifikat Pelatihan CTF',
    src: '/assets/images/sertifikat/pelatihan_ctf-1.webp',
  },
  {
    id: 'polteksi-f',
    title: 'Sertifikat Polteksi',
    src: '/assets/images/sertifikat/polteksi_f.webp',
  },
  {
    id: 'seminar-polteksi',
    title: 'Sertifikat Seminar Polteksi',
    src: '/assets/images/sertifikat/seminar-polteksi.webp',
  },
  {
    id: 'lkmm-td',
    title: 'Sertifikat LKMM-TD',
    src: '/assets/images/sertifikat/sertif_lkmmTD.webp',
  },
  { id: 'smp-f', title: 'Sertifikat SMP', src: '/assets/images/sertifikat/smp_f.webp' },
  {
    id: 'webinar-cysec',
    title: 'Sertifikat Webinar Cybersecurity',
    src: '/assets/images/sertifikat/webinar_cysec.webp',
  },
  {
    id: 'webinar-sinau',
    title: 'Sertifikat Webinar Sinau',
    src: '/assets/images/sertifikat/webinar_sinau.webp',
  },
  { id: 'wiharta-f', title: 'Sertifikat Wiharta', src: '/assets/images/sertifikat/wiharta_f.webp' },
];

export const MARQUEE_RIBBON_TOP = [
  'Supabase',
  'PostgreSQL',
  'MySQL',
  'Kotlin',
  'Jetpack Compose',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
];

export const MARQUEE_RIBBON_BOTTOM = [
  'Firebase',
  'Express',
  'Node.js',
  'GSAP',
  'Framer Motion',
  'TypeScript',
  'React',
  'SolidJS',
  'Astro',
  'Next.js',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'WEB',
    badgeColor: '#F4C542',
    badgeTextColor: '#18181A',
    items: [
      'Next.js',
      'Astro',
      'SolidJS',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
    ],
  },
  {
    label: 'BACKEND & DATA',
    badgeColor: '#AEEBD2',
    badgeTextColor: '#18181A',
    items: ['Node.js', 'Express', 'Supabase', 'Firebase', 'PostgreSQL', 'MySQL'],
  },
  {
    label: 'MOBILE',
    badgeColor: '#F43F8E',
    badgeTextColor: '#FFFFFF',
    items: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Ktor', 'Room DB', 'WorkManager'],
  },
  {
    label: 'INFRA & TOOLS',
    badgeColor: '#2F45FF',
    badgeTextColor: '#FFFFFF',
    items: ['Git', 'GitHub', 'Vercel', 'Cloudflare'],
  },
];

export const WHY_ME_CARDS: WhyMeCard[] = [
  {
    number: '01',
    title: 'Saya merilis karya nyata ke produksi',
    description:
      'Setiap proyek dimulai dari masalah yang layak dipecahkan dan berakhir dengan sistem atau visual yang benar-benar berjalan, bukan sekadar purwarupa yang mangkrak.',
    bgColor: '#F4C542',
    textColor: '#18181A',
    icon: 'plane',
  },
  {
    number: '02',
    title: 'Lintas domain digital & visual, satu standar',
    description:
      'Aplikasi web & mobile yang dibangun dengan Next.js, TypeScript, dan Kotlin Jetpack Compose—berpadu mulus dengan fotografi komersial serta editing video profesional.',
    bgColor: '#9FE6C7',
    textColor: '#18181A',
    icon: 'asterisk',
  },
  {
    number: '03',
    title: 'Alur visual yang terstruktur, dari bidikan ke render',
    description:
      'Setiap karya visual melalui tahap konsep, penataan cahaya, pengambilan gambar di balik lensa, hingga proses editing dan color grading yang presisi.',
    bgColor: '#F43F8E',
    textColor: '#18181A',
    icon: 'plus',
  },
  {
    number: '04',
    title: 'Visual yang bercerita dan berdampak',
    description:
      'Dokumentasi komersial, potret produk, hingga video sinematik. Setiap bingkai dan potongan edit dirancang untuk menyampaikan pesan secara kuat kepada audiens.',
    bgColor: '#2F45FF',
    textColor: '#FFFFFF',
    icon: 'arrow',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'itqan',
    number: '01',
    title: 'Itqan',
    category: 'Mobile App',
    tags: ['SOLO PROJECT', 'MOBILE APP', 'ANDROID'],
    description:
      'A Quran memorization app engineered with a cognitive memory loop: SM-2 spaced repetition, adaptive review scheduling, offline-first local storage, reciter audio playback, and encrypted Google Drive sync.',
    role: 'Solo Android Developer',
    year: '2025',
    stack: ['KOTLIN', 'JETPACK COMPOSE', 'ROOM DB', 'HILT', 'WORKMANAGER'],
    panelBg: '#9FE6C7',
    mockupType: 'itqan',
    liveUrl: 'https://github.com/aldenprabaswara/itqan',
    featured: true,
  },
  {
    id: 'recruitai',
    number: '02',
    title: 'RecruitAI',
    category: 'Web App',
    tags: ['WEB APP', 'NEXT.JS', 'FULL-STACK'],
    description:
      'An AI-powered recruitment platform that automates resume screening, structured candidate scoring, and interview scheduling with real-time pipeline analytics.',
    role: 'Full-Stack Developer',
    year: '2025',
    stack: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'SUPABASE', 'OPENAI'],
    panelBg: '#F43F8E',
    mockupType: 'recruitai',
    liveUrl: 'https://github.com/aldenprabaswara/recruitai',
    featured: true,
  },
  {
    id: 'fni-dashboard',
    number: '03',
    title: 'FNI Dashboard',
    category: 'Web App',
    tags: ['CLIENT WORK', 'WEB APP', 'INTERNAL TOOL'],
    description:
      'A business operations and financial analytics dashboard for a data consulting firm, with database-enforced multi-role permissions, automated payout calculation, and real-time team chat.',
    role: 'Web Developer at PT. Niconsite',
    year: '2025',
    stack: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'SUPABASE', 'POSTGRESQL'],
    panelBg: '#2F45FF',
    mockupType: 'fni',
    liveUrl: 'https://niconsite.com',
    featured: true,
  },
  {
    id: 'dinar-khoirur',
    number: '04',
    title: 'Dinar Khoirur Rooziqiin',
    category: 'Website',
    tags: ['CLIENT WORK', 'WEBSITE', 'NEXT.JS'],
    description:
      'A fast, responsive catalog and storefront website for a culinary family business, featuring category filtering, gallery showcases, FAQ accordion, and direct WhatsApp ordering.',
    role: 'Full-Stack Developer',
    year: '2024',
    stack: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'FRAMER MOTION'],
    panelBg: '#18181A',
    mockupType: 'dinar',
    liveUrl: 'https://dinarkhoirurroziqiin.com',
    featured: true,
  },
  {
    id: 'flipomo',
    number: '05',
    title: 'FliPomo',
    category: 'Mobile App',
    tags: ['SOLO PROJECT', 'MOBILE APP', 'KOTLIN'],
    description:
      'A distraction-free Pomodoro focus timer built in Kotlin and Jetpack Compose with flip-clock animations, customizable focus intervals, daily streaks, and ambient focus audio.',
    role: 'Solo Android Developer',
    year: '2024',
    stack: ['KOTLIN', 'JETPACK COMPOSE', 'DATASTORE', 'MATERIAL 3'],
    panelBg: '#9FE6C7',
    mockupType: 'flipomo',
    liveUrl: 'https://github.com/aldenprabaswara/flipomo',
    featured: true,
  },
  {
    id: 'niconsite-studio',
    number: '06',
    title: 'Niconsite Studio Portal',
    category: 'Website',
    tags: ['AGENCY', 'WEBSITE', 'ASTRO'],
    description:
      'Landing experience and service intake site for Niconsite software studio, engineered for instant static page loads and clean client onboarding.',
    role: 'Frontend Engineer',
    year: '2025',
    stack: ['ASTRO', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'CLOUDFLARE'],
    panelBg: '#F4C542',
    mockupType: 'niconsite',
    liveUrl: 'https://niconsite.com',
    featured: false,
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'pkl-niconsite',
    title: 'Field Work Practice (PKL), Web Developer',
    issuer: 'PT. Niconsite',
    date: 'July 2025',
    category: 'Field Work',
    frameColor: '#F4C542',
    tapeColor: '#F4C542',
    credentialId: 'NIC-PKL-2025-014',
    verifyUrl: 'https://niconsite.com',
    subtitle: 'SERTIFIKAT PRAKTIK KERJA LAPANGAN — FULL-STACK WEB ENGINEERING',
  },
  {
    id: 'fcc-english',
    title: 'A2 English for Developers (Beta)',
    issuer: 'freeCodeCamp',
    date: 'May 2025',
    category: 'Language',
    frameColor: '#F43F8E',
    tapeColor: '#F43F8E',
    credentialId: 'FCC-A2-DEV-9042',
    verifyUrl: 'https://freecodecamp.org',
    subtitle: 'DEVELOPER CERTIFICATION — TECHNICAL COMMUNICATION',
  },
  {
    id: 'claude-code-101',
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'June 2025',
    category: 'AI Engineering',
    frameColor: '#2F45FF',
    tapeColor: '#2F45FF',
    credentialId: 'ANTH-CC101-7812',
    verifyUrl: 'https://anthropic.com',
    subtitle: 'ANTHROPIC ACADEMY — AGENTIC CODING WORKFLOWS',
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'June 2025',
    category: 'AI Engineering',
    frameColor: '#E14B32',
    tapeColor: '#F43F8E',
    credentialId: 'ANTH-C101-4429',
    verifyUrl: 'https://anthropic.com',
    subtitle: 'ANTHROPIC ACADEMY — FOUNDATIONS & PROMPT ARCHITECTURE',
  },
];

export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetail> = {
  'photography-editing': {
    slug: 'photography-editing',
    title: 'Photography & Editing',
    shortLabel: 'Photography & Editing',
    heroBadge: 'CREATIVE SERVICE',
    description:
      'Photography and video editing shaped around the story: from thoughtful framing and intentional light to polished visuals ready to share.',
    stackHeading: 'The tools and techniques behind each frame.',
    principles: [
      {
        number: '01',
        title: 'Plan the frame before the shoot',
        description:
          'A strong image starts with a clear idea. I consider the subject, mood, setting, and composition so each shot has a purpose before the camera comes out.',
        diagramType: 'photo-planning',
      },
      {
        number: '02',
        title: 'Capture with intention',
        description:
          'I pay attention to light, framing, and timing while shooting, building a considered set of images that gives the edit a strong foundation.',
        diagramType: 'photo-capture',
      },
      {
        number: '03',
        title: 'Shape the final image',
        description:
          'Careful color, contrast, and finishing bring the image together while keeping the result natural and consistent with the intended mood.',
        diagramType: 'photo-editing',
      },
      {
        number: '04',
        title: 'Edit video to tell a story',
        description:
          'I assemble clips into a clear visual flow, then refine pacing, transitions, and sound before exporting a finished video for its intended platform.',
        diagramType: 'video-editing',
      },
    ],
    stackGroups: [
      {
        label: 'PHOTOGRAPHY',
        badgeColor: '#F4C542',
        badgeTextColor: '#18181A',
        items: ['Composition', 'Natural light', 'Framing', 'Visual storytelling'],
      },
      {
        label: 'PHOTO EDITING',
        badgeColor: '#AEEBD2',
        badgeTextColor: '#18181A',
        items: ['Color correction', 'Contrast & tone', 'Retouching', 'Canva'],
      },
      {
        label: 'VIDEO EDITING',
        badgeColor: '#F43F8E',
        badgeTextColor: '#FFFFFF',
        items: ['CapCut', 'Clip selection', 'Pacing & transitions', 'Sound sync'],
      },
      {
        label: 'VISUAL DESIGN',
        badgeColor: '#2F45FF',
        badgeTextColor: '#FFFFFF',
        items: ['Figma', 'Canva', 'Layout & typography', 'Platform-ready exports'],
      },
    ],
  },
  'web-applications': {
    slug: 'web-applications',
    title: 'Web Applications',
    shortLabel: 'Web Applications',
    heroBadge: 'SERVICE',
    description:
      'Dashboards, internal tools, and platforms with real users and real data, built to stay reliable when the network or the data is not.',
    stackHeading: 'What I build web applications with.',
    principles: [
      {
        number: '01',
        title: 'Read the contract before writing the code',
        description:
          'Every API integration starts with the response shape, not the UI mockup. I define TypeScript interfaces and row-level security rules before writing a single component so database mismatches fail early at build time.',
        diagramType: 'api-contract',
      },
      {
        number: '02',
        title: 'Loading, success, and error are all first-class states',
        description:
          'Real users deal with spotty Wi-Fi, empty filters, and expired sessions. Every screen handles skeletons, actionable empty states, and clear retry paths without silent failures.',
        diagramType: 'three-states',
      },
      {
        number: '03',
        title: 'Third-party services are wrapped, never called directly',
        description:
          'Database clients, auth providers, PDF generators, and external AI APIs sit behind clean domain adapters. If a vendor SDK changes or a key rotates, only one module ever needs to know.',
        diagramType: 'wrapped-services',
      },
      {
        number: '04',
        title: 'One interface system across every screen',
        description:
          'Consistent spacing tokens, form validation feedback, and keyboard navigation carry through every table, drawer, and modal so teams learn the tool once and move quickly.',
        diagramType: 'design-system',
      },
    ],
    stackGroups: [
      {
        label: 'FRONTEND',
        badgeColor: '#F4C542',
        badgeTextColor: '#18181A',
        items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        label: 'DATA',
        badgeColor: '#AEEBD2',
        badgeTextColor: '#18181A',
        items: ['Supabase', 'PostgreSQL', 'MySQL', 'Prisma'],
      },
      {
        label: 'AUTH & REALTIME',
        badgeColor: '#F43F8E',
        badgeTextColor: '#FFFFFF',
        items: ['Row-Level Security', 'Supabase Realtime', 'Node.js', 'Express'],
      },
      {
        label: 'DEPLOY',
        badgeColor: '#2F45FF',
        badgeTextColor: '#FFFFFF',
        items: ['Vercel', 'Cloudflare', 'Docker'],
      },
    ],
  },
  'mobile-applications': {
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    shortLabel: 'Mobile Applications',
    heroBadge: 'SERVICE',
    description:
      'Native Android applications built with Kotlin and Jetpack Compose, designed to be reliable on real devices and maintainable as the product grows.',
    stackHeading: 'What I build apps with.',
    principles: [
      {
        number: '01',
        title: 'Architecture is not optional',
        description:
          'Every screen in an Android app follows clean MVVM with Hilt dependency injection. ViewModels own UI state, repositories own data, and the UI renders what it observes without touching a database directly.',
        diagramType: 'mvvm-arch',
      },
      {
        number: '02',
        title: 'Core logic built from first principles',
        description:
          'In Itqan, the Quran memorization app, the core is a pure-Kotlin SM-2 spaced repetition engine. Review intervals, Easiness Factor clamping, and forgetting curve scheduling live in testable domain classes with zero Android dependencies.',
        diagramType: 'sm2-curve',
      },
      {
        number: '03',
        title: 'State flows from a single source of truth',
        description:
          'Room DB and DataStore act as the authoritative local layer exposed via Kotlin Flow. UI actions dispatch intents downward and state flows upward predictably, even across configuration changes.',
        diagramType: 'unidirectional-state',
      },
      {
        number: '04',
        title: 'Features that survive real devices',
        description:
          'Foreground audio playback survives locked screens, WorkManager retries background Google Drive backups when connectivity returns, and offline-first caching keeps the app instant in low-signal areas.',
        diagramType: 'real-devices',
      },
    ],
    stackGroups: [
      {
        label: 'LANGUAGE',
        badgeColor: '#F4C542',
        badgeTextColor: '#18181A',
        items: ['Kotlin', 'Coroutines', 'Kotlin Flow'],
      },
      {
        label: 'UI',
        badgeColor: '#AEEBD2',
        badgeTextColor: '#18181A',
        items: ['Jetpack Compose', 'Material 3', 'Navigation'],
      },
      {
        label: 'DATA',
        badgeColor: '#F43F8E',
        badgeTextColor: '#FFFFFF',
        items: ['Room DB', 'DataStore', 'Hilt'],
      },
      {
        label: 'ANDROID',
        badgeColor: '#2F45FF',
        badgeTextColor: '#FFFFFF',
        items: ['WorkManager', 'MediaSession', 'Google Drive API'],
      },
    ],
  },
};
