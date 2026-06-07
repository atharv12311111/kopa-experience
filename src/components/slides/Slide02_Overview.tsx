import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

// Simplified Stat component for the new layout
function Stat({ number, suffix, prefix = '', decimals = 0, label, description, delay = 0 }: {
  number: number; suffix: string; prefix?: string; decimals?: number;
  label: string; description: string; delay?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCountUp({ end: number, decimals, duration: 2000, enabled: inView });

  return (
    <motion.div 
      ref={ref} 
      className="border-t border-[#f0f0f0] pt-8"
      initial={{ opacity: 0, y: 10 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8, delay }}
    >
      <div className="text-4xl font-light text-[#1a1a1a] mb-2 font-display">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-2">{label}</div>
      <div className="text-xs text-[#999]">{description}</div>
    </motion.div>
  );
}

export default function Slide02_Overview(_: Props) {
  return (
    <div className="slide-container flex bg-[#ffffff]">
      
      {/* Left: Museum Image Wall */}
      <div className="w-[45%] h-full relative overflow-hidden bg-[#f5f5f5]">
        <img 
          src="/overview.png" 
          alt="KOPA Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-20 left-20 text-white font-display text-4xl leading-tight">
          Crafting <br /> <span className="italic">Destinations</span>
        </div>
      </div>

      {/* Right: Data Exhibition */}
      <div className="w-[55%] flex flex-col justify-center px-24">
        <div className="mb-16">
          <div className="text-[0.5rem] uppercase tracking-[0.4em] text-[#c4973a] mb-6">At a Glance</div>
          <h2 className="font-display font-light text-[#1a1a1a] text-5xl leading-[0.9]">
            The Scale of <br /> <span className="italic text-[#c4973a]">the Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-12">
          <Stat number={14} suffix="L" label="Square Feet" description="Regional retail & entertainment hub" delay={0.1} />
          <Stat number={100} suffix="+" label="Premium Brands" description="Curated luxury and lifestyle mix" delay={0.2} />
          <Stat number={2} suffix="M+" label="Annual Footfall" description="Regional destination demand" delay={0.3} />
          <Stat number={3} suffix="B+" prefix="" label="Total Investment" description="Landmark architectural capital" delay={0.4} />
        </div>
      </div>
    </div>
  );
}