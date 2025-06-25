'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface FAQItem {
  id: string
  question: string
  answer: string | React.ReactNode
}

interface AccordionFAQProps {
  items: FAQItem[]
  allowMultiple?: boolean
  defaultOpen?: string[]
  className?: string
}

export function AccordionFAQ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className
}: AccordionFAQProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen)

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      )
    } else {
      setOpenItems(prev =>
        prev.includes(itemId) ? [] : [itemId]
      )
    }
  }

  const isOpen = (itemId: string) => openItems.includes(itemId)

  return (
    <div className={cn("w-full space-y-2", className)}>
      {items.map((item, index) => {
        const isItemOpen = isOpen(item.id)
        const isLast = index === items.length - 1

        return (
          <div
            key={item.id}
            className={cn(
              "bg-white overflow-hidden transition-all duration-200",
              // Responsive border radius
              "rounded-[8px] sm:rounded-[10px] md:rounded-[9px] lg:rounded-[12px] xl:rounded-[14px] 2xl:rounded-[16px]",
              // Border styling
              "border border-[#DDDDDD]",
              isItemOpen && "border-[#0066CC]",
              !isLast && "mb-[4px] sm:mb-[6px] md:mb-[5px] lg:mb-[8px] xl:mb-[10px] 2xl:mb-[12px]"
            )}
          >
            {/* Question Button */}
            <button
              className={cn(
                "w-full text-left flex items-center justify-between transition-colors duration-200",
                // Responsive padding
                "p-[16px] sm:p-[20px] md:p-[18px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px]",
                isItemOpen ? "text-[#0066CC]" : "text-[#242424] hover:text-[#0066CC]"
              )}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isItemOpen}
              aria-controls={`faq-content-${item.id}`}
            >
              <span className={cn(
                "font-thunder font-medium pr-4",
                // Responsive font size
                "text-[14px] sm:text-[18px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]",
                // Responsive line height
                "leading-[16px] sm:leading-[22px] md:leading-[20px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[28px]"
              )}>
                {item.question}
              </span>
              
              {/* Expand/Collapse Icon */}
              <div className={cn(
                "flex-shrink-0 transition-transform duration-200",
                isItemOpen && "rotate-180"
              )}>
                <svg
                  className={cn(
                    "text-current",
                    // Responsive icon size
                    "w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] 2xl:w-[26px] 2xl:h-[26px]"
                  )}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </div>
            </button>

            {/* Answer Content */}
            <div
              id={`faq-content-${item.id}`}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isItemOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              )}
              aria-hidden={!isItemOpen}
            >
              <div className={cn(
                "border-t border-[#F0F0F0]",
                // Responsive padding
                "px-[16px] pb-[16px] sm:px-[20px] sm:pb-[20px] md:px-[18px] md:pb-[18px] lg:px-[24px] lg:pb-[24px] xl:px-[28px] xl:pb-[28px] 2xl:px-[32px] 2xl:pb-[32px]",
                "pt-[12px] sm:pt-[16px] md:pt-[14px] lg:pt-[18px] xl:pt-[20px] 2xl:pt-[24px]"
              )}>
                {typeof item.answer === 'string' ? (
                  <p className={cn(
                    "font-onest text-[#666666]",
                    // Responsive font size
                    "text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]",
                    // Responsive line height
                    "leading-[16px] sm:leading-[20px] md:leading-[18px] lg:leading-[22px] xl:leading-[24px] 2xl:leading-[26px]"
                  )}>
                    {item.answer}
                  </p>
                ) : (
                  <div className="text-[#666666]">
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Helper component for FAQ sections
interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  allowMultiple?: boolean
  defaultOpen?: string[]
  className?: string
}

export function FAQSection({
  title,
  subtitle,
  faqs,
  allowMultiple = false,
  defaultOpen = [],
  className
}: FAQSectionProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Section Header */}
      {(title || subtitle) && (
        <div className={cn(
          "text-center",
          "mb-[24px] sm:mb-[32px] md:mb-[28px] lg:mb-[40px] xl:mb-[48px] 2xl:mb-[56px]"
        )}>
          {title && (
            <h2 className={cn(
              "font-thunder font-medium text-[#242424]",
              // Responsive font size
              "text-[24px] sm:text-[32px] md:text-[28px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]",
              // Responsive line height
              "leading-[28px] sm:leading-[36px] md:leading-[32px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px]",
              subtitle && "mb-[8px] sm:mb-[12px] md:mb-[10px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px]"
            )}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={cn(
              "font-onest text-[#666666] max-w-2xl mx-auto",
              // Responsive font size
              "text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]",
              // Responsive line height
              "leading-[18px] sm:leading-[22px] md:leading-[20px] lg:leading-[24px] xl:leading-[26px] 2xl:leading-[28px]"
            )}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* FAQ Accordion */}
      <AccordionFAQ
        items={faqs}
        allowMultiple={allowMultiple}
        defaultOpen={defaultOpen}
      />
    </div>
  )
}