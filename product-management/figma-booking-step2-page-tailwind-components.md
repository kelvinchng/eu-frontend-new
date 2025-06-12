# EU Holidays Booking (Step 2) Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu for mobile. Matches homepage and Step 1 style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-booking-step2">
  <div className="logo-booking-step2" />
  <ul className="menu-items-booking-step2">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-booking-step2" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-booking-step2`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-booking-step2`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-booking-step2`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-booking-step2`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-booking-step2-mobile">
  <div className="logo-booking-step2-mobile" />
  <button className="hamburger-booking-step2-mobile" />
</nav>
```
- `navbar-booking-step2-mobile`: `w-full h-[110px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-booking-step2-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-booking-step2-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Breadcrumbs
**Description:**
Breadcrumb navigation showing the user's current step in the booking process.

**Structure (JSX-like):**
```jsx
<div className="breadcrumbs-booking-step2">
  <span>Switzerland Tours</span>
  <span className="breadcrumb-arrow">{'>'}</span>
  <span>Booking</span>
  <span className="breadcrumb-arrow">{'>'}</span>
  <span>11D8N Switzerland Dream (Apr - Oct)</span>
</div>
```

**Tailwind Classes:**
- `breadcrumbs-booking-step2`: `flex flex-row items-center gap-x-2 text-[20px] font-[Onest] text-[#242424]`
- `breadcrumb-arrow`: `mx-1`

**Mobile:**
- `breadcrumbs-booking-step2-mobile`: `flex flex-row items-center gap-x-1 text-[13px] font-[Onest] text-[#242424]`

---

## Progress Steps
**Description:**
Horizontal progress bar showing booking steps: Select Package, Traveller's Info, Review, Payment. Numbered circles and connecting lines. Step 2 highlights the current step.

**Structure (JSX-like):**
```jsx
<div className="progress-booking-step2">
  <div className="step">1</div>
  <div className="progress-line" />
  <div className="step active">2</div>
  <div className="progress-line" />
  <div className="step">3</div>
  <div className="progress-line" />
  <div className="step">4</div>
</div>
```

**Tailwind Classes:**
- `progress-booking-step2`: `flex flex-row items-center gap-x-4 w-full max-w-[1480px] mx-auto px-[220px] py-4`
- `step`: `w-[55px] h-[55px] rounded-full flex items-center justify-center font-[Onest] text-[18px] font-semibold bg-[#242424]/[.35] text-white`
- `step.active`: `bg-[#242424] text-white`
- `progress-line`: `h-[2px] w-[106px] bg-black/20`

**Mobile:**
- `progress-booking-step2-mobile`: `flex flex-row items-center gap-x-2 w-full px-4 py-2`
- `step-mobile`: `w-[26px] h-[26px] rounded-full flex items-center justify-center font-[Onest] text-[13px] font-semibold bg-[#242424]/[.35] text-white`
- `step-mobile.active`: `bg-[#242424] text-white`
- `progress-line-mobile`: `h-[2px] w-[30px] bg-black/20`

---

## Tour Details
**Description:**
Card with tour info: name, code, dates, thumbnail, and divider. Pixel-perfect with rounded corners and shadow.

**Structure (JSX-like):**
```jsx
<div className="tour-details-booking-step2">
  <div className="tour-thumbnail" />
  <div className="tour-info">
    <div className="tour-title">Tour Info</div>
    <div className="tour-name">11D8N Switzerland Dream (Apr – Oct)</div>
    <div className="tour-code">04ECSBTS10/25QR</div>
    <div className="tour-dates">10 April 2025 – 21 April 2025</div>
  </div>
</div>
```

**Tailwind Classes:**
- `tour-details-booking-step2`: `w-[608px] h-[885px] bg-[#F4F4F4] rounded-[25px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col p-12 gap-y-4`
- `tour-thumbnail`: `w-full h-[300px] rounded-t-[25px] bg-cover bg-center`
- `tour-info`: `flex flex-col gap-y-2`
- `tour-title`: `font-[Thunder] text-[50px] font-medium text-[#242424]`
- `tour-name`: `font-[Onest] text-[18px] font-medium text-[#242424]`
- `tour-code`: `font-[Onest] text-[18px] text-[#242424]`
- `tour-dates`: `font-[Onest] text-[18px] text-[#242424]`

**Mobile:**
- `tour-details-booking-step2-mobile`: `w-full bg-[#F4F4F4] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col p-4 gap-y-2`
- `tour-thumbnail-mobile`: `w-full h-[190px] rounded-t-[9px] bg-cover bg-center`
- `tour-title-mobile`: `font-[Thunder] text-[32px] font-medium text-[#242424]`
- `tour-name-mobile`: `font-[Onest] text-[13px] font-medium text-[#242424]`
- `tour-code-mobile`: `font-[Onest] text-[13px] text-[#242424]`
- `tour-dates-mobile`: `font-[Onest] text-[13px] text-[#242424]`

---

## Room Details
**Description:**
Section for entering traveller details for each room/occupant. Each person has an expandable card with fields for Title, Gender, First/Last Name, Date of Birth, Nationality, Passport No., Date of Issue, Expiry Date. Pixel-perfect with rounded corners and shadow.

**Structure (JSX-like):**
```jsx
<div className="room-details-booking-step2">
  <div className="room-title">Traveller's Details</div>
  <div className="room-list">
    {/* For each person/room: */}
    <div className="person-card expanded">
      <div className="person-header">Room 1: Adult 1</div>
      <div className="person-fields">
        {/* Title, Gender, First Name, Last Name, DOB, Nationality, Passport No., Date of Issue, Expiry Date */}
      </div>
    </div>
    <div className="person-card collapsed">
      <div className="person-header">Room 1: Child Half Twin</div>
    </div>
    {/* ...other person cards */}
  </div>
</div>
```

**Tailwind Classes:**
- `room-details-booking-step2`: `w-[840.41px] bg-[#F4F4F4] rounded-[25px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col p-12 gap-y-4`
- `room-title`: `font-[Thunder] text-[50px] font-medium text-[#242424]`
- `room-list`: `flex flex-col gap-y-4`
- `person-card`: `w-full bg-white rounded-[9px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] p-8 mb-4`
- `person-header`: `font-[Onest] text-[20px] font-bold text-[#242424] mb-4`
- `person-fields`: `grid grid-cols-2 gap-x-8 gap-y-4`
- `field-label`: `font-[Onest] text-[18px] text-[#242424] mb-1`
- `field-input`: `w-full h-[46px] rounded-[9px] border border-[#E8E8E8] bg-[#F4F4F4] px-4 font-[Onest] text-[18px]`
- `field-select`: `w-full h-[46px] rounded-[9px] border border-[#E8E8E8] bg-[#F4F4F4] px-4 font-[Onest] text-[18px] flex items-center justify-between`
- `calendar-icon`: `w-[13.5px] h-[15.95px] ml-2`

**Mobile:**
- `room-details-booking-step2-mobile`: `w-full bg-[#F4F4F4] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col p-4 gap-y-2`
- `person-card-mobile`: `w-full bg-white rounded-[9px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] p-4 mb-2`
- `person-header-mobile`: `font-[Onest] text-[14px] font-bold text-[#242424] mb-2`
- `person-fields-mobile`: `flex flex-col gap-y-2`
- `field-label-mobile`: `font-[Onest] text-[13px] text-[#242424] mb-1`
- `field-input-mobile`: `w-full h-[41px] rounded-[4px] border border-[#E8E8E8] bg-[#F4F4F4] px-2 font-[Onest] text-[13px]`
- `field-select-mobile`: `w-full h-[41px] rounded-[4px] border border-[#E8E8E8] bg-[#F4F4F4] px-2 font-[Onest] text-[13px] flex items-center justify-between`
- `calendar-icon-mobile`: `w-[13.5px] h-[15.95px] ml-2`

---

## Package Details (Sidebar)
**Description:**
Table of package pricing, discounts, taxes, and totals. Pixel-perfect with Onest font and strict spacing. Includes "Proceed to Step 3" button.

**Structure (JSX-like):**
```jsx
<div className="package-details-booking-step2">
  <div className="package-title">Package Details</div>
  <table className="package-table">
    <thead>
      <tr>
        <th>Fare</th>
        <th>Price</th>
        <th>Unit</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      {/* Table rows for each fare/tax/discount */}
    </tbody>
  </table>
  <div className="package-total">Total: $24,992.00</div>
  <button className="proceed-btn">Proceed to Step 3 – Review & Confirm</button>
</div>
```

**Tailwind Classes:**
- `package-details-booking-step2`: `w-[608px] bg-white rounded-[25px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col p-8 gap-y-4`
- `package-title`: `font-[Thunder] text-[50px] font-medium text-[#242424]`
- `package-table`: `w-full text-left font-[Onest] text-[18px]`
- `package-total`: `font-[Onest] text-[18px] font-bold text-[#242424] mt-4`
- `proceed-btn`: `w-full h-[52px] rounded-[9px] bg-[#242424] text-white font-[Onest] text-[18px] font-semibold mt-6`

**Mobile:**
- `package-details-booking-step2-mobile`: `w-full bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col p-2 gap-y-2`
- `package-title-mobile`: `font-[Thunder] text-[14px] font-medium text-[#242424]`
- `package-table-mobile`: `w-full text-left font-[Onest] text-[12px]`
- `package-total-mobile`: `font-[Onest] text-[13px] font-bold text-[#242424] mt-2`
- `proceed-btn-mobile`: `w-full h-[46.48px] rounded-[4px] bg-[#242424] text-white font-[Onest] text-[14px] font-semibold mt-4`

---

## Footer
**Description:**
Footer with background, copyright, link columns, contact info, social icons, and divider.

**Structure (JSX-like):**
```jsx
<footer className="footer-booking-step2">
  <div className="footer-bg-booking-step2" />
  <div className="footer-content-booking-step2">
    <div className="footer-links-booking-step2">
      <div className="footer-col-booking-step2">Links</div>
      <div className="footer-col-booking-step2">Explore</div>
      <div className="footer-col-booking-step2">Policies</div>
      <div className="footer-col-booking-step2">Find Us</div>
    </div>
    <div className="footer-contact-booking-step2">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-booking-step2">
      <span className="social-icon-booking-step2" />
      {/* ... */}
    </div>
    <div className="footer-divider-booking-step2" />
    <div className="footer-copyright-booking-step2">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-booking-step2`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-booking-step2`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-booking-step2`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-booking-step2`: `flex flex-row gap-x-16 mb-8`
- `footer-col-booking-step2`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-booking-step2`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-booking-step2`: `flex flex-row gap-x-4 mb-8`
- `social-icon-booking-step2`: `w-[20px] h-[20px]`
- `footer-divider-booking-step2`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-booking-step2`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-booking-step2-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-booking-step2-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-booking-step2-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-booking-step2-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-booking-step2-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-booking-step2-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-booking-step2-mobile`: `w-[20px] h-[20px]`
- `footer-divider-booking-step2-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-booking-step2-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Booking (Step 2) Page (Desktop & Mobile) 