const FOOTER_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why' },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo.png" alt="Axiom Cyber Logo" className="h-8 w-auto mix-blend-screen" />
            </div>
            <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
              A division of Axiom Infrastructure. Security assessment for organizations that operate at scale.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
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
