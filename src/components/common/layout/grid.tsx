'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

interface GridProps {
  children: React.ReactNode
  className?: string
  /**
   * Grid variant for different layouts
   */
  variant?: 'tours' | 'countries' | 'testimonials' | 'albums' | 'custom'
  /**
   * Custom column configuration (overrides variant)
   */
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  /**
   * Custom gap configuration
   */
  gap?: {
    x?: string
    y?: string
  }
  /**
   * Container element type
   */
  as?: keyof JSX.IntrinsicElements
}

const Grid: React.FC<GridProps> = ({ 
  children, 
  className,
  variant = 'custom',
  columns,
  gap,
  as: Component = 'div',
  ...props 
}) => {
    
    // Predefined grid variants based on design system
    const variants = {
      // 4-column layout for tour cards (responsive)
      tours: cn(
        'grid',
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        'gap-x-[16px] gap-y-[24px] lg:gap-x-[32px] lg:gap-y-[48px]'
      ),
      
      // 4-column layout for country cards with specific Figma gap
      countries: cn(
        'grid',
        'grid-cols-2 lg:grid-cols-4',
        // Gap from Figma: 105px horizontal = 5.47vw at 1920px
        'gap-x-[16px] gap-y-[24px] lg:gap-x-[5.47vw] lg:gap-y-[32px]',
        'lg:max-w-none' // Allow full width for country grid
      ),
      
      // 2-column layout for testimonials/reviews
      testimonials: cn(
        'grid',
        'grid-cols-1 lg:grid-cols-2',
        'gap-x-[16px] gap-y-[24px] lg:gap-x-[48px] lg:gap-y-[32px]'
      ),
      
      // Album/gallery grid - responsive masonry-like
      albums: cn(
        'grid',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        'gap-[16px] lg:gap-[24px]'
      ),
      
      // Custom - use provided columns and gap
      custom: ''
    }
    
    // Build custom grid classes if columns are provided
    let customClasses = ''
    if (columns && variant === 'custom') {
      const { mobile = 1, tablet = 2, desktop = 3 } = columns
      customClasses = cn(
        'grid',
        `grid-cols-${mobile}`,
        tablet && `md:grid-cols-${tablet}`,
        desktop && `lg:grid-cols-${desktop}`
      )
    }
    
    // Build custom gap classes if provided
    let gapClasses = ''
    if (gap) {
      const { x = '16px', y = '24px' } = gap
      gapClasses = cn(
        x && `gap-x-[${x}]`,
        y && `gap-y-[${y}]`
      )
    }
    
    return (
      <Component
        className={cn(
          // Apply variant styles
          variant !== 'custom' ? variants[variant] : customClasses,
          
          // Apply custom gap if provided
          gap && gapClasses,
          
          // Base responsive container styles
          'w-full',
          
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
}

Grid.displayName = 'Grid'

// Convenience components for specific grid types
const TourGrid: React.FC<Omit<GridProps, 'variant'>> = (props) => 
  <Grid variant="tours" {...props} />

const CountryGrid: React.FC<Omit<GridProps, 'variant'>> = (props) => 
  <Grid variant="countries" {...props} />

const TestimonialGrid: React.FC<Omit<GridProps, 'variant'>> = (props) => 
  <Grid variant="testimonials" {...props} />

const AlbumGrid: React.FC<Omit<GridProps, 'variant'>> = (props) => 
  <Grid variant="albums" {...props} />

export { 
  Grid,
  TourGrid,
  CountryGrid, 
  TestimonialGrid,
  AlbumGrid
}