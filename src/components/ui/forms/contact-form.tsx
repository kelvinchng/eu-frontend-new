'use client'

import React, { useState } from 'react'

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
  className?: string
}

interface ContactFormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  message: string
}

export function ContactForm({
  onSubmit,
  className = ''
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      if (onSubmit) {
        onSubmit(formData)
      }
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`w-[686px] ${className}`}>
      {/* White Card Background - Contains only form fields and button */}
      <div 
        className="bg-white rounded-[20px] p-[45px] relative"
        style={{
          boxShadow: '0px 0px 0px 1px rgba(14, 63, 126, 0.06), 0px 1px 2px 0px rgba(42, 51, 70, 0.04), 0px 5px 10px -2px rgba(42, 51, 70, 0.03), 0px 24px 24px 0px rgba(42, 51, 70, 0.03)'
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Form Fields Container */}
          <div className="space-y-[16px]">
            {/* First Row - First Name and Last Name */}
            <div className="flex gap-[15.54px]">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  required
                  className="w-full h-[58px] bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[18.87px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  required
                  className="w-full h-[58px] bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[18.87px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424]"
                />
              </div>
            </div>

            {/* Second Row - Phone and Email */}
            <div className="flex gap-[15.54px]">
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone*"
                  required
                  className="w-full h-[58px] bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[18.87px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424]"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  required
                  className="w-full h-[58px] bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[18.87px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424]"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message*"
                required
                rows={8}
                className="w-full h-[237px] bg-white border-[1.4px] border-[#242424] rounded-[9px] px-[19px] py-[18px] font-onest text-[18px] leading-[23px] text-[rgba(36,36,36,0.75)] placeholder:text-[rgba(36,36,36,0.75)] focus:outline-none focus:border-[#242424] resize-none"
              />
            </div>
          </div>

          {/* Submit Button - Aligned to right */}
          <div className="flex justify-end mt-[16px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[198px] h-[52px] bg-[#242424] border border-[rgba(0,0,0,0.35)] rounded-[9px] flex items-center justify-center font-onest text-[18px] leading-[23px] text-white tracking-[-0.025em] hover:bg-[#333333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#242424] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </div>
        </form>
      </div>

      {/* Divider - Outside the white card */}
      <div className="w-full h-[1px] bg-[#E8E8E8] mt-[40px]"></div>

      {/* Terms & Conditions Text - Outside the white card, below divider */}
      <div className="mt-[20px]">
        <p className="font-onest text-[18px] leading-[23px] text-black">
          By submitting this form, you are confirming you have read and agreed to our{' '}
          <a href="/terms" className="underline cursor-pointer hover:text-[#666666]">Terms & Conditions</a>{' '}
          and{' '}
          <a href="/privacy" className="underline cursor-pointer hover:text-[#666666]">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}