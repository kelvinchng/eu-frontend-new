'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

// Hook to detect mobile/desktop
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

interface CarouselSectionProps<T> {
  title: string
  subtitle?: string
  viewAllLink: string
  viewAllText?: string
  items: T[]
  renderCard: (item: T) => React.ReactNode
  itemsPerSlide?: number
  gap?: number
  backgroundColor?: string
  sectionClassName?: string
  titleMarginBottom?: string
  containerMaxWidth?: string
  paddingY?: string
  titleAlignment?: 'left' | 'center'
  hideViewAll?: boolean
}

export function CarouselSection<T extends { id: string }>({
  title,
  subtitle,
  viewAllLink,
  viewAllText = 'View all here',
  items,
  renderCard,
  itemsPerSlide = items.length,
  gap = 50,
  backgroundColor,
  sectionClassName,
  titleMarginBottom = 'mb-8',
  containerMaxWidth = 'max-w-[1480px]',
  paddingY = 'py-2',
  titleAlignment = 'center',
  hideViewAll = false
}: CarouselSectionProps<T>) {
  // Convert gap to appropriate Tailwind class
  const getGapClass = (gapValue: number) => {
    const gapMap: Record<number, string> = {
      10: 'gap-[10px]',
      15: 'gap-[15px]',
      20: 'gap-[20px]',
      25: 'gap-[25px]',
      30: 'gap-[30px]',
      35: 'gap-[35px]',
      40: 'gap-[40px]',
      45: 'gap-[45px]',
      50: 'gap-[50px]'
    }
    return gapMap[gapValue] || 'gap-[30px]'
  }
  
  const gapClass = getGapClass(gap)
  
  // Get mobile spacing class
  const getMobileSpacing = (gapValue: number) => {
    const spacingMap: Record<number, string> = {
      10: 'pr-[10px]',
      15: 'pr-[15px]',
      20: 'pr-[20px]',
      25: 'pr-[25px]',
      30: 'pr-[30px]',
      35: 'pr-[35px]',
      40: 'pr-[40px]',
      45: 'pr-[45px]',
      50: 'pr-[50px]'
    }
    return spacingMap[gapValue] || 'pr-[30px]'
  }
  const isMobile = useIsMobile()
  
  // Responsive items per slide: 1 on mobile, original value on desktop
  const responsiveItemsPerSlide = isMobile ? 1 : itemsPerSlide
  
  // Group items into chunks based on responsive itemsPerSlide
  const itemChunks = []
  if (responsiveItemsPerSlide < items.length) {
    for (let i = 0; i < items.length; i += responsiveItemsPerSlide) {
      itemChunks.push(items.slice(i, i + responsiveItemsPerSlide))
    }
  } else {
    itemChunks.push(items)
  }
  
  // Show carousel if there are multiple chunks OR if on mobile with multiple items
  const showCarousel = itemChunks.length > 1 || (isMobile && items.length > 1)
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: false,
    slidesToScroll: 1,
    skipSnaps: false,
    active: showCarousel,
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi || !showCarousel) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, showCarousel])

  const scrollTo = (index: number) => {
    if (emblaApi && showCarousel) emblaApi.scrollTo(index)
  }

  return (
    <section className={cn("w-full", backgroundColor, sectionClassName)}>
      <div className="max-w-[1920px] mx-auto">
        {/* Title Section */}
        {titleAlignment === 'center' ? (
          // Center aligned - use existing structure with max-width
          <div className={cn(titleMarginBottom, "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20")}>
            <div className="flex justify-center">
              <div className={cn("w-full", containerMaxWidth, "text-center")}>
                <h2 className={cn(
                  "font-thunder font-semibold",
                  "text-[32px] md:text-4xl lg:text-5xl 2xl:text-[50px]",
                  "leading-tight mb-0"
                )}
                style={{ color: designTokens.colors.primary }}
                >
                  {title}
                </h2>
                
                {subtitle && (
                  <p className={cn(
                    "font-onest text-[13px] md:text-[18px] leading-[1.275]",
                    "tracking-[-0.025em] mb-0 mx-auto max-w-[750px]"
                  )}
                  style={{ color: designTokens.colors.primary }}
                  >
                    {subtitle}
                  </p>
                )}
                
                {!hideViewAll && (
                  <Link 
                    href={viewAllLink}
                    className={cn(
                      "inline-flex items-center gap-[8px] md:gap-[11px] group mt-0",
                      "font-onest text-[13px] md:text-[20px] leading-[1.275]",
                      "text-primary hover:opacity-80 transition-opacity"
                    )}
                    style={{ letterSpacing: '-0.025em' }}
                  >
                    {viewAllText}
                    {/* Arrow Icon */}
                    <ArrowRight 
                      className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] transform group-hover:translate-x-1 transition-transform"
                      style={{ color: designTokens.colors.primary }}
                      strokeWidth={2}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Left aligned - use exact same structure as carousel cards but with full width for titles
          <div className={cn(titleMarginBottom, "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20")}>
            <div className="flex justify-center">
              <div className={cn("w-full", containerMaxWidth)}>
                <div className={cn(
                  "flex flex-wrap justify-start",
                  // Use same gap as cards for perfect alignment
                  gapClass
                )}>
                  <div className="flex-shrink-0">
                    <h2 className={cn(
                      "font-thunder font-semibold",
                      "text-[32px] md:text-4xl lg:text-5xl 2xl:text-[50px]",
                      "leading-tight mb-0"
                    )}
                    style={{ color: designTokens.colors.primary }}
                    >
                      {title}
                    </h2>
                    
                    {subtitle && (
                      <p className={cn(
                        "font-onest text-[13px] md:text-[18px] leading-[1.275]",
                        "tracking-[-0.025em] mb-0"
                      )}
                      style={{ color: designTokens.colors.primary }}
                      >
                        {subtitle}
                      </p>
                    )}
                    
                    {!hideViewAll && (
                      <Link 
                        href={viewAllLink}
                        className={cn(
                          "inline-flex items-center gap-[8px] md:gap-[11px] group mt-0",
                          "font-onest text-[13px] md:text-[20px] leading-[1.275]",
                          "text-primary hover:opacity-80 transition-opacity"
                        )}
                        style={{ letterSpacing: '-0.025em' }}
                      >
                        {viewAllText}
                        {/* Arrow Icon */}
                        <ArrowRight 
                          className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] transform group-hover:translate-x-1 transition-transform"
                          style={{ color: designTokens.colors.primary }}
                          strokeWidth={2}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Carousel */}
        {showCarousel ? (
          <>
            <div className="overflow-hidden pb-4" ref={emblaRef}>
              <div className="flex">
                {isMobile ? (
                  // Mobile: Individual cards with peek effect
                  items.map((item, index) => (
                    <div key={item.id} className={cn(
                      "flex-shrink-0",
                      index === 0 ? "pl-[25px]" : "",
                      index === items.length - 1 ? "pr-[25px]" : "",
                      index < items.length - 1 ? getMobileSpacing(gap) : ""
                    )}>
                      {renderCard(item)}
                    </div>
                  ))
                ) : (
                  // Desktop: Keep existing chunk logic
                  itemChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className={cn(
                      "flex-shrink-0 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20",
                      paddingY
                    )}>
                      <div className="flex justify-center">
                        <div className={cn(
                          "flex flex-wrap justify-center md:justify-start",
                          gapClass
                        )}>
                          {chunk.map((item) => (
                            <div key={item.id} className="flex-shrink-0">
                              {renderCard(item)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-[13px] mt-16">
              {(isMobile ? items : itemChunks).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "w-[9px] h-[9px] rounded-full border-2 transition-all duration-300",
                    index === selectedIndex 
                      ? "bg-primary border-primary" 
                      : "bg-[#767676] border-[#767676] hover:border-primary"
                  )}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          /* Display items without carousel */
          <div className={cn(
            isMobile ? "pl-[25px] pr-4" : "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20", 
            paddingY,
            "pb-4"
          )}>
            <div className="flex justify-center">
              <div className={cn(
                "flex flex-wrap justify-center md:justify-start",
                gapClass
              )}>
                {items.map((item) => (
                  <div key={item.id} className="flex-shrink-0">
                    {renderCard(item)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}