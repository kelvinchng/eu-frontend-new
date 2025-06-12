'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'
import { TourCard } from '@/components/ui/cards/tour-card'

interface FeaturedTour {
  id: string
  title: string
  price: string
  description: string
  image: string
  tags?: string[]
  badge?: string
  href?: string
}

interface FeaturedToursProps {
  className?: string
  tours?: FeaturedTour[]
}

const defaultTours: FeaturedTour[] = [
  {
    id: '1',
    title: '7D6N Scenic Korea',
    price: 'fr $1,438/pax',
    description: 'Experience the vibrant culture of South Korea with visits to Seoul, Busan, and Jeju Island. Includes traditional markets and K-pop experiences.',
    image: '/assets/tour-korea.jpg',
    tags: ['Best Seller'],
    badge: 'Best Seller',
    href: '/tours/korea-scenic'
  },
  {
    id: '2',
    title: '10D8N Classic Japan',
    price: 'fr $2,188/pax',
    description: 'Discover Japan\'s perfect blend of ancient traditions and modern technology. Visit Tokyo, Kyoto, Osaka, and Mount Fuji.',
    image: '/assets/tour-japan.jpg',
    tags: ['Popular'],
    href: '/tours/japan-classic'
  },
  {
    id: '3',
    title: '8D7N Taiwan Discovery',
    price: 'fr $988/pax',
    description: 'Explore Taiwan\'s night markets, hot springs, and stunning Taroko Gorge. A perfect mix of city life and natural wonders.',
    image: '/assets/tour-taiwan.jpg',
    tags: ['Value Deal'],
    href: '/tours/taiwan-discovery'
  },
  {
    id: '4',
    title: '12D10N Turkey Wonders',
    price: 'fr $1,888/pax',
    description: 'Journey through Istanbul, Cappadocia, and Pamukkale. Experience hot air balloons, ancient ruins, and Turkish hospitality.',
    image: '/assets/tour-turkey.jpg',
    tags: ['Must See'],
    href: '/tours/turkey-wonders'
  }
]

export function FeaturedToursSection({ className, tours = defaultTours }: FeaturedToursProps) {
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
    <section className={cn("py-16 lg:py-20", className)}>
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
            Featured Tours
          </h2>
          
          <Link 
            href="/tours"
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
          <div className="flex gap-[50px] py-2">
            {tours.map((tour) => (
              <div key={tour.id} className="flex-shrink-0">
                <TourCard 
                  {...tour}
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