import React from 'react'

export function MissionVisionValues() {
  return (
    <div className="w-full max-w-[325px] md:max-w-[1480px]">
      <h2 className="font-thunder font-normal text-[30px] leading-[28px] md:font-medium md:text-[50px] md:leading-[46px] text-[#242424] mb-[26px] md:mb-[36px]">
        Mission, Vision & Values
      </h2>

      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[26px]">
        {/* Mission and Vision Column */}
        <div className="flex flex-col gap-[20px] md:gap-[22px] w-full md:w-auto">
          {/* Mission */}
          <div 
            className="relative w-full md:w-[727px] h-[106px] md:h-[147px] bg-[#EEEEEE] rounded-[20px] p-[22px] md:p-0"
            style={{
              boxShadow: '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px 0px rgba(42, 51, 70, 0.04), 0px 5px 10px -2px rgba(42, 51, 70, 0.03), 0px 24px 24px 0px rgba(42, 51, 70, 0.03)'
            }}
          >
            <h3 className="md:absolute md:left-[49px] md:top-[43px] font-thunder font-medium text-[22px] leading-[20px] md:text-[33px] md:leading-[30px] text-[#242424] mb-[13px] md:mb-0">
              Mission
            </h3>
            <p className="md:absolute md:left-[49px] md:top-[81px] md:w-[287px] font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424]">
              Delighting every travel experience
            </p>
          </div>

          {/* Vision */}
          <div 
            className="relative w-full md:w-[727px] h-[106px] md:h-[147px] bg-[#EEEEEE] rounded-[20px] p-[22px] md:p-0"
            style={{
              boxShadow: '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px 0px rgba(42, 51, 70, 0.04), 0px 5px 10px -2px rgba(42, 51, 70, 0.03), 0px 24px 24px 0px rgba(42, 51, 70, 0.03)'
            }}
          >
            <h3 className="md:absolute md:left-[49px] md:top-[43px] font-thunder font-medium text-[22px] leading-[20px] md:text-[33px] md:leading-[30px] text-[#242424] mb-[13px] md:mb-0">
              Vision
            </h3>
            <p className="md:absolute md:left-[49px] md:top-[81px] md:w-[229px] font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424]">
              Be Travellers' FIRST Choice
            </p>
          </div>
        </div>

        {/* Values */}
        <div 
          className="relative w-full md:w-[727px] h-[225px] md:h-[316px] bg-[#EEEEEE] rounded-[20px] p-[22px] md:p-0"
          style={{
            boxShadow: '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px 0px rgba(42, 51, 70, 0.04), 0px 5px 10px -2px rgba(42, 51, 70, 0.03), 0px 24px 24px 0px rgba(42, 51, 70, 0.03)'
          }}
        >
          <h3 className="md:absolute md:left-[49px] md:top-[47px] font-thunder font-medium text-[22px] leading-[20px] md:text-[33px] md:leading-[30px] text-[#242424] mb-[13px] md:mb-0">
            Values
          </h3>
          <p className="md:absolute md:left-[49px] md:top-[85px] md:w-[315px] md:h-[184px] font-onest text-[13px] leading-[17px] md:text-[18px] md:leading-[23px] text-[#242424] whitespace-pre-line">
{`Deliver what we promise
Serve customers passionately
Do what we do, best
Make work fun
Care for employees
Stay as one big family as we grow
Be a good business partner
Be socially responsible`}
          </p>
        </div>
      </div>
    </div>
  )
}