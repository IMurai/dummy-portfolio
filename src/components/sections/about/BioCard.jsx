import { bio } from '../../../data/about';
import Card from '../../ui/Card';
import Tag from '../../ui/Tag';

export default function BioCard() {
  return (
    <Card tone="mid" shadow="violet" className="flex h-full flex-col p-5 md:p-6">
      <Tag variant="solid" className="self-start border-2 border-ink px-2 py-1">
        {bio.badge}
      </Tag>

      <h3 className="mt-5 font-display text-xl font-semibold uppercase leading-tight tracking-[-0.01em] md:text-2xl">
        {bio.headline}
      </h3>
      <p className="mt-4 font-display text-lg font-semibold uppercase leading-tight text-crimson-soft md:text-xl">
        {bio.subheadline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink/90">{bio.description}</p>

      <div className="label mt-auto flex items-center justify-between border-t-4 border-ink pt-3 text-ink">
        <span>{bio.uptime}</span>
        <a href={bio.cta.href} className="text-crimson-soft hover:underline">
          {bio.cta.label}
        </a>
      </div>
    </Card>
  );
}
