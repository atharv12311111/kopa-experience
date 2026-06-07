import { motion } from 'framer-motion';

type Props = { onOpenModule: (m: 'events' | 'sponsorship' | 'leasing' | null) => void };

const CTASET = [
  { id: 'leasing' as const, eyebrow: 'Retail', title: 'Leasing' },
  { id: 'sponsorship' as const, eyebrow: 'Brand', title: 'Partnerships' },
  { id: 'events' as const, eyebrow: 'Venue', title: 'Bookings' },
];

export default function Slide16_Contact({ onOpenModule }: Props) {
  return (
    <div className="slide-container flex flex-col items-center justify-center bg-[#ffffff] px-20">
      
      {/* Header */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-6">Inquiry</div>
        <h2 className="font-display font-light text-[#1a1a1a] text-[clamp(2.5rem,5vw,5rem)] leading-none mb-6">
          Ready to make <br /> <span className="italic text-[#c4973a]">your move?</span>
        </h2>
        <p className="text-[#666] text-lg max-w-sm mx-auto">
          Our commercial team is ready to build a partnership that works for you.
        </p>
      </motion.div>

      {/* Inquiry Grid */}
      <div className="grid grid-cols-3 gap-8 w-full max-w-4xl mb-24">
        {CTASET.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => onOpenModule(c.id)}
            className="group flex flex-col items-center py-10 border border-[#f0f0f0] hover:border-[#c4973a] transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="text-[0.5rem] uppercase tracking-[0.3em] text-[#999] group-hover:text-[#c4973a] transition-colors mb-2">
              {c.eyebrow}
            </div>
            <div className="font-display text-xl text-[#1a1a1a] mb-8">
              {c.title}
            </div>
            <div className="w-8 h-[1px] bg-[#e0e0e0] group-hover:bg-[#c4973a] transition-colors" />
          </motion.button>
        ))}
      </div>

      {/* Footer Info */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a 
          href="kopacontact@lakeshorein.com" 
          className="font-display text-2xl text-[#1a1a1a] border-b border-[#1a1a1a] hover:border-[#c4973a] hover:text-[#c4973a] transition-all"
        >
          kopacontact@lakeshorein.com
        </a>
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="font-display text-[0.7rem] tracking-[0.3em] text-[#ccc]">AMERICAN</span>
          <div className="w-[20px] h-[1px] bg-[#c4973a]" />
          <span className="font-display text-[0.7rem] tracking-[0.3em] text-[#c4973a]">DREAM</span>
        </div>
      </motion.div>
    </div>
  );
}