# EU Holidays Contact Us Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/About style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-contact-us">
  <div className="logo-contact-us" />
  <ul className="menu-items-contact-us">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-contact-us" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-contact-us`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-contact-us`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-contact-us`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-contact-us`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-contact-us-mobile">
  <div className="logo-contact-us-mobile" />
  <button className="hamburger-contact-us-mobile" />
</nav>
```
- `navbar-contact-us-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-contact-us-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-contact-us-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Heading
**Description:**
Section with page title ("Contact Us"). Pixel-perfect spacing and typography.

**Structure (JSX-like):**
```jsx
<section className="contact-us-heading-section">
  <h1 className="contact-us-title">Contact Us</h1>
</section>
```

**Tailwind Classes:**
- `contact-us-heading-section`: `w-[1008px] mx-auto mt-[227px] flex flex-col gap-y-4`
- `contact-us-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] leading-[0.92em] mb-2`

**Mobile:**
- `contact-us-heading-section-mobile`: `w-full px-4 mt-[145px] flex flex-col gap-y-2`
- `contact-us-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] leading-[0.92em] mb-1`

---

## Why Choose Us
**Description:**
Section with three icon+text cards: Effortless Travel, Award-Winning Service, Travel Specialists. Pixel-perfect grid, card, and icon styling.

**Structure (JSX-like):**
```jsx
<section className="why-choose-us-section">
  <h2 className="why-choose-us-title">Why Choose Us</h2>
  <div className="why-choose-us-grid">
    <div className="why-choose-us-card">
      <div className="why-choose-us-icon" />
      <div className="why-choose-us-card-title">Effortless Travel</div>
      <div className="why-choose-us-card-desc">No scrambling. No confusion. Just smooth, well-planned journeys that let you enjoy every moment stress-free.</div>
    </div>
    <div className="why-choose-us-card">
      <div className="why-choose-us-icon" />
      <div className="why-choose-us-card-title">Award-Winning Service</div>
      <div className="why-choose-us-card-desc">Recognised by industry leaders and loved by travellers. Our travellers come back, bring friends, and trust us with their biggest holidays.</div>
    </div>
    <div className="why-choose-us-card">
      <div className="why-choose-us-icon" />
      <div className="why-choose-us-card-title">Travel Specialists</div>
      <div className="why-choose-us-card-desc">With deep travel know-how and a genuine love for what we do, we design trips that feel exciting, smooth, and truly unforgettable.</div>
    </div>
  </div>
  <div className="why-choose-us-subtitle">Professional & Experienced.</div>
</section>
```

