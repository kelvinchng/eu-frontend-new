# EU Holidays EU MICE Page Tailwind Component Guide

---

## Banner
**Description:**
Large hero banner with background image, gradient overlay, logo, and title "EU Mice". Strictly matches Figma pixel values, fonts, and colors.

**Structure (JSX-like):**
```jsx
<section className="eu-mice-banner">
  <div className="eu-mice-banner-bg" />
  <div className="eu-mice-banner-gradient" />
  <img className="eu-mice-banner-logo" src="/MICE_logo.png" />
  <h1 className="eu-mice-banner-title">EU Mice</h1>
</section>
```

**Tailwind Classes:**
- `eu-mice-banner`: `relative w-full h-[838px] flex items-end justify-start`
- `eu-mice-banner-bg`: `absolute inset-0 w-full h-full bg-cover bg-center bg-[url('/banner-image.jpg')]`
- `eu-mice-banner-gradient`: `absolute inset-0 w-full h-full bg-gradient-to-b from-[#070707b5] via-[#2424249c] to-[#070707bf]`
- `eu-mice-banner-logo`: `absolute left-[497px] top-[642px] w-[178px] h-[114px] object-contain`
- `eu-mice-banner-title`: `absolute left-[220px] top-[655px] font-[Thunder] text-[110px] leading-[101px] tracking-[.01em] text-white`

**Mobile:**
```jsx
<section className="eu-mice-banner-mobile">
  <div className="eu-mice-banner-bg-mobile" />
  <div className="eu-mice-banner-gradient-mobile" />
  <img className="eu-mice-banner-logo-mobile" src="/MICE_logo.png" />
  <h1 className="eu-mice-banner-title-mobile">EU Mice</h1>
</section>
```
- `eu-mice-banner-mobile`: `relative w-full h-[409px] flex items-end justify-start`
- `eu-mice-banner-bg-mobile`: `absolute inset-0 w-full h-full bg-cover bg-center bg-[url('/banner-image-mobile.jpg')]`
- `eu-mice-banner-gradient-mobile`: `absolute inset-0 w-full h-full bg-gradient-to-b from-[#070707b5] via-[#2424249c] to-[#070707bf]`
- `eu-mice-banner-logo-mobile`: `absolute left-[151px] top-[318px] w-[68.92px] h-[44px] object-contain`
- `eu-mice-banner-title-mobile`: `absolute left-[34px] top-[324px] font-[Thunder] text-[46px] leading-[42px] tracking-[.01em] text-white`

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/Listing style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-eu-mice">
  <div className="logo-eu-mice" />
  <ul className="menu-items-eu-mice">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-eu-mice" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-eu-mice`: `w-full h-[102px] bg-white flex items-center px-8 justify-between`
- `logo-eu-mice`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-eu-mice`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-eu-mice`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-eu-mice-mobile">
  <div className="logo-eu-mice-mobile" />
  <button className="hamburger-eu-mice-mobile" />
</nav>
```
- `navbar-eu-mice-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-eu-mice-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-eu-mice-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Intro Section
**Description:**
Intro card with background, image, and description text. Pixel-perfect with rounded corners and shadow.

**Structure (JSX-like):**
```jsx
<section className="eu-mice-intro">
  <div className="eu-mice-intro-bg" />
  <img className="eu-mice-intro-image" src="/intro-image.jpg" />
  <div className="eu-mice-intro-content">
    <h2 className="eu-mice-intro-title">What We Do</h2>
    <p className="eu-mice-intro-desc">EU MICE is the preferred choice... (full text)</p>
  </div>
</section>
```

**Tailwind Classes:**
- `eu-mice-intro`: `relative w-[1480px] h-[674px] mx-auto mt-12 flex items-center rounded-[20px] bg-[#EEEEEE] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)]`
- `eu-mice-intro-bg`: `absolute inset-0 w-full h-full bg-[#EEEEEE] rounded-[20px]`
- `eu-mice-intro-image`: `absolute right-0 top-[112px] w-[645.26px] h-[450px] rounded-[20px] object-cover shadow-[0_1px_4px_0_rgba(0,0,0,0.16)]`
- `eu-mice-intro-content`: `relative z-10 flex flex-col gap-y-6 pl-[94px] pt-[157px] w-[531px]`
- `eu-mice-intro-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] mb-2`
- `eu-mice-intro-desc`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em]`

**Mobile:**
```jsx
<section className="eu-mice-intro-mobile">
  <div className="eu-mice-intro-bg-mobile" />
  <img className="eu-mice-intro-image-mobile" src="/intro-image-mobile.jpg" />
  <div className="eu-mice-intro-content-mobile">
    <h2 className="eu-mice-intro-title-mobile">What We Do</h2>
    <p className="eu-mice-intro-desc-mobile">EU MICE is the preferred choice... (full text)</p>
  </div>
