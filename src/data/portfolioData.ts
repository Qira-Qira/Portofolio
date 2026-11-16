export type ServiceSlug = 'websites' | 'web-applications' | 'mobile-applications';

export type ProjectCategory = 'Website' | 'Web App' | 'Mobile App';

export interface StoryStep {
  number: string;
  kicker: string;
  text: string;
}

export interface ExperienceRole {
  index: string;
  period: string;
  title: string;
  company: string;
  type: string;
  location: string;
  mode: string;
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
    | 'real-devices';
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
    text: "I'm Nawaf Ariq Hilalbi, a full-stack developer at Niconsite and an Informatics Engineering graduate of FILKOM, Universitas Brawijaya. I build websites, web applications, and Android mobile applications that solve real problems for real people.",
  },
  {
    number: '02',
    kicker: 'HOW I WORK',
    text: "I don't learn by reading. I learn by shipping. Every project starts with a problem worth solving and ends with something actually running in production.",
  },
  {
    number: '03',
    kicker: 'WHAT I BUILD',
    text: "My work spans across domains and scales. I've shipped a consumer mobile app, business-facing web applications, an internal dashboard, and client-facing websites. Each one required a different set of decisions, and I made every one of them deliberately.",
  },
  {
    number: '04',
    kicker: 'STACK',
    text: 'I work primarily with Next.js and TypeScript on the web, and Kotlin with Jetpack Compose on Android. I care deeply about architecture, clean interfaces, and software that actually holds up under real use.',
  },
];

export const WHAT_I_BUILD_ITEMS: { label: string; tag: string; slug: ServiceSlug }[] = [
  { label: 'Website Development', tag: 'WEBSITE', slug: 'websites' },
  { label: 'Web Application Development', tag: 'WEB APP', slug: 'web-applications' },
  { label: 'Android Mobile App Development', tag: 'MOBILE APP', slug: 'mobile-applications' },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    index: '01',
    period: 'JAN - JUL 2025',
    title: 'Web Developer',
    company: 'PT. Niconsite',
    type: 'INTERNSHIP',
    location: 'MALANG',
    mode: 'HYBRID',
    summary:
      'Built a business operations dashboard from scratch for a data consulting firm, from the database and access rules to the interface the team uses every day.',
    bullets: [
      'Multi-role dashboard (Owner, Admin, Consultant) with access control enforced at the database level, not just in the UI',
      'Real-time notifications and an internal chat to keep the team coordinated',
      'Revenue and consultant payment calculated inside the database so the numbers stay consistent',
      'Excel export and PDF reports for day-to-day reporting',
      'Turned requirements from a non-technical team into features that fit how they actually work',
    ],
    tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'SUPABASE', 'POSTGRESQL'],
  },
];

export const EXPERIENCE_PHOTOS: ExperiencePhoto[] = [
  {
    id: 'handover',
    caption: 'CERTIFICATION PRESENTATION',
    src: '/src/assets/images/internship_handover_1794749717729.jpg',
    alt: 'Ariq receiving internship certification in the office',
  },
  {
    id: 'award',
    caption: 'INTERNSHIP CERTIFICATE',
    src: '/src/assets/images/internship_award_1794749717837.jpg',
    alt: 'Developer holding official internship completion certificate',
  },
  {
    id: 'teamwork',
    caption: 'TEAM WORKSPACE COLLABORATION',
    src: '/src/assets/images/internship_teamwork_1794749718871.jpg',
    alt: 'Software engineering team collaborating on dashboard UI',
  },
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
    title: 'I ship to production',
    description:
      'Every project starts with a problem worth solving and ends with something actually running, not a prototype that stalls.',
    bgColor: '#F4C542',
    textColor: '#18181A',
    icon: 'plane',
  },
  {
    number: '02',
    title: 'Three kinds of product, one standard',
    description:
      'Websites, web applications, and Android apps, built with Next.js and TypeScript on the web and Kotlin with Jetpack Compose on Android.',
    bgColor: '#9FE6C7',
    textColor: '#18181A',
    icon: 'asterisk',
  },
  {
    number: '03',
    title: 'A clear process, start to finish',
    description:
      'Every project moves through requirements, planning, design, development, testing, and deployment, with you in the loop at every stage.',
    bgColor: '#F43F8E',
    textColor: '#18181A',
    icon: 'plus',
  },
  {
    number: '04',
    title: 'Built for real people',
    description:
      'Business web applications, an internal dashboard, a family shop website, and a Quran memorization app. Every project has an actual user in mind.',
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
  websites: {
    slug: 'websites',
    title: 'Websites',
    shortLabel: 'Websites',
    heroBadge: 'SERVICE',
    description:
      'Company profiles, landing pages, and catalog sites built to load fast, be found, and stay easy to maintain long after launch.',
    stackHeading: 'What I build websites with.',
    principles: [
      {
        number: '01',
        title: 'Architecture before aesthetics',
        description:
          'Every project starts with folder structure and data flow, not visual polish. Separating routes, domain data, and UI primitives means adding a new page or product line takes minutes instead of untangling coupled markup.',
        diagramType: 'folder-tree',
      },
      {
        number: '02',
        title: 'TypeScript as a design tool',
        description:
          'Typed content schemas and component props make invalid states impossible at compile time. Before any CSS gets written, the shape of every section, card, and metadata tag is explicit and self-documenting.',
        diagramType: 'typescript-contract',
      },
      {
        number: '03',
        title: 'UI built from scratch, not assembled from libraries',
        description:
          'I avoid heavy off-the-shelf template kits that look like every other SaaS page. Every button, accordion, modal, and transition curve is tailored to the brand and kept small in bundle weight.',
        diagramType: 'ui-scratch',
      },
      {
        number: '04',
        title: 'Performance & SEO baked in from day one',
        description:
          'Semantic HTML landmarks, balanced font loading, OpenGraph cards, and static-first rendering ensure search engines and visitors on slower mobile networks get an instant first paint.',
        diagramType: 'seo-perf',
      },
    ],
    stackGroups: [
      {
        label: 'FRAMEWORK',
        badgeColor: '#F4C542',
        badgeTextColor: '#18181A',
        items: ['Next.js', 'Astro', 'React', 'TypeScript'],
      },
      {
        label: 'STYLING',
        badgeColor: '#AEEBD2',
        badgeTextColor: '#18181A',
        items: ['Tailwind CSS', 'Framer Motion', 'GSAP'],
      },
      {
        label: 'CMS & DATA',
        badgeColor: '#F43F8E',
        badgeTextColor: '#FFFFFF',
        items: ['Markdown / MDX', 'Supabase', 'PostgreSQL'],
      },
      {
        label: 'HOSTING',
        badgeColor: '#2F45FF',
        badgeTextColor: '#FFFFFF',
        items: ['Vercel', 'Cloudflare Pages', 'GitHub Actions'],
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
