'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ComponentSectionProps {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export function ComponentSection({
  title,
  description,
  children,
  className
}: ComponentSectionProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div>
        <h1 className="text-4xl font-thunder text-primary mb-4">{title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
      
      <div>
        {children}
      </div>
    </div>
  )
}