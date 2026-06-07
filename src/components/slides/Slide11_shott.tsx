import { motion } from 'framer-motion';
import { ENTERTAINMENT_ANCHORS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide11_BigSnow(_: Props) {
  const anchor = ENTERTAINMENT_ANCHORS[2]!;

  return (
    <div className="slide-container flex bg-[#ffffff] overflow-hidden">
      
      {/* Left: Editorial Content */}
      <div className="w-[40%] flex flex-col justify-center px-20 border-r border-[#f0f0f0] z-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-6">Entertainment · 03 of 04</div>
          
          <h2 className="font-display font-light text-[#1a1a1a] text-6xl leading-[0.9] mb-8">
            {anchor.name}
          </h2>

          <div className="w-16 h-[1px] bg-[#c4973a] mb-10" />

          <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-md">
            {anchor.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {anchor.highlights.map((h) => (
              <span 
                key={h} 
                className="text-[0.6rem] uppercase tracking-[0.2em] px-4 py-2 border border-[#e0e0e0] text-[#999]"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: The Gallery Print */}
      <div className="w-[60%] relative overflow-hidden bg-[#f9f9f9]">
        <motion.img 
          src={anchor.image} 
          alt={anchor.name} 
          className="w-full h-full object-cover" 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
      </div>
    </div>
  );
}