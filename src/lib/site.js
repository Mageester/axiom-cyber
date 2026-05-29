export const SITE = {
  name: 'Axiom Cyber',
  parent: 'Axiom International',
  sibling: { name: 'Axiom', url: 'https://getaxiom.ca', label: 'getaxiom.ca' },
  tagline: 'Offensive security for infrastructure that matters',
  email: 'security@getaxiom.ca',
  url: 'https://cyber.getaxiom.ca',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/approach' },
  { label: 'Contact', href: '/contact' },
];

export const PAGE_META = {
  '/': {
    title: 'Axiom Cyber — Penetration Testing & Security Assessments',
    description:
      'A division of Axiom International. Structured penetration testing, attack surface mapping, and security assessments for organizations that operate at scale.',
  },
  '/services': {
    title: 'Services — Axiom Cyber',
    description:
      'Attack surface mapping, penetration testing, web application review, infrastructure hardening, and incident readiness.',
  },
  '/approach': {
    title: 'Approach — Axiom Cyber',
    description:
      'Scoping, reconnaissance, controlled assessment, and structured reporting — a predictable engagement model built for engineering teams.',
  },
  '/contact': {
    title: 'Contact — Axiom Cyber',
    description:
      'Request a security assessment. Describe your scope and we will confirm fit and timeline.',
  },
};
