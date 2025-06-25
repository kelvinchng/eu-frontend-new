import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-onest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-gray-900',
        secondary: 'bg-gray-200 text-primary border border-primary hover:bg-gray-300',
        outline: 'bg-transparent text-primary border border-primary hover:bg-gray-50',
      },
      size: {
        default: 'px-8 py-2 rounded-md text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl',
        sm: 'px-4 py-1.5 rounded-sm text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg',
        lg: 'px-10 py-3 rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl',
        icon: 'h-9 w-9 rounded-md text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }