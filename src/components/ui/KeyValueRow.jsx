import { cn } from '../../lib/cn';

/** Telemetry row with a violet left rail: "KEY: ........ VALUE" */
export default function KeyValueRow({ label, value, accent = false, className }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 border-l-4 border-violet bg-surface-high px-2 py-1 text-[10px] tracking-[0.06em]',
        className,
      )}
    >
      <span className="text-ink/80">{label}</span>
      <span className={cn('text-right font-semibold', accent ? 'text-crimson-soft' : 'text-ink')}>
        {value}
      </span>
    </div>
  );
}
