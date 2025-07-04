'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'
import { TravelWithEUTab, fetchTravelWithEUTabsClient } from '@/lib/data-fetchers'

// Hook to detect mobile/desktop
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}


interface TravelWithEUProps {
  className?: string
  tabs?: TravelWithEUTab[]
}

export function TravelWithEU({ className, tabs: initialTabs }: TravelWithEUProps) {
  const [tabs, setTabs] = useState<TravelWithEUTab[]>(initialTabs || [])
  const [loading, setLoading] = useState(!initialTabs)
  const [activeTab, setActiveTab] = useState('award')
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!initialTabs) {
      fetchTravelWithEUTabsClient()
        .then((data) => {
          setTabs(data)
          if (data.length > 0) {
            setActiveTab(data[0].id)
          }
        })
        .catch(console.error)
        .finally(() => setLoading(false))
    }
  }, [initialTabs])

  if (loading) {
    return <div>Loading travel with EU...</div>
  }

  const activeContent = tabs.find(tab => tab.id === activeTab) || tabs[0]

  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-[1920px] mx-auto">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="w-full max-w-[1480px] mx-auto">
            {/* Header Section - Mobile Responsive */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[37px] mb-12 sm:mb-16 lg:mb-[80px]">
              <div className="flex flex-col gap-[10px]">
                <h2 className="font-thunder font-medium text-[32px] lg:text-[50px] leading-[0.92] text-primary">
                  Travel With EU
                </h2>
                <p className="font-onest text-[13px] lg:text-[20px] leading-[1.275] tracking-[-0.025em] text-primary">
                  Your trusted partner for enriching travel experiences.
                </p>
              </div>
              
              {/* Award Logo - Mobile Responsive */}
              <div className="relative w-full">
                {/* Desktop award logos */}
                <div className="hidden lg:block relative w-full max-w-[1019px] h-[102px]">
                  <Image
                    src="/assets/logos/eu-awards-logos.png"
                    alt="EU Holidays Awards"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                
                {/* Mobile award logos - 4 per row grid for top row, 4 per row for bottom row */}
                <div className="lg:hidden">
                  <div className="grid grid-cols-4 gap-2 max-w-[330px] mx-auto">
                    {/* Top row */}
                    <div className="relative w-full h-[50px]">
                      <Image
                        src="/assets/images/sin-quality-class.png"
                        alt="Singapore Quality Class"
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="relative w-full h-[50px]">
                      <Image
                        src="/assets/images/sin-service-class.png"
                        alt="Singapore Service Class"
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="relative w-full h-[50px]">
                      <Image
                        src="/assets/images/spba.png"
                        alt="Singapore Prestige Brand Award"
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="relative w-full h-[50px]">
                      <Image
                        src="/assets/images/travel-weekly-asia.png"
                        alt="Travel Weekly Asia"
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Bottom row */}
                    <div className="relative w-full h-[82px]">
                      <Image
                        src="/assets/images/tripzilla-australia.png"
                        alt="TripZilla Australia"
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="relative w-full h-[82px]">
                      <Image
                        src="/assets/images/tripzilla-europe.png"
                        alt="TripZilla Europe"
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="relative w-full h-[82px]">
                      <Image
                        src="/assets/images/tripzilla-japan.png"
                        alt="TripZilla Japan"
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="relative w-full h-[82px]">
                      <Image
                        src="/assets/images/club-med.png"
                        alt="Club Med"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop - Tabs and Content */}
            {!isMobile && (
              <div className="relative">
                {/* Tab Navigation - Desktop */}
                <div className="flex flex-wrap gap-[23px] mb-[55px]">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "px-[29px] py-[15px] rounded-[8px] transition-all",
                        "font-onest text-[18px] leading-[1.275]",
                        "flex items-center justify-center",
                        "text-center min-h-[56px] whitespace-nowrap",
                        activeTab === tab.id 
                          ? "bg-primary text-white" 
                          : "bg-[#EFEFEF] text-primary hover:bg-gray-200"
                      )}
                      style={{
                        width: index === 0 ? '254px' : index === 1 ? '292px' : index === 2 ? '286px' : '319px',
                        height: '56px',
                      }}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content - Desktop */}
                <div className="overflow-hidden">
                  <div className="grid grid-cols-[606px_1fr] gap-[92px]">
                    {/* Image */}
                    <div className="relative rounded-[9px] overflow-hidden">
                      <div 
                        className="relative w-full"
                        style={{ 
                          width: '606px',
                          height: '590px',
                          boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)'
                        }}
                      >
                        <Image
                          src={activeContent.image}
                          alt={activeContent.title}
                          fill
                          className="object-cover rounded-[9px]"
                          sizes="606px"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center max-w-[630px] py-[90px]">
                      <h3 className="font-onest text-[30px] leading-[1.275] text-primary mb-[41px]">
                        {activeContent.title}
                      </h3>
                      <p className="font-onest text-[18px] leading-[1.667] text-primary mb-[41px]">
                        {activeContent.content}
                      </p>
                      
                      {activeContent.buttonText && (
                        <Link 
                          href={activeContent.buttonHref || '#'}
                          className={cn(
                            "inline-flex items-center justify-center",
                            "w-[177px] h-[51px]",
                            "bg-primary text-white rounded-[8px]",
                            "font-onest text-[18px] leading-[1.275]",
                            "hover:opacity-90 transition-opacity"
                          )}
                        >
                          {activeContent.buttonText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile - All Feature Cards Showing */}
            {isMobile && (
              <div className="flex flex-col gap-8">
                {/* Award-Winning Service */}
                <div className="flex flex-col gap-6">
                  <div className="relative rounded-[9px] overflow-hidden w-full h-[378px]" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
                    <Image
                      src="/assets/images/award-winning-service.jpg"
                      alt="Award-Winning Service"
                      fill
                      className="object-cover rounded-[9px]"
                      sizes="100vw"
                    />
                  </div>
                  
                  <div className="inline-flex items-center justify-center px-4 h-[33px] bg-primary text-white rounded-[8px] font-onest text-[12px] leading-[1.275] w-fit">
                    Award-Winning Service
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-onest text-[14px] leading-[1.275] text-primary">
                      Award-Winning Service
                    </h3>
                    <p className="font-onest text-[13px] leading-[2.31] text-primary">
                      EU Holidays offers the perfect blend of competitive pricing and exceptional quality, allowing travellers to enjoy luxurious experiences without exceeding their budgets. Their thoughtfully designed packages include high-quality accommodations, premium itineraries, and value-added services to ensure every journey feels indulgent yet affordable. Whether it's exploring the romantic streets of Paris or soaking in the charm of Santorini, EU Holidays ensures you get the best value for your money without compromising on the experience.
                    </p>
                    
                    <Link 
                      href="/tours" 
                      className="inline-flex items-center justify-center w-[128px] h-[33px] border border-primary text-primary rounded-[8px] font-onest text-[12px] leading-[1.275] mt-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      View Tours
                    </Link>
                  </div>
                </div>

                {/* Experienced Tour Managers */}
                <div className="flex flex-col gap-6">
                  <div className="relative rounded-[9px] overflow-hidden w-full h-[378px]" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
                    <Image
                      src="/assets/images/our-people-1.jpg"
                      alt="Experienced Tour Managers"
                      fill
                      className="object-cover rounded-[9px]"
                      sizes="100vw"
                    />
                  </div>
                  
                  <div className="inline-flex items-center justify-center px-4 h-[33px] bg-primary text-white rounded-[8px] font-onest text-[12px] leading-[1.275] w-fit">
                    Experienced Tour Managers
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-onest text-[14px] leading-[1.275] text-primary">
                      Experienced Tour Managers
                    </h3>
                    <p className="font-onest text-[13px] leading-[2.31] text-primary">
                      Recognised by prestigious organisations and customers alike, EU Holidays has consistently been at the forefront of excellence in the travel industry. Accolades such as the Singapore Prestige Brand Award and Best Travel Agency for Europe and USA Tours reflect their dedication to creating extraordinary travel experiences. These awards underline their professionalism, trustworthiness, and ability to craft unforgettable journeys. When you choose EU Holidays, you're travelling with a brand synonymous with quality and excellence.
                    </p>
                    
                    <Link 
                      href="/tours" 
                      className="inline-flex items-center justify-center w-[128px] h-[33px] border border-primary text-primary rounded-[8px] font-onest text-[12px] leading-[1.275] mt-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      View Tours
                    </Link>
                  </div>
                </div>

                {/* Tailored Travel Experience */}
                <div className="flex flex-col gap-6">
                  <div className="relative rounded-[9px] overflow-hidden w-full h-[378px]" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
                    <Image
                      src="/assets/images/destination-china.jpg"
                      alt="Tailored Travel Experience"
                      fill
                      className="object-cover rounded-[9px]"
                      sizes="100vw"
                    />
                  </div>
                  
                  <div className="inline-flex items-center justify-center px-4 h-[33px] bg-primary text-white rounded-[8px] font-onest text-[12px] leading-[1.275] w-fit">
                    Tailored Travel Experience
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-onest text-[14px] leading-[1.275] text-primary">
                      Tailored Travel Experience
                    </h3>
                    <p className="font-onest text-[13px] leading-[2.31] text-primary">
                      With an unwavering focus on Europe, USA, and exotic destinations, EU Holidays has become an expert in crafting unique itineraries tailored to these regions. Their deep understanding of local cultures, iconic landmarks, and hidden gems ensures that every trip is carefully curated for maximum enjoyment. By specialising in these specific destinations, EU Holidays delivers seamless tours filled with enriching experiences that leave lasting memories. From first-time travellers to seasoned explorers, their expertise caters to everyone.
                    </p>
                    
                    <Link 
                      href="/tours" 
                      className="inline-flex items-center justify-center w-[128px] h-[33px] border border-primary text-primary rounded-[8px] font-onest text-[12px] leading-[1.275] mt-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      View Tours
                    </Link>
                  </div>
                </div>

                {/* Thousands of Happy Travellers */}
                <div className="flex flex-col gap-6">
                  <div className="relative rounded-[9px] overflow-hidden w-full h-[378px]" style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}>
                    <Image
                      src="/assets/images/our-people-2.jpg"
                      alt="Thousands of Happy Travellers"
                      fill
                      className="object-cover rounded-[9px]"
                      sizes="100vw"
                    />
                  </div>
                  
                  <div className="inline-flex items-center justify-center px-4 h-[33px] bg-primary text-white rounded-[8px] font-onest text-[12px] leading-[1.275] w-fit">
                    Thousands of Happy Travellers
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-onest text-[14px] leading-[1.275] text-primary">
                      Thousands of Happy Travellers
                    </h3>
                    <p className="font-onest text-[13px] leading-[2.31] text-primary">
                      At EU Holidays, customers are at the heart of everything they do. Certified under the Singapore Service Class, they are committed to providing personalised attention and seamless experiences from the moment you book until you return home. Their dedicated team goes above and beyond to address your needs, offering peace of mind and an stress-free journey. By focusing on customer satisfaction and consistently exceeding expectations, EU Holidays ensures every traveller feels valued and well taken care of.
                    </p>
                    
                    <Link 
                      href="/tours" 
                      className="inline-flex items-center justify-center w-[128px] h-[33px] border border-primary text-primary rounded-[8px] font-onest text-[12px] leading-[1.275] mt-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      View Tours
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}