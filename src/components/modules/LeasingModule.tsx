import { useState } from 'react';
import { motion } from 'framer-motion';
import { LEASING_PATHS } from '../../data/content';

interface LeasingModuleProps {
  onClose: () => void;
}

export default function LeasingModule({ onClose }: LeasingModuleProps) {
  const [activePath, setActivePath] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', size: '' });
  const path = LEASING_PATHS[activePath]!;

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
              <div className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c4973a] mb-4">Retail Leasing</div>
              <h2 className="font-display font-light text-[#1a1a1a] text-4xl leading-none">Find Your Space</h2>
            </div>
            <button onClick={onClose} className="text-[#1a1a1a] hover:text-[#c4973a] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Path Selector */}
          <div className="flex gap-4 mb-12">
            {LEASING_PATHS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActivePath(i)}
                className={`text-[0.5rem] uppercase tracking-[0.2em] pb-2 border-b transition-colors ${
                  activePath === i ? 'border-[#c4973a] text-[#1a1a1a]' : 'border-transparent text-[#ccc]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Active path detail */}
          <motion.div 
            key={path.id}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mb-16 border-l border-[#c4973a] pl-6"
          >
            <h3 className="font-display text-xl text-[#1a1a1a] mb-4">{path.tagline}</h3>
            <p className="text-sm text-[#666] leading-relaxed mb-8">{path.description}</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Min. Size', value: path.minSize },
                { label: 'Location', value: path.location },
                { label: 'Demographics', value: path.demographics },
              ].map((spec, i) => (
                <div key={i}>
                  <div className="text-[0.5rem] uppercase tracking-[0.1em] text-[#999] mb-1">{spec.label}</div>
                  <div className="text-[0.8rem] font-medium text-[#1a1a1a]">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { key: 'name', label: 'Contact Name' },
                { key: 'company', label: 'Brand / Company' },
                { key: 'email', label: 'Email Address' },
                { key: 'size', label: 'Approx. Size Needed' },
              ].map((field) => (
                <div key={field.key} className="border-b border-[#eee] pb-2">
                  <label className="text-[0.5rem] uppercase tracking-[0.2em] text-[#999] block mb-2">{field.label}</label>
                  <input 
                    type="text"
                    className="w-full text-[#1a1a1a] outline-none placeholder:text-[#ccc] text-sm" 
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    required
                  />
                </div>
              ))}
              <button type="submit" className="w-full py-4 border border-[#1a1a1a] text-[0.65rem] uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all">
                {path.cta}
              </button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 border border-[#f0f0f0]">
              <h3 className="font-display text-2xl mb-2 text-[#1a1a1a]">Inquiry Received</h3>
              <p className="text-[#666] text-sm">Our leasing team will be in touch within 24 hours.</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}