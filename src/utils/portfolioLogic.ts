import {
  CertificateItem,
  ProjectCategory,
  ProjectItem,
  SERVICE_DETAILS,
  ServiceDetail,
  ServiceSlug,
} from '../data/portfolioData';

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};
  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedMessage = input.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please share a bit more detail (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function filterProjects(
  projects: ProjectItem[],
  category: 'All' | ProjectCategory,
  query: string,
): ProjectItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  return projects.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    const haystack = [
      project.title,
      project.description,
      project.role,
      project.category,
      ...project.stack,
      ...project.tags,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

export function filterCertificates(
  certificates: CertificateItem[],
  category: 'All' | CertificateItem['category'],
): CertificateItem[] {
  if (category === 'All') return certificates;
  return certificates.filter((cert) => cert.category === category);
}

export function getServiceBySlug(slug: ServiceSlug): ServiceDetail {
  return SERVICE_DETAILS[slug];
}

export function getOtherServices(currentSlug: ServiceSlug): ServiceDetail[] {
  return (Object.values(SERVICE_DETAILS) as ServiceDetail[]).filter(
    (service) => service.slug !== currentSlug,
  );
}

export function formatCounter(value: number): string {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return clamped.toString().padStart(3, '0');
}

export const NAVBAR_PILL_SCROLL_THRESHOLD = 72;

export type NavbarVisualMode = 'top' | 'pill-logo' | 'floating-bar';

export interface NavbarPillInput {
  scrollY: number;
  threshold?: number;
  isDesktop?: boolean;
  floatingBarExpanded?: boolean;
  dropdownOpen?: boolean;
}

export interface NavbarPillState {
  mode: NavbarVisualMode;
  isFloating: boolean;
  showOnlyLogo: boolean;
  hasBackdropBlur: boolean;
}

export function computeNavbarPillState({
  scrollY,
  threshold = NAVBAR_PILL_SCROLL_THRESHOLD,
  isDesktop = true,
  floatingBarExpanded = false,
  dropdownOpen = false,
}: NavbarPillInput): NavbarPillState {
  if (!isDesktop || scrollY <= threshold) {
    return {
      mode: 'top',
      isFloating: false,
      showOnlyLogo: false,
      hasBackdropBlur: false,
    };
  }

  if (floatingBarExpanded || dropdownOpen) {
    return {
      mode: 'floating-bar',
      isFloating: true,
      showOnlyLogo: false,
      hasBackdropBlur: true,
    };
  }

  return {
    mode: 'pill-logo',
    isFloating: true,
    showOnlyLogo: true,
    hasBackdropBlur: false,
  };
}

export const HEADING_STAGGER_DEFAULTS = {
  staggerDelay: 0.09,
  delayChildren: 0.04,
  distanceY: 22,
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1] as const,
};

export interface HeadingStaggerOptions {
  staggerDelay?: number;
  delayChildren?: number;
  distanceY?: number;
  duration?: number;
  reducedMotion?: boolean;
}

export function createHeadingStaggerVariants(options: HeadingStaggerOptions = {}) {
  const {
    staggerDelay = HEADING_STAGGER_DEFAULTS.staggerDelay,
    delayChildren = HEADING_STAGGER_DEFAULTS.delayChildren,
    distanceY = HEADING_STAGGER_DEFAULTS.distanceY,
    duration = HEADING_STAGGER_DEFAULTS.duration,
    reducedMotion = false,
  } = options;

  return {
    container: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reducedMotion ? 0 : staggerDelay,
          delayChildren: reducedMotion ? 0 : delayChildren,
        },
      },
    },
    item: {
      hidden: {
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : distanceY,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: reducedMotion
          ? { duration: 0.01 }
          : { duration, ease: HEADING_STAGGER_DEFAULTS.ease },
      },
    },
  };
}

