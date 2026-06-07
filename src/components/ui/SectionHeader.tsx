import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  const align = centered ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col gap-4 ${align}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          {!centered && <div className="gold-line-left w-10" />}
          <span className="section-label">{eyebrow}</span>
        </div>
      )}
      <h2
        className="font-display font-light leading-tight"
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          color: light ? '#fff' : '#fff',
          lineHeight: 1.05,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg font-light leading-relaxed max-w-2xl"
          style={{ color: 'var(--white-60)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
