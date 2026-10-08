import { useState } from 'react';
import { navLinks, profile } from '../../data/site';
import useActiveSection from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';
import BlinkCursor from '../ui/BlinkCursor';
import MobileMenu from './MobileMenu';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <>
      <header className="sticky top-0 z-40 border-b-4 border-crimson bg-surface">
        <nav className="container-brutal flex h-16 items-center justify-between gap-6" aria-label="Main">
          <a href="#home" className="leading-none">
            <span className="block font-display text-lg font-bold text-ink">{profile.name}</span>
            <span className="label text-crimson">{profile.tagline}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={cn(
                    'block border-2 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em]',
                    active === link.id
                      ? 'border-ink bg-crimson text-white'
                      : 'border-slate-dark bg-surface-mid text-ink hover:border-ink',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 border-2 border-ink bg-black px-2 py-1 text-xs shadow-hard-white-sm lg:flex">
            <span className="text-crimson">$</span>
            <span>Raihaan --status</span>
            <BlinkCursor />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="border-2 border-ink bg-black px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard-white-sm md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            [MENU]
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
