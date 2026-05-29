import { Link } from 'react-router-dom';
import Logo from './Logo';
import { NAV_LINKS, SITE } from '../lib/site';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/60 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 rounded-sm">
              <Logo variant="footer" />
            </Link>
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed max-w-md">
              Offensive security division of{' '}
              <span className="text-zinc-300">{SITE.parent}</span>. Same engineering discipline behind{' '}
              <a
                href={SITE.sibling.url}
                className="text-orange-400/90 hover:text-orange-400 underline-offset-2 hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.sibling.label}
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-4">Navigate</p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-4">Contact</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-base text-zinc-200 hover:text-orange-400 font-mono transition-colors"
            >
              {SITE.email}
            </a>
            <Link
              to="/engagements"
              className="mt-4 inline-block text-sm text-zinc-500 hover:text-orange-400 transition-colors"
            >
              View engagement plans →
            </Link>
            <p className="mt-8 font-mono text-[10px] text-zinc-700 leading-relaxed">
              <span className="text-zinc-600">// </span>
              Client engagements disclosed only with written authorization.
            </p>
          </div>
        </div>

        <div className="section-divider my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} {SITE.parent}. All rights reserved.</p>
          <p className="font-mono tracking-widest text-zinc-700">AXIOM-CYB</p>
        </div>
      </div>
    </footer>
  );
}
