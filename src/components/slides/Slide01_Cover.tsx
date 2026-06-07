import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

function SplitText({ text, delay = 0, className = '', style = {} }: {
  text: string; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  return (
    <span className={className} style={{ display: 'inline-block', ...style }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: 60, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

const STATS = [
  { value: '14 lakh', label: 'Square Feet' },
  { value: '100+', label: 'Brands' },
  { value: '2M+', label: 'Annual Visitors' },
  { value: '3B+', label: 'Investment' },
];

export default function Slide01_Cover({ onOpenModule: _ }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 700);
    const t3 = setTimeout(() => setPhase(3), 1100);
    const t4 = setTimeout(() => setPhase(4), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="slide-container relative w-full h-full bg-[#0a0a0a] overflow-hidden" style={{ perspective: '1000px' }}>

      {/* Background Media - Cinematic Scale */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={phase >= 2 ? { opacity: 0.4, scale: 1.0 } : {}}
        transition={{ duration: 20, ease: 'linear', opacity: { duration: 2.5 } }}
      >
        <video 
          src="/front.mp4" 
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover" 
          style={{ objectPosition: 'center 30%' }} 
        />
      </motion.div>

      {/* Dark Overlay - Deep Gallery Mood */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/20" />

      {/* Spotlight Burst - Subtle Gold Accents */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'radial-gradient(circle at 70% 30%, rgba(196,151,58,0.15) 0%, transparent 60%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        )}
      </AnimatePresence>

      {/* Main Content - Anchored Bottom Left */}
      <div className="absolute bottom-20 left-20 z-10 w-full max-w-4xl">
        {phase >= 3 && (
          <motion.div className="flex items-center gap-6 mb-10" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="w-16 h-[1px] bg-[#c4973a]" />
            <span className="text-[0.6rem] uppercase tracking-[0.4em] text-[#aaa]">Koregaon Park, Pune</span>
          </motion.div>
        )}

        <h1 className="font-display font-light text-[#ffffff] mb-2" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.85 }}>
          {phase >= 3 && <SplitText text="THE KOPA" delay={0} />}
        </h1>
        
        <h1 className="font-display font-light mb-12 text-[#c4973a]" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.85 }}>
          {phase >= 3 && <SplitText text="by lakeshore" delay={0.45} />}
        </h1>

        {phase >= 4 && (
          <motion.div className="flex flex-wrap gap-12 mt-12 border-t border-[#ffffff]/10 pt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-[#ffffff] font-light text-2xl mb-1">{s.value}</div>
                <div className="text-[#c4973a] text-[0.5rem] uppercase tracking-[0.3em]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Subtle Film Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
    </div>
  );
}