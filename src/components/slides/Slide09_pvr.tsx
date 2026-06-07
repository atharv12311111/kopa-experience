import { motion } from 'framer-motion';
import { ENTERTAINMENT_ANCHORS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide09_Nick(_: Props) {
  const anchor = ENTERTAINMENT_ANCHORS[0]!;

  return (
    <div className="slide-container bg-[#fcfcfc] overflow-hidden flex">
      
      {/* Left Content: Text-Heavy Editorial Focus */}
      <div className="w-[45%] flex flex-col justify-center px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#c4973a] mb-6 font-medium">
            Feature Showcase · 01
          </div>
          <h2 className="font-display font-light text-[#1a1a1a] text-[clamp(3rem,5vw,5rem)] leading-[0.9] mb-10">
            {anchor.name}
          </h2>
          <div className="h-[1px] w-20 bg-[#c4973a] mb-10" />
          <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-md">
            {anchor.description}
          </p>

          <div className="flex gap-4">
            {anchor.highlights.map((h) => (
              <span key={h} className="text-[0.6rem] uppercase tracking-[0.2em] text-[#999] border border-[#eee] px-4 py-2">
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: High-Impact Visual "Frame" */}
      <div className="w-[55%] relative flex items-center justify-end">
        <motion.div 
          className="relative w-[85%] h-[80%] overflow-hidden"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src={anchor.image} 
            alt={anchor.name} 
            className="w-full h-full object-cover" 
          />
          {/* Subtle geometric overlay for luxury texture */}
          <div className="absolute inset-0 border border-white/20" />
        </motion.div>
        
        {/* Floating Indicator */}
        <div className="absolute bottom-16 left-0 text-[0.6rem] uppercase tracking-[0.4em] text-[#ccc] -rotate-90 origin-left">
          Entertainment Series
        </div>
      </div>
    </div>
  );
}