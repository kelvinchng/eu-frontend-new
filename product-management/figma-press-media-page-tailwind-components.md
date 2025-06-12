# EU Holidays Press & Media Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/About style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-press">
  <div className="logo-press" />
  <ul className="menu-items-press">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-press" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-press`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-press`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-press`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-press`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-press-mobile">
  <div className="logo-press-mobile" />
  <button className="hamburger-press-mobile" />
</nav>
```
- `navbar-press-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-press-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-press-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Heading
**Description:**
Section with page title and subtitle. Pixel-perfect spacing and typography.

**Structure (JSX-like):**
```jsx
<section className="press-heading">
  <h1 className="press-title">Press & Media</h1>
  <p className="press-subtitle">Here's where we share our milestones, media mentions and travel stories that made the headlines.</p>
</section>
```

**Tailwind Classes:**
- `press-heading`: `w-[824px] mx-auto mt-24 flex flex-col gap-y-2`
- `press-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] mb-2`
- `press-subtitle`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em]`

**Mobile:**
- `press-heading-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-1`
- `press-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] mb-1`
- `press-subtitle-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em]`

---

## Filter Tabs
**Description:**
Horizontal filter tabs for years and 'All'. Pixel-perfect spacing, rounded corners, and font.

**Structure (JSX-like):**
```jsx
<div className="press-tabs">
  <button className="press-tab press-tab-active">All</button>
  <button className="press-tab">2025</button>
  <button className="press-tab">2024</button>
  <button className="press-tab">2023</button>
  <button className="press-tab">2022</button>
</div>
```

**Tailwind Classes:**
- `press-tabs`: `flex flex-row gap-x-7 mt-8 mb-8`
- `press-tab`: `px-8 h-[56px] rounded-[8px] font-[Onest] text-[18px] text-[#242424] border border-[#E8E8E8] bg-white hover:bg-[#f5f5f5] transition-colors`
- `press-tab-active`: `bg-[#242424] text-white border-[#242424]`

**Mobile:**
- `press-tabs-mobile`: `flex flex-row gap-x-4 mt-4 mb-4 px-4 overflow-x-auto`
- `press-tab-mobile`: `px-4 h-[36px] rounded-[8px] font-[Onest] text-[13px] text-[#242424] border border-[#E8E8E8] bg-white whitespace-nowrap`
- `press-tab-active-mobile`: `bg-[#242424] text-white border-[#242424]`

---

## Articles Grid
**Description:**
Grid of article cards, each with thumbnail, title, date, description, and 'Read Article' button. Pixel-perfect grid, spacing, and font. Cards have rounded corners and border.

**Structure (JSX-like):**
```jsx
<section className="press-articles-grid">
  {/* For each article: */}
  <div className="press-article-card">
    <img className="press-article-thumbnail" src="/article-thumbnail.jpg" />
    <div className="press-article-title">Our inaugural leisure trip to Germany on 21 Sep 2021</div>
    <div className="press-article-date">9 Apr 2024</div>
    <div className="press-article-description">In this Lianhe Zaobao interview, our director Mr Wong Yew Hoong shares more about our upcoming Germany trip and the safety measures in place.</div>
    <button className="press-article-read">Read Article</button>
  </div>
  {/* ...other cards */}
</section>
```

**Tailwind Classes:**
- `press-articles-grid`: `w-[1499px] mx-auto mt-12 grid grid-cols-3 gap-x-8 gap-y-12`
- `press-article-card`: `bg-white border border-[#E8E8E8] rounded-[20px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col p-8 gap-y-4 w-[467px] h-[735px]`
- `press-article-thumbnail`: `w-[420.67px] h-[337px] rounded-[13px] object-cover mb-4`
- `press-article-title`: `font-[Thunder] text-[32px] font-medium text-[#242424] mb-1 leading-[1.125em]`
- `press-article-date`: `font-[Onest] text-[15px] text-[rgba(71,85,105,0.5)] tracking-[.03em] mb-1`
- `press-article-description`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em] mb-2`
- `press-article-read`: `w-[140px] h-[51px] bg-[#242424] text-white font-[Onest] text-[16px] rounded-[9px] border border-[#242424] flex items-center justify-center hover:bg-[#333] transition-colors`

**Mobile:**
- `press-articles-grid-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-4`
- `press-article-card-mobile`: `bg-white border border-[#E8E8E8] rounded-[20px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col p-4 gap-y-2 w-full h-[508px]`
- `press-article-thumbnail-mobile`: `w-[292.76px] h-[232.92px] rounded-[13px] object-cover mb-2`
- `press-article-title-mobile`: `font-[Thunder] text-[22px] font-medium text-[#242424] mb-1 leading-[1.045em]`
- `press-article-date-mobile`: `font-[Onest] text-[10px] text-[rgba(71,85,105,0.5)] tracking-[.03em] mb-1`
- `press-article-description-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em] mb-2`
- `press-article-read-mobile`: `w-[97.43px] h-[35.25px] bg-[#242424] text-white font-[Onest] text-[12px] rounded-[4px] border border-[#242424] flex items-center justify-center hover:bg-[#333] transition-colors`

---

## As Seen In
**Description:**
Section with logos of media outlets. Pixel-perfect spacing and logo sizing.

**Structure (JSX-like):**
```jsx
<section className="press-as-seen-in">
  <h2 className="press-as-seen-in-title">As Seen In</h2>
  <div className="press-as-seen-in-logos">
    <img src="/media-logo1.png" />
    <img src="/media-logo2.png" />
    {/* ... */}
  </div>
</section>
```

**Tailwind Classes:**
- `press-as-seen-in`: `w-[491.19px] mx-auto mt-12 flex flex-col items-center gap-y-4`
- `press-as-seen-in-title`: `font-[Thunder] text-[38px] font-medium text-[#242424] mb-2`
- `press-as-seen-in-logos`: `flex flex-row gap-x-8 items-center`
- `press-as-seen-in-logo`: `h-[68px] object-contain`

**Mobile:**
- `press-as-seen-in-mobile`: `w-full px-4 mt-8 flex flex-col items-center gap-y-2`
- `press-as-seen-in-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] mb-1`
- `press-as-seen-in-logos-mobile`: `flex flex-row gap-x-4 items-center`
- `press-as-seen-in-logo-mobile`: `h-[49px] object-contain`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-press">
  <div className="footer-bg-press" />
  <div className="footer-content-press">
    <div className="footer-links-press">
      <div className="footer-col-press">Links</div>
      <div className="footer-col-press">Explore</div>
      <div className="footer-col-press">Policies</div>
      <div className="footer-col-press">Find Us</div>
    </div>
    <div className="footer-contact-press">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-press">
      <span className="social-icon-press" />
      {/* ... */}
    </div>
    <div className="footer-divider-press" />
    <div className="footer-copyright-press">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-press`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-press`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-press`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-press`: `flex flex-row gap-x-16 mb-8`
- `footer-col-press`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-press`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-press`: `flex flex-row gap-x-4 mb-8`
- `social-icon-press`: `w-[20px] h-[20px]`
- `footer-divider-press`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-press`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-press-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-press-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-press-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-press-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-press-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-press-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-press-mobile`: `w-[20px] h-[20px]`
- `footer-divider-press-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-press-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Press & Media Page (Desktop & Mobile) 