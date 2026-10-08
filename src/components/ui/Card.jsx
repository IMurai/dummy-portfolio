import { cn } from '../../lib/cn';

const shadows = {
  red: 'shadow-hard-red',
  white: 'shadow-hard-white',
  none: '',
};

const tones = {
  base: 'bg-void',
  raised: 'bg-surface-high',
  mid: 'bg-surface-mid',
};

/** Hard-bordered module with a zero-blur offset shadow. */
export default function Card({
  as: Component = 'div',
  shadow = 'red',
  tone = 'base',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn('border-2 border-ink', tones[tone], shadows[shadow], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
