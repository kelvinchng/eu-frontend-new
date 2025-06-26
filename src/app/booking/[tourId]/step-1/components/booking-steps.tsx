'use client'

import React from 'react'

interface BookingStepsProps {
  currentStep: number
}

export function BookingSteps({ currentStep }: BookingStepsProps) {
  return (
    <>
      {/* Mobile: Horizontal layout matching Figma */}
      <div className="md:hidden">
        {/* Step 1 - Active */}
        <div className="relative">
          <div className="flex items-center gap-[7px]">
            <div className={`w-[26px] h-[26px] rounded-full ${currentStep === 1 ? 'bg-[#242424]' : 'bg-[#B3B3B3]'} flex items-center justify-center`}>
              <span className="text-white font-onest text-[13px]">1</span>
            </div>
            <span className="font-onest font-semibold text-[13px] text-[#242424] uppercase">
              SELECT YOUR PACKAGE
            </span>
          </div>
          {/* Dotted line after step 1 text */}
          <div className="absolute top-[13px] left-[197px] right-0 h-0">
            <svg className="w-full" height="2" viewBox="0 0 127 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <line y1="1" x2="127" y2="1" stroke="black" strokeWidth="2" strokeDasharray="2 6"/>
            </svg>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="relative mt-[17px]">
          <div className="flex items-center gap-[7px]">
            <div className={`w-[26px] h-[26px] rounded-full ${currentStep === 2 ? 'bg-[#242424]' : 'bg-[#B3B3B3]'} flex items-center justify-center`}>
              <span className="text-white font-onest text-[13px]">2</span>
            </div>
            <span className="font-onest font-semibold text-[13px] text-[#242424] uppercase">
              TRAVELLER'S INFORMATION
            </span>
          </div>
          {/* Dotted line after step 2 text */}
          <div className="absolute top-[13px] left-[225px] right-0 h-0">
            <svg className="w-full" height="2" viewBox="0 0 99 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <line y1="1" x2="99" y2="1" stroke="#242424" strokeWidth="2" strokeDasharray="2 6"/>
            </svg>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="relative mt-[17px]">
          <div className="flex items-center gap-[7px]">
            <div className={`w-[26px] h-[26px] rounded-full ${currentStep === 3 ? 'bg-[#242424]' : 'bg-[#B3B3B3]'} flex items-center justify-center`}>
              <span className="text-white font-onest text-[13px]">3</span>
            </div>
            <span className="font-onest font-semibold text-[13px] text-[#242424] uppercase">
              REVIEW AND CONFIRM
            </span>
          </div>
          {/* Dotted line after step 3 text */}
          <div className="absolute top-[13px] left-[192px] right-0 h-0">
            <svg className="w-full" height="2" viewBox="0 0 132 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <line y1="1" x2="132" y2="1" stroke="#242424" strokeWidth="2" strokeDasharray="2 6"/>
            </svg>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="relative mt-[17px]">
          <div className="flex items-center gap-[7px]">
            <div className={`w-[26px] h-[26px] rounded-full ${currentStep === 4 ? 'bg-[#242424]' : 'bg-[#B3B3B3]'} flex items-center justify-center`}>
              <span className="text-white font-onest text-[13px]">4</span>
            </div>
            <span className="font-onest font-semibold text-[13px] text-[#242424] uppercase">
              PAYMENT
            </span>
          </div>
          {/* Dotted line after step 4 text */}
          <div className="absolute top-[13px] left-[106px] right-0 h-0">
            <svg className="w-full" height="2" viewBox="0 0 218 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <line y1="1" x2="218" y2="1" stroke="#242424" strokeWidth="2" strokeDasharray="2 6"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal layout */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Step 1 - Active */}
        <div className="flex items-center gap-[20px] whitespace-nowrap">
          <div className={`w-[54.53px] h-[55px] rounded-full ${currentStep === 1 ? 'bg-[#242424]' : 'bg-[#B3B3B3]'} flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-onest font-semibold text-[18px]">1</span>
          </div>
          <span className="font-onest font-semibold text-[14px] lg:text-[16px] xl:text-[18px] text-[#242424] uppercase tracking-[-2.5%]">
            SELECT YOUR PACKAGE
          </span>
        </div>
        
        <div className={`flex-1 mx-[15px] lg:mx-[20px] xl:mx-[30px] border-t-2 border-dashed ${currentStep >= 2 ? 'border-black' : 'border-[#B3B3B3]'}`}></div>
        
        {/* Step 2 */}
        <div className="flex items-center gap-[20px] whitespace-nowrap">
          <div className={`w-[54.53px] h-[55px] rounded-full ${currentStep === 2 ? 'bg-[#242424]' : 'bg-[#B3B3B3]'} flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-onest font-semibold text-[18px]">2</span>
          </div>
          <span className="font-onest font-semibold text-[14px] lg:text-[16px] xl:text-[18px] text-[#242424] uppercase tracking-[-2.5%]">
            TRAVELLER'S INFORMATION
          </span>
        </div>
        
        <div className={`flex-1 mx-[15px] lg:mx-[20px] xl:mx-[30px] border-t-2 border-dashed ${currentStep >= 3 ? 'border-black' : 'border-[#B3B3B3]'}`}></div>
        
        {/* Step 3 */}
        <div className="flex items-center gap-[20px] whitespace-nowrap">
          <div className={`w-[54.53px] h-[55px] rounded-full ${currentStep === 3 ? 'bg-[#242424]' : 'bg-[#B3B3B3]'} flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-onest font-semibold text-[18px]">3</span>
          </div>
          <span className="font-onest font-semibold text-[14px] lg:text-[16px] xl:text-[18px] text-[#242424] uppercase tracking-[-2.5%]">
            REVIEW AND CONFIRM
          </span>
        </div>
        
        <div className={`flex-1 mx-[15px] lg:mx-[20px] xl:mx-[30px] border-t-2 border-dashed ${currentStep >= 4 ? 'border-black' : 'border-[#B3B3B3]'}`}></div>
        
        {/* Step 4 */}
        <div className="flex items-center gap-[20px] whitespace-nowrap">
          <div className={`w-[54.53px] h-[55px] rounded-full ${currentStep === 4 ? 'bg-[#242424]' : 'bg-[#B3B3B3]'} flex items-center justify-center flex-shrink-0`}>
            <span className="text-white font-onest font-semibold text-[18px]">4</span>
          </div>
          <span className="font-onest font-semibold text-[14px] lg:text-[16px] xl:text-[18px] text-[#242424] uppercase tracking-[-2.5%]">
            PAYMENT
          </span>
        </div>
      </div>
    </>
  )
}