'use client'

import React, { useState, useEffect } from 'react'
import { AdventureCard } from '@/components/ui/cards/adventure-card'
import { AdventureCardMobile } from '@/components/ui/cards/adventure-card-mobile'
import { CarouselSection } from '@/components/common/carousel-section'
import { YourNextAdventureData, fetchYourNextAdventureDataClient } from '@/lib/data-fetchers'


interface YourNextAdventureProps {
  className?: string
  data?: YourNextAdventureData
}

export function YourNextAdventure({ className, data: initialData }: YourNextAdventureProps) {
  const [data, setData] = useState<YourNextAdventureData | null>(initialData || null)
  const [loading, setLoading] = useState(!initialData)

  useEffect(() => {
    if (!initialData) {
      fetchYourNextAdventureDataClient()
        .then(setData)
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [initialData])

  if (loading) {
    return <div>Loading your next adventure...</div>
  }

  if (!data) {
    return <div>Failed to load adventure data</div>
  }

  // Create consistent adventure data for both mobile and desktop
  const adventures = [
    {
      id: 'trending',
      title: 'Trending Now',
      image: '/images/adventure-cards/trending-now.jpg',
      href: '/tours?category=trending',
      icon: (
        <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
          <img src="/assets/icons/trending-now-icon.svg" alt="Trending Now" className="w-[50px] h-[50px]" />
        </div>
      )
    },
    {
      id: 'deals',
      title: 'Travel Deals',
      image: '/images/adventure-cards/travel-deals.jpg',
      href: '/deals',
      icon: (
        <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
          <img src="/assets/icons/travel-deals-icon.svg" alt="Travel Deals" className="w-[50px] h-[50px]" />
        </div>
      )
    },
    {
      id: 'cruises',
      title: 'Cruises',
      image: '/assets/images/adventure-cruises.jpg',
      href: '/tours?category=cruises',
      icon: (
        <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
          <img src="/assets/icons/cruises-icon.svg" alt="Cruises" className="w-[50px] h-[50px]" />
        </div>
      )
    },
    {
      id: 'themed',
      title: 'Themed Journeys',
      image: '/assets/images/adventure-themed-journeys.jpg',
      href: '/themed-journeys',
      icon: (
        <div className="w-[63px] h-[63px] bg-[#242424] rounded-full flex items-center justify-center">
          <img src="/assets/icons/snowflake-inner.svg" alt="Themed Journeys" className="w-[44px] h-[44px]" />
        </div>
      )
    }
  ]

  return (
    <CarouselSection
      title={data.section.title}
      subtitle={data.section.subtitle}
      viewAllLink="/adventures"
      items={adventures}
      renderCard={(adventure) => {
        // Check if we're on mobile (client-side detection)
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
        
        if (isMobile) {
          // Return mobile adventure card
          return (
            <AdventureCardMobile
              title={adventure.title}
              image={adventure.image}
              icon={adventure.id === 'trending' ? 'trending' : adventure.id === 'deals' ? 'deals' : adventure.id === 'cruises' ? 'cruises' : 'themed'}
              href={adventure.href}
              onViewMore={() => console.log(`View more: ${adventure.id}`)}
            />
          )
        } else {
          // Return desktop adventure card
          return <AdventureCard {...adventure} />
        }
      }}
      itemsPerSlide={4}
      gap={30}
      sectionClassName={className}
      titleAlignment="center"
      containerMaxWidth="max-w-[1600px]"
      hideViewAll={true}
    />
  )
}