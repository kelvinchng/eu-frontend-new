# EU Holidays Country Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu for mobile. Matches homepage style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-country">
  <div className="logo-country" />
  <ul className="menu-items-country">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-country" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-country`: `w-full h-[102px] bg-white flex items-center px-8 justify-between`
- `logo-country`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-country`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-country`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Pixel-Perfect Notes:**
- Font: Thunder, 27px, 0.92em, 3% tracking
- Logo: 144.95x102px
- Menu item spacing: 32px (gap-x-8)
- Hamburger: 17.12x9.18px, 1.7px stroke, white

**Mobile:**
```jsx
<nav className="navbar-country-mobile">
  <div className="logo-country-mobile" />
  <button className="hamburger-country-mobile" />
</nav>
```
- `navbar-country-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-country-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-country-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Hero Section
**Description:**
Large hero/banner with background image, overlay, and title (e.g., "Explore Switzerland").

**Structure (JSX-like):**
```jsx
<section className="country-hero">
  <div className="country-hero-bg" />
  <div className="country-hero-content">
    <h1>Explore Switzerland</h1>
  </div>
</section>
```

**Tailwind Classes:**
- `country-hero`: `relative w-full h-[838px] flex items-end`
- `country-hero-bg`: `absolute inset-0 w-full h-full bg-[url('/country-hero.jpg')] bg-cover bg-center`
- `country-hero-content`: `relative z-10 px-[220px] pb-[82px]`
- `h1`: `font-[Thunder] text-[110px] leading-[0.92em] tracking-[.01em] text-white`

**Pixel-Perfect Notes:**
- Banner: 1920x838px
- Title: Thunder, 110px, 0.92em, 1% tracking
- Padding: 220px left, 82px bottom

**Mobile:**
```jsx
<section className="country-hero-mobile">
  <div className="country-hero-bg-mobile" />
  <div className="country-hero-content-mobile">
    <h1>Explore Switzerland</h1>
  </div>
</section>
```
- `country-hero-mobile`: `relative w-full h-[409px] flex items-end`
- `country-hero-bg-mobile`: `absolute inset-0 w-full h-full bg-[url('/country-hero-mobile.jpg')] bg-cover bg-center`
- `country-hero-content-mobile`: `relative z-10 px-4 pb-8`
- `h1`: `font-[Thunder] text-[46px] leading-[0.92em] tracking-[.01em] text-white`

---

## About/Background Section
**Description:**
Section with two-column layout: about text and image, nav dots for carousel.

**Structure (JSX-like):**
```jsx
<section className="country-about">
  <div className="about-bg" />
  <div className="about-image" />
  <div className="about-content">
    <h2>Background of Switzerland</h2>
    <p>Switzerland is where history, culture, and natural beauty come together...</p>
    <div className="nav-dots" />
  </div>
