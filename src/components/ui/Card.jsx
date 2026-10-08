import { cn } from '../../lib/cn';

const shadows = {
  red: 'shadow-hard-red',
  white: 'shadow-hard-white',
  violet: 'shadow-hard-violet',
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
  shadow = 'violet',
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
