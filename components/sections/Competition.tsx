import { RevealWrapper } from '@/components/ui/RevealWrapper';

const companies = ['Aeria', 'HqO', 'VTS', 'Smarten', 'Anacity'];

// Capability matrix sourced from the April 2026 deck's competition scan.
const capabilities: { label: string; marks: boolean[] }[] = [
  { label: 'AI-native agentic platform', marks: [true, false, false, false, false] },
  { label: 'Zero-knowledge onboarding (no occupant PII)', marks: [true, false, false, false, false] },
  { label: 'Fully integrated workflows — not just digitization', marks: [true, true, true, false, false] },
  { label: 'Proprietary hardware & system hooks (VMS · DMS · CAFM)', marks: [true, false, false, true, false] },
  { label: 'Open API integration', marks: [true, true, false, false, false] },
];

const raised = [
  { name: 'Aeria', value: '~$2M', self: true },
  { name: 'HqO', value: '$157M', self: false },
  { name: 'VTS', value: '$463M', self: false },
  { name: 'Smarten', value: '$12M', self: false },
];

function Mark({ on }: { on: boolean }) {
  return on ? (
    <>
      <span aria-hidden="true" className="text-base font-bold" style={{ color: '#1A9B8C' }}>
        ✓
      </span>
      <span className="sr-only">Yes</span>
    </>
  ) : (
    <>
      <span aria-hidden="true" style={{ color: '#B8B2A6' }}>
        –
      </span>
      <span className="sr-only">No</span>
    </>
  );
}

export function Competition() {
  return (
    <section className="bg-bone py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal" style={{ color: '#52525B' }}>
            Competition
          </div>
          <h2
            className="font-display font-extrabold leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(32px, 4vw, 60px)', color: '#0B0E1A' }}
          >
            The only AI-native entrant —
            <br />
            built on <span style={{ color: '#E8452A' }}>a fraction of the capital.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-16 reveal reveal-delay-2" style={{ color: '#52525B' }}>
            The category is proven: incumbents have raised $150–460M and tenant-experience
            companies exit at $100–200M. None are AI-native, none run zero-knowledge onboarding,
            and none are priced for APAC. Aeria is all three.
          </p>
        </RevealWrapper>

        {/* Capability matrix */}
        <RevealWrapper>
          <div
            className="rounded-2xl overflow-hidden reveal reveal-delay-1 print-keep"
            style={{ backgroundColor: '#FAFAF8', border: '1px solid #D4CEBF' }}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: '640px' }}>
                <caption className="sr-only">
                  Capability comparison between Aeria and incumbent tenant-experience platforms.
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="text-left p-5" />
                    {companies.map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className="p-5 text-center font-display font-bold"
                        style={{
                          color: c === 'Aeria' ? '#E8452A' : '#0B0E1A',
                          backgroundColor: c === 'Aeria' ? 'rgba(232,69,42,0.06)' : 'transparent',
                          fontSize: c === 'Aeria' ? '18px' : '14px',
                        }}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {capabilities.map((row) => (
                    <tr key={row.label} style={{ borderTop: '1px solid #ECE6DA' }}>
                      <th
                        scope="row"
                        className="text-left p-5 text-sm font-medium align-middle"
                        style={{ color: '#0B0E1A' }}
                      >
                        {row.label}
                      </th>
                      {row.marks.map((m, i) => (
                        <td
                          key={i}
                          className="p-5 text-center align-middle"
                          style={{
                            backgroundColor: i === 0 ? 'rgba(232,69,42,0.06)' : 'transparent',
                          }}
                        >
                          <Mark on={m} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </RevealWrapper>

        {/* Capital efficiency + M&A context */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-5 mt-5">
          <RevealWrapper>
            <div
              className="rounded-2xl p-8 reveal reveal-delay-2 print-keep"
              style={{ backgroundColor: '#141729' }}
            >
              <div className="section-label mb-6">Raised to date</div>
              <div className="space-y-4">
                {raised.map((r) => {
                  // Scale bars against VTS's $463M.
                  const widths: Record<string, string> = {
                    Aeria: '4%',
                    HqO: '34%',
                    VTS: '100%',
                    Smarten: '8%',
                  };
                  return (
                    <div key={r.name} className="flex items-center gap-4">
                      <span
                        className="font-display font-semibold text-sm w-20 shrink-0"
                        style={{ color: r.self ? '#E8452A' : '#FAFAF8' }}
                      >
                        {r.name}
                      </span>
                      <div className="flex-1 h-3 rounded-full" style={{ backgroundColor: '#1E2235' }}>
                        <div
                          className="h-3 rounded-full"
                          style={{
                            width: widths[r.name],
                            backgroundColor: r.self ? '#E8452A' : '#3A4152',
                          }}
                        />
                      </div>
                      <span
                        className="font-display font-bold text-sm w-16 text-right tabular"
                        style={{ color: r.self ? '#E8452A' : '#8A92A4' }}
                      >
                        {r.value}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-muted text-sm mt-6 font-mono-custom">
                Same outcomes, two orders of magnitude less capital — because the moat is AI and
                workflow, not ad spend.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div
              className="rounded-2xl p-8 reveal reveal-delay-3 flex flex-col justify-center print-keep"
              style={{ backgroundColor: '#E8E2D9', border: '1px solid #D4CEBF' }}
            >
              <div className="section-label mb-3" style={{ color: '#52525B' }}>
                Comparable exits
              </div>
              <div className="font-display font-extrabold mb-3" style={{ fontSize: '40px', color: '#0B0E1A' }}>
                $100–200M
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#52525B' }}>
                Tenant-experience companies — Rise, Leesman, Lane Office App — have been acquired
                in this range. A proven exit corridor, not a thesis.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
