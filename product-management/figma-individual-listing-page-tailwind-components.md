# EU Holidays Individual Listing Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu for mobile. Matches homepage style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-individual">
  <div className="logo-individual" />
  <ul className="menu-items-individual">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-individual" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-individual`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-individual`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-individual`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-individual`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Pixel-Perfect Notes:**
- Font: Thunder, 27px, 0.92em, 3% tracking
- Logo: 144.95x102px
- Menu item spacing: 32px (gap-x-8)
- Hamburger: 17.12x9.18px, 1.7px stroke, white

**Mobile:**
```jsx
<nav className="navbar-individual-mobile">
  <div className="logo-individual-mobile" />
  <button className="hamburger-individual-mobile" />
</nav>
```
- `navbar-individual-mobile`: `w-full h-[110px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-individual-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-individual-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Title Section
**Description:**
Section with breadcrumbs, tour title, code, description, and action buttons (Enquire, Book, Download Itinerary).

**Structure (JSX-like):**
```jsx
<section className="title-section">
  <div className="breadcrumbs">
    <span>Switzerland Tours</span>
    <span className="arrow-icon" />
    <span>11D8N Switzerland Dream (Apr - Oct)</span>
  </div>
  <h1 className="tour-title">11D8N SWITZERLAND DREAM (APR - OCT)</h1>
  <div className="tour-details">
    <span>Tour Code : ECSBTS</span>
    <span className="tour-desc">Sunkissed Switzerland is an equally dreamy destination...</span>
  </div>
  <div className="action-buttons">
    <button className="enquire-btn">Enquire More</button>
    <button className="book-btn">Book Now</button>
    <button className="download-btn">Download Itinerary</button>
  </div>
