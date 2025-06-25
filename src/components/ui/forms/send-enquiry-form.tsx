'use client'

import React, { useState } from 'react'

interface SendEnquiryFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
}

interface SendEnquiryFormProps {
  onSubmit: (data: SendEnquiryFormData) => void
  className?: string
}

export function SendEnquiryForm({ onSubmit, className = '' }: SendEnquiryFormProps) {
  const [formData, setFormData] = useState<SendEnquiryFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className={`relative ${className}`}>
      {/* Background - Figma: 686x555, white background, shadow, 20px border radius */}
      <div 
        className="w-[686px] h-[555px] bg-white rounded-[20px] relative"
        style={{
          boxShadow: '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px 0px rgba(42, 51, 70, 0.04), 0px 5px 10px -2px rgba(42, 51, 70, 0.03), 0px 24px 24px 0px rgba(42, 51, 70, 0.03)'
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* First Name Field - Position: x:45, y:51, 290.73x58 */}
          <div className="absolute left-[45px] top-[51px] w-[290.73px] h-[58px]">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              required
              className="w-full h-full bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[18.87px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424]"
            />
          </div>

          {/* Last Name Field - Position: x:351.27, y:51, 290.73x58 */}
          <div className="absolute left-[351.27px] top-[51px] w-[290.73px] h-[58px]">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              required
              className="w-full h-full bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[18.87px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424]"
            />
          </div>

          {/* Phone Field - Position: x:45, y:125, 290.73x58 */}
          <div className="absolute left-[45px] top-[125px] w-[290.73px] h-[58px]">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              required
              className="w-full h-full bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[18.87px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424]"
            />
          </div>

          {/* Email Field - Position: x:351.27, y:125, 290.73x58 */}
          <div className="absolute left-[351.27px] top-[125px] w-[290.73px] h-[58px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full h-full bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[18.87px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424]"
            />
          </div>

          {/* Message Field - Position: x:45, y:199, 597x237 */}
          <div className="absolute left-[45px] top-[199px] w-[597px] h-[237px]">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message*"
              required
              rows={8}
              className="w-full h-full bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[19px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424] resize-none"
            />
          </div>

          {/* Submit Button - Position: x:444, y:452, 198x52 */}
          <div className="absolute left-[444px] top-[452px] w-[198px] h-[52px]">
            <button
              type="submit"
              className="w-full h-full bg-[#242424] border border-[rgba(0,0,0,0.35)] rounded-[9px] flex items-center justify-center font-onest text-[18px] leading-[23px] text-white tracking-[-0.025em] hover:bg-[#333333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#242424] focus:ring-offset-2"
            >
              Send Enquiry
            </button>
          </div>
        </form>

        {/* Divider - Position: full width, height: 0 (stroke only) */}
        <div className="absolute left-0 bottom-[51px] w-full h-[1px] bg-[#E8E8E8]"></div>

        {/* Terms & Conditions Text - Position: below divider, 591px width */}
        <div className="absolute left-[45px] bottom-[8px] w-[591px]">
          <p className="font-onest text-[18px] leading-[23px] text-black">
            By submitting this form, you are confirming you have read and agreed to our{' '}
            <span className="underline cursor-pointer hover:text-[#666666]">Terms & Conditions</span>{' '}
            and{' '}
            <span className="underline cursor-pointer hover:text-[#666666]">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  )
}