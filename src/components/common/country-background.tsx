'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CountryBackgroundProps {
  countryName: string
  description: string
  images?: string[]
  className?: string
}

export function CountryBackground({ 
  countryName, 
  description,
  images = ['/assets/country-bg-1.jpg', '/assets/country-bg-2.jpg', '/assets/country-bg-3.jpg'],
  className 
}: CountryBackgroundProps) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <section className={cn("w-full max-w-[1480px] mx-auto", className)}>
      <div className="flex bg-white rounded-[16px] overflow-hidden shadow-sm">
        {/* Left Content */}
        <div className="w-[612px] bg-[#EFEFEF] p-[67px_67px_97px_67px] flex flex-col justify-center">
          <div className="space-y-[66px]">
            <h2 className="font-thunder text-[30px] leading-[0.92] text-[#242424]">
              Background of {countryName}
            </h2>
            <p className="font-onest text-[18px] leading-[1.667] text-[#242424]">
              {description}
            </p>
          </div>
        </div>

        {/* Right Image Carousel */}
        <div className="w-[868px] relative">
          <div className="relative w-full h-[529px]">
            <Image
              src={images[currentImage]}
              alt={`${countryName} background ${currentImage + 1}`}
              fill
              className="object-cover"
            />
            
            {/* Navigation Dots */}
            <div className="absolute bottom-[35px] left-1/2 transform -translate-x-1/2 flex gap-[11px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={cn(
                    "w-[11px] h-[11px] rounded-full border-2 border-white transition-colors",
                    index === currentImage ? "bg-white" : "bg-[#242424]"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Mobile version
export function CountryBackgroundMobile({ 
  countryName, 
  description,
  images = ['/assets/country-bg-1.jpg', '/assets/country-bg-2.jpg', '/assets/country-bg-3.jpg'],
  className 
}: CountryBackgroundProps) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <section className={cn("lg:hidden w-full max-w-[325px] mx-auto", className)}>
      <div className="bg-white rounded-[9px] overflow-hidden shadow-sm">
        {/* Image Carousel */}
        <div className="relative w-full h-[214px]">
          <Image
            src={images[currentImage]}
            alt={`${countryName} background ${currentImage + 1}`}
            fill
            className="object-cover"
          />
          
          {/* Navigation Dots */}
          <div className="absolute bottom-[17.91px] left-1/2 transform -translate-x-1/2 flex gap-[4.68px]">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={cn(
                  "w-[4.68px] h-[4.68px] rounded-full border border-white transition-colors",
                  index === currentImage ? "bg-white" : "bg-[#242424]"
                )}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#EFEFEF] p-[43px_30px_87px_30px] space-y-[44px]">
          <h2 className="font-thunder text-[30px] leading-[0.92] text-[#242424]">
            Background of {countryName}
          </h2>
          <p className="font-onest text-[13px] leading-[1.275] text-[#242424]">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}