import { footer } from '../../data/contact';

export default function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-surface">
      <div className="container-brutal py-6">
        <div className="flex flex-col gap-4 border-b-2 border-surface-highest pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-bold">{footer.title}</p>
            <p className="label text-violet-soft">{footer.disciplines}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="label flex items-center gap-2 text-ink/80">
              <span className="size-2 animate-blink bg-crimson motion-reduce:animate-none" />
              {footer.ping}
            </p>
            <a
              href="#home"
              className="label border-2 border-ink bg-chassis px-2 py-1 text-ink hover:bg-ink hover:text-chassis"
            >
              [↑ Re-initialize]
            </a>
          </div>
        </div>

        <div className="label flex flex-col gap-2 pt-4 text-ink/70 md:flex-row md:justify-between">
          <p>{footer.build}</p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
