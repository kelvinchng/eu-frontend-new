'use client'

import { LayoutWithHero } from '@/components/layouts/layout-with-hero'
import { AboutHero } from '@/components/common/about/about-hero'
import { OurStory } from '@/components/common/about/our-story'
import { Timeline } from '@/components/common/about/timeline'
import { MissionVisionValues } from '@/components/common/about/mission-vision-values'
import { OurPeople } from '@/components/common/about/our-people'

export default function AboutPage() {
  return (
    <LayoutWithHero hero={<AboutHero />}>
      {/* Main Content Container */}
      <div className="flex flex-col items-center gap-[41px] md:gap-[127px] pt-[41px] md:pt-[127px] pb-[62px] md:pb-[140px] px-[34px] md:px-0">
        {/* Content Sections */}
        <div className="flex flex-col items-center gap-[41px] md:gap-[123px] w-full">
          {/* Our Story Section */}
          <OurStory />
          
          {/* Timeline Section */}
          <Timeline />
        </div>

        {/* Mission, Vision & Values Section */}
        <div className="flex flex-col items-center gap-[35px] md:gap-[120px] w-full">
          <MissionVisionValues />
          
          {/* Our People Section */}
          <OurPeople />
        </div>
      </div>
    </LayoutWithHero>
  )
} 