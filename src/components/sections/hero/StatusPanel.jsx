import { statusPanel } from '../../../data/site';
import Card from '../../ui/Card';
import KeyValueRow from '../../ui/KeyValueRow';

/** System status panel shown on the right side of the hero. */
export default function StatusPanel() {
  return (
    <Card tone="base" shadow="red" className="p-4">
      <div className="mb-3 flex items-center justify-between border-b-2 border-surface-highest pb-2 text-[11px] font-semibold tracking-[0.06em]">
        <span>[ONLINE]</span>
        <span className="text-crimson">STATUS: IDLE_WAIT</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {statusPanel.map((row) => (
          <KeyValueRow key={row.key} label={row.key} value={row.value} accent={row.accent} />
        ))}
      </div>
    </Card>
  );
}
