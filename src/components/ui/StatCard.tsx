import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';

interface StatCardProps {
  number: number;
  suffix?: string;
  prefix?: string;
  unit?: string;
  label: string;
  description?: string;
  decimals?: number;
  delay?: number;
}

export default function StatCard({
  number,
  suffix = '',
  prefix = '',
  unit,
  label,
  description,
  decimals = 0,
  delay = 0,
}: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCountUp({ end: number, decimals, duration: 2200, enabled: inView });

  return (
    <motion.div
      ref={ref}
      className="deck-card p-8 md:p-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {unit && (
        <div className="section-label mb-4">{unit}</div>
      )}
      <div className="stat-number text-6xl md:text-7xl lg:text-8xl mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-white font-display text-xl md:text-2xl mb-3 font-light">{label}</div>
      {description && (
        <p className="text-sm leading-relaxed" style={{ color: 'var(--white-60)' }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
