'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
  padding-top: calc(${({ theme }) => theme.spacing['4xl']} + 80px);
  position: relative;
`;

const HeroCard = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 1;
  background: ${({ theme }) => theme.colors.cardDark};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['3xl']};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: ${({ theme }) => theme.shadows.card};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

const Greeting = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: 0.05em;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 6vw, ${({ theme }) => theme.fontSizes['5xl']});
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 550px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.7;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.muted},
    transparent
  );
`;

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero" aria-label="Introduction">
      <HeroCard>
        <Greeting>Hi, my name is</Greeting>
        
        <Title>
          Rani Patel.
          <br />
          <HighlightText>I build things for the web.</HighlightText>
        </Title>
        
        <Subtitle>
          I&apos;m a frontend engineer passionate about accessibility, 
          intuitive interfaces, and building tools that empower developers and users.
        </Subtitle>
        
        <ButtonGroup>
          <Button onClick={scrollToAbout}>
            About Me
          </Button>
          <Button href="#contact" variant="outline">
            Get In Touch
          </Button>
        </ButtonGroup>
      </HeroCard>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        aria-hidden="true"
      >
        {/* <span>Scroll</span> */}
        <ScrollLine
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
}
