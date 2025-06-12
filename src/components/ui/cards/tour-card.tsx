'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { designTokens } from '@/lib/design-tokens'

interface TourCardProps {
  id: string
  title: string
  price: string
  description: string
  image: string
  tags?: string[]
  badge?: string
  href?: string
  className?: string
}

export function TourCard({
  id,
  title,
  price,
  description,
  image,
  tags = [],
  badge,
  href = `/tours/${id}`,
  className
}: TourCardProps) {
  return (
    <Card className={cn(
      "relative w-[460px] h-[643px] overflow-hidden rounded-[9px]",
      className
    )}
    style={{ boxShadow: designTokens.shadows.card }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Image - positioned at top */}
      <div className="relative w-full h-[279.48px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="460px"
          priority
        />
        {badge && (
          <div className={cn(
            "absolute top-0 right-0",
            "w-[160.91px] h-[42.4px]",
            "flex items-center justify-center",
            "rounded-bl-[9px]",
            "z-[1]"
          )}
          style={{ backgroundColor: designTokens.colors.primary }}
          >
            <span className="text-white font-onest text-[18px]">
              {badge}
            </span>
          </div>
        )}
      </div>
      
      {/* Title */}
      <h3 className="absolute left-[34.81px] top-[303.78px] right-[35.74px] font-onest font-bold text-[20px] leading-[1.275]"
      style={{ color: designTokens.colors.primary }}>
        {title}
      </h3>
      
      {/* Price */}
      <p className="absolute left-[35.45px] top-[371.62px] font-onest font-medium text-[18px] leading-[1.275]"
      style={{ color: designTokens.colors.primary }}>
        {price}
      </p>
      
      {/* Description */}
      <p className="absolute left-[35.75px] top-[418.45px] right-[35.74px] font-onest text-[18px] leading-[1.275]"
      style={{ color: designTokens.colors.primary }}>
        {description}
      </p>
      
      {/* Bottom Section with Tag and View More */}
      <div className="absolute bottom-0 left-[35.31px] right-[35.31px] pb-[19.12px]">
        <div className="flex flex-col gap-[9.04px]">
          {/* Tag Container */}
          {tags[0] && (
            <div className={cn(
              "flex items-center",
              "border rounded-[7px] h-[38.05px] px-[16px]"
            )}
            style={{ borderColor: '#E8E8E8' }}
            >
              <div className="flex items-center gap-[15px]">
                {/* Bag Icon */}
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0"
                        transform="matrix(0.0108344 0 0 0.0111111 0.0124526 0)"
                      />
                    </pattern>
                    <image
                      id="image0"
                      width="90"
                      height="90"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqklEQVR4nO2dSYoUQRSGPxBErJW7VsEBdeUJFBucjiCu9AxO0LpTsNsrqH0B8Qza6kZc6K4HRUTQpZYLtXBA5ElAJiTS2U1lZ756Ufl/8FMQSUVUfEQOlUMkCCFE9pwCFoHXwAiwMTMqvnsfODnpzkTkELDUQOxmeQQcnHTnonAcGHYgucxn4Bg95wDwqUPJZYbFWtNbHjtILvOEnnLaUXKZXu4gF2tk/ASuADMN6twNXC3qWK/ue/SQNzUykuStcq2m7jV6yPcaGU1G8v/M1NT9jR5iNcml/mwwiZboqcI0oiV6qjCNaImeKkwjWqKzYhtwHngIvN/g/MMkU16RSeddzpIhs8BqAJE2Zp4BR8iEi8DvANKsYb4UAyU0afX7E0CWtSD7MEHZAXwMIMla3IyE5HIAOdZyzhCQFwHEWMtJ94eEYjvwN4AYaznp0C8U+wNIsQ6SrgKF4mgAKdZRQiHRTki0ExLthEQ7IdFOSLQTEu2ERDsh0U5ItBMS7YREOyHRTki0ExLthEQ7IdFOSLQTEu2ERDsh0U5ItBMS7YREOyHRTkh05qJ/AXPAng3aTsuud/iUQS9Ez43xG5JsiaaZhDSjzFbn6NCIpl3ReyUal03HDYlGO8O20OGdExLthEQ7IdFOSLQTEu2ERDsh0U5ItBP7Ovr7axPOV4IxrQ/drxGQ5wHEWMu5S0AuBRBjLSdNjx9yqp8PAeRYS3lKYGYznyHMcpi8quRC5rKHwAkyelvQcgBpNmaWcnwxTpoy8xzwAHgH/Aggcr2pfFaL14aE3PE1ZaXSydvALmC+UraSaVvhGFU6urMoG1TKRpm2FY6VSkfni1G2UClbzrStcNzZZJu5kGlb4RgAr2o6/rJYnmNbIRkAt4C3xU2M6fNmZTuaa1tCCEHL/AM17o7ez0bTNQAAAABJRU5ErkJggg=="
                    />
                  </defs>
                  <rect
                    y="0.0878906"
                    width="26"
                    height="25.3525"
                    fill="url(#pattern0)"
                  />
                </svg>
                <span className="font-onest text-[18px]" style={{ color: designTokens.colors.primary }}>
                  {tags[0]}
                </span>
              </div>
            </div>
          )}

          {/* View More Link - centered below tag */}
          <div className="flex justify-center">
            <Link 
              href={href}
              className="flex items-center gap-[12.31px] group"
            >
              <span className={cn(
                "font-onest text-[18px] underline group-hover:no-underline"
              )}
              style={{ color: designTokens.colors.primary }}
              >
                View More
              </span>
              {/* Down Arrow */}
              <svg width="9" height="5.32" viewBox="0 0 9 6" fill="none">
                <path d="M1 1L4.5 4.66L8 1" stroke="#242424" strokeWidth="1.5"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}