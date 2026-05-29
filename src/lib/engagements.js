/** Engagement options — investment bands are typical; final quote follows scoping. */

export const ENGAGEMENT_FOOTNOTE =
  'All figures are indicative ranges in CAD. Final investment is confirmed in a written scope proposal after your intro call.';

export const COMPARISON_FEATURES = [
  { id: 'discovery', label: 'External asset discovery', values: [true, true, true] },
  { id: 'exploit', label: 'Active exploitation', values: [false, true, true] },
  { id: 'webapp', label: 'Web application depth (up to 3 apps)', values: [false, false, true] },
  { id: 'api', label: 'API surface review', values: [false, false, true] },
  { id: 'walkthrough', label: 'Findings walkthrough', values: [false, true, true] },
  { id: 'roadmap', label: 'Remediation roadmap', values: [true, true, true] },
];

export const ENGAGEMENTS = [
  {
    id: 'exposure-map',
    code: 'PKG-01',
    name: 'Exposure Map',
    tagline: 'See what the internet sees before anyone exploits it.',
    featured: false,
    timeline: '5–10 business days',
    investment: '$4,500 – $8,500',
    idealFor: 'Teams needing external visibility without active exploitation.',
    includes: [
      'External asset discovery & enumeration',
      'Service & technology fingerprinting',
      'Exposure prioritization matrix',
      'Executive + technical summary',
    ],
    notIncluded: ['Active exploitation', 'Internal network testing'],
  },
  {
    id: 'external-pt',
    code: 'PKG-02',
    name: 'External Penetration Test',
    tagline: 'Controlled adversarial testing of your public perimeter.',
    featured: true,
    timeline: '2–3 weeks',
    investment: '$12,000 – $22,000',
    idealFor: 'Production environments with meaningful external attack surface.',
    includes: [
      'Everything in Exposure Map',
      'Goal-oriented exploitation within scope',
      'Authentication & session testing (external)',
      'Structured findings with reproduction steps',
      'Risk-rated remediation guidance',
      '60-minute findings walkthrough',
    ],
    notIncluded: ['Internal AD / lateral movement unless scoped'],
  },
  {
    id: 'app-perimeter',
    code: 'PKG-03',
    name: 'Application & Perimeter',
    tagline: 'Web applications plus external infrastructure in one engagement.',
    featured: false,
    timeline: '3–5 weeks',
    investment: '$22,000 – $45,000',
    idealFor: 'SaaS, customer portals, and multi-app estates behind one perimeter.',
    includes: [
      'Everything in External Penetration Test',
      'Up to 3 web applications in scope',
      'Business-logic & authorization depth',
      'API surface review (REST/GraphQL)',
      'Architecture observations',
      'Prioritized remediation roadmap',
    ],
    notIncluded: ['Source code review unless add-on'],
  },
];

export const ADD_ONS = [
  {
    id: 'retest',
    name: 'Remediation Retest',
    description: 'Re-test validated fixes within 90 days of original delivery.',
    timeline: '3–5 business days',
    investment: 'From $2,500',
  },
  {
    id: 'architecture',
    name: 'Architecture Review',
    description: 'Segmentation, trust boundaries, secrets, and detection posture.',
    timeline: '1–2 weeks',
    investment: 'From $6,500',
  },
  {
    id: 'readiness',
    name: 'Incident Readiness',
    description: 'Logging, detection, and response workflow assessment.',
    timeline: '1 week',
    investment: 'From $5,500',
  },
  {
    id: 'social',
    name: 'Phishing / Social (scoped)',
    description: 'Controlled campaign aligned to your security awareness program.',
    timeline: '2 weeks',
    investment: 'Scoped',
  },
];

export function getEngagementById(id) {
  return ENGAGEMENTS.find((p) => p.id === id) ?? ENGAGEMENTS.find((p) => p.featured);
}
