import { SITE } from '../lib/site';
import Reveal from '../components/Reveal';

export default function ParentStrip() {
  return (
    <section className="py-6 border-b border-zinc-800/50 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-1" aria-hidden="true">
                <span className="w-2 h-8 bg-orange-500/80 rounded-sm" />
                <span className="w-2 h-6 bg-zinc-600 rounded-sm mt-2" />
                <span className="w-2 h-10 bg-zinc-500 rounded-sm" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-200">
                  A division of <span className="text-white">{SITE.parent}</span>
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Same house as{' '}
                  <a
                    href={SITE.sibling.url}
                    className="text-orange-400/90 hover:text-orange-400 underline-offset-2 hover:underline transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE.sibling.label}
                  </a>
                  {' '}· web infrastructure & offensive security
                </p>
              </div>
            </div>
            <p className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.2em]">
              Independent · No tool resale
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
