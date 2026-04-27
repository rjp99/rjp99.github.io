'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui';

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
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.muted}
    );
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 10px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing['3xl']};
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 3px solid ${({ theme }) => theme.colors.cardDark};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 4px;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const JobTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text};
`;

const Company = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const DateRange = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.cardBg};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DescriptionItem = styled.li`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;
  
  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: rgba(118, 222, 255, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.accent};
`;

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Sonatype',
    dateRange: 'Aug 2022 – Dec 2025',
    description: [
      'Contributed extensively to Nexus Repository, including the open-source Community Edition',
      'Led UI/UX improvements in analytics and cloud features, delivering over 40 meaningful contributions',
      'Modernized React and Java codebases spanning feature work, release automation, and public-facing tools',
      'Served as Release Captain, streamlining CI/CD and deployment processes',
      'Built reusable components for the Gallery design system including Drawer, Modal, and form components',
    ],
    technologies: ['React', 'TypeScript', 'Java', 'REST APIs', 'CI/CD', 'Docker'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Sonatype',
    dateRange: 'May 2022 – Aug 2022',
    description: [
      'Developed features for Nexus Repository Manager using React and Java',
      'Implemented automated testing and improved code coverage',
      'Collaborated with cross-functional teams on agile development practices',
    ],
    technologies: ['React', 'Java', 'Jenkins', 'Git'],
  },
  {
    title: 'Web Developer Intern',
    company: 'Dow Jones (Barron\'s)',
    dateRange: 'May 2021 – Aug 2021',
    description: [
      'Built a full-stack MERN + AWS internal tool to automate sponsor and university onboarding for Barron\'s, including data ingestion, scraping, and visualization workflows',
      'Developed real-time futures (stocks) UI components for the Barron\'s website using React and Next.js, integrating live market data APIs to support dynamic financial content',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS'],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionLabel
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </SectionLabel>
      
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Where I&apos;ve Worked
      </Title>
      
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <JobHeader>
              <JobTitle>
                {exp.title} <Company>@ {exp.company}</Company>
              </JobTitle>
              <DateRange>{exp.dateRange}</DateRange>
            </JobHeader>
            
            <Description>
              {exp.description.map((item, i) => (
                <DescriptionItem key={i}>{item}</DescriptionItem>
              ))}
            </Description>
            
            <TechTags>
              {exp.technologies.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechTags>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}
