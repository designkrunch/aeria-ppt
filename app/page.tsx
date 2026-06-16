import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { WhyNow } from '@/components/sections/WhyNow';
import { Platform } from '@/components/sections/Platform';
import { AIWorkforce } from '@/components/sections/AIWorkforce';
import { Proof } from '@/components/sections/Proof';
import { Traction } from '@/components/sections/Traction';
import { BusinessModel } from '@/components/sections/BusinessModel';
import { Market } from '@/components/sections/Market';
import { Competition } from '@/components/sections/Competition';
import { Defensibility } from '@/components/sections/Defensibility';
import { Team } from '@/components/sections/Team';
import { TheRaise } from '@/components/sections/TheRaise';
import { DeckScaler } from '@/components/ui/DeckScaler';

export default function Home() {
  return (
    <main>
      <DeckScaler>
      <Hero />
      <Problem />
      <WhyNow />
      <Platform />
      <AIWorkforce />
      <Proof />
      <Traction />
      <BusinessModel />
      <Market />
      <Competition />
      <Defensibility />
      <Team />
      <TheRaise />

      <footer className="bg-navy border-t border-navy-border py-12 px-8 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="font-display font-bold text-off-white mb-2">Aeria</div>
            <div className="section-label">AI-Native Property Experience Platform</div>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <a
              href="https://www.aeria.world"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-sm hover:text-off-white transition-colors"
            >
              aeria.world
            </a>
            <span className="section-label">© 2026 Aeria Technologies</span>
          </div>
        </div>
      </footer>
      </DeckScaler>
    </main>
  );
}
