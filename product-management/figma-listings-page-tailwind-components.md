# EU Holidays Listings Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu for mobile. Matches homepage style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-listings">
  <div className="logo-listings" />
  <ul className="menu-items-listings">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-listings" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-listings`: `w-full h-[102px] bg-white flex items-center px-8 justify-between`
- `logo-listings`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-listings`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-listings`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Pixel-Perfect Notes:**
- Font: Thunder, 27px, 0.92em, 3% tracking
- Logo: 144.95x102px
- Menu item spacing: 32px (gap-x-8)
- Hamburger: 17.12x9.18px, 1.7px stroke, white

**Mobile:**
```jsx
<nav className="navbar-listings-mobile">
  <div className="logo-listings-mobile" />
  <button className="hamburger-listings-mobile" />
</nav>
```
- `navbar-listings-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-listings-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-listings-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Hero Section
**Description:**
Large hero/banner with background image, overlay, and title (e.g., "Tours").

**Structure (JSX-like):**
```jsx
<section className="listings-hero">
  <div className="listings-hero-bg" />
  <div className="listings-hero-content">
    <h1>Tours</h1>
  </div>
</section>
```

**Tailwind Classes:**
- `listings-hero`: `relative w-full h-[838px] flex items-end`
- `listings-hero-bg`: `absolute inset-0 w-full h-full bg-[url('/listings-hero.jpg')] bg-cover bg-center`
- `listings-hero-content`: `relative z-10 px-[220px] pb-[82px]`
- `h1`: `font-[Thunder] text-[110px] leading-[0.92em] tracking-[.01em] text-white`

**Pixel-Perfect Notes:**
- Banner: 1920x838px
- Title: Thunder, 110px, 0.92em, 1% tracking
- Padding: 220px left, 82px bottom

**Mobile:**
```jsx
<section className="listings-hero-mobile">
  <div className="listings-hero-bg-mobile" />
  <div className="listings-hero-content-mobile">
    <h1>Tours</h1>
  </div>
</section>
```
- `listings-hero-mobile`: `relative w-full h-[409px] flex items-end`
- `listings-hero-bg-mobile`: `absolute inset-0 w-full h-full bg-[url('/listings-hero-mobile.jpg')] bg-cover bg-center`
- `listings-hero-content-mobile`: `relative z-10 px-4 pb-8`
- `h1`: `font-[Thunder] text-[46px] leading-[0.92em] tracking-[.01em] text-white`

---

## Filter Bar
**Description:**
A horizontal filter/search bar with dropdowns, date pickers, and a search button. On mobile, this becomes a vertical stack with touch-friendly controls.

**Structure (JSX-like):**
```jsx
<div className="filter-bar">
  <div className="filter-item">Destination</div>
  <div className="filter-item">From</div>
  <div className="filter-item">To</div>
  <div className="filter-item">Type of Holiday</div>
  <div className="filter-item">Duration</div>
  <div className="filter-item">Sort By</div>
  <button className="search-btn">Search</button>
  <button className="clear-btn">Clear Filters</button>
</div>
```

**Tailwind Classes:**
- `filter-bar`: `w-full flex flex-row items-center gap-x-6 px-[333px] py-8 bg-white shadow`
- `filter-item`: `flex flex-col gap-y-1 font-[Onest] text-[18px] text-[#242424]`
- `search-btn`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#242424] text-white ml-4`
- `clear-btn`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] border border-black ml-2`

**Pixel-Perfect Notes:**
- Filter bar: 1255px width, 223px height (desktop)
- Button: 9px radius, 32px padding
- Font: Onest, 18px

**Mobile:**
```jsx
<div className="filter-bar-mobile">
  <div className="filter-header-mobile">
    <span className="filter-icon-mobile" />
    <span>Filter</span>
  </div>
  <div className="filter-settings-mobile">
    {/* Each filter as a stacked row */}
    <div className="filter-item-mobile">Destination</div>
    <div className="filter-item-mobile">From</div>
    <div className="filter-item-mobile">To</div>
    <div className="filter-item-mobile">Type of Holiday</div>
    <div className="filter-item-mobile">Duration</div>
    <div className="filter-item-mobile">Sort By</div>
    <button className="search-btn-mobile">Search</button>
    <button className="clear-btn-mobile">Clear Filters</button>
  </div>
