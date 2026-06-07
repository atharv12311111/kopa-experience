import { useEffect } from 'react';
import { motion } from 'framer-motion';

export const SLIDE_TITLES = [
  'by LAKESHORE', 'The Numbers', 'Location & Access', 'Demographics',
  'Retail', 'The Luxury Wing', 'Dining & Lifestyle', 'Entertainment',
  'PVR Directors Cut', 'Hamleys Play World', 'Shott', 'Events & Platform',
  'Performing Arts Center', 'Sponsorship', 'Leasing', 'Get in Touch',
];

interface SlideMenuProps {
  current: number;
  onGoTo: (index: number) => void;
  onClose: () => void;
}

export default function SlideMenu({ current, onGoTo, onClose }: SlideMenuProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop: Clean, frosted glass look */}
      <div
        className="absolute inset-0 bg-white/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Panel: Architectural, light-themed */}
      <motion.div
        className="relative z-10 ml-auto h-full overflow-y-auto bg-white border-l border-[#eee] shadow-2xl"
        style={{ width: '100%', maxWidth: 400 }}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="px-10 py-12 border-b border-[#f5f5f5]">
          <div className="text-[0.5rem] uppercase tracking-[0.3em] text-[#c4973a] mb-2">Exhibition Index</div>
          <div className="font-display font-light text-[#1a1a1a] text-2xl">Navigation</div>
        </div>

        {/* Slide List */}
        <nav className="py-6">
          {SLIDE_TITLES.map((title, i) => {
            const isActive = current === i;
            return (
              <button
                key={i}
                onClick={() => { onGoTo(i); onClose(); }}
                className="w-full flex items-center px-10 py-5 text-left group transition-all"
              >
                {/* Numbering with Gold Active Indicator */}
                <div className="relative w-12">
                  <span className={`text-[0.6rem] font-medium transition-colors ${isActive ? 'text-[#1a1a1a]' : 'text-[#ccc]'}`}>
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="active-marker"
                      className="absolute -left-6 top-1 w-[2px] h-3 bg-[#c4973a]" 
                    />
                  )}
                </div>

                {/* Title */}
                <span className={`text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-[#1a1a1a] font-semibold' : 'text-[#999] group-hover:text-[#666]'}`}>
                  {title}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-10 py-10 border-t border-[#f5f5f5] mt-auto">
          <p className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999]">
            Use arrows to navigate · Press Esc to close
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}