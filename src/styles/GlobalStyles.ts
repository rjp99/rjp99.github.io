import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    line-height: 1.7;
    letter-spacing: -0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  p {
    line-height: 1.8;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  /* Accessible focus states */
  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  /* Skip link for accessibility */
  .skip-link {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    padding: 0.75rem 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-weight: 600;
    z-index: 9999;
    
    &:focus {
      top: 1rem;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.muted};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
