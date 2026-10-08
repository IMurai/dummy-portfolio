import { cn } from '../../../lib/cn';
import Card from '../../ui/Card';

export default function StatCard({ value, label, accent = false, index = 0 }) {
  return (
    <Card tone="mid" shadow={index % 2 === 0 ? 'white' : 'violet'} className="p-4">
      <p
        className={cn(
          'font-display text-2xl font-bold tracking-[-0.02em] md:text-3xl',
          accent ? 'text-crimson' : 'text-ink',
        )}
      >
        {value}
      </p>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.06em] text-ink">{label}</p>
    </Card>
  );
}
