import Card from '../../ui/Card';
import Tag from '../../ui/Tag';

export default function SubsystemCard({ id, category, title, tags, footer }) {
  return (
    <Card tone="mid" shadow="white" className="flex flex-col p-4">
      <div className="label flex justify-between border-b-2 border-surface-highest pb-2">
        <span className="text-crimson">{id}</span>
        <span className="text-ink">{category}</span>
      </div>

      <h3 className="mt-4 font-display text-lg font-bold uppercase">{title}</h3>

      <ul className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <p className="label border-t-2 border-surface-highest pt-2 text-ink/80">{footer}</p>
      </div>
    </Card>
  );
}
