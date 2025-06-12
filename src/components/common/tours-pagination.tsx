'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ToursPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function ToursPagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className 
}: ToursPaginationProps) {
  
  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)
      
      if (currentPage > 3) {
        pages.push('...')
      }
      
      // Show current page and adjacent pages
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i)
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...')
      }
      
      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  return (
    <div className={cn(
      "flex items-center justify-center gap-[8px]",
      className
    )}>
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "w-[40px] h-[40px] p-0",
          "border border-[#E8E8E8] rounded-[4px]",
          "hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed",
          currentPage === 1 && "opacity-50 cursor-not-allowed"
        )}
      >
        <ChevronLeft className="w-[16px] h-[16px] text-[#242424]" />
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-[4px]">
        {getVisiblePages().map((page, index) => {
          if (page === '...') {
            return (
              <span 
                key={`ellipsis-${index}`}
                className="px-[8px] py-[8px] text-[#242424] font-onest text-[16px]"
              >
                ...
              </span>
            )
          }

          const pageNumber = page as number
          const isActive = pageNumber === currentPage

          return (
            <Button
              key={pageNumber}
              variant={isActive ? "primary" : "outline"}
              size="sm"
              onClick={() => onPageChange(pageNumber)}
              className={cn(
                "w-[40px] h-[40px] p-0 font-onest text-[16px]",
                "border rounded-[4px]",
                isActive ? (
                  "bg-[#242424] text-white border-[#242424] hover:bg-[#1a1a1a]"
                ) : (
                  "bg-white text-[#242424] border-[#E8E8E8] hover:bg-[#f5f5f5]"
                )
              )}
            >
              {pageNumber}
            </Button>
          )
        })}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "w-[40px] h-[40px] p-0",
          "border border-[#E8E8E8] rounded-[4px]",
          "hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed",
          currentPage === totalPages && "opacity-50 cursor-not-allowed"
        )}
      >
        <ChevronRight className="w-[16px] h-[16px] text-[#242424]" />
      </Button>
    </div>
  )
}

// Mobile version with simplified pagination
export function ToursPaginationMobile({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className 
}: ToursPaginationProps) {
  return (
    <div className={cn(
      "flex items-center justify-between w-full",
      className
    )}>
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center gap-[8px] px-[16px] h-[36px]",
          "border border-[#E8E8E8] rounded-[4px]",
          "hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed",
          currentPage === 1 && "opacity-50 cursor-not-allowed"
        )}
      >
        <ChevronLeft className="w-[14px] h-[14px] text-[#242424]" />
        <span className="font-onest text-[14px] text-[#242424]">Previous</span>
      </Button>

      {/* Page Info */}
      <span className="font-onest text-[14px] text-[#242424]">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center gap-[8px] px-[16px] h-[36px]",
          "border border-[#E8E8E8] rounded-[4px]",
          "hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed",
          currentPage === totalPages && "opacity-50 cursor-not-allowed"
        )}
      >
        <span className="font-onest text-[14px] text-[#242424]">Next</span>
        <ChevronRight className="w-[14px] h-[14px] text-[#242424]" />
      </Button>
    </div>
  )
}