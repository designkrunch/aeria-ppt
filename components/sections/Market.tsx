import { RevealWrapper } from '@/components/ui/RevealWrapper';

const funnelSteps = [
  { label: 'global asset managers & funds', value: '~300', width: '100%' },
  { label: 'funds converted (15–20%)', value: '~60', width: '72%' },
  { label: 'sq ft — one portfolio each', value: '× 25M', width: '52%' },
  { label: 'per sq ft / year · below incumbents', value: '× 6.5¢', width: '36%' },
  { label: 'ARR', value: '= $100M', width: '24%', accent: true },
];

// Warm ramp blue → coral: the math visibly converges on revenue.
const funnelRamp = ['#33415F', '#5B466A', '#8A4A56', '#C24634', '#E8452A'];

const tam = [
  { label: 'Tenant Experience', value: '$3.5B' },
  { label: 'Workplace Experience', value: '$6.2B' },
  { label: 'Services & Commissions', value: '~$100B' },
];

export function Market() {
  return (
    <section className="slide bg-navy px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal">Market Opportunity</div>
          <h2
            className="font-display font-extrabold text-off-white leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}
          >
            Sixty of the world&apos;s largest funds,
            <br />
            one portfolio each —
            <br />
            that&apos;s{' '}
            <span className="text-coral">$100M ARR.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-10 reveal reveal-delay-2">
            ~300 asset managers control ~30B sq ft. Convert 15–20% of them at one ~25M sq ft
            portfolio each, priced below incumbents, and the model reaches nine figures.
            We&apos;ve already cracked 3 Indian accounts &gt;50M sq ft each at 3–4¢.
          </p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Funnel — reads as a calculation converging on revenue */}
          <RevealWrapper>
            <div className="space-y-3 reveal reveal-delay-1">
              {funnelSteps.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span
                      className="font-display font-extrabold tabular"
                      style={{
                        fontSize: 'clamp(18px, 1.7vw, 26px)',
                        color: step.accent ? '#E8452A' : '#FAFAF8',
                      }}
                    >
                      {step.value}
                    </span>
                    <span className="text-muted text-sm">{step.label}</span>
                  </div>
                  <div
                    className="rounded-lg transition-all"
                    style={{
                      width: step.width,
                      height: step.accent ? 16 : 11,
                      background: `linear-gradient(90deg, ${funnelRamp[i]}, ${funnelRamp[Math.min(i + 1, funnelRamp.length - 1)]})`,
                      boxShadow: step.accent ? '0 0 24px rgba(232,69,42,0.35)' : 'none',
                    }}
                  />
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* TAM panel */}
          <RevealWrapper>
            <div className="flex flex-col gap-5 reveal reveal-delay-2">
              <div className="rounded-2xl border border-navy-border bg-navy-surface p-5">
                <div className="section-label mb-5">Asian TAM</div>
                {tam.map((t) => (
                  <div
                    key={t.label}
                    className="flex justify-between items-center py-3 border-b border-navy-border last:border-0"
                  >
                    <span className="text-muted text-sm">{t.label}</span>
                    <span className="font-display font-bold text-off-white">{t.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 mt-2">
                  <span className="font-display font-semibold text-off-white">Total</span>
                  <span className="font-display font-extrabold text-coral text-xl">~$110B</span>
                </div>
              </div>

              <div className="rounded-2xl border border-navy-border bg-navy-surface p-5">
                <div className="section-label mb-3">Context</div>
                <div className="space-y-2 text-muted text-sm leading-relaxed">
                  <p>Office &gt; 68% of commercial real estate</p>
                  <p>Global office-management revenue &gt; $50B/yr</p>
                  <p className="text-off-white font-medium pt-2">
                    Incumbents priced at 15–25¢ psft — we enter below
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
