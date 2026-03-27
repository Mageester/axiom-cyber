import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/approach' },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6 -ml-4">
              <Link to="/">
                <img src="/logo.png" alt="Axiom Cyber Logo" className="h-[48px] w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
              </Link>
            </div>
            <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
              A division of Axiom Infrastructure. Security assessment for organizations that operate at scale.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:security@getaxiom.ca"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              security@getaxiom.ca
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Axiom Infrastructure Inc. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700 font-mono tracking-wide">
            AXIOM-CYB / v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
