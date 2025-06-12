# Responsive Scaling Guide

## Overview
This guide consolidates all responsive design strategies for converting Figma's 1920px fixed designs into responsive implementations. The Figma designs were created without responsive specifications, requiring us to maintain design intent while supporting all screen sizes.

## Base Reference & Philosophy
- **Figma designs are created at 1920px width (3xl breakpoint)**
- All measurements should be converted to percentages or viewport units based on this baseline
- Scale proportionally across all breakpoints while maintaining visual hierarchy

### Design Principles
1. **Relative Units Over Fixed Pixels** - Use rem, %, vw/vh, or flex for scalability
2. **Mobile-First Approach** - Start with mobile styles and enhance at larger breakpoints
3. **Progressive Enhancement** - Add complexity as screen size increases
4. **Maintain Design Intent** - Preserve proportions and visual relationships

## Breakpoint System

### Tailwind Breakpoints with Scaling Factors
```
- xs: 320px   (0.1667x of base)
- sm: 640px   (0.3333x of base) 
- md: 768px   (0.4x of base)
- lg: 1024px  (0.5333x of base)
- xl: 1280px  (0.6667x of base)
- 2xl: 1536px (0.8x of base)
- 3xl: 1920px (1x of base - Figma reference)
```

### Key Ratios from Figma
- **Left/Right margins**: 50px = 2.6% of 1920px
- **Content width**: 1820px = 94.8% of 1920px
- **Effective container**: 1920px - 100px (50px each side)

## Conversion Formulas

### Base Calculations
```
scaled_value = (figma_value / 1920) * viewport_width
percentage = (figma_value / 1920) * 100
vw_value = (figma_value / 1920) * 100vw
```

### Implementation with CSS Custom Properties
```css
:root {
  --scale-factor: calc(100vw / 1920);
  --scale-factor-clamped: clamp(0.1667, var(--scale-factor), 1);
}
```

### Utility Functions
```typescript
// Convert Figma px to responsive value
export function figmaToResponsive(figmaPx: number, unit: 'vw' | 'rem' | 'px' = 'vw'): string {
  const percentage = (figmaPx / 1920) * 100;
  
  switch (unit) {
    case 'vw':
      return `${percentage}vw`;
    case 'rem':
      return `${percentage / 6.25}rem`; // assuming 16px base
    case 'px':
      return `${figmaPx}px`;
  }
}

// Get scaled value for current viewport
export function getScaledValue(figmaPx: number, viewportWidth: number): number {
  return (figmaPx / 1920) * viewportWidth;
}
```

## Typography Scaling

### Hero Text Case Study
The hero text (135px @ 1920px) demonstrates our scaling approach:
- **Ratio**: 135px / 1920px = 7.03% of viewport
- **Problem**: Pure percentage scaling causes readability issues on small screens
- **Solution**: Non-linear scaling with minimum sizes

### Typography Conversion Table
| Figma (px) | Mobile | Tablet | Desktop | 2XL | Strategy |
|------------|--------|--------|---------|-----|----------|
| 170px | text-5xl (48px) | text-7xl (72px) | text-8xl (96px) | text-[170px] | Clamp with min size |
| 135px | text-5xl (48px) | text-6xl (60px) | text-8xl (96px) | text-9xl (128px) | Hero scaling |
| 50px | text-2xl (24px) | text-3xl (30px) | text-4xl (36px) | text-5xl (48px) | Linear progression |
| 30px | text-xl (20px) | text-2xl (24px) | text-3xl (30px) | text-[30px] | Standard scaling |
| 27px | text-lg (18px) | text-xl (20px) | text-2xl (24px) | text-[27px] | Body text |
| 20px | text-base (16px) | text-lg (18px) | text-xl (20px) | text-xl (20px) | Minimal scaling |
| 18px | text-sm (14px) | text-base (16px) | text-lg (18px) | text-lg (18px) | Base text |

### Tailwind Implementation with Clamp
```jsx
// Hero title that scales from Figma's 135px
<h1 className="text-[clamp(1.375rem,7.03vw,8.4375rem)]">
  {/* min: 22px, preferred: 7.03vw, max: 135px */}
</h1>
```

## Spacing & Layout Conversions

### Padding/Margin Conversion Table
| Figma (px) | Responsive Classes | Mobile → Desktop |
|------------|-------------------|------------------|
| 8px | p-2 | 8px → 8px |
| 16px | p-4 | 16px → 16px |
| 24px | p-6 | 24px → 24px |
| 32px | p-8 | 32px → 32px |
| 40px | p-10 | 40px → 40px |
| 50px | p-6 sm:p-8 lg:p-12 2xl:p-[50px] | 24px → 50px |
| 60px | p-8 sm:p-10 lg:p-14 xl:p-16 | 32px → 64px |
| 220px | px-4 sm:px-8 lg:px-[11.46vw] | 16px → 220px |

### Component Heights
```css
/* Navbar: 102px */
@apply h-16 sm:h-20 lg:h-24 xl:h-[102px]; /* 64px → 102px */

/* Navbar Scrolled: 61px */
@apply h-12 sm:h-14 lg:h-16 xl:h-[61px]; /* 48px → 61px */

/* Hero: Full viewport height */
@apply h-[100vh];

/* Cards: 643px */
@apply h-auto lg:h-[600px] xl:h-[643px];
```

## Container Strategies

### Max-Width Containers
```jsx
// Instead of absolute positioning
// ❌ position: absolute; width: 1820px; left: 50px; right: 50px;

// ✅ Use max-width with responsive padding
<div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 2xl:px-[50px]">
```

