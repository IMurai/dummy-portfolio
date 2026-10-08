import { profile, stats } from '../../../data/site';
import Button from '../../ui/Button';
import Tag from '../../ui/Tag';
import StatCard from './StatCard';
import StatusPanel from './StatusPanel';

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden bg-void">
      {/* Visible architectural grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:grid lg:grid-cols-3"
      >
        <span className="border-r border-surface-high" />
        <span className="border-r border-surface-high" />
      </div>

      <div className="container-brutal relative py-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tag variant="solid" className="border-2 border-ink px-3 py-1 text-[11px] shadow-hard-white-sm">
              {profile.domain}
            </Tag>

            <h1 className="mt-6 font-display text-6xl font-bold tracking-[-0.04em] text-ink md:text-7xl">
              {profile.name}
              <span className="text-crimson">.</span>
            </h1>

            <p className="mt-5 border-l-4 border-crimson bg-surface-high px-5 py-3 font-display text-xl font-semibold tracking-[-0.01em]">
              {profile.role}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact">Contact</Button>
              <Button href={profile.cvUrl} variant="outline" download>
                Download CV
              </Button>
            </div>
          </div>

          <div className="lg:pt-8">
            <StatusPanel />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} index={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
