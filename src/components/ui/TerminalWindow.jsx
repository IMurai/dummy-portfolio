import { cn } from '../../lib/cn';

/** Terminal viewport: a title bar with window controls, a body and an optional footer. */
export default function TerminalWindow({ title, badge = '[RO]', footer, className, children }) {
  return (
    <div className={cn('flex flex-col border-2 border-ink bg-void shadow-hard-white', className)}>
      <div className="flex items-center justify-between border-b-2 border-ink bg-surface-high px-3 py-1.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 bg-crimson" />
          <span className="size-2.5 bg-ink" />
          <span className="size-2.5 bg-slate-dark" />
        </div>
        <p className="truncate px-3 text-xs font-semibold text-ink">{title}</p>
        <span className="label text-ink/70">{badge}</span>
      </div>

      <div className="flex-1 p-4 text-sm leading-relaxed">{children}</div>

      {footer && (
        <div className="label flex items-center justify-between border-t-2 border-ink/30 px-3 py-1.5 text-ink/70">
          {footer}
        </div>
      )}
    </div>
  );
}
