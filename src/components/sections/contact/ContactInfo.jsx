import { contact } from '../../../data/contact';
import { cn } from '../../../lib/cn';
import Card from '../../ui/Card';

export default function ContactInfo() {
  return (
    <Card tone="mid" shadow="white" className="flex h-full flex-col p-5 md:p-6">
      <h3 className="font-display text-lg font-bold uppercase leading-snug">{contact.heading}</h3>

      <ul className="mt-5 flex flex-col gap-2">
        {contact.channels.map((ch) => {
          const valueClass = cn(
            'text-right',
            ch.crimson ? 'text-crimson' : ch.accent ? 'text-crimson-soft' : 'text-ink',
          );
          return (
            <li
              key={ch.key}
              className="flex items-center justify-between gap-4 border-2 border-surface-highest bg-void px-2 py-1 text-[11px] uppercase tracking-[0.04em]"
            >
              <span className="text-ink/90">{ch.key}</span>
              {ch.href ? (
                <a href={ch.href} className={cn(valueClass, 'normal-case hover:underline')} target="_blank" rel="noreferrer">
                  {ch.value}
                </a>
              ) : (
                <span className={valueClass}>{ch.value}</span>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-auto pt-8">
        <p className="label flex items-center gap-2 border-t-2 border-surface-highest pt-3 text-ink/90">
          <span className="size-2 bg-crimson" />
          {contact.footnote}
        </p>
      </div>
    </Card>
  );
}
