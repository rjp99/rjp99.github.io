export const theme = {
  colors: {
    // Slate & Rose Palette - Cohesive and accessible
    primary: '#E8B4BC',      // Dusty rose - main accent
    secondary: '#F4D6DA',    // Light rose - secondary accent
    accent: '#D4919A',       // Deeper rose - for emphasis
    muted: '#8B7E82',        // Muted mauve - subtle elements
    
    // Background colors
    background: '#1A1B1E',   // Deep slate
    surface: '#242529',      // Elevated surface
    surfaceHover: '#2D2E33', // Hover state
    
    // Card colors with better contrast
    cardDark: 'rgba(36, 37, 41, 0.95)',
    cardDarkHover: 'rgba(45, 46, 51, 0.98)',
    navBg: 'rgba(26, 27, 30, 0.95)',
    
    // Text colors - WCAG AA compliant
    text: '#F5F5F7',         // Primary text - 15.8:1 contrast
    textMuted: '#9CA3AF',    // Muted text - 5.4:1 contrast
    textLight: '#FFFFFF',
    
    // UI colors
    cardBg: 'rgba(36, 37, 41, 0.9)',
    cardBorder: 'rgba(232, 180, 188, 0.2)',
    cardBorderHover: 'rgba(232, 180, 188, 0.4)',
    
    // Glow effects
    glowPrimary: 'rgba(232, 180, 188, 0.3)',
    glowSecondary: 'rgba(244, 214, 218, 0.2)',
    
    // Semantic colors
    success: '#6EE7B7',
    error: '#F87171',
    warning: '#FBBF24',
    
    // Focus ring for accessibility
    focus: 'rgba(232, 180, 188, 0.6)',
  },
  
  fonts: {
    heading: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif",
    body: "var(--font-inter), 'Inter', system-ui, sans-serif",
    mono: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3.5rem',
    '6xl': '4rem',
    '7xl': '5rem',
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
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    md: '0 4px 12px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.2)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.25)',
    card: '0 4px 24px rgba(0, 0, 0, 0.12)',
    glow: '0 0 40px rgba(232, 180, 188, 0.2)',
    glowStrong: '0 0 60px rgba(232, 180, 188, 0.3)',
  },
  
  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '400ms ease',
    spring: '400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

export type Theme = typeof theme;
