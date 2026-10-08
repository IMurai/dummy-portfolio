import { tickerItems } from '../../data/site';

/** Full-width scrolling telemetry strip. */
export default function Ticker() {
  // Repeat the list twice so the loop scrolls without a visible jump
  const loop = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y-2 border-violet bg-violet py-1.5" aria-label="System telemetry">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] text-on-violet"
            aria-hidden={i >= tickerItems.length}
          >
            {item}
            <span className="px-8">-</span>
          </span>
        ))}
      </div>
    </div>
  );
}
