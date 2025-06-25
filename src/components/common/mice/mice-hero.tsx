'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MICEService {
  icon: React.ReactNode
  title: string
  description: string
}

interface MICEHeroProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  services?: MICEService[]
  miceStats?: {
    eventsOrganized: number
    corporateClients: number
    averageGroupSize: number
  }
  className?: string
}

export function MICEHero({
  title = "EU MICE Services",
  subtitle = "Meetings, Incentives, Conferences & Events",
  description = "Transform your corporate events with our comprehensive MICE services. From intimate board meetings to large-scale conferences, we deliver exceptional experiences that inspire, motivate, and achieve your business objectives.",
  backgroundImage = "/assets/images/mice-hero.jpg",
  services = [],
  miceStats,
  className
}: MICEHeroProps) {
  
  const defaultStats = {
    eventsOrganized: 1247,
    corporateClients: 284,
    averageGroupSize: 47
  }

  const stats = miceStats || defaultStats

  const defaultServices: MICEService[] = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Meetings",
      description: "Executive boardrooms to team workshops"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Incentives",
      description: "Reward programs and motivational trips"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Conferences",
      description: "Large-scale events and symposiums"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Events",
      description: "Corporate celebrations and launches"
    }
  ]

  const displayServices = services.length > 0 ? services : defaultServices

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Hero Section */}
      <div className={cn(
        "relative flex items-center justify-center",
        // Responsive height
        "h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px]"
      )}>
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="EU MICE Services"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto">
          <div className={cn(
            "text-center text-white",
            // Responsive padding
            "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
            "py-[32px] sm:py-[40px] md:py-[48px] lg:py-[56px] xl:py-[64px] 2xl:py-[72px]"
          )}>
            {/* Title */}
            <h1 className={cn(
              "font-thunder font-medium mb-4 sm:mb-6 md:mb-8",
              // Responsive font size
              "text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[68px] 2xl:text-[76px]",
              // Responsive line height
              "leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px] xl:leading-[72px] 2xl:leading-[80px]",
              "max-w-4xl mx-auto"
            )}>
              {title}
            </h1>

            {/* Subtitle */}
            <h2 className={cn(
              "font-onest font-medium text-white/90 mb-4 sm:mb-6 md:mb-8",
              // Responsive font size
              "text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px]",
              // Responsive line height
              "leading-[22px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] xl:leading-[40px] 2xl:leading-[44px]",
              "max-w-3xl mx-auto"
            )}>
              {subtitle}
            </h2>

            {/* Description */}
            <p className={cn(
              "font-onest text-white/80 mb-8 sm:mb-12 md:mb-16",
              // Responsive font size
              "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]",
              // Responsive line height
              "leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px]",
              "max-w-2xl mx-auto"
            )}>
              {description}
            </p>

            {/* MICE Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16">
              {displayServices.map((service, index) => (
                <div key={index} className="text-center group">
                  {/* Icon */}
                  <div className={cn(
                    "inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white group-hover:bg-white/20 transition-all duration-300 mb-3 sm:mb-4",
                    "w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] lg:w-[80px] lg:h-[80px] xl:w-[88px] xl:h-[88px] 2xl:w-[96px] 2xl:h-[96px]",
                    "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
                  )}>
                    <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[44px] 2xl:h-[44px]">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={cn(
                    "font-thunder font-medium text-white mb-2",
                    "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
                  )}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={cn(
                    "font-onest text-white/80",
                    "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                  )}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto mb-8 sm:mb-12">
              {/* Events Organized */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
                    // Responsive line height
                    "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
                  )}>
                    {stats.eventsOrganized.toLocaleString()}+
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Events Organized
                  </p>
                </div>
              </div>

              {/* Corporate Clients */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
                    // Responsive line height
                    "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
                  )}>
                    {stats.corporateClients}+
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Corporate Clients
                  </p>
                </div>
              </div>

              {/* Average Group Size */}
              <div className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15",
                // Responsive padding and border radius
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px] xl:p-[36px] 2xl:p-[40px]",
                "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] 2xl:rounded-[22px]"
              )}>
                <div className="text-center">
                  <div className={cn(
                    "font-thunder font-bold text-white mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
                    // Responsive line height
                    "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
                  )}>
                    {stats.averageGroupSize}
                  </div>
                  <p className={cn(
                    "font-onest font-medium text-white/90",
                    // Responsive font size
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    Average Group Size
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className={cn(
                "bg-white/20 backdrop-blur-sm text-white border border-white/30 font-onest font-medium transition-all duration-300 hover:bg-white/30 hover:border-white/50 flex items-center gap-3",
                // Responsive padding and border radius
                "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[28px] md:py-[14px] lg:px-[32px] lg:py-[16px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]",
                // Responsive font size
                "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
              )}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Download MICE Brochure
              </button>
              
              <button className={cn(
                "bg-[#0066CC] text-white font-onest font-medium transition-all duration-300 hover:bg-[#004499] flex items-center gap-3",
                // Responsive padding and border radius
                "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[28px] md:py-[14px] lg:px-[32px] lg:py-[16px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]",
                // Responsive font size
                "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
              )}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}