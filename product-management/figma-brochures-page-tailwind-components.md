# EU Holidays Brochures Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/About style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-brochures">
  <div className="logo-brochures" />
  <ul className="menu-items-brochures">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-brochures" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-brochures`: `w-full h-[121.6px] bg-[#242424] flex items-center px-8 justify-between`
- `logo-brochures`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-brochures`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-white uppercase`
- `hamburger-menu-brochures`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-brochures-mobile">
  <div className="logo-brochures-mobile" />
  <button className="hamburger-brochures-mobile" />
</nav>
```
- `navbar-brochures-mobile`: `w-full h-[50.33px] bg-[#242424] flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-brochures-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-brochures-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Heading
**Description:**
Section with page title ("View Our Brochures") and description. Pixel-perfect spacing and typography.

**Structure (JSX-like):**
```jsx
<section className="brochures-heading-section">
  <h1 className="brochures-title">View Our Brochures</h1>
  <p className="brochures-desc">Get access to our latest brochures in two different ways: download a digital copy or view them instantly in your browser.</p>
</section>
```

**Tailwind Classes:**
- `brochures-heading-section`: `w-[1018px] mx-auto mt-[227px] flex flex-col gap-y-4`
- `brochures-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] leading-[0.92em] mb-2`
- `brochures-desc`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em]`

**Mobile:**
- `brochures-heading-section-mobile`: `w-full px-4 mt-[145px] flex flex-col gap-y-2`
- `brochures-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] leading-[0.92em] mb-1`
- `brochures-desc-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em]`

---

## Brochures Grid
**Description:**
Grid of brochure cards, each with image, title, and two tags (View, Download). Pixel-perfect card, tag, and image styling.

**Structure (JSX-like):**
```jsx
<section className="brochures-grid-section">
  <div className="brochures-grid">
    {/* Repeat for each brochure */}
    <div className="brochure-card">
      <div className="brochure-image-wrapper">
        <img className="brochure-image" src="/brochure-australia.jpg" />
      </div>
      <div className="brochure-tag brochure-tag-view">View</div>
      <div className="brochure-tag brochure-tag-download">Download</div>
      <div className="brochure-title">Australia (Nov 2024 - Mar 2025)</div>
    </div>
    {/* ...more cards */}
  </div>
</section>
```

**Tailwind Classes:**
- `brochures-grid-section`: `w-[1497.5px] mx-auto mt-16 flex flex-col gap-y-12`
- `brochures-grid`: `flex flex-row flex-wrap gap-x-12 gap-y-12`
- `brochure-card`: `relative w-[261.1px] h-[476px] flex flex-col items-center bg-white rounded-[20px] shadow-[0_0_0_1px_rgba(14,63,126,0.06),0_1px_2px_0_rgba(42,51,70,0.04),0_5px_10px_-2px_rgba(42,51,70,0.03),0_24px_24px_0_rgba(42,51,70,0.03)]`
- `brochure-image-wrapper`: `w-full h-[337px] rounded-[20px] overflow-hidden`
- `brochure-image`: `w-full h-full object-cover`
- `brochure-tag`: `absolute left-0 w-full h-[32px] rounded-[9px] flex items-center justify-center font-[Onest] text-[15px] top-[405px]`
- `brochure-tag-view`: `bg-[#242424] text-white top-[405px]`
- `brochure-tag-download`: `bg-white border border-[#242424] text-[#242424] top-[444px]`
- `brochure-title`: `font-[Onest] text-[18px] font-bold text-[#242424] text-center mt-4 leading-[1.27em]`

**Mobile:**
- `brochures-grid-section-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-8`
- `brochures-grid-mobile`: `flex flex-wrap gap-x-4 gap-y-8`
- `brochure-card-mobile`: `relative w-[141px] h-[298px] flex flex-col items-center bg-white rounded-[20px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)]`
- `brochure-image-wrapper-mobile`: `w-full h-[186px] rounded-[20px] overflow-hidden`
- `brochure-image-mobile`: `w-full h-full object-cover`
- `brochure-tag-mobile`: `absolute left-0 w-full h-[30px] rounded-[9px] flex items-center justify-center font-[Onest] text-[12px] top-[232px]`
- `brochure-tag-view-mobile`: `bg-[#242424] text-white top-[232px]`
- `brochure-tag-download-mobile`: `bg-white border border-[#242424] text-[#242424] top-[268px]`
- `brochure-title-mobile`: `font-[Onest] text-[13px] font-bold text-[#242424] text-center mt-2 leading-[1.27em]`

---

## Pagination
**Description:**
Pagination controls for brochure grid. Pixel-perfect size, border, and font.

**Structure (JSX-like):**
```jsx
<div className="brochures-pagination">
  <button className="pagination-btn prev" />
  <span className="pagination-info">1 of 3</span>
  <button className="pagination-btn next" />
</div>
```

**Tailwind Classes:**
- `brochures-pagination`: `w-full flex flex-row items-center justify-center gap-x-4 mt-8`
- `pagination-btn`: `w-[35px] h-[35px] rounded-[4px] bg-[#F2F2F2] flex items-center justify-center border border-[#8C8888]`
- `pagination-info`: `font-[Onest] text-[13px] text-[#242424]`

**Mobile:**
- `brochures-pagination-mobile`: `w-full flex flex-row items-center justify-center gap-x-2 mt-4`
- `pagination-btn-mobile`: `w-[35px] h-[35px] rounded-[4px] bg-[#F2F2F2] flex items-center justify-center border border-[#8C8888]`
- `pagination-info-mobile`: `font-[Onest] text-[13px] text-[#242424]`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-brochures">
  <div className="footer-bg-brochures" />
  <div className="footer-content-brochures">
    <div className="footer-links-brochures">
      <div className="footer-col-brochures">Links</div>
      <div className="footer-col-brochures">Explore</div>
      <div className="footer-col-brochures">Policies</div>
      <div className="footer-col-brochures">Find Us</div>
    </div>
    <div className="footer-contact-brochures">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-brochures">
      <span className="social-icon-brochures" />
      {/* ... */}
    </div>
    <div className="footer-divider-brochures" />
    <div className="footer-copyright-brochures">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-brochures`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-brochures`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-brochures`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-brochures`: `flex flex-row gap-x-16 mb-8`
- `footer-col-brochures`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-brochures`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-brochures`: `flex flex-row gap-x-4 mb-8`
- `social-icon-brochures`: `w-[20px] h-[20px]`
- `footer-divider-brochures`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-brochures`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-brochures-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-brochures-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-brochures-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-brochures-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-brochures-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-brochures-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-brochures-mobile`: `w-[20px] h-[20px]`
- `footer-divider-brochures-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-brochures-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Brochures Page (Desktop & Mobile) 