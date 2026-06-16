import { RevealWrapper } from '@/components/ui/RevealWrapper';

const moats = [
  {
    n: '01',
    name: 'Workflow',
    desc: '30 tools → one system of record. The rip-out cost compounds with every module adopted.',
  },
  {
    n: '02',
    name: 'Data Flywheel',
    desc: 'Proprietary cross-portfolio behavior data, accumulating with every interaction.',
  },
  {
    n: '03',
    name: 'Distribution',
    desc: '3-year locks, white-label embedding, land-and-expand motion already proven.',
  },
  {
    n: '04',
    name: 'Hardware Integration',
    desc: '"You can\'t integrate a turnstile with a prompt." Physical integrations take years.',
  },
  {
    n: '05',
    name: 'Compliance',
    desc: 'Zero-knowledge onboarding. No occupant PII. A structural moat in regulated markets.',
  },
  {
    n: '06',
    name: 'AI Orchestration',
    desc: 'Domain-specific orchestration on commodity models. The rails, not the model, are the product.',
  },
];

const flywheelNodes = [
  { label: 'Occupants', color: '#FAFAF8' },
  { label: 'Interactions', color: '#FAFAF8' },
  { label: 'Data', color: '#1A9B8C' },
  { label: 'Intelligence', color: '#1A9B8C' },
  { label: 'Automation', color: '#FAFAF8' },
  { label: 'Commerce', color: '#E8452A' },
];

export function Defensibility() {
  // Flywheel geometry — six stages on a ring, clockwise from the top.
  const cx = 50;
  const cy = 50;
  const R = 36;
  const N = flywheelNodes.length;
  const gap = 18; // degrees of clearance before each stage chip
  const degAt = (i: number) => -90 + (360 / N) * i;
  const polar = (deg: number, r = R) => ({
    x: cx + r * Math.cos((deg * Math.PI) / 180),
    y: cy + r * Math.sin((deg * Math.PI) / 180),
  });
  const markerFor = (color: string) =>
    color === '#1A9B8C' ? 'fwTeal' : color === '#E8452A' ? 'fwCoral' : 'fwWhite';
  const arcs = flywheelNodes.map((_, i) => {
    const start = polar(degAt(i) + gap);
    const end = polar(degAt(i + 1) - gap);
    const color = flywheelNodes[(i + 1) % N].color; // tint by the stage it feeds
    return {
      d: `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${R} ${R} 0 0 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`,
      color,
    };
  });

  return (
    <section className="slide bg-navy px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal">Defensibility</div>
          <h2
            className="font-display font-extrabold text-off-white leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: '60px' }}
          >
            Why this compounds —
            <br />
            and why a model{' '}
            <span className="text-coral">can&apos;t copy it.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-6 reveal reveal-delay-2">
            Anyone can call an LLM; no one can shortcut turnstile integrations,
            3-year developer contracts, and cross-portfolio data.
          </p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Flywheel visual */}
          <RevealWrapper>
            <div
              className="rounded-2xl border border-navy-border bg-navy-surface p-8 reveal reveal-delay-1"
            >
              <div className="section-label mb-6">The data flywheel</div>
              {/* Flywheel — labelled stages on a clockwise ring */}
              <div className="relative mx-auto w-full" style={{ maxWidth: 330, aspectRatio: '1 / 1' }}>
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
                  <defs>
                    {[
                      { id: 'fwWhite', c: '#FAFAF8' },
                      { id: 'fwTeal', c: '#1A9B8C' },
                      { id: 'fwCoral', c: '#E8452A' },
                    ].map((m) => (
                      <marker
                        key={m.id}
                        id={m.id}
                        markerUnits="userSpaceOnUse"
                        markerWidth="4.5"
                        markerHeight="4.5"
                        refX="3.6"
                        refY="2.25"
                        orient="auto"
                      >
                        <path d="M0,0 L0,4.5 L4.5,2.25 z" fill={m.c} />
                      </marker>
                    ))}
                  </defs>

                  {/* faint full track */}
                  <circle cx={cx} cy={cy} r={R} fill="none" stroke="#1E2235" strokeWidth="0.5" />

                  {/* directional arcs, each tinted by the stage it feeds */}
                  {arcs.map((a, i) => (
                    <path
                      key={i}
                      d={a.d}
                      fill="none"
                      stroke={a.color}
                      strokeOpacity="0.65"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      markerEnd={`url(#${markerFor(a.color)})`}
                    />
                  ))}
                </svg>

                {/* centre label */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <div className="font-display font-bold text-off-white text-sm leading-tight">Aeria</div>
                  <div className="section-label">flywheel</div>
                </div>

                {/* stage chips positioned around the ring */}
                {flywheelNodes.map((n, i) => {
                  const p = polar(degAt(i));
                  const isNeutral = n.color === '#FAFAF8';
                  return (
                    <div
                      key={n.label}
                      className="absolute"
                      style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono-custom whitespace-nowrap"
                        style={{
                          backgroundColor: '#141729',
                          borderColor: isNeutral ? '#2A2F45' : n.color,
                          fontSize: '11px',
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: n.color }}
                        />
                        <span style={{ color: isNeutral ? '#FAFAF8' : n.color }}>{n.label}</span>
                      </span>
                    </div>
                  );
                })}

                {/* accessible / print description of the loop */}
                <ol className="sr-only">
                  <li>Occupants generate interactions</li>
                  <li>Interactions produce data</li>
                  <li>Data becomes intelligence</li>
                  <li>Intelligence drives automation</li>
                  <li>Automation unlocks commerce</li>
                  <li>Commerce brings occupants back — the loop compounds</li>
                </ol>
              </div>
              <p className="text-muted text-sm mt-4 font-mono-custom">
                Commodity model in → our IP, rails, contracts, and data around it.
              </p>
            </div>
          </RevealWrapper>

          {/* Moats grid */}
          <RevealWrapper>
            <div className="grid grid-cols-1 gap-2 reveal reveal-delay-2">
              {moats.map((m, i) => (
                <div
                  key={m.n}
                  className={`flex gap-4 rounded-xl border border-navy-border bg-navy-surface px-4 py-2.5 reveal-delay-${i + 1}`}
                >
                  <div className="section-label text-coral shrink-0 pt-0.5">{m.n}</div>
                  <div>
                    <div className="font-display font-bold text-off-white text-sm mb-0.5">{m.name}</div>
                    <div className="text-muted text-sm leading-snug">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* Bottom answer strip */}
        <RevealWrapper>
          <div
            className="rounded-2xl px-6 py-4 reveal reveal-delay-3"
            style={{ backgroundColor: '#141729', border: '1px solid #1E2235' }}
          >
            <p className="font-display font-bold text-off-white text-lg leading-relaxed mb-2">
              Why won&apos;t Claude / ChatGPT / Copilot or a fast-follower copy this?
            </p>
            <p className="text-muted leading-relaxed">
              We build <em>on</em> foundation models — the moat is orchestration, physical integrations,
              distribution, and proprietary data.{' '}
              <span className="text-off-white">
                Agents are a feature. The rails, contracts, and flywheel are the product.
              </span>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
