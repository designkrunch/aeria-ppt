import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function WhyNow() {
  return (
    <section className="bg-navy py-32 px-8 md:px-16 border-t border-navy-border">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal">Why Now</div>
          <h2
            className="font-display font-extrabold text-off-white leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}
          >
            In an agent-driven building,
            <br />
            the <span className="text-coral">dashboard</span> is the liability.
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-20 reveal reveal-delay-2">
            Models just crossed the capability-to-cost line. The moment a building runs on
            agents instead of dashboards, the screen stops being the product — and everything
            beneath it starts to.
          </p>
        </RevealWrapper>

        {/* Two flow diagrams */}
        <div className="space-y-6 mb-20">
          {/* Software era */}
          <RevealWrapper>
            <div className="rounded-xl border border-navy-border bg-navy-surface/50 p-8 reveal reveal-delay-1">
              <div className="section-label mb-6 text-muted">Software Era — Today</div>
              <div className="flex items-center gap-4 flex-wrap">
                {['Human', 'Software', 'Action'].map((node, i) => (
                  <div key={node} className="flex items-center gap-4">
                    <div className="px-6 py-3 rounded-lg border border-navy-border text-muted font-display font-semibold text-sm">
                      {node}
                    </div>
                    {i < 2 && (
                      <span className="text-navy-border text-xl">→</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-muted text-sm mt-4">
                Every task runs through a person driving a screen.
              </p>
            </div>
          </RevealWrapper>

          {/* AI era */}
          <RevealWrapper>
            <div className="rounded-xl border border-teal/30 bg-teal/5 p-8 reveal reveal-delay-2">
              <div className="section-label mb-6" style={{ color: '#1A9B8C' }}>AI Era — Now</div>
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  { label: 'Human', accent: false },
                  { label: 'Agent', accent: true },
                  { label: 'Workflow', accent: false },
                  { label: 'Outcome', accent: true },
                ].map((node, i) => (
                  <div key={node.label} className="flex items-center gap-4">
                    <div
                      className={`px-6 py-3 rounded-lg font-display font-semibold text-sm ${
                        node.accent
                          ? 'border border-teal/50 text-teal bg-teal/10'
                          : 'border border-navy-border text-off-white'
                      }`}
                    >
                      {node.label}
                    </div>
                    {i < 3 && (
                      <span className="text-teal text-xl">→</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-teal/70 text-sm mt-4">
                You state the outcome. The agent does the work.
              </p>
            </div>
          </RevealWrapper>
        </div>

        {/* Three points */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              n: '1',
              text: 'Software-centric ops don\'t lower cost — they relocate dashboards.',
            },
            {
              n: '2',
              text: 'Agent-centric ops are newly possible: models crossed the capability / cost line.',
            },
            {
              n: '3',
              text: 'Value migrates from the interface to the orchestration, data and actions beneath it — exactly where Aeria is built.',
            },
          ].map((p, i) => (
            <RevealWrapper key={p.n}>
              <div className={`reveal reveal-delay-${i + 1}`}>
                <div className="text-coral font-display font-extrabold text-4xl mb-4 tabular">
                  {p.n}
                </div>
                <p className="text-off-white text-base leading-relaxed">{p.text}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
