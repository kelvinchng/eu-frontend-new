'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'
import { DestinationCard } from '@/components/ui/cards/destination-card'

interface Destination {
  id: string
  name: string
  image: string
  tourCount?: number
  href?: string
}

interface ExploreDestinationsProps {
  className?: string
  destinations?: Destination[]
}

const defaultDestinations: Destination[] = [
  {
    id: 'japan',
    name: 'Japan',
    image: '/assets/destination-japan.jpg',
    tourCount: 25,
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    image: '/assets/destination-switzerland.jpg',
    tourCount: 18,
  },
  {
    id: 'italy',
    name: 'Italy',
    image: '/assets/destination-italy.jpg',
    tourCount: 22,
  },
  {
    id: 'france',
    name: 'France',
    image: '/assets/destination-france.jpg',
    tourCount: 20,
  },
  {
    id: 'norway',
    name: 'Norway',
    image: '/assets/destination-norway.jpg',
    tourCount: 12,
  },
  {
    id: 'iceland',
    name: 'Iceland',
    image: '/assets/destination-iceland.jpg',
    tourCount: 8,
  }
]

export function ExploreDestinationsSection({ className, destinations = defaultDestinations }: ExploreDestinationsProps) {
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
    <section className={cn("w-full", className)}>
      <div className="max-w-[1920px] mx-auto">
        {/* Title Section */}
        <div className="mb-12 px-[35px] md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px]">
          <h2 className={cn(
            "font-thunder uppercase",
            "text-3xl md:text-4xl lg:text-5xl 2xl:text-[50px]",
            "leading-tight mb-2"
          )}
          style={{ color: designTokens.colors.primary }}
          >
            Explore by Destinations
          </h2>
          
          <Link 
            href="/destinations"
            className={cn(
              "flex items-center gap-[11px] group mt-[10px]",
              "font-onest text-[20px] leading-[1.275]",
              "text-primary hover:opacity-80 transition-opacity"
            )}
            style={{ letterSpacing: '-0.025em' }}
          >
            View all here
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

        {/* Carousel */}
        <div className="overflow-hidden px-[35px] md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px]" ref={emblaRef}>
          <div className="flex gap-[30px] py-2">
            {destinations.map((destination) => (
              <div key={destination.id} className="flex-shrink-0">
                <DestinationCard 
                  {...destination}
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