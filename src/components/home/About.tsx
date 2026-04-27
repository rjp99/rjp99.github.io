'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui';

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: -1;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  padding: 4px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: calc(${({ theme }) => theme.borderRadius.xl} - 4px);
    background: ${({ theme }) => theme.colors.cardDark};
  }
  
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: calc(${({ theme }) => theme.borderRadius.xl} - 4px);
  }
`;

const ImageGlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.glowPurple},
    ${({ theme }) => theme.colors.glowPink}
  );
  filter: blur(60px);
  opacity: 0.5;
  z-index: -1;
  top: 20px;
  left: 20px;
`;

const Content = styled.div``;

const SectionLabel = styled(motion.span)`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Description = styled(motion.div)`
  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.8;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SkillsList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SkillTag = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: rgba(118, 222, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.accent};
`;

const skills = [
  'React', 'TypeScript', 'JavaScript', 'Python', 'Java',
  'Node.js', 'Next.js', 'MongoDB', 'AWS', 'Docker',
  'Swift', 'Git', 'CI/CD', 'CSS/SCSS', 'HTML'
];

export default function About() {
  return (
    <Section id="about">
      <AboutGrid>
        <Content>
          <SectionLabel
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </SectionLabel>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building digital experiences that matter
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              I thrive at the intersection of design and engineering — where accessibility, 
              clarity, and functionality come together. My work focuses on creating intuitive 
              interfaces that empower both developers and end users.
            </p>
            <p>
              I love learning, designing, and refining. I am currently focused on expanding 
              my skills in design systems, observability, and frontend performance. Looking ahead, 
              I want to continue building developer tools and user interfaces that bridge 
              functionality with clarity and make software a little more human.
            </p>
          </Description>
          
          <SkillsList
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skills.map((skill, index) => (
              <SkillTag
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: 'currentColor' }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillsList>
        </Content>
        
        <ImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProfileImage>
            <ImageGlow />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/rani.png" alt="Rani Patel" />
          </ProfileImage>
        </ImageContainer>
      </AboutGrid>
    </Section>
  );
}
