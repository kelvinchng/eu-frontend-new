'use client'

import React, { useState, useEffect } from 'react'
import { ThemeCard } from '@/components/ui/cards/theme-card'
import { CarouselSection } from '@/components/common/carousel-section'
import { cn } from '@/lib/utils'
import { ThemedJourney, fetchThemedJourneysClient } from '@/lib/data-fetchers'

interface ThemedJourneysProps {
  className?: string
  journeys?: ThemedJourney[]
}


export function ThemedJourneysSection({ className, journeys: initialJourneys }: ThemedJourneysProps) {
  const [journeys, setJourneys] = useState<ThemedJourney[]>(initialJourneys || [])
  const [loading, setLoading] = useState(!initialJourneys)

  useEffect(() => {
    if (!initialJourneys) {
      fetchThemedJourneysClient()
        .then(setJourneys)
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [initialJourneys])

  if (loading) {
    return <div>Loading themed journeys...</div>
  }

  // Show only 4 journeys at a time
  const displayJourneys = journeys.slice(0, 4)
  
  return (
    <CarouselSection
      title="Explore Tours By Themes"
      viewAllLink="/themed-journeys"
      items={displayJourneys}
      renderCard={(journey) => <ThemeCard {...journey} />}
      itemsPerSlide={4}
      gap={30}
      backgroundColor="bg-[#EFEFEF]"
      sectionClassName={className}
      titleMarginBottom="mb-[40px]"
      titleAlignment="center"
    />
  )
}