</section>
```

**Tailwind Classes:**
- `country-about`: `flex flex-row w-full h-[529px] bg-[#EFEFEF] rounded-[16px] overflow-hidden`
- `about-bg`: `w-[612px] h-full bg-[#EFEFEF] rounded-l-[16px]`
- `about-image`: `w-[868px] h-full bg-[url('/about-europe.jpg')] bg-cover bg-center rounded-r-[16px]`
- `about-content`: `flex flex-col justify-center px-16 py-8`
- `h2`: `font-[Thunder] text-[30px] leading-[0.92em] mb-4`
- `p`: `font-[Onest] text-[25px] leading-[1.275em] mb-8`
- `nav-dots`: `flex flex-row gap-x-2 mt-4`

**Pixel-Perfect Notes:**
- About: 612x529px bg, 868x529px image
- Title: Thunder, 30px
- Text: Onest, 25px, -2.5% tracking
- Nav dots: 11x11px, 2px white stroke

**Mobile:**
```jsx
<section className="country-about-mobile">
  <div className="about-bg-mobile" />
  <div className="about-content-mobile">
    <h2>Background of Switzerland</h2>
    <p>Switzerland is where history, culture, and natural beauty come together...</p>
    <div className="nav-dots-mobile" />
  </div>
</section>
```
- `country-about-mobile`: `flex flex-col w-full bg-[#EFEFEF] rounded-b-[9px] overflow-hidden`
- `about-bg-mobile`: `w-full h-[214px] bg-[#EFEFEF] rounded-b-[9px]`
- `about-content-mobile`: `flex flex-col px-4 py-4`
- `h2`: `font-[Thunder] text-[30px] leading-[0.92em] mb-2`
- `p`: `font-[Onest] text-[13px] leading-[1.275em] mb-4`
- `nav-dots-mobile`: `flex flex-row gap-x-1 mt-2`

---

## View More Countries
**Description:**
Grid of country cards (France, Italy, etc.) with image, name, and tour count.

**Structure (JSX-like):**
```jsx
<section className="view-more-countries">
  <div className="title-group">
    <h2>View More Countries</h2>
    <p>Join thousands of happy travellers who trust EU Holidays...</p>
  </div>
  <div className="country-grid">
    {/* CountryCard for each country */}
  </div>
</section>
```

**Tailwind Classes:**
- `view-more-countries`: `w-full flex flex-col items-center py-20`
- `title-group`: `mb-12 text-center`
- `h2`: `font-[Thunder] text-[50px] leading-[0.92em] mb-2`
- `p`: `font-[Onest] text-[25px] leading-[1.275em] mb-4`
- `country-grid`: `grid grid-cols-4 gap-x-[105px] gap-y-12 px-[183px]`
- `country-card`: `flex flex-col items-center w-[200px] h-[332px]`
- `country-image`: `w-[200px] h-[200px] rounded-full bg-cover bg-center mb-4`
- `country-name`: `font-[Thunder] text-[50px] leading-[0.92em] mb-1`
- `country-tours`: `font-[Onest] text-[20px] font-medium`

**Pixel-Perfect Notes:**
- Card: 200x332px, 200px image, Thunder 50px, Onest 20px
- Grid: 4 columns, 105px gap, 183px padding

**Mobile:**
```jsx
<section className="view-more-countries-mobile">
  <div className="title-group-mobile">
    <h2>View More Countries</h2>
    <p>Join thousands of happy travellers who trust EU Holidays...</p>
  </div>
  <div className="country-grid-mobile">
    {/* CountryCard for each country */}
  </div>
</section>
```
- `view-more-countries-mobile`: `w-full flex flex-col items-center py-8`
- `title-group-mobile`: `mb-6 text-center`
- `h2`: `font-[Thunder] text-[32px] leading-[0.92em] mb-1`
- `p`: `font-[Onest] text-[13px] leading-[1.275em] mb-2`
- `country-grid-mobile`: `grid grid-cols-3 gap-x-4 gap-y-6 px-2`
- `country-card-mobile`: `flex flex-col items-center w-[93px] h-[149px]`
- `country-image-mobile`: `w-[93px] h-[93px] rounded-full bg-cover bg-center mb-2`
- `country-name-mobile`: `font-[Thunder] text-[20px] leading-[0.92em] mb-0.5`
- `country-tours-mobile`: `font-[Onest] text-[13px] font-medium`

---

## Feature Tours / Listings
**Description:**
Grid/list of featured tours, each with image, title, price, description, tags, badges, and view more button.

**Structure (JSX-like):**
```jsx
<section className="feature-tours">
  <h2>Switzerland Tours</h2>
  <div className="listing-grid">
    {/* ListingCard for each tour */}
  </div>
  <button className="view-all-btn">View All</button>
</section>
```

**Tailwind Classes:**
- `feature-tours`: `w-full flex flex-col items-center py-20`
- `h2`: `font-[Thunder] text-[50px] leading-[0.92em] mb-8`
- `listing-grid`: `grid grid-cols-3 gap-x-8 gap-y-12`
- `listing-card`: `w-[460px] h-[643px] bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden`
- `listing-image`: `w-full h-[279.48px] bg-cover bg-center rounded-t-[9px]`
- `listing-content`: `flex flex-col p-8 gap-y-4`
- `listing-title`: `font-[Onest] text-[20px] font-bold leading-[1.275em] text-[#242424] mb-2`
- `listing-price`: `font-[Onest] text-[18px] font-medium text-[#242424] mb-2`
- `listing-description`: `font-[Onest] text-[18px] text-[#242424] mb-4`
- `listing-tags`: `flex flex-row gap-x-2 mb-4`
- `tag`: `bg-white border border-[#E8E8E8] rounded-[7px] px-3 py-1 font-[Onest] text-[18px] text-[#242424]`
- `badge`: `bg-[#242424] text-white rounded-[9px] px-3 py-1 font-[Onest] text-[18px] ml-2`
- `view-more`: `font-[Onest] text-[18px] text-[#242424] underline mt-auto self-start`
- `view-all-btn`: `rounded-[8px] px-8 py-2 font-[Onest] text-[18px] bg-[#242424] text-white mt-8`

**Pixel-Perfect Notes:**
- Card: 460x643px, 9px radius, 279.48px image
- Title: Onest, 20px bold
- Tag: 7px radius, 1px border #E8E8E8
- Badge: 9px radius, bg #242424, white text
- Button: 8px radius, 32px padding

**Mobile:**
```jsx
<section className="feature-tours-mobile">
  <h2>Switzerland Tours</h2>
  <div className="listing-grid-mobile">
    {/* ListingCard for each tour */}
  </div>
  <button className="view-all-btn-mobile">View All</button>
</section>
```
- `feature-tours-mobile`: `w-full flex flex-col items-center py-8`
- `h2`: `font-[Thunder] text-[15px] leading-[1.2em] mb-4`
- `listing-grid-mobile`: `flex flex-col gap-y-4`
- `listing-card-mobile`: `w-full bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden mb-4`
- `listing-image-mobile`: `w-full h-[172px] bg-cover bg-center rounded-t-[9px]`
- `listing-content-mobile`: `flex flex-col p-4 gap-y-2`
- `listing-title-mobile`: `font-[Onest] text-[15px] font-bold leading-[1.2em] text-[#242424] mb-1`
- `listing-price-mobile`: `font-[Onest] text-[13px] font-medium text-[#242424] mb-1`
- `listing-description-mobile`: `font-[Onest] text-[13px] text-[#242424] mb-2`
- `listing-tags-mobile`: `flex flex-row gap-x-2 mb-2`
- `tag-mobile`: `bg-white border border-[#E8E8E8] rounded-[7px] px-2 py-0.5 font-[Onest] text-[12px] text-[#242424]`
- `badge-mobile`: `bg-[#242424] text-white rounded-[9px] px-2 py-0.5 font-[Onest] text-[12px] ml-2`
- `view-more-mobile`: `font-[Onest] text-[12px] text-[#242424] underline mt-auto self-start`
- `view-all-btn-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-[#242424] text-white mt-4`

---

## Footer
**Description:**
Footer with background, copyright, link columns, contact info, social icons, and divider.

**Structure (JSX-like):**
```jsx
<footer className="footer-country">
  <div className="footer-bg-country" />
  <div className="footer-content-country">
    <div className="footer-links-country">
      <div className="footer-col-country">Links</div>
      <div className="footer-col-country">Explore</div>
      <div className="footer-col-country">Policies</div>
      <div className="footer-col-country">Find Us</div>
    </div>
    <div className="footer-contact-country">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-country">
      <span className="social-icon-country" />
      {/* ... */}
    </div>
    <div className="footer-divider-country" />
    <div className="footer-copyright-country">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-country`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-country`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-country`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-country`: `flex flex-row gap-x-16 mb-8`
- `footer-col-country`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-country`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-country`: `flex flex-row gap-x-4 mb-8`
- `social-icon-country`: `w-[20px] h-[20px]`
- `footer-divider-country`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-country`: `font-[Onest] text-[18px]`

**Pixel-Perfect Notes:**
- Footer: 540px height, bg #242424
- Link columns: Thunder, 24px
- Contact: Onest, 18px
- Social icons: 20x20px
- Divider: 1px, #5C5C5C
- Padding: 64px (py-16), 32px (px-8)

**Mobile:**
```jsx
<footer className="footer-country-mobile">
  <div className="footer-content-country-mobile">
    <div className="footer-links-country-mobile">
      <div className="footer-col-country-mobile">Links</div>
      <div className="footer-col-country-mobile">Explore</div>
      <div className="footer-col-country-mobile">Policies</div>
      <div className="footer-col-country-mobile">Find Us</div>
    </div>
    <div className="footer-contact-country-mobile">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-country-mobile">
      <span className="social-icon-country-mobile" />
      {/* ... */}
    </div>
    <div className="footer-divider-country-mobile" />
    <div className="footer-copyright-country-mobile">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```
- `footer-country-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-country-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-country-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-country-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-country-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-country-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-country-mobile`: `w-[20px] h-[20px]`
- `footer-divider-country-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-country-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Country Page (Desktop & Mobile) 