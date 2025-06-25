import React from 'react'
import Image from 'next/image'

export function AsSeenIn() {
  return (
    <div className="w-[208px] h-[98px] md:w-[491.19px] md:h-[79px] relative">
      {/* Section Title */}
      <h2 className="absolute left-0 top-0 md:top-[30px] font-thunder font-medium text-[30px] leading-[28px] md:text-[38px] md:leading-[35px] text-[#242424]">
        As Seen In
      </h2>
      
      {/* Lianhe Zaobao Logo */}
      <div className="absolute left-0 top-[54px] w-[129px] h-[40px] md:left-[167px] md:top-[9px] md:w-[219.6px] md:h-[68px]">
        <Image
          src="/assets/images/lianhe-zaobao-full.png"
          alt="Lianhe Zaobao"
          width={220}
          height={68}
          className="object-contain"
        />
      </div>

      {/* CNA Logo */}
      <div className="absolute left-[173px] top-[49px] w-[35px] h-[49px] md:left-[435px] md:top-0 md:w-[56.19px] md:h-[79px]">
        <Image
          src="/assets/images/cna-logo-full.png"
          alt="CNA"
          width={56}
          height={79}
          className="object-contain"
        />
      </div>
    </div>
  )
}