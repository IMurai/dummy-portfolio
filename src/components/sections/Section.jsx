import { cn } from '../../lib/cn';

/** Shared section wrapper: anchor id, divider rail, and consistent spacing. */
export default function Section({ id, className, children }) {
  return (
    <section id={id} className={cn('scroll-mt-16 border-b-4 border-surface-highest bg-surface', className)}>
      <div className="container-brutal py-14 md:py-16">{children}</div>
    </section>
  );
}
