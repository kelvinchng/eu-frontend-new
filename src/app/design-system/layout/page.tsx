'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/common/layout/container'
import { Grid, TourGrid, CountryGrid, TestimonialGrid, AlbumGrid } from '@/components/common/layout/grid'
import { TourCard } from '@/components/ui/cards/tour-card'
import { DestinationCard } from '@/components/ui/cards/destination-card'
import { Footer } from '@/components/common/footer'
import { FeaturedToursSection } from '@/components/common/featured-tours'
import { ExploreDestinationsSection } from '@/components/common/explore-destinations'
import { ThemedJourneysSection } from '@/components/common/themed-journeys'
import { YourNextAdventure } from '@/components/common/your-next-adventure'
import { InstagramSection } from '@/components/common/instagram-section'
import { FooterBanner } from '@/components/common/footer-banner'
import { PhotoGalleryGrid, PhotoModal } from '@/components/ui/layout/photo-gallery-grid'
import { FilterHeader } from '@/components/ui/layout/filter-header'
import { LoadMoreButton } from '@/components/ui/layout/load-more-button'
import { BannerComponent } from '@/components/ui/layout/banner-component'

export default function LayoutPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Layout System Components
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl">
          Production layout components extracted from the actual EU Holidays project. These components provide 
          structural foundation including containers, grids, sections, heroes, and complete page layouts.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-sm text-blue-800">
            <strong>Source Files:</strong> All components extracted from <code>/src/components/common/layout/</code>, 
            <code>/src/components/common/</code>, and <code>/src/app/components/</code> directories.
          </p>
        </div>
      </div>

      {/* Container & Section System */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">1. Container & Section System</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">File: /src/components/common/layout/container.tsx</h4>
                <p className="text-sm text-blue-800">
                  <strong>Components:</strong> Container (polymorphic), Section (with title/action)<br/>
                  <strong>Features:</strong> Responsive padding, max-width 1480px, Thunder font headings<br/>
                  <strong>Padding:</strong> px-[35px] md:px-8 lg:px-16 (mobile to desktop)<br/>
                  <strong>Section spacing:</strong> py-8 md:py-12 lg:py-16 (vertical rhythm)
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Container Component</h4>
                <div className="bg-gray-50 border-2 border-dashed border-blue-300 rounded-lg">
                  <Container className="py-8">
                    <div className="bg-white rounded-lg p-6 border">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Container Example</h3>
                      <p className="text-gray-600">This content is wrapped in the actual Container component with responsive padding and max-width constraints.</p>
                    </div>
                  </Container>
                </div>
                
                <h4 className="text-sm font-semibold text-gray-700 mt-6">Live Section Component</h4>
                <div className="bg-gray-50 border-2 border-dashed border-green-300 rounded-lg">
                  <Section 
                    title="Section Title" 
                    action={<Button size="sm">View All</Button>}
                    className="py-6"
                  >
                    <div className="bg-white rounded-lg p-6 border">
                      <p className="text-gray-600">This demonstrates the Section component with Thunder font title and action button integration.</p>
                    </div>
                  </Section>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grid System */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">2. Grid System Components</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h4 className="text-sm font-semibold text-green-900 mb-2">File: /src/components/common/layout/grid.tsx</h4>
                <p className="text-sm text-green-800">
                  <strong>Components:</strong> Grid (base), TourGrid, CountryGrid, TestimonialGrid, AlbumGrid<br/>
                  <strong>Variants:</strong> tours (3-col), countries (4-col), testimonials (2-col), albums (masonry)<br/>
                  <strong>Features:</strong> Figma-based gaps, responsive columns, custom overrides<br/>
                  <strong>Usage:</strong> Card layouts, content organization, responsive grids
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">TourGrid (3-column responsive)</h4>
                  <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg p-4">
                    <TourGrid>
                      <div className="bg-blue-100 rounded-lg p-6 text-center">
                        <div className="text-sm font-medium text-blue-900">Tour Card 1</div>
                        <div className="text-xs text-blue-700 mt-1">460px × 643px</div>
                      </div>
                      <div className="bg-blue-200 rounded-lg p-6 text-center">
                        <div className="text-sm font-medium text-blue-900">Tour Card 2</div>
                        <div className="text-xs text-blue-700 mt-1">Responsive layout</div>
                      </div>
                      <div className="bg-blue-300 rounded-lg p-6 text-center">
                        <div className="text-sm font-medium text-blue-900">Tour Card 3</div>
                        <div className="text-xs text-blue-700 mt-1">Figma gaps</div>
                      </div>
                    </TourGrid>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">CountryGrid (4-column with Figma gaps)</h4>
                  <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-lg p-4">
                    <CountryGrid>
                      <div className="bg-green-100 rounded-lg p-4 text-center text-sm">Switzerland</div>
                      <div className="bg-green-100 rounded-lg p-4 text-center text-sm">France</div>
                      <div className="bg-green-100 rounded-lg p-4 text-center text-sm">Italy</div>
                      <div className="bg-green-100 rounded-lg p-4 text-center text-sm">Germany</div>
                    </CountryGrid>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">TestimonialGrid (2-column)</h4>
                  <div className="bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg p-4">
                    <TestimonialGrid>
                      <div className="bg-purple-100 rounded-lg p-4 text-center text-sm">Testimonial 1</div>
                      <div className="bg-purple-100 rounded-lg p-4 text-center text-sm">Testimonial 2</div>
                    </TestimonialGrid>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Homepage Section Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">3. Homepage Section Components</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">Files: /src/components/common/</h4>
                <p className="text-sm text-purple-800">
                  <strong>Components:</strong> FeaturedToursSection, ExploreDestinationsSection, ThemedJourneysSection, YourNextAdventure<br/>
                  <strong>Features:</strong> Section containers, carousel integration, responsive cards<br/>
                  <strong>Data:</strong> Mock data with real card components, Embla carousel<br/>
                  <strong>Layout:</strong> Uses Container/Section pattern with specialized layouts
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Featured Tours Section (Live Component)</h4>
                <div className="bg-gray-100 border-2 border-dashed border-purple-300 rounded-lg overflow-hidden">
                  <div className="transform scale-90 origin-top">
                    <FeaturedToursSection />
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 90% - actual component with carousel functionality</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Explore Destinations Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">4. Explore Destinations Section</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
                <h4 className="text-sm font-semibold text-teal-900 mb-2">File: /src/components/common/explore-destinations.tsx</h4>
                <p className="text-sm text-teal-800">
                  <strong>Features:</strong> Country grid layout, DestinationCard components<br/>
                  <strong>Grid:</strong> Uses CountryGrid for 4-column responsive layout<br/>
                  <strong>Cards:</strong> Actual DestinationCard with image overlays and links<br/>
                  <strong>Navigation:</strong> "View More Countries" integration
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Explore Destinations Section</h4>
                <div className="bg-gray-100 border-2 border-dashed border-teal-300 rounded-lg overflow-hidden">
                  <div className="transform scale-90 origin-top">
                    <ExploreDestinationsSection />
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 90% - shows actual DestinationCard components in CountryGrid</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">5. Footer Components</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-gray-50 border-l-4 border-gray-500 p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Files: /src/components/common/footer/ & footer-banner.tsx</h4>
                <p className="text-sm text-gray-800">
                  <strong>Footer:</strong> Multi-column layout with Links, Explore, Policies, Find Us sections<br/>
                  <strong>FooterBanner:</strong> Newsletter signup section with background image (1080px height)<br/>
                  <strong>Styling:</strong> Dark theme (#242424), precise absolute positioning<br/>
                  <strong>Typography:</strong> Thunder headings, Onest body text
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Footer Component (Scaled)</h4>
                <div className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg overflow-hidden">
                  <div className="transform scale-75 origin-top">
                    <Footer />
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 75% - actual Footer component with all sections</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instagram Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">6. Instagram Section</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
                <h4 className="text-sm font-semibold text-pink-900 mb-2">File: /src/components/common/instagram-section.tsx</h4>
                <p className="text-sm text-pink-800">
                  <strong>Features:</strong> Profile stats display, Instagram post grid layout, social media integration<br/>
                  <strong>Layout:</strong> Profile section with follower stats + responsive grid of Instagram posts<br/>
                  <strong>Styling:</strong> Mock Instagram feed with engagement metrics and post previews<br/>
                  <strong>Integration:</strong> Social media branding and call-to-action elements
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Instagram Section</h4>
                <div className="bg-gray-100 border-2 border-dashed border-pink-300 rounded-lg overflow-hidden">
                  <div className="transform scale-90 origin-top">
                    <InstagramSection />
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 90% - actual Instagram section with profile stats and post grid</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Themed Journeys Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">7. Themed Journeys Section</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h4 className="text-sm font-semibold text-orange-900 mb-2">File: /src/components/common/themed-journeys.tsx</h4>
                <p className="text-sm text-orange-800">
                  <strong>Features:</strong> ThemeCard grid layout, specialized journey categories<br/>
                  <strong>Cards:</strong> Uses ThemeCard components with image overlays and journey themes<br/>
                  <strong>Layout:</strong> Responsive grid showcasing different travel themes and experiences<br/>
                  <strong>Integration:</strong> Links to themed journey categories and booking flows
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Themed Journeys Section</h4>
                <div className="bg-gray-100 border-2 border-dashed border-orange-300 rounded-lg overflow-hidden">
                  <div className="transform scale-90 origin-top">
                    <ThemedJourneysSection />
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 90% - actual themed journeys with ThemeCard components</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Your Next Adventure Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">8. Your Next Adventure Section</h2>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                <h4 className="text-sm font-semibold text-indigo-900 mb-2">File: /src/components/common/your-next-adventure.tsx</h4>
                <p className="text-sm text-indigo-800">
                  <strong>Features:</strong> Adventure card grid, call-to-action section<br/>
                  <strong>Cards:</strong> Uses AdventureCard components for different adventure types<br/>
                  <strong>Layout:</strong> Showcases various adventure categories and experiences<br/>
                  <strong>Purpose:</strong> Encourages exploration of different adventure travel options
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-700">Live Your Next Adventure Section</h4>
                <div className="bg-gray-100 border-2 border-dashed border-indigo-300 rounded-lg overflow-hidden">
                  <div className="transform scale-90 origin-top">
                    <YourNextAdventure />
                  </div>
                </div>
                <p className="text-xs text-gray-500">* Scaled to 90% - actual adventure section with AdventureCard components</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Layout Architecture Summary */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">9. Architecture Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Container System</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Container:</strong> Polymorphic wrapper with responsive padding</li>
                <li><strong>Section:</strong> Vertical rhythm with Thunder titles</li>
                <li><strong>Max-width:</strong> 1480px for content constraint</li>
                <li><strong>Padding:</strong> Mobile 35px → Desktop 16px (responsive)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Grid Variants</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>TourGrid:</strong> 1→2→3 columns with Figma gaps</li>
                <li><strong>CountryGrid:</strong> 2→4 columns, 5.47vw gaps</li>
                <li><strong>TestimonialGrid:</strong> 1→2 columns for reviews</li>
                <li><strong>AlbumGrid:</strong> Masonry layout for galleries</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Page Sections</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Homepage:</strong> 4 main content sections</li>
                <li><strong>Footer:</strong> Multi-column with social media</li>
                <li><strong>Specialized:</strong> Instagram, Themed Journeys, Adventure</li>
                <li><strong>Cards:</strong> TourCard, DestinationCard, ThemeCard</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New Phase 2 Layout Components */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">New Phase 2 Layout Components</h2>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="text-sm text-green-800">
            <strong>Recently Implemented:</strong> These are the newly created Phase 2 layout components with advanced functionality.
          </p>
        </div>

        {/* Banner Component */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">BannerComponent</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/layout/banner-component.tsx<br/>
                <strong>Purpose:</strong> Versatile banner for heroes, page headers, promotions<br/>
                <strong>Features:</strong> Background images, overlay, breadcrumbs, actions, multiple variants<br/>
                <strong>Variants:</strong> hero, page-header, promotional, announcement, category
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Page Header Banner</h4>
                <BannerComponent
                  title="Explore Switzerland"
                  subtitle="Alpine Adventures & Scenic Railways"
                  description="Discover the breathtaking beauty of Switzerland with our carefully curated tours featuring majestic mountains, pristine lakes, and charming villages."
                  backgroundImage="/assets/country/switzerland-hero.jpg"
                  variant="page-header"
                  height="md"
                  breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Destinations', href: '/destinations' },
                    { label: 'Switzerland' }
                  ]}
                  actions={[
                    { label: 'View Tours', href: '/tours/switzerland', variant: 'primary' },
                    { label: 'Learn More', href: '/about-switzerland', variant: 'outline' }
                  ]}
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Promotional Banner</h4>
                <BannerComponent
                  title="Early Bird Special"
                  subtitle="Save up to 30% on 2025 European Tours"
                  description="Book your dream European vacation now and enjoy exclusive early bird discounts on our most popular destinations."
                  backgroundColor="#0066CC"
                  variant="promotional"
                  height="sm"
                  alignment="center"
                  badge="Limited Time"
                  actions={[
                    { label: 'Book Now', href: '/book', variant: 'secondary' },
                    { label: 'View Deals', href: '/deals', variant: 'outline' }
                  ]}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Photo Gallery Grid */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">PhotoGalleryGrid Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/layout/photo-gallery-grid.tsx<br/>
                <strong>Purpose:</strong> Responsive photo gallery with multiple layout options<br/>
                <strong>Features:</strong> Masonry/uniform/featured layouts, image lazy loading, modal preview<br/>
                <strong>Variants:</strong> masonry, uniform, featured | Columns: 2, 3, 4, 5
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Featured Layout (3 columns)</h4>
                <PhotoGalleryGrid
                  photos={[
                    {
                      id: '1',
                      src: '/assets/gallery/interlaken-lake-thun-bernese-alps.jpg',
                      alt: 'Interlaken Lake Thun',
                      title: 'Lake Thun, Interlaken',
                      location: 'Bernese Alps, Switzerland',
                      category: 'Landscape'
                    },
                    {
                      id: '2',
                      src: '/assets/gallery/bern-fountain-clock-tower.jpg',
                      alt: 'Bern Clock Tower',
                      title: 'Historic Clock Tower',
                      location: 'Bern, Switzerland',
                      category: 'Architecture'
                    },
                    {
                      id: '3',
                      src: '/assets/gallery/gornergrat-railway-switzerland.jpg',
                      alt: 'Gornergrat Railway',
                      title: 'Gornergrat Railway',
                      location: 'Zermatt, Switzerland',
                      category: 'Transportation'
                    },
                    {
                      id: '4',
                      src: '/assets/tour-details/tour-album-1.jpg',
                      alt: 'Swiss Alps',
                      title: 'Alpine Scenery',
                      location: 'Swiss Alps',
                      category: 'Nature'
                    },
                    {
                      id: '5',
                      src: '/assets/tour-details/tour-album-2.jpg',
                      alt: 'Mountain Village',
                      title: 'Traditional Village',
                      location: 'Swiss Alps',
                      category: 'Culture'
                    }
                  ]}
                  variant="featured"
                  columns={3}
                  onPhotoClick={(photo, index) => console.log('Photo clicked:', photo, index)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Header */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">FilterHeader Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/layout/filter-header.tsx<br/>
                <strong>Purpose:</strong> Mobile-optimized filter and sort header for listings<br/>
                <strong>Features:</strong> Results count, sort dropdown, expandable filters, active filter count<br/>
                <strong>Usage:</strong> Tour listings, destination pages, search results
              </p>
            </div>
            
            <FilterHeader
              totalResults={127}
              resultsLabel="tours found"
              sortOptions={[
                { id: 'popularity', label: 'Most Popular', value: 'popularity' },
                { id: 'price-low', label: 'Price: Low to High', value: 'price_asc' },
                { id: 'price-high', label: 'Price: High to Low', value: 'price_desc' },
                { id: 'duration', label: 'Duration', value: 'duration' },
                { id: 'rating', label: 'Highest Rated', value: 'rating' }
              ]}
              filterSections={[
                {
                  id: 'destination',
                  title: 'Destination',
                  type: 'select',
                  options: [
                    { id: 'switzerland', label: 'Switzerland', value: 'switzerland', count: 45 },
                    { id: 'france', label: 'France', value: 'france', count: 32 },
                    { id: 'italy', label: 'Italy', value: 'italy', count: 28 },
                    { id: 'germany', label: 'Germany', value: 'germany', count: 22 }
                  ]
                },
                {
                  id: 'duration',
                  title: 'Duration',
                  type: 'multiselect',
                  options: [
                    { id: '3-5', label: '3-5 days', value: '3-5', count: 18 },
                    { id: '6-10', label: '6-10 days', value: '6-10', count: 67 },
                    { id: '11-14', label: '11-14 days', value: '11-14', count: 32 },
                    { id: '15+', label: '15+ days', value: '15+', count: 10 }
                  ]
                },
                {
                  id: 'price',
                  title: 'Price Range',
                  type: 'range',
                  min: 500,
                  max: 5000,
                  unit: '$'
                }
              ]}
              onSortChange={(sort) => console.log('Sort changed:', sort)}
              onFilterChange={(filters) => console.log('Filters changed:', filters)}
            />
          </CardContent>
        </Card>

        {/* Load More Button */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">LoadMoreButton Component</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>File:</strong> /src/components/ui/layout/load-more-button.tsx<br/>
                <strong>Purpose:</strong> Progressive loading with progress tracking and infinite scroll<br/>
                <strong>Features:</strong> Loading states, progress bar, no more items state, infinite scroll hook<br/>
                <strong>Variants:</strong> default, outline, minimal | Sizes: sm, md, lg
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Default with Progress</h4>
                <LoadMoreButton
                  onLoadMore={async () => {
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    console.log('More items loaded')
                  }}
                  hasMore={true}
                  showProgress={true}
                  currentCount={24}
                  totalCount={127}
                  buttonText="Load More Tours"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">Outline Variant</h4>
                <LoadMoreButton
                  onLoadMore={async () => {
                    await new Promise(resolve => setTimeout(resolve, 800))
                  }}
                  variant="outline"
                  size="sm"
                  buttonText="Show More"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-4">No More Items State</h4>
                <LoadMoreButton
                  onLoadMore={() => {}}
                  hasMore={false}
                  noMoreText="You've seen all available tours"
                  currentCount={127}
                  totalCount={127}
                  showProgress={true}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}