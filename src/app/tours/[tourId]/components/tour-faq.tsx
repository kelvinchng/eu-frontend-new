'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

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
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop FAQ */}
      <div className="hidden lg:block">
        <h2 className="font-thunder text-[50px] leading-[0.92] text-[#242424] mb-[32px]">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-[16px]">
          {faq.map((item) => (
            <div
              key={item.id}
              className={cn(
                "border border-[#E8E8E8] rounded-[12px] overflow-hidden transition-colors",
                expandedFAQ === item.id ? "border-[#242424] bg-[#F9F9F9]" : "hover:border-[#CCCCCC]"
              )}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between px-[32px] py-[24px] text-left"
              >
                <h3 className="font-onest font-semibold text-[18px] leading-[1.4] text-[#242424] pr-[16px]">
                  {item.question}
                </h3>
                
                <svg
                  className={cn(
                    "w-[24px] h-[24px] text-[#242424] transition-transform flex-shrink-0",
                    expandedFAQ === item.id ? "rotate-180" : ""
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Answer Content */}
              {expandedFAQ === item.id && (
                <div className="px-[32px] pb-[24px] border-t border-[#E8E8E8]">
                  <div className="pt-[24px]">
                    <p className="font-onest text-[16px] leading-[1.6] text-[#666666]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile FAQ */}
      <div className="lg:hidden">
        <h2 className="font-thunder text-[24px] leading-[0.92] text-[#242424] mb-[24px]">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-[12px]">
          {faq.map((item) => (
            <div
              key={item.id}
              className={cn(
                "border border-[#E8E8E8] rounded-[8px] overflow-hidden transition-colors",
                expandedFAQ === item.id ? "border-[#242424] bg-[#F9F9F9]" : ""
              )}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between px-[16px] py-[16px] text-left"
              >
                <h3 className="font-onest font-semibold text-[14px] leading-[1.4] text-[#242424] pr-[12px]">
                  {item.question}
                </h3>
                
                <svg
                  className={cn(
                    "w-[16px] h-[16px] text-[#242424] transition-transform flex-shrink-0",
                    expandedFAQ === item.id ? "rotate-180" : ""
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Answer Content */}
              {expandedFAQ === item.id && (
                <div className="px-[16px] pb-[16px] border-t border-[#E8E8E8]">
                  <div className="pt-[16px]">
                    <p className="font-onest text-[13px] leading-[1.5] text-[#666666]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}