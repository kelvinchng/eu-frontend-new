'use client'

import React, { useState, useEffect } from 'react'
import { TourCard } from '@/components/ui/cards/tour-card'
import { CarouselSection } from '@/components/common/carousel-section'
import { SeasonalDeal, fetchSeasonalDealsClient } from '@/lib/data-fetchers'
import { cn } from '@/lib/utils'

interface SeasonalDealsProps {
  className?: string
  deals?: SeasonalDeal[]
}


export function SeasonalDealsSection({ className, deals: initialDeals }: SeasonalDealsProps) {
  const [deals, setDeals] = useState<SeasonalDeal[]>(initialDeals || [])
  const [loading, setLoading] = useState(!initialDeals)

  useEffect(() => {
    if (!initialDeals) {
      fetchSeasonalDealsClient()
        .then(setDeals)
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [initialDeals])

  if (loading) {
    return <div>Loading seasonal deals...</div>
  }

  return (
    <CarouselSection
      title="Seasonal Deals + Promotions"
      viewAllLink="/seasonal-deals"
      items={deals}
      renderCard={(deal) => <TourCard {...deal} />}
      itemsPerSlide={4}
      gap={20}
      sectionClassName={cn("mt-[80px] lg:mt-[90px] xl:mt-[100px] 2xl:mt-[110px] 3xl:mt-[120px]", className)}
      titleAlignment="left"
    />
  )
}