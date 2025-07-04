'use client'

import React from 'react'
import { AdventureCardMobile } from '@/components/ui/cards/adventure-card-mobile'
import { MobileCarousel } from '@/components/ui/carousel/mobile-carousel'
import { cn } from '@/lib/utils'

interface AdventureSectionMobileProps {
  className?: string
}

export function AdventureSectionMobile({ className }: AdventureSectionMobileProps) {
  const adventures = [
    {
      id: 'trending',
      title: 'Trending Now',
      image: '/images/adventure-cards/trending-now.jpg',
      icon: 'trending' as const
    },
    {
      id: 'deals',
      title: 'Travel Deals', 
      image: '/images/adventure-cards/travel-deals.jpg',
      icon: 'deals' as const
    },
    {
      id: 'cruises',
      title: 'Cruises',
      image: '/assets/images/adventure-cruises.jpg',
      icon: 'cruises' as const
    }
  ]

  const handleViewMore = (adventureId: string) => {
    console.log(`View more clicked for: ${adventureId}`)
    // Add navigation logic here
  }

  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-[552px] mx-auto">
        {/* Header Section */}
        <div className="mb-[87px] px-[25px]">
          <h2 className="font-thunder font-medium text-[32px] leading-[0.92] text-[#242424] mb-[34px]">
            Your Next Adventure
          </h2>
          <p className="font-onest text-[13px] leading-[1.275] tracking-[-0.025em] text-[#242424] max-w-[345px]">
            Join thousands of happy travellers who trust EU Holidays to make their journey unforgettable.
          </p>
        </div>

        {/* Carousel */}
        <MobileCarousel
          cardWidth={265}
          gap={22}
          leftPadding={25}
          showDots={true}
        >
          {adventures.map((adventure) => (
            <AdventureCardMobile
              key={adventure.id}
              title={adventure.title}
              image={adventure.image}
              icon={adventure.icon}
              onViewMore={() => handleViewMore(adventure.id)}
            />
          ))}
        </MobileCarousel>
      </div>
    </section>
  )
}