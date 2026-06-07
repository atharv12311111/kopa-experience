import React from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'outline' | 'ghost';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function CTAButton({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  icon,
}: CTAButtonProps) {
  const cls = `${variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : 'btn-ghost'} ${className}`;

  const inner = (
    <motion.span
      className={cls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      role={href ? undefined : 'button'}
      style={{ cursor: 'pointer' }}
    >
      {children}
      {icon ?? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 7h12M8 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </motion.span>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{inner}</a>;
  }

  return inner;
}
