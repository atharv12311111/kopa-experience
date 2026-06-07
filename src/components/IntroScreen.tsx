import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') onEnter();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onEnter]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col justify-end p-20 bg-[#0a0a0a]"
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      {/* Full Screen Video Canvas */}
      <div className="absolute inset-0 z-0">
        <video
          src="/front.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Deep cinematic overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent" />
      </div>

      {/* Unified Bottom-Left Branding & Action Zone */}
      <motion.div 
        className="relative z-10 flex flex-col items-start max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="font-display font-light text-[#ffffff] text-[clamp(4rem,10vw,8rem)] leading-none tracking-tight">
          KOPA
        </h1>
        
        <div className="w-20 h-[1px] bg-[#c4973a] my-8" />
        
        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#aaa] mb-10">
          Mundhwa Road, Pune · A Lakeshore Development
        </p>

        {/* Action Button */}
        <motion.button
          ref={btnRef}
          onClick={onEnter}
          className="px-10 py-3 border border-[#ffffff] text-[#ffffff] text-[0.6rem] uppercase tracking-[0.3em] hover:bg-[#c4973a] hover:border-[#c4973a] transition-all duration-500"
          whileHover={{ x: 10 }}
          whileTap={{ scale: 0.98 }}
        >
          Begin Experience
        </motion.button>
      </motion.div>
    </motion.div>
  );
}