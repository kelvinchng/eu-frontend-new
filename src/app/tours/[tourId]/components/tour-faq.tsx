'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Plus, X } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface TourFAQProps {
  faq: FAQItem[]
  className?: string
}

export function TourFAQ({ faq, className }: TourFAQProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>('1') // First FAQ expanded by default

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Title */}
      <h2 className="font-thunder font-medium text-[32px] lg:text-[50px] leading-[0.92] text-[#242424] uppercase mb-[40px] lg:mb-[111px] text-center">
        Frequently Asked Questions
      </h2>
      
      {/* FAQ Items */}
      <div className="space-y-[10px] lg:space-y-[21px]">
        {faq.map((item) => {
          const isExpanded = expandedFAQ === item.id
          
          return (
            <div
              key={item.id}
              className={cn(
                "relative transition-all duration-300"
              )}
            >
              {/* Question Bar */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className={cn(
                  "w-full flex items-center justify-between transition-colors",
                  // Mobile styles
                  "h-[52px] lg:h-[56px] rounded-[4px] lg:rounded-[8px] px-[16px] lg:px-[42.67px]",
                  // Expanded: mobile height increases to 69px
                  isExpanded && "h-[69px] lg:h-[56px]",
                  isExpanded ? "bg-[#242424] border border-[#242424]" : "bg-white border border-[#DCDCDC] lg:border-[rgba(0,0,0,0.55)]"
                )}
              >
                <h3 className={cn(
                  "font-onest text-left pr-[12px]",
                  // Mobile: 600 weight, uppercase
                  "font-semibold lg:font-bold text-[13px] lg:text-[20px] leading-[1.308] lg:leading-[1.275]",
                  "uppercase lg:capitalize",
                  isExpanded ? "text-white" : "text-[#242424]"
                )}>
                  {item.question}
                </h3>
                
                {/* Icon */}
                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <X className={cn(
                      "w-[11.5px] h-[11.5px] lg:w-[25px] lg:h-[25px] text-white"
                    )} strokeWidth={2} />
                  ) : (
                    <Plus className={cn(
                      "w-[11.5px] h-[11.5px] lg:w-[18px] lg:h-[18px] text-[#242424]"
                    )} strokeWidth={2} />
                  )}
                </div>
              </button>
              
              {/* Answer Content */}
              {isExpanded && (
                <div className={cn(
                  "mt-[30px] lg:mt-[32px]",
                  "px-[16px] lg:pl-[61px] lg:pr-[57px]"
                )}>
                  <p className="font-onest font-normal text-[13px] lg:text-[18px] leading-[1.275] text-[#242424]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}