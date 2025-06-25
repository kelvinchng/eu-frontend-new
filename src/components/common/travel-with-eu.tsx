'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'
import { TravelWithEUTab, fetchTravelWithEUTabsClient } from '@/lib/data-fetchers'


interface TravelWithEUProps {
  className?: string
  tabs?: TravelWithEUTab[]
}

export function TravelWithEU({ className, tabs: initialTabs }: TravelWithEUProps) {
  const [tabs, setTabs] = useState<TravelWithEUTab[]>(initialTabs || [])
  const [loading, setLoading] = useState(!initialTabs)
  const [activeTab, setActiveTab] = useState('award')

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
                  src="/assets/logos/eu-awards-logos.png"
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
              {tabs.map((tab, index) => (
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
      </div>
    </section>
  )
}