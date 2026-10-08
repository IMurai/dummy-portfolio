import { cn } from '../../../lib/cn';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Tag from '../../ui/Tag';
import ProjectPreview from './ProjectPreview';

export default function ProjectCard({
  title,
  category,
  refId,
  featured,
  status,
  preview,
  description,
  metrics,
  stack,
  links,
}) {
  return (
    <Card
      as="article"
      shadow="violet"
      className="flex flex-col"
    >
      <div
        className={cn(
          'label flex items-center justify-between border-b-2 border-ink px-3 py-1',
          featured ? 'bg-violet text-on-violet' : 'bg-surface-high text-ink',
        )}
      >
        <span>{category}</span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        {preview && (
          <div className="mb-4">
            <ProjectPreview preview={preview} title={title} />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-xl font-bold uppercase">{title}</h3>
          {status && <Tag variant="outline">{status}</Tag>}
        </div>
        <p className="mt-1 text-xs leading-relaxed text-ink/85">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-1">
          {stack.map((tech) => (
            <li key={tech}>
              <Tag className="uppercase">{tech}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <div className="flex flex-wrap gap-3 border-t-2 border-surface-highest pt-4">
            {links.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                size="sm"
                variant={link.primary ? 'primary' : 'ghost'}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
