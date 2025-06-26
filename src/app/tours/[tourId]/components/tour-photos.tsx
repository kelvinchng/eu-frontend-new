'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TourAlbum {
  id: string
  image: string
  date: string
  tourManager: string
}

interface TourPhotosProps {
  photos: any[] // Keep for compatibility but will transform to albums
  className?: string
}

export function TourPhotos({ photos, className }: TourPhotosProps) {
  const [displayCount, setDisplayCount] = useState(3)

  // Transform photos to album format or use default albums
  const albums: TourAlbum[] = [
    {
      id: '1',
      image: '/assets/tour-albums/switzerland-dream-1.jpg',
      date: '10 December 2024',
      tourManager: 'Connie Hay'
    },
    {
      id: '2',
      image: '/assets/tour-albums/switzerland-dream-2.jpg',
      date: '17 December 2024',
      tourManager: 'Luke Soh'
    },
    {
      id: '3',
      image: '/assets/tour-albums/switzerland-dream-3.jpg',
      date: '27 January 2025',
      tourManager: 'Peter Teh'
    },
    {
      id: '4',
      image: '/assets/tour-albums/switzerland-dream-1.jpg',
      date: '3 February 2025',
      tourManager: 'Sarah Chen'
    },
    {
      id: '5',
      image: '/assets/tour-albums/switzerland-dream-2.jpg',
      date: '15 February 2025',
      tourManager: 'Michael Wong'
    },
    {
      id: '6',
      image: '/assets/tour-albums/switzerland-dream-3.jpg',
      date: '28 February 2025',
      tourManager: 'Emily Tan'
    }
  ]

  const displayedAlbums = albums.slice(0, displayCount)
  const hasMoreAlbums = displayCount < albums.length

  const loadMoreAlbums = () => {
    setDisplayCount(prev => Math.min(prev + 3, albums.length))
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Title */}
      <h2 className="font-thunder font-medium text-[32px] lg:text-[50px] leading-[0.92] text-[#242424] uppercase mb-[40px] lg:mb-[50px] text-center">
        Tour Albums
      </h2>

      {/* Albums Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[32px]">
        {displayedAlbums.map((album) => (
          <div
            key={album.id}
            className="relative bg-white rounded-[9px] overflow-hidden cursor-pointer group"
            style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.16)' }}
          >
            {/* Album Image */}
            <div className="relative w-full h-[250px] lg:h-[303.51px] overflow-hidden">
              <Image
                src={album.image}
                alt={`Tour managed by ${album.tourManager}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            
            {/* Album Details */}
            <div className="p-[25px] lg:p-[25.7px_25.7px_33px_25.7px]">
              <div className="space-y-[5px] lg:space-y-[8px]">
                <div className="flex items-start gap-[20px]">
                  <span className="font-onest font-bold text-[13px] lg:text-[18px] leading-[1.275] text-[#242424]">
                    Date:
                  </span>
                  <span className="font-onest font-normal text-[13px] lg:text-[18px] leading-[1.275] text-[#242424]">
                    {album.date}
                  </span>
                </div>
                <div className="flex items-start gap-[15px]">
                  <span className="font-onest font-bold text-[13px] lg:text-[18px] leading-[1.275] text-[#242424]">
                    Tour Manager:
                  </span>
                  <span className="font-onest font-normal text-[13px] lg:text-[18px] leading-[1.275] text-[#242424]">
                    {album.tourManager}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreAlbums && (
        <div className="flex justify-center mt-[40px] lg:mt-[65px]">
          <button
            onClick={loadMoreAlbums}
            className="relative w-[231px] h-[51px] bg-[#242424] rounded-full overflow-hidden group flex items-center justify-center"
          >
            <span className="font-onest font-normal text-[18px] leading-[1.275] text-white">
              Load More
            </span>
          </button>
        </div>
      )}
    </div>
  )
}