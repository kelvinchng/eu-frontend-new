'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface WhyChooseUsFeature {
  title: string
  description: string
  icon: React.ReactNode
}

interface WhyChooseUsProps {
  title?: string
  subtitle?: string
  features?: WhyChooseUsFeature[]
  className?: string
}

export function WhyChooseUs({
  title = "Why Choose Us",
  subtitle = "Professional & Experienced.",
  features,
  className
}: WhyChooseUsProps) {
  const defaultFeatures: WhyChooseUsFeature[] = [
    {
      title: "Travel Specialists",
      description: "With deep travel know-how and a genuine love for what we do, we design trips that feel exciting, smooth, and truly unforgettable.",
      icon: (
        <div className="w-[80px] h-[80px] bg-[#242424] rounded-[9px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <img src="/assets/icons/travel-specialists-icon.svg" alt="Travel Specialists" className="w-[42px] h-[42px]" />
        </div>
      )
    },
    {
      title: "Award-Winning Service",
      description: "Recognised by industry leaders and loved by travellers. Our travellers come back, bring friends, and trust us with their biggest holidays.",
      icon: (
        <div className="w-[80px] h-[80px] bg-[#242424] rounded-[9px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
          <img src="/assets/icons/award-winning-icon-star.svg" alt="Award Star" className="absolute w-[24px] h-[8.75px]" style={{left: '28px', top: '19px'}} />
          <img src="/assets/icons/award-winning-icon-base.svg" alt="Award Base" className="w-[32px] h-[34.84px] mt-[6.43px]" />
        </div>
      )
    },
    {
      title: "Effortless Travel",
      description: "No scrambling. No confusion. Just smooth, well-planned journeys that let you enjoy every moment stress-free.",
      icon: (
        <div className="w-[80px] h-[80px] bg-[#242424] rounded-[9px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <img src="/assets/icons/effortless-travel-icon.svg" alt="Effortless Travel" className="w-[42px] h-[33.78px]" />
        </div>
      )
    }
  ]

  const displayFeatures = features || defaultFeatures

  return (
    <div className={cn("bg-[#EEEEEE] rounded-[20px] px-[100px]", className)}>
      <div className="max-w-[1281px] mx-auto">
        {/* Header */}
        <div className="mb-[64px]">
          <h2 className="font-thunder font-normal text-[30px] leading-[28px] uppercase text-[#242424] mb-[18px]">
            {title}
          </h2>
          <p className="font-thunder font-medium text-[50px] leading-[46px] text-left text-[#242424] max-w-[418px]">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[92px]">
          {displayFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Icon */}
              <div className="mb-[47px]">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="space-y-[22px]">
                <h3 className="font-thunder font-medium text-[35px] leading-[32px] text-[#242424]">
                  {feature.title}
                </h3>
                <p className="font-onest text-[18px] leading-[23px] text-[#242424]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}