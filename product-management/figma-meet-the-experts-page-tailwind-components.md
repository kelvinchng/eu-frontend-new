# EU Holidays Meet The Experts Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/About style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-experts">
  <div className="logo-experts" />
  <ul className="menu-items-experts">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-experts" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-experts`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-experts`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-experts`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-experts`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-experts-mobile">
  <div className="logo-experts-mobile" />
  <button className="hamburger-experts-mobile" />
</nav>
```
- `navbar-experts-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-experts-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-experts-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Heading
**Description:**
Section with page title and subtitle. Pixel-perfect spacing and typography.

**Structure (JSX-like):**
```jsx
<section className="experts-heading">
  <h1 className="experts-title">Meet The Experts</h1>
  <p className="experts-subtitle">Our tour managers ensure every trip runs smoothly, drawing on deep destination knowledge and a strong focus on service quality.</p>
</section>
```

**Tailwind Classes:**
- `experts-heading`: `w-[1480px] mx-auto mt-24 flex flex-col gap-y-2`
- `experts-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] mb-2`
- `experts-subtitle`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em]`

**Mobile:**
- `experts-heading-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-1`
- `experts-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] mb-1`
- `experts-subtitle-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em]`

---

## Experts Grid
**Description:**
Grid of expert cards, each with image, name, reviews, and description. Pixel-perfect grid, spacing, and font. Cards have rounded corners and border.

**Structure (JSX-like):**
```jsx
<section className="experts-grid">
  {/* For each expert: */}
  <div className="expert-card">
    <div className="expert-image" />
    <div className="expert-name">Jeremiah Tan</div>
    <div className="expert-reviews">(315 Reviews)</div>
    <div className="expert-description">See the world with Jeremiah! ...</div>
  </div>
  {/* ...other cards */}
</section>
```

**Tailwind Classes:**
- `experts-grid`: `w-[1499px] mx-auto mt-12 grid grid-cols-3 gap-x-8 gap-y-12`
- `expert-card`: `bg-white border border-[#E8E8E8] rounded-[20px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col items-center p-8 gap-y-4 w-[467px] h-[559px]`
- `expert-image`: `w-[225.79px] h-[337px] rounded-[20px] object-cover mb-4`
- `expert-name`: `font-[Thunder] text-[32px] font-medium text-[#242424] mb-1`
- `expert-reviews`: `font-[Onest] text-[15px] font-medium text-[#242424] mb-1`
- `expert-description`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em] text-center`

**Mobile:**
- `experts-grid-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-4`
- `expert-card-mobile`: `bg-white border border-[#E8E8E8] rounded-[20px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col items-center p-4 gap-y-2 w-full h-[373px]`
- `expert-image-mobile`: `w-[150.53px] h-[224.67px] rounded-[20px] object-cover mb-2`
- `expert-name-mobile`: `font-[Thunder] text-[22px] font-medium text-[#242424] mb-1`
- `expert-reviews-mobile`: `font-[Onest] text-[10px] font-medium text-[#242424] mb-1`
- `expert-description-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em] text-center`

---

## Load More Button
**Description:**
Button to load more experts. Pixel-perfect size, border, and font.

**Structure (JSX-like):**
```jsx
<button className="experts-load-more">Load More</button>
```

**Tailwind Classes:**
- `experts-load-more`: `w-[169px] h-[51px] bg-[#242424] text-white font-[Onest] text-[18px] rounded-[9px] border border-[#242424] mt-8 mx-auto flex items-center justify-center hover:bg-[#333] transition-colors`

**Mobile:**
- `experts-load-more-mobile`: `w-[118px] h-[36px] bg-[#242424] text-white font-[Onest] text-[12px] rounded-[4px] border border-[#242424] mt-4 mx-auto flex items-center justify-center hover:bg-[#333] transition-colors`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-experts">
  <div className="footer-bg-experts" />
  <div className="footer-content-experts">
    <div className="footer-links-experts">
      <div className="footer-col-experts">Links</div>
      <div className="footer-col-experts">Explore</div>
      <div className="footer-col-experts">Policies</div>
      <div className="footer-col-experts">Find Us</div>
    </div>
    <div className="footer-contact-experts">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-experts">
      <span className="social-icon-experts" />
      {/* ... */}
    </div>
    <div className="footer-divider-experts" />
    <div className="footer-copyright-experts">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-experts`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-experts`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-experts`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-experts`: `flex flex-row gap-x-16 mb-8`
- `footer-col-experts`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-experts`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-experts`: `flex flex-row gap-x-4 mb-8`
- `social-icon-experts`: `w-[20px] h-[20px]`
- `footer-divider-experts`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-experts`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-experts-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-experts-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-experts-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-experts-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-experts-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-experts-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-experts-mobile`: `w-[20px] h-[20px]`
- `footer-divider-experts-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-experts-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Meet The Experts Page (Desktop & Mobile) 