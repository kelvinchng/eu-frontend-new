# EU Holidays Booking Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu for mobile. Matches homepage style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-booking">
  <div className="logo-booking" />
  <ul className="menu-items-booking">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-booking" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-booking`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-booking`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-booking`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-booking`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-booking-mobile">
  <div className="logo-booking-mobile" />
  <button className="hamburger-booking-mobile" />
</nav>
```
- `navbar-booking-mobile`: `w-full h-[110px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-booking-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-booking-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Title Section
**Description:**
Section with breadcrumbs, tour title, code, description, and action buttons (Enquire, Book, Download Itinerary).

**Structure (JSX-like):**
```jsx
<section className="title-section-booking">
  <div className="breadcrumbs-booking">
    <span>Switzerland Tours</span>
    <span className="arrow-icon-booking" />
    <span>11D8N Switzerland Dream (Apr - Oct)</span>
  </div>
  <h1 className="tour-title-booking">11D8N SWITZERLAND DREAM (APR - OCT)</h1>
  <div className="tour-details-booking">
    <span>Tour Code : ECSBTS</span>
    <span className="tour-desc-booking">Sunkissed Switzerland is an equally dreamy destination...</span>
  </div>
  <div className="action-buttons-booking">
    <button className="enquire-btn-booking">Enquire More</button>
    <button className="book-btn-booking">Book Now</button>
    <button className="download-btn-booking">Download Itinerary</button>
  </div>
</section>
```

**Tailwind Classes:**
- `title-section-booking`: `w-full max-w-[1480px] mx-auto px-[220px] py-12 flex flex-col gap-y-4`
- `breadcrumbs-booking`: `flex flex-row items-center gap-x-2 text-[20px] font-[Onest] text-[#242424]`
- `arrow-icon-booking`: `w-2 h-2 mx-1`
- `tour-title-booking`: `font-[Thunder] text-[50px] leading-[0.92em] font-medium text-[#242424] mb-2`
- `tour-details-booking`: `flex flex-row gap-x-4 text-[18px] font-[Onest] text-[#242424]`
- `tour-desc-booking`: `text-[18px] font-[Onest] text-[#242424]`
- `action-buttons-booking`: `flex flex-row gap-x-4 mt-4`
- `enquire-btn-booking`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#D9D9D9] border border-[#242424]`
- `book-btn-booking`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#242424] text-white`
- `download-btn-booking`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#D9D9D9] border border-[#242424]`

**Mobile:**
- `title-section-booking-mobile`: `w-full px-4 py-4 flex flex-col gap-y-2`
- `breadcrumbs-booking-mobile`: `flex flex-row items-center gap-x-1 text-[13px] font-[Onest] text-[#242424]`
- `tour-title-booking-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] font-medium text-[#242424] mb-1`
- `tour-details-booking-mobile`: `flex flex-row gap-x-2 text-[13px] font-[Onest] text-[#242424]`
- `tour-desc-booking-mobile`: `text-[13px] font-[Onest] text-[#242424]`
- `action-buttons-booking-mobile`: `flex flex-row gap-x-2 mt-2`
- `enquire-btn-booking-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-white border border-[#242424]`
- `book-btn-booking-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-[#242424] text-white`
- `download-btn-booking-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-white border border-[#242424]`

---

## Gallery
**Description:**
Image gallery with main and supporting images, rounded corners, and subtle shadow.

**Structure (JSX-like):**
```jsx
<div className="gallery-booking">
  <div className="main-image-booking" />
  <div className="gallery-row-booking">
    <div className="gallery-image-booking" />
    <div className="gallery-image-booking" />
  </div>
</div>
```

**Tailwind Classes:**
- `gallery-booking`: `flex flex-row gap-x-4 w-full max-w-[1480px] mx-auto px-[220px] py-8`
- `main-image-booking`: `w-[980px] h-[705px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-cover bg-center`
- `gallery-row-booking`: `flex flex-col gap-y-4`
- `gallery-image-booking`: `w-[480px] h-[344px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-cover bg-center`

**Mobile:**
- `gallery-booking-mobile`: `flex flex-col gap-y-2 w-full px-4 py-4`
- `main-image-booking-mobile`: `w-full h-[263px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-cover bg-center`
- `gallery-row-booking-mobile`: `flex flex-row gap-x-2`
- `gallery-image-booking-mobile`: `w-[159px] h-[159px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-cover bg-center`

---

## View Flights & Packages
**Description:**
Section with a table of flight and package details, including prices, dates, sectors, and action buttons (Book Now, Enquire, View More Info). Pixel-perfect for both desktop and mobile.

**Structure (JSX-like):**
```jsx
<section className="flights-packages-section">
  <h2 className="flights-packages-title">View Flights & Packages</h2>
  <div className="flights-packages-table">
    {/* Table rows for each flight/package */}
  </div>
</section>
```

**Tailwind Classes:**
- `flights-packages-section`: `w-full max-w-[1480px] mx-auto px-[220px] py-12 flex flex-col gap-y-8`
- `flights-packages-title`: `font-[Thunder] text-[50px] leading-[0.92em] text-[#242424] mb-8`
- `flights-packages-table`: `w-full bg-white rounded-[9px] shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] p-8 flex flex-col gap-y-4`
- `flight-row`: `flex flex-row items-center gap-x-4 border-b border-[#E8E8E8] py-4`
- `flight-cell`: `font-[Onest] text-[18px] text-[#242424]`
- `flight-action-btn`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#242424] text-white`
- `flight-enquire-btn`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#D9D9D9] border border-[#242424]`
- `flight-viewmore-btn`: `font-[Onest] text-[18px] text-[#242424] underline cursor-pointer`

**Mobile:**
- `flights-packages-section-mobile`: `w-full px-4 py-4 flex flex-col gap-y-4`
- `flights-packages-title-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] text-[#242424] mb-4`
- `flights-packages-table-mobile`: `w-full bg-white rounded-[4px] shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] p-2 flex flex-col gap-y-2`
- `flight-row-mobile`: `flex flex-col gap-y-1 border-b border-[#E8E8E8] py-2`
- `flight-cell-mobile`: `font-[Onest] text-[13px] text-[#242424]`
- `flight-action-btn-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-[#242424] text-white`
- `flight-enquire-btn-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-white border border-[#242424]`
- `flight-viewmore-btn-mobile`: `font-[Onest] text-[12px] text-[#242424] underline cursor-pointer`

---

## Filter Bar
**Description:**
Bar for filtering and sorting flights/packages by airline, price, date, etc. Includes dropdowns and sort icons.

**Structure (JSX-like):**
```jsx
<div className="filter-bar-booking">
  <div className="filter-dropdown">All Airlines</div>
  <div className="filter-sort">Price</div>
  <div className="filter-sort">Date</div>
</div>
```

**Tailwind Classes:**
- `filter-bar-booking`: `w-full max-w-[1480px] mx-auto px-[220px] py-4 flex flex-row gap-x-4 items-center`
- `filter-dropdown`: `rounded-[9px] px-6 py-2 border border-[#242424] font-[Onest] text-[18px] bg-white`
- `filter-sort`: `flex flex-row items-center gap-x-2 font-[Onest] text-[18px] cursor-pointer`

**Mobile:**
- `filter-bar-booking-mobile`: `w-full px-4 py-2 flex flex-row gap-x-2 items-center`
- `filter-dropdown-mobile`: `rounded-[4px] px-2 py-1 border border-[#242424] font-[Onest] text-[13px] bg-white`
- `filter-sort-mobile`: `flex flex-row items-center gap-x-1 font-[Onest] text-[13px] cursor-pointer`

---

## Listings
**Description:**
Grid of listing cards for available tours/packages. Each card includes image, title, price, description, tags, badges, and view more button.

**Structure (JSX-like):**
```jsx
<div className="listings-booking">
  {/* ListingCard for each tour/package */}
</div>
```

**Tailwind Classes:**
- `listings-booking`: `w-full max-w-[1480px] mx-auto px-[220px] py-12 grid grid-cols-3 gap-8`
- `listing-card-booking`: `w-full bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden`
- `listing-image-booking`: `w-full h-[279.48px] bg-cover bg-center rounded-t-[9px]`
- `listing-content-booking`: `flex flex-col p-8 gap-y-4`
- `listing-title-booking`: `font-[Onest] text-[20px] font-bold leading-[1.275em] text-[#242424] mb-2`
- `listing-price-booking`: `font-[Onest] text-[18px] font-medium text-[#242424] mb-2`
- `listing-description-booking`: `font-[Onest] text-[18px] text-[#242424] mb-4`
- `listing-tags-booking`: `flex flex-row gap-x-2 mb-4`
- `tag-booking`: `bg-white border border-[#E8E8E8] rounded-[7px] px-3 py-1 font-[Onest] text-[18px] text-[#242424]`
- `badge-booking`: `bg-[#242424] text-white rounded-[9px] px-3 py-1 font-[Onest] text-[18px] ml-2`
- `view-more-booking`: `font-[Onest] text-[18px] text-[#242424] underline mt-auto self-start flex items-center gap-x-1 cursor-pointer`
- `arrow-icon-booking`: `w-2 h-2`

**Mobile:**
- `listings-booking-mobile`: `w-full px-4 py-4 flex flex-col gap-y-4`
- `listing-card-booking-mobile`: `w-full bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden mb-4`
- `listing-image-booking-mobile`: `w-full h-[172px] bg-cover bg-center rounded-t-[9px]`
- `listing-content-booking-mobile`: `flex flex-col p-4 gap-y-2`
- `listing-title-booking-mobile`: `font-[Onest] text-[15px] font-bold leading-[1.2em] text-[#242424] mb-1`
- `listing-price-booking-mobile`: `font-[Onest] text-[13px] font-medium text-[#242424] mb-1`
- `listing-description-booking-mobile`: `font-[Onest] text-[13px] text-[#242424] mb-2`
- `listing-tags-booking-mobile`: `flex flex-row gap-x-2 mb-2`
- `tag-booking-mobile`: `bg-white border border-[#E8E8E8] rounded-[7px] px-2 py-0.5 font-[Onest] text-[12px] text-[#242424]`
- `badge-booking-mobile`: `bg-[#242424] text-white rounded-[9px] px-2 py-0.5 font-[Onest] text-[12px] ml-2`
- `view-more-booking-mobile`: `font-[Onest] text-[12px] text-[#242424] underline mt-auto self-start flex items-center gap-x-1 cursor-pointer`
- `arrow-icon-booking-mobile`: `w-2 h-2`

---

## Related Tours
**Description:**
Section with a horizontal row of listing cards for related tours.

**Structure (JSX-like):**
```jsx
<section className="related-tours-booking">
  <h2>Related Tours You Might Like</h2>
  <div className="related-tours-row-booking">
    {/* ListingCard for each related tour */}
  </div>
</section>
```

**Tailwind Classes:**
- `related-tours-booking`: `w-full max-w-[1480px] mx-auto px-[220px] py-12`
- `h2`: `font-[Thunder] text-[50px] leading-[0.92em] text-[#242424] mb-4`
- `related-tours-row-booking`: `flex flex-row gap-x-8`

**Mobile:**
- `related-tours-booking-mobile`: `w-full px-4 py-4`
- `h2-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] text-[#242424] mb-2`
- `related-tours-row-booking-mobile`: `flex flex-col gap-y-2`

---

## Footer
**Description:**
Footer with background, copyright, link columns, contact info, social icons, and divider.

**Structure (JSX-like):**
```jsx
<footer className="footer-booking">
  <div className="footer-bg-booking" />
  <div className="footer-content-booking">
    <div className="footer-links-booking">
      <div className="footer-col-booking">Links</div>
      <div className="footer-col-booking">Explore</div>
      <div className="footer-col-booking">Policies</div>
      <div className="footer-col-booking">Find Us</div>
    </div>
    <div className="footer-contact-booking">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-booking">
      <span className="social-icon-booking" />
      {/* ... */}
    </div>
    <div className="footer-divider-booking" />
    <div className="footer-copyright-booking">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-booking`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-booking`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-booking`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-booking`: `flex flex-row gap-x-16 mb-8`
- `footer-col-booking`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-booking`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-booking`: `flex flex-row gap-x-4 mb-8`
- `social-icon-booking`: `w-[20px] h-[20px]`
- `footer-divider-booking`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-booking`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-booking-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-booking-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-booking-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-booking-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-booking-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-booking-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-booking-mobile`: `w-[20px] h-[20px]`
- `footer-divider-booking-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-booking-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Booking Page (Desktop & Mobile) 