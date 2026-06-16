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
    <section className="slide bg-navy px-8 md:px-16">
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
          <p className="text-muted text-lg max-w-2xl mb-8 reveal reveal-delay-2">
            Owners aren&apos;t short of software — they&apos;re drowning in it. None of it talks,
            so there&apos;s no portfolio view and money leaks at every seam.
          </p>
        </RevealWrapper>

        {/* Disconnection map — tools orbiting a hub they never connect to */}
        <RevealWrapper>
          <div className="relative rounded-2xl border border-navy-border bg-navy-surface p-6 md:p-8 mb-8 reveal reveal-delay-1">
            {/* Desktop: radial map with severed spokes */}
            <div
              className="relative mx-auto w-full hidden md:block"
              style={{ maxWidth: 330, aspectRatio: '1 / 1' }}
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
                {vendors.map((v, i) => {
                  const rad = ((-90 + i * (360 / vendors.length)) * Math.PI) / 180;
                  const x1 = 50 + 27 * Math.cos(rad);
                  const y1 = 50 + 27 * Math.sin(rad);
                  const x2 = 50 + 35 * Math.cos(rad);
                  const y2 = 50 + 35 * Math.sin(rad);
                  return (
                    <line
                      key={v}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#E8452A"
                      strokeOpacity="0.4"
                      strokeWidth="0.4"
                      strokeDasharray="1.4 1.4"
                    />
                  );
                })}
              </svg>

              {/* hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="flex items-center justify-center rounded-full border-2 border-dashed border-coral/40"
                  style={{ width: 150, height: 150 }}
                >
                  <span
                    className="text-coral font-display font-bold text-center leading-snug px-5"
                    style={{ fontSize: '13px' }}
                  >
                    No connected
                    <br />
                    source of truth
                  </span>
                </div>
              </div>

              {/* tool chips around the ring */}
              {vendors.map((v, i) => {
                const rad = ((-90 + i * (360 / vendors.length)) * Math.PI) / 180;
                const x = 50 + 42 * Math.cos(rad);
                const y = 50 + 42 * Math.sin(rad);
                return (
                  <div
                    key={v}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <span
                      className="inline-block rounded-full border border-navy-border bg-navy px-3 py-1.5 text-muted font-mono-custom whitespace-nowrap"
                      style={{ fontSize: '10px' }}
                    >
                      {v}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile: hub + chip list */}
            <div className="md:hidden">
              <div className="flex justify-center mb-8">
                <div className="flex items-center justify-center rounded-full border-2 border-dashed border-coral/40 w-40 h-40">
                  <span className="text-coral font-display font-bold text-center leading-snug px-4 text-sm">
                    No connected
                    <br />
                    source of truth
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2.5">
                {vendors.map((v) => (
                  <span
                    key={v}
                    className="px-3 py-1.5 rounded-full border border-navy-border text-muted font-mono-custom text-xs"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Three consequences */}
        <div className="grid md:grid-cols-3 gap-6">
          {consequences.map((c, i) => (
            <RevealWrapper key={c.title}>
              <div
                className={`rounded-xl border border-navy-border bg-navy-surface p-6 reveal reveal-delay-${i + 1}`}
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
