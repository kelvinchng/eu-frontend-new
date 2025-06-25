'use client'

import React from 'react'
import { LayoutWithHero } from '@/components/layouts/layout-with-hero'
import { Hero } from '@/components/common/hero/hero'
import { HeroMobile } from '@/components/common/hero/hero-mobile'
import { SeasonalDealsSection } from '@/components/common/seasonal-deals'
import { FeaturedToursSection } from '@/components/common/featured-tours'
import { ExploreDestinationsSection } from '@/components/common/explore-destinations'
import { ThemedJourneysSection } from '@/components/common/themed-journeys'
import { TravelWithEU } from '@/components/common/travel-with-eu'
import { YourNextAdventure } from '@/components/common/your-next-adventure'
import { InstagramSection } from '@/components/common/instagram-section'
import { FooterBanner } from '@/components/common/footer-banner'

export default function HomePage() {
  const heroContent = (
    <>
      <Hero />
      <HeroMobile />
    </>
  )

  return (
    <LayoutWithHero 
      hero={heroContent}
      enableScrolledNav={true}
    >
      {/* Seasonal Deals + Promotions Section */}
      <SeasonalDealsSection className="py-16 lg:py-20" />
      
      {/* Featured Tours Section */}
      <FeaturedToursSection className="py-16 lg:py-20" />

      {/* Explore by Destinations */}
      <ExploreDestinationsSection className="py-16 lg:py-20" />

      {/* Themed Journeys */}
      <ThemedJourneysSection className="py-16 lg:py-20" />

      {/* Travel with EU Section */}
      <TravelWithEU className="py-20 lg:py-24 xl:py-28 2xl:py-32" />

      {/* Your Next Adventure Section */}
      <YourNextAdventure className="py-16 lg:py-20" />

      {/* Instagram Section */}
      <InstagramSection className="py-16 lg:py-20" />

      {/* Footer Banner Section */}
      <FooterBanner />
    </LayoutWithHero>
  )
}