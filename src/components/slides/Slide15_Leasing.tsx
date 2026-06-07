import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEASING_PATHS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide15_Leasing({ onOpenModule }: Props) {
  const [active, setActive] = useState(0);
  const path = LEASING_PATHS[active]!;

  return (
    <div className="slide-container flex bg-[#ffffff] overflow-hidden">
      
      {/* Left: Interactive Navigation */}
      <div className="w-[35%] flex flex-col justify-center px-20 border-r border-[#f0f0f0]">
        <div className="mb-12">
          <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-4">Retail Leasing</div>
          <h2 className="font-display font-light text-[#1a1a1a] text-5xl leading-none">The Portfolio</h2>
        </div>

        <div className="space-y-8">
          {LEASING_PATHS.map((p, i) => (
            <button 
              key={p.id}
              onClick={() => setActive(i)}
              className="flex items-center gap-6 group text-left"
            >
              <div className={`h-[1px] transition-all duration-500 ${active === i ? 'w-12 bg-[#c4973a]' : 'w-8 bg-[#e0e0e0]'}`} />
              <div className={`font-display text-xl transition-colors ${active === i ? 'text-[#1a1a1a]' : 'text-[#ccc]'}`}>
                {p.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right: Editorial Detail View */}
      <div className="w-[65%] p-20 flex flex-col justify-center bg-[#fcfcfc]">
        <AnimatePresence mode="wait">
          <motion.div
            key={path.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-6">{path.label}</div>
            <h3 className="font-display font-light text-[#1a1a1a] text-6xl leading-[0.9] mb-8">{path.tagline}</h3>
            <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-lg">{path.description}</p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                { label: 'Min. Size', value: path.minSize },
                { label: 'Location', value: path.location },
                { label: 'Demographics', value: path.demographics },
              ].map((spec, i) => (
                <div key={i} className="border-l border-[#e0e0e0] pl-4">
                  <div className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999] mb-1">{spec.label}</div>
                  <div className="text-sm font-light text-[#1a1a1a]">{spec.value}</div>
                </div>
              ))}
            </div>

            <button 
  onClick={() => onOpenModule('leasing')}
  className="px-10 py-4 border border-[#1a1a1a] text-[#1a1a1a] text-[0.65rem] uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
>
  {path.cta}
</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}