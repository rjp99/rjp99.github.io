'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui';

const SectionLabel = styled(motion.span)`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const EducationGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardDark};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 30px ${({ theme }) => theme.colors.glowPurple};
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Degree = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const DateBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accent};
  background: rgba(118, 222, 255, 0.1);
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const Institution = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Details = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin: 0;
`;

const GPA = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const CurrentBadge = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.secondary});
  color: #1A1A24;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const education = [
  {
    degree: 'Professional Certificate: Generative AI and Agents for Software Development',
    institution: 'McCombs School of Business, The University of Texas at Austin',
    year: '2026',
    current: true,
    details: '14-week program covering LLM integration, AI agents with LangChain, prompt engineering, full-stack development with MERN stack, and AWS deployment. Tools: ChatGPT, GitHub Copilot, OpenAI API, Claude, React, Node.js, MongoDB.',
  },
  {
    degree: 'Master of Science: Software Engineering',
    institution: 'University of Houston Clear Lake',
    year: '2022',
    current: false,
    details: 'Software Project Management Specialization',
    gpa: '3.9',
  },
  {
    degree: 'Bachelor of Science: Biochemistry',
    institution: 'The University of Texas at Austin',
    year: '2021',
    current: false,
    details: 'Computer Science Minor (27 hrs) • Coursework: Data Analytics, Graphics + Visualization, Software Engineering, Bioinformatics, Game Development, Web Programming, Agile Development',
  },
];

export default function Education() {
  return (
    <Section id="education">
      <SectionLabel
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </SectionLabel>
      
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Academic Background
      </Title>
      
      <EducationGrid>
        {education.map((edu, index) => (
          <EducationCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CardHeader>
              <div>
                <Degree>{edu.degree}</Degree>
                <Institution>{edu.institution}</Institution>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {edu.current && <CurrentBadge>In Progress</CurrentBadge>}
                <DateBadge>{edu.year}</DateBadge>
              </div>
            </CardHeader>
            <Details>
              {edu.details}
              {edu.gpa && <> • <GPA>GPA: {edu.gpa}</GPA></>}
            </Details>
          </EducationCard>
        ))}
      </EducationGrid>
    </Section>
  );
}
