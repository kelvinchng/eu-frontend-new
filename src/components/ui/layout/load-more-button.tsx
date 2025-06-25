'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface LoadMoreButtonProps {
  onLoadMore: () => Promise<void> | void
  hasMore?: boolean
  isLoading?: boolean
  loadingText?: string
  buttonText?: string
  noMoreText?: string
  variant?: 'default' | 'outline' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  showProgress?: boolean
  currentCount?: number
  totalCount?: number
  className?: string
}

export function LoadMoreButton({
  onLoadMore,
  hasMore = true,
  isLoading = false,
  loadingText = "Loading more...",
  buttonText = "Load More",
  noMoreText = "No more items to load",
  variant = 'default',
  size = 'md',
  fullWidth = false,
  showProgress = false,
  currentCount,
  totalCount,
  className
}: LoadMoreButtonProps) {
  const [internalLoading, setInternalLoading] = useState(false)

  const handleClick = async () => {
    if (isLoading || internalLoading || !hasMore) return

    setInternalLoading(true)
    try {
      await onLoadMore()
    } catch (error) {
      console.error('Error loading more items:', error)
    } finally {
      setInternalLoading(false)
    }
  }

  const loading = isLoading || internalLoading

  const getButtonClasses = () => {
    const baseClasses = cn(
      "relative flex items-center justify-center gap-2 font-onest font-medium transition-all duration-200 cursor-pointer",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      fullWidth ? "w-full" : "w-auto"
    )

    // Size classes
    const sizeClasses = {
      sm: cn(
        "px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] md:px-[18px] md:py-[9px] lg:px-[22px] lg:py-[11px] xl:px-[24px] xl:py-[12px] 2xl:px-[26px] 2xl:py-[13px]",
        "rounded-[6px] sm:rounded-[7px] md:rounded-[6px] lg:rounded-[8px] xl:rounded-[9px] 2xl:rounded-[10px]",
        "text-[11px] sm:text-[12px] md:text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
      ),
      md: cn(
        "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[22px] md:py-[11px] lg:px-[28px] lg:py-[14px] xl:px-[32px] xl:py-[16px] 2xl:px-[36px] 2xl:py-[18px]",
        "rounded-[8px] sm:rounded-[10px] md:rounded-[9px] lg:rounded-[12px] xl:rounded-[14px] 2xl:rounded-[16px]",
        "text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
      ),
      lg: cn(
        "px-[24px] py-[12px] sm:px-[32px] sm:py-[16px] md:px-[28px] md:py-[14px] lg:px-[36px] lg:py-[18px] xl:px-[40px] xl:py-[20px] 2xl:px-[44px] 2xl:py-[22px]",
        "rounded-[10px] sm:rounded-[12px] md:rounded-[11px] lg:rounded-[14px] xl:rounded-[16px] 2xl:rounded-[18px]",
        "text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]"
      )
    }

    // Variant classes
    const variantClasses = {
      default: cn(
        "bg-[#0066CC] text-white border border-[#0066CC]",
        loading || !hasMore
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#004499] hover:border-[#004499] focus:ring-blue-200"
      ),
      outline: cn(
        "bg-transparent text-[#0066CC] border border-[#0066CC]",
        loading || !hasMore
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#0066CC] hover:text-white focus:ring-blue-200"
      ),
      minimal: cn(
        "bg-transparent text-[#0066CC] border border-transparent",
        loading || !hasMore
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#F0F8FF] hover:border-[#E0F0FF] focus:ring-blue-200"
      )
    }

    return cn(baseClasses, sizeClasses[size], variantClasses[variant])
  }

  if (!hasMore) {
    return (
      <div className={cn(
        "text-center",
        "py-[16px] sm:py-[20px] md:py-[18px] lg:py-[24px] xl:py-[28px] 2xl:py-[32px]",
        className
      )}>
        <p className={cn(
          "font-onest text-[#666666]",
          "text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
        )}>
          {noMoreText}
        </p>
        {showProgress && currentCount && totalCount && (
          <p className={cn(
            "font-onest text-[#888888] mt-1",
            "text-[10px] sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]"
          )}>
            Showing all {totalCount.toLocaleString()} items
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={cn(
      "flex flex-col items-center",
      "py-[16px] sm:py-[20px] md:py-[18px] lg:py-[24px] xl:py-[28px] 2xl:py-[32px]",
      className
    )}>
      {/* Progress indicator */}
      {showProgress && currentCount && totalCount && (
        <div className={cn(
          "mb-[12px] sm:mb-[16px] md:mb-[14px] lg:mb-[18px] xl:mb-[20px] 2xl:mb-[22px]",
          "text-center"
        )}>
          <p className={cn(
            "font-onest text-[#666666] mb-2",
            "text-[11px] sm:text-[12px] md:text-[11px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]"
          )}>
            Showing {currentCount.toLocaleString()} of {totalCount.toLocaleString()} items
          </p>
          <div className={cn(
            "w-full bg-[#F0F0F0] overflow-hidden",
            "h-[4px] sm:h-[5px] md:h-[4px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px]",
            "rounded-full"
          )}>
            <div
              className="h-full bg-[#0066CC] transition-all duration-300 rounded-full"
              style={{ width: `${Math.min((currentCount / totalCount) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Load More Button */}
      <button
        onClick={handleClick}
        disabled={loading || !hasMore}
        className={getButtonClasses()}
        aria-label={loading ? loadingText : buttonText}
      >
        {loading ? (
          <>
            <svg
              className={cn(
                "animate-spin",
                size === 'sm' ? "w-4 h-4" : size === 'lg' ? "w-6 h-6" : "w-5 h-5"
              )}
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                className="opacity-25"
              />
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                className="opacity-75"
              />
            </svg>
            <span>{loadingText}</span>
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <svg
              className={cn(
                "transition-transform duration-200",
                size === 'sm' ? "w-4 h-4" : size === 'lg' ? "w-6 h-6" : "w-5 h-5"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </>
        )}
      </button>

      {/* Additional info */}
      {!loading && hasMore && currentCount && totalCount && currentCount < totalCount && (
        <p className={cn(
          "font-onest text-[#888888] mt-2",
          "text-[10px] sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px]"
        )}>
          {(totalCount - currentCount).toLocaleString()} more items available
        </p>
      )}
    </div>
  )
}

// Infinite scroll hook for automatic loading
export function useInfiniteScroll(
  loadMore: () => Promise<void> | void,
  hasMore: boolean,
  threshold: number = 100
) {
  React.useEffect(() => {
    if (!hasMore) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      
      if (scrollHeight - scrollTop - clientHeight < threshold) {
        loadMore()
      }
    }

    const throttledScroll = throttle(handleScroll, 200)
    window.addEventListener('scroll', throttledScroll)
    
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [loadMore, hasMore, threshold])
}

// Simple throttle utility
function throttle(func: Function, delay: number) {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExecTime = 0
  
  return function (...args: any[]) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}