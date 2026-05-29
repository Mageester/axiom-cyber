import SectionHeader from '../components/layout/SectionHeader';
import Reveal from '../components/Reveal';

const SERVICES = [
  {
    id: 'attack-surface',
    code: 'ASM-01',
    title: 'Attack Surface Mapping',
    description: 'Enumeration of externally visible assets, services, and exposure points across your perimeter.',
  },
  {
    id: 'pentest',
    code: 'PT-02',
    title: 'Penetration Testing',
    description: 'Goal-oriented adversarial testing with scoped methodology, evidence-backed findings, and remediation guidance.',
  },
  {
    id: 'web-appsec',
    code: 'WEB-03',
    title: 'Web Application Review',
    description: 'Authentication, authorization, input handling, and business-logic flaws — tested with engineering depth.',
  },
  {
    id: 'infra',
    code: 'INF-04',
    title: 'Infrastructure Hardening',
    description: 'Network architecture, firewall posture, cloud configuration, and access controls against baseline standards.',
  },
  {
    id: 'architecture',
    code: 'ARC-05',
    title: 'Security Architecture Review',
    description: 'Segmentation, trust boundaries, credential management, and detection posture evaluated as a system.',
  },
  {
    id: 'incident',
    code: 'IR-06',
    title: 'Incident Readiness',
    description: 'Detection, logging, and response capabilities assessed before an incident — not during one.',
  },
];

export default function Services({ showHeader = true }) {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <SectionHeader
            label="services"
            title="Structured coverage across your security perimeter."
            description="Each engagement is scoped, documented, and delivered with reproducible evidence — not generic scan output."
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <Reveal key={service.id}>
              <article className="cyber-card h-full p-6 sm:p-7 group">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] text-orange-500/80 tracking-wider">{service.code}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-orange-50 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
