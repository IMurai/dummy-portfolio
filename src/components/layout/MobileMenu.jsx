import { useEffect } from 'react';
import { navLinks, profile } from '../../data/site';
import { cn } from '../../lib/cn';
import Button from '../ui/Button';

/** Side drawer menu ("MENU_DISPATCH"). */
export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <div className={cn('fixed inset-0 z-50', open ? 'visible' : 'invisible')} aria-hidden={!open}>
      <div
        className={cn('absolute inset-0 bg-ink/70', open ? 'opacity-100' : 'opacity-0')}
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          'absolute top-0 right-0 flex h-full w-[min(20rem,85vw)] flex-col border-l-4 border-violet bg-surface transition-transform duration-200',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-start justify-between border-b-2 border-surface-highest p-4">
          <div>
            <p className="font-display text-lg font-bold">{profile.name}</p>
            <p className="label text-violet-soft">MENU_DISPATCH</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border-2 border-ink bg-chassis px-2.5 py-1 text-sm font-bold hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-ink hover:text-chassis hover:shadow-hard-white-sm"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-1.5 p-3">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={onClose}
                className="block border-2 border-surface-highest bg-surface-mid px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] hover:border-crimson hover:shadow-hard-white-sm"
              >
                [{String(i).padStart(2, '0')}] {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t-2 border-surface-highest p-3">
          <p className="label mb-2 flex items-center gap-2 text-ink/80">
            <span className="size-2 bg-crimson" /> System status: operational
          </p>
          <Button href="#contact" onClick={onClose} className="w-full">
            Dispatch transmission →
          </Button>
        </div>
      </aside>
    </div>
  );
}
