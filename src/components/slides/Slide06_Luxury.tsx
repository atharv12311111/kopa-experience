import { motion } from 'framer-motion';
import { LUXURY_HIGHLIGHTS } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide06_Luxury({ onOpenModule }: Props) {
  return (
    <div className="slide-container flex bg-[#ffffff]">
      
      {/* Left: Deep-Focus Editorial Image */}
      <div className="relative w-[40%] bg-[#f4f4f4] flex items-center justify-center">
        <div className="absolute inset-8 border border-[#c4973a]/30" /> {/* Decorative Frame */}
        <img 
          src="/public/closet.jpg" 
          alt="Luxury wing interior" 
          className="w-[80%] h-[70%] object-cover shadow-2xl" 
        />
      </div>

      {/* Right: Refined Content Suite */}
      <div className="w-[60%] flex flex-col justify-center px-20">
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#c4973a]" />
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#c4973a]">The Luxury Wing</span>
          </div>
          <h2 className="font-display font-light text-[#1a1a1a] text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.9]">
            Architectural<br/>
            <span className="italic text-[#c4973a]">Excellence</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 mb-16 border-y border-[#f0f0f0] py-8">
          {[
            { s: '102K+', l: 'Average HHI' },
            { s: '60%', l: 'Monthly Footfall' },
            { s: '2×', l: 'Basket Value' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-light text-[#1a1a1a] mb-1">{stat.s}</div>
              <div className="text-[0.6rem] uppercase tracking-widest text-[#999]">{stat.l}</div>
            </div>
          ))}
        </div>

        {/* Luxury Highlights - Clean Minimalist List */}
        <div className="space-y-6 mb-16">
          {LUXURY_HIGHLIGHTS.map((t, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-[0.6rem] text-[#c4973a]">●</span>
              <div className="flex-1 flex justify-between items-baseline">
                <span className="text-[#333] tracking-wide">{t.name}</span>
                <span className="text-[0.65rem] text-[#aaa] uppercase tracking-widest">{t.category}</span>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onOpenModule('leasing')}
          className="group flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-[#1a1a1a]"
        >
          <span>Request Private Brochure</span>
          <div className="w-12 h-[1px] bg-[#1a1a1a] group-hover:w-20 transition-all duration-500" />
        </button>
      </div>
    </div>
  );
}