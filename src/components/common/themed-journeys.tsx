'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'
import { ThemeCard } from '@/components/ui/cards/theme-card'

interface ThemedJourney {
  id: string
  title: string
  description: string
  image: string
  icon?: string
  href?: string
}

interface ThemedJourneysProps {
  className?: string
  journeys?: ThemedJourney[]
}

const defaultJourneys: ThemedJourney[] = [
  {
    id: 'luxury',
    title: 'Luxury Experiences',
    description: 'Exquisite moments await.',
    image: '/assets/theme-luxury.jpg',
  },
  {
    id: 'adventure',
    title: 'Adventure Tours',
    description: 'Thrilling expeditions for the brave.',
    image: '/assets/theme-adventure.jpg',
  },
  {
    id: 'cultural',
    title: 'Cultural Heritage',
    description: 'Immerse in rich traditions.',
    image: '/assets/theme-cultural.jpg',
  },
  {
    id: 'romantic',
    title: 'Romantic Getaways',
    description: 'Perfect escapes for couples.',
    image: '/assets/theme-romantic.jpg',
  }
]

export function ThemedJourneysSection({ className, journeys = defaultJourneys }: ThemedJourneysProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 3,
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <section className={cn("w-full bg-[#EFEFEF]", className)}>
      <div className="max-w-[1920px] mx-auto">
        {/* Title Section - Centered */}
        <div className="flex flex-col items-center mb-[63px]">
          <h2 className={cn(
            "font-thunder font-medium text-center",
            "text-3xl md:text-4xl lg:text-5xl 2xl:text-[50px]",
            "leading-[0.92] mb-[10px]"
          )}
          style={{ color: designTokens.colors.primary }}
          >
            Explore Tours By Themes
          </h2>
          
          <Link 
            href="/themed-journeys"
            className={cn(
              "flex items-center gap-[9.42px] group",
              "font-onest text-[20px] leading-[1.275]",
              "text-primary hover:opacity-80 transition-opacity"
            )}
            style={{ letterSpacing: '-0.025em' }}
          >
            View all here
            {/* Arrow Icon */}
            <svg 
              className="w-[21.61px] h-[13.97px] transform group-hover:translate-x-1 transition-transform"
              viewBox="0 0 22 14" 
              fill="none"
            >
              <path d="M13.77 0L21.61 6.98L13.77 13.97" stroke={designTokens.colors.primary} strokeWidth="1.4" fill="none"/>
              <line x1="0" y1="6.98" x2="21.61" y2="6.98" stroke={designTokens.colors.primary} strokeWidth="1.4"/>
            </svg>
          </Link>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden px-[35px] md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px]" ref={emblaRef}>
          <div className="flex gap-[50px] py-2">
            {journeys.map((journey) => (
              <div key={journey.id} className="flex-shrink-0">
                <ThemeCard 
                  {...journey}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        {scrollSnaps.length > 1 && (
          <div className="flex items-center justify-center gap-[13px] mt-16">
            {scrollSnaps.map((_, index) => (
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
        )}
      </div>
    </section>
  )
}