</div>
```
- `filter-bar-mobile`: `w-full flex flex-col px-4 py-4 bg-white`
- `filter-header-mobile`: `flex flex-row items-center gap-x-2 mb-4`
- `filter-icon-mobile`: `w-4 h-4`
- `filter-settings-mobile`: `flex flex-col gap-y-2`
- `filter-item-mobile`: `font-[Onest] text-[13px] text-[#242424] py-2 border-b border-[#E8E8E8]`
- `search-btn-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-[#242424] text-white mt-2`
- `clear-btn-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] border border-black mt-2`

---

## Listings Grid
**Description:**
Grid of tour listing cards. On desktop, 3 per row; on mobile, single column.

**Structure (JSX-like):**
```jsx
<div className="listings-grid">
  {/* ListingCard for each tour */}
</div>
```

**Tailwind Classes:**
- `listings-grid`: `grid grid-cols-3 gap-x-8 gap-y-12 px-[220px] py-12`

**Mobile:**
- `listings-grid-mobile`: `flex flex-col gap-y-4 px-4 py-4`

---

## Listing Card
**Description:**
Card for each tour, with image, title, price, description, tags, badges, and view more button.

**Structure (JSX-like):**
```jsx
<div className="listing-card">
  <div className="listing-image" />
  <div className="listing-content">
    <div className="listing-title">Tour Title</div>
    <div className="listing-price">fr $438/pax</div>
    <div className="listing-description">Description text</div>
    <div className="listing-tags">
      <span className="tag">1-for-1</span>
      <span className="badge">Best Seller</span>
    </div>
    <div className="view-more">View More <span className="arrow-icon" /></div>
  </div>
</div>
```

**Tailwind Classes:**
- `listing-card`: `w-[460px] h-[643px] bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden`
- `listing-image`: `w-full h-[279.48px] bg-cover bg-center rounded-t-[9px]`
- `listing-content`: `flex flex-col p-8 gap-y-4`
- `listing-title`: `font-[Onest] text-[20px] font-bold leading-[1.275em] text-[#242424] mb-2`
- `listing-price`: `font-[Onest] text-[18px] font-medium text-[#242424] mb-2`
- `listing-description`: `font-[Onest] text-[18px] text-[#242424] mb-4`
- `listing-tags`: `flex flex-row gap-x-2 mb-4`
- `tag`: `bg-white border border-[#E8E8E8] rounded-[7px] px-3 py-1 font-[Onest] text-[18px] text-[#242424]`
- `badge`: `bg-[#242424] text-white rounded-[9px] px-3 py-1 font-[Onest] text-[18px] ml-2`
- `view-more`: `font-[Onest] text-[18px] text-[#242424] underline mt-auto self-start flex items-center gap-x-1 cursor-pointer`
- `arrow-icon`: `w-2 h-2`

**Mobile:**
- `listing-card-mobile`: `w-full bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden mb-4`
- `listing-image-mobile`: `w-full h-[172px] bg-cover bg-center rounded-t-[9px]`
- `listing-content-mobile`: `flex flex-col p-4 gap-y-2`
- `listing-title-mobile`: `font-[Onest] text-[15px] font-bold leading-[1.2em] text-[#242424] mb-1`
- `listing-price-mobile`: `font-[Onest] text-[13px] font-medium text-[#242424] mb-1`
- `listing-description-mobile`: `font-[Onest] text-[13px] text-[#242424] mb-2`
- `listing-tags-mobile`: `flex flex-row gap-x-2 mb-2`
- `tag-mobile`: `bg-white border border-[#E8E8E8] rounded-[7px] px-2 py-0.5 font-[Onest] text-[12px] text-[#242424]`
- `badge-mobile`: `bg-[#242424] text-white rounded-[9px] px-2 py-0.5 font-[Onest] text-[12px] ml-2`
- `view-more-mobile`: `font-[Onest] text-[12px] text-[#242424] underline mt-auto self-start flex items-center gap-x-1 cursor-pointer`
- `arrow-icon-mobile`: `w-2 h-2`

---

## Pagination
**Description:**
Pagination controls for navigating between pages of listings.

**Structure (JSX-like):**
```jsx
<div className="pagination">
  <button className="pagination-btn prev" />
  <span className="pagination-info">1 of 15</span>
  <button className="pagination-btn next" />
</div>
```

**Tailwind Classes:**
- `pagination`: `flex flex-row items-center justify-center gap-x-4 mt-8`
- `pagination-btn`: `w-[35px] h-[35px] bg-[#F2F2F2] rounded-[4px] flex items-center justify-center border border-[#8C8888]`
- `pagination-info`: `font-[Onest] text-[18px] text-[#242424]`

**Mobile:**
- `pagination-mobile`: `flex flex-row items-center justify-center gap-x-2 mt-4`
- `pagination-btn-mobile`: `w-[35px] h-[35px] bg-[#F2F2F2] rounded-[4px] flex items-center justify-center border border-[#8C8888]`
- `pagination-info-mobile`: `font-[Onest] text-[12px] text-[#242424]`

---

## Footer
**Description:**
Footer with background, copyright, link columns, contact info, social icons, and divider.

**Structure (JSX-like):**
```jsx
<footer className="footer-listings">
  <div className="footer-bg-listings" />
  <div className="footer-content-listings">
    <div className="footer-links-listings">
      <div className="footer-col-listings">Links</div>
      <div className="footer-col-listings">Explore</div>
      <div className="footer-col-listings">Policies</div>
      <div className="footer-col-listings">Find Us</div>
    </div>
    <div className="footer-contact-listings">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-listings">
      <span className="social-icon-listings" />
      {/* ... */}
    </div>
    <div className="footer-divider-listings" />
    <div className="footer-copyright-listings">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-listings`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-listings`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-listings`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-listings`: `flex flex-row gap-x-16 mb-8`
- `footer-col-listings`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-listings`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-listings`: `flex flex-row gap-x-4 mb-8`
- `social-icon-listings`: `w-[20px] h-[20px]`
- `footer-divider-listings`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-listings`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-listings-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-listings-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-listings-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-listings-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-listings-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-listings-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-listings-mobile`: `w-[20px] h-[20px]`
- `footer-divider-listings-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-listings-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Listings Page (Desktop & Mobile) 