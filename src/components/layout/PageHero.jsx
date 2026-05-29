import { Link } from 'react-router-dom';
import Reveal from '../Reveal';

export default function PageHero({ label, title, description, cta }) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8 border-b border-zinc-800/50">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/[0.06] to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <p className="font-mono text-[10px] text-orange-500/90 uppercase tracking-[0.28em] mb-4">
            <span className="text-zinc-600">// </span>
            {label}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.05] max-w-4xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed text-pretty">{description}</p>
          )}
          {cta && (
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to={cta.href} className="btn-primary">
                {cta.label}
              </Link>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
