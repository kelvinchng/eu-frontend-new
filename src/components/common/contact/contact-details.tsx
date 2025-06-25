'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ContactLocation {
  id: string
  name: string
  address: string
  phone?: string
  email?: string
  hours?: string[]
  mapUrl?: string
  image?: string
}

interface SocialLink {
  platform: string
  url: string
  icon: React.ReactNode
  handle?: string
}

interface ContactDetailsProps {
  title?: string
  subtitle?: string
  locations?: ContactLocation[]
  socialLinks?: SocialLink[]
  generalInfo?: {
    phone?: string
    email?: string
    hours?: string[]
  }
  emergencyContact?: {
    phone: string
    description: string
  }
  showMap?: boolean
  className?: string
}

export function ContactDetails({
  title = "Our Locations",
  subtitle = "Visit us at any of our convenient locations or get in touch through your preferred channel",
  locations = [],
  socialLinks = [],
  generalInfo,
  emergencyContact,
  showMap = true,
  className
}: ContactDetailsProps) {
  
  const defaultLocations: ContactLocation[] = [
    {
      id: 'main',
      name: 'EU Holidays Main Office',
      address: '123 Orchard Road, #12-34, Singapore 238873',
      phone: '+65 6123 4567',
      email: 'main@euholidays.com',
      hours: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ],
      mapUrl: 'https://maps.google.com/?q=123+Orchard+Road+Singapore'
    },
    {
      id: 'branch',
      name: 'EU Holidays Branch Office',
      address: '456 Marina Bay, #05-67, Singapore 018987',
      phone: '+65 6234 5678',
      email: 'branch@euholidays.com',
      hours: [
        'Monday - Friday: 10:00 AM - 7:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed'
      ],
      mapUrl: 'https://maps.google.com/?q=456+Marina+Bay+Singapore'
    }
  ]

  const defaultSocialLinks: SocialLink[] = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/euholidays',
      handle: '@euholidays',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/euholidays',
      handle: '@euholidays',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.929.013 7.794.048 5.48.156 3.85.468 2.474 1.171 1.142 1.851.316 2.833.094 4.547.006 5.537 0 5.966 0 12.017c0 6.624.017 6.985.094 8.054.222 1.714 1.048 2.696 2.38 3.376 1.376.703 3.006 1.015 5.32 1.123.135.035.602.048 4.197.048 3.595 0 4.062-.013 4.197-.048 2.314-.108 3.944-.42 5.32-1.123 1.332-.68 2.158-1.662 2.38-3.376.077-1.069.094-1.43.094-8.054 0-6.051-.006-6.48-.094-7.47C23.506 2.833 22.68 1.851 21.348 1.171 19.972.468 18.342.156 16.028.048 15.893.013 15.426 0 12.017 0zm0 2.17c3.554 0 3.973.014 5.376.08 1.297.059 2.001.274 2.469.456.621.242 1.064.531 1.532.998.468.468.756.911.998 1.532.182.468.397 1.172.456 2.469.066 1.403.08 1.822.08 5.376 0 3.554-.014 3.973-.08 5.376-.059 1.297-.274 2.001-.456 2.469-.242.621-.531 1.064-.998 1.532-.468.468-.911.756-1.532.998-.468.182-1.172.397-2.469.456-1.403.066-1.822.08-5.376.08-3.554 0-3.973-.014-5.376-.08-1.297-.059-2.001-.274-2.469-.456-.621-.242-1.064-.531-1.532-.998-.468-.468-.756-.911-.998-1.532-.182-.468-.397-1.172-.456-2.469-.066-1.403-.08-1.822-.08-5.376 0-3.554.014-3.973.08-5.376.059-1.297.274-2.001.456-2.469.242-.621.531-1.064.998-1.532.468-.468.911-.756 1.532-.998.468-.182 1.172-.397 2.469-.456 1.403-.066 1.822-.08 5.376-.08z"/>
          <path d="M12.017 15.33c-1.797 0-3.269-1.472-3.269-3.269s1.472-3.269 3.269-3.269 3.269 1.472 3.269 3.269-1.472 3.269-3.269 3.269zM12.017 7.793c-2.269 0-4.268 1.999-4.268 4.268s1.999 4.268 4.268 4.268 4.268-1.999 4.268-4.268-1.999-4.268-4.268-4.268zM17.99 6.42c-.53 0-.999.469-.999.999s.469.999.999.999.999-.469.999-.999-.469-.999-.999-.999z"/>
        </svg>
      )
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/euholidays',
      handle: '@euholidays',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  const displayLocations = locations.length > 0 ? locations : defaultLocations
  const displaySocialLinks = socialLinks.length > 0 ? socialLinks : defaultSocialLinks

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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Locations */}
            <div className="lg:col-span-2">
              <h3 className={cn(
                "font-thunder font-medium text-[#242424] mb-6 sm:mb-8",
                // Responsive font size
                "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]",
                // Responsive line height
                "leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px]"
              )}>
                Office Locations
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {displayLocations.map((location, index) => (
                  <div key={location.id} className={cn(
                    "bg-white border border-[#F0F0F0] transition-all duration-300 hover:shadow-lg",
                    // Responsive padding and border radius
                    "p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px]",
                    "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] 2xl:rounded-[18px]"
                  )}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6">
                      <div className="flex-1">
                        {/* Location Name */}
                        <h4 className={cn(
                          "font-thunder font-medium text-[#242424] mb-2 sm:mb-3",
                          // Responsive font size
                          "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]",
                          // Responsive line height
                          "leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px]"
                        )}>
                          {location.name}
                        </h4>

                        {/* Address */}
                        <div className="flex items-start gap-2 mb-3 sm:mb-4">
                          <svg className="w-4 h-4 text-[#0066CC] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <p className={cn(
                            "font-onest text-[#666666]",
                            // Responsive font size
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]",
                            // Responsive line height
                            "leading-[15px] sm:leading-[16px] md:leading-[17px] lg:leading-[18px] xl:leading-[19px] 2xl:leading-[20px]"
                          )}>
                            {location.address}
                          </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2">
                          {location.phone && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-[#0066CC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <a href={`tel:${location.phone.replace(/\s/g, '')}`} className={cn(
                                "font-onest text-[#0066CC] hover:text-[#004499] transition-colors",
                                "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                              )}>
                                {location.phone}
                              </a>
                            </div>
                          )}

                          {location.email && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-[#0066CC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <a href={`mailto:${location.email}`} className={cn(
                                "font-onest text-[#0066CC] hover:text-[#004499] transition-colors",
                                "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                              )}>
                                {location.email}
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Hours */}
                        {location.hours && location.hours.length > 0 && (
                          <div className="mt-3 sm:mt-4">
                            <h5 className={cn(
                              "font-onest font-medium text-[#242424] mb-2",
                              "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                            )}>
                              Opening Hours:
                            </h5>
                            <div className="space-y-1">
                              {location.hours.map((hour, hourIndex) => (
                                <p key={hourIndex} className={cn(
                                  "font-onest text-[#666666]",
                                  "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                                )}>
                                  {hour}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Map Link */}
                      {location.mapUrl && (
                        <div className="flex-shrink-0">
                          <a
                            href={location.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "inline-flex items-center gap-2 bg-[#0066CC] text-white font-onest font-medium transition-colors hover:bg-[#004499]",
                              // Responsive padding and border radius
                              "px-[12px] py-[6px] sm:px-[16px] sm:py-[8px] md:px-[18px] md:py-[9px] lg:px-[20px] lg:py-[10px]",
                              "rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] xl:rounded-[10px] 2xl:rounded-[11px]",
                              // Responsive font size
                              "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                            )}
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            View Map
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* General Information */}
              {generalInfo && (
                <div className={cn(
                  "bg-[#F8F9FA] border border-[#F0F0F0]",
                  // Responsive padding and border radius
                  "p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px]",
                  "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] 2xl:rounded-[18px]"
                )}>
                  <h4 className={cn(
                    "font-thunder font-medium text-[#242424] mb-4 sm:mb-6",
                    "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]"
                  )}>
                    General Information
                  </h4>

                  <div className="space-y-3 sm:space-y-4">
                    {generalInfo.phone && (
                      <div>
                        <p className={cn(
                          "font-onest font-medium text-[#242424] mb-1",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                        )}>
                          Main Phone:
                        </p>
                        <a href={`tel:${generalInfo.phone.replace(/\s/g, '')}`} className={cn(
                          "font-onest text-[#0066CC] hover:text-[#004499] transition-colors",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                        )}>
                          {generalInfo.phone}
                        </a>
                      </div>
                    )}

                    {generalInfo.email && (
                      <div>
                        <p className={cn(
                          "font-onest font-medium text-[#242424] mb-1",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                        )}>
                          General Inquiries:
                        </p>
                        <a href={`mailto:${generalInfo.email}`} className={cn(
                          "font-onest text-[#0066CC] hover:text-[#004499] transition-colors",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                        )}>
                          {generalInfo.email}
                        </a>
                      </div>
                    )}

                    {generalInfo.hours && generalInfo.hours.length > 0 && (
                      <div>
                        <p className={cn(
                          "font-onest font-medium text-[#242424] mb-2",
                          "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                        )}>
                          Business Hours:
                        </p>
                        <div className="space-y-1">
                          {generalInfo.hours.map((hour, index) => (
                            <p key={index} className={cn(
                              "font-onest text-[#666666]",
                              "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                            )}>
                              {hour}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Emergency Contact */}
              {emergencyContact && (
                <div className={cn(
                  "bg-red-50 border border-red-200",
                  // Responsive padding and border radius
                  "p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px]",
                  "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] 2xl:rounded-[18px]"
                )}>
                  <h4 className={cn(
                    "font-thunder font-medium text-red-800 mb-3 sm:mb-4",
                    "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]"
                  )}>
                    24/7 Emergency Contact
                  </h4>
                  <p className={cn(
                    "font-onest text-red-700 mb-2",
                    "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                  )}>
                    {emergencyContact.description}
                  </p>
                  <a href={`tel:${emergencyContact.phone.replace(/\s/g, '')}`} className={cn(
                    "font-onest font-bold text-red-600 hover:text-red-800 transition-colors",
                    "text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
                  )}>
                    {emergencyContact.phone}
                  </a>
                </div>
              )}

              {/* Social Media */}
              {displaySocialLinks.length > 0 && (
                <div className={cn(
                  "bg-white border border-[#F0F0F0]",
                  // Responsive padding and border radius
                  "p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px]",
                  "rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] 2xl:rounded-[18px]"
                )}>
                  <h4 className={cn(
                    "font-thunder font-medium text-[#242424] mb-4 sm:mb-6",
                    "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]"
                  )}>
                    Follow Us
                  </h4>

                  <div className="space-y-3 sm:space-y-4">
                    {displaySocialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group hover:bg-[#F8F9FA] transition-colors p-2 rounded-lg"
                      >
                        <div className={cn(
                          "flex items-center justify-center bg-[#F0F0F0] text-[#666666] group-hover:bg-[#0066CC] group-hover:text-white transition-colors",
                          "w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px]",
                          "rounded-[6px] sm:rounded-[7px] md:rounded-[8px]"
                        )}>
                          <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]">
                            {social.icon}
                          </div>
                        </div>
                        <div>
                          <p className={cn(
                            "font-onest font-medium text-[#242424] group-hover:text-[#0066CC] transition-colors",
                            "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]"
                          )}>
                            {social.platform}
                          </p>
                          {social.handle && (
                            <p className={cn(
                              "font-onest text-[#666666]",
                              "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
                            )}>
                              {social.handle}
                            </p>
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}