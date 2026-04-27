export const theme = {
  colors: {
    // Pastel gradient palette (from original design)
    primary: '#B8EEFF',      // Sky blue (light for dark mode)
    secondary: '#FF76D0',    // Pink
    accent: '#76DEFF',       // Cyan
    highlight: '#FFCDB8',    // Peach
    lavender: '#DFB3FF',     // Lavender
    skyBlue: '#B8EEFF',      // Sky blue
    
    // Background gradients (pastel style)
    gradientStart: '#76DEFF',
    gradientMid: '#DFB3FF',
    gradientEnd: '#FF76D0',
    
    // Dark cards for dark mode
    cardDark: 'rgba(25, 28, 40, 0.92)',
    cardDarkHover: 'rgba(35, 38, 52, 0.95)',
    navBg: 'rgba(20, 22, 32, 0.9)',
    
    // Text colors (light for dark backgrounds)
    text: '#F0F0F5',
    textMuted: '#A0A0B8',
    textLight: '#FFFFFF',
    
    // UI colors
    cardBg: 'rgba(25, 28, 40, 0.9)',
    cardBorder: 'rgba(118, 222, 255, 0.25)',
    glowPurple: 'rgba(155, 126, 222, 0.4)',
    glowPink: 'rgba(255, 118, 208, 0.4)',
  },
  
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    glow: '0 0 40px rgba(155, 126, 222, 0.3)',
    glowPink: '0 0 40px rgba(255, 118, 208, 0.3)',
  },
  
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
    spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

export type Theme = typeof theme;
