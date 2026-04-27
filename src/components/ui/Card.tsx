'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  glow?: 'purple' | 'pink' | 'none';
  className?: string;
}

const StyledCard = styled(motion.div)<{ $glow: string }>`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
    opacity: 0.5;
  }
  
  ${({ $glow, theme }) =>
    $glow === 'purple' &&
    `
    box-shadow: ${theme.shadows.glow};
  `}
  
  ${({ $glow, theme }) =>
    $glow === 'pink' &&
    `
    box-shadow: ${theme.shadows.glowStrong};
  `}
`;

export default function Card({
  children,
  hover = true,
  glow = 'none',
  className,
}: CardProps) {
  return (
    <StyledCard
      className={className}
      $glow={glow}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
    >
      {children}
    </StyledCard>
  );
}
