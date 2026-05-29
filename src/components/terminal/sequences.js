export const HERO_TERMINAL = [
  { type: 'cmd', text: 'axiom-cyber init --engagement external-assessment' },
  { type: 'info', text: 'Axiom Cyber · division of Axiom International' },
  { type: 'dim', text: '────────────────────────────────────────────' },
  { type: 'phase', text: '[01/04] Scoping ............... boundary defined' },
  { type: 'phase', text: '[02/04] Recon ................. 847 assets mapped' },
  { type: 'phase', text: '[03/04] Assessment ............ controlled execution' },
  { type: 'warn', text: '         └─ finding: auth bypass (critical)' },
  { type: 'warn', text: '         └─ finding: exposed admin surface (high)' },
  { type: 'phase', text: '[04/04] Report ................ delivered to client' },
  { type: 'success', text: 'Status: findings reproducible · remediation mapped' },
  { type: 'prompt', text: 'request assessment → /contact' },
];

export const SURFACE_TERMINAL = [
  { type: 'cmd', text: 'axiom-cyber recon --external --passive-first' },
  { type: 'dim', text: '────────────────────────────────────────────' },
  { type: 'phase', text: 'discovered hosts .............. 142' },
  { type: 'phase', text: 'live services ................. 389' },
  { type: 'warn', text: 'exposed: admin panel /vpn (443)' },
  { type: 'warn', text: 'exposed: staging.api.[redacted] (no WAF)' },
  { type: 'info', text: 'cloud buckets ................. 3 public-read (review)' },
  { type: 'success', text: 'prioritized surface map → report section 2' },
];

export const FINDING_TERMINAL = [
  { type: 'cmd', text: 'axiom-cyber report --finding AXC-001 --redacted' },
  { type: 'dim', text: '────────────────────────────────────────────' },
  { type: 'warn', text: 'severity: CRITICAL · auth bypass' },
  { type: 'info', text: 'asset: api.[redacted].com/v1/admin' },
  { type: 'phase', text: 'repro: curl -X POST ... role=admin → token issued' },
  { type: 'success', text: 'remediation: server-side role enforcement' },
  { type: 'prompt', text: 'full report → deliverable sample below' },
];

export const TERMINAL_TABS = [
  { id: 'engagement', label: 'engagement.log', lines: HERO_TERMINAL },
  { id: 'surface', label: 'surface.map', lines: SURFACE_TERMINAL },
  { id: 'finding', label: 'finding.sample', lines: FINDING_TERMINAL },
];

export const APPROACH_TERMINAL = [
  { type: 'cmd', text: 'cat /engagement/methodology.md' },
  { type: 'dim', text: '────────────────────────────────────────────' },
  { type: 'info', text: 'Rules of engagement enforced before active testing.' },
  { type: 'phase', text: '01 · Scoping — explicit in / out of scope' },
  { type: 'phase', text: '02 · Recon — external footprint & target model' },
  { type: 'phase', text: '03 · Assessment — methodology-driven testing' },
  { type: 'phase', text: '04 · Reporting — exec summary + technical detail' },
  { type: 'success', text: 'Output: evidence, severity rationale, remediation' },
];