### Container Width Classes
- Small: `max-w-2xl` (672px)
- Medium: `max-w-4xl` (896px) 
- Large: `max-w-5xl` (1024px)
- XL: `max-w-6xl` (1152px)
- 2XL: `max-w-7xl` (1280px)
- Full: `max-w-screen-2xl` (1536px)

## Practical Implementation Examples

### Navigation Bar
```jsx
// Figma CSS
position: absolute;
width: 1820px;
height: 102px;
left: 50px;
top: 10px;

// Responsive Tailwind
<nav className="w-full h-16 sm:h-20 lg:h-24 xl:h-[102px]">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 2xl:px-[50px]">
    {/* Navigation content */}
  </div>
</nav>
```

### Hero Section
```jsx
// Figma: 1920px × 838px with 220px side padding
<section className="relative w-full min-h-[80vh] lg:min-h-[750px] xl:min-h-[838px]">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-[11.46vw]">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[135px]">
      {/* Hero text with progressive scaling */}
    </h1>
  </div>
</section>
```

### Content Cards
```jsx
// Figma: 1378px width container
<div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[1378px] mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
    {/* Card grid with responsive gaps */}
  </div>
</div>
```

## Hero Component Specific Measurements

### Desktop Design (1920px baseline - lg and above)
- Container Width: 1920px (100%)
- Hero Height: 100vh (full viewport height)
- Side Padding: 220px (11.46%)
- Title Size: 135px (7.03%)
- Title Position: Bottom-aligned at 35-38%
- Search Form Width: 1378px (71.77%)
- Search Form Position: Bottom-aligned at 14-16%
- Search Form Layout: Horizontal grid (4 columns)
- Icon Size: 67.3px × 60.59px (3.5% × 3.15%)

### Mobile Design (393px baseline - below lg)
- Container Width: 393px (100%)
- Hero Height: 643px (fixed)
- Side Padding: 25px (6.36%)
- Title Size: 53px
- Title Position: Top at 162px (25.2% from top)
- Search Form Width: 358px (91.1%)
- Search Form Position: Top at 306px (47.6% from top)
- Search Form Height: 307px
- Search Form Layout: Vertical stack
- Icon Size: 26px × 26.13px

### Key Differences
1. **Layout**: Desktop uses bottom-aligned positioning, mobile uses top-aligned
2. **Search Form**: Desktop is horizontal grid, mobile is vertical stack
3. **Typography**: Desktop 135px → Mobile 53px (not proportional scaling)
4. **Height**: Desktop is viewport-based, mobile is fixed
5. **Component Structure**: Completely different HTML structure needed

## Testing & Verification

### Viewport Testing Checklist
1. **Mobile**: 375px, 414px (iPhone sizes)
2. **Tablet**: 768px, 834px (iPad sizes)
3. **Desktop**: 1366px, 1440px (common laptop sizes)
4. **Large**: 1920px (original Figma design)
5. **Ultra-wide**: 2560px+ (4K monitors)

### Verification Points
- [ ] Layout maintains proportions
- [ ] Text remains readable at all sizes
- [ ] Spacing scales appropriately
- [ ] Interactive elements meet 44px minimum touch targets
- [ ] Design intent preserved across breakpoints
- [ ] No horizontal scroll on any device
- [ ] Images scale without distortion

## Mobile Component Strategy

### When to Use Separate Mobile Components
1. **Layout changes significantly** (e.g., horizontal to vertical)
2. **Different positioning system** (e.g., bottom-aligned to top-aligned)
3. **Content structure changes** (e.g., grid to stack)
4. **Fixed dimensions on mobile** vs responsive on desktop

### Implementation Pattern
```jsx
// Desktop Component
<ComponentDesktop className="hidden lg:block" />

// Mobile Component  
<ComponentMobile className="lg:hidden" />
```

### Mobile Figma Baseline
- Mobile designs use **393px** as baseline (iPhone 14 Pro)
- Tablet designs use **768px** as baseline (iPad Mini)
- Convert using: `(mobile_value / 393) * 100` for mobile percentages

## Best Practices

1. **Check if mobile needs different component**
   - Look at mobile Figma first
   - If structure differs significantly, create separate component
   - Use breakpoint utilities to show/hide

2. **Always use clamp() for typography** to ensure readability
   ```css
   font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
   ```

3. **Use max-width containers** to prevent over-scaling
   ```jsx
   <div className="max-w-screen-2xl mx-auto">
   ```

3. **Test on actual devices** not just browser responsive mode

4. **Consider using CSS Container Queries** for component-level responsiveness
   ```css
   @container (min-width: 400px) {
     .component { /* styles */ }
   }
   ```

5. **Use viewport units carefully** - they can cause issues on mobile with browser UI

6. **Implement fluid spacing** with calc() and custom properties
   ```css
   padding: calc(1rem + 2vw);
   ```

## Quick Reference

### Most Common Conversions
```css
/* Positions */
50px → @apply px-4 sm:px-8 lg:px-12 2xl:px-[50px]
10px → @apply top-2 lg:top-3

/* Widths */
1820px → calc(100% - margins) or max-w-screen-2xl
1378px → @apply max-w-5xl xl:max-w-6xl

/* Heights */
102px → @apply h-16 sm:h-20 lg:h-24
61px → @apply h-12 sm:h-14 lg:h-16

/* Font Sizes */
30px → @apply text-xl lg:text-2xl xl:text-3xl
18px → @apply text-base lg:text-lg

/* Spacing */
32px → @apply p-4 md:p-6 lg:p-8
16px → @apply gap-3 md:gap-4
```

## Notes for Implementation

- The goal is to maintain design intent, not pixel perfection
- Responsive design is about proportions and relationships
- Always prioritize user experience over exact measurements
- Consider performance implications of complex calculations
- Document any deviations from Figma for maintenance