import { useState } from 'react';
import { motion } from 'framer-motion';
import { PERFORMING_ARTS } from '../../data/content';

interface EventsModuleProps {
  onClose: () => void;
}

export default function EventsModule({ onClose }: EventsModuleProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', type: '', date: '', notes: '' });

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
              <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-4">Event Booking</div>
              <h2 className="font-display font-light text-[#1a1a1a] text-4xl leading-none">Inquire Venue</h2>
            </div>
            <button onClick={onClose} className="text-[#1a1a1a] hover:text-[#c4973a] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Venue Info */}
          <div className="border-l border-[#c4973a] pl-6 mb-12">
            <div className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999] mb-4">{PERFORMING_ARTS.name}</div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {PERFORMING_ARTS.specs.map((spec, i) => (
                <div key={i}>
                  <div className="text-[0.6rem] uppercase tracking-[0.1em] text-[#ccc] mb-1">{spec.label}</div>
                  <div className="text-[#1a1a1a] font-medium text-sm">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { key: 'name', label: 'Full Name', type: 'text' },
                { key: 'company', label: 'Organization', type: 'text' },
                { key: 'email', label: 'Email Address', type: 'email' },
              ].map((field) => (
                <div key={field.key} className="border-b border-[#eee] pb-2">
                  <label className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999] block mb-2">{field.label}</label>
                  <input 
                    type={field.type} 
                    className="w-full text-[#1a1a1a] outline-none placeholder:text-[#ccc] text-sm" 
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    required
                  />
                </div>
              ))}

              <div className="border-b border-[#eee] pb-2">
                <label className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999] block mb-2">Event Type</label>
                <select 
                  className="w-full text-[#1a1a1a] outline-none bg-transparent text-sm"
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  required
                >
                  <option value="">Select type...</option>
                  <option value="concert">Live Performance</option>
                  <option value="brand">Brand Activation</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button 
  type="submit" 
  className="w-full py-4 border border-[#1a1a1a] text-[#1a1a1a] text-[0.65rem] uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all"
>
  Submit Inquiry
</button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 border border-[#f0f0f0]">
              <div className="text-[#c4973a] mb-6 text-xl">✓</div>
              <h3 className="font-display text-2xl mb-2 text-[#1a1a1a]">Inquiry Received</h3>
              <p className="text-[#666] text-sm px-8">We will be in touch within 24 hours to discuss your event requirements.</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}