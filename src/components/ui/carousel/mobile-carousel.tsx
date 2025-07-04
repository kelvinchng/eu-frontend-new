'use client'

import React, { useState, useRef, useEffect, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MobileCarouselProps {
  children: ReactNode[]
  className?: string
  cardWidth?: number
  gap?: number
  showDots?: boolean
  leftPadding?: number
}

export function MobileCarousel({ 
  children, 
  className,
  cardWidth = 265,
  gap = 22,
  showDots = true,
  leftPadding = 25
}: MobileCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
    
    // Scroll to the selected card
    if (scrollContainerRef.current) {
      const scrollPosition = index * (cardWidth + gap)
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }

  // Update current slide based on scroll position with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (scrollContainerRef.current) {
          const scrollLeft = scrollContainerRef.current.scrollLeft
          const newIndex = Math.round(scrollLeft / (cardWidth + gap))
          setCurrentSlide(Math.min(newIndex, children.length - 1))
        }
      }, 100)
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        container.removeEventListener('scroll', handleScroll)
        clearTimeout(timeoutId)
      }
    }
  }, [children.length, cardWidth, gap])

  return (
    <div className={cn("w-full", className)}>
      {/* Cards Container */}
      <div className="relative mb-[40px]">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{
            gap: `${gap}px`,
            paddingLeft: `${leftPadding}px`,
            paddingRight: `${leftPadding}px`,
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth'
          }}
        >
          {children.map((child, index) => (
            <div 
              key={index}
              className="flex-shrink-0 snap-start snap-always"
              style={{ width: `${cardWidth}px` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      {showDots && children.length > 1 && (
        <div className="flex justify-center">
          <div className="flex items-center gap-[14.2px]">
            {children.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-[7.2px] h-[7.2px] rounded-full border-2 transition-colors",
                  index === currentSlide 
                    ? "bg-[#242424] border-[#242424]" 
                    : "bg-[#767676] border-[#767676]"
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}