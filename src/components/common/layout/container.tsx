import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Container({ 
  children, 
  className,
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component 
      className={cn(
        "mx-auto w-full px-[35px] md:px-8 lg:px-16",
        "max-w-[1480px]",
        className
      )}
    >
      {children}
    </Component>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  action?: React.ReactNode
}

export function Section({ 
  children, 
  className,
  title,
  action
}: SectionProps) {
  return (
    <section className={cn("py-8 md:py-12 lg:py-16", className)}>
      <Container>
        {(title || action) && (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-8">
            {title && (
              <h2 className="font-thunder text-2xl md:text-5xl lg:text-7xl leading-tight uppercase">
                {title}
              </h2>
            )}
            {action}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}