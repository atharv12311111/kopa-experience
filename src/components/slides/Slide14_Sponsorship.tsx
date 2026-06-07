import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPONSORSHIP_TIERS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide14_Sponsorship({ onOpenModule }: Props) {
  const [active, setActive] = useState(0);
  const tier = SPONSORSHIP_TIERS[active];

  return (
    <div className="slide-container flex bg-[#ffffff] overflow-hidden">
      
      {/* Left: The Curation Interface */}
      <div className="w-[35%] flex flex-col justify-center px-16 border-r border-[#f0f0f0]">
        <div className="mb-16">
          <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-4">Brand Partnerships</div>
          <h2 className="font-display font-light text-[#1a1a1a] text-5xl leading-none">The Tiers</h2>
        </div>

        <nav className="space-y-6">
          {SPONSORSHIP_TIERS.map((t, i) => (
            <button 
              key={i} 
              onClick={() => setActive(i)}
              className="flex items-center gap-6 group text-left"
            >
              <div className={`w-8 h-[1px] transition-all ${active === i ? 'bg-[#c4973a] w-12' : 'bg-[#e0e0e0]'}`} />
              <div className={`font-display text-xl transition-colors ${active === i ? 'text-[#1a1a1a]' : 'text-[#ccc]'}`}>
                {t.name}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Right: Editorial Detail View */}
      <div className="w-[65%] p-20 flex flex-col justify-center bg-[#fcfcfc]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-6">{tier.label}</div>
            <div className="font-display text-6xl font-light text-[#1a1a1a] mb-8">{tier.price}</div>
            <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-lg">
              {tier.description}
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {tier.perks.map((perk, i) => (
                <div key={i} className="flex items-start gap-4 border-l border-[#e0e0e0] pl-4">
                  <span className="text-[#c4973a] text-[0.6rem] mt-1.5">✦</span>
                  <span className="text-[0.8rem] text-[#666] uppercase tracking-[0.1em]">{perk}</span>
                </div>
              ))}
            </div>

            <button 
            onClick={() => onOpenModule('sponsorship')}
            className="px-10 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-[0.65rem] uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
          >
            Inquire Partnership
          </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}