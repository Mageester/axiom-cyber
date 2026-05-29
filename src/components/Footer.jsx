import { Link } from 'react-router-dom';
import Logo from './Logo';
import { NAV_LINKS, SITE } from '../lib/site';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-800/60 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500 rounded-sm">
              <Logo className="h-9 w-auto max-w-[200px]" />
            </Link>
            <p className="mt-5 text-sm text-zinc-500 leading-relaxed max-w-sm">
              Offensive security division of{' '}
              <span className="text-zinc-400">{SITE.parent}</span>. Same engineering discipline behind{' '}
              <a
                href={SITE.sibling.url}
                className="text-zinc-400 hover:text-orange-400 underline-offset-2 hover:underline transition-colors"
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
            <nav className="flex flex-col gap-2" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-4">Contact</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-zinc-300 hover:text-orange-400 font-mono transition-colors"
            >
              {SITE.email}
            </a>
            <p className="mt-6 font-mono text-[10px] text-zinc-700 leading-relaxed">
              <span className="text-zinc-600">// </span>
              Client engagements disclosed only with written authorization.
            </p>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} {SITE.parent}. All rights reserved.</p>
          <p className="font-mono tracking-widest text-zinc-700">AXIOM-CYB · SECURE BY DESIGN</p>
        </div>
      </div>
    </footer>
  );
}
