import { Link } from 'react-router-dom';
import Reveal from '../Reveal';

export default function PageHero({ label, title, description, cta }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 px-6 lg:px-8 border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
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
            <div className="mt-8">
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
