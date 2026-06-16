import { RevealWrapper } from '@/components/ui/RevealWrapper';

const vendors = [
  'Visitor Management', 'Parking', 'Deliveries', 'F&B', 'Access Control',
  'Billing', 'Community', 'Deals', 'Payments', 'Feedback',
  'Help Desk', 'Facilities', 'Lease Mgmt', 'Analytics',
];

const consequences = [
  {
    icon: '⬡',
    title: 'No portfolio insight',
    body: 'Every system is a silo. No cross-property data. No single source of truth.',
  },
  {
    icon: '⬡',
    title: 'Leaked monetization',
    body: 'Commerce and F&B value walks out un-captured. Footfall with no revenue layer.',
  },
  {
    icon: '⬡',
    title: 'Fractured experience',
    body: 'Duplicated cost. Tenants navigating 5 apps. Owners guessing at performance.',
  },
];

export function Problem() {
  return (
    <section className="bg-navy py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal">The Problem</div>
          <h2
            className="font-display font-extrabold text-off-white leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}
          >
            A single building runs on{' '}
            <span className="text-coral">30+ disconnected tools</span>
            <br />— and no one sees the whole.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-20 reveal reveal-delay-2">
            Owners aren&apos;t short of software — they&apos;re drowning in it. 30+ tools, none
            talking, no portfolio view, money leaking at every seam.
          </p>
        </RevealWrapper>

        {/* Vendor ring — CSS grid approximation */}
        <RevealWrapper>
          <div className="relative rounded-2xl border border-navy-border bg-navy-surface p-10 mb-16 reveal reveal-delay-1">
            {/* Centre label */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-48 h-48 rounded-full border-2 border-dashed border-coral/30 relative">
                <span
                  className="text-coral font-display font-bold text-center leading-snug px-4"
                  style={{ fontSize: '14px' }}
                >
                  No connected
                  <br />
                  source of truth
                </span>
              </div>
            </div>

            {/* Vendor chips arranged in rows */}
            <div className="flex flex-wrap justify-center gap-3">
              {vendors.map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 rounded-full border border-navy-border text-muted font-mono-custom text-xs"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Three consequences */}
        <div className="grid md:grid-cols-3 gap-6">
          {consequences.map((c, i) => (
            <RevealWrapper key={c.title}>
              <div
                className={`rounded-xl border border-navy-border bg-navy-surface p-8 reveal reveal-delay-${i + 1}`}
              >
                <div className="text-coral text-2xl mb-4">—</div>
                <h3 className="font-display font-bold text-off-white text-xl mb-3">
                  {c.title}
                </h3>
                <p className="text-muted text-base leading-relaxed">{c.body}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
