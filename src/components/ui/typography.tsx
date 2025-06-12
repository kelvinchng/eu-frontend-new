import React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 
      className={cn(
        "font-thunder text-7xl md:text-8xl lg:text-9xl leading-tight tracking-wide uppercase",
        className
      )}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 
      className={cn(
        "font-thunder text-4xl md:text-5xl lg:text-7xl leading-tight tracking-wide uppercase",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 
      className={cn(
        "font-thunder text-xl md:text-3xl lg:text-5xl leading-tight tracking-wide uppercase",
        className
      )}
    >
      {children}
    </h3>
  )
}

export function Body({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn(
        "font-onest text-base md:text-lg lg:text-xl leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  )
}

export function Small({ children, className }: TypographyProps) {
  return (
    <p 
      className={cn(
        "font-onest text-xs md:text-sm lg:text-base leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  )
}

export function Label({ children, className }: TypographyProps) {
  return (
    <span 
      className={cn(
        "font-ppformula text-lg md:text-xl leading-loose",
        className
      )}
    >
      {children}
    </span>
  )
}