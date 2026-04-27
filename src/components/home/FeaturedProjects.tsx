'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Card, Button } from '@/components/ui';
import { featuredProjects } from '@/data/projects';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
`;

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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: rgba(118, 222, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.accent};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const IconLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export default function FeaturedProjects() {
  return (
    <Section id="projects">
      <Header>
        <div>
          <SectionLabel
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Featured Work
          </SectionLabel>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Things I&apos;ve Built
          </Title>
        </div>
        <Button variant="outline" size="sm" href="/projects">
          View All Projects →
        </Button>
      </Header>
      
      <ProjectsGrid>
        {featuredProjects.slice(0, 4).map((project, index) => (
          <ProjectCard key={project.id} glow={index % 2 === 0 ? 'purple' : 'pink'}>
            {project.videoUrl && (
              <VideoContainer>
                <video controls preload="metadata">
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              </VideoContainer>
            )}
            
            <ProjectContent>
              <ProjectTitle>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </ProjectTitle>
              
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ProjectLinks>
                {project.githubUrl && (
                  <IconLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </IconLink>
                )}
                {project.liveUrl && (
                  <IconLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </IconLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
}
