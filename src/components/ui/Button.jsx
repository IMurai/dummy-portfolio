import { cn } from '../../lib/cn';

const variants = {
  primary:
    'bg-crimson text-white border-white shadow-hard-white-sm hover:bg-white hover:text-black hover:shadow-hard-red-sm',
  outline:
    'bg-void text-ink border-ink shadow-hard-white-sm hover:bg-white hover:text-black hover:shadow-hard-red-sm',
  ghost:
    'bg-surface-high text-ink border-ink shadow-hard-red-sm hover:bg-white hover:text-black',
  danger:
    'bg-black text-crimson border-crimson hover:bg-crimson hover:text-white',
};

const sizes = {
  sm: 'px-3 py-1 text-[11px]',
  md: 'px-5 py-3 text-xs',
  lg: 'px-6 py-4 text-sm',
};

/**
 * Brutalist button: hard edges, a solid offset shadow and an instant
 * color flip on hover. Renders an <a> when `href` is passed.
 */
export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const Component = as ?? (href ? 'a' : 'button');

  return (
    <Component
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 border-2 font-mono font-bold uppercase tracking-[0.08em]',
        'transition-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
