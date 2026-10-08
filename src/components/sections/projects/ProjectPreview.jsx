import { useState } from 'react';

/** Fallback block shown when a screenshot is missing or fails to load. */
function Placeholder({ label }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-mid p-4 text-center"
    >
      <span className="size-3 bg-crimson" aria-hidden="true" />
      <span className="label text-ink/70">SCREENSHOT PENDING</span>
    </div>
  );
}

/**
 * Screenshot slot for a project card.
 * type 'web' renders a browser-style frame with a 16:9 content area;
 * type 'mobile' renders a boxy phone frame with a portrait 9:19 content area.
 * Falls back to a labelled placeholder when src is empty or fails to load.
 */
export default function ProjectPreview({ preview, title }) {
  const [failed, setFailed] = useState(false);
  const src = preview?.src ?? '';

  const image = src && !failed ? (
    <img
      src={src}
      alt={`${title} interface screenshot`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  ) : (
    <Placeholder label={`${title} screenshot pending`} />
  );

  if (preview?.type === 'mobile') {
    return (
      <div className="flex justify-center">
        <div className="w-full max-w-[200px] border-4 border-ink bg-chassis p-2 shadow-hard-white-sm">
          <span className="mx-auto mb-2 block h-1.5 w-12 bg-surface-highest" aria-hidden="true" />
          <div className="relative aspect-[9/19] w-full overflow-hidden border-2 border-surface-highest bg-void">
            {image}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-2 border-ink bg-chassis shadow-hard-white-sm">
      <div className="flex items-center gap-2 border-b-2 border-ink bg-surface-high px-3 py-1.5">
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="size-2 bg-crimson" />
          <span className="size-2 bg-ink" />
          <span className="size-2 bg-slate-dark" />
        </span>
        <span className="min-w-0 flex-1 truncate border border-surface-highest bg-void px-2 py-px text-[10px] text-ink/70">
          {src || '/projects/'}
        </span>
      </div>
      <div className="relative aspect-video w-full overflow-hidden bg-void">
        {image}
      </div>
    </div>
  );
}
