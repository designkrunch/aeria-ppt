import Image from 'next/image';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

const funds = [
  { label: 'GTM & portfolio capture', pct: 40 },
  { label: 'Product & AI', pct: 30 },
  { label: 'Workplace Experience', pct: 15 },
  { label: 'International', pct: 15 },
];

const milestones = [
  'Convert ≥3 advanced developers to signed portfolios',
  '~$5–6M live ARR',
  'Ship the 6 roadmap agents to production',
  'Launch Workplace Experience (WeX)',
  'Land first international logo',
];

export function TheRaise() {
  return (
    <section className="slide bg-navy px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal">The Ask</div>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — ask details */}
          <div>
            <RevealWrapper>
              <h2
                className="font-display font-extrabold text-off-white leading-tight mb-4 reveal reveal-delay-1"
                style={{ fontSize: '52px' }}
              >
                Raising{' '}
                <span className="text-coral">$6–8M</span>
                <br />
                to turn proven flagships
                <br />
                into a category.
              </h2>
              <p className="text-muted text-base mb-12 reveal reveal-delay-2">
                Runway: ~24 months · Break-even target: ~Q4 2026
              </p>
            </RevealWrapper>

            {/* Use of funds */}
            <RevealWrapper>
              <div className="mb-12 reveal reveal-delay-2">
                <div className="section-label mb-6">Use of Funds</div>
                <div className="space-y-5">
                  {funds.map((f, i) => (
                    <div key={f.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-off-white text-sm font-display font-medium">
                          {f.label}
                        </span>
                        <span className="text-coral font-display font-bold text-sm tabular">
                          {f.pct}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full" style={{ backgroundColor: '#1E2235' }}>
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${f.pct}%`,
                            backgroundColor: i === 0 ? '#E8452A' : i === 1 ? '#C63820' : '#1A9B8C',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            {/* Milestones */}
            <RevealWrapper>
              <div className="reveal reveal-delay-3">
                <div className="section-label mb-6">Milestones to Next Round</div>
                <div className="space-y-4">
                  {milestones.map((m) => (
                    <div key={m} className="flex items-start gap-4">
                      <span className="text-coral mt-1 shrink-0">→</span>
                      <span className="text-off-white text-sm leading-relaxed">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </div>

          {/* Right — vision statement */}
          <RevealWrapper>
            <div
              className="rounded-2xl p-12 flex flex-col justify-center min-h-[480px] reveal reveal-delay-2"
              style={{ backgroundColor: '#0B0E1A', border: '1px solid #1E2235' }}
            >
              <h3
                className="font-display font-extrabold text-off-white leading-tight mb-10"
                style={{ fontSize: '56px' }}
              >
                Property operations
                <br />
                become software.
              </h3>
              <h3
                className="font-display font-extrabold leading-tight"
                style={{ fontSize: '56px', color: '#E8452A' }}
              >
                Software becomes
                <br />
                an autonomous
                <br />
                building.
              </h3>

              {/* Logo watermark */}
              <div className="mt-16 opacity-20" aria-hidden="true">
                <Image
                  src="/logo.svg"
                  alt=""
                  width={80}
                  height={29}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
