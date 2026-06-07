import { motion } from 'framer-motion';
import { PERFORMING_ARTS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide13_PAC({ onOpenModule }: Props) {
  return (
    <div className="slide-container flex bg-[#ffffff] overflow-hidden">
      
      {/* Left: Editorial Focus */}
      <div className="w-[50%] flex flex-col justify-center px-20 border-r border-[#f0f0f0]">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-6">Performing Arts Center</div>
          <h2 className="font-display font-light text-[#1a1a1a] text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.9] mb-8">
            {PERFORMING_ARTS.name}
          </h2>
          <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-md">
            {PERFORMING_ARTS.description}
          </p>

          <div className="flex gap-6">
            <button 
  onClick={() => onOpenModule('events')}
  className="text-[#1a1a1a] text-[0.65rem] uppercase tracking-[0.2em] py-3 px-8 border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
>
  Book Venue
</button>
            <button 
              onClick={() => onOpenModule('sponsorship')}
              className="text-[0.65rem] uppercase tracking-[0.2em] text-[#c4973a] border-b border-[#c4973a]"
            >
              Sponsorships
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right: Architectural Index */}
      <div className="w-[50%] bg-[#fcfcfc] p-20 flex flex-col justify-center">
        <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#aaa] mb-12">Venue Specifications</div>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {PERFORMING_ARTS.specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="border-l border-[#e0e0e0] pl-6"
            >
              <div className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999] mb-2">{spec.label}</div>
              <div className="font-display text-xl text-[#1a1a1a]">{spec.value}</div>
            </motion.div>
          ))}
          
          {/* Main Capacity Highlight */}
          <div className="col-span-2 mt-8 pt-8 border-t border-[#e0e0e0]">
            <div className="text-[0.5rem] uppercase tracking-[0.2em] text-[#c4973a] mb-2">Main Hall Capacity</div>
            <div className="font-display text-6xl font-light text-[#1a1a1a]">5,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}