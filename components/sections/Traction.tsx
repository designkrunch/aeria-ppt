import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { AreaChart } from '@/components/ui/AreaChart';

const stats = [
  { value: '15M', label: 'sq ft deployed & secured' },
  { value: '$300K', label: 'live ARR' },
  { value: '~$2M', label: 'contracted + expanded ARR by Jul\'26' },
  { value: '5', label: 'developers contracted' },
  { value: '28', label: 'people' },
  { value: '12', label: 'months since MVP' },
];

// Illustrative cumulative sq-ft deployment over the first 12 months post-MVP.
const sqftTrajectory = [0.3, 0.8, 1.5, 2.4, 3.5, 5, 6.6, 8.2, 9.8, 11.4, 13.1, 15];
const trajectoryLabels: [number, string][] = [
  [0, 'MONTH 0'],
  [5, 'MONTH 6'],
  [11, 'MONTH 12'],
];

const investors = ['Kalaari', 'Foundamental', 'AC Ventures', 'AL Trust'];

export function Traction() {
  return (
    <section className="bg-navy py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal">Traction</div>
          <h2
            className="font-display font-extrabold text-off-white leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}
          >
            12 months post-MVP:{' '}
            <span className="text-coral">15M sq ft,</span>
            <br />
            5 developers, contracts that compound.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16 reveal reveal-delay-2">
            The number that matters is what&apos;s locked: ~$2M contracted and expanding on
            three-year terms, $1.2M with POs in hand.
          </p>
        </RevealWrapper>

        {/* 6 stat tiles */}
        <RevealWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 reveal reveal-delay-1">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-xl p-5 border border-navy-border bg-navy-surface flex flex-col gap-2 reveal-delay-${i + 1}`}
              >
                <div
                  className="font-display font-extrabold tabular leading-none"
                  style={{
                    fontSize: 'clamp(28px, 3vw, 44px)',
                    color: s.value === '~$2M' ? '#E8452A' : '#FAFAF8',
                  }}
                >
                  {s.value}
                </div>
                <div className="section-label leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* Deployment trajectory chart */}
        <RevealWrapper>
          <div className="rounded-2xl border border-navy-border bg-navy-surface p-8 mb-12 reveal reveal-delay-2 print-keep">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
              <div className="section-label">Sq ft deployed · 12 months post-MVP</div>
              <div className="section-label">Illustrative trajectory</div>
            </div>
            <AreaChart
              data={sqftTrajectory}
              xLabels={trajectoryLabels}
              formatValue={(v) => `${v.toFixed(0)}M sq ft`}
              ariaLabel="Cumulative square footage deployed rising from roughly 0.3 million at month zero to 15 million by month twelve."
            />
          </div>
        </RevealWrapper>

        {/* ARR split bar */}
        <RevealWrapper>
          <div
            className="rounded-2xl border border-navy-border bg-navy-surface p-8 mb-12 reveal reveal-delay-2"
          >
            <div className="section-label mb-6">ARR Breakdown (~$2M)</div>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-off-white font-display font-semibold">~$1.2M</span>
                  <span className="text-muted text-sm">Signed / contracted (PO in hand)</span>
                </div>
                <div className="h-3 rounded-full" style={{ backgroundColor: '#1E2235' }}>
                  <div className="h-3 rounded-full bg-coral" style={{ width: '60%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-off-white font-display font-semibold">~$0.8M</span>
                  <span className="text-muted text-sm">LOI + advanced-stage by Jul&apos;26</span>
                </div>
                <div className="h-3 rounded-full" style={{ backgroundColor: '#1E2235' }}>
                  <div className="h-3 rounded-full" style={{ width: '40%', backgroundColor: '#C63820' }} />
                </div>
              </div>
            </div>
            <p className="text-muted text-sm mt-6 font-mono-custom">
              At 12 months post-MVP, the signal is sq ft deployed and 3-year lock-ins — not in-year ARR.
            </p>
          </div>
        </RevealWrapper>

        {/* Investor row */}
        <RevealWrapper>
          <div className="flex flex-wrap items-center gap-3 reveal reveal-delay-3">
            <span className="section-label mr-4">Backed by</span>
            {investors.map((inv) => (
              <span
                key={inv}
                className="px-5 py-2 rounded-full border border-navy-border text-muted font-mono-custom text-sm"
              >
                {inv}
              </span>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
