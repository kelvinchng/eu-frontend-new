'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ContactMethod {
  icon: React.ReactNode
  title: string
  description: string
  action: string
  href?: string
  onClick?: () => void
}

interface ContactHeroProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  contactMethods?: ContactMethod[]
  showQuickContact?: boolean
  className?: string
}

export function ContactHero({
  title = "Get in Touch",
  subtitle = "We're Here to Help Plan Your Perfect Journey",
  description = "Have questions about our tours or need help planning your next adventure? Our travel experts are ready to assist you with personalized recommendations and support.",
  backgroundImage = "/assets/images/hero-banner.jpg",
  contactMethods = [],
  showQuickContact = true,
  className
}: ContactHeroProps) {
  
  const defaultContactMethods: ContactMethod[] = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      description: "Speak directly with our travel experts",
      action: "+65 6123 4567",
      href: "tel:+6561234567"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Send us your questions anytime",
      action: "info@euholidays.com",
      href: "mailto:info@euholidays.com"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      title: "WhatsApp",
      description: "Chat with us instantly",
      action: "+65 9123 4567",
      href: "https://wa.me/6591234567"
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      description: "Come to our office",
      action: "View Locations",
      href: "/locations"
    }
  ]

  const methods = contactMethods.length > 0 ? contactMethods : defaultContactMethods

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Hero Section */}
      <div className={cn(
        "relative flex items-center",
        // Responsive height
        "h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px]"
      )}>
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Contact Us"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto">
          <div className={cn(
            "text-center text-white",
            // Responsive padding
            "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
            "py-[24px] sm:py-[32px] md:py-[40px] lg:px-[48px] xl:py-[56px] 2xl:py-[64px]"
          )}>
            {/* Title */}
            <h1 className={cn(
              "font-thunder font-medium mb-4 sm:mb-6 md:mb-8",
              // Responsive font size
              "text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px]",
              // Responsive line height
              "leading-[32px] sm:leading-[40px] md:leading-[48px] lg:leading-[56px] xl:leading-[64px] 2xl:leading-[72px]",
              "max-w-4xl mx-auto"
            )}>
              {title}
            </h1>

            {/* Subtitle */}
            <h2 className={cn(
              "font-onest font-medium text-white/90 mb-3 sm:mb-4 md:mb-6",
              // Responsive font size
              "text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px]",
              // Responsive line height
              "leading-[18px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[36px] 2xl:leading-[40px]",
              "max-w-3xl mx-auto"
            )}>
              {subtitle}
            </h2>

            {/* Description */}
            <p className={cn(
              "font-onest text-white/80",
              // Responsive font size
              "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]",
              // Responsive line height
              "leading-[16px] sm:leading-[20px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px]",
              "max-w-2xl mx-auto"
            )}>
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Methods */}
      {showQuickContact && (
        <div className={cn(
          "relative z-20 bg-white",
          // Responsive negative margin to overlap hero
          "-mt-[80px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[140px] xl:-mt-[160px] 2xl:-mt-[180px]"
        )}>
          <div className="w-full max-w-[1920px] mx-auto">
            <div className={cn(
              "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8",
              // Responsive padding
              "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
              "py-[24px] sm:py-[32px] md:py-[40px] lg:py-[48px] xl:py-[56px] 2xl:py-[64px]"
            )}>
              {methods.map((method, index) => (
                <div
                  key={index}
                  className={cn(
                    "group text-center transition-all duration-300 hover:scale-105",
                    method.href && "cursor-pointer"
                  )}
                  onClick={method.href ? () => window.open(method.href, '_blank') : method.onClick}
                >
                  {/* Icon */}
                  <div className={cn(
                    "inline-flex items-center justify-center bg-[#F0F8FF] text-[#0066CC] group-hover:bg-[#0066CC] group-hover:text-white transition-colors duration-300 mb-3 sm:mb-4 md:mb-6",
                    // Responsive icon size
                    "w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px] lg:w-[84px] lg:h-[84px] xl:w-[96px] xl:h-[96px] 2xl:w-[108px] 2xl:h-[108px]",
                    // Responsive border radius
                    "rounded-[12px] sm:rounded-[15px] md:rounded-[18px] lg:rounded-[21px] xl:rounded-[24px] 2xl:rounded-[27px]"
                  )}>
                    <div className={cn(
                      "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px]"
                    )}>
                      {method.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={cn(
                    "font-thunder font-medium text-[#242424] mb-1 sm:mb-2",
                    // Responsive font size
                    "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[28px]"
                  )}>
                    {method.title}
                  </h3>

                  {/* Description */}
                  <p className={cn(
                    "font-onest text-[#666666] mb-2 sm:mb-3",
                    // Responsive font size
                    "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]",
                    // Responsive line height
                    "leading-[12px] sm:leading-[14px] md:leading-[15px] lg:leading-[16px] xl:leading-[17px] 2xl:leading-[18px]"
                  )}>
                    {method.description}
                  </p>

                  {/* Action */}
                  <p className={cn(
                    "font-onest font-medium text-[#0066CC] group-hover:text-[#004499] transition-colors",
                    // Responsive font size
                    "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]",
                    // Responsive line height
                    "leading-[13px] sm:leading-[15px] md:leading-[16px] lg:leading-[17px] xl:leading-[18px] 2xl:leading-[19px]"
                  )}>
                    {method.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}