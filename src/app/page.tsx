'use client'

import React from 'react'
import { LayoutWithHero } from '@/components/layouts/layout-with-hero'
import { Hero } from '@/components/common/hero/hero'
import { HeroMobile } from '@/components/common/hero/hero-mobile'
import { HeroSearchFormMobile } from '@/components/common/hero/hero-search-form-mobile'
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
      {/* Mobile Search Form - positioned below hero image */}
      <div className="lg:hidden px-4 xs:px-6 sm:px-7 md:px-[28px] -mt-[20px] relative z-20">
        <HeroSearchFormMobile className="shadow-lg" />
      </div>
    </>
  )

  return (
    <LayoutWithHero 
      hero={heroContent}
      enableScrolledNav={true}
    >
      {/* Seasonal Deals + Promotions Section */}
      <SeasonalDealsSection className="pt-8 pb-16 lg:py-20" />
      
      {/* Featured Tours Section */}
      <FeaturedToursSection className="py-12 lg:py-16" />

      {/* Explore by Destinations */}
      <ExploreDestinationsSection className="py-12 lg:py-16" />

      {/* Themed Journeys */}
      <ThemedJourneysSection className="py-12 lg:py-16" />

      {/* Travel with EU Section */}
      <TravelWithEU className="py-16 lg:py-20 xl:py-24 2xl:py-28" />

      {/* Your Next Adventure Section */}
      <YourNextAdventure className="py-12 lg:py-16" />

      {/* Instagram Section */}
      <InstagramSection className="py-12 lg:py-16" />

      {/* Footer Banner Section */}
      <FooterBanner />
    </LayoutWithHero>
  )
}