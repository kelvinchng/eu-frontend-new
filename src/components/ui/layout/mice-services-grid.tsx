'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MICEService {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  capacity?: string
  duration?: string
  price?: string
  popular?: boolean
  category: 'meetings' | 'incentives' | 'conferences' | 'events'
}

interface MICEServicesGridProps {
  services: MICEService[]
  title?: string
  subtitle?: string
  columns?: 2 | 3 | 4
  showCategories?: boolean
  onServiceClick?: (service: MICEService) => void
  className?: string
}

export function MICEServicesGrid({
  services,
  title = "Our MICE Services",
  subtitle = "Comprehensive corporate event solutions tailored to your business needs",
  columns = 3,
  showCategories = true,
  onServiceClick,
  className
}: MICEServicesGridProps) {

  const defaultServices: MICEService[] = [
    {
      id: '1',
      title: 'Executive Board Meetings',
      description: 'Private boardroom sessions with premium amenities and professional support.',
      image: '/assets/images/mice-boardroom.jpg',
      features: ['Private boardroom', 'A/V equipment', 'Catering service', 'Dedicated support'],
      capacity: '8-20 people',
      duration: 'Half/Full day',
      price: 'From $500',
      category: 'meetings'
    },
    {
      id: '2',
      title: 'Incentive Travel Programs',
      description: 'Motivational reward trips that boost team morale and performance.',
      image: '/assets/images/mice-incentive.jpg',
      features: ['Luxury accommodations', 'Unique experiences', 'Team activities', 'Awards ceremony'],
      capacity: '20-200 people',
      duration: '3-7 days',
      price: 'From $2,500',
      popular: true,
      category: 'incentives'
    },
    {
      id: '3',
      title: 'International Conferences',
      description: 'Large-scale conferences with world-class venues and technical support.',
      image: '/assets/images/mice-conference.jpg',
      features: ['Convention centers', 'Live streaming', 'Translation services', 'Registration management'],
      capacity: '100-2000 people',
      duration: '1-5 days',
      price: 'From $15,000',
      category: 'conferences'
    },
    {
      id: '4',
      title: 'Corporate Events',
      description: 'Memorable celebrations, product launches, and company milestones.',
      image: '/assets/images/mice-events.jpg',
      features: ['Event planning', 'Entertainment', 'Photography', 'Branded materials'],
      capacity: '50-500 people',
      duration: '4-8 hours',
      price: 'From $5,000',
      category: 'events'
    },
    {
      id: '5',
      title: 'Team Building Retreats',
      description: 'Engaging team-building activities in inspiring destinations.',
      image: '/assets/images/mice-teambuilding.jpg',
      features: ['Adventure activities', 'Workshop sessions', 'Accommodation', 'Meals included'],
      capacity: '15-100 people',
      duration: '2-4 days',
      price: 'From $1,200',
      category: 'meetings'
    },
    {
      id: '6',
      title: 'Gala Dinners & Awards',
      description: 'Elegant evening events with premium dining and entertainment.',
      image: '/assets/images/mice-gala.jpg',
      features: ['Fine dining', 'Entertainment program', 'Awards ceremony', 'Photography'],
      capacity: '50-800 people',
      duration: '3-5 hours',
      price: 'From $8,000',
      popular: true,
      category: 'events'
    }
  ]

  const displayServices = services.length > 0 ? services : defaultServices

  const categories = [
    { key: 'meetings', label: 'Meetings', icon: '🏢' },
    { key: 'incentives', label: 'Incentives', icon: '🎯' },
    { key: 'conferences', label: 'Conferences', icon: '🎤' },
    { key: 'events', label: 'Events', icon: '🎉' }
  ]

  const getGridClasses = () => {
    const baseClasses = "grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16"
    
    switch (columns) {
      case 2:
        return cn(baseClasses, "grid-cols-1 sm:grid-cols-2")
      case 3:
        return cn(baseClasses, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")
      case 4:
        return cn(baseClasses, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4")
      default:
        return cn(baseClasses, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")
    }
  }

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.key === category)
    return categoryData?.icon || '📋'
  }

  const getCategoryLabel = (category: string) => {
    const categoryData = categories.find(cat => cat.key === category)
    return categoryData?.label || category
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full max-w-[1920px] mx-auto">
        <div className={cn(
          // Responsive padding
          "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
          "py-[32px] sm:py-[40px] md:py-[48px] lg:py-[56px] xl:py-[64px] 2xl:py-[72px]"
        )}>
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className={cn(
              "font-thunder font-medium text-[#242424] mb-4 sm:mb-6",
              // Responsive font size
              "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
              // Responsive line height
              "leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]"
            )}>
              {title}
            </h2>
            <p className={cn(
              "font-onest text-[#666666] max-w-3xl mx-auto",
              // Responsive font size
              "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]",
              // Responsive line height
              "leading-[16px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[28px]"
            )}>
              {subtitle}
            </p>
          </div>

          {/* Service Categories */}
          {showCategories && (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              {categories.map(category => {
                const count = displayServices.filter(service => service.category === category.key).length
                return (
                  <div key={category.key} className={cn(
                    "bg-[#F0F8FF] text-[#0066CC] font-onest font-medium rounded-full transition-all duration-300 hover:bg-[#0066CC] hover:text-white",
                    "px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] md:px-[24px] md:py-[12px]",
                    "text-[12px] sm:text-[14px] md:text-[16px]"
                  )}>
                    <span className="mr-2">{category.icon}</span>
                    {category.label} ({count})
                  </div>
                )
              })}
            </div>
          )}

          {/* Services Grid */}
          <div className={getGridClasses()}>
            {displayServices.map(service => (
              <div
                key={service.id}
                className={cn(
                  "group bg-white border border-[#F0F0F0] overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer",
                  // Responsive border radius
                  "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] 2xl:rounded-[18px]",
                  service.popular && "ring-2 ring-[#0066CC] ring-offset-4"
                )}
                onClick={() => onServiceClick?.(service)}
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={cn(
                      "bg-white/90 text-[#242424] font-onest font-medium rounded-full backdrop-blur-sm",
                      "px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] md:px-[12px] md:py-[6px]",
                      "text-[10px] sm:text-[11px] md:text-[12px]"
                    )}>
                      {getCategoryIcon(service.category)} {getCategoryLabel(service.category)}
                    </span>
                  </div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-3 right-3">
                      <span className={cn(
                        "bg-[#FFD700] text-[#242424] font-onest font-bold rounded-full",
                        "px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] md:px-[12px] md:py-[6px]",
                        "text-[10px] sm:text-[11px] md:text-[12px]"
                      )}>
                        ⭐ POPULAR
                      </span>
                    </div>
                  )}

                  {/* Price Badge */}
                  {service.price && (
                    <div className="absolute bottom-3 right-3">
                      <span className={cn(
                        "bg-[#0066CC] text-white font-onest font-bold rounded-full",
                        "px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] md:px-[12px] md:py-[6px]",
                        "text-[10px] sm:text-[11px] md:text-[12px]"
                      )}>
                        {service.price}
                      </span>
                    </div>
                  )}

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className={cn(
                      "bg-white/90 text-[#242424] font-onest font-medium rounded-full transition-all duration-300 hover:bg-white",
                      "px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] md:px-[24px] md:py-[12px]",
                      "text-[12px] sm:text-[14px] md:text-[16px]"
                    )}>
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Service Details */}
                <div className={cn(
                  // Responsive padding
                  "p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px]"
                )}>
                  {/* Title */}
                  <h3 className={cn(
                    "font-thunder font-medium text-[#242424] mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]",
                    // Responsive line height
                    "leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px]"
                  )}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={cn(
                    "font-onest text-[#666666] mb-4 sm:mb-6",
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]",
                    "leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[19px] xl:leading-[20px] 2xl:leading-[21px]"
                  )}>
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    {service.capacity && (
                      <div>
                        <span className={cn(
                          "font-onest font-medium text-[#242424] block",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          👥 Capacity:
                        </span>
                        <span className={cn(
                          "font-onest text-[#666666]",
                          "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
                        )}>
                          {service.capacity}
                        </span>
                      </div>
                    )}
                    
                    {service.duration && (
                      <div>
                        <span className={cn(
                          "font-onest font-medium text-[#242424] block",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]"
                        )}>
                          ⏱️ Duration:
                        </span>
                        <span className={cn(
                          "font-onest text-[#666666]",
                          "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
                        )}>
                          {service.duration}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className={cn(
                      "font-onest font-medium text-[#242424] mb-2 sm:mb-3",
                      "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                    )}>
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={cn(
                            "font-onest text-[#666666]",
                            "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]"
                          )}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <p className={cn(
              "font-onest text-[#666666] mb-4 sm:mb-6",
              "text-[14px] sm:text-[16px] md:text-[18px]"
            )}>
              Don't see what you're looking for? We create custom solutions for every business need.
            </p>
            <button className={cn(
              "bg-[#0066CC] text-white font-onest font-medium transition-all duration-300 hover:bg-[#004499] flex items-center gap-3 mx-auto",
              "px-[24px] py-[12px] sm:px-[32px] sm:py-[16px] md:px-[36px] md:py-[18px]",
              "rounded-[8px] sm:rounded-[10px] md:rounded-[12px]",
              "text-[14px] sm:text-[16px] md:text-[18px]"
            )}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Request Custom Proposal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}