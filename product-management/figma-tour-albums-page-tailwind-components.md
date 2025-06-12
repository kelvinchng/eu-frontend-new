# EU Holidays Tour Albums Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/About style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-tour-albums">
  <div className="logo-tour-albums" />
  <ul className="menu-items-tour-albums">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-tour-albums" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-tour-albums`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-tour-albums`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-tour-albums`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-tour-albums`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-tour-albums-mobile">
  <div className="logo-tour-albums-mobile" />
  <button className="hamburger-tour-albums-mobile" />
</nav>
```
- `navbar-tour-albums-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-tour-albums-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-tour-albums-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Heading & Intro
**Description:**
Section with page title ("Tour Albums") and intro text. Pixel-perfect spacing and typography.

**Structure (JSX-like):**
```jsx
<section className="tour-albums-heading-section">
  <h1 className="tour-albums-title">Tour Albums</h1>
  <div className="tour-albums-intro">Discover the moments our travellers have captured! From iconic landmarks to hidden gems, our tour albums showcase the adventures, laughter, and unforgettable sights experienced on every EU Holidays journey.</div>
</section>
```

**Tailwind Classes:**
- `tour-albums-heading-section`: `w-[1008px] mx-auto mt-[227px] flex flex-col gap-y-4`
- `tour-albums-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] leading-[0.92em] mb-2`
- `tour-albums-intro`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em] mb-4`

**Mobile:**
- `tour-albums-heading-section-mobile`: `w-full px-4 mt-[145px] flex flex-col gap-y-2`
- `tour-albums-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] leading-[0.92em] mb-1`
- `tour-albums-intro-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em] mb-2`

---

## Search & Filter
**Description:**
Search bar and filter tabs for regions/destinations. Pixel-perfect spacing, border, and font.

**Structure (JSX-like):**
```jsx
<div className="tour-albums-search-filter">
  <div className="tour-albums-search">
    <input className="tour-albums-search-input" placeholder="Search Tours" />
    <button className="tour-albums-search-btn">Search</button>
  </div>
  <div className="tour-albums-filter-tabs">
    <button className="tour-albums-tab">All</button>
    <button className="tour-albums-tab">Previous Year</button>
    <button className="tour-albums-tab">Australia</button>
    <button className="tour-albums-tab">New Zealand</button>
    <button className="tour-albums-tab">America</button>
    <button className="tour-albums-tab">Japan</button>
    <button className="tour-albums-tab">Korea</button>
    <button className="tour-albums-tab">Taiwan</button>
    <button className="tour-albums-tab">China</button>
    <button className="tour-albums-tab">Central Europe</button>
    <button className="tour-albums-tab">Eastern Europe</button>
    <button className="tour-albums-tab">Northern Europe</button>
    <button className="tour-albums-tab">Southern Europe</button>
    <button className="tour-albums-tab">Arctic</button>
    <button className="tour-albums-tab">Exotic</button>
  </div>
