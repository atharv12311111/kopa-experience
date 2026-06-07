import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPONSORSHIP_TIERS } from '../../data/content';

interface SponsorshipModuleProps {
  onClose: () => void;
}

export default function SponsorshipModule({ onClose }: SponsorshipModuleProps) {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="module-overlay flex items-center justify-end bg-black/20 backdrop-blur-sm">
      <motion.div
        className="h-full overflow-y-auto bg-white"
        style={{ width: '100%', maxWidth: 600 }}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="p-16">
          {/* Header */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-4">Brand Partnerships</div>
              <h2 className="font-display font-light text-[#1a1a1a] text-4xl leading-none">Sponsorship Tiers</h2>
            </div>
            <button onClick={onClose} className="text-[#1a1a1a] hover:text-[#c4973a] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mb-16 py-8 border-y border-[#eee]">
            {[
              { val: '40M+', label: 'Annual Visitors' },
              { val: '18–45', label: 'Core Demographic' },
              { val: '65%', label: 'Return Visitors' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl text-[#1a1a1a] font-light mb-1">{item.val}</div>
                <div className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999]">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Tiers List */}
          <div className="space-y-6 mb-16">
            {SPONSORSHIP_TIERS.map((tier, i) => (
              <div 
                key={i} 
                className={`border-b border-[#eee] pb-6 cursor-pointer transition-all ${selectedTier === i ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                onClick={() => setSelectedTier(selectedTier === i ? null : i)}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[0.6rem] uppercase tracking-[0.2em] text-[#c4973a]">{tier.label}</div>
                  <div className="text-sm font-medium text-[#1a1a1a]">{tier.price}</div>
                </div>
                <div className="text-xl font-display font-light text-[#1a1a1a] mb-2">{tier.name}</div>
                
                <AnimatePresence>
                  {selectedTier === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="text-sm text-[#666] leading-relaxed mb-4">{tier.description}</p>
                      <ul className="space-y-2">
                        {tier.perks.map((perk, j) => (
                          <li key={j} className="text-[0.7rem] uppercase tracking-[0.1em] text-[#999] flex items-center gap-2">
                            <span className="text-[#c4973a]">✦</span> {perk}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 pt-8 border-t border-[#eee]">
              <div className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999] mb-4">Express Interest</div>
              {[
                { key: 'company', label: 'Company / Brand Name', type: 'text' },
                { key: 'email', label: 'Email Address', type: 'email' },
              ].map((field) => (
                <div key={field.key} className="border-b border-[#eee] pb-2">
                  <label className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999] block mb-2">{field.label}</label>
                  <input 
                    type={field.type} 
                    className="w-full text-[#1a1a1a] outline-none placeholder:text-[#ccc] text-sm" 
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    onChange={(e) => field.key === 'company' ? setCompany(e.target.value) : setEmail(e.target.value)}
                    required
                  />
                </div>
              ))}
              <button 
  type="submit" 
  className="w-full py-4 border border-[#1a1a1a] text-[#1a1a1a] text-[0.65rem] uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
>
  Request Partnership Deck
</button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 border border-[#f0f0f0]">
              <h3 className="font-display text-2xl mb-2 text-[#1a1a1a]">Thank You</h3>
              <p className="text-[#666] text-sm">Our partnerships team will be in touch with you soon</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}