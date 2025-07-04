'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

interface TourTagBadgeProps {
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export function TourTagBadge({ 
  children, 
  className,
  icon
}: TourTagBadgeProps) {
  // Generate unique IDs for SVG to avoid conflicts
  const uniqueId = React.useId()
  const patternId = `pattern-${uniqueId}`
  const imageId = `image-${uniqueId}`

  // Default bag icon if none provided - Mobile-first sizing
  const defaultIcon = (
    <svg
      className="w-[15px] h-[14px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] xl:w-[14px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[15px]"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={patternId}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={`#${imageId}`}
            transform="matrix(0.0108344 0 0 0.0111111 0.0124526 0)"
          />
        </pattern>
        <image
          id={imageId}
          width="90"
          height="90"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqklEQVR4nO2dSYoUQRSGPxBErJW7VsEBdeUJFBucjiCu9AxO0LpTsNsrqH0B8Qza6kZc6K4HRUTQpZYLtXBA5ElAJiTS2U1lZ756Ufl/8FMQSUVUfEQOlUMkCCFE9pwCFoHXwAiwMTMqvnsfODnpzkTkELDUQOxmeQQcnHTnonAcGHYgucxn4Bg95wDwqUPJZYbFWtNbHjtILvOEnnLaUXKZXu4gF2tk/ASuADMN6twNXC3qWK/ue/SQNzUykuStcq2m7jV6yPcaGU1G8v/M1NT9jR5iNcml/mwwiZboqcI0oiV6qjCNaImeKkwjWqKzYhtwHngIvN/g/MMkU16RSeddzpIhs8BqAJE2Zp4BR8iEi8DvANKsYb4UAyU0afX7E0CWtSD7MEHZAXwMIMla3IyE5HIAOdZyzhCQFwHEWMtJ94eEYjvwN4AYaznp0C8U+wNIsQ6SrgKF4mgAKdZRQiHRTki0ExLthEQ7IdFOSLQTEu2ERDsh0U5ItBMS7YREOyHRTki0ExLthEQ7IdFOSLQTEu2ERDsh0U5ItBMS7YREOyHRTkh05qJ/AXPAng3aTsuud/iUQS9Ez43xG5JsiaaZhDSjzFbn6NCIpl3ReyUal03HDYlGO8O20OGdExLthEQ7IdFOSLQTEu2ERDsh0U5ItBP7Ovr7axPOV4IxrQ/drxGQ5wHEWMu5S0AuBRBjLSdNjx9yqp8PAeRYS3lKYGYznyHMcpi8quRC5rKHwAkyelvQcgBpNmaWcnwxTpoy8xzwAHgH/Aggcr2pfFaL14aE3PE1ZaXSydvALmC+UraSaVvhGFU6urMoG1TKRpm2FY6VSkfni1G2UClbzrStcNzZZJu5kGlb4RgAr2o6/rJYnmNbIRkAt4C3xU2M6fNmZTuaa1tCCEHL/AM17o7ez0bTNQAAAABJRU5ErkJggg=="
        />
      </defs>
      <rect
        y="0.0878906"
        width="26"
        height="25.3525"
        fill={`url(#${patternId})`}
      />
    </svg>
  )

  return (
    <div 
      className={cn(
        "flex items-center border w-full",
        // Mobile-first border radius - Base 7px for mobile (from Figma tag radius)
        "rounded-[7px] md:rounded-[5px] lg:rounded-[6px] xl:rounded-[7px] 2xl:rounded-[7px]",
        // Mobile-first height - Base 30px for mobile (from Figma tag height)
        "h-[30px] md:h-[25px] lg:h-[30px] xl:h-[36px] 2xl:h-[38px]",
        // Mobile-first horizontal padding - Base 13px for mobile
        "px-[13px] md:px-[11px] lg:px-[13px] xl:px-[15px] 2xl:px-[16px]",
        className
      )}
      style={{ borderColor: '#E8E8E8' }}
    >
      <div className={cn(
        "flex items-center",
        // Mobile-first gap between icon and text - Base 9px for mobile (from Figma)
        "gap-[9px] md:gap-[6px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[9px]"
      )}>
        {/* Icon */}
        {icon || defaultIcon}
        
        {/* Text */}
        <span className={cn(
          "font-onest",
          // Reduced font size for smaller cards
          "text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[13px]"
        )} style={{ color: designTokens.colors.primary }}>
          {children}
        </span>
      </div>
    </div>
  )
}