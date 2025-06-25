import React from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

/**
 * Standardized responsive container based on Figma 1920px baseline
 * Provides consistent padding and max-width across all breakpoints
 */
export function ResponsiveContainer({ 
  children, 
  className,
  as: Component = 'div' 
}: ResponsiveContainerProps) {
  return (
    <Component 
      className={cn(
        // Consistent max-width and centering
        "w-full max-w-[1920px] mx-auto",
        // Responsive padding scaling from Figma baseline (220px at 1920px = 11.46%)
        "px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 2xl:px-44 3xl:px-[220px]",
        className
      )}
    >
      {children}
    </Component>
  )
}

interface ResponsiveSectionProps {
  children: React.ReactNode
  className?: string
  paddingY?: 'small' | 'medium' | 'large' | 'none'
}

/**
 * Standardized section wrapper with responsive vertical padding
 */
export function ResponsiveSection({ 
  children, 
  className,
  paddingY = 'medium'
}: ResponsiveSectionProps) {
  const getPaddingY = () => {
    switch (paddingY) {
      case 'small':
        return 'py-8 md:py-12 lg:py-16'
      case 'medium':
        return 'py-12 md:py-16 lg:py-20'
      case 'large':
        return 'py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32'
      case 'none':
        return ''
      default:
        return 'py-12 md:py-16 lg:py-20'
    }
  }

  return (
    <section className={cn(getPaddingY(), className)}>
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </section>
  )
}