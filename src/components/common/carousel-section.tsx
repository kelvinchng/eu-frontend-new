'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

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
  titleMarginBottom = 'mb-12',
  containerMaxWidth = 'max-w-[1480px]',
  paddingY = 'py-2'
}: CarouselSectionProps<T>) {
  // Group items into chunks if itemsPerSlide is specified
  const itemChunks = []
  if (itemsPerSlide < items.length) {
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      itemChunks.push(items.slice(i, i + itemsPerSlide))
    }
  } else {
    itemChunks.push(items)
  }
  
  const showCarousel = itemChunks.length > 1
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
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
        <div className={cn(titleMarginBottom, "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20")}>
          <div className="flex justify-center">
            <div className={cn("w-full", containerMaxWidth)}>
              <h2 className={cn(
                "font-thunder uppercase",
                "text-3xl md:text-4xl lg:text-5xl 2xl:text-[50px]",
                "leading-tight mb-2"
              )}
              style={{ color: designTokens.colors.primary }}
              >
                {title}
              </h2>
              
              {subtitle && (
                <p className={cn(
                  "font-onest text-[18px] leading-[1.275] max-w-[750px]",
                  "tracking-[-0.025em] mb-2"
                )}
                style={{ color: designTokens.colors.primary }}
                >
                  {subtitle}
                </p>
              )}
              
              <Link 
                href={viewAllLink}
                className={cn(
                  "inline-flex items-center gap-[11px] group mt-[10px]",
                  "font-onest text-[20px] leading-[1.275]",
                  "text-primary hover:opacity-80 transition-opacity"
                )}
                style={{ letterSpacing: '-0.025em' }}
              >
                {viewAllText}
                {/* Arrow Icon */}
                <svg 
                  className="w-[22.83px] h-[13.97px] transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 23 14" 
                  fill="none"
                >
                  <line x1="0" y1="7" x2="22.83" y2="7" stroke={designTokens.colors.primary} strokeWidth="1.4"/>
                  <path d="M14.54 0L22.83 6.99L14.54 13.97" stroke={designTokens.colors.primary} strokeWidth="1.4" fill="none"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel */}
        {showCarousel ? (
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {itemChunks.map((chunk, chunkIndex) => (
                  <div key={chunkIndex} className={cn("flex-shrink-0 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20", paddingY)}>
                    <div className="flex justify-center">
                      <div className="flex" style={{ gap: `${gap}px` }}>
                        {chunk.map((item) => (
                          <div key={item.id} className="flex-shrink-0">
                            {renderCard(item)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-[13px] mt-16">
              {itemChunks.map((_, index) => (
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
          <div className={cn("px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20", paddingY)}>
            <div className="flex justify-center">
              <div className="flex" style={{ gap: `${gap}px` }}>
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