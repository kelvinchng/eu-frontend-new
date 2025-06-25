'use client'

import { LayoutWithHero } from '@/components/layouts/layout-with-hero'
import { MICEHeroFigma } from '@/components/common/mice/mice-hero-figma'
import { MICEIntro } from '@/components/common/mice/mice-intro'
import { MICEServices } from '@/components/common/mice/mice-services'
import { MICEContactSection } from '@/components/common/mice/mice-contact-section'

export default function MicePage() {
  return (
    <LayoutWithHero hero={<MICEHeroFigma />}>
      {/* Main Content Container */}
      <div className="flex flex-col items-center gap-[41px] md:gap-[120px] py-[41px] md:py-[120px]">
        {/* Intro Section */}
        <MICEIntro />

        {/* Services Section */}
        <MICEServices />

        {/* Contact Section */}
        <MICEContactSection />
      </div>
    </LayoutWithHero>
  )
}