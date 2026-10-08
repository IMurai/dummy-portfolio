import { primarySkill } from '../../../data/skills';
import Card from '../../ui/Card';
import KeyValueRow from '../../ui/KeyValueRow';
import Tag from '../../ui/Tag';

/** Large card for the main skill area. */
export default function PrimarySkillCard() {
  const { eyebrow, title, certification, metrics, stack } = primarySkill;

  return (
    <Card tone="raised" shadow="red" className="border-4 border-crimson p-5 md:p-6">
      <div className="flex flex-col gap-4 border-b-4 border-surface-highest pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <Tag variant="solid">{eyebrow}</Tag>
          <h3 className="mt-2 font-display text-3xl font-bold uppercase tracking-[-0.03em] md:text-5xl">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[2fr_3fr]">
        <div className="flex flex-col gap-1.5">
          {metrics.map((m) => (
            <KeyValueRow key={m.key} label={m.key} value={m.value} className="bg-surface-mid" />
          ))}
        </div>

        <ul className="flex flex-wrap content-start gap-1.5">
          {stack.map((item) => (
            <li key={item.name}>
              <Tag variant={item.highlight ? 'highlight' : 'pill'}>{item.name}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
