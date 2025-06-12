# EU Holidays Awards Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/About style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-awards">
  <div className="logo-awards" />
  <ul className="menu-items-awards">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-awards" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-awards`: `w-full h-[102px] bg-white flex items-center px-8 justify-between`
- `logo-awards`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-awards`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-awards`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-awards-mobile">
  <div className="logo-awards-mobile" />
  <button className="hamburger-awards-mobile" />
</nav>
```
- `navbar-awards-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-awards-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-awards-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Banner
**Description:**
Large hero banner with background image, gradient overlay, and title "Awards". Strictly matches Figma pixel values, fonts, and colors.

**Structure (JSX-like):**
```jsx
<section className="awards-banner">
  <div className="awards-banner-bg" />
  <div className="awards-banner-gradient" />
  <h1 className="awards-banner-title">Awards</h1>
</section>
```

**Tailwind Classes:**
- `awards-banner`: `relative w-full h-[838px] flex items-end justify-start`
- `awards-banner-bg`: `absolute inset-0 w-full h-full bg-cover bg-center bg-[url('/awards-banner.jpg')]`
- `awards-banner-gradient`: `absolute inset-0 bg-gradient-to-b from-black/70 via-[#242424]/60 to-black/75`
- `awards-banner-title`: `relative z-10 font-[Thunder] text-[110px] leading-[0.92em] tracking-[.01em] text-white ml-[220px] mb-[82px] uppercase`

**Mobile:**
- `awards-banner-mobile`: `relative w-full h-[409px] flex items-end justify-start`
- `awards-banner-bg-mobile`: `absolute inset-0 w-full h-full bg-cover bg-center bg-[url('/awards-banner-mobile.jpg')]`
- `awards-banner-gradient-mobile`: `absolute inset-0 bg-gradient-to-b from-black/70 via-[#242424]/60 to-black/75`
- `awards-banner-title-mobile`: `relative z-10 font-[Thunder] text-[46px] leading-[0.92em] tracking-[.01em] text-white ml-[34px] mb-[43px] uppercase`

---

## Filter Tabs
**Description:**
Tabs for filtering awards by year. Pixel-perfect spacing, rounded corners, and font.

**Structure (JSX-like):**
```jsx
<div className="awards-filter-tabs">
  <button className="awards-tab active">All</button>
  <button className="awards-tab">2025</button>
  <button className="awards-tab">2024</button>
  <button className="awards-tab">2023</button>
  <button className="awards-tab">2022</button>
  <button className="awards-tab">2021</button>
  <button className="awards-tab">2020</button>
</div>
```

**Tailwind Classes:**
- `awards-filter-tabs`: `flex flex-row gap-x-7 mt-[68px] ml-[220px]`
- `awards-tab`: `w-[98px] h-[56px] rounded-[8px] border border-[#242424] font-[Onest] text-[18px] text-[#242424] flex items-center justify-center transition-colors hover:bg-[#242424] hover:text-white`
- `awards-tab.active`: `bg-[#242424] text-white border-white`

**Mobile:**
- `awards-filter-tabs-mobile`: `flex flex-row gap-x-2 mt-8 ml-4`
- `awards-tab-mobile`: `w-[69px] h-[36px] rounded-[8px] border border-[#242424] font-[Onest] text-[13px] text-[#242424] flex items-center justify-center transition-colors hover:bg-[#242424] hover:text-white`
- `awards-tab-mobile.active`: `bg-[#242424] text-white border-white`

---

## Awards Grid
**Description:**
Grid of award cards, each with image, background, and shadow. Pixel-perfect grid, card, and image styling.

**Structure (JSX-like):**
```jsx
<div className="awards-grid">
  <div className="award-card">
    <div className="award-card-bg" />
    <img className="award-card-img" src="/award1.png" />
  </div>
  {/* ...other awards */}
</div>
```

**Tailwind Classes:**
- `awards-grid`: `grid grid-cols-5 gap-x-[61px] gap-y-[61px] w-[1480px] mx-auto mt-[61px]`
- `award-card`: `relative w-[247.22px] h-[290px] rounded-[9px] shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] bg-white flex items-center justify-center`
- `award-card-bg`: `absolute inset-0 w-full h-full rounded-[9px] bg-white`
- `award-card-img`: `relative z-10 w-[181.1px] h-[256.91px] object-contain mx-auto my-auto`

**Mobile:**
- `awards-grid-mobile`: `grid grid-cols-2 gap-x-2 gap-y-4 w-[325px] mx-auto mt-8`
- `award-card-mobile`: `relative w-[149px] h-[162px] rounded-[9px] shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] bg-white flex items-center justify-center`
- `award-card-bg-mobile`: `absolute inset-0 w-full h-full rounded-[9px] bg-white`
- `award-card-img-mobile`: `relative z-10 w-[105.08px] h-[149.07px] object-contain mx-auto my-auto`

---

## Pagination
**Description:**
Pagination controls for awards grid. Pixel-perfect size, border, and font.

**Structure (JSX-like):**
```jsx
<div className="awards-pagination">
  <button className="awards-pagination-btn">Prev</button>
  <span className="awards-pagination-indicator">1 of 15</span>
  <button className="awards-pagination-btn">Next</button>
</div>
```

**Tailwind Classes:**
- `awards-pagination`: `flex flex-row items-center gap-x-4 w-[284px] mx-auto mt-12`
- `awards-pagination-btn`: `w-[35px] h-[35px] rounded-[4px] bg-[#F2F2F2] flex items-center justify-center border border-[#8C8888] text-[#8C8888] hover:bg-[#242424] hover:text-white transition-colors`
- `awards-pagination-indicator`: `font-[Onest] text-[18px] text-[#242424] tracking-[-2.5%] mx-2`

**Mobile:**
- `awards-pagination-mobile`: `flex flex-row items-center gap-x-2 w-[325px] mx-auto mt-8`
- `awards-pagination-btn-mobile`: `w-[35px] h-[35px] rounded-[4px] bg-[#F2F2F2] flex items-center justify-center border border-[#8C8888] text-[#8C8888] hover:bg-[#242424] hover:text-white transition-colors`
- `awards-pagination-indicator-mobile`: `font-[Onest] text-[13px] text-[#242424] tracking-[-2.5%] mx-1`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-awards">
  <div className="footer-bg-awards" />
  <div className="footer-content-awards">
    <div className="footer-links-awards">
      <div className="footer-col-awards">Links</div>
      <div className="footer-col-awards">Explore</div>
      <div className="footer-col-awards">Policies</div>
      <div className="footer-col-awards">Find Us</div>
    </div>
    <div className="footer-contact-awards">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-awards">
      <span className="social-icon-awards" />
      {/* ... */}
    </div>
    <div className="footer-divider-awards" />
    <div className="footer-copyright-awards">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-awards`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-awards`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-awards`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-awards`: `flex flex-row gap-x-16 mb-8`
- `footer-col-awards`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-awards`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-awards`: `flex flex-row gap-x-4 mb-8`
- `social-icon-awards`: `w-[20px] h-[20px]`
- `footer-divider-awards`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-awards`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-awards-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-awards-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-awards-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-awards-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-awards-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-awards-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-awards-mobile`: `w-[20px] h-[20px]`
- `footer-divider-awards-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-awards-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Awards Page (Desktop & Mobile) 