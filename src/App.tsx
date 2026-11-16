import { useCallback, useEffect, useState } from 'react';
import { Preloader } from './components/Preloader';
import { CurtainTransition } from './components/CurtainTransition';
import { AppRoute, Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DarkStatementSection } from './components/DarkStatementSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { WhyMeSection } from './components/WhyMeSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ServicesSection } from './components/ServicesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { CertificateModal } from './components/CertificateModal';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { CertificatesPage } from './components/CertificatesPage';
import { ProjectsArchivePage } from './components/ProjectsArchivePage';
import { CertificateItem, SERVICE_DETAILS, ServiceSlug } from './data/portfolioData';

export default function App() {
  const skipIntro =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('autostart') === '1';

  const [preloaderDone, setPreloaderDone] = useState(skipIntro);
  const [route, setRoute] = useState<AppRoute>({ type: 'home' });
  const [curtainLabel, setCurtainLabel] = useState<string | null>(null);
  const [curtainActive, setCurtainActive] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);

  const transitionTo = useCallback((nextRoute: AppRoute, label: string, scrollTarget?: string) => {
    setCurtainLabel(label);
    setCurtainActive(true);

    setTimeout(() => {
      setRoute(nextRoute);
      if (scrollTarget) {
        requestAnimationFrame(() => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
          }
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    }, 340);

    setTimeout(() => {
      setCurtainActive(false);
    }, 680);
  }, []);

  const handleNavigateHome = useCallback(
    (sectionId?: string) => {
      if (route.type === 'home') {
        if (sectionId) {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      transitionTo({ type: 'home' }, 'Alden.', sectionId);
    },
    [route.type, transitionTo],
  );

  const handleNavigateService = useCallback(
    (slug: ServiceSlug) => {
      if (route.type === 'service' && route.slug === slug) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      transitionTo({ type: 'service', slug }, SERVICE_DETAILS[slug].title);
    },
    [route, transitionTo],
  );

  const handleNavigateCertificates = useCallback(() => {
    if (route.type === 'certificates') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    transitionTo({ type: 'certificates' }, 'All Certificates');
  }, [route.type, transitionTo]);

  const handleNavigateProjects = useCallback(() => {
    if (route.type === 'projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    transitionTo({ type: 'projects' }, 'Projects Archive');
  }, [route.type, transitionTo]);

  // Keep document title updated per route
  useEffect(() => {
    if (route.type === 'home') {
      document.title = 'Alden Prabaswara — Full-Stack & Android Developer';
    } else if (route.type === 'service') {
      document.title = `${SERVICE_DETAILS[route.slug].title} — Alden Prabaswara`;
    } else if (route.type === 'certificates') {
      document.title = 'Certificates — Alden Prabaswara';
    } else {
      document.title = 'Projects Archive — Alden Prabaswara';
    }
  }, [route]);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#18181A]"
      data-ready={preloaderDone ? 'true' : 'false'}
    >
      <Preloader skip={skipIntro} onComplete={() => setPreloaderDone(true)} />
      <CurtainTransition label={curtainLabel} isActive={curtainActive} />

      <Navbar
        route={route}
        onNavigateHome={handleNavigateHome}
        onNavigateService={handleNavigateService}
        onNavigateCertificates={handleNavigateCertificates}
        onNavigateProjects={handleNavigateProjects}
        onOpenContact={() => setContactOpen(true)}
      />

      {route.type === 'home' && (
        <main className="flex-1">
          <HeroSection
            onOpenContact={() => setContactOpen(true)}
            onSeeWork={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <DarkStatementSection />
          <AboutSection onNavigateService={handleNavigateService} />
          <ExperienceSection />
          <SkillsSection />
          <WhyMeSection />
          <SelectedWorkSection onOpenArchive={handleNavigateProjects} />
          <CertificatesSection
            onOpenAllCertificates={handleNavigateCertificates}
            onInspectCertificate={(cert) => setActiveCertificate(cert)}
          />
          <ServicesSection onNavigateService={handleNavigateService} />
        </main>
      )}

      {route.type === 'service' && (
        <ServiceDetailPage
          slug={route.slug}
          onBackHome={() => handleNavigateHome()}
          onNavigateService={handleNavigateService}
        />
      )}

      {route.type === 'certificates' && (
        <CertificatesPage
          onBackHome={() => handleNavigateHome()}
          onInspectCertificate={(cert) => setActiveCertificate(cert)}
        />
      )}

      {route.type === 'projects' && (
        <ProjectsArchivePage onBackHome={() => handleNavigateHome()} />
      )}

      <CTASection onOpenContact={() => setContactOpen(true)} />

      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateService={handleNavigateService}
        onNavigateCertificates={handleNavigateCertificates}
        onNavigateProjects={handleNavigateProjects}
        onOpenContact={() => setContactOpen(true)}
      />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </div>
  );
}
