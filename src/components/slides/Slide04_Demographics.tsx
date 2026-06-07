import { motion } from 'framer-motion';
import { DEMOGRAPHICS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide04_Demographics(_: Props) {
  return (
    <div className="slide-container flex bg-[#ffffff] h-full">
      
      {/* Right: Gallery Image Wall */}
      <div className="w-[40%] h-full relative overflow-hidden bg-[#f0f0f0]">
        <img 
          src="/crowd.png" 
          alt="Consumer Market" 
          className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Left: Editorial Data Content */}
      <div className="w-[60%] flex flex-col justify-center px-24">
        
        {/* Header */}
        <div className="mb-20">
          <div className="text-[0.5rem] uppercase tracking-[0.4em] text-[#c4973a] mb-6">Catchment Data</div>
          <h2 className="font-display font-light text-[#1a1a1a] text-6xl leading-[0.9]">
            A Premier <br /> <span className="italic text-[#c4973a]">Consumer Market</span>
          </h2>
        </div>

        {/* Demographics Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-12 mb-20">
          {DEMOGRAPHICS.map((d, i) => (
            <motion.div
              key={i}
              className="border-l border-[#eee] pl-8"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <div className="text-[0.5rem] uppercase tracking-[0.3em] text-[#999] mb-2">{d.sub}</div>
              <div className="font-display text-4xl font-light text-[#1a1a1a]">{d.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Quote */}
        <motion.div
          className="border-l border-[#c4973a] pl-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-display text-lg font-light text-[#444] italic leading-snug max-w-md">
            "The most affluent, high-density consumer market within a two-hour radius of any retail destination on earth."
          </p>
          <div className="mt-6 text-[0.5rem] uppercase tracking-[0.3em] text-[#c4973a] font-medium">— Internal Research Group</div>
        </motion.div>
      </div>

    </div>
  );
}