**Tailwind Classes:**
- `why-choose-us-section`: `w-[1480px] mx-auto mt-[2212px] bg-[#EEEEEE] rounded-[20px] flex flex-col items-center py-16 px-8 gap-y-12`
- `why-choose-us-title`: `font-[Thunder] text-[30px] text-[#242424] uppercase mb-8`
- `why-choose-us-grid`: `flex flex-row justify-between w-full gap-x-12`
- `why-choose-us-card`: `flex flex-col items-center w-[365px] bg-transparent`
- `why-choose-us-icon`: `w-[80px] h-[80px] rounded-[9px] bg-[#242424] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-6 flex items-center justify-center`
- `why-choose-us-card-title`: `font-[Thunder] text-[35px] font-medium text-[#242424] leading-[0.92em] mb-2`
- `why-choose-us-card-desc`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em] mb-4 text-center`
- `why-choose-us-subtitle`: `font-[Thunder] text-[50px] font-medium text-[#242424] leading-[0.92em] text-center mt-8`

**Mobile:**
- `why-choose-us-section-mobile`: `w-full bg-[#EEEEEE] rounded-[20px] flex flex-col items-center py-8 px-4 gap-y-8 mt-8`
- `why-choose-us-title-mobile`: `font-[Thunder] text-[20px] text-[#242424] uppercase mb-4`
- `why-choose-us-grid-mobile`: `flex flex-col gap-y-6 w-full`
- `why-choose-us-card-mobile`: `flex flex-col items-center w-full bg-transparent`
- `why-choose-us-icon-mobile`: `w-[50px] h-[50px] rounded-[9px] bg-[#242424] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mb-4 flex items-center justify-center`
- `why-choose-us-card-title-mobile`: `font-[Thunder] text-[20px] font-medium text-[#242424] leading-[0.92em] mb-1`
- `why-choose-us-card-desc-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em] mb-2 text-center`
- `why-choose-us-subtitle-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] leading-[0.92em] text-center mt-4`

---

## Contact Form
**Description:**
Contact form with fields (First Name, Last Name, Phone, Email, Message), Send Enquiry button, and terms note. Pixel-perfect spacing, border, and font.

**Structure (JSX-like):**
```jsx
<form className="contact-us-form">
  <input className="contact-us-field" placeholder="First Name*" />
  <input className="contact-us-field" placeholder="Last Name*" />
  <input className="contact-us-field" placeholder="Phone*" />
  <input className="contact-us-field" placeholder="Email*" />
  <textarea className="contact-us-field contact-us-message" placeholder="Message*" />
  <button className="contact-us-send-btn">Send Enquiry</button>
  <div className="contact-us-terms">By submitting this form, you are confirming you have read and agreed to our Terms & Conditions and Privacy Policy.</div>
</form>
```

**Tailwind Classes:**
- `contact-us-form`: `w-[686px] mx-auto bg-white rounded-[20px] shadow-[0_0_0_1px_rgba(14,63,126,0.06),0_1px_2px_0_rgba(42,51,70,0.04),0_5px_10px_-2px_rgba(42,51,70,0.03),0_24px_24px_0_rgba(42,51,70,0.03)] flex flex-col gap-y-6 p-12 mt-16`
- `contact-us-field`: `w-full h-[58px] rounded-[9px] border border-[#242424] px-6 font-[Onest] text-[18px] text-[#242424] placeholder:text-[#242424]/75 mb-2`
- `contact-us-message`: `h-[206px] resize-none`
- `contact-us-send-btn`: `w-[198px] h-[52px] rounded-[9px] border border-black bg-[#242424] text-white font-[Onest] text-[18px] ml-auto mt-4`
- `contact-us-terms`: `font-[Onest] text-[18px] text-[#000] leading-[1.27em] mt-8`

**Mobile:**
- `contact-us-form-mobile`: `w-full bg-white rounded-[20px] shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] flex flex-col gap-y-4 p-4 mt-8`
- `contact-us-field-mobile`: `w-full h-[35px] rounded-[9px] border border-[#242424] px-4 font-[Onest] text-[13px] text-[#242424] placeholder:text-[#242424]/75 mb-1`
- `contact-us-message-mobile`: `h-[100px] resize-none`
- `contact-us-send-btn-mobile`: `w-[135.93px] h-[35px] rounded-[9px] border border-black bg-[#242424] text-white font-[Onest] text-[13px] ml-auto mt-2`
- `contact-us-terms-mobile`: `font-[Onest] text-[13px] text-[#000] leading-[1.27em] mt-4`

---

## Contact Details / Terms
**Description:**
Multiple blocks for company contact details, working hours, address, email, phone, WhatsApp, and company name. Pixel-perfect spacing and font.

**Structure (JSX-like):**
```jsx
<div className="contact-us-details-section">
  <div className="contact-us-details-block">
    <div className="contact-us-details-title">EU Holidays Pte Ltd</div>
    <div className="contact-us-details-item">Working Hours: Monday to Friday 9.30AM – 8:30PM. Saturdays to Sundays & Public Holidays 11.00AM - 8.00PM.</div>
    <div className="contact-us-details-item">Address: Suntec Singapore Convention & Exhibition Centre, 1 Raffles Boulevard Level 2 Crescent 2 (beside Link Bridge to Marina Square / Opposite Don Don Donki #02-379-387), Singapore 039593</div>
    <div className="contact-us-details-item">Email: sales@euholidays.com.sg</div>
    <div className="contact-us-details-item">Tel: +65 6958 8888 (9AM - 12MN) / +65 6307 7060</div>
    <div className="contact-us-details-item">Whatsapp: +65 8901 2988</div>
  </div>
  {/* ...other company blocks as per Figma */}
</div>
```

**Tailwind Classes:**
- `contact-us-details-section`: `w-[1480px] mx-auto flex flex-col gap-y-12 mt-16`
- `contact-us-details-block`: `bg-transparent flex flex-col gap-y-2`
- `contact-us-details-title`: `font-[Thunder] text-[20px] text-[#242424] mb-2`
- `contact-us-details-item`: `font-[Onest] text-[18px] text-[#000] leading-[1.27em]`

**Mobile:**
- `contact-us-details-section-mobile`: `w-full flex flex-col gap-y-8 mt-8 px-4`
- `contact-us-details-block-mobile`: `bg-transparent flex flex-col gap-y-1`
- `contact-us-details-title-mobile`: `font-[Thunder] text-[13px] text-[#242424] mb-1`
- `contact-us-details-item-mobile`: `font-[Onest] text-[13px] text-[#000] leading-[1.27em]`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-contact-us">
  <div className="footer-bg-contact-us" />
  <div className="footer-content-contact-us">
    <div className="footer-links-contact-us">
      <div className="footer-col-contact-us">Links</div>
      <div className="footer-col-contact-us">Explore</div>
      <div className="footer-col-contact-us">Policies</div>
      <div className="footer-col-contact-us">Find Us</div>
    </div>
    <div className="footer-contact-contact-us">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-contact-us">
      <span className="social-icon-contact-us" />
      {/* ... */}
    </div>
    <div className="footer-divider-contact-us" />
    <div className="footer-copyright-contact-us">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-contact-us`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-contact-us`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-contact-us`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-contact-us`: `flex flex-row gap-x-16 mb-8`
- `footer-col-contact-us`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-contact-us`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-contact-us`: `flex flex-row gap-x-4 mb-8`
- `social-icon-contact-us`: `w-[20px] h-[20px]`
- `footer-divider-contact-us`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-contact-us`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-contact-us-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-contact-us-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-contact-us-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-contact-us-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-contact-us-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-contact-us-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-contact-us-mobile`: `w-[20px] h-[20px]`
- `footer-divider-contact-us-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-contact-us-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Contact Us Page (Desktop & Mobile) 