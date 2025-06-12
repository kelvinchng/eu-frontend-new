/**
 * Design Tokens System for EU Holidays
 * 
 * All values follow responsive scaling principles:
 * - Figma designs created at 1920px (3xl breakpoint)
 * - Mobile-first approach with progressive enhancement
 * - Consistent scaling factors across breakpoints
 */

// Colors
export const colors = {
  // Primary palette
  primary: '#242424',
  secondary: '#EEEEEE',
  
  // Grays
  border: '#E8E8E8',
  muted: '#5C5C5C',
  background: '#EFEFEF',
  
  // Interactive states
  white: '#FFFFFF',
  black: '#000000',
  
  // Component specific
  formBorder: '#DCDCDC',
  paginationBg: '#F2F2F2',
  paginationBorder: '#8C8888',
  
  // Future tokens (to be defined)
  error: '#DC2626', // Placeholder
  success: '#16A34A', // Placeholder
  warning: '#EA580C', // Placeholder
} as const

// Border Radius - Progressive scale
export const borderRadius = {
  xs: '4px',
  sm: '7px',
  md: '8px',
  lg: '9px',
  xl: '12px',
  '2xl': '20px',
  '3xl': '25px',
} as const

// Shadows - Layered approach from Figma
export const shadows = {
  sm: '0 3px 3px rgba(0, 0, 0, 0.16)',
  md: '0 5px 15px rgba(0, 0, 0, 0.15)', 
  lg: '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08)',
  card: '0 3px 3px rgba(0, 0, 0, 0.16)', // Tour cards
  form: '0 5px 15px rgba(0, 0, 0, 0.15)', // Form containers
} as const

// Spacing - 8px base unit system
export const spacing = {
  0: '0',
  1: '4px',    // 0.25rem
  2: '8px',    // 0.5rem - base unit
  3: '12px',   // 0.75rem
  4: '16px',   // 1rem
  5: '20px',   // 1.25rem
  6: '24px',   // 1.5rem
  8: '32px',   // 2rem
  10: '40px',  // 2.5rem
  12: '48px',  // 3rem
  16: '64px',  // 4rem
  20: '80px',  // 5rem
  24: '96px',  // 6rem
  32: '128px', // 8rem
} as const

// Responsive breakpoints (matching Tailwind defaults + our 3xl)
export const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
  '3xl': '1920px', // Figma baseline
} as const

// Responsive scaling factors for converting Figma values
export const scalingFactors = {
  xs: 0.167,   // 320/1920
  sm: 0.333,   // 640/1920
  md: 0.4,     // 768/1920
  lg: 0.533,   // 1024/1920
  xl: 0.667,   // 1280/1920
  '2xl': 0.8,  // 1536/1920
  '3xl': 1,    // 1920/1920 (Figma baseline)
} as const

// Typography scale - Responsive font sizes
export const typography = {
  // Font families
  fonts: {
    thunder: 'Thunder, sans-serif',
    onest: 'Onest, sans-serif',
    formula: 'PPFormula-Medium, sans-serif',
  },
  
  // Responsive text sizes (mobile → desktop)
  sizes: {
    xs: 'text-xs lg:text-sm 3xl:text-[12px]',
    sm: 'text-xs lg:text-sm 3xl:text-[14px]',
    base: 'text-sm lg:text-base 3xl:text-[16px]',
    lg: 'text-sm lg:text-base 3xl:text-[18px]',
    xl: 'text-base lg:text-lg 3xl:text-[20px]',
    '2xl': 'text-lg lg:text-xl 3xl:text-[24px]',
    '3xl': 'text-xl lg:text-2xl 3xl:text-[30px]',
    '4xl': 'text-2xl lg:text-3xl 3xl:text-[36px]',
    '5xl': 'text-3xl lg:text-4xl 3xl:text-[48px]',
    '6xl': 'text-4xl lg:text-5xl 3xl:text-[60px]',
  },
  
  // Letter spacing
  letterSpacing: {
    tight: '-0.025em',  // -2.5%
    normal: '0em',
    wide: '0.03em',     // 3% 
  },
  
  // Line heights
  lineHeight: {
    tight: '0.92',      // 92% - Thunder font
    normal: '1.5',      // 150% - Onest font
    relaxed: '1.625',   // 162.5%
  },
} as const

// Component-specific tokens
export const components = {
  // Navigation
  nav: {
    height: {
      mobile: '51px',
      desktop: 'h-20 lg:h-24 xl:h-[105px] 2xl:h-[121.6px]',
      scrolled: 'h-[80px] lg:h-[90px] xl:h-[105px] 2xl:h-[121.6px]',
    },
    logo: {
      mobile: { width: '71.52px', height: '50.33px' },
      desktop: { width: '144.95px', height: '102px' },
    },
  },
  
  // Cards
  card: {
    tour: {
      width: '23.96vw',     // 460px at 1920px
      height: '33.49vw',    // 643px at 1920px
      imageHeight: '14.56vw', // 279.48px at 1920px
    },
    expert: {
      width: '24.32vw',     // 467px at 1920px
      height: '29.11vw',    // 559px at 1920px
    },
  },
  
  // Forms
  form: {
    input: {
      height: {
        sm: '35px',
        md: '45px',
        lg: '58px',
      },
    },
    container: {
      width: '35.73vw',     // 686px at 1920px
    },
  },
  
  // Buttons
  button: {
    height: {
      sm: '35px',
      md: '45px',
      lg: '51px',
    },
    loadMore: {
      width: '169px',
      height: '51px',
    },
  },
} as const

// Utility functions for responsive scaling
export const utils = {
  /**
   * Convert Figma pixel value to viewport width percentage
   * @param figmaValue - Value in pixels from Figma (at 1920px width)
   * @returns String with vw unit
   */
  toVw: (figmaValue: number): string => `${(figmaValue / 1920) * 100}vw`,
  
  /**
   * Convert Figma pixel value to percentage
   * @param figmaValue - Value in pixels from Figma (at 1920px width)  
   * @returns String with % unit
   */
  toPercent: (figmaValue: number): string => `${(figmaValue / 1920) * 100}%`,
  
  /**
   * Get scaled value for specific breakpoint
   * @param figmaValue - Value in pixels from Figma
   * @param breakpoint - Target breakpoint
   * @returns Scaled pixel value
   */
  getScaledValue: (figmaValue: number, breakpoint: keyof typeof scalingFactors): number => {
    return Math.round(figmaValue * scalingFactors[breakpoint])
  },
  
  /**
   * Generate responsive padding classes
   * @param mobilePx - Mobile padding in px
   * @param desktopVw - Desktop padding in vw
   * @returns Tailwind classes string
   */
  responsivePadding: (mobilePx: number, desktopVw: number): string => {
    return `px-[${mobilePx}px] lg:px-[${desktopVw}vw] 3xl:px-[${desktopVw * 19.2}px]`
  }
}

// Export all tokens as default
export const designTokens = {
  colors,
  borderRadius,
  shadows, 
  spacing,
  breakpoints,
  scalingFactors,
  typography,
  components,
  utils,
} as const

export default designTokens