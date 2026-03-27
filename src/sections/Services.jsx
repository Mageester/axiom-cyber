import SectionLabel from '../components/SectionLabel';

const SERVICES = [
  {
    id: 'svc-attack-surface',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: 'Attack Surface Mapping',
    description: 'Systematic enumeration of all externally-visible assets, services, and exposure points across your infrastructure.',
  },
  {
    id: 'svc-pentest',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Penetration Testing',
    description: 'Goal-oriented adversarial testing with scoped methodology, structured findings, and remediation guidance.',
  },
  {
    id: 'svc-web-appsec',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Web Application Review',
    description: 'Deep review of authentication flows, authorization logic, input handling, and business-logic vulnerabilities.',
  },
  {
    id: 'svc-infra',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Infrastructure Hardening',
    description: 'Assessment of network architecture, firewall configuration, cloud posture, and access controls against baseline standards.',
  },
  {
    id: 'svc-architecture',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V10l8-8 8 8v10" />
        <rect x="10" y="15" width="4" height="5" />
      </svg>
    ),
    title: 'Security Architecture Review',
    description: 'Evaluation of your security design decisions: segmentation, trust boundaries, credential management, and detection posture.',
  },
  {
    id: 'svc-incident',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Incident Readiness',
    description: 'Assessment of your detection, logging, and response capabilities — evaluated before an incident, not during one.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <SectionLabel>Core Services</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight max-w-xl leading-[1.2]">
            Structured assessments across your full security perimeter.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group bg-zinc-950 p-8 hover:bg-zinc-900/60 transition-colors duration-200"
            >
              <div className="text-blue-400 mb-5">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
