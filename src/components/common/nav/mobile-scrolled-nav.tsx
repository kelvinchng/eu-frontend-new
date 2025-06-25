'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MobileScrolledNavProps {
  className?: string
  onMenuClick?: () => void
  viewAsComponent?: boolean
}

export function MobileScrolledNav({ className, onMenuClick, viewAsComponent = false }: MobileScrolledNavProps) {

  return (
    <nav
      className={cn(
        viewAsComponent ? "w-[393px] h-[81px] flex items-center transition-all duration-300 bg-[#242424]" : "lg:hidden fixed top-0 left-0 right-0 z-50 w-full h-[81px] flex items-center transition-all duration-300 bg-[#242424]",
        className
      )}
    >
      <div className="w-full px-[35px] flex items-center justify-between">
        <Link href={viewAsComponent ? "#" : "/"} className="flex-shrink-0" onClick={viewAsComponent ? (e) => e.preventDefault() : undefined}>
          <div className="relative w-[71.52px] h-[50.33px]">
            <Image
              src="/assets/logos/eu-logo.png"
              alt="EU Holidays"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <button
          onClick={viewAsComponent ? () => {} : onMenuClick}
          className="w-[17.73px] h-[11.82px] flex flex-col justify-between"
          aria-label="Open menu"
        >
          <span className="block w-full h-[1.7px] bg-white" />
          <span className="block w-full h-[1.7px] bg-white" />
          <span className="block w-full h-[1.7px] bg-white" />
        </button>
      </div>
    </nav>
  )
}