import { motion } from 'framer-motion';

interface DeckNavigationProps {
  current: number;
  total: number;
  onGoTo: (index: number) => void;
  onMenuToggle: () => void;
  slideTitle?: string;
}

export default function DeckNavigation({
  current,
  total,
  onGoTo,
  onMenuToggle,
  slideTitle,
}: DeckNavigationProps) {
  const canPrev = current > 0;
  const canNext = current < total - 1;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
      style={{
        height: 56,
        background: 'rgba(8,8,8,0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Left: Prev button */}
      <button
        onClick={() => canPrev && onGoTo(current - 1)}
        disabled={!canPrev}
        className="flex items-center gap-2 bg-transparent border-0 cursor-pointer transition-colors duration-200"
        style={{
          color: canPrev ? '#fff' : 'var(--white-20)',
          minWidth: 80,
        }}
        aria-label="Previous slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs tracking-widest hidden md:block" style={{ letterSpacing: '0.15em' }}>PREV</span>
      </button>

      {/* Center: Logo + slide counter */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 hide-mobile">
          <span
            className="font-display font-light text-white"
            style={{ fontSize: '0.7rem', letterSpacing: '0.3em' }}
          >
            THE
          </span>
          <div className="w-px h-3" style={{ background: 'var(--gold)' }} />
          <span
            className="font-display font-light"
            style={{ fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)' }}
          >
            KOPA
          </span>
        </div>
         
        

        {/* Slide title */}
        {slideTitle && (
          <span
            className="text-xs tracking-widest hidden lg:block"
            style={{ color: 'var(--white-40)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
          >
            {slideTitle}
          </span>
        )}
      </div>

      {/* Right: Next + Menu */}
      <div className="flex items-center gap-4" style={{ minWidth: 80, justifyContent: 'flex-end' }}>
        <button
          onClick={() => canNext && onGoTo(current + 1)}
          disabled={!canNext}
          className="flex items-center gap-2 bg-transparent border-0 cursor-pointer transition-colors duration-200"
          style={{ color: canNext ? '#fff' : 'var(--white-20)' }}
          aria-label="Next slide"
        >
          <span className="text-xs tracking-widest hidden md:block" style={{ letterSpacing: '0.15em' }}>NEXT</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Menu button */}
        <button
          onClick={onMenuToggle}
          className="flex flex-col gap-1 bg-transparent border-0 cursor-pointer p-1.5"
          style={{ color: '#fff' }}
          aria-label="Open slide menu"
        >
          <span className="block w-5 h-px bg-current" />
          <span className="block w-3.5 h-px bg-current" />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>
    </motion.div>
  );
}
