# EU Holidays Homepage Tailwind Component Guide

---

## NavBar
**Description:**
The top navigation bar with logo, menu items, and hamburger menu for mobile.

**Structure (JSX-like):**
```jsx
<nav className="navbar">
  <div className="logo" />
  <ul className="menu-items">
    <li>Travel Essentials</li>
    <li>EU Elites</li>
    <li>Menu <span className="hamburger-menu" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar`: `w-full h-[102px] bg-white flex items-center px-8 justify-between`
- `logo`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items`: `flex flex-row gap-x-8 font-[Thunder] text-[30px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`
  - Hamburger lines: `bg-white h-[1.7px] w-full block mb-1 last:mb-0`

**Pixel-Perfect Notes:**
- Font: Thunder, 30px, 0.92em line height, 3% letter spacing (add to Tailwind config if not default)
- Logo: 144.95x102px
- Menu item spacing: 32px (gap-x-8)
- Hamburger menu: 17.12x9.18px, 1.7px stroke, white
- Padding: 32px left/right (px-8)
- Responsive: Hamburger menu hidden on desktop, shown on mobile

**Mobile:**
```jsx
<nav className="navbar-mobile">
  <div className="logo-mobile" />
  <button className="hamburger-mobile" />
</nav>
```
- `navbar-mobile`: `w-full h-[51px] bg-[#242424] flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`
  - Hamburger lines: `bg-white h-[1.7px] w-full block`

**Pixel-Perfect Notes:**
- Height: 51px, logo: 71.52x50.33px, hamburger: 17.73x11.82px
- Use `fixed` for sticky mobile nav

---

## NavBar (Scrolled State)
**Description:**
When the user scrolls down, the NavBar transitions to a compact, flattened horizontal menu. The logo remains, and all menu items are displayed in a single row with reduced height and font size for clarity and space efficiency.

**Structure (JSX-like):**
```jsx
<nav className="navbar-scrolled">
  <div className="logo-scrolled" />
  <ul className="menu-bar-scrolled">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Plan Your Journey</li>
    <li>Trending Destinations</li>
    <li>Deals</li>
    <li>About Us</li>
    <li>Our Brands</li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-scrolled`: `fixed top-0 left-0 w-full h-[61px] bg-white flex items-center px-8 shadow transition-all duration-300 z-50`
- `logo-scrolled`: `w-[90px] h-[61px] bg-[url('/logo.svg')] bg-contain bg-no-repeat mr-8`
- `menu-bar-scrolled`: `flex flex-row gap-x-6 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-[#242424] uppercase`
- `menu-bar-scrolled li`: `px-2 py-1 cursor-pointer hover:text-[#1a1a1a] transition-colors duration-150`

**Pixel-Perfect Notes:**
- Height: 61px (from Figma)
- Font: Thunder, 27px, 0.92em line height, 3% letter spacing
- Logo: 90x61px
- Menu item spacing: 24px (gap-x-6)
- White background, subtle shadow for separation
- Responsive: On mobile, menu collapses to hamburger as before
- Transition: Use `transition-all duration-300` for smooth height/font/spacing change

**Usage:**
- Add a scroll event listener in your React component to toggle this state (e.g., `isScrolled` boolean)
- Swap between `.navbar` and `.navbar-scrolled` based on scroll position
- Ensure accessibility and keyboard navigation remain intact

---

## Menu Secondary Popover (Mega Menu Extended)
**Description:**
A large, pixel-perfect dropdown (mega menu) that appears when hovering or clicking on a primary menu item. Contains grouped navigation options, region selectors, and a country list, styled to match Figma exactly.

**Structure (JSX-like):**
```jsx
<div className="mega-menu-popover">
  <div className="popover-bg" />
  <div className="popover-content">
    <div className="menu-groups">
      <div className="menu-group active">
        <span>Group Holidays</span>
        <span className="chevron-icon" />
      </div>
      <div className="menu-group inactive">
        <span>Flexi Holidays</span>
        <span className="chevron-icon" />
      </div>
      <div className="menu-group inactive">
        <span>Themed Journeys</span>
        <span className="chevron-icon" />
      </div>
      <div className="menu-group inactive">
        <span>Cruise</span>
        <span className="chevron-icon" />
      </div>
    </div>
    <div className="region-section">
      <span className="region-label">REGION</span>
      <ul className="region-list">
        <li className="region-item">Africa <span className="arrow-icon" /></li>
        <li className="region-item">Antartica <span className="arrow-icon" /></li>
        <li className="region-item">Asia <span className="arrow-icon" /></li>
        <li className="region-item">Middle East <span className="arrow-icon" /></li>
        <li className="region-item">China <span className="arrow-icon" /></li>
        <li className="region-item active">Europe <span className="arrow-icon" /></li>
        <li className="region-item">North & South America <span className="arrow-icon" /></li>
      </ul>
    </div>
    <div className="subregion-section">
      <ul className="subregion-list">
        <li>Central Europe</li>
        <li>All</li>
        <li>Arctic</li>
        <li>Eastern Europe</li>
        <li>Northern Europe</li>
        <li>Southern Europe</li>
        <li>Exotic</li>
      </ul>
    </div>
    <div className="country-section">
      <span className="country-label">COUNTRIES (28)</span>
      <ul className="country-list">
        <li>Austria</li>
        <li>Belgium</li>
        <li>Bosnia & Herzegovina</li>
        <li>Croatia</li>
        <li>Czech Republic</li>
        <li>Denmark</li>
        <li>Finland</li>
        <li>Switzerland</li>
        <li>France</li>
        <li>Germany</li>
        <li>Greece</li>
        <li>Hungary</li>
        <li>Iceland</li>
        <li>Ireland</li>
        <li>Italy</li>
        <li>Liechtenstein</li>
        <li>Malta</li>
        <li>Montenegro</li>
        <li>Netherlands</li>
        <li>Norway</li>
        <li>Poland</li>
        <li>Portugal</li>
        <li>Slovakia</li>
        <li>Slovenia</li>
        <li>Spain</li>
        <li>Sweden</li>
        <li>Turkiye</li>
        <li>Vatican City</li>
      </ul>
    </div>
  </div>
</div>
```

**Tailwind Classes (Updated for Scrollstate):**
- `mega-menu-popover`: `absolute top-[121.97px] left-[50px] w-[1462px] h-[746.15px] z-50 shadow-[0_4px_4px_0_rgba(36,36,36,0.15)]`
- `popover-bg`: `absolute w-full h-full rounded-[12px] bg-white`
- `popover-content`: `relative flex flex-row gap-x-[40px] px-[60px] pt-[40px] pb-[40px]`
- `menu-groups`: `flex flex-col gap-y-[8px] w-[180px]`
- `menu-group`: `flex items-center justify-between h-[22.96px] text-[30px] font-thunder font-normal leading-[0.92em] tracking-[0.03em] px-4 rounded-[8px] cursor-pointer transition-colors duration-150`
- `menu-group.active`: `bg-black text-white`
- `menu-group.inactive`: `bg-transparent text-black opacity-40`
- `chevron-icon`: `ml-2 w-[9.64px] h-[4.8px]`
- `region-section`: `flex flex-col gap-y-[8px] w-[353px]`
- `region-label`: `text-[30px] font-thunder font-normal leading-[0.92em] tracking-[0.03em] text-black mb-2`
- `region-list`: `flex flex-col gap-y-[8px]`
- `region-item`: `flex items-center justify-between h-[22.96px] text-[18px] font-onest font-normal leading-[1.27em] px-4 rounded-[8px] cursor-pointer transition-colors duration-150`
- `region-item.active`: `bg-black text-white`
- `arrow-icon`: `ml-2 w-[27px] h-[22.14px]`
- `subregion-section`: `flex flex-col gap-y-[8px] w-[833px] mt-[20px]`
- `subregion-list`: `flex flex-row flex-wrap gap-x-[16px] gap-y-[8px] text-[18px] font-onest font-normal leading-[1.27em]`
- `country-section`: `flex flex-col gap-y-[8px] w-[658px] mt-[20px]`
- `country-label`: `text-[20px] font-ppformula font-normal leading-[1.34em] text-black mb-2`
- `country-list`: `flex flex-row flex-wrap gap-x-[16px] gap-y-[8px] text-[18px] font-onest font-normal leading-[1.27em]`

**Pixel-Perfect Notes:**
- **Positioning:** Now absolutely positioned at `top-[121.97px] left-[50px]` per Figma scrollstate ([see Figma node 2518:2637](https://www.figma.com/design/fEX39ONVmJ8I4y2YfwR5H6/Eu-Holidays-Website-Redesign--Working-Copy-?node-id=2518-2637)).
- Popover: 1462x746.15px, white background, 12px rounded corners, shadow rgba(36,36,36,0.15)
- Menu group: Thunder font, 30px, 0.92em line height, 3% letter spacing, 22.96px height, 8px vertical gap, 180px width
- Active menu: black bg, white text; inactive: 40% opacity
- Region/country: Onest/PP Formula font, 18-20px, 1.27-1.34em line height
- Chevron/arrow icons: 9.64x4.8px (chevron), 27x22.14px (arrow)
- Padding: 60px left/right, 40px top/bottom
- Use custom Tailwind config for Thunder/PP Formula fonts and exact letter spacing if not default

**Custom Tailwind Config Needed:**
- Thunder, Onest, and PP Formula font families
- Letter spacing 3% (`tracking-[0.03em]`)
- Exact shadow and rounded values

---

## Menu Popover (Mobile)
**Mobile:**
```jsx
<div className="menu-popover-mobile">
  <button className="close-btn" />
  <ul className="menu-list-mobile">
    <li>Travel Essentials</li>
    <li>EU Elites</li>
    <li>Our Brands</li>
    <li>About Us</li>
    <li>Deals <span className="arrow-down" /></li>
    <li>Trending Destinations <span className="arrow-down" /></li>
    <li>Plan Your Journey <span className="arrow-down" /></li>
  </ul>
  <div className="social-icons-mobile" />
</div>
```
- `menu-popover-mobile`: `fixed inset-0 w-full h-full bg-[#242424] z-50 flex flex-col pt-[51px]`
- `close-btn`: `absolute top-4 right-4 w-8 h-8`
- `menu-list-mobile`: `flex flex-col gap-y-2 mt-8 px-6`
- `menu-list-mobile li`: `text-white text-[14px] font-[Onest] py-3 border-b border-[#5C5C5C]/30 flex items-center justify-between`
- `arrow-down`: `w-4 h-4 ml-2`
- `social-icons-mobile`: `flex flex-row gap-x-4 mt-8 px-6`

**Pixel-Perfect Notes:**
- 14px Onest, 3% letter spacing, 1px divider, 20px icons
- Touch targets: 44px+ height

---

## Hero
**Description:**
Large banner with background image, overlay, title, icon, and tour search menu.

**Structure (JSX-like):**
```jsx
<section className="hero">
  <div className="banner-image" />
  <div className="gradient-overlay" />
  <div className="hero-content">
    <div className="hero-title-icon">
      <span className="icon" />
      <h1>Book the best travel deals</h1>
    </div>
    <div className="tour-search-menu">
      {/* Filter fields, search button, nav dots */}
    </div>
  </div>
</section>
```

**Tailwind Classes:**
- `hero`: `relative w-full h-[838px] flex items-center justify-center`
- `banner-image`: `absolute inset-0 w-full h-full bg-[url('/hero.jpg')] bg-cover bg-center`
- `gradient-overlay`: `absolute inset-0 bg-gradient-to-b from-[#070707b4] via-[#07070780] to-[#070707e6] opacity-90`
- `hero-content`: `relative z-10 flex flex-col items-center justify-center w-full h-full`
- `hero-title-icon`: `flex flex-row items-center gap-x-4 mb-8`
- `icon`: `w-[67.3px] h-[60.59px]`
- `h1`: `font-[Thunder] text-[135px] leading-[0.92em] tracking-[.01em] text-white`
- `tour-search-menu`: `w-[1378px] h-[169px] bg-white rounded-[12px] flex items-center px-8 py-4 shadow-lg mt-8`

**Pixel-Perfect Notes:**
- Banner: 1920x838px
- Overlay: strict gradient stops/colors from Figma
- Title: Thunder, 135px, 0.92em, 1% letter spacing
- Icon: 67.3x60.59px
- Tour search menu: 1378x169px, 12px border radius, shadow
- Responsive: Adjust widths for mobile

---

## Section (Generic)
**Description:**
Reusable section wrapper for homepage blocks (e.g., Featured Tours, Explore by Destinations).

**Structure (JSX-like):**
```jsx
<section className="section">
  <div className="section-header">
    <h2>Section Title</h2>
    <button className="view-all">View all here</button>
  </div>
  <div className="section-content">
    {/* Cards, carousel, etc. */}
  </div>
</section>
```

**Tailwind Classes:**
- `section`: `w-full py-16 px-8`
- `section-header`: `flex flex-row items-center justify-between mb-8`
- `h2`: `font-[Thunder] text-[50px] leading-[0.92em]`
- `view-all`: `font-[Onest] text-[20px] leading-[1.275em] tracking-[-.025em] text-[#242424] ml-4`
- `section-content`: `w-full flex flex-row gap-x-8`

**Pixel-Perfect Notes:**
- Section title: Thunder, 50px, 0.92em
- View all: Onest, 20px, -2.5% letter spacing
- Padding: 64px top/bottom (py-16), 32px left/right (px-8)
- Spacing: 32px between cards (gap-x-8)

**Mobile:**
```jsx
<section className="section-mobile">
  <div className="section-header-mobile">
    <h2>Section Title</h2>
    <button className="view-all-mobile">View all here</button>
  </div>
  <div className="section-content-mobile">
    {/* Cards, carousel, etc. */}
  </div>
</section>
```
- `section-mobile`: `w-full py-8 px-4`
- `section-header-mobile`: `flex flex-col items-start gap-y-2 mb-4`
- `h2`: `font-[Thunder] text-[25px] leading-[1.2em]`
- `view-all-mobile`: `font-[Onest] text-[13px] leading-[1.27em] tracking-[-.025em] text-[#242424] mt-1`
- `section-content-mobile`: `w-full flex flex-col gap-y-4`

**Pixel-Perfect Notes:**
- Title: Thunder, 25px, 1.2em
- View all: Onest, 13px, -2.5% letter spacing
- Padding: 32px (py-8), 16px (px-4)

---

## Listing Card
**Description:**
A card displaying a tour with image, title, price, description, tags, badges, and a view more button.

**Structure (JSX-like):**
```jsx
<div className="listing-card">
  <div className="listing-image" />
  <div className="listing-content">
    <div className="listing-title">Tour Title</div>
    <div className="listing-price">fr $438/pax</div>
    <div className="listing-description">Description text...</div>
    <div className="listing-tags">
      <span className="tag">1-for-1</span>
      <span className="badge">Best Seller</span>
    </div>
    <button className="view-more">View More</button>
  </div>
</div>
```

**Tailwind Classes:**
- `listing-card`: `w-[460px] h-[643px] bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden`
- `listing-image`: `w-full h-[279.48px] bg-cover bg-center rounded-t-[9px]`
- `listing-content`: `flex flex-col p-8 gap-y-4`
- `listing-title`: `font-[Thunder] text-[20px] font-bold leading-[1.275em] text-[#242424] mb-2`
- `listing-price`: `font-[Onest] text-[18px] font-medium text-[#242424] mb-2`
- `listing-description`: `font-[Onest] text-[18px] text-[#242424] mb-4`
- `listing-tags`: `flex flex-row gap-x-2 mb-4`
- `tag`: `bg-[#fff] border border-[#E8E8E8] rounded-[7px] px-3 py-1 font-[Onest] text-[18px] text-[#242424]`
- `badge`: `bg-[#242424] text-white rounded-[9px] px-3 py-1 font-[Onest] text-[18px] ml-2`
- `view-more`: `font-[Onest] text-[18px] text-[#242424] underline mt-auto self-start`

**Pixel-Perfect Notes:**
- Card: 460x643px, 9px border radius, shadow as per Figma
- Image: 279.48px height, rounded top corners
- Title: Thunder, 20px, bold
- Price: Onest, 18px, medium
- Tag: 7px radius, 1px border #E8E8E8
- Badge: 9px radius, bg #242424, white text
- Spacing: 32px padding (p-8), 8px vertical gaps (gap-y-4)

**Mobile:**
```jsx
<div className="listing-card-mobile">
  <div className="listing-image-mobile" />
  <div className="listing-content-mobile">
    <div className="listing-title-mobile">Tour Title</div>
    <div className="listing-price-mobile">fr $438/pax</div>
    <div className="listing-description-mobile">Description text...</div>
    <div className="listing-tags-mobile">
      <span className="tag-mobile">1-for-1</span>
      <span className="badge-mobile">Best Seller</span>
    </div>
    <button className="view-more-mobile">View More</button>
  </div>
</div>
```
- `listing-card-mobile`: `w-full bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden mb-4`
- `listing-image-mobile`: `w-full h-[172px] bg-cover bg-center rounded-t-[9px]`
- `listing-content-mobile`: `flex flex-col p-4 gap-y-2`
- `listing-title-mobile`: `font-[Thunder] text-[14px] font-bold leading-[1.2em] text-[#242424] mb-1`
- `listing-price-mobile`: `font-[Onest] text-[12px] font-medium text-[#242424] mb-1`
- `listing-description-mobile`: `font-[Onest] text-[13px] text-[#242424] mb-2`
- `listing-tags-mobile`: `flex flex-row gap-x-2 mb-2`
- `tag-mobile`: `bg-[#fff] border border-[#E8E8E8] rounded-[7px] px-2 py-0.5 font-[Onest] text-[12px] text-[#242424]`
- `badge-mobile`: `bg-[#242424] text-white rounded-[9px] px-2 py-0.5 font-[Onest] text-[12px] ml-2`
- `view-more-mobile`: `font-[Onest] text-[12px] text-[#242424] underline mt-auto self-start`

**Pixel-Perfect Notes:**
- Card: full width, 9px radius, 172px image height
- Title: Thunder, 14px, bold
- Tag: 7px radius, 1px border #E8E8E8
- Badge: 9px radius, bg #242424, white text
- Spacing: 16px padding (p-4), 8px vertical gaps (gap-y-2)

---

## Instagram Section
**Description:**
Instagram profile and posts grid, with header (profile, stats, follow button) and post cards.

**Structure (JSX-like):**
```jsx
<section className="instagram-section">
  <div className="instagram-header">
    <div className="profile-pic" />
    <div className="profile-info">
      <div className="profile-name">EUHOLIDAYS</div>
      <div className="profile-handle">@euholidays</div>
      <div className="profile-stats">
        <span>1,490 Posts</span>
        <span>10.8k Followers</span>
        <span>88 Following</span>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  </div>
  <div className="instagram-posts">
    {/* Post cards */}
  </div>
</section>
```

**Tailwind Classes:**
- `instagram-section`: `w-full bg-white py-16 px-8`
- `instagram-header`: `flex flex-row items-center gap-x-8 mb-8`
- `profile-pic`: `w-[80px] h-[80px] rounded-full bg-cover bg-center`
- `profile-info`: `flex flex-col gap-y-2`
- `profile-name`: `font-[Onest] text-[18px] font-bold text-[#242424]`
- `profile-handle`: `font-[Onest] text-[18px] text-[#242424]`
- `profile-stats`: `flex flex-row gap-x-4 text-[18px] text-[#242424]`
- `follow-btn`: `bg-[#242424] text-white rounded-[8px] px-6 py-2 font-[Onest] text-[18px] mt-2`
- `instagram-posts`: `grid grid-cols-4 gap-8`
- `post-card`: `w-[295.27px] h-[301.64px] bg-cover bg-center rounded-[11px]`

**Pixel-Perfect Notes:**
- Profile pic: 80x80px, fully rounded
- Post card: 295.27x301.64px, 11px radius
- Stats: 18px Onest
- Follow button: 8px radius, 24px horizontal padding
- Grid: 4 columns, 32px gap

---

## Newsletter Banner
**Description:**
Banner with background image, title, subtitle, newsletter form, and illustration.

**Structure (JSX-like):**
```jsx
<section className="newsletter-banner">
  <div className="newsletter-bg" />
  <div className="newsletter-content">
    <h2 className="newsletter-title">Go places.</h2>
    <p className="newsletter-subtitle">Sign up for our newsletter...</p>
    <form className="newsletter-form">
      <input className="input-name" placeholder="Your Name*" />
      <input className="input-email" placeholder="Your Email*" />
      <button className="join-btn">Join Newsletter</button>
    </form>
    <div className="newsletter-illustration" />
  </div>
</section>
```

**Tailwind Classes:**
- `newsletter-banner`: `relative w-full h-[1080px] flex items-center justify-center`
- `newsletter-bg`: `absolute inset-0 w-full h-full bg-[url('/newsletter-bg.jpg')] bg-cover bg-center`
- `newsletter-content`: `relative z-10 bg-white rounded-[12px] shadow-lg p-16 flex flex-col items-center max-w-[829px] mx-auto`
- `newsletter-title`: `font-[Thunder] text-[170px] leading-[0.92em] text-[#242424] mb-4`
- `newsletter-subtitle`: `font-[Onest] text-[18px] text-[#242424] mb-8`
- `newsletter-form`: `flex flex-row gap-x-4 w-full mb-8`
- `input-name`, `input-email`: `flex-1 h-[51px] rounded-[8px] bg-[#EFEFEF] px-4 font-[Onest] text-[18px] text-[#242424] border-none`
- `join-btn`: `h-[51px] rounded-[8px] bg-[#242424] text-white px-8 font-[Onest] text-[18px] ml-4`
- `newsletter-illustration`: `w-[736.82px] h-[182.52px] opacity-20 mt-8`

**Pixel-Perfect Notes:**
- Banner: 1080px height
- Content: 829px width, 12px radius, 64px padding (p-16)
- Title: Thunder, 170px, 0.92em
- Form: 51px height, 8px radius, bg #EFEFEF
- Illustration: 736.82x182.52px, 20% opacity

---

## Footer
**Description:**
Footer with background, copyright, link columns, contact info, social icons, and divider.

**Structure (JSX-like):**
```jsx
<footer className="footer">
  <div className="footer-bg" />
  <div className="footer-content">
    <div className="footer-links">
      <div className="footer-col">Links</div>
      <div className="footer-col">Explore</div>
      <div className="footer-col">Policies</div>
      <div className="footer-col">Find Us</div>
    </div>
    <div className="footer-contact">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social">
      <span className="social-icon" />
      {/* ... */}
    </div>
    <div className="footer-divider" />
    <div className="footer-copyright">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links`: `flex flex-row gap-x-16 mb-8`
- `footer-col`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social`: `flex flex-row gap-x-4 mb-8`
- `social-icon`: `w-[20px] h-[20px]`
- `footer-divider`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright`: `font-[Onest] text-[18px]`

**Pixel-Perfect Notes:**
- Footer: 540px height, bg #242424
- Link columns: Thunder, 24px
- Contact: Onest, 18px
- Social icons: 20x20px
- Divider: 1px, #5C5C5C
- Padding: 64px (py-16), 32px (px-8)

**Mobile:**
```jsx
<footer className="footer-mobile">
  <div className="footer-content-mobile">
    <div className="footer-links-mobile">
      <div className="footer-col-mobile">Links</div>
      <div className="footer-col-mobile">Explore</div>
      <div className="footer-col-mobile">Policies</div>
      <div className="footer-col-mobile">Find Us</div>
    </div>
    <div className="footer-contact-mobile">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-mobile">
      <span className="social-icon-mobile" />
      {/* ... */}
    </div>
    <div className="footer-divider-mobile" />
    <div className="footer-copyright-mobile">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```
- `footer-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-mobile`: `w-[20px] h-[20px]`
- `footer-divider-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-mobile`: `font-[Onest] text-[12px]`

**Pixel-Perfect Notes:**
- Footer: stacked, 14px Thunder, 12px Onest, 20px icons
- Divider: 1px, #5C5C5C
- Padding: 32px (py-8), 16px (px-4)

---

## Atomic Components

### Button
- `className`: `rounded-[8px] px-8 py-2 font-[Onest] text-[18px] bg-[#242424] text-white hover:bg-[#1a1a1a] transition`
- Pixel-perfect: 8px radius, 32px horizontal padding, 18px Onest

### Input
- `className`: `h-[51px] rounded-[8px] bg-[#EFEFEF] px-4 font-[Onest] text-[18px] text-[#242424] border-none focus:ring-2 focus:ring-[#242424]`
- Pixel-perfect: 51px height, 8px radius, 18px Onest

### Tag
- `className`: `bg-white border border-[#E8E8E8] rounded-[7px] px-3 py-1 font-[Onest] text-[18px] text-[#242424]`
- Pixel-perfect: 7px radius, 18px Onest

### Badge
- `className`: `bg-[#242424] text-white rounded-[9px] px-3 py-1 font-[Onest] text-[18px]`
- Pixel-perfect: 9px radius, 18px Onest

### Social Icon
- `className`: `w-[20px] h-[20px]`
- Pixel-perfect: 20x20px

### Divider
- `className`: `w-full h-[1px] bg-[#5C5C5C]`
- Pixel-perfect: 1px, #5C5C5C

---

## Atomic Components (Mobile)
- **Button:** `rounded-[8px] px-4 py-2 font-[Onest] text-[13px] bg-[#242424] text-white w-full`
- **Input:** `h-[44px] rounded-[8px] bg-[#EFEFEF] px-3 font-[Onest] text-[13px] text-[#242424] border-none w-full`
- **Tag:** `bg-white border border-[#E8E8E8] rounded-[7px] px-2 py-0.5 font-[Onest] text-[12px] text-[#242424]`
- **Badge:** `bg-[#242424] text-white rounded-[9px] px-2 py-0.5 font-[Onest] text-[12px]`
- **Social Icon:** `w-[20px] h-[20px]`
- **Divider:** `w-full h-[1px] bg-[#5C5C5C]`

---

**Responsive Tailwind Usage:**
- Use `md:`/`lg:` for desktop, default for mobile.
- Example: `text-[14px] md:text-[30px]`, `px-4 md:px-8`, `flex-col md:flex-row`.

// End of mobile-responsive pixel-perfect Tailwind component documentation 