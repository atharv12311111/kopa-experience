import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DINING_CATEGORIES, DINING_STATS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide07_Dining({ onOpenModule: _ }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="slide-container flex flex-col md:flex-row bg-[#ffffff] overflow-hidden h-full w-full">
      
      {/* Left: Interactive Category List */}
      <div className="flex-1 md:w-[40%] flex flex-col justify-center px-10 md:px-20 py-16">
        <div className="mb-12">
          <span className="text-[0.6rem] uppercase tracking-[0.4em] text-[#c4973a]">Dining & Lifestyle</span>
          <h2 className="font-display font-light text-[#1a1a1a] mt-4" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: 1.1 }}>
            100+ Culinary <br/><i className="text-[#c4973a]">Experiences</i>
          </h2>
        </div>

        <div className="space-y-8">
          {DINING_CATEGORIES.map((cat, i) => (
            <div 
              key={i} 
              className="cursor-pointer border-l-[1px] pl-8 transition-all duration-500 py-1 group"
              style={{ borderColor: active === i ? '#c4973a' : '#eee' }}
              onClick={() => setActive(i)}
            >
              <div className="font-display text-lg tracking-wide transition-colors" 
                   style={{ color: active === i ? '#1a1a1a' : '#aaa' }}>
                {cat.label}
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden"
                  >
                    <p className="text-[0.8rem] text-[#666] leading-relaxed mt-3 max-w-xs">
                      {cat.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Gallery-Style Image & Stats */}
      <div className="relative flex-1 md:w-[60%] bg-[#fcfcfc] p-10 md:p-20 flex flex-col">
        {/* Main Image Frame */}
        <div className="relative flex-grow overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={DINING_CATEGORIES[active].image}
              src={DINING_CATEGORIES[active].image}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </AnimatePresence>
        </div>
        
        {/* Metadata Overlay (Editorial Style) */}
        <div className="mt-12 flex justify-between items-end">
          <div className="flex gap-2">
            {DINING_CATEGORIES[active].examples.map((ex) => (
              <span key={ex} className="px-4 py-2 border border-[#1a1a1a] text-[#1a1a1a] text-[0.5rem] uppercase tracking-[0.2em]">
                {ex}
              </span>
            ))}
          </div>

          <div className="flex gap-10">
            {DINING_STATS.map((s, i) => (
              <div key={i} className="text-right border-t border-[#1a1a1a] pt-4">
                <div className="font-display text-[#1a1a1a] text-3xl">{s.value}</div>
                <div className="text-[0.5rem] text-[#666] uppercase tracking-[0.2em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}