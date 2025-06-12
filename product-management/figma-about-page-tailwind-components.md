# EU Holidays About Page Tailwind Component Guide

---

## Banner
**Description:**
Large hero banner with background image, gradient overlay, and title "About Us". Strictly matches Figma pixel values, fonts, and colors.

**Structure (JSX-like):**
```jsx
<section className="about-banner">
  <div className="about-banner-bg" />
  <div className="about-banner-gradient" />
  <h1 className="about-banner-title">About Us</h1>
</section>
```

**Tailwind Classes:**
- `about-banner`: `relative w-full h-[838px] flex items-end justify-start`
- `about-banner-bg`: `absolute inset-0 w-full h-full bg-cover bg-center bg-[url('/about-banner.jpg')]`
- `about-banner-gradient`: `absolute inset-0 w-full h-full bg-gradient-to-b from-[#070707b5] via-[#2424249c] to-[#070707bf]`
- `about-banner-title`: `absolute left-[220px] top-[655px] font-[Thunder] text-[110px] leading-[101px] tracking-[.01em] text-white`

**Mobile:**
```jsx
<section className="about-banner-mobile">
  <div className="about-banner-bg-mobile" />
  <div className="about-banner-gradient-mobile" />
  <h1 className="about-banner-title-mobile">About Us</h1>
</section>
```
- `about-banner-mobile`: `relative w-full h-[409px] flex items-end justify-start`
- `about-banner-bg-mobile`: `absolute inset-0 w-full h-full bg-cover bg-center bg-[url('/about-banner-mobile.jpg')]`
- `about-banner-gradient-mobile`: `absolute inset-0 w-full h-full bg-gradient-to-b from-[#070707b5] via-[#2424249c] to-[#070707bf]`
- `about-banner-title-mobile`: `absolute left-[34px] top-[324px] font-[Thunder] text-[46px] leading-[42px] tracking-[.01em] text-white`

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/Listing style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-about">
  <div className="logo-about" />
  <ul className="menu-items-about">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-about" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-about`: `w-full h-[102px] bg-white flex items-center px-8 justify-between`
- `logo-about`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-about`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-about`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-about-mobile">
  <div className="logo-about-mobile" />
  <button className="hamburger-about-mobile" />
</nav>
```
- `navbar-about-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-about-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-about-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Our Story
**Description:**
Section with title, story text, and award logos. Pixel-perfect spacing and typography.

**Structure (JSX-like):**
```jsx
<section className="about-story">
  <h2 className="about-story-title">Our Story</h2>
  <p className="about-story-text">Founded in 2010, EU Holidays has grown... (full text)</p>
  <div className="about-story-logos">
    <img src="/logo1.png" />
    <img src="/logo2.png" />
    {/* ... */}
  </div>
</section>
```

**Tailwind Classes:**
- `about-story`: `w-[1481px] mx-auto mt-24 flex flex-col gap-y-8`
- `about-story-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] mb-2`
- `about-story-text`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em]`
- `about-story-logos`: `flex flex-row gap-x-8 mt-8`
- `about-story-logo`: `h-[95.56px] object-contain`

**Mobile:**
- `about-story-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-4`
- `about-story-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] mb-1`
- `about-story-text-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em]`
- `about-story-logos-mobile`: `flex flex-row flex-wrap gap-x-2 gap-y-2 mt-4`
- `about-story-logo-mobile`: `h-[43.45px] object-contain`

---

## Milestones (Timeline)
**Description:**
Vertical timeline with years, events, and icons. Pixel-perfect grid, spacing, and font.

**Structure (JSX-like):**
```jsx
<section className="about-milestones">
  <div className="about-milestones-timeline">
    {/* For each period: */}
    <div className="about-milestones-period">
      <div className="about-milestones-date">2010 - 2015</div>
      <div className="about-milestones-events">• Founded by passionate travel professionals... (full text)</div>
    </div>
    {/* ...other periods */}
  </div>
</section>
```

**Tailwind Classes:**
- `about-milestones`: `w-[1480px] mx-auto mt-24 flex flex-col gap-y-12`
- `about-milestones-timeline`: `flex flex-col gap-y-12`
- `about-milestones-period`: `flex flex-row gap-x-8 items-start`
- `about-milestones-date`: `font-[Thunder] text-[29px] font-semibold text-black min-w-[133px]`
- `about-milestones-events`: `font-[Onest] text-[18px] text-black leading-[1.27em]`

**Mobile:**
- `about-milestones-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-8`
- `about-milestones-timeline-mobile`: `flex flex-col gap-y-8`
- `about-milestones-period-mobile`: `flex flex-row gap-x-4 items-start`
- `about-milestones-date-mobile`: `font-[Thunder] text-[22px] font-semibold text-black min-w-[78px]`
- `about-milestones-events-mobile`: `font-[Onest] text-[13px] text-black leading-[1.27em]`

---

## Mission, Vision & Values
**Description:**
Three cards for Mission, Vision, and Values. Each card has a background, title, and text. Pixel-perfect with rounded corners and shadow.

**Structure (JSX-like):**
```jsx
<section className="about-mvv">
  <div className="about-mvv-title">Mission, Vision & Values</div>
  <div className="about-mvv-cards">
    <div className="about-mvv-card">
      <div className="about-mvv-card-title">Mission</div>
      <div className="about-mvv-card-text">Delighting every travel experience</div>
    </div>
    <div className="about-mvv-card">
      <div className="about-mvv-card-title">Vision</div>
      <div className="about-mvv-card-text">Be Travellers' FIRST Choice</div>
    </div>
    <div className="about-mvv-card">
      <div className="about-mvv-card-title">Values</div>
      <div className="about-mvv-card-text">Deliver what we promise... (full list)</div>
    </div>
  </div>
