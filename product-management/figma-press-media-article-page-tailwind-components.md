# EU Holidays Press & Media Article Page Tailwind Component Guide

---

## NavBar
**Description:**
Top navigation bar with logo, menu items, and hamburger menu. Matches Booking/About style.

**Structure (JSX-like):**
```jsx
<nav className="navbar-press-article">
  <div className="logo-press-article" />
  <ul className="menu-items-press-article">
    <li>Travel Essentials</li>
    <li>Travel Club</li>
    <li>Menu <span className="hamburger-menu-press-article" /></li>
  </ul>
</nav>
```

**Tailwind Classes:**
- `navbar-press-article`: `w-full h-[121.6px] bg-white flex items-center px-8 justify-between`
- `logo-press-article`: `w-[144.95px] h-[102px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `menu-items-press-article`: `flex flex-row gap-x-8 font-[Thunder] text-[27px] leading-[0.92em] tracking-[.03em] text-black uppercase`
- `hamburger-menu-press-article`: `hidden md:inline-block w-[17.12px] h-[9.18px] ml-2`

**Mobile:**
```jsx
<nav className="navbar-press-article-mobile">
  <div className="logo-press-article-mobile" />
  <button className="hamburger-press-article-mobile" />
</nav>
```
- `navbar-press-article-mobile`: `w-full h-[50.33px] bg-white flex items-center justify-between px-4 fixed top-0 left-0 z-50`
- `logo-press-article-mobile`: `w-[71.52px] h-[50.33px] bg-[url('/logo.svg')] bg-contain bg-no-repeat`
- `hamburger-press-article-mobile`: `w-[17.73px] h-[11.82px] flex flex-col justify-between`

---

## Article Title & Metadata
**Description:**
Section with article title, publication date, source, and description. Pixel-perfect spacing and typography.

**Structure (JSX-like):**
```jsx
<section className="press-article-title-section">
  <h1 className="press-article-title">Our inaugural leisure trip to Germany on 21 Sep 2021</h1>
  <div className="press-article-meta">
    <span className="press-article-date">Published 21 Sep 2021</span>
    <span className="press-article-bullet">•</span>
    <span className="press-article-source">Featured in Lianhe Zao Bao</span>
  </div>
  <div className="press-article-description">In this interview with Lianhe Zaobao, our director, Mr Wong Yew Hoong, elaborates more on our inaugural trip to Germany next week and the various measures in place to ensure a safe and enjoyable trip for our customers.</div>
