import { useId } from 'react';
import { cn } from '../../lib/cn';

const inputClass =
  'w-full border-2 border-surface-highest bg-void px-2 py-2 text-xs text-ink placeholder:text-ink/60 ' +
  'focus:border-crimson focus:shadow-[3px_3px_0_0_#dc2626] focus:outline-none';

/** Labeled input or textarea with a brutalist focus state. */
export default function FormField({ label, multiline = false, className, ...props }) {
  const id = useId();
  const Control = multiline ? 'textarea' : 'input';

  return (
    <div className={className}>
      <label htmlFor={id} className="label mb-1.5 block text-ink">
        {label}
      </label>
      <Control id={id} className={cn(inputClass, multiline && 'min-h-20 resize-y')} {...props} />
    </div>
  );
}
