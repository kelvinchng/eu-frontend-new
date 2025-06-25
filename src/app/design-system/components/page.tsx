'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TourCardBadge } from '@/components/ui/tour-card-badge'
import { TourTagBadge } from '@/components/ui/tour-tag-badge'
import { ComponentPreview } from '../components/component-preview'

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-gray-900">
          Base Components
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-gray-600 max-w-3xl">
          Core UI building blocks from <code>/src/components/ui/</code> that form the foundation of the EU Holidays platform. 
          These components ensure consistency, accessibility, and maintainability across all 80+ components in the system.
        </p>
      </div>

      {/* Typography System */}
      <div className="space-y-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-gray-900">Typography System</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">File: /src/components/ui/typography.tsx</h4>
                <p className="text-sm text-blue-800">
                  <strong>Components:</strong> H1, H2, H3, Body, Small, Label<br/>
                  <strong>Props:</strong> children, className<br/>
                  <strong>Fonts:</strong> Thunder-LC (headings), Onest (body text)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Headline Components</h4>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">H1 Component</div>
                    <div className="text-2xl font-semibold">H2 Component</div>
                    <div className="text-xl font-semibold">H3 Component</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Text Components</h4>
                  <div className="space-y-2">
                    <div className="text-base">Body Component - Main content text</div>
                    <div className="text-sm">Small Component - Secondary text</div>
                    <div className="text-xs font-medium uppercase tracking-wide">Label Component</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Button Component */}
      <div className="space-y-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-gray-900">Button System</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h4 className="text-sm font-semibold text-green-900 mb-2">File: /src/components/ui/button.tsx</h4>
                <p className="text-sm text-green-800">
                  <strong>Interface:</strong> ButtonProps extends HTMLButtonAttributes<br/>
                  <strong>Variants:</strong> primary, secondary, outline, ghost<br/>
                  <strong>Sizes:</strong> default, sm, lg, icon<br/>
                  <strong>Dependencies:</strong> class-variance-authority for variant management
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Primary</h4>
                  <Button className="w-full">Book Now</Button>
                  <code className="text-xs bg-gray-100 p-1 rounded">variant="primary"</code>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Secondary</h4>
                  <Button variant="secondary" className="w-full">Learn More</Button>
                  <code className="text-xs bg-gray-100 p-1 rounded">variant="secondary"</code>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Outline</h4>
                  <Button variant="outline" className="w-full">View Details</Button>
                  <code className="text-xs bg-gray-100 p-1 rounded">variant="outline"</code>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700">Text Button</h4>
                  <Button variant="outline" className="w-full border-0 hover:bg-gray-100">Cancel</Button>
                  <code className="text-xs bg-gray-100 p-1 rounded">variant="outline" + border-0</code>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Size Variants</h4>
                <div className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🔍</Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Usage Examples</h4>
                <div className="bg-gray-50 rounded-lg p-4 text-sm">
                  <div className="space-y-1">
                    <div><strong>CTAs:</strong> Primary buttons for main actions (Book Now, Search)</div>
                    <div><strong>Secondary:</strong> Alternative actions (Learn More, View Details)</div>
                    <div><strong>Outline:</strong> Less prominent actions within content</div>
                    <div><strong>Text:</strong> Minimal actions (Cancel, Close, Menu items)</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Badge Component */}
      <div className="space-y-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-gray-900">Badge System</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">File: /src/components/ui/badge.tsx</h4>
                <p className="text-sm text-purple-800">
                  <strong>Interface:</strong> BadgeProps extends HTMLAttributes&lt;HTMLDivElement&gt;<br/>
                  <strong>Variants:</strong> default, secondary, outline, destructive<br/>
                  <strong>Usage:</strong> Tour tags, status indicators, promotional labels
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Standard Variants</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex flex-col items-center gap-2">
                    <Badge>Best Seller</Badge>
                    <code className="text-xs bg-gray-100 p-1 rounded">default</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Badge variant="secondary">New</Badge>
                    <code className="text-xs bg-gray-100 p-1 rounded">secondary</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Badge variant="outline">Featured</Badge>
                    <code className="text-xs bg-gray-100 p-1 rounded">outline</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Badge variant="destructive">Limited</Badge>
                    <code className="text-xs bg-gray-100 p-1 rounded">destructive</code>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Travel-Specific Custom Badges</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <Badge className="bg-blue-100 text-blue-800">Family Friendly</Badge>
                  <Badge className="bg-green-100 text-green-800">Eco Tour</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
                  <Badge className="bg-orange-100 text-orange-800">Adventure</Badge>
                  <Badge className="bg-red-100 text-red-800">Romantic</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Cultural</Badge>
                </div>
                <p className="text-sm text-gray-600">Custom styling used in TourCard and ThemeCard components</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Specialized: TourCardBadge Component</h4>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <h5 className="text-sm font-semibold text-green-900 mb-2">File: /src/components/ui/tour-card-badge.tsx</h5>
                  <p className="text-sm text-green-800">
                    <strong>Purpose:</strong> Responsive overlay badge specifically designed for TourCard components<br/>
                    <strong>Responsive:</strong> Scales from 1920px Figma baseline with proper dimensions and fonts<br/>
                    <strong>Positioning:</strong> Absolute positioned at top-right with rounded bottom-left corner<br/>
                    <strong>Usage:</strong> Promotional labels on tour cards (Best Seller, Limited Time, etc.)
                  </p>
                </div>
                
                <div className="relative">
                  <div className="bg-gray-200 rounded-lg h-40 w-80 mx-auto relative overflow-hidden">
                    <div className="absolute inset-2 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500">
                      Tour Card Preview Area
                    </div>
                    <TourCardBadge>Best Seller</TourCardBadge>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    TourCardBadge positioned on a mock card container
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700">Responsive Scaling</h5>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs">
                      <div><strong>SM (640px):</strong> 53×14px, 6px font</div>
                      <div><strong>MD (768px):</strong> 107×28px, 12px font</div>
                      <div><strong>LG (1024px):</strong> 129×34px, 14px font</div>
                      <div><strong>XL (1280px):</strong> 150×40px, 17px font</div>
                      <div><strong>2XL (1920px):</strong> 161×42px, 18px font</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700">Design Features</h5>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs">
                      <div><strong>Position:</strong> Absolute top-right</div>
                      <div><strong>Corner:</strong> Rounded bottom-left only</div>
                      <div><strong>Z-index:</strong> Layer above card image</div>
                      <div><strong>Font:</strong> Onest, white text</div>
                      <div><strong>Background:</strong> Primary color (#242424)</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700">Common Usage</h5>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs">
                      <div>• "Best Seller"</div>
                      <div>• "Limited Time"</div>
                      <div>• "New"</div>
                      <div>• "Featured"</div>
                      <div>• "Popular"</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Specialized: TourTagBadge Component</h4>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <h5 className="text-sm font-semibold text-blue-900 mb-2">File: /src/components/ui/tour-tag-badge.tsx</h5>
                  <p className="text-sm text-blue-800">
                    <strong>Purpose:</strong> Inline bordered badge with icon for tour card tags<br/>
                    <strong>Responsive:</strong> Scales from 1920px Figma baseline with proper dimensions and fonts<br/>
                    <strong>Features:</strong> Border, icon support, horizontal layout with gap<br/>
                    <strong>Usage:</strong> Tag labels in tour cards (Best Seller, Family Friendly, etc.)
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-4 bg-gray-50 rounded-lg p-6">
                  <TourTagBadge>Best Seller</TourTagBadge>
                  <TourTagBadge>Family Friendly</TourTagBadge>
                  <TourTagBadge>Adventure</TourTagBadge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700">Responsive Scaling</h5>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs">
                      <div><strong>SM (640px):</strong> h-13px, 7px font, 5px padding</div>
                      <div><strong>MD (768px):</strong> h-25px, 14px font, 11px padding</div>
                      <div><strong>LG (1024px):</strong> h-30px, 17px font, 13px padding</div>
                      <div><strong>XL (1280px):</strong> h-36px, 20px font, 15px padding</div>
                      <div><strong>2XL (1920px):</strong> h-38px, 21px font, 16px padding</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700">Design Features</h5>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs">
                      <div><strong>Border:</strong> Light gray (#E8E8E8)</div>
                      <div><strong>Icon:</strong> Shopping bag SVG (default)</div>
                      <div><strong>Layout:</strong> Horizontal with responsive gap</div>
                      <div><strong>Font:</strong> Onest, primary color</div>
                      <div><strong>Corner:</strong> Rounded responsive radius</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700">Props & Usage</h5>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs">
                      <div><strong>children:</strong> Badge text content</div>
                      <div><strong>icon:</strong> Custom icon (optional)</div>
                      <div><strong>className:</strong> Additional styling</div>
                      <div><strong>Default:</strong> Includes shopping bag icon</div>
                      <div><strong>Flexible:</strong> Accepts any React node</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-gray-700">Code Example</h5>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono">
                    <div className="text-gray-400">// Basic usage</div>
                    <div>&lt;TourTagBadge&gt;Best Seller&lt;/TourTagBadge&gt;</div>
                    <br/>
                    <div className="text-gray-400">// With custom icon</div>
                    <div>&lt;TourTagBadge icon=&lt;HeartIcon /&gt;&gt;Romantic&lt;/TourTagBadge&gt;</div>
                    <br/>
                    <div className="text-gray-400">// With custom styling</div>
                    <div>&lt;TourTagBadge className="border-blue-300"&gt;Special&lt;/TourTagBadge&gt;</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Badge Usage Patterns</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <div><strong>TourCardBadge:</strong> Overlay labels on tour cards (responsive, positioned, top-right)</div>
                  <div><strong>TourTagBadge:</strong> Inline bordered tags with icons (responsive, within card content)</div>
                  <div><strong>Standard Badge:</strong> Category tags, promotional labels (simple inline)</div>
                  <div><strong>Hero Overlays:</strong> "Best Seller", "New", "Limited Time"</div>
                  <div><strong>Status Indicators:</strong> Booking status, availability</div>
                  <div><strong>Filter Tags:</strong> Active filter indicators</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Card Component */}
      <div className="space-y-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-gray-900">Card Foundation System</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h4 className="text-sm font-semibold text-orange-900 mb-2">File: /src/components/ui/card.tsx</h4>
                <p className="text-sm text-orange-800">
                  <strong>Components:</strong> Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter<br/>
                  <strong>Pattern:</strong> Compound component composition<br/>
                  <strong>Props:</strong> Standard HTML div attributes with forwarded refs<br/>
                  <strong>Foundation for:</strong> TourCard, DestinationCard, ThemeCard, AdventureCard
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Compound Component Structure</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="space-y-2 text-sm">
                        <code className="block">&lt;Card&gt;</code>
                        <code className="block ml-4">&lt;CardHeader&gt;</code>
                        <code className="block ml-8">&lt;CardTitle&gt;Title&lt;/CardTitle&gt;</code>
                        <code className="block ml-8">&lt;CardDescription&gt;Desc&lt;/CardDescription&gt;</code>
                        <code className="block ml-4">&lt;/CardHeader&gt;</code>
                        <code className="block ml-4">&lt;CardContent&gt;Content&lt;/CardContent&gt;</code>
                        <code className="block ml-4">&lt;CardFooter&gt;Footer&lt;/CardFooter&gt;</code>
                        <code className="block">&lt;/Card&gt;</code>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">Live Example</h3>
                          <Badge>Foundation</Badge>
                        </div>
                        <p className="text-gray-600">
                          This card uses the compound pattern. Specialized cards like TourCard 
                          extend this foundation with custom layouts and business logic.
                        </p>
                        <Button size="sm" className="w-full">Explore Specialized Cards</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Specialized Card Variants</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <div><strong>TourCard (460×643px):</strong> Tour packages with pricing, images, badges</div>
                  <div><strong>DestinationCard (364×519px):</strong> Country exploration with gradients</div>
                  <div><strong>ThemeCard (344×499px):</strong> Themed journeys with background images</div>
                  <div><strong>AdventureCard (344×606px):</strong> Adventure categories with icons</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-gray-900">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-green-700 mb-3">Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Use primary buttons for main actions (booking, purchasing)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Keep badge text short and descriptive
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Use cards to group related information
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Maintain consistent spacing and alignment
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-red-700 mb-3">Avoid</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Using destructive buttons for regular actions
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Overusing badges - they lose impact
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Nesting cards more than 2 levels deep
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Mixing different button styles without purpose
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}