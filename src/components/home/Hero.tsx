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
  overflow: hidden;
`;

const HeroCard = styled(motion.div)`
  max-width: 900px;
  text-align: center;
  z-index: 1;
  background: ${({ theme }) => theme.colors.cardDark};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['3xl']};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: 0 10px 40px rgba(155, 126, 222, 0.15);
`;

const Greeting = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, ${({ theme }) => theme.fontSizes['6xl']});
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  
  span {
    display: block;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 50%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
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
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ScrollLine = styled(motion.div)`
  width: 2px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primary},
    transparent
  );
`;

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero">
      <HeroCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, my name is
        </Greeting>
        
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span>Rani Patel.</span>
          <GradientText>I build things for the web.</GradientText>
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I&apos;m a full stack software engineer with a passion for frontend design, 
          intuitive interfaces, and building tools that make developers and users feel empowered.
        </Subtitle>
        
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button onClick={scrollToAbout} size="lg">
            Learn More
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Get In Touch
          </Button>
        </ButtonGroup>
      </HeroCard>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span>Scroll</span>
        <ScrollLine
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
}
