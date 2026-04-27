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
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.secondary});
    color: #1A1A24;
    box-shadow: 0 4px 20px rgba(118, 222, 255, 0.4);
    font-weight: 600;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 30px rgba(118, 222, 255, 0.5);
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.cardDark};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
      color: #1A1A24;
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: #FFFFFF;
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
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
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  text-decoration: none;
  border: none;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  
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
