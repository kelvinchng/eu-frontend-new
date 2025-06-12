'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TourPhoto {
  id: string
  title: string
  image: string
  description: string
}

interface TourPhotosProps {
  photos: TourPhoto[]
  className?: string
}

export function TourPhotos({ photos, className }: TourPhotosProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<TourPhoto | null>(null)

  const openLightbox = (photo: TourPhoto) => {
    setSelectedPhoto(photo)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return
    
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0
    }
    
    setSelectedPhoto(photos[newIndex])
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Tour Photos */}
      <div className="hidden lg:block">
        <h2 className="font-thunder text-[50px] leading-[0.92] text-[#242424] mb-[32px]">
          Tour Photo Gallery
        </h2>
        
        <div className="grid grid-cols-3 gap-[24px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-[4/3] rounded-[12px] overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(photo)}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-[16px]">
                  <h3 className="font-thunder text-[18px] leading-[0.92] mb-[8px]">
                    {photo.title}
                  </h3>
                  <p className="font-onest text-[14px] leading-[1.4]">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Tour Photos */}
      <div className="lg:hidden">
        <h2 className="font-thunder text-[24px] leading-[0.92] text-[#242424] mb-[24px]">
          Tour Photo Gallery
        </h2>
        
        <div className="grid grid-cols-2 gap-[12px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-[4/3] rounded-[8px] overflow-hidden"
              onClick={() => openLightbox(photo)}
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-[12px]">
                <h3 className="font-thunder text-[14px] leading-[0.92] text-white">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-[20px]">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-[-40px] right-0 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-[32px] h-[32px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => navigatePhoto('prev')}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300 hidden lg:block"
            >
              <svg className="w-[32px] h-[32px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => navigatePhoto('next')}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-white hover:text-gray-300 hidden lg:block"
            >
              <svg className="w-[32px] h-[32px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="relative aspect-[16/10] w-full max-w-[800px]">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            
            {/* Photo Info */}
            <div className="text-center text-white mt-[16px]">
              <h3 className="font-thunder text-[24px] leading-[0.92] mb-[8px]">
                {selectedPhoto.title}
              </h3>
              <p className="font-onest text-[16px] leading-[1.4]">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}