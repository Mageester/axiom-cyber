import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { NAV_LINKS } from '../lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuSessionPath, setMenuSessionPath] = useState(null);
  const location = useLocation();
  const isMenuOpen = menuSessionPath === location.pathname;

  const openMenu = () => setMenuSessionPath(location.pathname);
  const closeMenu = () => setMenuSessionPath(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 32);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-zinc-900 shadow-md'
          : 'bg-black/30 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500" id="nav-logo">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 rounded-sm ${
                    isActive ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            id="nav-cta"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-orange-600 text-white text-sm font-semibold hover:bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:shadow-[0_0_25px_rgba(234,88,12,0.35)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            Request Assessment
          </Link>
        </div>

        <button
          type="button"
          id="nav-mobile-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2 text-zinc-400 cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
          onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-zinc-800 px-6 pb-6 pt-2 shadow-2xl"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className={`block py-3 text-sm transition-colors ${
                      isActive ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3 mt-2 border-t border-zinc-900">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center w-full py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-colors"
              >
                Request Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
