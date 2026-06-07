import { motion } from 'framer-motion';
import { EVENT_TYPES } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

const PLATFORM_STATS = [
  { value: '40M+', label: 'Annual Visitors' },
  { value: '5K', label: 'Seat Capacity' },
  { value: '200K', label: 'Sq Ft Event Space' },
];

export default function Slide12_Events({ onOpenModule }: Props) {
  return (
    <div className="slide-container flex bg-[#ffffff] overflow-hidden">
      
      {/* Left: Editorial Pitch */}
      <div className="w-[40%] flex flex-col justify-center px-20 border-r border-[#f0f0f0]">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-6">Events & Platform</div>
          <h2 className="font-display font-light text-[#1a1a1a] text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.9] mb-10">
            A Stage for <br /> <span className="italic text-[#c4973a]">the Iconic</span>
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mb-12 border-y border-[#f0f0f0] py-8">
            {PLATFORM_STATS.map((s, i) => (
              <div key={i}>
                <div className="text-xl font-light text-[#1a1a1a] mb-1">{s.value}</div>
                <div className="text-[0.5rem] uppercase tracking-[0.2em] text-[#aaa]">{s.label}</div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onOpenModule('events')}
            className="group flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#c4973a] transition-colors"
          >
            <span>Book Venue Portfolio</span>
            <div className="w-12 h-[1px] bg-[#1a1a1a] group-hover:bg-[#c4973a] transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Right: Gallery-Style Event Display */}
      <div className="w-[60%] relative p-20 flex items-center justify-center bg-[#fcfcfc]">
        <div className="grid grid-cols-2 gap-8 w-full">
          {EVENT_TYPES.slice(0, 4).map((evt, i) => (
            <motion.div 
              key={evt.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => onOpenModule('events')}
            >
              {/* Image Frame */}
              <div className="aspect-[4/5] overflow-hidden border border-[#e0e0e0] group-hover:border-[#c4973a]/50 transition-colors">
                <img src={evt.image} alt={evt.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              
              {/* Text Info */}
              <div className="mt-4">
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[#c4973a] mb-1">{evt.capacity}</div>
                <div className="font-display text-lg text-[#1a1a1a]">{evt.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}