</section>
```

**Tailwind Classes:**
- `title-section`: `w-full max-w-[1480px] mx-auto px-[220px] py-12 flex flex-col gap-y-4`
- `breadcrumbs`: `flex flex-row items-center gap-x-2 text-[20px] font-[Onest] text-[#242424]`
- `arrow-icon`: `w-2 h-2 mx-1`
- `tour-title`: `font-[Thunder] text-[50px] leading-[0.92em] font-medium text-[#242424] mb-2`
- `tour-details`: `flex flex-row gap-x-4 text-[18px] font-[Onest] text-[#242424]`
- `tour-desc`: `text-[18px] font-[Onest] text-[#242424]`
- `action-buttons`: `flex flex-row gap-x-4 mt-4`
- `enquire-btn`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#D9D9D9] border border-[#242424]`
- `book-btn`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#242424] text-white`
- `download-btn`: `rounded-[9px] px-8 py-2 font-[Onest] text-[18px] bg-[#D9D9D9] border border-[#242424]`

**Mobile:**
- `title-section-mobile`: `w-full px-4 py-4 flex flex-col gap-y-2`
- `breadcrumbs-mobile`: `flex flex-row items-center gap-x-1 text-[13px] font-[Onest] text-[#242424]`
- `tour-title-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] font-medium text-[#242424] mb-1`
- `tour-details-mobile`: `flex flex-row gap-x-2 text-[13px] font-[Onest] text-[#242424]`
- `tour-desc-mobile`: `text-[13px] font-[Onest] text-[#242424]`
- `action-buttons-mobile`: `flex flex-row gap-x-2 mt-2`
- `enquire-btn-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-white border border-[#242424]`
- `book-btn-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-[#242424] text-white`
- `download-btn-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[12px] bg-white border border-[#242424]`

---

## Gallery
**Description:**
Image gallery with main and supporting images, rounded corners, and subtle shadow.

**Structure (JSX-like):**
```jsx
<div className="gallery">
  <div className="main-image" />
  <div className="gallery-row">
    <div className="gallery-image" />
    <div className="gallery-image" />
  </div>
</div>
```

**Tailwind Classes:**
- `gallery`: `flex flex-row gap-x-4 w-full max-w-[1480px] mx-auto px-[220px] py-8`
- `main-image`: `w-[980px] h-[705px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-cover bg-center`
- `gallery-row`: `flex flex-col gap-y-4`
- `gallery-image`: `w-[480px] h-[344px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-cover bg-center`

**Mobile:**
- `gallery-mobile`: `flex flex-col gap-y-2 w-full px-4 py-4`
- `main-image-mobile`: `w-full h-[263px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-cover bg-center`
- `gallery-row-mobile`: `flex flex-row gap-x-2`
- `gallery-image-mobile`: `w-[159px] h-[159px] rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] bg-cover bg-center`

---

## Tour Highlights
**Description:**
Section with two columns: Exclusives and Specialties, each with a list of highlights, cities, and notes.

**Structure (JSX-like):**
```jsx
<section className="tour-highlights">
  <div className="column exclusives">
    <h2>Exclusives</h2>
    <ul>
      <li>Switzerland</li>
      <li>ZÜrich</li>
      {/* ... */}
    </ul>
  </div>
  <div className="column specialties">
    <h2>Specialties</h2>
    <ul>
      <li>Delicacies</li>
      <li>4 to 5 ★ Hotels</li>
      {/* ... */}
    </ul>
  </div>
</section>
```

**Tailwind Classes:**
- `tour-highlights`: `w-full max-w-[1480px] mx-auto px-[220px] py-12 flex flex-row gap-x-8`
- `column`: `flex flex-col gap-y-2 bg-white rounded-[25px] p-8 shadow`
- `h2`: `font-[Thunder] text-[50px] leading-[0.92em] text-[#242424] mb-2`
- `ul`: `flex flex-col gap-y-1`
- `li`: `font-[Onest] text-[18px] text-[#242424]`

**Mobile:**
- `tour-highlights-mobile`: `w-full px-4 py-4 flex flex-col gap-y-2`
- `column-mobile`: `flex flex-col gap-y-1 bg-white rounded-[9px] p-4 shadow`
- `h2-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] text-[#242424] mb-1`
- `ul-mobile`: `flex flex-col gap-y-0.5`
- `li-mobile`: `font-[Onest] text-[13px] text-[#242424]`

---

## Tabs
**Description:**
Tabs for switching between Itinerary, Testimonials, Tour Photos, and FAQ.

**Structure (JSX-like):**
```jsx
<div className="tabs">
  <button className="tab active">Itinerary</button>
  <button className="tab">Testimonials</button>
  <button className="tab">Tour Photos</button>
  <button className="tab">FAQ</button>
</div>
```

**Tailwind Classes:**
- `tabs`: `flex flex-row gap-x-7 w-full max-w-[1480px] mx-auto px-[220px] py-4`
- `tab`: `rounded-[8px] px-8 py-2 font-[Onest] text-[18px] border border-[#242424] bg-white text-[#242424]`
- `tab.active`: `bg-[#242424] text-white`

**Mobile:**
- `tabs-mobile`: `flex flex-row gap-x-2 w-full px-4 py-2`
- `tab-mobile`: `rounded-[4px] px-4 py-2 font-[Onest] text-[14px] border border-[#242424] bg-white text-[#242424]`
- `tab-mobile.active`: `bg-[#242424] text-white`

---

## Testimonials Tab
**Description:**
A testimonials/reviews section with user avatars, review text, star ratings, reviewer name, date, and a 'Read more' link. Includes a 'Load More' button. Pixel-perfect for both desktop and mobile.

**Structure (JSX-like):**
```jsx
<section className="testimonials-tab">
  <h2 className="testimonials-title">Testimonials</h2>
  <div className="testimonials-list">
    <div className="testimonial-card">
      <div className="testimonial-avatar" />
      <div className="testimonial-content">
        <div className="testimonial-header">
          <span className="testimonial-name">Reviewer Name</span>
          <span className="testimonial-verified" />
        </div>
        <div className="testimonial-rating">★★★★★</div>
        <div className="testimonial-text">Review text...</div>
        <div className="testimonial-footer">
          <span className="testimonial-date">1 day ago</span>
          <span className="testimonial-readmore">Read more</span>
        </div>
      </div>
    </div>
    {/* Repeat for each testimonial */}
  </div>
  <button className="testimonials-loadmore">Load More</button>
</section>
```

**Tailwind Classes:**
- `testimonials-tab`: `w-full max-w-[1190px] mx-auto px-0 py-12 flex flex-col gap-y-8`
- `testimonials-title`: `font-[Thunder] text-[50px] leading-[0.92em] text-[#242424] mb-8`
- `testimonials-list`: `flex flex-col gap-y-8`
- `testimonial-card`: `flex flex-row bg-white rounded-[25px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] border border-[#E8E8E8] p-8 gap-x-8 items-start`
- `testimonial-avatar`: `w-[63px] h-[63px] rounded-full bg-[#D9D9D9] overflow-hidden`
- `testimonial-content`: `flex flex-col flex-1 gap-y-2`
- `testimonial-header`: `flex flex-row items-center gap-x-2`
- `testimonial-name`: `font-[Onest] text-[18px] font-bold uppercase text-[#242424]`
- `testimonial-verified`: `w-4 h-4 ml-2 text-[#197BFF]`
- `testimonial-rating`: `flex flex-row gap-x-1 text-[#FCBE00] text-[18px]`
- `testimonial-text`: `font-[Onest] text-[18px] text-[#242424] mt-2`
- `testimonial-footer`: `flex flex-row gap-x-4 items-center mt-2`
- `testimonial-date`: `font-[Onest] text-[18px] text-[#242424] opacity-40`
- `testimonial-readmore`: `font-[Onest] text-[18px] text-[#242424] opacity-50 underline cursor-pointer`
- `testimonials-loadmore`: `mt-8 w-[169px] h-[51px] rounded-[9px] border border-[#242424] bg-[#D9D9D9] font-[Onest] text-[18px] text-[#242424] mx-auto`

**Mobile:**
- `testimonials-tab-mobile`: `w-full px-4 py-8 flex flex-col gap-y-4`
- `testimonials-title-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] text-[#242424] mb-4`
- `testimonials-list-mobile`: `flex flex-col gap-y-4`
- `testimonial-card-mobile`: `flex flex-row bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] border border-[#E8E8E8] p-4 gap-x-4 items-start`
- `testimonial-avatar-mobile`: `w-[40px] h-[40px] rounded-full bg-[#D9D9D9] overflow-hidden`
- `testimonial-content-mobile`: `flex flex-col flex-1 gap-y-1`
- `testimonial-header-mobile`: `flex flex-row items-center gap-x-1`
- `testimonial-name-mobile`: `font-[Onest] text-[13px] font-bold uppercase text-[#242424]`
- `testimonial-verified-mobile`: `w-4 h-4 ml-1 text-[#197BFF]`
- `testimonial-rating-mobile`: `flex flex-row gap-x-1 text-[#FCBE00] text-[13px]`
- `testimonial-text-mobile`: `font-[Onest] text-[13px] text-[#242424] mt-1`
- `testimonial-footer-mobile`: `flex flex-row gap-x-2 items-center mt-1`
- `testimonial-date-mobile`: `font-[Onest] text-[13px] text-[#242424] opacity-50`
- `testimonial-readmore-mobile`: `font-[Onest] text-[13px] text-[#242424] opacity-50 underline cursor-pointer`
- `testimonials-loadmore-mobile`: `mt-4 w-full h-[36px] rounded-[4px] border border-[#242424] bg-[#D9D9D9] font-[Onest] text-[12px] text-[#242424]`

**Pixel-Perfect Notes:**
- Avatar: 63x63px (desktop), 40x40px (mobile)
- Card: 25px radius (desktop), 9px (mobile)
- Font: Onest 18px (desktop), 13px (mobile), Thunder for title
- Star color: #FCBE00
- Verified icon: #197BFF
- Button: 169x51px (desktop), full width 36px (mobile)
- All spacing, border, and shadow values match Figma

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact border radius, shadow, and color values
- All pixel values as per Figma

### Facebook/Google Toggle (Testimonials Source)
**Description:**
A toggle switch allowing users to filter testimonials by Facebook or Google reviews. Pixel-perfect, mobile-first, with Thunder/Onest fonts and exact spacing/colors.

**Structure (JSX-like):**
```jsx
<div className="testimonials-toggle">
  <button className="toggle-btn active">Facebook</button>
  <div className="toggle-switch">
    <span className="toggle-knob" />
  </div>
  <button className="toggle-btn">Google</button>
</div>
```

**Tailwind Classes:**
- `testimonials-toggle`: `w-[208px] h-[20px] flex flex-row items-center justify-between mx-auto my-4`
- `toggle-btn`: `font-[Onest] text-[14px] px-2 py-1 rounded transition-colors duration-200`
- `toggle-btn.active`: `font-bold text-[#242424]`
- `toggle-switch`: `relative w-[45px] h-[20px] bg-[#242424] rounded-full flex items-center mx-2`
- `toggle-knob`: `absolute left-0 top-0 w-[20px] h-[20px] bg-white rounded-full shadow transition-all duration-200`
  - When Google is active: `left-[25px]`

**Pixel-Perfect Notes:**
- Toggle: 45x20px, knob 20x20px, full rounded
- Font: Onest 14px, bold for active
- Colors: #242424 (active), #FFFFFF (knob/bg)
- Spacing: 64px between Facebook/Google, 2px padding
- Transition: smooth knob slide and color change

**Custom Tailwind Config Needed:**
- Onest font family
- All pixel values as per Figma

---

## Itinerary (Accordion)
**Description:**
Accordion for each day, with title, description, and expand/collapse icon.

**Structure (JSX-like):**
```jsx
<div className="itinerary">
  <div className="accordion">
    <div className="accordion-header">
      <span>Day 1 : HOME - ZÜRICH (Meals on Board)</span>
      <span className="accordion-icon" />
    </div>
    <div className="accordion-content">Assemble at the airport and depart for Zürich...</div>
  </div>
  {/* Repeat for each day */}
</div>
```

**Tailwind Classes:**
- `itinerary`: `w-full max-w-[1480px] mx-auto px-[220px] py-8 flex flex-col gap-y-4`
- `accordion`: `border border-[#DCDCDC] rounded-[9px] mb-2`
- `accordion-header`: `flex flex-row items-center justify-between px-6 py-4 bg-[#242424] text-white rounded-t-[9px] cursor-pointer`
- `accordion-content`: `px-6 py-4 bg-white text-[#242424] rounded-b-[9px]`
- `accordion-icon`: `w-4 h-4 ml-2`

**Mobile:**
- `itinerary-mobile`: `w-full px-4 py-4 flex flex-col gap-y-2`
- `accordion-mobile`: `border border-[#DCDCDC] rounded-[4px] mb-1`
- `accordion-header-mobile`: `flex flex-row items-center justify-between px-4 py-2 bg-[#242424] text-white rounded-t-[4px] cursor-pointer`
- `accordion-content-mobile`: `px-4 py-2 bg-white text-[#242424] rounded-b-[4px]`
- `accordion-icon-mobile`: `w-3 h-3 ml-1`

---

## Related Tours
**Description:**
Section with a horizontal row of listing cards for related tours.

**Structure (JSX-like):**
```jsx
<section className="related-tours">
  <h2>Related Tours You Might Like</h2>
  <div className="related-tours-row">
    {/* ListingCard for each related tour */}
  </div>
</section>
```

**Tailwind Classes:**
- `related-tours`: `w-full max-w-[1480px] mx-auto px-[220px] py-12`
- `h2`: `font-[Thunder] text-[50px] leading-[0.92em] text-[#242424] mb-4`
- `related-tours-row`: `flex flex-row gap-x-8`

**Mobile:**
- `related-tours-mobile`: `w-full px-4 py-4`
- `h2-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] text-[#242424] mb-2`
- `related-tours-row-mobile`: `flex flex-col gap-y-2`

---

## Listing Card (Related Tours)
**Description:**
Card for each related tour, with image, title, price, description, tags, badges, and view more button.

**Structure (JSX-like):**
```jsx
<div className="listing-card-related">
  <div className="listing-image-related" />
  <div className="listing-content-related">
    <div className="listing-title-related">Tour Title</div>
    <div className="listing-price-related">fr $438/pax</div>
    <div className="listing-description-related">Description text</div>
    <div className="listing-tags-related">
      <span className="tag-related">1-for-1</span>
      <span className="badge-related">Best Seller</span>
    </div>
    <div className="view-more-related">View More <span className="arrow-icon-related" /></div>
  </div>
</div>
```

**Tailwind Classes:**
- `listing-card-related`: `w-[460px] h-[643px] bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden`
- `listing-image-related`: `w-full h-[279.48px] bg-cover bg-center rounded-t-[9px]`
- `listing-content-related`: `flex flex-col p-8 gap-y-4`
- `listing-title-related`: `font-[Onest] text-[20px] font-bold leading-[1.275em] text-[#242424] mb-2`
- `listing-price-related`: `font-[Onest] text-[18px] font-medium text-[#242424] mb-2`
- `listing-description-related`: `font-[Onest] text-[18px] text-[#242424] mb-4`
- `listing-tags-related`: `flex flex-row gap-x-2 mb-4`
- `tag-related`: `bg-white border border-[#E8E8E8] rounded-[7px] px-3 py-1 font-[Onest] text-[18px] text-[#242424]`
- `badge-related`: `bg-[#242424] text-white rounded-[9px] px-3 py-1 font-[Onest] text-[18px] ml-2`
- `view-more-related`: `font-[Onest] text-[18px] text-[#242424] underline mt-auto self-start flex items-center gap-x-1 cursor-pointer`
- `arrow-icon-related`: `w-2 h-2`

**Mobile:**
- `listing-card-related-mobile`: `w-full bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden mb-4`
- `listing-image-related-mobile`: `w-full h-[172px] bg-cover bg-center rounded-t-[9px]`
- `listing-content-related-mobile`: `flex flex-col p-4 gap-y-2`
- `listing-title-related-mobile`: `font-[Onest] text-[15px] font-bold leading-[1.2em] text-[#242424] mb-1`
- `listing-price-related-mobile`: `font-[Onest] text-[13px] font-medium text-[#242424] mb-1`
- `listing-description-related-mobile`: `font-[Onest] text-[13px] text-[#242424] mb-2`
- `listing-tags-related-mobile`: `flex flex-row gap-x-2 mb-2`
- `tag-related-mobile`: `bg-white border border-[#E8E8E8] rounded-[7px] px-2 py-0.5 font-[Onest] text-[12px] text-[#242424]`
- `badge-related-mobile`: `bg-[#242424] text-white rounded-[9px] px-2 py-0.5 font-[Onest] text-[12px] ml-2`
- `view-more-related-mobile`: `font-[Onest] text-[12px] text-[#242424] underline mt-auto self-start flex items-center gap-x-1 cursor-pointer`
- `arrow-icon-related-mobile`: `w-2 h-2`

---

## Footer
**Description:**
Footer with background, copyright, link columns, contact info, social icons, and divider.

**Structure (JSX-like):**
```jsx
<footer className="footer-individual">
  <div className="footer-bg-individual" />
  <div className="footer-content-individual">
    <div className="footer-links-individual">
      <div className="footer-col-individual">Links</div>
      <div className="footer-col-individual">Explore</div>
      <div className="footer-col-individual">Policies</div>
      <div className="footer-col-individual">Find Us</div>
    </div>
    <div className="footer-contact-individual">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-individual">
      <span className="social-icon-individual" />
      {/* ... */}
    </div>
    <div className="footer-divider-individual" />
    <div className="footer-copyright-individual">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-individual`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-individual`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-individual`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-individual`: `flex flex-row gap-x-16 mb-8`
- `footer-col-individual`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-individual`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-individual`: `flex flex-row gap-x-4 mb-8`
- `social-icon-individual`: `w-[20px] h-[20px]`
- `footer-divider-individual`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-individual`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-individual-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-individual-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-individual-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-individual-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-individual-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-individual-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-individual-mobile`: `w-[20px] h-[20px]`
- `footer-divider-individual-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-individual-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

## Tour Photos Tab
**Description:**
A gallery section displaying tour albums, each with a main image, date, tour manager, and a 'Load More' button. Pixel-perfect for both desktop and mobile.

**Structure (JSX-like):**
```jsx
<section className="tour-photos-tab">
  <h2 className="tour-photos-title">Tour Albums</h2>
  <div className="tour-albums-list">
    <div className="tour-album-card">
      <div className="tour-album-image" />
      <div className="tour-album-info">
        <span className="tour-album-date">Date: 27 January 2025</span>
        <span className="tour-album-manager">Tour Manager: Peter Teh</span>
      </div>
    </div>
    {/* Repeat for each album */}
  </div>
  <button className="tour-albums-loadmore">Load More</button>
</section>
```

**Tailwind Classes:**
- `tour-photos-tab`: `w-full max-w-[1480px] mx-auto px-[220px] py-12 flex flex-col gap-y-8`
- `tour-photos-title`: `font-[Thunder] text-[50px] leading-[0.92em] text-[#242424] mb-8`
- `tour-albums-list`: `flex flex-row gap-x-8`
- `tour-album-card`: `w-[459px] h-[415px] bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden`
- `tour-album-image`: `w-full h-[303.51px] bg-cover bg-center rounded-t-[9px]`
- `tour-album-info`: `flex flex-col gap-y-1 p-6`
- `tour-album-date`: `font-[Onest] text-[18px] font-bold text-[#242424]`
- `tour-album-manager`: `font-[Onest] text-[18px] text-[#242424]`
- `tour-albums-loadmore`: `mt-8 w-[231px] h-[51px] rounded-[9px] border border-[#242424] bg-[#D9D9D9] font-[Onest] text-[18px] text-[#242424] mx-auto`

**Mobile:**
- `tour-photos-tab-mobile`: `w-full px-4 py-8 flex flex-col gap-y-4`
- `tour-photos-title-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] text-[#242424] mb-4`
- `tour-albums-list-mobile`: `flex flex-col gap-y-4`
- `tour-album-card-mobile`: `w-full bg-white rounded-[9px] shadow-[0_3px_3px_0_rgba(0,0,0,0.16)] flex flex-col overflow-hidden mb-4`
- `tour-album-image-mobile`: `w-full h-[238px] bg-cover bg-center rounded-t-[9px]`
- `tour-album-info-mobile`: `flex flex-col gap-y-1 p-4`
- `tour-album-date-mobile`: `font-[Onest] text-[13px] font-bold text-[#242424]`
- `tour-album-manager-mobile`: `font-[Onest] text-[13px] text-[#242424]`
- `tour-albums-loadmore-mobile`: `mt-4 w-full h-[36px] rounded-[4px] border border-[#242424] bg-[#D9D9D9] font-[Onest] text-[12px] text-[#242424]`

**Pixel-Perfect Notes:**
- Card: 459x415px (desktop), full width (mobile), 9px radius
- Image: 303.51px height (desktop), 238px (mobile)
- Font: Thunder 50px/32px for title, Onest 18px/13px for info
- Button: 231x51px (desktop), full width 36px (mobile)
- All spacing, border, and shadow values match Figma

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact border radius, shadow, and color values
- All pixel values as per Figma

## FAQ Tab
**Description:**
A Frequently Asked Questions section with an accordion for each question. Each item has a question header, expand/collapse icon, and answer text. Pixel-perfect for both desktop and mobile.

**Structure (JSX-like):**
```jsx
<section className="faq-tab">
  <h2 className="faq-title">Frequently Asked Questions</h2>
  <div className="faq-list">
    <div className="faq-accordion">
      <div className="faq-header">
        <span className="faq-question">What's included in the tour package price?</span>
        <span className="faq-icon" />
      </div>
      <div className="faq-answer">The package includes accommodation, daily breakfasts, selected dinners, guided tours, entrance fees for listed attractions, and airport transfers. Flights and travel insurance are also typically bundled unless otherwise stated.</div>
    </div>
    {/* Repeat for each FAQ */}
  </div>
</section>
```

**Tailwind Classes:**
- `faq-tab`: `w-full max-w-[1480px] mx-auto px-[220px] py-12 flex flex-col gap-y-8`
- `faq-title`: `font-[Thunder] text-[50px] leading-[0.92em] text-[#242424] mb-8`
- `faq-list`: `flex flex-col gap-y-4`
- `faq-accordion`: `border border-[rgba(0,0,0,0.55)] rounded-[9px] bg-white overflow-hidden`
- `faq-header`: `flex flex-row items-center justify-between px-6 py-4 bg-[#242424] text-white rounded-t-[9px] cursor-pointer`
- `faq-question`: `font-[Onest] text-[20px] font-bold text-white`
- `faq-icon`: `w-6 h-6 ml-2`
- `faq-answer`: `px-6 py-4 bg-white text-[#242424] rounded-b-[9px] font-[Onest] text-[18px]`

**Mobile:**
- `faq-tab-mobile`: `w-full px-4 py-8 flex flex-col gap-y-4`
- `faq-title-mobile`: `font-[Thunder] text-[32px] leading-[0.92em] text-[#242424] mb-4`
- `faq-list-mobile`: `flex flex-col gap-y-2`
- `faq-accordion-mobile`: `border border-[#DCDCDC] rounded-[4px] bg-white overflow-hidden`
- `faq-header-mobile`: `flex flex-row items-center justify-between px-4 py-2 bg-[#242424] text-white rounded-t-[4px] cursor-pointer`
- `faq-question-mobile`: `font-[Onest] text-[13px] font-bold text-white`
- `faq-icon-mobile`: `w-4 h-4 ml-1`
- `faq-answer-mobile`: `px-4 py-2 bg-white text-[#242424] rounded-b-[4px] font-[Onest] text-[13px]`

**Pixel-Perfect Notes:**
- Card: 9px radius (desktop), 4px (mobile)
- Font: Thunder 50px/32px for title, Onest 20px/13px for question, 18px/13px for answer
- Icon: 24x24px (desktop), 16x16px (mobile)
- All spacing, border, and shadow values match Figma

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact border radius, shadow, and color values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Individual Listing Page (Desktop & Mobile) 