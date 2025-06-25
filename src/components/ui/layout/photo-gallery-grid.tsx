'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GalleryPhoto {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
  category?: string
  location?: string
  photographer?: string
}

interface PhotoGalleryGridProps {
  photos: GalleryPhoto[]
  columns?: 2 | 3 | 4 | 5
  variant?: 'masonry' | 'uniform' | 'featured'
  showOverlay?: boolean
  onPhotoClick?: (photo: GalleryPhoto, index: number) => void
  className?: string
}

export function PhotoGalleryGrid({
  photos,
  columns = 3,
  variant = 'uniform',
  showOverlay = true,
  onPhotoClick,
  className
}: PhotoGalleryGridProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleImageLoad = (photoId: string) => {
    setLoadedImages(prev => new Set([...prev, photoId]))
  }

  const getGridClasses = () => {
    const baseClasses = "grid gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7"
    
    switch (variant) {
      case 'masonry':
        return cn(baseClasses, "auto-rows-max")
      case 'featured':
        return cn(baseClasses, "grid-rows-2")
      default:
        return baseClasses
    }
  }

  const getColumnClasses = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      case 5:
        return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    }
  }

  const getImageContainerClasses = (index: number) => {
    if (variant === 'featured') {
      // First image takes 2 columns and 2 rows
      if (index === 0) {
        return cn(
          "col-span-1 row-span-2 sm:col-span-1 lg:col-span-2",
          "h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[480px] 2xl:h-[540px]"
        )
      }
      // Other images have standard height
      return cn(
        "col-span-1",
        "h-[150px] sm:h-[180px] lg:h-[190px] xl:h-[230px] 2xl:h-[260px]"
      )
    }

    if (variant === 'masonry') {
      // Varying heights for masonry effect
      const heights = [
        "h-[200px] sm:h-[250px] lg:h-[280px] xl:h-[320px] 2xl:h-[360px]",
        "h-[150px] sm:h-[200px] lg:h-[220px] xl:h-[260px] 2xl:h-[300px]",
        "h-[180px] sm:h-[230px] lg:h-[260px] xl:h-[300px] 2xl:h-[340px]",
        "h-[160px] sm:h-[210px] lg:h-[240px] xl:h-[280px] 2xl:h-[320px]"
      ]
      return cn("col-span-1", heights[index % heights.length])
    }

    // Uniform grid
    return cn(
      "col-span-1",
      "h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[250px] 2xl:h-[280px]"
    )
  }

  return (
    <div className={cn("w-full", className)}>
      <div className={cn(getGridClasses(), getColumnClasses())}>
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={cn(
              "group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]",
              // Responsive border radius
              "rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[12px] xl:rounded-[14px] 2xl:rounded-[16px]",
              getImageContainerClasses(index)
            )}
            onClick={() => onPhotoClick?.(photo, index)}
          >
            {/* Image */}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={cn(
                "object-cover transition-all duration-500",
                "group-hover:scale-110",
                loadedImages.has(photo.id) ? "opacity-100" : "opacity-0"
              )}
              sizes={
                variant === 'featured' && index === 0
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                  : `(max-width: 640px) 50vw, (max-width: 1024px) 33vw, ${100 / columns}vw`
              }
              onLoad={() => handleImageLoad(photo.id)}
              priority={index < 6} // Prioritize first 6 images
            />

            {/* Loading placeholder */}
            {!loadedImages.has(photo.id) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}

            {/* Overlay */}
            {showOverlay && (
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              )}>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6">
                  {photo.title && (
                    <h3 className={cn(
                      "font-thunder font-medium text-white mb-1",
                      // Responsive font size
                      "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]",
                      // Responsive line height
                      "leading-[14px] sm:leading-[17px] md:leading-[19px] lg:leading-[22px] xl:leading-[24px] 2xl:leading-[26px]"
                    )}>
                      {photo.title}
                    </h3>
                  )}
                  
                  {photo.location && (
                    <p className={cn(
                      "font-onest text-white/90",
                      // Responsive font size
                      "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px]",
                      // Responsive line height
                      "leading-[12px] sm:leading-[13px] md:leading-[15px] lg:leading-[16px] xl:leading-[17px] 2xl:leading-[18px]"
                    )}>
                      📍 {photo.location}
                    </p>
                  )}

                  {photo.category && (
                    <span className={cn(
                      "inline-block bg-white/20 backdrop-blur-sm text-white rounded-full mt-2",
                      // Responsive padding
                      "px-[6px] py-[1px] sm:px-[8px] sm:py-[2px] md:px-[10px] md:py-[2px] lg:px-[12px] lg:py-[3px]",
                      // Responsive font size
                      "text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[13px]"
                    )}>
                      {photo.category}
                    </span>
                  )}
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className={cn(
                    "bg-white/20 backdrop-blur-sm rounded-full p-2",
                    "w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[36px] lg:h-[36px]",
                    "flex items-center justify-center"
                  )}>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Photo Gallery Modal Component
interface PhotoModalProps {
  photos: GalleryPhoto[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function PhotoModal({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}: PhotoModalProps) {
  if (!isOpen || currentIndex >= photos.length) return null

  const currentPhoto = photos[currentIndex]

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close gallery"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation */}
      {photos.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next photo"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Main image */}
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <Image
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Photo info */}
      {(currentPhoto.title || currentPhoto.description || currentPhoto.photographer) && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
          {currentPhoto.title && (
            <h3 className="font-thunder font-medium text-lg mb-1">{currentPhoto.title}</h3>
          )}
          {currentPhoto.description && (
            <p className="font-onest text-sm text-white/90 mb-2">{currentPhoto.description}</p>
          )}
          <div className="flex justify-between items-center text-xs text-white/70">
            {currentPhoto.photographer && (
              <span>Photo by {currentPhoto.photographer}</span>
            )}
            <span>{currentIndex + 1} of {photos.length}</span>
          </div>
        </div>
      )}
    </div>
  )
}