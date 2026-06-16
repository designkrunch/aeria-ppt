import { RevealWrapper } from '@/components/ui/RevealWrapper';

const zones = [
  {
    zone: 'Intelligence',
    agents: [
      { name: 'Insight Agent', live: false },
      { name: 'Occupancy Agent', live: false },
      { name: 'Portfolio Agent', live: false },
    ],
  },
  {
    zone: 'Community & Commerce',
    agents: [
      { name: 'Community Agent', live: true },
      { name: 'Commerce Agent', live: true },
    ],
  },
  {
    zone: 'Safety',
    agents: [
      { name: 'Security Agent', live: false },
      { name: 'Compliance Agent', live: false },
    ],
  },
  {
    zone: 'Operations',
    agents: [
      { name: 'Facility Agent', live: false },
      { name: 'Helpdesk Agent', live: true },
      { name: 'Booking Agent', live: true },
    ],
  },
  {
    zone: 'Entry',
    agents: [
      { name: 'Visitor Agent', live: true },
      { name: 'Reception Agent', live: true },
    ],
  },
];

const loop = ['Interaction', 'Data', 'Intelligence', 'Automation', 'Outcomes'];

export function AIWorkforce() {
  return (
    <section className="slide bg-navy px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal">The AI Workforce</div>
          <h2
            className="font-display font-extrabold text-off-white leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: '60px' }}
          >
            An AI workforce —
            <br />
            across the{' '}
            <span className="text-coral">entire building.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-8 reveal reveal-delay-2">
            Six agents live in production today. Six in build. Every interaction feeds the next:
            data becomes intelligence becomes automation becomes better outcomes.
          </p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-[1fr_280px] gap-8">
          {/* Building cutaway */}
          <RevealWrapper>
            <div className="rounded-2xl border border-navy-border overflow-hidden reveal reveal-delay-1">
              {zones.map((z, zi) => (
                <div
                  key={z.zone}
                  className="border-b border-navy-border last:border-b-0"
                  style={{
                    backgroundColor:
                      zi === 0 ? '#1A1E32' : zi % 2 === 0 ? '#141729' : '#0F1224',
                  }}
                >
                  <div className="flex items-start justify-between px-5 py-3.5 gap-4">
                    <div className="section-label text-muted shrink-0 w-36">{z.zone}</div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      {z.agents.map((a) => (
                        <span key={a.name} className={a.live ? 'pill-live' : 'pill-next'}>
                          <span aria-hidden="true">{a.live ? '●' : '○'}</span> {a.name}
                          <span className="sr-only">{a.live ? ' (live)' : ' (in build)'}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* Loop diagram + legend */}
          <RevealWrapper>
            <div className="flex flex-col gap-4 reveal reveal-delay-2">
              {/* Data loop */}
              <div className="rounded-2xl border border-teal/20 bg-teal/5 p-4">
                <div className="section-label mb-4" style={{ color: '#1A9B8C' }}>
                  The compounding loop
                </div>
                <ol className="relative">
                  {loop.map((step, i) => {
                    const highlight = i === 1 || i === 4;
                    return (
                      <li key={step} className="relative flex items-center gap-3 pb-5 last:pb-0">
                        {/* vertical connector */}
                        {i < loop.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="absolute left-[5px] top-3 bottom-0 w-px"
                            style={{ backgroundColor: 'rgba(26,155,140,0.3)' }}
                          />
                        )}
                        <span
                          aria-hidden="true"
                          className="relative z-10 w-2.5 h-2.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: highlight ? '#1A9B8C' : '#0B0E1A',
                            border: '1.5px solid #1A9B8C',
                          }}
                        />
                        <span
                          className="font-display font-semibold text-sm"
                          style={{ color: highlight ? '#1A9B8C' : '#FAFAF8' }}
                        >
                          {step}
                        </span>
                      </li>
                    );
                  })}
                </ol>
                <p className="text-muted text-xs mt-4 leading-relaxed">
                  Every interaction feeds the next iteration. That loop is the moat.
                </p>
              </div>

              {/* Outcome stat */}
              <div className="rounded-2xl border border-coral/20 bg-coral/5 p-4">
                <div
                  className="font-display font-extrabold text-coral leading-none tabular mb-1.5"
                  style={{ fontSize: '46px' }}
                >
                  up to 20%
                </div>
                <div className="section-label text-muted">manpower / ops-cost reduction</div>
                <span className="tag-modeled mt-1.5 inline-block">Modeled target</span>
              </div>

              {/* Legend */}
              <div className="rounded-xl border border-navy-border bg-navy-surface p-4">
                <div className="section-label mb-3">Legend</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="pill-live"><span aria-hidden="true">●</span> Live</span>
                    <span className="text-muted text-xs">6 in production</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="pill-next"><span aria-hidden="true">○</span> In build</span>
                    <span className="text-muted text-xs">6 piloting</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
