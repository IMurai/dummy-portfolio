import { cn } from '../../lib/cn';

/** Blinking terminal block cursor (█). */
export default function BlinkCursor({ className }) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-block h-[1em] w-[0.55em] translate-y-[2px] bg-crimson animate-blink motion-reduce:animate-none', className)}
    />
  );
}
