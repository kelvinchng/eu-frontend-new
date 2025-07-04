'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface InstagramPost {
  id: string
  image: string
  width: number
  height: number
}

const instagramPosts: InstagramPost[] = [
  { id: '1', image: '/assets/social/instagram-post-1.jpg', width: 295.27, height: 301.64 },
  { id: '2', image: '/assets/social/instagram-post-2.jpg', width: 291.61, height: 302.59 },
  { id: '3', image: '/assets/social/instagram-post-3.jpg', width: 292.53, height: 302.59 },
  { id: '4', image: '/assets/social/instagram-post-4.jpg', width: 291.61, height: 301.64 },
  { id: '5', image: '/assets/social/instagram-post-5.jpg', width: 295.27, height: 301.64 },
  { id: '6', image: '/assets/social/instagram-post-6.jpg', width: 291.61, height: 302.59 },
  { id: '7', image: '/assets/social/instagram-post-7.jpg', width: 292.53, height: 302.59 },
  { id: '8', image: '/assets/social/instagram-post-8.jpg', width: 291.61, height: 301.64 },
  { id: '9', image: '/assets/social/instagram-post-9.jpg', width: 294.35, height: 301.64 },
  { id: '10', image: '/assets/social/instagram-post-10.jpg', width: 294.35, height: 301.64 },
]

