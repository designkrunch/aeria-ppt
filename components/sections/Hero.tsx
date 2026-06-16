import Image from 'next/image';
import { RevealWrapper } from '@/components/ui/RevealWrapper';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex flex-col justify-center overflow-hidden">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] no-print"
        style={{
          backgroundImage:
            'linear-gradient(#FAFAF8 1px, transparent 1px), linear-gradient(90deg, #FAFAF8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ambient glow behind headline */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 blur-[120px] pointer-events-none no-print"
        style={{ background: 'radial-gradient(ellipse, #E8452A 0%, transparent 70%)' }}
      />

      <RevealWrapper className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-24">
        {/* Logo */}
        <div className="mb-16 reveal">
          <Image
            src="/logo.svg"
            alt="Aeria"
            width={120}
            height={44}
            priority
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="section-label mb-6 reveal reveal-delay-1">
            Asia&apos;s First · AI-Native Property Experience Platform
          </div>

          {/* Main headline */}
          <h1
            className="font-display font-extrabold text-off-white leading-[1.05] mb-8 reveal reveal-delay-2"
            style={{ fontSize: 'clamp(44px, 6.5vw, 88px)' }}
          >
            The operating{' '}
            <span className="text-coral">system</span>
            <br />
            commercial real estate
            <br />
            runs on.
          </h1>

          {/* Sub-headline */}
          <p className="text-muted text-xl leading-relaxed max-w-2xl mb-12 reveal reveal-delay-3">
            One platform that turns a disconnected building into a self-operating
            asset. It lowers operating cost while compounding the experience and
            commerce that defend rent.
          </p>

          {/* Investor chips */}
          <div className="flex flex-wrap items-center gap-3 mb-16 reveal reveal-delay-4">
            <span className="section-label mr-2">Backed by</span>
            {['Kalaari', 'Foundamental', 'AC Ventures', 'AL Trust'].map((name) => (
              <span
                key={name}
                className="px-4 py-1.5 rounded-full border border-navy-border text-muted text-sm font-mono-custom"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Bottom metrics strip */}
          <div className="divider-glow mb-8 reveal reveal-delay-5" />
          <div className="flex flex-wrap gap-8 reveal reveal-delay-6">
            {[
              { value: '15M sq ft', label: 'deployed & secured' },
              { value: '2', label: 'flagship campuses live' },
              { value: '12 months', label: 'post-MVP' },
            ].map((m) => (
              <div key={m.label} className="flex items-baseline gap-2">
                <span className="font-display font-bold text-off-white text-lg">{m.value}</span>
                <span className="section-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 no-print"
        >
          <span className="section-label">scroll</span>
          <div className="w-px h-12 bg-muted animate-pulse" />
        </div>
      </RevealWrapper>
    </section>
  );
}
