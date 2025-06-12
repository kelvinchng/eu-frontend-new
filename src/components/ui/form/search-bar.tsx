'use client'

import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Search button text
   */
  buttonText?: string
  /**
   * Callback when search button is clicked
   */
  onSearch?: (value: string) => void
  /**
   * Loading state for search button
   */
  loading?: boolean
  /**
   * Size variant
   */
  size?: 'sm' | 'md' | 'lg'
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ 
    className,
    buttonText = 'Search',
    onSearch,
    loading = false,
    size = 'md',
    placeholder = 'Search...',
    ...props 
  }, ref) => {
    
    const [searchValue, setSearchValue] = React.useState('')
    
    const handleSearch = () => {
      onSearch?.(searchValue)
    }
    
    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    }
    
    // Responsive dimensions based on Figma specs
    // Input: 290.73px, Button: 151.55px at 1920px
    const inputWidth = designTokens.utils.toVw(290.73)  // 15.14vw
    const buttonWidth = designTokens.utils.toVw(151.55) // 7.89vw
    
    // Size-based responsive classes
    const sizeClasses = {
      sm: {
        height: 'h-[35px]',
        inputPadding: 'px-[12px] py-[8px]',
        buttonPadding: 'px-[16px] py-[8px]',
        fontSize: 'text-xs lg:text-sm 3xl:text-[13px]'
      },
      md: {
        height: 'h-[45px]',
        inputPadding: 'px-[16px] py-[12px]',
        buttonPadding: 'px-[20px] py-[12px]',
        fontSize: 'text-sm lg:text-base 3xl:text-[16px]'
      },
      lg: {
        height: 'h-[58px]',
        inputPadding: 'px-[20px] py-[16px]',
        buttonPadding: 'px-[24px] py-[16px]',
        fontSize: 'text-sm lg:text-lg 3xl:text-[18px]'
      },
    }
    
    const currentSize = sizeClasses[size]

    return (
      <div className={cn(
        'flex items-center rounded-[8px] overflow-hidden',
        'border border-opacity-20',
        className
      )}
      style={{ 
        borderColor: designTokens.colors.primary,
        boxShadow: designTokens.shadows.sm
      }}
      >
        {/* Search Input */}
        <input
          ref={ref}
          type="text"
          className={cn(
            'flex-1 border-0 outline-none font-onest',
            'placeholder:text-gray-400',
            currentSize.height,
            currentSize.inputPadding,
            currentSize.fontSize,
            // Responsive width - mobile full, desktop viewport-based
            'w-full lg:w-[15.14vw] lg:max-w-[290.73px]'
          )}
          style={{ 
            backgroundColor: designTokens.colors.background,
            color: designTokens.colors.primary
          }}
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          {...props}
        />
        
        {/* Search Button */}
        <button
          type="button"
          onClick={handleSearch}
          disabled={loading}
          className={cn(
            'font-onest font-medium text-white transition-colors duration-200',
            'hover:opacity-90 active:opacity-95',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'border-0 outline-none',
            currentSize.height,
            currentSize.buttonPadding,
            currentSize.fontSize,
            // Responsive width - mobile auto, desktop viewport-based
            'w-auto lg:w-[7.89vw] lg:max-w-[151.55px]',
            'flex items-center justify-center gap-[8px]'
          )}
          style={{ backgroundColor: designTokens.colors.primary }}
        >
          {loading ? (
            <div className="flex items-center gap-[8px]">
              <div className="w-[16px] h-[16px] border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Searching...</span>
            </div>
          ) : (
            <div className="flex items-center gap-[8px]">
              <span>{buttonText}</span>
              {/* Search Icon */}
              <svg 
                className="w-[16px] h-[16px]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          )}
        </button>
      </div>
    )
  }
)

SearchBar.displayName = "SearchBar"

export { SearchBar }