'use client';

import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.navBg};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

const NavContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  cursor: pointer;
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.background};
  letter-spacing: -0.5px;
`;

const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a<{ $isResume?: boolean }>`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme, $isResume }) => $isResume ? theme.colors.primary : theme.colors.textMuted};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  
  ${({ theme, $isResume }) => $isResume && `
    border: 1px solid ${theme.colors.primary};
  `}
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surface};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  span {
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: all ${({ theme }) => theme.transitions.fast};
    
    &:nth-child(1) {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'translateY(-6px)'};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'translateY(6px)'};
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: ${({ theme }) => theme.spacing.lg};
  z-index: 99;
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MobileNavLink = styled.a<{ $isResume?: boolean }>`
  display: block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  color: ${({ theme, $isResume }) => $isResume ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/Rani_Resume.pdf', external: true, isResume: true },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header role="banner">
      <Nav aria-label="Main navigation">
        <NavContainer>
          <LogoLink 
            onClick={() => scrollToSection('#hero')}
            aria-label="Rani Patel - Go to top"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection('#hero')}
          >
            <LogoIcon aria-hidden="true">RP</LogoIcon>
            <LogoText>Rani Patel</LogoText>
          </LogoLink>
          
          <NavLinks role="menubar" aria-label="Main menu">
            {navItems.map((item) => (
              <NavItem key={item.label} role="none">
                <NavLink
                  role="menuitem"
                  onClick={() => handleNavClick(item.href, item.external)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNavClick(item.href, item.external)}
                  tabIndex={0}
                  $isResume={item.isResume}
                  {...(item.external && { 
                    'aria-label': `${item.label} (opens in new tab)` 
                  })}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavLinks>
          
          <MobileMenuButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            $isOpen={mobileMenuOpen}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </MobileMenuButton>
        </NavContainer>
      </Nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="menu"
            aria-label="Mobile navigation"
          >
            <MobileNavLinks>
              {navItems.map((item) => (
                <li key={item.label} role="none">
                  <MobileNavLink
                    role="menuitem"
                    onClick={() => handleNavClick(item.href, item.external)}
                    $isResume={item.isResume}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNavClick(item.href, item.external)}
                  >
                    {item.label}
                  </MobileNavLink>
                </li>
              ))}
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </header>
  );
}
