import React from 'react'
import Image from 'next/image'

export function OurPeople() {
  return (
    <div className="w-full max-w-[325px] md:max-w-[1480px] flex flex-col md:flex-row gap-[40px] md:gap-[114px] items-center">
      {/* Content */}
      <div className="w-full md:w-[688px] flex flex-col gap-[25px] md:gap-[37px]">
        {/* Our People */}
        <div>
          <h2 className="font-thunder font-normal text-[30px] leading-[28px] md:font-medium md:text-[50px] md:leading-[46px] text-[#242424] mb-[25px] md:mb-[32px]">
            Our People
          </h2>
          <h3 className="font-thunder font-medium text-[22px] leading-[20px] md:text-[33px] md:leading-[30px] text-[#242424] mb-[10px]">
            Our Team
          </h3>
          <p className="font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424] mb-[29px] md:mb-0">
            We make an effort to organise annual company retreats to different destinations out of 
            Singapore, a way for the management to show appreciation towards our employees for their hard 
            work. We arrange various activities for employees across departments to come together and have fun, 
            relax and relieve stress, and at the same time, boosting employee morale and engagement with each 
            other.
          </p>
        </div>

        {/* Our Gatherings */}
        <div>
          <h3 className="font-thunder font-medium text-[22px] leading-[20px] md:text-[33px] md:leading-[30px] text-[#242424] mb-[10px]">
            Our Gatherings
          </h3>
          <p className="font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424]">
            We work hard, and we play hard! Our company has always emphasised the importance of work-life 
            balance, and we make it a point to arrange for frequent get-togethers, particularly after a 
            successful event or project. This creates the perfect setting for team-bonding opportunities and 
            instills a sense of pride among employees for their good work.
          </p>
        </div>

        {/* Our Social Contributions - Hidden on mobile */}
        <div className="hidden md:block">
          <h3 className="font-thunder font-medium text-[33px] leading-[30px] text-[#242424] mb-[10px]">
            Our Social Contributions
          </h3>
          <p className="font-onest text-[18px] leading-[23px] text-[#242424]">
            We firmly believe in fostering positive contributions to the sustainable development of 
            the society and the community as part of our corporate culture. We actively encourage and 
            support voluntary social contribution activities conducted by each of our employees, in conjunction 
            with appropriate donations to charities and organisations to benefit the local community.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="w-full max-w-[325px] md:w-[678px] flex flex-col gap-[8px] md:gap-[16px]">
        {/* Main Image */}
        <div 
          className="relative w-full h-[186px] md:h-[388px] rounded-[20px] overflow-hidden"
          style={{
            boxShadow: '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px 0px rgba(42, 51, 70, 0.04), 0px 5px 10px -2px rgba(42, 51, 70, 0.03), 0px 24px 24px 0px rgba(42, 51, 70, 0.03)'
          }}
        >
          <Image
            src="/assets/images/our-people-1.jpg"
            alt="Our Team"
            fill
            sizes="(max-width: 768px) 325px, 678px"
            className="object-cover"
          />
        </div>

        {/* Two Smaller Images */}
        <div className="flex gap-[8px] md:gap-[16px]">
          <div 
            className="relative flex-1 h-[147px] md:h-[307px] rounded-[20px] overflow-hidden"
            style={{
              boxShadow: '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px 0px rgba(42, 51, 70, 0.04), 0px 5px 10px -2px rgba(42, 51, 70, 0.03), 0px 24px 24px 0px rgba(42, 51, 70, 0.03)'
            }}
          >
            <Image
              src="/assets/images/our-people-2.jpg"
              alt="Our Gatherings"
              fill
              sizes="(max-width: 768px) 158px, 331px"
              className="object-cover"
            />
          </div>
          <div 
            className="relative flex-1 h-[147px] md:h-[307px] rounded-[20px] overflow-hidden"
            style={{
              boxShadow: '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px 0px rgba(42, 51, 70, 0.04), 0px 5px 10px -2px rgba(42, 51, 70, 0.03), 0px 24px 24px 0px rgba(42, 51, 70, 0.03)'
            }}
          >
            <Image
              src="/assets/images/our-people-3.jpg"
              alt="Our Social Contributions"
              fill
              sizes="(max-width: 768px) 158px, 331px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}