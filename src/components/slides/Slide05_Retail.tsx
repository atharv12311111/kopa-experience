import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RETAIL_CATEGORIES } from '../../data/content';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide05_Retail({ onOpenModule }: Props) {
  const [active, setActive] = useState(0);
  const cat = RETAIL_CATEGORIES[active]!;

  return (
    <div className="slide-container flex bg-[#ffffff] overflow-hidden">
      
      {/* Sidebar: Index-Style Navigation */}
      <div className="w-[320px] flex flex-col justify-center px-16 border-r border-[#f0f0f0]">
        <div className="mb-20">
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-2 block">Curation</span>
          <h2 className="font-display font-light text-[#1a1a1a] text-4xl leading-none">Retail</h2>
        </div>

        <nav className="space-y-10">
          {RETAIL_CATEGORIES.map((c, i) => (
            <button 
              key={c.id} 
              onClick={() => setActive(i)}
              className="text-left group flex items-baseline gap-6"
            >
              <span className="text-[0.6rem] tracking-[0.2em] transition-colors" 
                    style={{ color: active === i ? '#c4973a' : '#ccc' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="font-display text-xl transition-all duration-300" 
                   style={{ color: active === i ? '#1a1a1a' : '#aaa' }}>
                {c.label}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Display: Gallery Composition */}
      <div className="flex-1 relative bg-[#fcfcfc]">
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            className="absolute inset-0 p-20 flex flex-col justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* The Image "Exhibit" */}
            <div className="absolute top-20 right-20 w-[45%] h-[60%] border-l border-t border-[#e0e0e0] p-4">
              <motion.img 
                src={cat.image} 
                alt={cat.label} 
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            {/* Content Text Block */}
            <div className="relative z-10 w-[40%]">
              <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-6">
                Featured Collection
              </div>
              <p className="font-display text-4xl font-light text-[#1a1a1a] leading-tight mb-8">
                {cat.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-12">
                {cat.tenants.slice(0, 3).map((t) => (
                  <span key={t} className="text-[0.6rem] uppercase tracking-[0.2em] text-[#999] border-r border-[#ddd] pr-3 last:border-0 last:pr-0">
                    {t}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => onOpenModule('leasing')}
                className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#c4973a] transition-colors"
              >
                Inquire Space <div className="w-10 h-[1px] bg-current" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}