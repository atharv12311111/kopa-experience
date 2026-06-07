import { motion } from 'framer-motion';
import { ENTERTAINMENT_ANCHORS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide08_EntOverview(_: Props) {
  return (
    <div className="slide-container flex flex-col md:flex-row bg-[#ffffff] overflow-hidden">
      
      {/* Left: Editorial Sidebar */}
      <div className="flex-1 md:w-[35%] flex flex-col justify-center px-10 md:px-20 py-16">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: 40, height: 1, background: '#c4973a' }} />
          <span style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.2em' }}>Attractions</span>
        </div>
        
        <h2 className="font-display font-light text-[#1a1a1a]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 0.95 }}>
          Entertainment<br />
          <em style={{ color: '#c4973a', fontStyle: 'italic' }}>at Scale</em>
        </h2>
        
        <p className="mt-8 text-[#555] text-lg leading-relaxed max-w-sm">
          A world-class destination designed for immersive experiences, spanning high-octane thrills to curated cultural moments.
        </p>

        <motion.button 
          className="mt-10 w-fit px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] uppercase tracking-widest text-[0.65rem] hover:bg-[#1a1a1a] hover:text-white transition-all"
          whileHover={{ x: 5 }}
        >
          View Event Calendar
        </motion.button>
      </div>

      {/* Right: Staggered Attraction Gallery */}
      <div className="flex-1 md:w-[65%] grid grid-cols-2 gap-1 p-2 bg-[#f9f9f9]">
        {ENTERTAINMENT_ANCHORS.map((anchor, i) => (
          <motion.div
            key={anchor.id}
            className="relative group overflow-hidden bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <img 
              src={anchor.image} 
              alt={anchor.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              loading="lazy" 
            />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div style={{ color: anchor.color }} className="text-[0.6rem] uppercase tracking-widest mb-1 font-bold">
                {anchor.tagline}
              </div>
              <div className="font-display text-white text-2xl mb-4">{anchor.name}</div>
              <div className="flex flex-wrap gap-2">
                {anchor.highlights.slice(0, 2).map((h) => (
                  <span key={h} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[0.6rem] uppercase tracking-widest">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}