</div>
```

**Tailwind Classes:**
- `tour-albums-search-filter`: `w-[1190px] mx-auto mt-8 flex flex-col gap-y-6`
- `tour-albums-search`: `flex flex-row gap-x-4 items-center`
- `tour-albums-search-input`: `w-[290.73px] h-[58px] rounded-[9px] border border-[#242424] px-6 font-[Onest] text-[18px] text-[#242424] placeholder:text-[#242424]/75`
- `tour-albums-search-btn`: `w-[151.55px] h-[51px] rounded-[9px] border border-black bg-[#242424] text-white font-[Onest] text-[18px] ml-2`
- `tour-albums-filter-tabs`: `flex flex-row flex-wrap gap-x-4 gap-y-2 mt-4`
- `tour-albums-tab`: `px-6 py-3 rounded-[8px] border border-[#242424] font-[Onest] text-[18px] text-[#242424] bg-white hover:bg-[#242424] hover:text-white transition-colors`

**Mobile:**
- `tour-albums-search-filter-mobile`: `w-full px-4 mt-4 flex flex-col gap-y-4`
- `tour-albums-search-mobile`: `flex flex-row gap-x-2 items-center`
- `tour-albums-search-input-mobile`: `w-[215px] h-[36px] rounded-[9px] border border-[#242424] px-4 font-[Onest] text-[13px] text-[#242424] placeholder:text-[#242424]/75`
- `tour-albums-search-btn-mobile`: `w-[90px] h-[36px] rounded-[4px] border border-black bg-[#242424] text-white font-[Onest] text-[12px] ml-2`
- `tour-albums-filter-tabs-mobile`: `flex flex-row flex-wrap gap-x-2 gap-y-1 mt-2`
- `tour-albums-tab-mobile`: `px-4 py-2 rounded-[8px] border border-[#242424] font-[Onest] text-[13px] text-[#242424] bg-white hover:bg-[#242424] hover:text-white transition-colors`

---

## Tour Albums Grid
**Description:**
Grid of tour album cards, each with background, thumbnail, date, and tour manager. Pixel-perfect grid, card, and image styling.

**Structure (JSX-like):**
```jsx
<div className="tour-albums-grid">
  <div className="tour-album-card">
    <div className="tour-album-card-bg" />
    <img className="tour-album-card-thumbnail" src="/tour-thumbnail.jpg" />
    <div className="tour-album-card-info">
      <div className="tour-album-card-date">Date: 27 January 2025</div>
      <div className="tour-album-card-manager">Tour Manager: Peter Teh</div>
    </div>
  </div>
  {/* ...other albums */}
</div>
```

**Tailwind Classes:**
- `tour-albums-grid`: `grid grid-cols-3 gap-x-8 gap-y-8 w-[1480px] mx-auto mt-16`
- `tour-album-card`: `relative w-[460.95px] h-[415px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-white flex flex-col`
- `tour-album-card-bg`: `absolute inset-0 w-full h-full rounded-[9px] bg-white border border-[#E8E8E8]`
- `tour-album-card-thumbnail`: `w-full h-[303.51px] rounded-t-[9px] object-cover`
- `tour-album-card-info`: `absolute left-[25.8px] bottom-[34px] flex flex-col gap-y-2`
- `tour-album-card-date`: `font-[Onest] font-bold text-[18px] text-[#242424]`
- `tour-album-card-manager`: `font-[Onest] text-[18px] text-[#242424]`

**Mobile:**
- `tour-albums-grid-mobile`: `grid grid-cols-1 gap-y-4 w-[325px] mx-auto mt-8`
- `tour-album-card-mobile`: `relative w-[325px] h-[312px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-white flex flex-col`
- `tour-album-card-bg-mobile`: `absolute inset-0 w-full h-full rounded-[9px] bg-white border border-[#E8E8E8]`
- `tour-album-card-thumbnail-mobile`: `w-full h-[238px] rounded-t-[9px] object-cover`
- `tour-album-card-info-mobile`: `absolute left-[23px] bottom-[22px] flex flex-col gap-y-1`
- `tour-album-card-date-mobile`: `font-[Onest] font-bold text-[13px] text-[#242424]`
- `tour-album-card-manager-mobile`: `font-[Onest] text-[13px] text-[#242424]`

---

## Pagination
**Description:**
Pagination controls for albums grid. Pixel-perfect size, border, and font.

**Structure (JSX-like):**
```jsx
<div className="tour-albums-pagination">
  <button className="tour-albums-pagination-btn">Prev</button>
  <span className="tour-albums-pagination-indicator">1 of 3</span>
  <button className="tour-albums-pagination-btn">Next</button>
</div>
```

**Tailwind Classes:**
- `tour-albums-pagination`: `flex flex-row items-center gap-x-4 w-[324px] mx-auto mt-12`
- `tour-albums-pagination-btn`: `w-[35px] h-[35px] rounded-[4px] bg-[#F2F2F2] flex items-center justify-center border border-[#8C8888] text-[#8C8888] hover:bg-[#242424] hover:text-white transition-colors`
- `tour-albums-pagination-indicator`: `font-[Onest] text-[18px] text-[#242424] tracking-[-2.5%] mx-2`

**Mobile:**
- `tour-albums-pagination-mobile`: `flex flex-row items-center gap-x-2 w-[324px] mx-auto mt-8`
- `tour-albums-pagination-btn-mobile`: `w-[35px] h-[35px] rounded-[4px] bg-[#F2F2F2] flex items-center justify-center border border-[#8C8888] text-[#8C8888] hover:bg-[#242424] hover:text-white transition-colors`
- `tour-albums-pagination-indicator-mobile`: `font-[Onest] text-[13px] text-[#242424] tracking-[-2.5%] mx-1`

---

## Load More Button
**Description:**
Button to load more albums. Pixel-perfect size, border, and font.

**Structure (JSX-like):**
```jsx
<button className="tour-albums-loadmore-btn">Load More</button>
```

**Tailwind Classes:**
- `tour-albums-loadmore-btn`: `w-[169px] h-[51px] rounded-[9px] border border-[#242424] bg-[#242424] text-white font-[Onest] text-[18px] mx-auto mt-8`

**Mobile:**
- `tour-albums-loadmore-btn-mobile`: `w-[169px] h-[51px] rounded-[9px] border border-[#242424] bg-[#242424] text-white font-[Onest] text-[14px] mx-auto mt-4`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-tour-albums">
  <div className="footer-bg-tour-albums" />
  <div className="footer-content-tour-albums">
    <div className="footer-links-tour-albums">
      <div className="footer-col-tour-albums">Links</div>
      <div className="footer-col-tour-albums">Explore</div>
      <div className="footer-col-tour-albums">Policies</div>
      <div className="footer-col-tour-albums">Find Us</div>
    </div>
    <div className="footer-contact-tour-albums">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-tour-albums">
      <span className="social-icon-tour-albums" />
      {/* ... */}
    </div>
    <div className="footer-divider-tour-albums" />
    <div className="footer-copyright-tour-albums">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-tour-albums`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-tour-albums`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-tour-albums`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-tour-albums`: `flex flex-row gap-x-16 mb-8`
- `footer-col-tour-albums`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-tour-albums`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-tour-albums`: `flex flex-row gap-x-4 mb-8`
- `social-icon-tour-albums`: `w-[20px] h-[20px]`
- `footer-divider-tour-albums`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-tour-albums`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-tour-albums-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-tour-albums-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-tour-albums-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-tour-albums-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-tour-albums-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-tour-albums-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-tour-albums-mobile`: `w-[20px] h-[20px]`
- `footer-divider-tour-albums-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-tour-albums-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Tour Albums Page (Desktop & Mobile) 