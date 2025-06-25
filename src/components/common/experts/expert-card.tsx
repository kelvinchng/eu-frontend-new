import React from 'react'
import Image from 'next/image'

interface ExpertCardProps {
  name: string
  description: string
  reviews: number
  image: string
  imageWidth: number
  imageHeight: number
  imageTop: number
  imageLeft: number
}

export function ExpertCard({ 
  name, 
  description, 
  reviews, 
  image,
  imageWidth,
  imageHeight,
  imageTop,
  imageLeft
}: ExpertCardProps) {
  return (
    <div className="relative w-[325px] h-[373px] md:w-[467px] md:h-[559px] bg-white border border-[#E8E8E8] rounded-[20px]">
      {/* Expert Image - Desktop */}
      <div 
        className="absolute overflow-hidden hidden md:block"
        style={{
          left: `${imageLeft}px`,
          top: `${imageTop}px`,
          width: `${imageWidth}px`,
          height: `${imageHeight}px`
        }}
      >
        <Image
          src={image}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          sizes={`${imageWidth}px`}
          className="object-cover"
        />
      </div>

      {/* Expert Image - Mobile */}
      <div className="absolute md:hidden overflow-hidden left-[82px] top-[9px] w-[151px] h-[225px]">
        <Image
          src={image}
          alt={name}
          width={151}
          height={225}
          sizes="151px"
          className="object-cover"
        />
      </div>

      {/* Expert Name */}
      <h3 className="absolute left-[24px] top-[244px] md:left-[34.2px] md:top-[383px] font-thunder font-medium text-[22px] leading-[20px] md:text-[32px] md:leading-[29px] text-[#242424]">
        {name}
      </h3>

      {/* Expert Reviews */}
      <p className="absolute left-[24px] top-[265px] md:left-[34.2px] md:top-[416px] font-onest font-medium text-[10px] leading-[13px] md:text-[15px] md:leading-[19px] text-[#242424]">
        ({reviews} Reviews)
      </p>

      {/* Expert Description */}
      <p className="absolute left-[24px] top-[289px] w-[278px] md:left-[34.2px] md:top-[453px] md:w-[399.01px] font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424]">
        {description}
      </p>
    </div>
  )
}