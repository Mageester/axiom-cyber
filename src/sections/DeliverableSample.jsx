import { useState } from 'react';
import SectionHeader from '../components/layout/SectionHeader';
import Reveal from '../components/Reveal';

const FINDINGS = [
  {
    id: 'AXC-001',
    title: 'Authentication bypass on admin API route',
    sev: 'Critical',
    color: 'text-red-400 bg-red-950/40 border-red-900/50',
    repro: `$ curl -s -X POST https://api.[redacted]/v1/auth \\
  -H "X-Forwarded-For: 127.0.0.1" \\
  -d '{"role":"admin"}' | jq .token`,
    remediation:
      'Enforce server-side role validation on all admin routes. Remove trust in client-supplied role fields. Add integration tests for negative authorization cases.',
  },
  {
    id: 'AXC-002',
    title: 'Exposed management interface (VPN bypass)',
    sev: 'High',
    color: 'text-amber-400 bg-amber-950/30 border-amber-900/40',
    repro: 'GET /admin/login — accessible without VPN from 203.0.113.0/24 egress range.',
    remediation: 'Restrict management plane to VPN IP allowlist. Enforce MFA on all admin paths.',
  },
  {
    id: 'AXC-003',
    title: 'Session fixation in OAuth callback',
    sev: 'High',
    color: 'text-amber-400 bg-amber-950/30 border-amber-900/40',
    repro: 'OAuth state parameter not validated on callback — session hijack via crafted link.',
    remediation: 'Validate state/nonce on callback. Rotate session ID post-authentication.',
  },
];

const SEVERITY_CHIPS = [
  { label: 'Critical', count: 2, className: 'text-red-400 border-red-900/50' },
  { label: 'High', count: 4, className: 'text-amber-400 border-amber-900/50' },
  { label: 'Medium', count: 4, className: 'text-zinc-400 border-zinc-700' },
  { label: 'Low', count: 2, className: 'text-zinc-500 border-zinc-800' },
];

export default function DeliverableSample() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="proof" data-chapter="proof" className="py-24 lg:py-32 px-6 lg:px-8 border-y border-zinc-800/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="deliverables"
          title="What lands in your inbox — structured, not sensational."
          description="Every engagement produces evidence your team can act on. Illustrative structure below; client identifiers redacted."
        />

        <Reveal>
          <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.25em] mb-6">
            ILLUSTRATIVE · REDACTED · NOT A CLIENT ENGAGEMENT
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-8 stagger-visible">
          {SEVERITY_CHIPS.map((chip, i) => (
            <span
              key={chip.label}
              className={`stagger-child inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono text-[10px] ${chip.className}`}
              style={{ '--stagger-i': i }}
            >
              {chip.label}
              <span className="opacity-70">{chip.count}</span>
            </span>
          ))}
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-black/60">
              <span className="font-mono text-[10px] text-zinc-500">axiom-cyber_report_v1.2.pdf</span>
              <span className="font-mono text-[9px] text-emerald-500/80">CONFIDENTIAL</span>
            </div>

            <div className="p-6 sm:p-8 space-y-6 font-mono text-xs sm:text-sm">
              <div>
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-2">Executive summary</p>
                <p className="text-zinc-400 leading-relaxed max-w-3xl">
                  External assessment identified <span className="text-white">12 findings</span> across the
                  in-scope perimeter. Primary risk concentration: authentication boundary on{' '}
                  <span className="text-zinc-300">api.[redacted].com</span>.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800/80 overflow-hidden">
                <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-zinc-900/50 text-[10px] text-zinc-600 uppercase tracking-wider">
                  <span className="col-span-2">ID</span>
                  <span className="col-span-6">Finding</span>
                  <span className="col-span-2">Severity</span>
                  <span className="col-span-2"> </span>
                </div>
                {FINDINGS.map((row) => (
                  <div key={row.id} className="border-t border-zinc-800/60">
                    <button
                      type="button"
                      onClick={() => setOpenId(openId === row.id ? null : row.id)}
                      className="w-full grid grid-cols-12 gap-2 px-4 py-3 text-left text-zinc-400 hover:bg-zinc-900/40 transition-colors"
                      aria-expanded={openId === row.id}
                    >
                      <span className="col-span-2 text-zinc-500">{row.id}</span>
                      <span className="col-span-6 text-zinc-300">{row.title}</span>
                      <span className={`col-span-2 text-[10px] px-2 py-0.5 rounded border w-fit h-fit ${row.color}`}>
                        {row.sev}
                      </span>
                      <span className="col-span-2 text-zinc-600 text-right">
                        {openId === row.id ? '−' : '+'}
                      </span>
                    </button>
                    {openId === row.id && (
                      <div className="px-4 pb-4 grid md:grid-cols-2 gap-4 bg-black/30">
                        <div className="rounded-lg border border-zinc-800 p-4">
                          <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Reproduction</p>
                          <pre className="text-[11px] text-emerald-400/80 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                            {row.repro}
                          </pre>
                        </div>
                        <div className="rounded-lg border border-zinc-800 p-4">
                          <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2">Remediation</p>
                          <p className="text-zinc-400 text-[11px] leading-relaxed">{row.remediation}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
