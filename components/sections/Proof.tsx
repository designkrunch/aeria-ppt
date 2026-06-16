import { RevealWrapper } from '@/components/ui/RevealWrapper';
import { StatTile } from '@/components/ui/StatTile';

const brigade = [
  { value: '3M', label: 'sq ft SEZ' },
  { value: '8,686', label: 'downloads' },
  { value: '4,840', label: 'MAU' },
  { value: '91,217', label: 'visitors since Jun\'25' },
  { value: '<3 min', label: 'check-in (was 10 min)' },
  { value: '100%', label: 'cardless entry' },
  { value: '60%', label: 'turnstile adoption' },
  { value: '₹6.5L', label: 'F&B revenue' },
  { value: '100%', label: 'complaint resolution' },
];

const prestige = [
  { value: '7.5M', label: 'sq ft' },
  { value: '14,000+', label: 'downloads' },
  { value: '7,768', label: 'MAU' },
  { value: '7,000+', label: 'F&B orders (6 months)' },
  { value: '19', label: 'outlets live' },
  { value: '₹14.56L', label: 'F&B revenue' },
  { value: '50%', label: 'new / unique users' },
  { value: '16,000+', label: 'deals redeemed' },
];

export function Proof() {
  return (
    <section className="slide bg-bone px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal" style={{ color: '#52525B' }}>
            Proof in Production
          </div>
          <h2
            className="font-display font-extrabold leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: '60px', color: '#0B0E1A' }}
          >
            Already running two of{' '}
            <span style={{ color: '#E8452A' }}>India&apos;s largest</span>
            <br />
            tech campuses.
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-8 reveal reveal-delay-2" style={{ color: '#52525B' }}>
            Not a pilot story. Two marquee developers, 10.5 million square feet live.
          </p>
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Brigade */}
          <RevealWrapper>
            <div className="reveal reveal-delay-1">
              <div
                className="rounded-2xl p-6 mb-4"
                style={{ background: 'linear-gradient(135deg, #141729 0%, #1A1E35 100%)', border: '1px solid #1E2235' }}
              >
                <div className="section-label mb-2" style={{ color: '#1A9B8C' }}>Live</div>
                <h3 className="font-display font-bold text-off-white text-2xl mb-1">
                  Brigade Tech Garden
                </h3>
                <p className="text-muted text-sm mb-5">Bengaluru, Karnataka</p>

                {/* Before/after hero */}
                <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: '#0B0E1A' }}>
                  <div className="section-label mb-3">Check-in time</div>
                  <div className="flex items-center gap-4">
                    <div className="text-muted line-through text-2xl font-display font-bold">10 min</div>
                    <span className="text-muted">→</span>
                    <div className="text-coral text-3xl font-display font-extrabold">&lt;3 min</div>
                  </div>
                  <div className="mt-3 h-2 rounded-full" style={{ backgroundColor: '#1E2235' }}>
                    <div className="h-2 rounded-full" style={{ width: '28%', backgroundColor: '#E8452A' }} />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="section-label">Before</span>
                    <span className="section-label" style={{ color: '#E8452A' }}>After</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {brigade.slice(1).map((s) => (
                    <div key={s.label} className="rounded-lg p-3" style={{ backgroundColor: '#0B0E1A' }}>
                      <div className="font-display font-extrabold text-coral text-xl tabular leading-none mb-1">{s.value}</div>
                      <div className="section-label leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Prestige */}
          <RevealWrapper>
            <div className="reveal reveal-delay-2">
              <div
                className="rounded-2xl p-6 mb-4"
                style={{ background: 'linear-gradient(135deg, #141729 0%, #1A1E35 100%)', border: '1px solid #1E2235' }}
              >
                <div className="section-label mb-2" style={{ color: '#1A9B8C' }}>Live</div>
                <h3 className="font-display font-bold text-off-white text-2xl mb-1">
                  Prestige Tech Park
                </h3>
                <p className="text-muted text-sm mb-5">Bengaluru, Karnataka</p>

                {/* Hero metric */}
                <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: '#0B0E1A' }}>
                  <div className="section-label mb-3">F&B Revenue (6 months)</div>
                  <div className="text-coral text-4xl font-display font-extrabold">₹14.56L</div>
                  <p className="text-muted text-sm mt-2">50% from brand-new users. Commerce engine stands alone.</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {prestige.slice(1).map((s) => (
                    <div key={s.label} className="rounded-lg p-3" style={{ backgroundColor: '#0B0E1A' }}>
                      <div className="font-display font-extrabold text-coral text-xl tabular leading-none mb-1">{s.value}</div>
                      <div className="section-label leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* Reframe callout */}
        <RevealWrapper>
          <div
            className="rounded-2xl p-5 reveal reveal-delay-3"
            style={{ backgroundColor: '#0B0E1A', border: '1px solid #1E2235' }}
          >
            <p className="font-display font-semibold text-off-white text-lg leading-relaxed">
              Prestige took experience + commerce only — no access integration — and still drove ₹14.56L in F&B.
              The commerce engine stands alone;{' '}
              <span className="text-coral">integration is modular by design.</span>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
