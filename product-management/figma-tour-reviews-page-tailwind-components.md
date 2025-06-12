# EU Holidays Tour Reviews / Testimonials Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/About style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-reviews">
  <div className="logo-reviews" />
  <ul className="menu-items-reviews">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-reviews" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-reviews`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-reviews`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-reviews`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-reviews`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-reviews-mobile">
  <div className="logo-reviews-mobile" />
  <button className="hamburger-reviews-mobile" />
</nav>
```
- `navbar-reviews-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-reviews-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-reviews-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Heading & Intro
**Description:**
Section with page title ("Testimonials"), subtitle, and intro text. Pixel-perfect spacing and typography.

**Structure (JSX-like):**
```jsx
<section className="reviews-heading-section">
  <h1 className="reviews-title">Testimonials</h1>
  <div className="reviews-intro">Discover what our happy travellers have to say! From unforgettable experiences to exceptional service, our testimonials highlight the journeys that made lasting memories with EU Holidays.</div>
</section>
```

**Tailwind Classes:**
- `reviews-heading-section`: `w-[1008px] mx-auto mt-[227px] flex flex-col gap-y-4`
- `reviews-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] leading-[0.92em] mb-2`
- `reviews-intro`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em] mb-4`

**Mobile:**
- `reviews-heading-section-mobile`: `w-full px-4 mt-[145px] flex flex-col gap-y-2`
- `reviews-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] leading-[0.92em] mb-1`
- `reviews-intro-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em] mb-2`

---

## Facebook/Google Toggle
**Description:**
Toggle to switch between Facebook and Google reviews. Pixel-perfect spacing and font.

**Structure (JSX-like):**
```jsx
<div className="reviews-toggle">
  <span className="reviews-toggle-facebook">Facebook</span>
  <span className="reviews-toggle-google">Google</span>
  <span className="reviews-toggle-switch" />
