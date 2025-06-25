'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

interface TabNavigationProps {
  tabs: TabItem[]
  defaultTab?: string
  onTabChange?: (tabId: string) => void
  variant?: 'default' | 'underline' | 'pills'
  className?: string
}

export function TabNavigation({
  tabs,
  defaultTab,
  onTabChange,
  variant = 'default',
  className
}: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabClick = (tabId: string) => {
    if (tabs.find(tab => tab.id === tabId)?.disabled) return
    setActiveTab(tabId)
    onTabChange?.(tabId)
  }

  const getTabStyles = (isActive: boolean, isDisabled: boolean) => {
    const baseStyles = cn(
      "relative font-onest font-medium transition-all duration-200 cursor-pointer",
      // Responsive padding
      "px-[12px] py-[6px] sm:px-[16px] sm:py-[8px] md:px-[14px] md:py-[7px] lg:px-[18px] lg:py-[10px] xl:px-[20px] xl:py-[12px] 2xl:px-[24px] 2xl:py-[14px]",
      // Responsive font size
      "text-[10px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px]",
      // Responsive line height
      "leading-[12px] sm:leading-[18px] md:leading-[16px] lg:leading-[20px] xl:leading-[22px] 2xl:leading-[23px]"
    )

    if (isDisabled) {
      return cn(baseStyles, "text-[#CCCCCC] cursor-not-allowed")
    }

    switch (variant) {
      case 'underline':
        return cn(
          baseStyles,
          "border-b-2 border-transparent",
          isActive
            ? "text-[#0066CC] border-[#0066CC]"
            : "text-[#666666] hover:text-[#242424] hover:border-[#DDDDDD]"
        )
      
      case 'pills':
        return cn(
          baseStyles,
          // Responsive border radius
          "rounded-full border",
          "rounded-[16px] sm:rounded-[20px] md:rounded-[18px] lg:rounded-[22px] xl:rounded-[24px] 2xl:rounded-[26px]",
          isActive
            ? "bg-[#0066CC] text-white border-[#0066CC]"
            : "bg-transparent text-[#666666] border-[#DDDDDD] hover:text-[#242424] hover:border-[#242424]"
        )
      
      default:
        return cn(
          baseStyles,
          // Responsive border radius
          "rounded-t-[8px] sm:rounded-t-[10px] md:rounded-t-[9px] lg:rounded-t-[12px] xl:rounded-t-[14px] 2xl:rounded-t-[16px]",
          isActive
            ? "bg-white text-[#242424] border border-[#DDDDDD] border-b-white"
            : "bg-[#F8F8F8] text-[#666666] border border-[#DDDDDD] border-b-[#DDDDDD] hover:bg-[#F0F0F0] hover:text-[#242424]"
        )
    }
  }

  const getContentStyles = () => {
    switch (variant) {
      case 'underline':
        return cn(
          "pt-[16px] sm:pt-[20px] md:pt-[18px] lg:pt-[24px] xl:pt-[28px] 2xl:pt-[32px]"
        )
      
      case 'pills':
        return cn(
          "pt-[16px] sm:pt-[20px] md:pt-[18px] lg:pt-[24px] xl:pt-[28px] 2xl:pt-[32px]"
        )
      
      default:
        return cn(
          "bg-white border border-[#DDDDDD] border-t-0",
          // Responsive border radius and padding
          "rounded-b-[8px] sm:rounded-b-[10px] md:rounded-b-[9px] lg:rounded-b-[12px] xl:rounded-b-[14px] 2xl:rounded-b-[16px]",
          "p-[16px] sm:p-[20px] md:p-[18px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px]"
        )
    }
  }

  const getTabListStyles = () => {
    switch (variant) {
      case 'underline':
        return cn(
          "flex items-center border-b border-[#DDDDDD]",
          // Responsive gap
          "gap-[8px] sm:gap-[12px] md:gap-[10px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px]"
        )
      
      case 'pills':
        return cn(
          "flex items-center flex-wrap",
          // Responsive gap
          "gap-[6px] sm:gap-[8px] md:gap-[7px] lg:gap-[10px] xl:gap-[12px] 2xl:gap-[14px]"
        )
      
      default:
        return cn(
          "flex items-end",
          // Responsive gap
          "gap-[2px] sm:gap-[3px] md:gap-[2px] lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px]"
        )
    }
  }

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

  return (
    <div className={cn("w-full", className)}>
      {/* Tab List */}
      <div 
        className={getTabListStyles()}
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={getTabStyles(activeTab === tab.id, tab.disabled || false)}
            onClick={() => handleTabClick(tab.id)}
            disabled={tab.disabled}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
          >
            {tab.label}
            
            {/* Active indicator for underline variant */}
            {variant === 'underline' && activeTab === tab.id && (
              <div className={cn(
                "absolute bottom-0 left-0 right-0 bg-[#0066CC]",
                "h-[2px] sm:h-[3px] md:h-[2px] lg:h-[3px] xl:h-[4px] 2xl:h-[4px]"
              )} />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={getContentStyles()}>
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
        >
          {activeTabContent}
        </div>
      </div>
    </div>
  )
}