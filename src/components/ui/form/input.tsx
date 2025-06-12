'use client'

import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input size variant - affects height and padding
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
   * Helper text to display below input
   */
  helperText?: string
  /**
   * Label for the input
   */
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    size = 'md',
    error = false,
    success = false,
    helperText,
    label,
    id,
    ...props 
  }, ref) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    
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
            htmlFor={inputId}
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
        
        <input
          type={type}
          id={inputId}
          className={cn(
            // Base styles
            'w-full border rounded-[8px] font-onest',
            'transition-all duration-200',
            'placeholder:text-gray-400',
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
            
            className
          )}
          style={{
            ...stateStyles,
            borderWidth: '1px'
          }}
          ref={ref}
          {...props}
        />
        
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

Input.displayName = "Input"

export { Input }