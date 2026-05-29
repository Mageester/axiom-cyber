import { Link } from 'react-router-dom';
import Logo from './Logo';
import { NAV_LINKS, SITE } from '../lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link to="/" className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
              <Logo />
            </Link>
            <p className="mt-4 text-xs text-zinc-500 max-w-xs leading-relaxed">
              A division of Axiom Infrastructure. Security assessment for organizations that operate at scale.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Contact
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {SITE.email}
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Axiom Infrastructure Inc. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700 font-mono tracking-wide">
            AXIOM-CYB
          </p>
        </div>
      </div>
    </footer>
  );
}