</section>
```
- `eu-mice-intro-mobile`: `relative w-full h-[650px] mx-auto mt-6 flex flex-col items-center rounded-b-[9px] bg-[#EFEFEF]`
- `eu-mice-intro-bg-mobile`: `absolute inset-0 w-full h-full bg-[#EFEFEF] rounded-b-[9px]`
- `eu-mice-intro-image-mobile`: `absolute top-0 left-0 w-full h-[214px] rounded-t-[9px] object-cover shadow-[0_1px_4px_0_rgba(0,0,0,0.16)]`
- `eu-mice-intro-content-mobile`: `relative z-10 flex flex-col gap-y-4 px-[30px] pt-[43px] w-full`
- `eu-mice-intro-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] mb-1`
- `eu-mice-intro-desc-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em]`

---

## M.I.C.E. Services Grid
**Description:**
Grid of icon-with-text features, each with a shadowed icon and label. Strictly matches Figma grid, spacing, and font.

**Structure (JSX-like):**
```jsx
<section className="eu-mice-services-grid">
  <div className="eu-mice-services-title">Meetings, Incentives, Conventions & Exhibitions (M.I.C.E.)</div>
  <div className="eu-mice-services-list">
    {/* For each service: */}
    <div className="eu-mice-service-item">
      <div className="eu-mice-service-icon" />
      <div className="eu-mice-service-label">Formulate event brief and timeline schedule</div>
    </div>
    {/* ...other services */}
  </div>
</section>
```

**Tailwind Classes:**
- `eu-mice-services-grid`: `w-[1126px] mx-auto mt-16 flex flex-col gap-y-8`
- `eu-mice-services-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] text-center mb-8`
- `eu-mice-services-list`: `grid grid-cols-4 gap-x-12 gap-y-12`
- `eu-mice-service-item`: `flex flex-col items-center gap-y-4 w-[292px]`
- `eu-mice-service-icon`: `w-[80px] h-[80px] rounded-[9px] bg-[#242424] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center`
- `eu-mice-service-label`: `font-[Onest] text-[18px] text-[#242424] text-center leading-[1.27em]`

**Mobile:**
- `eu-mice-services-grid-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-6`
- `eu-mice-services-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] text-center mb-4`
- `eu-mice-services-list-mobile`: `grid grid-cols-1 gap-y-6`
- `eu-mice-service-item-mobile`: `flex flex-col items-center gap-y-2 w-full`
- `eu-mice-service-icon-mobile`: `w-[59px] h-[59px] rounded-[9px] bg-[#242424] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-center`
- `eu-mice-service-label-mobile`: `font-[Onest] text-[13px] text-[#242424] text-center leading-[1.27em]`

---

## Contact Form
**Description:**
Contact form with all fields, pixel-perfect spacing, rounded corners, and shadow. Includes "Send Enquiry" button and contact details/terms.

**Structure (JSX-like):**
```jsx
<section className="eu-mice-contact-form">
  <form className="eu-mice-form">
    {/* For each field: */}
    <div className="eu-mice-form-field">
      <label>Field Label</label>
      <input className="eu-mice-form-input" />
    </div>
    {/* ...other fields */}
    <button className="eu-mice-form-submit">Send Enquiry</button>
  </form>
  <div className="eu-mice-contact-details">
    <div>Address: EU Travel EXPO, Suntec Singapore Convention & Exhibition Centre, 1 Raffles Blvd, Level 2 Crescent 2, Singapore 039593</div>
    <div>Email: mice@euholidays.com.sg</div>
    <div>Tel: +65 6958 8883</div>
    <div>By submitting this form, you are confirming you have read and agreed to our Terms & Conditions and Privacy Policy.</div>
  </div>
</section>
```

**Tailwind Classes:**
- `eu-mice-contact-form`: `w-[1480px] mx-auto mt-24 flex flex-row gap-x-16`
- `eu-mice-form`: `w-[686px] bg-white rounded-[20px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] flex flex-col p-12 gap-y-6`
- `eu-mice-form-field`: `flex flex-col gap-y-2`
- `eu-mice-form-input`: `w-full h-[58px] rounded-[9px] border border-[#242424] px-4 font-[Onest] text-[18px] text-[#242424] bg-white`
- `eu-mice-form-submit`: `w-[198px] h-[52px] rounded-[9px] bg-[#242424] text-white font-[Onest] text-[18px] font-semibold self-end mt-8`
- `eu-mice-contact-details`: `flex flex-col gap-y-2 font-[Onest] text-[18px] text-[#242424] w-[686px]`

**Mobile:**
- `eu-mice-contact-form-mobile`: `w-full px-4 mt-12 flex flex-col gap-y-8`
- `eu-mice-form-mobile`: `w-full bg-white rounded-[20px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] flex flex-col p-4 gap-y-4`
- `eu-mice-form-field-mobile`: `flex flex-col gap-y-1`
- `eu-mice-form-input-mobile`: `w-full h-[35px] rounded-[9px] border border-[#242424] px-2 font-[Onest] text-[13px] text-[#242424] bg-white`
- `eu-mice-form-submit-mobile`: `w-[135.93px] h-[35px] rounded-[9px] bg-[#242424] text-white font-[Onest] text-[13px] font-semibold self-end mt-4`
- `eu-mice-contact-details-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[13px] text-[#242424]`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-eu-mice">
  <div className="footer-bg-eu-mice" />
  <div className="footer-content-eu-mice">
    <div className="footer-links-eu-mice">
      <div className="footer-col-eu-mice">Links</div>
      <div className="footer-col-eu-mice">Explore</div>
      <div className="footer-col-eu-mice">Policies</div>
      <div className="footer-col-eu-mice">Find Us</div>
    </div>
    <div className="footer-contact-eu-mice">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-eu-mice">
      <span className="social-icon-eu-mice" />
      {/* ... */}
    </div>
    <div className="footer-divider-eu-mice" />
    <div className="footer-copyright-eu-mice">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-eu-mice`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-eu-mice`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-eu-mice`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-eu-mice`: `flex flex-row gap-x-16 mb-8`
- `footer-col-eu-mice`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-eu-mice`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-eu-mice`: `flex flex-row gap-x-4 mb-8`
- `social-icon-eu-mice`: `w-[20px] h-[20px]`
- `footer-divider-eu-mice`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-eu-mice`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-eu-mice-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-eu-mice-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-eu-mice-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-eu-mice-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-eu-mice-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-eu-mice-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-eu-mice-mobile`: `w-[20px] h-[20px]`
- `footer-divider-eu-mice-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-eu-mice-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for EU MICE Page (Desktop & Mobile) 