# EU Holidays Design System Components Todo List

This document contains all unique components extracted from Figma designs that need to be implemented as part of our design system. Components are organized by category with their specifications.

## 🎯 CRITICAL: Responsive Design Implementation

### ALWAYS REMEMBER: Figma to Code Scaling
**Figma designs are created at 1920px width (3xl breakpoint)**. When implementing ANY component:

1. **Calculate percentages**: All Figma measurements MUST be converted using: `(figma_value / 1920) * 100`
2. **Use responsive utilities**: Import and use functions from `/src/lib/responsive-utils.ts`:
   - `figmaToResponsive()` - Convert Figma px to vw/rem/%
   - `getFigmaTextSize()` - Get responsive text classes
   - `getScaledValue()` - Calculate scaled px for any viewport
   - `figmaClamp()` - Create fluid typography with clamp()

3. **Breakpoint Scaling Factors**:
   - 3xl: 1920px (1x - Figma baseline)
   - 2xl: 1536px (0.8x)
   - xl: 1280px (0.667x)
   - lg: 1024px (0.533x)
   - md: 768px (0.4x)
   - sm: 640px (0.333x)
   - xs: 320px (0.167x)

4. **Typography Scaling**:
   - Use responsive text classes: `text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[figma-size]px`
   - NEVER use fixed pixel values without breakpoint variants
   - Ensure proper scaling from mobile to desktop

5. **Container Strategy**:
   - Side padding: `px-4 sm:px-8 md:px-[5.73vw] lg:px-[7.64vw] xl:px-[9.17vw] 2xl:px-[11.46vw] 3xl:px-[220px]`
   - Max width: `max-w-[1920px] mx-auto`
   - Always maintain proportional spacing

**✅ = Responsive Compliant | ⚠️ = Needs Responsive Update | ❌ = Not Responsive**

## Progress Overview
- [x] Navigation Components (4/7) ✅ **Responsive**
- [x] Hero/Banner Components (2/3) ✅ **Responsive**
- [x] Card Components (1/8) ✅ **Responsive**
- [x] Form Elements (3/8) ✅ **Responsive**
- [x] Buttons and CTAs (1/5) ✅ **Responsive**
- [x] Layout Components (3/5) ✅ **Responsive**
- [ ] Content Sections (0/5)
- [ ] Interactive Elements (0/6)
- [x] Typography System (1/1) ✅ **Responsive**
- [x] Design Tokens (1/1) ✅ **Responsive**

---

## 1. Navigation Components

