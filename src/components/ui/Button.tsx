'use client';

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const sizeStyles = {
  sm: css`
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: 0.75rem 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.base};
  `,
  lg: css`
    padding: 1rem 2rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    font-weight: 600;
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.accent};
      transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surfaceHover};
      border-color: ${({ theme }) => theme.colors.cardBorderHover};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    
    &:hover:not(:disabled) {
      background: rgba(232, 180, 188, 0.1);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};
    
    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.text};
      background: ${({ theme }) => theme.colors.surface};
    }
  `,
};

const baseButtonStyles = css<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  border: none;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const StyledButton = styled(motion.button)<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  ${baseButtonStyles}
`;

const StyledLink = styled(motion.a)<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  ${baseButtonStyles}
`;

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  href,
  ...props
}: ButtonProps) {
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <StyledLink
        href={href}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...motionProps}
        {...props}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...motionProps}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
