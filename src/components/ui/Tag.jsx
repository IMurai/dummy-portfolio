import { cn } from '../../lib/cn';

const variants = {
  /** Small outlined chip, e.g. a tech stack item */
  chip: 'border border-ink/80 bg-black px-1.5 py-px text-[10px] text-ink',
  /** Larger outlined stack pill */
  pill: 'border-2 border-ink bg-black px-3 py-1 text-[10px] font-bold text-ink',
  /** Pill highlighted in crimson */
  highlight: 'border-2 border-ink bg-crimson px-3 py-1 text-[10px] font-bold text-white',
  /** Solid crimson label */
  solid: 'bg-crimson px-2 py-0.5 text-[10px] font-bold text-white',
  /** Outlined crimson badge */
  outline: 'border-2 border-crimson bg-black px-3 py-1 text-[11px] font-bold text-crimson',
};

export default function Tag({ variant = 'chip', className, children }) {
  return (
    <span
      className={cn(
        'inline-block font-mono uppercase tracking-[0.06em] whitespace-nowrap',
        variant === 'chip' && 'normal-case tracking-normal',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