### Primary Navigation
- [x] **Desktop Navigation Bar** ✅ **Responsive**
  - Height: 102-121.6px (responsive: 80px → 121.6px)
  - Background: Transparent over hero, solid black (#242424) on scroll
  - Logo: 144.95x102px, always centered (responsive scaling)
  - Menu items: Right-aligned (Travel Essentials, Travel Club), Thunder font, responsive text sizing
  - Responsive font sizes: `text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[27px]`
  - File path: `components/common/nav/desktop-nav.tsx`
  - **Notes:**
    - ✅ Implements responsive scaling with viewport units
    - ✅ Proper breakpoint-based font sizing
    - ✅ Logo scales proportionally across breakpoints

- [x] **Mobile Navigation Bar** ✅ **Responsive**
  - Height: Responsive based on content
  - Fixed positioning, full width
  - Logo: Responsive scaling
  - Hamburger: Responsive positioning, visible only on mobile
  - Menu items: Hidden by default, shown in drawer
  - File path: `components/common/nav/mobile-nav.tsx`
  - **Notes:**
    - ✅ Proper mobile-first responsive design
    - ✅ Logo scales correctly on all breakpoints

- [x] **Scrolled Navigation State** ✅ **Responsive**
  - Height: Responsive (80px lg → 121.6px 3xl)
  - Background: Solid black (#242424)
  - Responsive horizontal menu layout
  - Logo: Responsive scaling (80x56px → 144.95x102px)
  - Font: Thunder responsive sizes (14px → 27px)
  - File path: `components/common/nav/desktop-nav.tsx` (integrated)
  - **Notes:**
    - ✅ Implements proper responsive font scaling
    - ✅ No logo overlap across all breakpoints
    - ✅ Uses viewport-based spacing

- [x] **Mega Menu/Popover** ✅ **Responsive**
  - Desktop: Responsive width with max constraints
  - Multiple sections layout
  - Active states: black bg/white text
  - Font mixing: Thunder, Onest, PP Formula with responsive sizing
  - File path: `components/common/nav/mega-menu.tsx`

- [ ] **Mobile Menu Drawer**
  - Full screen overlay
  - Slide-in animation
  - Nested navigation support
  - File path: `components/common/nav/mobile-drawer.tsx`

- [ ] **Breadcrumbs**
  - Onest font, 13-20px
  - Arrow separators
  - Multi-level support
  - File path: `components/common/breadcrumbs.tsx`

- [ ] **Secondary Navigation Tabs**
  - Active: bg-#242424, white text
  - Inactive: white bg, #242424 text
  - Border radius: 8px
  - File path: `components/common/nav/tabs.tsx`

---

## 2. Hero/Banner Components

- [x] **Hero Banner with Overlay** ✅ **Responsive**
  - Height: 100vh (desktop), 643px (mobile)
  - Gradient overlays with exact Figma opacity stops
  - Title: Thunder responsive sizing (7.03vw = 135px at 1920px)
  - Positioning: Uses flexbox with viewport-based gaps (1.82vw = 35px)
  - File path: `components/common/hero/hero.tsx` & `hero-mobile.tsx`
  - **Notes:**
    - ✅ Uses viewport units for consistent scaling
    - ✅ Proper mobile/desktop variants
    - ✅ Flexbox layout prevents jumping between breakpoints

- [x] **Hero with Search Menu** ✅ **Responsive**
  - Integrated tour search: Responsive width (71.77vw = 1378px at 1920px)
  - Height: Responsive (8.8vw = 169px at 1920px)
  - Shadow effects and border radius: 12px
  - Form fields: Responsive widths and font sizes
  - File path: `components/common/hero/hero-search-form.tsx` & `hero-search-form-mobile.tsx`
  - **Notes:**
    - ✅ All measurements converted to viewport units
    - ✅ Responsive font sizes for form labels and inputs
    - ✅ Mobile-specific vertical layout variant

- [ ] **Banner with Logo**
  - Logo overlay: 178x114px
  - Combined text and logo positioning
  - File path: `components/common/hero/hero-logo.tsx`

---

## 3. Card Components

- [x] **Tour/Listing Card** ✅ **Responsive**
  - Dimensions: 23.96vw × 33.49vw (460x643px at 1920px)
  - Image height: 14.56vw (279.48px at 1920px)
  - Border radius: 9px
  - Shadow: 0 3px 3px rgba(0,0,0,0.16)
  - Components: image, title, price, description, tags, badges
  - File path: `components/ui/cards/tour-card.tsx`
  - **Notes:**
    - ✅ Uses viewport-based sizing with max-width constraints
    - ✅ Responsive typography scaling across all breakpoints
    - ✅ Integrated with design tokens system

- [ ] **Expert Card**
  - Dimensions: 467x559px
  - Center-aligned content
  - Profile image: 225.79x337px
  - Border: 1px #E8E8E8
  - File path: `components/ui/cards/expert-card.tsx`

- [ ] **Brochure Card**
  - Dimensions: 261.1x476px
  - Two action buttons (View/Download)
  - Multiple shadow layers
  - File path: `components/ui/cards/brochure-card.tsx`

- [ ] **Award Card**
  - Dimensions: 247.22x290px
  - Centered image: 181.1x256.91px
  - Clean white background
  - File path: `components/ui/cards/award-card.tsx`

- [ ] **Album Card**
  - Dimensions: 459-460.95x415px
  - Info overlay at bottom
  - Date and manager details
  - File path: `components/ui/cards/album-card.tsx`

- [ ] **Review/Testimonial Card**
  - Dimensions: 582x319px (desktop, 2-col)
  - Avatar: 63x63px (desktop), 40x40px (mobile)
  - Star ratings, verified badge
  - File path: `components/ui/cards/review-card.tsx`

- [ ] **Country Card**
  - Square aspect ratio
  - Hover overlay effect
  - Country name centered
  - File path: `components/ui/cards/country-card.tsx`

- [ ] **Mission/Vision/Values Card**
  - Width: 727px
  - Background: #EEEEEE
  - Border radius: 20px
  - Padding: 48px
  - File path: `components/ui/cards/content-card.tsx`

---

## 4. Form Elements

- [x] **Text Input** ✅ **Responsive**
  - Height: 35-58px (responsive sizing with sm/md/lg variants)
  - Border radius: 8px
  - Background: #EFEFEF with state variants
  - Border: 1px #242424
  - Onest font, responsive sizing (13px → 18px)
  - File path: `components/ui/form/input.tsx`
  - **Notes:**
    - ✅ Three size variants with responsive typography
    - ✅ Error/success states with proper styling
    - ✅ Integrated label and helper text support
    - ✅ Uses design tokens for consistent styling

- [x] **Select/Dropdown** ✅ **Responsive**
  - Same styling as text input with responsive sizing
  - Custom chevron icon with proper positioning
  - Options support with disabled states
  - File path: `components/ui/form/select.tsx`
  - **Notes:**
    - ✅ Matches input component styling and responsiveness
    - ✅ Custom styled chevron with SVG icon
    - ✅ Proper keyboard navigation support

- [ ] **Date Picker**
  - Calendar icon integration
  - Same input styling
  - Calendar popover
  - File path: `components/ui/form/date-picker.tsx`

- [x] **Search Bar** ✅ **Responsive**
  - Combined input + button with Figma dimensions
  - Input width: 15.14vw (290.73px), Button: 7.89vw (151.55px)
  - Responsive sizing with loading states
  - File path: `components/ui/form/search-bar.tsx`
  - **Notes:**
    - ✅ Exact Figma dimensions with responsive scaling
    - ✅ Loading state with spinner animation
    - ✅ Search icon and keyboard support

- [ ] **Textarea**
  - Variable height
  - Same styling as input
  - Min height: 150px
  - File path: `components/ui/form/textarea.tsx`

- [ ] **Checkbox**
  - Custom styled
  - Size: 20x20px
  - With label support
  - File path: `components/ui/form/checkbox.tsx`

- [ ] **Radio Button**
  - Custom styled
  - Grouped support
  - Size: 20x20px
  - File path: `components/ui/form/radio.tsx`

- [ ] **Contact Form Container**
  - Card wrapper: 686px width
  - Shadow: 0 5px 15px rgba(0,0,0,0.15)
  - Border radius: 20px
  - File path: `components/ui/form/form-container.tsx`

---

## 5. Buttons and CTAs

- [x] **Primary Button** ✅ **Responsive**
  - Background: #242424
  - Text: white
  - Border radius: 8-9px
  - Responsive padding and font sizes
  - Font: Onest with responsive sizing
  - File path: `components/ui/button/index.tsx`
  - **Notes:**
    - ✅ Implements responsive text sizing across breakpoints
    - ✅ Uses variant system with CVA

- [ ] **Secondary Button**
  - Background: #D9D9D9 or white
  - Border: 1px #242424
  - Same dimensions as primary
  - File path: `components/ui/button/secondary.tsx`

- [ ] **Outline Button**
  - Background: transparent
  - Border: 1px #242424
  - Text: #242424
  - File path: `components/ui/button/outline.tsx`

- [ ] **Load More Button**
  - Fixed: 169x51px
  - Centered positioning
  - File path: `components/ui/button/load-more.tsx`

- [ ] **Icon Button**
  - Square aspect ratio
  - Various sizes: 35x35px, 45x45px
  - With/without background
  - File path: `components/ui/button/icon.tsx`

---

## 6. Layout Components

- [x] **Section Container** ✅ **Responsive**
  - Max width: Responsive with proper scaling
  - Responsive padding implementation
  - Vertical spacing: Responsive py values
  - File path: `components/common/layout/container.tsx`
  - **Notes:**
    - ✅ Uses responsive padding system
    - ✅ Implements proper max-width constraints

- [x] **Grid System** ✅ **Responsive**
  - Multiple variants: tours (3-col), countries (4-col), testimonials (2-col), albums
  - Responsive gaps: mobile 16px → desktop up to 5.47vw (105px Figma spec)
  - Mobile-first responsive: 1→2→3/4 columns across breakpoints
  - File path: `components/common/layout/grid.tsx`
  - **Notes:**
    - ✅ Predefined variants for common layouts
    - ✅ Custom column and gap configuration support
    - ✅ Convenience components: TourGrid, CountryGrid, etc.
    - ✅ Proper responsive breakpoint handling

- [x] **Footer** ✅ **Responsive**
  - Height: 540px (responsive implementation)
  - Background: #242424
  - Responsive 4-column layout
  - Divider: 1px #5C5C5C
  - Social icons: 20x20px (responsive sizing)
  - File path: `components/common/footer/index.tsx`
  - **Notes:**
    - ✅ Implements responsive column layout
    - ✅ Proper mobile stacking behavior

- [ ] **Page Header**
  - Consistent spacing
  - Title + subtitle support
  - Optional breadcrumbs
  - File path: `components/common/layout/page-header.tsx`

- [ ] **Content Wrapper**
  - Max width constraints
  - Responsive padding
  - Background options
  - File path: `components/common/layout/content-wrapper.tsx`

---

## 7. Content Sections

- [ ] **Why Choose Us Section**
  - Icon boxes: 80x80px, #242424 bg
  - 3-column layout
  - Center-aligned text
  - File path: `components/sections/why-choose-us.tsx`

- [ ] **Timeline/Milestones**
  - Vertical layout
  - Date column: min-w-133px
  - Thunder font for dates
  - File path: `components/sections/timeline.tsx`

- [ ] **Stats/Numbers Section**
  - Large numbers display
  - Thunder font
  - Supporting text
  - File path: `components/sections/stats.tsx`

- [ ] **Team Section**
  - Grid of expert cards
  - Responsive layout
  - File path: `components/sections/team.tsx`

- [ ] **CTA Section**
  - Full width background
  - Centered content
  - Large CTA button
  - File path: `components/sections/cta.tsx`

---

## 8. Interactive Elements

- [ ] **Accordion**
  - Header: bg-#242424, white text
  - Content: white bg
  - Border: 1px #DCDCDC
  - Expand/collapse icon
  - File path: `components/ui/accordion.tsx`

- [ ] **Toggle Switch**
  - Dimensions: 45x20px
  - Knob: 20x20px
  - Smooth transitions
  - File path: `components/ui/toggle.tsx`

- [ ] **Pagination**
  - Button size: 35x35px
  - Background: #F2F2F2
  - Border: 1px #8C8888
  - Text format: "1 of 15"
  - File path: `components/ui/pagination.tsx`

- [ ] **Progress Steps**
  - Circle size: 55x55px (desktop), 26x26px (mobile)
  - Active: bg-#242424
  - Inactive: bg-#242424/35
  - Connecting lines: 2px height
  - File path: `components/ui/progress-steps.tsx`

- [ ] **Star Rating**
  - Star size: 20x20px
  - Filled/empty states
  - Interactive option
  - File path: `components/ui/star-rating.tsx`

- [ ] **Image Carousel**
  - Embla carousel integration
  - Dot indicators
  - Arrow navigation
  - File path: `components/ui/carousel.tsx`

---

## 9. Typography System

- [x] **Typography Components & Scale** ✅ **Responsive**
  ```
  Heading Hierarchy (Responsive Implementation):
  - H1: Thunder responsive sizing (text-4xl lg:text-6xl 3xl:text-[135px])
  - H2: Thunder responsive sizing (text-2xl lg:text-4xl 3xl:text-[50px])
  - H3: Thunder responsive sizing (text-xl lg:text-2xl 3xl:text-[35px])
  - Body: Onest responsive sizing (text-sm lg:text-base 3xl:text-[18px])
  - Small: Onest responsive sizing (text-xs lg:text-sm 3xl:text-[14px])
  
  Letter Spacing:
  - Standard: 3% (0.03em)
  - Tight: -2.5% (-0.025em)
  ```
  - File path: `components/ui/typography.tsx` & global styles
  - **Notes:**
    - ✅ Implements responsive typography scaling
    - ✅ Uses proper Tailwind responsive classes
    - ✅ Maintains Figma proportions at 3xl breakpoint

---

## 10. Design Tokens

- [x] **Design Token System** ✅ **Responsive**
  ```
  Colors:
  - Primary: #242424, Secondary: #EEEEEE, Border: #E8E8E8
  - Muted: #5C5C5C, Background: #EFEFEF
  - Error: #DC2626, Success: #16A34A, Warning: #EA580C
  
  Border Radius:
  - xs: 4px → 3xl: 25px (7 size variants)
  
  Shadows:
  - sm: 0 3px 3px rgba(0,0,0,0.16)
  - md: 0 5px 15px rgba(0,0,0,0.15)
  - lg: Multiple layered shadows
  - Specific: card, form shadows
  
  Spacing:
  - 8px base unit system (0→32: 13 size variants)
  
  Breakpoints & Scaling:
  - sm: 640px (0.333x) → 3xl: 1920px (1x - Figma baseline)
  - Scaling factors for responsive conversion
  
  Typography:
  - Responsive text classes with breakpoint variants
  - Font families: Thunder, Onest, PPFormula
  - Letter spacing: tight (-2.5%), normal, wide (3%)
  
  Components:
  - Navigation, card, form, button token collections
  - Utility functions: toVw(), toPercent(), getScaledValue()
  ```
  - File path: `lib/design-tokens.ts`
  - **Notes:**
    - ✅ Complete token system with responsive scaling utilities
    - ✅ Component-specific token collections
    - ✅ Figma-to-code conversion functions
    - ✅ Used across all implemented components

---

## Implementation Guidelines

1. **Component Structure**
   - All components should be TypeScript
   - Use forwardRef for DOM element components
   - Include proper prop types
   - Support className override
   - Include aria labels for accessibility

2. **Styling Approach**
   - Use Tailwind CSS classes
   - Create variant props using CVA (class-variance-authority)
   - Support dark mode where applicable
   - Ensure responsive design

3. **Testing Requirements**
   - Unit tests for logic
   - Visual regression tests
   - Accessibility tests
   - Mobile responsiveness tests

4. **Documentation**
   - Storybook stories for each component
   - Props documentation
   - Usage examples
   - Design notes

5. **Performance Considerations**
   - Lazy load images
   - Use React.memo for expensive components
   - Optimize bundle size
   - Consider SSR/SSG implications

---

## Priority Order

### Phase 1: Core Components (Must Have)
1. Design Tokens
2. Typography System
3. Primary Navigation (Desktop & Mobile)
4. Primary Button
5. Text Input & Select
6. Tour/Listing Card
7. Section Container
8. Footer

### Phase 2: Essential Components
1. Hero Banner with Overlay
2. Grid System
3. Form Elements (remaining)
4. Secondary Button & Outline Button
5. Breadcrumbs
6. Review Card
7. Accordion
8. Pagination

### Phase 3: Enhanced Components
1. Mega Menu
2. Expert Card
3. Progress Steps
4. Country Card
5. Image Carousel
6. All remaining cards
7. Interactive elements
8. Content sections

---

## 🎯 Implementation Status Summary

### ✅ Completed & Responsive
1. **Design Token System** - Complete responsive token system with utilities ✅
2. **Navigation System** - Desktop nav, mobile nav, scrolled states, mega menu ✅
3. **Hero Components** - Hero banner with search form, responsive mobile variant ✅
4. **Card System** - Tour card with viewport-based responsive sizing ✅
5. **Form Elements** - Input, Select, Search Bar with responsive scaling ✅
6. **Layout Foundation** - Section container, grid system, footer ✅
7. **Button System** - Primary button with responsive scaling ✅
8. **Typography System** - Responsive font scaling with proper breakpoints ✅

### 🔄 In Progress
9. **Additional Form Elements** - Date picker, textarea, checkbox, radio
10. **Additional Cards** - Expert, review, country, album cards  
11. **Secondary Buttons** - Outline and secondary button variants

### ❌ High Priority Next Steps
1. **Interactive Elements** - Accordion, pagination, progress steps, star rating
2. **Content Sections** - Why choose us, timeline, stats, team, CTA sections
3. **Mobile Menu Drawer** - Full navigation drawer for mobile
4. **Breadcrumbs** - Navigation breadcrumb component

---

## 🚨 Responsive Implementation Checklist

For any new component, ensure:
- [ ] All pixel values converted using `(figma_value / 1920) * 100`
- [ ] Responsive text classes: `text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-[figma-size]px`
- [ ] Responsive spacing and padding using viewport units
- [ ] Mobile-first design approach
- [ ] Testing across all breakpoints (lg, xl, 2xl, 3xl)
- [ ] No overlap or layout breaking at any screen size

---

## Notes

- ✅ Components marked with mobile specifications need responsive variants
- ✅ All interactive components need hover, focus, and active states
- ✅ Form components need error states and validation styling
- ✅ Consider creating compound components for complex patterns
- ✅ Ensure all components follow WCAG accessibility guidelines
- **NEW:** All components must implement responsive design following Figma scaling guidelines