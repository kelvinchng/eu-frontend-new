'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  className?: string
  onMenuClick?: () => void
  variant?: 'default' | 'overlay'
}

export function MobileNav({ className, onMenuClick, variant = 'overlay' }: MobileNavProps) {
  return (
    <nav
      className={cn(
        "lg:hidden absolute top-[30px] left-[35px] right-[35px] z-20 flex items-center justify-between",
        variant === 'overlay' ? "bg-transparent" : "bg-[#242424]",
        className
      )}
    >
      <Link href="/" className="flex-shrink-0">
        <div className="relative w-[71.52px] h-[50.33px]">
          <Image
            src="/assets/eulogo.png"
            alt="EU Holidays"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <button
        onClick={onMenuClick}
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