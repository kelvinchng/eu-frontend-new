'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'
import { AdventureCard } from '@/components/ui/cards/adventure-card'

interface Adventure {
  id: string
  title: string
  image: string
  href?: string
  icon?: React.ReactNode
}

const adventures: Adventure[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    image: '/assets/adventure-trending.jpg',
    href: '/trending',
    icon: (
      <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
        <img src="/assets/trending-icon.svg" alt="Trending" />
      </div>
    )
  },
  {
    id: 'deals',
    title: 'Travel Deals',
    image: '/assets/adventure-deals.jpg',
    href: '/deals',
    icon: (
      <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
        <img src="/assets/deals-icon.svg" alt="Deals" />
      </div>
    )
  },
  {
    id: 'themed',
    title: 'Themed Journeys', 
    image: '/assets/adventure-themed.jpg',
    href: '/themed-journeys',
    icon: (
      <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
        <img src="/assets/themed-icon.svg" alt="Themed" />
      </div>
    )
  },
  {
    id: 'cruises',
    title: 'Cruises',
    image: '/assets/adventure-cruises.jpg',
    href: '/cruises',
    icon: (
      <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
        <img src="/assets/cruises-icon.svg" alt="Cruises" />
      </div>
    )
  }
]

export function YourNextAdventure({ className }: { className?: string }) {
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
        {/* Title and Subtitle - Centered */}
        <div className="flex flex-col items-center gap-[10px] mb-[80px] px-[35px] md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px]">
          <h2 className={cn(
            "font-thunder font-medium text-[50px] leading-[0.92] text-center"
          )}
          style={{ color: designTokens.colors.primary }}
          >
            Your Next Adventure
          </h2>
          <p className={cn(
            "font-onest text-[18px] leading-[1.275] text-center max-w-[750px]",
            "tracking-[-0.025em]"
          )}
          style={{ color: designTokens.colors.primary }}
          >
            Join thousands of happy travellers who trust EU Holidays to make their journey unforgettable.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden px-[35px] md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[11.46%] 3xl:px-[220px]" ref={emblaRef}>
          <div className="flex gap-[50px] py-2">
            {adventures.map((adventure) => (
              <div key={adventure.id} className="flex-shrink-0">
                <AdventureCard 
                  {...adventure}
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