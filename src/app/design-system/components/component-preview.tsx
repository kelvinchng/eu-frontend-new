'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PropDefinition {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

interface ComponentPreviewProps {
  title: string
  description: string
  code: string
  children: React.ReactNode
  props?: PropDefinition[]
  className?: string
}

export function ComponentPreview({
  title,
  description,
  code,
  children,
  props = [],
  className
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)
  const [showProps, setShowProps] = useState(false)

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-thunder text-primary">{title}</CardTitle>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
          <div className="flex gap-2">
            {props.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowProps(!showProps)}
              >
                Props
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? 'Hide Code' : 'Show Code'}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Component Preview */}
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-200">
          <div className="flex items-center justify-center min-h-[100px]">
            {children}
          </div>
        </div>

        {/* Props Table */}
        {showProps && props.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Props</h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Default</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {props.map((prop) => (
                    <tr key={prop.name} className="hover:bg-gray-50">
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">{prop.name}</code>
                          {prop.required && (
                            <Badge variant="destructive" className="text-xs">required</Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <code className="text-sm font-mono text-gray-600">{prop.type}</code>
                      </td>
                      <td className="px-4 py-2">
                        <code className="text-sm font-mono text-gray-500">
                          {prop.default || '-'}
                        </code>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-600">
                        {prop.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Code Block */}
        {showCode && (
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Code Example</h4>
            <div className="relative">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{code}</code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2 bg-gray-800 text-gray-100 hover:bg-gray-700"
                onClick={() => {
                  navigator.clipboard.writeText(code)
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}