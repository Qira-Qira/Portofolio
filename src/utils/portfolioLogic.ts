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
