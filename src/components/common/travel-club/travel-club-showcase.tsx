'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ClubBenefit {
  icon: React.ReactNode
  title: string
  description: string
  value: string
}

interface RewardTier {
  name: string
  points: number
  benefits: string[]
  color: string
  icon: React.ReactNode
}

interface TravelClubShowcaseProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  benefits?: ClubBenefit[]
  rewardTiers?: RewardTier[]
  clubStats?: {
    totalMembers: number
    pointsRedeemed: number
    averageSavings: number
  }
  className?: string
}

export function TravelClubShowcase({
  title = "EU Holidays Travel Club",
  subtitle = "Unlock Exclusive Benefits & Rewards",
  description = "Join our exclusive travel club and earn points on every booking. Enjoy member-only deals, priority booking, complimentary upgrades, and redeem points for free tours and experiences.",
  backgroundImage = "/assets/images/travel-club-hero.jpg",
  benefits = [],
  rewardTiers = [],
  clubStats,
  className
}: TravelClubShowcaseProps) {
  
  const defaultStats = {
    totalMembers: 12847,
    pointsRedeemed: 2340000,
    averageSavings: 485
  }

  const stats = clubStats || defaultStats

  const defaultBenefits: ClubBenefit[] = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Earn Points",
      description: "Earn 1 point for every $1 spent",
      value: "1:1 Ratio"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Member Deals",
      description: "Exclusive discounts up to 25% off",
      value: "Up to 25%"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Priority Booking",
      description: "Book popular tours before general release",
      value: "Early Access"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Free Upgrades",
      description: "Complimentary room and service upgrades",
      value: "Premium"
    }
  ]

  const defaultRewardTiers: RewardTier[] = [
    {
      name: "Explorer",
      points: 0,
      benefits: ["1x Points on Bookings", "Member Newsletter", "Basic Support"],
      color: "bg-slate-100 text-slate-800",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </svg>
      )
    },
    {
      name: "Adventurer",
      points: 2500,
      benefits: ["1.5x Points on Bookings", "10% Member Discount", "Priority Support", "Early Access"],
      color: "bg-blue-100 text-blue-800",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
        </svg>
      )
    },
    {
      name: "Voyager",
      points: 7500,
      benefits: ["2x Points on Bookings", "15% Member Discount", "Free Upgrades", "Concierge Service"],
      color: "bg-purple-100 text-purple-800",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
        </svg>
      )
    },
    {
      name: "Elite",
      points: 15000,
      benefits: ["3x Points on Bookings", "25% Member Discount", "Premium Upgrades", "Personal Travel Advisor"],
      color: "bg-yellow-100 text-yellow-800",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z" />
        </svg>
      )
    }
  ]

  const displayBenefits = benefits.length > 0 ? benefits : defaultBenefits
  const displayTiers = rewardTiers.length > 0 ? rewardTiers : defaultRewardTiers

  return (
    <div className={cn("w-full", className)}>
      {/* Hero Section */}
      <div className={cn(
        "relative overflow-hidden",
        "h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[750px]"
      )}>
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Travel Club"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto h-full flex items-center">
          <div className={cn(
            "text-white",
            // Responsive padding
            "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
            "py-[32px] sm:py-[40px] md:py-[48px] lg:py-[56px] xl:py-[64px] 2xl:py-[72px]"
          )}>
            <div className="max-w-2xl">
              {/* Title */}
              <h1 className={cn(
                "font-thunder font-medium mb-4 sm:mb-6",
                // Responsive font size
                "text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[72px]",
                // Responsive line height
                "leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[60px] xl:leading-[68px] 2xl:leading-[76px]"
              )}>
                {title}
              </h1>

              {/* Subtitle */}
              <h2 className={cn(
                "font-onest font-medium text-white/90 mb-4 sm:mb-6",
                // Responsive font size
                "text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]",
                // Responsive line height
                "leading-[20px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px] xl:leading-[38px] 2xl:leading-[42px]"
              )}>
                {subtitle}
              </h2>

              {/* Description */}
              <p className={cn(
                "font-onest text-white/80 mb-8 sm:mb-10",
                // Responsive font size
                "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]",
                // Responsive line height
                "leading-[18px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px]"
              )}>
                {description}
              </p>

              {/* CTA Button */}
              <button className={cn(
                "bg-[#0066CC] text-white font-onest font-medium transition-all duration-300 hover:bg-[#004499] flex items-center gap-3",
                // Responsive padding and border radius
                "px-[24px] py-[12px] sm:px-[32px] sm:py-[16px] md:px-[36px] md:py-[18px] lg:px-[40px] lg:py-[20px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px]",
                // Responsive font size
                "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
              )}>
                <span>Join Travel Club</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Club Statistics */}
      <div className="bg-[#F8F9FA] border-y border-[#F0F0F0]">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className={cn(
            "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8",
            // Responsive padding
            "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
            "py-[24px] sm:py-[32px] md:py-[40px] lg:py-[48px] xl:py-[56px] 2xl:py-[64px]"
          )}>
            {/* Total Members */}
            <div className="text-center">
              <div className={cn(
                "font-thunder font-bold text-[#0066CC] mb-2",
                "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
              )}>
                {stats.totalMembers.toLocaleString()}+
              </div>
              <p className={cn(
                "font-onest font-medium text-[#242424]",
                "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]"
              )}>
                Active Members
              </p>
            </div>

            {/* Points Redeemed */}
            <div className="text-center">
              <div className={cn(
                "font-thunder font-bold text-[#0066CC] mb-2",
                "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
              )}>
                {(stats.pointsRedeemed / 1000000).toFixed(1)}M+
              </div>
              <p className={cn(
                "font-onest font-medium text-[#242424]",
                "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]"
              )}>
                Points Redeemed
              </p>
            </div>

            {/* Average Savings */}
            <div className="text-center">
              <div className={cn(
                "font-thunder font-bold text-[#0066CC] mb-2",
                "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
              )}>
                ${stats.averageSavings}
              </div>
              <p className={cn(
                "font-onest font-medium text-[#242424]",
                "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]"
              )}>
                Average Annual Savings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Club Benefits */}
      <div className="bg-white">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className={cn(
            // Responsive padding
            "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
            "py-[32px] sm:py-[40px] md:py-[48px] lg:py-[56px] xl:py-[64px] 2xl:py-[72px]"
          )}>
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className={cn(
                "font-thunder font-medium text-[#242424] mb-4 sm:mb-6",
                "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
              )}>
                Member Benefits
              </h2>
              <p className={cn(
                "font-onest text-[#666666] max-w-2xl mx-auto",
                "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]"
              )}>
                Enjoy exclusive perks and rewards designed to enhance every aspect of your travel experience
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {displayBenefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  {/* Icon */}
                  <div className={cn(
                    "inline-flex items-center justify-center bg-[#F0F8FF] text-[#0066CC] group-hover:bg-[#0066CC] group-hover:text-white transition-colors duration-300 mb-4 sm:mb-6",
                    "w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] md:w-[80px] md:h-[80px] lg:w-[88px] lg:h-[88px] xl:w-[96px] xl:h-[96px] 2xl:w-[104px] 2xl:h-[104px]",
                    "rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[22px] xl:rounded-[24px] 2xl:rounded-[26px]"
                  )}>
                    <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[44px] 2xl:h-[44px]">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={cn(
                    "font-thunder font-medium text-[#242424] mb-2 sm:mb-3",
                    "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]"
                  )}>
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className={cn(
                    "font-onest text-[#666666] mb-2 sm:mb-3",
                    "text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]"
                  )}>
                    {benefit.description}
                  </p>

                  {/* Value */}
                  <span className={cn(
                    "font-onest font-bold text-[#0066CC]",
                    "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
                  )}>
                    {benefit.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reward Tiers */}
      <div className="bg-[#F8F9FA]">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className={cn(
            // Responsive padding
            "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
            "py-[32px] sm:py-[40px] md:py-[48px] lg:py-[56px] xl:py-[64px] 2xl:py-[72px]"
          )}>
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className={cn(
                "font-thunder font-medium text-[#242424] mb-4 sm:mb-6",
                "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
              )}>
                Reward Tiers
              </h2>
              <p className={cn(
                "font-onest text-[#666666] max-w-2xl mx-auto",
                "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]"
              )}>
                The more you travel, the more you earn. Unlock better benefits as you progress through our reward tiers
              </p>
            </div>

            {/* Tiers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {displayTiers.map((tier, index) => (
                <div key={index} className={cn(
                  "bg-white border border-[#F0F0F0] transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px]",
                  "rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px]"
                )}>
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className={cn(
                      "font-onest font-bold rounded-full",
                      "px-[12px] py-[6px] sm:px-[16px] sm:py-[8px]",
                      "text-[11px] sm:text-[12px] md:text-[13px]",
                      tier.color
                    )}>
                      {tier.name}
                    </span>
                    <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] text-[#0066CC]">
                      {tier.icon}
                    </div>
                  </div>

                  {/* Points Requirement */}
                  <div className="mb-4 sm:mb-6">
                    <span className={cn(
                      "font-onest text-[#888888]",
                      "text-[11px] sm:text-[12px] md:text-[13px]"
                    )}>
                      Required Points:
                    </span>
                    <div className={cn(
                      "font-thunder font-bold text-[#242424]",
                      "text-[20px] sm:text-[24px] md:text-[28px]"
                    )}>
                      {tier.points.toLocaleString()}+
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-2 sm:space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={cn(
                          "font-onest text-[#666666]",
                          "text-[11px] sm:text-[12px] md:text-[13px]"
                        )}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}