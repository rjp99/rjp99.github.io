'use client';

import styled from 'styled-components';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
  withCard?: boolean;
}

const StyledSection = styled.section<{ $fullHeight: boolean }>`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  min-height: ${({ $fullHeight }) => ($fullHeight ? '100vh' : 'auto')};
  display: ${({ $fullHeight }) => ($fullHeight ? 'flex' : 'block')};
  align-items: ${({ $fullHeight }) => ($fullHeight ? 'center' : 'stretch')};
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
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
  padding: ${({ theme }) => theme.spacing['2xl']};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: border-color ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.cardBorderHover};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export default function Section({
  children,
  id,
  className,
  fullHeight = false,
  withCard = true,
}: SectionProps) {
  return (
    <StyledSection id={id} className={className} $fullHeight={fullHeight}>
      <Container>
        {withCard ? <ContentCard>{children}</ContentCard> : children}
      </Container>
    </StyledSection>
  );
}
