'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface MICEContactFormProps {
  title?: string
  subtitle?: string
  onSubmit?: (data: MICEFormData) => void
  className?: string
}

interface MICEFormData {
  // Contact Information
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string
  
  // Event Details
  eventType: string
  eventTitle: string
  startDate: string
  endDate: string
  location: string
  attendees: string
  budget: string
  
  // Requirements
  accommodation: boolean
  transportation: boolean
  meals: boolean
  entertainment: boolean
  teamBuilding: boolean
  audioVisual: boolean
  
  // Additional Information
  specialRequirements: string
  message: string
}

export function MICEContactForm({
  title = "Request MICE Proposal",
  subtitle = "Tell us about your event and we'll create a customized proposal for you",
  onSubmit,
  className
}: MICEContactFormProps) {
  const [formData, setFormData] = useState<MICEFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    eventType: '',
    eventTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    attendees: '',
    budget: '',
    accommodation: false,
    transportation: false,
    meals: false,
    entertainment: false,
    teamBuilding: false,
    audioVisual: false,
    specialRequirements: '',
    message: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalSteps = 4

  const eventTypes = [
    'Corporate Meeting',
    'Board Meeting',
    'Training Workshop',
    'Team Building',
    'Product Launch',
    'Conference',
    'Seminar',
    'Awards Ceremony',
    'Gala Dinner',
    'Incentive Trip',
    'Company Retreat',
    'Other'
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'To be discussed'
  ]

  const attendeeRanges = [
    '1-10 people',
    '11-25 people',
    '26-50 people',
    '51-100 people',
    '101-250 people',
    '251-500 people',
    '500+ people'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await onSubmit?.(formData)
      // Handle success (show confirmation, reset form, etc.)
    } catch (error) {
      // Handle error
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.company
      case 2:
        return formData.eventType && formData.startDate && formData.attendees
      case 3:
        return true // Optional requirements step
      case 4:
        return true // Final review step
      default:
        return false
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="w-full max-w-[1920px] mx-auto">
        <div className={cn(
          // Responsive padding
          "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px]",
          "py-[32px] sm:py-[40px] md:py-[48px] lg:py-[56px] xl:py-[64px] 2xl:py-[72px]"
        )}>
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={cn(
              "font-thunder font-medium text-[#242424] mb-4 sm:mb-6",
              "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px]"
            )}>
              {title}
            </h2>
            <p className={cn(
              "font-onest text-[#666666] max-w-2xl mx-auto",
              "text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]"
            )}>
              {subtitle}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={cn(
                    "flex items-center justify-center rounded-full transition-colors duration-300",
                    "w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]",
                    "text-[12px] sm:text-[14px] md:text-[16px] font-onest font-bold",
                    currentStep >= step ? "bg-[#0066CC] text-white" : "bg-[#F0F0F0] text-[#888888]"
                  )}>
                    {step}
                  </div>
                  {step < totalSteps && (
                    <div className={cn(
                      "h-[2px] transition-colors duration-300",
                      "w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px]",
                      currentStep > step ? "bg-[#0066CC]" : "bg-[#F0F0F0]"
                    )} />
                  )}
                </div>
              ))}
            </div>
            
            {/* Step Labels */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <span className={cn(
                "font-onest font-medium",
                "text-[10px] sm:text-[11px] md:text-[12px]",
                currentStep >= 1 ? "text-[#0066CC]" : "text-[#888888]"
              )}>
                Contact Info
              </span>
              <span className={cn(
                "font-onest font-medium",
                "text-[10px] sm:text-[11px] md:text-[12px]",
                currentStep >= 2 ? "text-[#0066CC]" : "text-[#888888]"
              )}>
                Event Details
              </span>
              <span className={cn(
                "font-onest font-medium",
                "text-[10px] sm:text-[11px] md:text-[12px]",
                currentStep >= 3 ? "text-[#0066CC]" : "text-[#888888]"
              )}>
                Requirements
              </span>
              <span className={cn(
                "font-onest font-medium",
                "text-[10px] sm:text-[11px] md:text-[12px]",
                currentStep >= 4 ? "text-[#0066CC]" : "text-[#888888]"
              )}>
                Review
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className={cn(
                "bg-white border border-[#F0F0F0]",
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px]"
              )}>
                <h3 className={cn(
                  "font-thunder font-medium text-[#242424] mb-6 sm:mb-8",
                  "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
                )}>
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* First Name */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Enter your first name"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Enter your last name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Enter your company name"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Event Details */}
            {currentStep === 2 && (
              <div className={cn(
                "bg-white border border-[#F0F0F0]",
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px]"
              )}>
                <h3 className={cn(
                  "font-thunder font-medium text-[#242424] mb-6 sm:mb-8",
                  "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
                )}>
                  Event Details
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  {/* Event Type */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Event Title */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Event Title
                    </label>
                    <input
                      type="text"
                      name="eventTitle"
                      value={formData.eventTitle}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Enter event title or theme"
                    />
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className={cn(
                        "block font-onest font-medium text-[#242424] mb-2",
                        "text-[12px] sm:text-[13px] md:text-[14px]"
                      )}>
                        Start Date *
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                        className={cn(
                          "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                          "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                          "text-[12px] sm:text-[14px] md:text-[15px]"
                        )}
                      />
                    </div>

                    <div>
                      <label className={cn(
                        "block font-onest font-medium text-[#242424] mb-2",
                        "text-[12px] sm:text-[13px] md:text-[14px]"
                      )}>
                        End Date
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        className={cn(
                          "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                          "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                          "text-[12px] sm:text-[14px] md:text-[15px]"
                        )}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Enter preferred destination or region"
                    />
                  </div>

                  {/* Attendees and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className={cn(
                        "block font-onest font-medium text-[#242424] mb-2",
                        "text-[12px] sm:text-[13px] md:text-[14px]"
                      )}>
                        Number of Attendees *
                      </label>
                      <select
                        name="attendees"
                        value={formData.attendees}
                        onChange={handleInputChange}
                        required
                        className={cn(
                          "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                          "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                          "text-[12px] sm:text-[14px] md:text-[15px]"
                        )}
                      >
                        <option value="">Select number of attendees</option>
                        {attendeeRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={cn(
                        "block font-onest font-medium text-[#242424] mb-2",
                        "text-[12px] sm:text-[13px] md:text-[14px]"
                      )}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={cn(
                          "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3",
                          "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC]",
                          "text-[12px] sm:text-[14px] md:text-[15px]"
                        )}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(budget => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Requirements */}
            {currentStep === 3 && (
              <div className={cn(
                "bg-white border border-[#F0F0F0]",
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px]"
              )}>
                <h3 className={cn(
                  "font-thunder font-medium text-[#242424] mb-6 sm:mb-8",
                  "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
                )}>
                  Service Requirements
                </h3>

                {/* Service Checkboxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {[
                    { name: 'accommodation', label: 'Accommodation', icon: '🏨' },
                    { name: 'transportation', label: 'Transportation', icon: '🚌' },
                    { name: 'meals', label: 'Meals & Catering', icon: '🍽️' },
                    { name: 'entertainment', label: 'Entertainment', icon: '🎭' },
                    { name: 'teamBuilding', label: 'Team Building Activities', icon: '🎯' },
                    { name: 'audioVisual', label: 'Audio/Visual Equipment', icon: '📹' }
                  ].map(({ name, label, icon }) => (
                    <label key={name} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name={name}
                        checked={formData[name as keyof MICEFormData] as boolean}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#0066CC] border-[#DDDDDD] rounded focus:ring-[#0066CC] focus:ring-2"
                      />
                      <span className="text-lg">{icon}</span>
                      <span className={cn(
                        "font-onest text-[#242424] group-hover:text-[#0066CC] transition-colors",
                        "text-[12px] sm:text-[13px] md:text-[14px]"
                      )}>
                        {label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Special Requirements */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Special Requirements
                    </label>
                    <textarea
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3 resize-none",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Please describe any special requirements, dietary restrictions, accessibility needs, etc."
                    />
                  </div>

                  <div>
                    <label className={cn(
                      "block font-onest font-medium text-[#242424] mb-2",
                      "text-[12px] sm:text-[13px] md:text-[14px]"
                    )}>
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={cn(
                        "w-full border border-[#DDDDDD] rounded-[6px] px-3 py-3 resize-none",
                        "font-onest text-[#242424] focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-blue-200",
                        "text-[12px] sm:text-[14px] md:text-[15px]"
                      )}
                      placeholder="Tell us more about your event goals, expectations, or any other details that would help us create the perfect proposal for you."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className={cn(
                "bg-white border border-[#F0F0F0]",
                "p-[20px] sm:p-[24px] md:p-[28px] lg:p-[32px]",
                "rounded-[8px] sm:rounded-[10px] md:rounded-[12px]"
              )}>
                <h3 className={cn(
                  "font-thunder font-medium text-[#242424] mb-6 sm:mb-8",
                  "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"
                )}>
                  Review Your Information
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  {/* Contact Summary */}
                  <div>
                    <h4 className={cn(
                      "font-onest font-bold text-[#242424] mb-3",
                      "text-[14px] sm:text-[15px] md:text-[16px]"
                    )}>
                      Contact Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#666666]">
                      <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Company:</strong> {formData.company}</p>
                      {formData.phone && <p><strong>Phone:</strong> {formData.phone}</p>}
                    </div>
                  </div>

                  {/* Event Summary */}
                  <div>
                    <h4 className={cn(
                      "font-onest font-bold text-[#242424] mb-3",
                      "text-[14px] sm:text-[15px] md:text-[16px]"
                    )}>
                      Event Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#666666]">
                      <p><strong>Type:</strong> {formData.eventType}</p>
                      <p><strong>Attendees:</strong> {formData.attendees}</p>
                      <p><strong>Start Date:</strong> {formData.startDate}</p>
                      {formData.endDate && <p><strong>End Date:</strong> {formData.endDate}</p>}
                      {formData.location && <p><strong>Location:</strong> {formData.location}</p>}
                      {formData.budget && <p><strong>Budget:</strong> {formData.budget}</p>}
                    </div>
                  </div>

                  {/* Requirements Summary */}
                  <div>
                    <h4 className={cn(
                      "font-onest font-bold text-[#242424] mb-3",
                      "text-[14px] sm:text-[15px] md:text-[16px]"
                    )}>
                      Selected Services
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { key: 'accommodation', label: 'Accommodation' },
                        { key: 'transportation', label: 'Transportation' },
                        { key: 'meals', label: 'Meals & Catering' },
                        { key: 'entertainment', label: 'Entertainment' },
                        { key: 'teamBuilding', label: 'Team Building' },
                        { key: 'audioVisual', label: 'Audio/Visual' }
                      ].filter(service => formData[service.key as keyof MICEFormData]).map(service => (
                        <span key={service.key} className={cn(
                          "bg-[#F0F8FF] text-[#0066CC] font-onest rounded-full",
                          "px-[12px] py-[6px] text-[11px] sm:text-[12px]"
                        )}>
                          {service.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Navigation */}
            <div className="flex justify-between items-center mt-8 sm:mt-12">
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={cn(
                  "font-onest font-medium transition-all duration-300 flex items-center gap-2",
                  "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] rounded-[6px] sm:rounded-[8px]",
                  "text-[12px] sm:text-[14px] md:text-[15px]",
                  currentStep === 1
                    ? "bg-[#F5F5F5] text-[#CCCCCC] cursor-not-allowed"
                    : "bg-[#F5F5F5] text-[#666666] hover:bg-[#E5E5E5] hover:text-[#242424]"
                )}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              {/* Next/Submit Button */}
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className={cn(
                    "font-onest font-medium transition-all duration-300 flex items-center gap-2",
                    "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] rounded-[6px] sm:rounded-[8px]",
                    "text-[12px] sm:text-[14px] md:text-[15px]",
                    !isStepValid()
                      ? "bg-[#CCCCCC] text-white cursor-not-allowed"
                      : "bg-[#0066CC] text-white hover:bg-[#004499]"
                  )}
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "font-onest font-medium transition-all duration-300 flex items-center gap-2",
                    "px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] rounded-[6px] sm:rounded-[8px]",
                    "text-[12px] sm:text-[14px] md:text-[15px]",
                    isSubmitting
                      ? "bg-[#CCCCCC] text-white cursor-not-allowed"
                      : "bg-[#0066CC] text-white hover:bg-[#004499]"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Proposal Request
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}