</section>
```

**Tailwind Classes:**
- `press-article-title-section`: `w-[832px] mx-auto mt-24 flex flex-col gap-y-2`
- `press-article-title`: `font-[Thunder] text-[58px] font-medium text-[#242424] mb-2 leading-[1.26em] uppercase`
- `press-article-meta`: `flex flex-row items-center gap-x-2 font-[Onest] text-[18px] text-[#242424] tracking-[.03em] mb-2`
- `press-article-date`: `font-[Onest] text-[18px] text-[#242424] tracking-[.03em]`
- `press-article-bullet`: `mx-2`
- `press-article-source`: `font-[Onest] text-[18px] text-[#242424] tracking-[.03em]`
- `press-article-description`: `font-[Onest] text-[18px] text-[#242424] leading-[1.27em] mb-4`

**Mobile:**
- `press-article-title-section-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-1`
- `press-article-title-mobile`: `font-[Thunder] text-[35px] font-medium text-[#242424] mb-1 leading-[1.06em] uppercase`
- `press-article-meta-mobile`: `flex flex-row items-center gap-x-1 font-[Onest] text-[10px] text-[#242424] tracking-[.03em] mb-1`
- `press-article-date-mobile`: `font-[Onest] text-[10px] text-[#242424] tracking-[.03em]`
- `press-article-bullet-mobile`: `mx-1`
- `press-article-source-mobile`: `font-[Onest] text-[10px] text-[#242424] tracking-[.03em]`
- `press-article-description-mobile`: `font-[Onest] text-[13px] text-[#242424] leading-[1.27em] mb-2`

---

## Article Image
**Description:**
Main article image with rounded corners and border.

**Structure (JSX-like):**
```jsx
<img className="press-article-image" src="/article-image.jpg" />
```

**Tailwind Classes:**
- `press-article-image`: `w-[832.43px] h-[758px] rounded-[20px] object-cover border border-[#E8E8E8] mx-auto my-8`

**Mobile:**
- `press-article-image-mobile`: `w-[325px] h-[296px] rounded-[20px] object-cover border border-[#E8E8E8] mx-auto my-4`

---

## Read Original Article Button
**Description:**
Button to read the original article. Pixel-perfect size, border, and font.

**Structure (JSX-like):**
```jsx
<button className="press-article-read-original">Read Original Article</button>
```

**Tailwind Classes:**
- `press-article-read-original`: `w-[245px] h-[51px] bg-[#242424] text-white font-[Onest] text-[18px] rounded-[9px] border border-[#242424] mx-auto flex items-center justify-center hover:bg-[#333] transition-colors`

**Mobile:**
- `press-article-read-original-mobile`: `w-[155px] h-[35px] bg-[#242424] text-white font-[Onest] text-[12px] rounded-[9px] border border-[#242424] mx-auto flex items-center justify-center hover:bg-[#333] transition-colors`

---

## Read More Articles (Sidebar/Section)
**Description:**
List of related articles with title and date. Pixel-perfect spacing and font.

**Structure (JSX-like):**
```jsx
<aside className="press-article-read-more">
  <h2 className="press-article-read-more-title">Read More Articles</h2>
  <ul className="press-article-read-more-list">
    <li className="press-article-read-more-item">
      <span className="press-article-read-more-title">Cross-Border Shopping Gets a Lift as THE COMMUNE Partners with EU Holidays</span>
      <span className="press-article-read-more-date">7 Sep 2023</span>
    </li>
    {/* ...other articles */}
  </ul>
</aside>
```

**Tailwind Classes:**
- `press-article-read-more`: `w-[525px] mx-auto mt-12 flex flex-col gap-y-4`
- `press-article-read-more-title`: `font-[Thunder] text-[42px] font-medium text-[#242424] mb-2`
- `press-article-read-more-list`: `flex flex-col gap-y-6`
- `press-article-read-more-item`: `flex flex-col gap-y-1 border-b border-[#E8E8E8] pb-4`
- `press-article-read-more-title`: `font-[Thunder] text-[23px] font-medium text-[#242424] leading-[1.3em] tracking-[.03em]`
- `press-article-read-more-date`: `font-[Onest] text-[15px] text-[rgba(71,85,105,0.5)] tracking-[.03em]`

**Mobile:**
- `press-article-read-more-mobile`: `w-full px-4 mt-8 flex flex-col gap-y-2`
- `press-article-read-more-title-mobile`: `font-[Thunder] text-[30px] font-medium text-[#242424] mb-1`
- `press-article-read-more-list-mobile`: `flex flex-col gap-y-4`
- `press-article-read-more-item-mobile`: `flex flex-col gap-y-1 border-b border-[#E8E8E8] pb-2`
- `press-article-read-more-title-mobile`: `font-[Thunder] text-[18px] font-medium text-[#242424] leading-[1.28em] tracking-[.03em]`
- `press-article-read-more-date-mobile`: `font-[Onest] text-[10px] text-[rgba(71,85,105,0.5)] tracking-[.03em]`

---

## Footer
**Description:**
Footer with background, divider, columns (Links, Explore, Policies, Find Us), contact info, social icons, and copyright.

**Structure (JSX-like):**
```jsx
<footer className="footer-press-article">
  <div className="footer-bg-press-article" />
  <div className="footer-content-press-article">
    <div className="footer-links-press-article">
      <div className="footer-col-press-article">Links</div>
      <div className="footer-col-press-article">Explore</div>
      <div className="footer-col-press-article">Policies</div>
      <div className="footer-col-press-article">Find Us</div>
    </div>
    <div className="footer-contact-press-article">
      <div>+65 6958 8888</div>
      <div>1 Raffles Blvd, Level 2 Crescent 2, 039593</div>
      <div>Monday to Sunday, 11AM to 8PM</div>
    </div>
    <div className="footer-social-press-article">
      <span className="social-icon-press-article" />
      {/* ... */}
    </div>
    <div className="footer-divider-press-article" />
    <div className="footer-copyright-press-article">© 2025 EU Holidays Pte Ltd. All rights reserved.</div>
  </div>
</footer>
```

**Tailwind Classes:**
- `footer-press-article`: `relative w-full h-[540px] bg-[#242424] text-white flex items-center justify-center`
- `footer-bg-press-article`: `absolute inset-0 w-full h-full bg-[#242424]`
- `footer-content-press-article`: `relative z-10 w-full max-w-[1480px] px-8 py-16 flex flex-col`
- `footer-links-press-article`: `flex flex-row gap-x-16 mb-8`
- `footer-col-press-article`: `flex flex-col gap-y-2 font-[Thunder] text-[24px]`
- `footer-contact-press-article`: `flex flex-col gap-y-2 font-[Onest] text-[18px] mb-8`
- `footer-social-press-article`: `flex flex-row gap-x-4 mb-8`
- `social-icon-press-article`: `w-[20px] h-[20px]`
- `footer-divider-press-article`: `w-full h-[1px] bg-[#5C5C5C] my-8`
- `footer-copyright-press-article`: `font-[Onest] text-[18px]`

**Mobile:**
- `footer-press-article-mobile`: `w-full bg-[#242424] text-white flex flex-col items-center py-8 px-4`
- `footer-content-press-article-mobile`: `w-full flex flex-col gap-y-4`
- `footer-links-press-article-mobile`: `flex flex-col gap-y-2 mb-4`
- `footer-col-press-article-mobile`: `font-[Thunder] text-[14px]`
- `footer-contact-press-article-mobile`: `flex flex-col gap-y-1 font-[Onest] text-[12px] mb-4`
- `footer-social-press-article-mobile`: `flex flex-row gap-x-4 mb-4`
- `social-icon-press-article-mobile`: `w-[20px] h-[20px]`
- `footer-divider-press-article-mobile`: `w-full h-[1px] bg-[#5C5C5C] my-4`
- `footer-copyright-press-article-mobile`: `font-[Onest] text-[12px]`

---

**Custom Tailwind Config Needed:**
- Thunder and Onest font families
- Exact letter spacing and shadow values
- All pixel values as per Figma

// End of pixel-perfect Tailwind component documentation for Press & Media Article Page (Desktop & Mobile) 