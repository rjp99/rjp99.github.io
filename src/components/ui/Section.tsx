'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
  dark?: boolean;
}

const StyledSection = styled.section<{ $fullHeight: boolean }>`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  min-height: ${({ $fullHeight }) => ($fullHeight ? '100vh' : 'auto')};
  display: ${({ $fullHeight }) => ($fullHeight ? 'flex' : 'block')};
  align-items: ${({ $fullHeight }) => ($fullHeight ? 'center' : 'stretch')};
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['3xl']} 0;
  }
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const ContentCard = styled.div`
  background: ${({ theme }) => theme.colors.cardDark};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['3xl']};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: 0 10px 40px rgba(155, 126, 222, 0.15);
`;

export default function Section({
  children,
  id,
  className,
  fullHeight = false,
  dark = true,
}: SectionProps) {
  return (
    <StyledSection id={id} className={className} $fullHeight={fullHeight}>
      <Container
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {dark ? <ContentCard>{children}</ContentCard> : children}
      </Container>
    </StyledSection>
  );
}
