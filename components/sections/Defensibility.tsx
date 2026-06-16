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
  return (
    <section className="bg-navy py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal">Defensibility</div>
          <h2
            className="font-display font-extrabold text-off-white leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}
          >
            Why this compounds —
            <br />
            and why a model{' '}
            <span className="text-coral">can&apos;t copy it.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-16 reveal reveal-delay-2">
            Anyone can call an LLM; no one can shortcut turnstile integrations,
            3-year developer contracts, and cross-portfolio data.
          </p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Flywheel visual */}
          <RevealWrapper>
            <div
              className="rounded-2xl border border-navy-border bg-navy-surface p-8 reveal reveal-delay-1"
            >
              <div className="section-label mb-6">The data flywheel</div>
              {/* Circular arrangement via CSS */}
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <svg
                  viewBox="0 0 300 300"
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Circle track */}
                  <circle cx="150" cy="150" r="100" fill="none" stroke="#1E2235" strokeWidth="2" strokeDasharray="8 4" />

                  {/* Arrows on the circle */}
                  {flywheelNodes.map((node, i) => {
                    const angle = (i / flywheelNodes.length) * 2 * Math.PI - Math.PI / 2;
                    const x = 150 + 100 * Math.cos(angle);
                    const y = 150 + 100 * Math.sin(angle);
                    const nextAngle = ((i + 1) / flywheelNodes.length) * 2 * Math.PI - Math.PI / 2;
                    const nx = 150 + 100 * Math.cos(nextAngle);
                    const ny = 150 + 100 * Math.sin(nextAngle);

                    return (
                      <g key={node.label}>
                        {/* Node circle */}
                        <circle cx={x} cy={y} r="28" fill="#141729" stroke={node.color} strokeWidth="1.5" />
                        {/* Arrow to next */}
                        <line
                          x1={x + 28 * Math.cos(nextAngle - angle > 0 ? nextAngle : angle)}
                          y1={y + 28 * Math.sin(nextAngle - angle > 0 ? nextAngle : angle)}
                          x2={nx - 30 * Math.cos(nextAngle)}
                          y2={ny - 30 * Math.sin(nextAngle)}
                          stroke={node.color}
                          strokeWidth="1"
                          strokeOpacity="0.4"
                          markerEnd="url(#arrow)"
                        />
                        {/* Label */}
                        <text
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="9"
                          fill={node.color}
                          fontFamily="JetBrains Mono, monospace"
                          fontWeight="500"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Centre */}
                  <text x="150" y="145" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="JetBrains Mono, monospace">
                    Aeria
                  </text>
                  <text x="150" y="160" textAnchor="middle" fontSize="9" fill="#6B7280" fontFamily="JetBrains Mono, monospace">
                    flywheel
                  </text>

                  <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L6,3 z" fill="#6B7280" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <p className="text-muted text-sm mt-4 font-mono-custom">
                Commodity model in → our IP, rails, contracts, and data around it.
              </p>
            </div>
          </RevealWrapper>

          {/* Moats grid */}
          <RevealWrapper>
            <div className="grid grid-cols-1 gap-4 reveal reveal-delay-2">
              {moats.map((m, i) => (
                <div
                  key={m.n}
                  className={`flex gap-5 rounded-xl border border-navy-border bg-navy-surface p-5 reveal-delay-${i + 1}`}
                >
                  <div className="section-label text-coral shrink-0 pt-0.5">{m.n}</div>
                  <div>
                    <div className="font-display font-bold text-off-white text-sm mb-1">{m.name}</div>
                    <div className="text-muted text-sm leading-relaxed">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* Bottom answer strip */}
        <RevealWrapper>
          <div
            className="rounded-2xl p-8 reveal reveal-delay-3"
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
