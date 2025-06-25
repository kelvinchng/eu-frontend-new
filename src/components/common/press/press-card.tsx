import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PressCardProps {
  id: string
  title: string
  description: string
  date: string
  thumbnail: string
  articleUrl?: string
}

export function PressCard({ id, title, description, date, thumbnail, articleUrl }: PressCardProps) {
  return (
    <div className="relative w-[325px] h-[508px] md:w-[467px] md:h-[735px] bg-white border border-[#E8E8E8] rounded-[20px]">
      {/* Thumbnail */}
      <div className="absolute left-[16px] top-[21px] w-[293px] h-[233px] md:left-[22.8px] md:top-[31px] md:w-[420.67px] md:h-[337px] rounded-[13px] overflow-hidden flex items-center justify-center">
        <Image
          src={thumbnail}
          alt={title}
          width={421}
          height={337}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Title */}
      <h3 className="absolute left-[24px] top-[272px] w-[278px] md:left-[34px] md:top-[393px] md:w-[399px] font-thunder font-medium text-[22px] leading-[23px] md:text-[32px] md:leading-[36px] text-[#242424]">
        {title}
      </h3>

      {/* Date */}
      <p className="absolute left-[24px] top-[328px] md:left-[34px] md:top-[474px] font-onest text-[10px] leading-[13px] md:text-[15px] md:leading-[19px] tracking-[0.03em] text-[#475569]/50">
        {date}
      </p>

      {/* Description */}
      <p className="absolute left-[24px] top-[360px] w-[278px] md:left-[34.2px] md:top-[521px] md:w-[399.01px] font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424]">
        {description}
      </p>

      {/* Read Article Button */}
      <Link 
        href={`/press/${id}`}
        className="absolute left-[24px] top-[445px] w-[97px] h-[35px] md:left-[34px] md:top-[644px] md:w-[140px] md:h-[51px] bg-[#242424] border border-[#242424] rounded-[9px] font-onest text-[12px] md:text-[16px] leading-[15px] md:leading-[20px] text-white hover:bg-[#333333] transition-colors flex items-center justify-center"
      >
        Read Article
      </Link>
    </div>
  )
}