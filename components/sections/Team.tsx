import { RevealWrapper } from '@/components/ui/RevealWrapper';

const founders = [
  {
    name: 'Priyanka Gera',
    role: 'Founder & CEO',
    avatar: 'PG',
    retires: 'Enterprise RE distribution',
    bullets: [
      '2× founder',
      'Co-founded OxfordCaps — Asia\'s largest tech-enabled student housing',
      '~$20M ARR, exited 2021',
      'Ex-KPMG · Ex-JLL',
      'B.Arch + M.Plan (SPA Delhi) · Finance (IIM-C)',
      '20 years · 5 countries',
    ],
  },
  {
    name: 'Awnish Kumar',
    role: 'CTO & Co-founder',
    avatar: 'AK',
    retires: 'AI / privacy architecture',
    bullets: [
      '3× founder · IIT-Bombay',
      'Ex-VP Tech, Lodha',
      'Ex-CTO, Ukeyo (acq. Livspace)',
      'Built zero-knowledge platform (600K users)',
    ],
  },
  {
    name: 'Piyush Kateja',
    role: 'Head of Product & Sales',
    avatar: 'PK',
    retires: 'Product execution',
    bullets: [
      'IIM Kozhikode',
      'Ex-PM, Anarock',
      '10 years proptech / hospitality',
    ],
  },
];

export function Team() {
  return (
    <section className="bg-bone py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <RevealWrapper>
          <div className="section-label mb-6 reveal" style={{ color: '#52525B' }}>
            The Team
          </div>
          <h2
            className="font-display font-extrabold leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontSize: 'clamp(32px, 4vw, 60px)', color: '#0B0E1A' }}
          >
            A founder who&apos;s already built
            <br />
            and <span style={{ color: '#E8452A' }}>exited proptech at scale.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-16 reveal reveal-delay-2" style={{ color: '#52525B' }}>
            The two hardest risks here are RE distribution and AI/privacy architecture.
            Both have been done before by this team.
          </p>
        </RevealWrapper>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {founders.map((f, i) => (
            <RevealWrapper key={f.name}>
              <div
                className={`rounded-2xl p-8 reveal reveal-delay-${i + 1}`}
                style={{ backgroundColor: '#141729', border: '1px solid #1E2235' }}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-lg mb-6"
                  style={{ backgroundColor: '#1E2235', color: '#FAFAF8' }}
                >
                  {f.avatar}
                </div>

                <div className="font-display font-bold text-off-white text-xl mb-1">
                  {f.name}
                </div>
                <div className="section-label mb-6" style={{ color: '#1A9B8C' }}>
                  {f.role}
                </div>

                <ul className="space-y-2 mb-8">
                  {f.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm leading-snug flex gap-2"
                      style={{ color: '#A6AEBF' }}
                    >
                      <span style={{ color: '#E8452A' }}>·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-navy-border">
                  <div className="section-label mb-1">Retires risk:</div>
                  <div className="font-display font-semibold text-off-white text-sm">
                    {f.retires}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Already shipped strip */}
        <RevealWrapper>
          <div
            className="rounded-2xl p-6 flex flex-wrap gap-6 items-center reveal reveal-delay-4"
            style={{ backgroundColor: '#E8E2D9', border: '1px solid #D4CEBF' }}
          >
            <div className="section-label" style={{ color: '#52525B' }}>Already shipped:</div>
            {[
              '$20M ARR exit',
              'zero-knowledge platform at scale',
              'proptech product at 600K users',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-display font-medium"
                style={{ color: '#0B0E1A' }}
              >
                <span style={{ color: '#E8452A' }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
