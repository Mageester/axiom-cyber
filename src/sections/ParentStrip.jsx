import { SITE } from '../lib/site';
import Reveal from '../components/Reveal';

export default function ParentStrip() {
  return (
    <section className="py-10 border-y border-zinc-800/50 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded border border-zinc-800 flex items-center justify-center font-mono text-xs text-orange-500">
                AI
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-200">A division of {SITE.parent}</p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Built alongside{' '}
                  <a
                    href={SITE.sibling.url}
                    className="text-zinc-400 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE.sibling.label}
                  </a>{' '}
                  — production infrastructure, assessed by the same discipline.
                </p>
              </div>
            </div>
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
              Independent findings · No tool resale
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