</div>
```

**Tailwind Classes:**
- `reviews-toggle`: `flex flex-row items-center gap-x-8 w-[208px] mx-auto mt-8 mb-8`
- `reviews-toggle-facebook`: `font-[Onest] text-[14px] text-[#242424]`
- `reviews-toggle-google`: `font-[Onest] text-[14px] text-[#242424]`
- `reviews-toggle-switch`: `w-[45px] h-[20px] bg-[#000] rounded-full relative flex items-center justify-center`

**Mobile:**
- `reviews-toggle-mobile`: `flex flex-row items-center gap-x-4 w-[208px] mx-auto mt-4 mb-4`
- `reviews-toggle-facebook-mobile`: `font-[Onest] text-[14px] text-[#242424]`
- `reviews-toggle-google-mobile`: `font-[Onest] text-[14px] text-[#242424]`
- `reviews-toggle-switch-mobile`: `w-[45px] h-[20px] bg-[#000] rounded-full relative flex items-center justify-center`

---

## Reviews Grid
**Description:**
Grid of testimonial cards, each with background, avatar, name, verified icon, review text, date, and star rating. Pixel-perfect grid, card, and image styling.

**Structure (JSX-like):**
```jsx
<div className="reviews-grid">
  <div className="review-card">
    <div className="review-card-bg" />
    <div className="review-card-avatar" />
    <div className="review-card-name">Name</div>
    <div className="review-card-verified" />
    <div className="review-card-text">Review text...</div>
    <div className="review-card-date">1 day ago</div>
    <div className="review-card-readmore">Read more</div>
    <div className="review-card-stars" />
  </div>
  {/* ...other reviews */}
</div>
```

**Tailwind Classes:**
- `reviews-grid`: `grid grid-cols-2 gap-x-8 gap-y-8 w-[1190px] mx-auto mt-16`
- `review-card`: `relative w-[582px] h-[319px] rounded-[25px] shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] bg-white flex flex-col p-8`
- `review-card-bg`: `absolute inset-0 w-full h-full rounded-[25px] bg-white border border-[#E8E8E8]`
- `review-card-avatar`: `absolute left-8 top-8 w-[63px] h-[63px] rounded-full bg-[#D9D9D9] object-cover`
- `review-card-name`: `absolute left-[118px] top-[39px] font-[Onest] font-bold text-[18px] text-[#242424] uppercase`
- `review-card-verified`: `absolute left-[201px] top-[41px] w-[18px] h-[18px]`
- `review-card-text`: `absolute left-[118px] top-[143px] w-[426.45px] font-[Onest] text-[18px] text-[#242424] leading-[1.27em]`
- `review-card-date`: `absolute left-[118px] top-[64px] font-[Onest] text-[18px] text-[#242424]/40`
- `review-card-readmore`: `absolute left-[118px] top-[256px] font-[Onest] text-[18px] text-[#242424] opacity-50 cursor-pointer`
- `review-card-stars`: `absolute left-[118px] top-[100px] flex flex-row gap-x-2`

**Mobile:**
- `reviews-grid-mobile`: `grid grid-cols-1 gap-y-4 w-[325px] mx-auto mt-8`
- `review-card-mobile`: `relative w-[325px] h-[238px] rounded-[9px] shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] bg-white flex flex-col p-4`
- `review-card-bg-mobile`: `absolute inset-0 w-full h-full rounded-[9px] bg-white border border-[#E8E8E8]`
- `review-card-avatar-mobile`: `absolute left-4 top-4 w-[40px] h-[40px] rounded-full bg-[#D9D9D9] object-cover`
- `review-card-name-mobile`: `absolute left-[80px] top-[30px] font-[Onest] font-bold text-[13px] text-[#242424] uppercase`
- `review-card-verified-mobile`: `absolute left-[169px] top-[30px] w-[16px] h-[16px]`
- `review-card-text-mobile`: `absolute left-[31px] top-[84px] w-[271px] font-[Onest] text-[13px] text-[#242424] leading-[1.27em]`
- `review-card-date-mobile`: `absolute left-[80px] top-[47px] font-[Onest] text-[13px] text-[#000]/50`
- `review-card-readmore-mobile`: `absolute left-[31px] top-[186px] font-[Onest] text-[13px] text-[#000] opacity-50 cursor-pointer`
- `review-card-stars-mobile`: `absolute left-[118px] top-[100px] flex flex-row gap-x-2`

---

## Pagination
**Description:**
Pagination controls for reviews grid. Pixel-perfect size, border, and font.

**Structure (JSX-like):**
```jsx
<div className="reviews-pagination">
  <button className="reviews-pagination-btn">Prev</button>
  <span className="reviews-pagination-indicator">1 of 3</span>
  <button className="reviews-pagination-btn">Next</button>
</div>
```

**Tailwind Classes:**
- `reviews-pagination`: `flex flex-row items-center gap-x-4 w-[324px] mx-auto mt-12`
- `reviews-pagination-btn`: `w-[35px] h-[35px] rounded-[4px] bg-[#F2F2F2] flex items-center justify-center border border-[#8C8888] text-[#8C8888] hover:bg-[#242424] hover:text-white transition-colors`
- `reviews-pagination-indicator`: `font-[Onest] text-[18px] text-[#242424] tracking-[-2.5%] mx-2`

**Mobile:**
- `reviews-pagination-mobile`: `flex flex-row items-center gap-x-2 w-[324px] mx-auto mt-8`
- `reviews-pagination-btn-mobile`: `w-[35px] h-[35px] rounded-[4px] bg-[#F2F2F2] flex items-center justify-center border border-[#8C8888] text-[#8C8888] hover:bg-[#242424] hover:text-white transition-colors`
- `reviews-pagination-indicator-mobile`: `font-[Onest] text-[13px] text-[#242424] tracking-[-2.5%] mx-1`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-reviews">
  <div className="footer-bg-reviews" />
  <div className="footer-content-reviews">
    <div className="footer-links-reviews">
      <div className="footer-col-reviews">Links</div>
      <div className="footer-col-reviews">Explore</div>
      <div className="footer-col-reviews">Policies</div>
      <div className="footer-col-reviews">Find Us</div>
    </div>
    <div className="footer-contact-reviews">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-reviews">
      <span className="social-icon-reviews" />
      {/* ... */}
    </div>
    <div className="footer-divider-reviews" />
    <div className="footer-copyright-reviews">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-reviews`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-reviews`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-reviews`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-reviews`: `flex flex-row gap-x-16 mb-8`
- `footer-col-reviews`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-reviews`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-reviews`: `flex flex-row gap-x-4 mb-8`
- `social-icon-reviews`: `w-[20px] h-[20px]`
- `footer-divider-reviews`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-reviews`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-reviews-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-reviews-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-reviews-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-reviews-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-reviews-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-reviews-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-reviews-mobile`: `w-[20px] h-[20px]`
- `footer-divider-reviews-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-reviews-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Tour Reviews / Testimonials Page (Desktop & Mobile) 