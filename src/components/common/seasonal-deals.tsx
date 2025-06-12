'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'
import { TourCard } from '@/components/ui/cards/tour-card'

interface SeasonalDeal {
  id: string
  title: string
  price: string
  description: string
  image: string
  tags?: string[]
  href?: string
}

interface SeasonalDealsProps {
  className?: string
  deals?: SeasonalDeal[]
}

const defaultDeals: SeasonalDeal[] = [
  {
    id: '1',
    title: 'The Cherry Blossoms are Calling',
    price: 'fr $438/pax',
    description: 'Enjoy an unforgettable spring getaway to Japan during peak sakura season! This limited-time deal includes airport taxes, baggage allowance and even a free gift.',
    image: '/assets/seasonal-japan.jpg',
    tags: ['1-for-1'],
    href: '/tours/japan-sakura'
  },
  {
    id: '2',
    title: '13D10N Aurora Norway, Finland and Sweden (OCT-MAR)',
    price: 'fr $438/pax',
    description: 'Sunkissed Switzerland is an equally dreamy destination to explore in summer – with its incredible scenery filled in with color, spectacularly blue lakes and awesome weather to boot.',
    image: '/assets/seasonal-iceland.png',
    tags: ['1-for-1'],
    href: '/tours/iceland-aurora'
  },
  {
    id: '3',
    title: 'Swiss Alps Summer Special',
    price: 'fr $558/pax',
    description: 'Discover the breathtaking Swiss Alps this summer. Includes scenic train rides, mountain excursions, and traditional Swiss dining experiences.',
    image: '/assets/seasonal-swiss.png',
    tags: ['Limited Offer'],
    href: '/tours/swiss-summer'
  },
  {
    id: '4',
    title: 'Mediterranean Cruise Special',
    price: 'fr $888/pax',
    description: 'Set sail on a luxurious Mediterranean cruise visiting Greece, Italy, and Spain. All-inclusive package with premium dining and entertainment.',
    image: '/assets/seasonal-cruise.jpg',
    tags: ['Early Bird'],
    href: '/tours/med-cruise'
  },
  {
    id: '5',
    title: 'Eastern Europe Discovery',
    price: 'fr $688/pax',
    description: 'Explore the hidden gems of Eastern Europe including Prague, Budapest, and Vienna. Rich history, stunning architecture, and local cuisine await.',
    image: '/assets/seasonal-eastern.jpg',
    tags: ['Group Discount'],
    href: '/tours/eastern-europe'
  },
  {
    id: '6',
    title: 'Scandinavia Northern Lights',
    price: 'fr $988/pax',
    description: 'Chase the Aurora Borealis across Norway, Sweden, and Finland. Includes husky sledding, ice hotels, and traditional Sami experiences.',
    image: '/assets/seasonal-scandinavia.jpg',
    tags: ['Limited Seats'],
    href: '/tours/scandinavia-lights'
  }
]

export function SeasonalDealsSection({ className, deals = defaultDeals }: SeasonalDealsProps) {
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
            Seasonal Deals + Promotions
          </h2>
          
          <Link 
            href="/seasonal-deals"
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
            {deals.map((deal) => (
              <div key={deal.id} className="flex-shrink-0">
                <TourCard 
                  {...deal}
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