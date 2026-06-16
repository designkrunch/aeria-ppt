import { RevealWrapper } from '@/components/ui/RevealWrapper';

const outcomes = [
  {
    name: 'Convenience',
    tagline: 'Frictionless day',
    impact: 'Tenant retention & occupancy',
    tag: 'Retention',
    position: 'top',
  },
  {
    name: 'Safety',
    tagline: 'Trusted, governed building',
    impact: 'De-risked asset, attracts big logos',
    tag: 'Risk',
    position: 'right',
  },
  {
    name: 'Community & Commerce',
    tagline: 'Engagement + ancillary revenue',
    impact: 'New revenue without raising rent',
    tag: 'Revenue',
    position: 'bottom',
  },
  {
    name: 'Intelligence',
    tagline: 'Portfolio-level proof',
    impact: 'Asset value & pricing power',
    tag: 'Value',
    position: 'left',
  },
];

export function Platform() {
  return (
    <section className="slide bg-bone px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal" style={{ color: '#52525B' }}>
            The Solution
          </div>
          <h2
            className="font-display font-extrabold leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: '60px', color: '#0B0E1A' }}
          >
            One operating system.
            <br />
            Four outcomes.{' '}
            <span style={{ color: '#E8452A' }}>Agents throughout.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-8 reveal reveal-delay-2" style={{ color: '#52525B' }}>
            Aeria collapses 30+ tools into one system of record across every stakeholder —
            with an AI agent inside each function. The building doesn&apos;t just get digitized.
            It gets operated.
          </p>
        </RevealWrapper>

        {/* 2x2 outcome grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {outcomes.map((o, i) => (
            <RevealWrapper key={o.name}>
              <div
                className={`rounded-2xl p-6 border reveal reveal-delay-${i + 1}`}
                style={{ backgroundColor: '#E8E2D9', borderColor: '#D4CEBF' }}
              >
                <div
                  className="section-label mb-3"
                  style={{ color: '#E8452A' }}
                >
                  {o.tag}
                </div>
                <h3
                  className="font-display font-bold text-2xl mb-2"
                  style={{ color: '#0B0E1A' }}
                >
                  {o.name}
                </h3>
                <p className="text-base mb-3" style={{ color: '#52525B' }}>{o.tagline}</p>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#E8452A' }}>→</span>
                  <span className="text-sm font-medium" style={{ color: '#0B0E1A' }}>{o.impact}</span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Comparison bar */}
        <RevealWrapper>
          <div
            className="rounded-2xl p-5 reveal reveal-delay-3"
            style={{ backgroundColor: '#141729' }}
          >
            <div className="space-y-5">
              {[
                {
                  label: 'Legacy tools',
                  fill: 1,
                  color: '#1E2235',
                  textColor: '#8A92A4',
                },
                {
                  label: 'Aeria',
                  fill: 4,
                  color: '#E8452A',
                  textColor: '#FAFAF8',
                },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-6">
                  <span
                    className="font-display font-semibold w-32 shrink-0"
                    style={{ color: row.textColor }}
                  >
                    {row.label}
                  </span>
                  <div className="flex gap-2 flex-1">
                    {[1, 2, 3, 4].map((seg) => (
                      <div
                        key={seg}
                        className="h-8 flex-1 rounded"
                        style={{
                          backgroundColor:
                            seg <= row.fill ? row.color : '#1E2235',
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm mt-6 font-mono-custom">
              Legacy tools improve one or two. Aeria delivers all four — as one operating system.
            </p>
          </div>
        </RevealWrapper>

        {/* Thesis tags */}
        <RevealWrapper>
          <div className="flex flex-wrap gap-4 mt-5 reveal reveal-delay-4">
            <div className="rounded-full border border-bone-dim bg-bone-dim px-6 py-3 flex items-center gap-3">
              <span className="font-display font-bold text-navy text-lg">−20%</span>
              <span className="text-muted text-sm">ops cost</span>
              <span className="tag-modeled">Modeled</span>
            </div>
            <div className="rounded-full border border-bone-dim bg-bone-dim px-6 py-3 flex items-center gap-3">
              <span className="font-display font-bold text-navy text-lg">+15%</span>
              <span className="text-muted text-sm">revenue without raising rent</span>
              <span className="tag-modeled">Modeled</span>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
