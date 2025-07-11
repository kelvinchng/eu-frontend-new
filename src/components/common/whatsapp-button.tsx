'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export function WhatsAppButton({ 
  phoneNumber = '6569588888', // Default EU Holidays number
  message = 'Hello! I would like to enquire about your tours.',
  className 
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after user scrolls down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    // Format the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className={cn(
      "fixed bottom-8 right-8 z-40 transition-all duration-300",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none",
      className
    )}>
      {/* Tooltip */}
      <div className={cn(
        "absolute bottom-full right-0 mb-2 px-4 py-2 rounded-lg shadow-lg",
        "bg-white text-gray-800 text-sm font-onest whitespace-nowrap",
        "opacity-0 transform translate-y-2 transition-all duration-200",
        "group-hover:opacity-100 group-hover:translate-y-0"
      )}>
        <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white" />
        Chat with us on WhatsApp!
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className={cn(
          "group relative flex items-center justify-center",
          "w-[65px] h-[65px] rounded-full",
          "bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-200",
          "shadow-lg hover:shadow-xl transform hover:scale-105",
          "focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        )}
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg 
          className="w-[35px] h-[35px] text-white"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </button>
    </div>
  )
}