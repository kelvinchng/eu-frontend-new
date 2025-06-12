# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CRITICAL: Responsive Design Memory

### Always Remember When Implementing Components:
1. **Figma is at 1920px** - ALL measurements must be converted
2. **Formula**: `(figma_value / 1920) * 100` for percentages
3. **Hero is 100vh** - Full viewport height, no exceptions
4. **Use responsive utils** - Import from `/src/lib/responsive-utils.ts`
5. **Test all breakpoints** - 320, 640, 768, 1024, 1280, 1536, 1920px

### Quick Conversion Reference:
- 220px → 11.46% (container padding)
- 135px → 7.03% (hero title size)
- 75px → 3.91% (spacing from bottom)
- 50px → 2.6% (medium spacing)
- 32px → 1.67% (small spacing)

## Common Commands

### Development
- `npm run dev` - Start development server with Turbopack fast bundler at http://localhost:3000
- `npm run build` - Build production-ready application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Dependencies
- `npm install` - Install all dependencies
- `npm install <package>` - Add new dependency
- `npm install -D <package>` - Add new dev dependency

## Architecture Overview

This is a Next.js 15 travel booking frontend using App Router architecture with TypeScript and Tailwind CSS v4.

### Tech Stack
- **Next.js 15.3.3** with App Router and Turbopack
- **React 19.0.0** - Latest React with server components
- **TypeScript 5** - Type safety with strict mode
- **Tailwind CSS 4** - Utility-first styling with PostCSS
- **shadcn/ui** - Component library using Radix UI primitives
- **react-hook-form** - Form state management
- **motion** - Animations
- **embla-carousel** - Carousel functionality

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── components/         # Page-specific components
│   ├── [route]/           # Route folders (deals, tours, etc.)
│   └── layout.tsx         # Root layout with global providers
├── components/
│   ├── common/            # Reusable components with custom styling
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
└── lib/                   # Utilities and data files
```

### Routing Pattern
- Static routes: `/deals`, `/family_friendly`, `/seasonal_offers`, `/theme_jurneys`
- Dynamic routes: `/explore/[country]`, `/tours/[details]`
- All routes use `page.tsx` for the route component

### Component Conventions
- Page components in `app/[route]/page.tsx`
- Page-specific components in `app/[route]/components/`
- Shared UI components use shadcn/ui in `components/ui/`
- Common components with business logic in `components/common/`
- All components use TypeScript with proper type definitions

### Styling Approach
- Tailwind CSS for utility classes
- CSS variables for theming (configured in globals.css)
- Component variants using `class-variance-authority`
- Custom fonts: Thunder-LC and PPFormula-Medium

### Development Notes
- Path alias `@/*` maps to `./src/*`
- ESLint configured to warn on `any` types and unused variables
- ESLint errors ignored during production builds
- No test framework currently configured
- Custom components wrap shadcn/ui components for business logic

### Figma Integration

#### IMPORTANT: Pixel-Perfect Implementation
**When implementing any component or page, ALWAYS use the Figma MCP to retrieve and consult the actual Figma designs for pixel-perfect accuracy.** The Figma links for all pages are documented in `/product-management/figma-all-pages-links.md`.

#### MCP (Model Context Protocol) Setup
The project has Figma MCP integration configured in `.mcp/config.json` with two servers:

1. **Standard Figma MCP Server** - Requires `FIGMA_PERSONAL_ACCESS_TOKEN` environment variable
2. **Framelink Figma MCP** - Pre-configured with API key for direct Figma access

To use Figma MCP:
- The configuration is already set up in `.mcp/config.json`
- Framelink Figma MCP is ready to use with the included API key
- This allows direct access to Figma designs and components
- **Always consult Figma when in doubt about specifications**

#### Figma Design References
- **All Figma page links**: `/product-management/figma-all-pages-links.md`
- **Component specifications**: `/product-management/` directory contains extracted Tailwind specs
- **Design System Todo**: `/DESIGN-SYSTEM-TODO.md` contains all unique components to implement
- **Responsive Scaling Guide**: `/src/lib/responsive-scaling-guide.md` for Figma to code conversion

Key pages with Figma links:
- Homepage (Hero, Featured, Destinations, Themed Journeys, etc.)
- Country Pages (3 variants)
- Listings Pages (3 variants)
- Individual Listing Pages (with Testimonials, Photos, FAQ tabs)
- Booking Flow (Steps 1, 2, 3)
- About, Meet The Experts, Press & Media, Awards
- Tour Reviews, Tour Albums, Contact Us, Brochures, EU MICE

### Responsive Design Implementation

#### CRITICAL: Figma to Code Scaling
**Figma designs are created at 1920px width (3xl breakpoint)**. When implementing ANY component:

1. **Calculate percentages**: All Figma measurements MUST be converted using: `(figma_value / 1920) * 100`
2. **Use responsive utilities**: Import and use functions from `/src/lib/responsive-utils.ts`:
   - `figmaToResponsive()` - Convert Figma px to vw/rem/%
   - `getFigmaTextSize()` - Get responsive text classes
   - `getScaledValue()` - Calculate scaled px for any viewport
   - `figmaClamp()` - Create fluid typography with clamp()

3. **Hero Component Specific Rules**:
   - **Desktop (lg and above)**:
     - Height: `h-[100vh]` full viewport
     - Title: Bottom-aligned at 35-38% from bottom
     - Search Form: Horizontal layout, bottom-aligned at 14-16%
     - Side Padding: 11.46% (220px at 1920px)
     - Title Size: 135px (7.03%)
   - **Mobile (below lg - 393px base)**:
     - Height: 643px fixed
     - Title: Top position at 162px (25.2%)
     - Title Size: 53px
     - Search Form: Vertical stacked layout at 306px from top
     - Side Padding: 25px (6.36%)
     - Form Height: 307px with vertical fields

4. **Breakpoint Scaling Factors**:
   - 3xl: 1920px (1x - Figma baseline)
   - 2xl: 1536px (0.8x)
   - xl: 1280px (0.667x)
   - lg: 1024px (0.533x)
   - md: 768px (0.4x)
   - sm: 640px (0.333x)
   - xs: 320px (0.167x)

5. **Implementation Process**:
   - ALWAYS check Figma MCP for exact measurements
   - Convert ALL absolute positioning to percentage-based
   - Use viewport units for fluid scaling
   - Test at every breakpoint to ensure proportions

6. **Container Strategy**:
   - Side padding: `px-4 sm:px-8 md:left-[5.73vw] lg:left-[7.64vw] xl:left-[9.17vw] 2xl:left-[11.46vw] 3xl:left-[220px]`
   - Max width: `max-w-[1920px] mx-auto`
   - Always maintain proportional spacing

See `/product-management/responsive-scaling-guide.md` for complete guidelines.

### Key Features to Implement
Based on the Figma designs and current structure:
1. Dynamic data integration (API connections)
2. Search functionality across tours
3. Booking flow completion
4. Filter systems for listings
5. SEO optimization with meta tags
6. Loading states and error boundaries
7. Image optimization and lazy loading