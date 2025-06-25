'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  tourInterest?: string
  travelDate?: string
  groupSize?: string
  preferredContact?: 'email' | 'phone' | 'whatsapp'
}

interface ContactFormProps {
  variant?: 'default' | 'compact' | 'detailed'
  showTourFields?: boolean
  onSubmit?: (data: ContactFormData) => void
  className?: string
}

export function ContactForm({
  variant = 'default',
  showTourFields = false,
  onSubmit,
  className
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    tourInterest: '',
    travelDate: '',
    groupSize: '',
    preferredContact: 'email'
  })

  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      onSubmit?.(formData)
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const getFieldClasses = (hasError: boolean) => cn(
    "w-full border transition-colors duration-200",
    // Responsive padding and border radius
    "px-[12px] py-[8px] sm:px-[16px] sm:py-[10px] md:px-[14px] md:py-[9px] lg:px-[18px] lg:py-[12px] xl:px-[20px] xl:py-[14px] 2xl:px-[22px] 2xl:py-[16px]",
    "rounded-[6px] sm:rounded-[8px] md:rounded-[7px] lg:rounded-[10px] xl:rounded-[12px] 2xl:rounded-[14px]",
    // Responsive font size
    "text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]",
    "font-onest",
    hasError
      ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
      : "border-[#DDDDDD] focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
    "outline-none"
  )

  const getLabelClasses = () => cn(
    "block font-onest font-medium text-[#242424] mb-1",
    // Responsive font size
    "text-[11px] sm:text-[13px] md:text-[12px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]"
  )

  if (submitted) {
    return (
      <div className={cn(
        "bg-green-50 border border-green-200 text-center",
        // Responsive padding and border radius
        "p-[24px] sm:p-[32px] md:p-[28px] lg:p-[40px] xl:p-[48px] 2xl:p-[56px]",
        "rounded-[8px] sm:rounded-[12px] md:rounded-[10px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[24px]",
        className
      )}>
        <div className="flex items-center justify-center mb-4">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={cn(
          "font-thunder font-medium text-green-800 mb-2",
          "text-[18px] sm:text-[22px] md:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[32px]"
        )}>
          Thank You!
        </h3>
        <p className={cn(
          "font-onest text-green-700",
          "text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
        )}>
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full space-y-4", className)}>
      {/* Name and Email Row */}
      <div className={cn(
        variant === 'compact' ? "space-y-4" : "grid gap-4",
        variant !== 'compact' && "sm:grid-cols-2"
      )}>
        <div>
          <label htmlFor="name" className={getLabelClasses()}>
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={getFieldClasses(!!errors.name)}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={getLabelClasses()}>
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={getFieldClasses(!!errors.email)}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone and Subject Row */}
      <div className={cn(
        variant === 'compact' ? "space-y-4" : "grid gap-4",
        variant !== 'compact' && "sm:grid-cols-2"
      )}>
        <div>
          <label htmlFor="phone" className={getLabelClasses()}>
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={getFieldClasses(!!errors.phone)}
            placeholder="+65 1234 5678"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className={getLabelClasses()}>
            Subject *
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className={getFieldClasses(!!errors.subject)}
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="booking">Booking Assistance</option>
            <option value="tour-info">Tour Information</option>
            <option value="custom-tour">Custom Tour Request</option>
            <option value="group-booking">Group Booking</option>
            <option value="support">Customer Support</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
          )}
        </div>
      </div>

      {/* Tour-specific fields */}
      {showTourFields && variant === 'detailed' && (
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="tourInterest" className={getLabelClasses()}>
              Tour Interest
            </label>
            <select
              id="tourInterest"
              value={formData.tourInterest || ''}
              onChange={(e) => handleInputChange('tourInterest', e.target.value)}
              className={getFieldClasses(false)}
            >
              <option value="">Select tour type</option>
              <option value="europe">Europe Tours</option>
              <option value="asia">Asia Tours</option>
              <option value="cruise">Cruise Packages</option>
              <option value="themed">Themed Journeys</option>
              <option value="family">Family Friendly</option>
              <option value="luxury">Luxury Experiences</option>
            </select>
          </div>

          <div>
            <label htmlFor="travelDate" className={getLabelClasses()}>
              Preferred Travel Date
            </label>
            <input
              id="travelDate"
              type="date"
              value={formData.travelDate || ''}
              onChange={(e) => handleInputChange('travelDate', e.target.value)}
              className={getFieldClasses(false)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <label htmlFor="groupSize" className={getLabelClasses()}>
              Group Size
            </label>
            <select
              id="groupSize"
              value={formData.groupSize || ''}
              onChange={(e) => handleInputChange('groupSize', e.target.value)}
              className={getFieldClasses(false)}
            >
              <option value="">Select group size</option>
              <option value="1">Solo traveler</option>
              <option value="2">2 people</option>
              <option value="3-5">3-5 people</option>
              <option value="6-10">6-10 people</option>
              <option value="11+">11+ people</option>
            </select>
          </div>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className={getLabelClasses()}>
          Message *
        </label>
        <textarea
          id="message"
          rows={variant === 'compact' ? 4 : 6}
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={getFieldClasses(!!errors.message)}
          placeholder="Tell us about your travel plans, questions, or special requirements..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Preferred Contact Method */}
      {variant === 'detailed' && (
        <div>
          <label className={getLabelClasses()}>
            Preferred Contact Method
          </label>
          <div className="flex gap-4 mt-2">
            {(['email', 'phone', 'whatsapp'] as const).map((method) => (
              <label key={method} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  checked={formData.preferredContact === method}
                  onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm font-onest capitalize">{method}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className={cn("pt-4", variant === 'compact' ? "text-center" : "")}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "bg-[#0066CC] text-white font-onest font-medium transition-all duration-200",
            // Responsive padding and border radius
            "px-[24px] py-[12px] sm:px-[32px] sm:py-[14px] md:px-[28px] md:py-[12px] lg:px-[40px] lg:py-[16px] xl:px-[48px] xl:py-[18px] 2xl:px-[56px] 2xl:py-[20px]",
            "rounded-[6px] sm:rounded-[8px] md:rounded-[7px] lg:rounded-[10px] xl:rounded-[12px] 2xl:rounded-[14px]",
            // Responsive font size
            "text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]",
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#004499] focus:ring-2 focus:ring-blue-200",
            variant === 'compact' ? "w-full sm:w-auto" : "w-full sm:w-auto"
          )}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  )
}