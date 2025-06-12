'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface RelatedTour {
  id: string
  title: string
  price: string
  originalPrice?: string
  image: string
  duration: string
  departure: string
  tags: string[]
}

interface RelatedToursProps {
  tours: RelatedTour[]
  className?: string
}

export function RelatedTours({ tours, className }: RelatedToursProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Related Tours */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mb-[50px]">
          <h2 className="font-thunder text-[50px] leading-[0.92] text-[#242424]">
            Related Tours You Might Like
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-[48px]">
          {tours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`} className="group">
              <div className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Tour Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  
                  {/* Tags */}
                  {tour.tags.length > 0 && (
                    <div className="absolute top-[16px] left-[16px] flex gap-[8px]">
                      {tour.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/90 text-[#242424] font-onest text-[12px] px-[8px] py-[4px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Tour Content */}
                <div className="p-[24px]">
                  <h3 className="font-thunder text-[24px] leading-[0.92] text-[#242424] mb-[12px] group-hover:text-[#666666] transition-colors">
                    {tour.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-[16px]">
                    <span className="font-onest text-[14px] text-[#666666]">
                      {tour.duration} • {tour.departure}
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-[8px]">
                    {tour.originalPrice && (
                      <span className="font-onest text-[16px] line-through text-[#ADADAD]">
                        {tour.originalPrice}
                      </span>
                    )}
                    <span className="font-thunder text-[24px] leading-[0.92] text-[#242424]">
                      {tour.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile Related Tours */}
      <div className="lg:hidden">
        <h2 className="font-thunder text-[24px] leading-[0.92] text-[#242424] mb-[24px]">
          Related Tours You Might Like
        </h2>
        
        <div className="space-y-[24px]">
          {tours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}`} className="block">
              <div className="bg-white rounded-[12px] overflow-hidden shadow-sm">
                {/* Tour Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  
                  {/* Tags */}
                  {tour.tags.length > 0 && (
                    <div className="absolute top-[12px] left-[12px] flex gap-[6px]">
                      {tour.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/90 text-[#242424] font-onest text-[10px] px-[6px] py-[2px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Tour Content */}
                <div className="p-[16px]">
                  <h3 className="font-thunder text-[18px] leading-[0.92] text-[#242424] mb-[8px]">
                    {tour.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-[12px]">
                    <span className="font-onest text-[12px] text-[#666666]">
                      {tour.duration} • {tour.departure}
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-[6px]">
                    {tour.originalPrice && (
                      <span className="font-onest text-[14px] line-through text-[#ADADAD]">
                        {tour.originalPrice}
                      </span>
                    )}
                    <span className="font-thunder text-[20px] leading-[0.92] text-[#242424]">
                      {tour.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}