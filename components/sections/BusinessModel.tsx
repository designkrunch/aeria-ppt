import { RevealWrapper } from '@/components/ui/RevealWrapper';

const stages = [
  { label: 'Beachhead', sqft: '1–3M sq ft', lines: ['SaaS (psft)'] },
  { label: 'Portfolio', sqft: '25–50M sq ft', lines: ['SaaS (psft)', 'Commerce $$'] },
  { label: 'Portfolio of portfolios', sqft: '50M+ sq ft', lines: ['SaaS (psft)', 'Commerce $$'] },
];

const panels = [
  {
    title: 'PRICING',
    items: [
      '~₹0.25 psft/month',
      '≈ 3–4¢ psft/yr',
      '+5–10%/yr escalation',
      '3-yr lock-ins',
      'vs 15–25¢ incumbents',
    ],
  },
  {
    title: 'COMMERCE',
    items: [
      'Commission on:',
      'F&B POS · deals',
      'vouchers · leasing',
      'managed-office',
    ],
  },
  {
    title: 'LOW CAC / B2B2C',
    items: [
      'One developer sale →',
      'tens of thousands of occupants',
      'White-label drives retention',
    ],
  },
  {
    title: 'LANDED-EXPANDED',
    items: [
      '~25–40% inventory CAGR per developer',
      'Both flagships already expanded',
      '(n=2, early evidence)',
    ],
  },
];

export function BusinessModel() {
  return (
    <section className="bg-bone py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal" style={{ color: '#52525B' }}>
            Business Model
          </div>
          <h2
            className="font-display font-extrabold leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(32px, 4vw, 60px)', color: '#0B0E1A' }}
          >
            Two revenue lines, a 3-year lock-in,
            <br />
            and an account that{' '}
            <span style={{ color: '#E8452A' }}>compounds 10×.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-16 reveal reveal-delay-2" style={{ color: '#52525B' }}>
            Land a 1–3M sq ft pilot, capture the 25–50M sq ft portfolio.
            Both flagships are already expanding. That&apos;s net revenue retention above 100%.
          </p>
        </RevealWrapper>

        {/* Staircase */}
        <RevealWrapper>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-16 reveal reveal-delay-1">
            {stages.map((s, i) => (
              <div key={s.label} className="flex-1 print-keep">
                <div
                  className="rounded-xl p-6 flex flex-col min-h-[200px] sm:min-h-[var(--bm-h)]"
                  style={
                    {
                      background: '#141729',
                      border: '1px solid #1E2235',
                      '--bm-h': `${(i + 1) * 100 + 120}px`,
                    } as React.CSSProperties
                  }
                >
                  {/* lead with the headline portfolio size */}
                  <div>
                    <div
                      className="font-display font-extrabold text-off-white leading-none tabular"
                      style={{ fontSize: 'clamp(26px, 2.6vw, 40px)' }}
                    >
                      {s.sqft.replace(' sq ft', '')}
                    </div>
                    <div className="section-label mt-1.5" style={{ color: '#8A92A4' }}>
                      sq ft portfolio
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="font-display font-bold text-off-white mb-3">{s.label}</div>
                    <div className="flex flex-col gap-1">
                      {s.lines.map((l, li) => (
                        <div
                          key={l}
                          className="rounded px-3 py-1.5 text-xs font-mono-custom"
                          style={{
                            backgroundColor: li === 0 ? '#1E2235' : '#E8452A20',
                            color: li === 0 ? '#A6AEBF' : '#FF6B4F',
                          }}
                        >
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* 4 panels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {panels.map((p, i) => (
            <RevealWrapper key={p.title}>
              <div
                className={`rounded-xl p-6 reveal reveal-delay-${i + 1}`}
                style={{ backgroundColor: '#E8E2D9', border: '1px solid #D4CEBF' }}
              >
                <div className="section-label mb-4" style={{ color: '#E8452A' }}>
                  {p.title}
                </div>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-snug"
                      style={{ color: '#0B0E1A' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
