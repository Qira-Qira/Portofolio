import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CERTIFICATES,
  PROJECTS,
} from '../data/portfolioData';
import {
  computeNavbarPillState,
  createHeadingStaggerVariants,
  filterCertificates,
  filterProjects,
  formatCounter,
  getOtherServices,
  getServiceBySlug,
  HEADING_STAGGER_DEFAULTS,
  NAVBAR_PILL_SCROLL_THRESHOLD,
  validateContactForm,
} from './portfolioLogic';

test('validateContactForm rejects empty or invalid inputs', () => {
  const result = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    message: 'Hi',
  });
  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts well-formed project inquiries', () => {
  const result = validateContactForm({
    name: 'Rafi Pratama',
    email: 'rafi@company.id',
    message: 'We need a custom Next.js operations dashboard shipped in 6 weeks.',
  });
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test('filterProjects filters by category and search query accurately', () => {
  const mobileApps = filterProjects(PROJECTS, 'Mobile App', '');
  assert.equal(mobileApps.length, 2);
  assert.deepEqual(
    mobileApps.map((p) => p.id),
    ['itqan', 'flipomo'],
  );

  const supabaseProjects = filterProjects(PROJECTS, 'All', 'supabase');
  assert.equal(supabaseProjects.length, 2);
  assert.ok(supabaseProjects.some((p) => p.id === 'fni-dashboard'));
});

test('filterCertificates returns full collection or filtered subset', () => {
  assert.equal(filterCertificates(CERTIFICATES, 'All').length, 4);
  const aiCerts = filterCertificates(CERTIFICATES, 'AI Engineering');
  assert.equal(aiCerts.length, 2);
});

test('service helpers return valid service details and exclude active slug from others', () => {
  const webService = getServiceBySlug('websites');
  assert.equal(webService.title, 'Websites');
  assert.equal(webService.principles.length, 4);

  const others = getOtherServices('websites');
  assert.equal(others.length, 2);
  assert.ok(others.every((s) => s.slug !== 'websites'));
});

test('formatCounter pads and clamps values to 3 digits', () => {
  assert.equal(formatCounter(0), '000');
  assert.equal(formatCounter(62), '062');
  assert.equal(formatCounter(145), '100');
});

test('computeNavbarPillState handles desktop pill modes and restricts backdrop blur to expanded floating pill only', () => {
  assert.deepEqual(computeNavbarPillState({ scrollY: 0 }), {
    mode: 'top',
    isFloating: false,
    showOnlyLogo: false,
    hasBackdropBlur: false,
  });
  assert.deepEqual(computeNavbarPillState({ scrollY: NAVBAR_PILL_SCROLL_THRESHOLD }), {
    mode: 'top',
    isFloating: false,
    showOnlyLogo: false,
    hasBackdropBlur: false,
  });
  assert.deepEqual(computeNavbarPillState({ scrollY: NAVBAR_PILL_SCROLL_THRESHOLD + 1 }), {
    mode: 'pill-logo',
    isFloating: true,
    showOnlyLogo: true,
    hasBackdropBlur: false,
  });
  assert.deepEqual(
    computeNavbarPillState({ scrollY: 600, floatingBarExpanded: true }),
    {
      mode: 'floating-bar',
      isFloating: true,
      showOnlyLogo: false,
      hasBackdropBlur: true,
    },
  );
  assert.deepEqual(
    computeNavbarPillState({ scrollY: 600, dropdownOpen: true }),
    {
      mode: 'floating-bar',
      isFloating: true,
      showOnlyLogo: false,
      hasBackdropBlur: true,
    },
  );
  // Mobile mode (isDesktop: false) never shrinks or enters floating pill bar and has no blur
  assert.deepEqual(
    computeNavbarPillState({ scrollY: 800, isDesktop: false, floatingBarExpanded: true }),
    {
      mode: 'top',
      isFloating: false,
      showOnlyLogo: false,
      hasBackdropBlur: false,
    },
  );
});

test('createHeadingStaggerVariants builds opacity and translateY stagger variants with reduced-motion fallback', () => {
  const normal = createHeadingStaggerVariants();
  assert.equal(normal.container.visible.transition.staggerChildren, HEADING_STAGGER_DEFAULTS.staggerDelay);
  assert.equal(normal.item.hidden.opacity, 0);
  assert.equal(normal.item.hidden.y, HEADING_STAGGER_DEFAULTS.distanceY);
  assert.equal(normal.item.visible.opacity, 1);
  assert.equal(normal.item.visible.y, 0);

  const reduced = createHeadingStaggerVariants({ reducedMotion: true });
  assert.equal(reduced.container.visible.transition.staggerChildren, 0);
  assert.equal(reduced.item.hidden.opacity, 1);
  assert.equal(reduced.item.hidden.y, 0);
});
