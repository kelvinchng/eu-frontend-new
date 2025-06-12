'use client'

import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Select size variant - affects height and padding
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Error state styling
   */
  error?: boolean
  /**
   * Success state styling
   */
  success?: boolean
  /**
   * Helper text to display below select
   */
  helperText?: string
  /**
   * Label for the select
   */
  label?: string
  /**
   * Options for the select
   */
  options?: SelectOption[]
  /**
   * Placeholder text
   */
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    size = 'md',
    error = false,
    success = false,
    helperText,
    label,
    options = [],
    placeholder,
    id,
    children,
    ...props 
  }, ref) => {
    // Generate unique ID if not provided
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`
    
    // Size-based responsive classes
    const sizeClasses = {
      sm: cn(
        'h-[35px] px-[12px] py-[8px]',
        'text-xs lg:text-sm 3xl:text-[13px]'
      ),
      md: cn(
        'h-[45px] px-[16px] py-[12px]',
        'text-sm lg:text-base 3xl:text-[16px]'
      ),
      lg: cn(
        'h-[58px] px-[20px] py-[16px]',
        'text-sm lg:text-lg 3xl:text-[18px]'
      ),
    }
    
    // State-based styles
    const stateStyles = error 
      ? { 
          borderColor: designTokens.colors.error,
          backgroundColor: '#FEF2F2' // Light red background
        }
      : success
      ? {
          borderColor: designTokens.colors.success,
          backgroundColor: '#F0FDF4' // Light green background
        }
      : {
          borderColor: designTokens.colors.primary,
          backgroundColor: designTokens.colors.background
        }

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={selectId}
            className={cn(
              'block font-onest font-semibold mb-[8px]',
              'text-sm lg:text-base 3xl:text-[14px]',
              'uppercase tracking-wide'
            )}
            style={{ color: designTokens.colors.primary }}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              // Base styles
              'w-full border rounded-[8px] font-onest',
              'transition-all duration-200 appearance-none',
              'focus:outline-none focus:ring-2 focus:ring-opacity-50',
              
              // Size-specific responsive classes
              sizeClasses[size],
              
              // Focus states
              'focus:ring-blue-500 focus:border-transparent',
              
              // Disabled state
              'disabled:cursor-not-allowed disabled:opacity-50',
              
              // Error/success state classes
              error && 'focus:ring-red-500',
              success && 'focus:ring-green-500',
              
              // Custom styling to hide default arrow
              'bg-no-repeat bg-right pr-[40px]',
              
              className
            )}
            style={{
              ...stateStyles,
              borderWidth: '1px',
              // Custom chevron icon as background
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 12px center',
              backgroundSize: '16px 16px'
            }}
            ref={ref}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
            
            {children}
          </select>
          
          {/* Custom chevron icon overlay (alternative approach) */}
          <div className="absolute inset-y-0 right-[12px] flex items-center pointer-events-none">
            <svg 
              className="w-[16px] h-[16px] text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>
        
        {helperText && (
          <p 
            className={cn(
              'mt-[4px] font-onest',
              'text-xs lg:text-sm 3xl:text-[12px]',
              error ? 'text-red-600' : success ? 'text-green-600' : 'text-gray-500'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = "Select"

export { Select }