</section>
```

**Tailwind Classes:**
- `about-mvv`: `w-[1480px] mx-auto mt-24 flex flex-col gap-y-8`
- `about-mvv-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] mb-8`
- `about-mvv-cards`: `flex flex-row gap-x-8`
- `about-mvv-card`: `w-[727px] bg-[#EEEEEE] rounded-[20px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col p-12 gap-y-4`
- `about-mvv-card-title`: `font-[Thunder] text-[33px] font-medium text-[#242424] mb-2`
- `about-mvv-card-text`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em] whitespace-pre-line`

**Mobile:**
- `about-mvv-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-4`
- `about-mvv-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] mb-2`
- `about-mvv-cards-mobile`: `flex flex-col gap-y-4`
- `about-mvv-card-mobile`: `w-full bg-[#EEEEEE] rounded-[20px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] flex flex-col p-4 gap-y-2`
- `about-mvv-card-title-mobile`: `font-[Thunder] text-[22px] font-medium text-[#242424] mb-1`
- `about-mvv-card-text-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em] whitespace-pre-line`

---

## Our People
**Description:**
Section with title, three subsections (Our Team, Our Gatherings, Our Social Contributions), and images. Pixel-perfect grid, spacing, and font.

**Structure (JSX-like):**
```jsx
<section className="about-people">
  <h2 className="about-people-title">Our People</h2>
  <div className="about-people-sections">
    <div className="about-people-section">
      <div className="about-people-section-title">Our Team</div>
      <div className="about-people-section-text">We make an effort to organise annual company retreats... (full text)</div>
    </div>
    <div className="about-people-section">
      <div className="about-people-section-title">Our Gatherings</div>
      <div className="about-people-section-text">We work hard, and we play hard!... (full text)</div>
    </div>
    <div className="about-people-section">
      <div className="about-people-section-title">Our Social Contributions</div>
      <div className="about-people-section-text">We firmly believe in fostering positive contributions... (full text)</div>
    </div>
  </div>
  <div className="about-people-images">
    <img src="/people1.jpg" />
    <img src="/people2.jpg" />
    <img src="/people3.jpg" />
  </div>
</section>
```

**Tailwind Classes:**
- `about-people`: `w-[1480px] mx-auto mt-24 flex flex-col gap-y-12`
- `about-people-title`: `font-[Thunder] text-[50px] font-medium text-[#242424] mb-8`
- `about-people-sections`: `flex flex-row gap-x-8`
- `about-people-section`: `flex-1 flex flex-col gap-y-2`
- `about-people-section-title`: `font-[Thunder] text-[33px] font-medium text-[#242424] mb-2`
- `about-people-section-text`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em]`
- `about-people-images`: `flex flex-row gap-x-8 mt-8`
- `about-people-image`: `w-[331px] h-[307px] rounded-[20px] object-cover shadow-[0_0_0_1px_rgba(14,63,126,0.06),0_1px_2px_0_rgba(42,51,70,0.04),0_5px_10px_-2px_rgba(42,51,70,0.03),0_24px_24px_0_rgba(42,51,70,0.03)]`

**Mobile:**
- `about-people-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-8`
- `about-people-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] mb-2`
- `about-people-sections-mobile`: `flex flex-col gap-y-4`
- `about-people-section-mobile`: `flex flex-col gap-y-1`
- `about-people-section-title-mobile`: `font-[Thunder] text-[22px] font-medium text-[#242424] mb-1`
- `about-people-section-text-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em]`
- `about-people-images-mobile`: `flex flex-row flex-wrap gap-x-2 gap-y-2 mt-4`
- `about-people-image-mobile`: `w-[158.67px] h-[147.16px] rounded-[20px] object-cover shadow-[0_0_0_1px_rgba(14,63,126,0.06),0_1px_2px_0_rgba(42,51,70,0.04),0_5px_10px_-2px_rgba(42,51,70,0.03),0_24px_24px_0_rgba(42,51,70,0.03)]`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-about">
  <div className="footer-bg-about" />
  <div className="footer-content-about">
    <div className="footer-links-about">
      <div className="footer-col-about">Links</div>
      <div className="footer-col-about">Explore</div>
      <div className="footer-col-about">Policies</div>
      <div className="footer-col-about">Find Us</div>
    </div>
    <div className="footer-contact-about">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-about">
      <span className="social-icon-about" />
      {/* ... */}
    </div>
    <div className="footer-divider-about" />
    <div className="footer-copyright-about">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-about`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-about`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-about`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-about`: `flex flex-row gap-x-16 mb-8`
- `footer-col-about`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-about`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-about`: `flex flex-row gap-x-4 mb-8`
- `social-icon-about`: `w-[20px] h-[20px]`
- `footer-divider-about`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-about`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-about-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-about-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-about-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-about-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-about-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-about-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-about-mobile`: `w-[20px] h-[20px]`
- `footer-divider-about-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-about-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for About Page (Desktop & Mobile) 