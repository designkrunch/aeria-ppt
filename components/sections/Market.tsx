import { RevealWrapper } from '@/components/ui/RevealWrapper';

const funnelSteps = [
  { label: 'global asset managers & funds', value: '~300', width: '100%' },
  { label: 'funds converted (15–20%)', value: '~60', width: '70%' },
  { label: 'sq ft — one portfolio each', value: '~25M', width: '50%' },
  { label: 'per sq ft / year · below incumbents', value: '× 6.5¢', width: '35%' },
  { label: 'ARR', value: '$100M', width: '24%', accent: true },
];

const tam = [
  { label: 'Tenant Experience', value: '$3.5B' },
  { label: 'Workplace Experience', value: '$6.2B' },
  { label: 'Services & Commissions', value: '~$100B' },
];

export function Market() {
  return (
    <section className="bg-navy py-32 px-8 md:px-16">
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
          <p className="text-muted text-lg max-w-2xl mb-16 reveal reveal-delay-2">
            ~300 asset managers control ~30B sq ft. Convert 15–20% of them at one ~25M sq ft
            portfolio each, priced below incumbents, and the model reaches nine figures.
            We&apos;ve already cracked 3 Indian accounts &gt;50M sq ft each at 3–4¢.
          </p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Funnel */}
          <RevealWrapper>
            <div className="space-y-3 reveal reveal-delay-1">
              {funnelSteps.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-center gap-4 mb-1">
                    <span
                      className="font-display font-bold text-sm w-28 shrink-0"
                      style={{ color: step.accent ? '#E8452A' : '#FAFAF8' }}
                    >
                      {step.value}
                    </span>
                    <span className="text-muted text-sm">{step.label}</span>
                  </div>
                  <div
                    className="h-10 rounded-lg transition-all"
                    style={{
                      width: step.width,
                      backgroundColor: step.accent ? '#E8452A' : '#1E2235',
                    }}
                  />
                  {i < funnelSteps.length - 1 && (
                    <div className="text-muted text-xs ml-28 mt-1">↓</div>
                  )}
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* TAM panel */}
          <RevealWrapper>
            <div className="flex flex-col gap-5 reveal reveal-delay-2">
              <div className="rounded-2xl border border-navy-border bg-navy-surface p-7">
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

              <div className="rounded-2xl border border-navy-border bg-navy-surface p-7">
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
