'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  className?: string
  onMenuClick?: () => void
  variant?: 'default' | 'overlay'
  viewAsComponent?: boolean
}

export function MobileNav({ className, onMenuClick, variant = 'overlay', viewAsComponent = false }: MobileNavProps) {
  return (
    <nav
      className={cn(
        viewAsComponent ? "flex items-center justify-between w-[393px] h-[81px] px-[35px]" : "lg:hidden absolute top-[30px] left-[35px] right-[35px] z-20 flex items-center justify-between",
        variant === 'overlay' ? "bg-transparent" : "bg-[#242424]",
        className
      )}
    >
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
    </nav>
  )
}