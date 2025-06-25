'use client'

import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'
import { AdventureCard } from '@/components/ui/cards/adventure-card'
import { YourNextAdventureData, fetchYourNextAdventureDataClient } from '@/lib/data-fetchers'


interface YourNextAdventureProps {
  className?: string
  data?: YourNextAdventureData
}

export function YourNextAdventure({ className, data: initialData }: YourNextAdventureProps) {
  const [data, setData] = useState<YourNextAdventureData | null>(initialData || null)
  const [loading, setLoading] = useState(!initialData)
  
  // All hooks must be called before any conditional returns
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 4,
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!initialData) {
      fetchYourNextAdventureDataClient()
        .then(setData)
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [initialData])

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

  if (loading) {
    return <div>Loading your next adventure...</div>
  }

  if (!data) {
    return <div>Failed to load adventure data</div>
  }

  const adventures = data.adventures.map(adventure => ({
    ...adventure,
    icon: adventure.iconPath ? (
      <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
        <img src={adventure.iconPath} alt={adventure.title} />
      </div>
    ) : undefined
  }))

  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-[1920px] mx-auto">
        {/* Title and Subtitle - Centered */}
        <div className="mb-[80px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex justify-center">
            <div className="w-full max-w-[750px] text-center">
              <h2 className={cn(
                "font-thunder font-medium text-[50px] leading-[0.92] mb-[10px]"
              )}
              style={{ color: designTokens.colors.primary }}
              >
                {data.section.title}
              </h2>
              <p className={cn(
                "font-onest text-[18px] leading-[1.275]",
                "tracking-[-0.025em]"
              )}
              style={{ color: designTokens.colors.primary }}
              >
                {data.section.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            <div className="flex-shrink-0 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-2">
              <div className="flex justify-center">
                <div className="flex gap-[50px]">
                  {adventures.map((adventure) => (
                    <div key={adventure.id}>
                      <AdventureCard 
                        {...adventure}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
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