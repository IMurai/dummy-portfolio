import { cn } from '../../lib/cn';

const variants = {
  primary: {
    base: 'bg-violet text-on-violet border-ink shadow-hard-white-sm',
    hover: 'hover:bg-ink hover:text-chassis hover:shadow-hard-red',
  },
  outline: {
    base: 'bg-void text-ink border-ink shadow-hard-white-sm',
    hover: 'hover:bg-ink hover:text-chassis hover:shadow-hard-red',
  },
  ghost: {
    base: 'bg-surface-high text-ink border-ink shadow-hard-violet-sm',
    hover: 'hover:bg-ink hover:text-chassis hover:shadow-hard-red',
  },
  danger: {
    base: 'bg-chassis text-crimson-soft border-crimson',
    hover: 'hover:bg-crimson hover:text-on-accent hover:shadow-hard-white',
  },
};

/** Popup on hover: the button lifts up-left while its shadow grows. */
const popup = 'hover:-translate-x-[2px] hover:-translate-y-[2px]';

const sizes = {
  sm: 'px-3 py-1 text-[11px]',
  md: 'px-5 py-3 text-xs',
  lg: 'px-6 py-4 text-sm',
};

/**
 * Brutalist button: hard edges, a solid offset shadow and an instant
 * color flip on hover, plus a "popup" lift (with a growing shadow).
 * Renders an <a> when `href` is passed. A link with href="#" renders as
 * disabled: no navigation, dimmed, and a "Coming soon" tooltip.
 */
export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}) {
  const Component = as ?? (href ? 'a' : 'button');
  const isDisabled = disabled ?? (href === '#');

  return (
    <Component
      {...props}
      href={isDisabled ? undefined : href}
      disabled={isDisabled && Component === 'button' ? true : undefined}
      aria-disabled={isDisabled ? 'true' : undefined}
      title={isDisabled ? (props.title ?? 'Coming soon') : props.title}
      onClick={isDisabled ? undefined : props.onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 border-2 font-mono font-bold uppercase tracking-[0.08em]',
        variants[variant].base,
        isDisabled
          ? 'cursor-not-allowed opacity-50'
          : cn(
              variants[variant].hover,
              popup,
              'transition-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
            ),
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet',
        sizes[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
