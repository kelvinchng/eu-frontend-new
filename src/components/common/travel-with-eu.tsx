'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

interface TabContent {
  id: string
  title: string
  content: string
  image: string
  buttonText?: string
  buttonHref?: string
}

const tabsData: TabContent[] = [
  {
    id: 'award',
    title: 'Award-Winning Service',
    content: 'Recognised by prestigious organisations and customers alike, EU Holidays has consistently been at the forefront of excellence in the travel industry. Accolades such as the Singapore Prestige Brand Award and Best Travel Agency for Europe and USA Tours reflect their dedication to creating extraordinary travel experiences. These awards underline their professionalism, trustworthiness, and ability to craft unforgettable journeys. When you choose EU Holidays, you\'re travelling with a brand synonymous with quality and excellence.',
    image: '/assets/travel-award-winning.jpg',
    buttonText: 'View Tours',
    buttonHref: '/tours',
  },
  {
    id: 'experienced',
    title: 'Experienced Tour Managers',
    content: 'Our tour managers are the heart of every EU Holidays journey. With years of expertise and deep local knowledge, they transform trips into unforgettable experiences. Fluent in multiple languages and passionate about travel, they handle every detail with professionalism while sharing insider tips and stories that bring destinations to life.',
    image: '/assets/travel-managers.jpg',
  },
  {
    id: 'tailored',
    title: 'Tailored Travel Experiences',
    content: 'Every traveller is unique, and so should be their journey. EU Holidays specializes in crafting personalized itineraries that match your interests, pace, and preferences. Whether you dream of exploring ancient ruins, indulging in culinary delights, or seeking thrilling adventures, our expert team designs experiences that resonate with your travel aspirations.',
    image: '/assets/travel-tailored.jpg',
  },
  {
    id: 'thousands',
    title: 'Thousands of Happy Travellers',
    content: 'With over 100,000 satisfied customers who have explored the world with EU Holidays, our track record speaks for itself. From families seeking adventure to couples looking for romantic getaways, we\'ve created countless memories across continents. Our travellers consistently praise our attention to detail, seamless planning, and the genuine care we put into every journey.',
    image: '/assets/travel-happy.jpg',
  },
]

export function TravelWithEU({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState('award')

  const activeContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0]

  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-[1920px] mx-auto">
        <div className="px-[35px] md:px-[5.73%] lg:px-[7.64%] xl:px-[9.17%] 2xl:px-[13.46%] 3xl:px-[297px]">
          {/* Header Section */}
          <div className="flex flex-col gap-[37px] mb-[80px]">
            <div className="flex flex-col gap-[10px]">
              <h2 className="font-thunder font-medium text-[50px] leading-[0.92] text-primary">
                Travel With EU
              </h2>
              <p className="font-onest text-[20px] leading-[1.275] tracking-[-0.025em] text-primary">
                Your trusted partner for enriching travel experiences.
              </p>
            </div>
            
            {/* Award Logo */}
            <div className="relative w-full max-w-[1019px] h-[102px]">
              <Image
                src="/assets/eu-awards.png"
                alt="EU Holidays Awards"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Tabs and Content */}
          <div className="relative">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-[23px] mb-[55px]">
              {tabsData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-[29px] py-[15px] rounded-[8px] transition-all",
                    "font-onest text-[18px] leading-[1.275]",
                    "flex items-center justify-center",
                    "whitespace-nowrap text-center",
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

            {/* Tab Content */}
            <div className="overflow-hidden">
              <div className="grid lg:grid-cols-[606px_1fr] gap-[92px]">
              {/* Image */}
              <div 
                className="relative rounded-[9px] overflow-hidden"
                style={{ 
                  width: '606px',
                  maxWidth: '100%',
                  height: '590px',
                  boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)'
                }}
              >
                <Image
                  src={activeContent.image}
                  alt={activeContent.title}
                  fill
                  className="object-cover"
                />
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
        </div>
      </div>
    </section>
  )
}