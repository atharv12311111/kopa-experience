import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

export default function Slide03_Location(_: Props) {
  const { ref,_inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="slide-container flex flex-col md:flex-row" style={{ background: '#ffffff', overflow: 'hidden' }}>
      
      {/* Left: Content */}
      <motion.div
        className="flex-1 md:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16"
        style={{ paddingBottom: 64, paddingTop: 32 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div style={{ width: 40, height: 1, background: '#c4973a' }} />
          <span style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }}>Location & Access</span>
        </div>

        <h2 className="font-display font-light text-[#1a1a1a] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}>
          The Best Address<br />
          <em style={{ color: '#c4973a', fontStyle: 'italic' }}>in Pune</em>
        </h2>

        <div className="space-y-4 mb-8">
          {[
            { stat: '1 km', desc: 'from Westin' },
            { stat: '10 km', desc: 'to Pune Airport' },
            { stat: '20M', desc: 'People within a 30-minute drive' },
            { stat: '30M', desc: 'People within a 60-minute drive' },
            { stat: '140M', desc: 'Pune metro area tourists annually' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-baseline gap-4"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <span className="font-display font-light flex-shrink-0" style={{ fontSize: '1.4rem', color: '#c4973a', minWidth: 100 }}>{item.stat}</span>
              <span className="text-sm text-[#666]" style={{ lineHeight: 1.4 }}>{item.desc}</span>
            </motion.div>
          ))}
        </div>

        <div className="p-4 border border-[#e5e5e5] bg-[#fcfcfc]">
          <p className="text-sm text-[#555]" style={{ lineHeight: 1.7 }}>
            Address: KOPA Mall, 37 H.NO.3 PLUS 4 BY 2, Village Ghorpadi, Mundhwa Road, Pune, Maharashtra, 411001
          </p>
        </div>
      </motion.div>

      {/* Right: Map */}
      <motion.div
        ref={ref}
        className="relative flex-1 md:w-1/2"
        style={{ minHeight: '45vh', background: '#f5f5f5' }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        
        <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/location.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        
       
      </motion.div>
    </div>
  );
}