export function InstagramSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col items-center gap-[43px] lg:gap-[43px]">
        {/* Instagram Header */}
        <div className="flex items-center gap-4 lg:gap-[39px] w-full justify-center">
          {/* Profile Picture */}
          <div className="relative w-[73px] h-[73px] lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/assets/social/instagram-profile.jpg"
              alt="EU Holidays"
              fill
              className="object-cover"
            />
          </div>

          {/* Mobile Instagram Stats */}
          <div className="lg:hidden flex flex-col gap-1">
            <h3 className="font-onest font-medium text-[13px] leading-[1.275] text-[#242424]">
              EUHOLIDAYS
            </h3>
            <p className="font-onest text-[14px] leading-[1.275] text-[#242424]">
              @euholidays
            </p>
          </div>

          {/* Desktop Instagram Stats */}
          <div className="hidden lg:block relative w-[436px] h-[53px]">
            {/* Username */}
            <h3 className="absolute left-0 top-[3px] font-onest font-medium text-[18px] leading-[1.275] text-[#242424]">
              EUHOLIDAYS
            </h3>
            <p className="absolute left-0 top-[29px] font-onest text-[18px] leading-[1.275] text-[#242424]">
              @euholidays
            </p>

            {/* Posts */}
            <div className="absolute left-[152px] top-0">
              <p className="font-onest text-[21px] leading-[1.275] text-center text-[#242424]">1,490</p>
              <p className="font-onest text-[20px] leading-[1.275] text-center text-[#242424]">Posts</p>
            </div>

            {/* Followers */}
            <div className="absolute left-[233px] top-0">
              <p className="font-onest text-[21px] leading-[1.275] text-center text-[#242424] w-[90px]">10.8k</p>
              <p className="font-onest text-[20px] leading-[1.275] text-center text-[#242424] w-[90px]">Followers</p>
            </div>

            {/* Following */}
            <div className="absolute left-[346px] top-0">
              <p className="font-onest text-[21px] leading-[1.275] text-center text-[#242424] w-[90px]">88</p>
              <p className="font-onest text-[20px] leading-[1.275] text-center text-[#242424] w-[90px]">Following</p>
            </div>
          </div>

          {/* Follow Button */}
          <Link 
            href="https://instagram.com/euholidays"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[81px] h-[30px] lg:w-[139px] lg:h-[51px] group flex-shrink-0"
          >
            {/* Mobile Button Background */}
            <svg 
              className="absolute inset-0 lg:hidden" 
              width="81" 
              height="30" 
              viewBox="0 0 81 30" 
              fill="none"
            >
              <path 
                d="M0 15C0 6.7 6.7 0 15 0H66C74.3 0 81 6.7 81 15C81 23.3 74.3 30 66 30H15C6.7 30 0 23.3 0 15Z" 
                fill="#242424"
                className="group-hover:fill-gray-800 transition-colors"
              />
            </svg>
            
            {/* Desktop Button Background */}
            <svg 
              className="absolute inset-0 hidden lg:block" 
              width="139" 
              height="51" 
              viewBox="0 0 139 51" 
              fill="none"
            >
              <path 
                d="M0 25.5C0 11.4 11.4 0 25.5 0H113.5C127.6 0 139 11.4 139 25.5C139 39.6 127.6 51 113.5 51H25.5C11.4 51 0 39.6 0 25.5Z" 
                fill="#242424"
                className="group-hover:fill-gray-800 transition-colors"
              />
            </svg>
            
            {/* Follow Text */}
            <span className="absolute left-[22px] top-[7px] lg:left-[42px] lg:top-[13px] font-onest text-[12px] lg:text-[18px] leading-[1.275] text-white">
              Follow
            </span>
          </Link>
        </div>

        {/* Instagram Posts Grid */}
        
        {/* Mobile Grid - 2 columns, 3 rows */}
        <div className="lg:hidden w-full max-w-[346px]">
          <div className="grid grid-cols-2 gap-[2px]">
            {instagramPosts.slice(0, 6).map((post, index) => (
              <div key={post.id} className="relative w-full aspect-[173/158] overflow-hidden">
                <Image 
                  src={post.image} 
                  alt="Instagram post" 
                  fill 
                  className="object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid - 5 columns, 2 rows */}
        <div className="hidden lg:block relative w-[1480px] h-[609px]">
          {/* First Column */}
          <div className="absolute left-0 top-0 flex flex-col gap-[3.82px]">
            <div className="relative w-[295.27px] h-[301.64px] overflow-hidden">
              <Image src={instagramPosts[0].image} alt="Instagram post" fill className="object-cover" />
            </div>
            <div className="relative w-[295.27px] h-[301.64px] overflow-hidden">
              <Image src={instagramPosts[1].image} alt="Instagram post" fill className="object-cover" />
            </div>
          </div>

          {/* Second Column */}
          <div className="absolute left-[298.93px] top-0 flex flex-col gap-[3.82px]">
            <div className="relative w-[291.61px] h-[302.59px] overflow-hidden">
              <Image src={instagramPosts[2].image} alt="Instagram post" fill className="object-cover" />
            </div>
            <div className="relative w-[291.61px] h-[302.59px] overflow-hidden">
              <Image src={instagramPosts[3].image} alt="Instagram post" fill className="object-cover" />
            </div>
          </div>

          {/* Third Column */}
          <div className="absolute left-[594.19px] top-0 flex flex-col gap-[3.82px]">
            <div className="relative w-[292.53px] h-[302.59px] overflow-hidden">
              <Image src={instagramPosts[4].image} alt="Instagram post" fill className="object-cover" />
            </div>
            <div className="relative w-[292.53px] h-[302.59px] overflow-hidden">
              <Image src={instagramPosts[5].image} alt="Instagram post" fill className="object-cover" />
            </div>
          </div>

          {/* Fourth Column */}
          <div className="absolute left-[890.38px] top-0 flex flex-col gap-[3.82px]">
            <div className="relative w-[291.61px] h-[301.64px] overflow-hidden">
              <Image src={instagramPosts[6].image} alt="Instagram post" fill className="object-cover" />
            </div>
            <div className="relative w-[291.61px] h-[301.64px] overflow-hidden">
              <Image src={instagramPosts[7].image} alt="Instagram post" fill className="object-cover" />
            </div>
          </div>

          {/* Fifth Column */}
          <div className="absolute left-[1185.65px] top-0 flex flex-col gap-[3.82px]">
            <div className="relative w-[294.35px] h-[301.64px] overflow-hidden">
              <Image src={instagramPosts[8].image} alt="Instagram post" fill className="object-cover" />
            </div>
            <div className="relative w-[294.35px] h-[301.64px] overflow-hidden">
              <Image src={instagramPosts[9].image} alt="Instagram post" fill className="object-cover" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}