'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BannerAction {
  label: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
}

interface BannerComponentProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  backgroundColor?: string
  textColor?: 'light' | 'dark'
  variant?: 'hero' | 'page-header' | 'promotional' | 'announcement' | 'category'
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  alignment?: 'left' | 'center' | 'right'
  overlay?: boolean
  overlayOpacity?: number
  actions?: BannerAction[]
  badge?: string
  breadcrumbs?: { label: string; href?: string }[]
  className?: string
}

export function BannerComponent({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = '#0066CC',
  textColor = 'light',
  variant = 'page-header',
  height = 'md',
  alignment = 'left',
  overlay = true,
  overlayOpacity = 0.4,
  actions = [],
  badge,
  breadcrumbs = [],
  className
}: BannerComponentProps) {
  
  const getContainerClasses = () => {
    const baseClasses = "relative overflow-hidden flex items-center w-full"
    
    // Height classes
    const heightClasses = {
      sm: "h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] xl:h-[350px] 2xl:h-[380px]",
      md: "h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]",
      lg: "h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px]",
      xl: "h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[750px]",
      full: "h-screen"
    }

    return cn(baseClasses, heightClasses[height])
  }

  const getContentClasses = () => {
    const alignmentClasses = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end"
    }

    return cn(
      "relative z-10 w-full flex flex-col justify-center",
      // Responsive padding
      "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
      "py-[24px] sm:py-[32px] md:py-[40px] lg:py-[48px] xl:py-[56px] 2xl:py-[64px]",
      alignmentClasses[alignment],
      variant === 'hero' && "min-h-[80vh] justify-center"
    )
  }

  const getTitleClasses = () => {
    const colorClasses = textColor === 'light' ? "text-white" : "text-[#242424]"
    
    const sizeClasses = {
      hero: "text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px]",
      'page-header': "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]",
      promotional: "text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px]",
      announcement: "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]",
      category: "text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px] 2xl:text-[42px]"
    }

    return cn(
      "font-thunder font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6",
      colorClasses,
      sizeClasses[variant],
      alignment === 'center' && "max-w-4xl mx-auto",
      alignment === 'left' && "max-w-4xl"
    )
  }

  const getSubtitleClasses = () => {
    const colorClasses = textColor === 'light' ? "text-white/90" : "text-[#666666]"
    
    return cn(
      "font-onest font-medium mb-2 sm:mb-3 md:mb-4",
      "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]",
      colorClasses,
      alignment === 'center' && "max-w-3xl mx-auto",
      alignment === 'left' && "max-w-3xl"
    )
  }

  const getDescriptionClasses = () => {
    const colorClasses = textColor === 'light' ? "text-white/80" : "text-[#888888]"
    
    return cn(
      "font-onest mb-4 sm:mb-6 md:mb-8",
      "text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[21px]",
      "leading-[16px] sm:leading-[18px] md:leading-[22px] lg:leading-[25px] xl:leading-[28px] 2xl:leading-[31px]",
      colorClasses,
      alignment === 'center' && "max-w-2xl mx-auto",
      alignment === 'left' && "max-w-2xl"
    )
  }

  const getActionClasses = (action: BannerAction) => {
    const baseClasses = cn(
      "inline-flex items-center gap-2 font-onest font-medium transition-all duration-200",
      // Responsive padding and border radius
      "px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] md:px-[24px] md:py-[12px] lg:px-[28px] lg:py-[14px] xl:px-[32px] xl:py-[16px]",
      "rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[14px]",
      // Responsive font size
      "text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
    )

    const variantClasses = {
      primary: cn(
        "bg-[#0066CC] text-white border border-[#0066CC]",
        "hover:bg-[#004499] hover:border-[#004499] focus:ring-2 focus:ring-blue-200"
      ),
      secondary: cn(
        "bg-white text-[#242424] border border-white",
        "hover:bg-gray-50 focus:ring-2 focus:ring-gray-200"
      ),
      outline: cn(
        textColor === 'light' 
          ? "bg-transparent text-white border border-white hover:bg-white hover:text-[#242424]"
          : "bg-transparent text-[#242424] border border-[#242424] hover:bg-[#242424] hover:text-white",
        "focus:ring-2 focus:ring-gray-200"
      )
    }

    return cn(baseClasses, variantClasses[action.variant || 'primary'])
  }

  return (
    <div className={cn(getContainerClasses(), className)}>
      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      )}

      {/* Background Color */}
      {!backgroundImage && (
        <div 
          className="absolute inset-0"
          style={{ backgroundColor }}
        />
      )}

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        <div className={getContentClasses()}>
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className={cn(
              "mb-4 sm:mb-6 md:mb-8",
              alignment === 'center' && "mx-auto"
            )}>
              <ol className="flex items-center space-x-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg className="w-4 h-4 mx-2 text-current" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {crumb.href ? (
                      <Link href={crumb.href} className={cn(
                        "hover:underline",
                        textColor === 'light' ? "text-white/80 hover:text-white" : "text-[#666666] hover:text-[#242424]"
                      )}>
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={cn(
                        textColor === 'light' ? "text-white" : "text-[#242424]"
                      )}>
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Badge */}
          {badge && (
            <div className={cn(
              "inline-block mb-3 sm:mb-4 md:mb-5",
              alignment === 'center' && "mx-auto"
            )}>
              <span className={cn(
                "bg-white/20 backdrop-blur-sm text-white rounded-full",
                "px-[12px] py-[4px] sm:px-[16px] sm:py-[6px] md:px-[20px] md:py-[8px]",
                "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]",
                "font-onest font-medium"
              )}>
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className={getTitleClasses()}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2 className={getSubtitleClasses()}>
              {subtitle}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className={getDescriptionClasses()}>
              {description}
            </p>
          )}

          {/* Actions */}
          {actions.length > 0 && (
            <div className={cn(
              "flex flex-wrap gap-3 sm:gap-4",
              alignment === 'center' && "justify-center",
              alignment === 'right' && "justify-end"
            )}>
              {actions.map((action, index) => (
                action.href ? (
                  <Link key={index} href={action.href} className={getActionClasses(action)}>
                    {action.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <button key={index} onClick={action.onClick} className={getActionClasses(action)}>
                    {action.label}
                  </button>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}