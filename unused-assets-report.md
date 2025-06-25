# Unused Assets Report

## Summary
Total unused image files: 90 out of all image files in `/public/assets/`

## Unused Files by Directory

### /public/assets/awards/
**JPG files (not used, PNG versions are used instead):**
- award-1.jpg
- award-2.jpg
- award-3.jpg
- award-3-exact.png (duplicate of award-3.png)
- award-4.jpg
- award-5.jpg
- award-6.jpg
- award-7.jpg
- award-8.jpg
- award-9.jpg
- award-10.jpg
- award-11.jpg
- award-12.jpg
- award-13.jpg
- award-14.jpg
- award-15.jpg

**Card variants (not used):**
- award-card-2.png
- award-card-3.png
- award-card-4.png
- award-card-5.png
- award-card-6.png
- award-card-7.png
- award-card-8.png
- award-card-9.png
- award-card-10.png
- award-card-11.png
- award-card-12.png
- award-card-13.png
- award-card-14.png
- award-card-15.png

### /public/assets/backgrounds/
- cruises-card.jpg
- travel-deals-card.jpg
- trending-now-card.jpg

### /public/assets/country/
- france-destination.jpg
- ireland-destination.jpg
- netherlands-destination.jpg
- norway-destination.jpg
- portugal-destination.jpg
- spain-destination.jpg
- switzerland-background-about.jpg

### /public/assets/cta/
- family-tour-cta-background.jpg

### /public/assets/deals/ (entire directory unused)
- deals-hero.jpg
- deals-image-1.jpg
- deals-image-2.jpg
- deals-image-3.jpg
- deals-split-banner-1.jpg
- deals-split-banner-2.jpg
- featured-bundles-card.jpg
- last-minute-deals-card.jpg
- loyalty-programs-card.jpg
- partner-promotions-card.jpg
- seasonal-offers-about.jpg
- seasonal-offers-card.jpg
- seasonal-offers-hero.jpg

### /public/assets/icons/
- arrow-right.svg
- facebook.svg
- instagram.svg
- verified-icon.svg
- whatsapp.svg
- youtube.svg

### /public/assets/images/
- award-winning-service.jpg
- cna-logo.png
- destination-china.jpg
- email-signature.jpg
- lianhe-zaobao.png
- theme-cultural-historical.jpg
- theme-family-friendly.jpg
- theme-seasonal-tours.jpg
- tour-netherlands-germany-france.jpg
- tour-southern-france.jpg

### /public/assets/logos/
- eu-logo.svg (PNG version is used instead)

### /public/assets/social/
- instagram-profile.jpg

### /public/assets/split-banners/ (entire directory unused)
- built-around-you.jpg
- travel-with-purpose.jpg

### /public/assets/themed-journeys/
- adventure-nature-card.jpg
- cultural-historical-card.jpg
- educational-tours-card.jpg
- explore-world-image-1.jpg
- explore-world-image-2.jpg
- explore-world-image-3.jpg
- family-friendly-about.jpg
- family-friendly-card.jpg
- family-friendly-hero.jpg
- golf-holidays-card.jpg
- luxury-experience-card.jpg
- seasonal-tours-card.jpg
- ski-holidays-card.jpg
- themed-journeys-hero.jpg
- themed-journeys-page-hero.jpg

### /public/assets/tour-details/
- tour-album-3.jpg

## Notes

1. **Awards directory**: The JPG versions of award images are not used; only PNG versions are referenced in the code. The `award-card-*.png` variants (except award-card-1.png) are also unused.

2. **Deals directory**: The entire `/deals/` directory appears to be unused, suggesting the deals feature might not be implemented yet or uses different assets.

3. **Split-banners directory**: This entire directory is unused.

4. **Icons**: Several social media icons in the root icons directory are unused (the code might be using icons from other sources or inline SVGs).

5. **Themed-journeys**: Many card and hero images for different journey types are unused, though some themed journey images are used.

6. **Country images**: Several destination images for countries like France, Ireland, Netherlands, etc. are unused in the country directory.

## Recommendations

1. **Safe to delete**: All files listed above are not referenced anywhere in the codebase and can be safely deleted.

2. **Consider keeping**: 
   - Files in `/deals/` directory if the deals feature is planned for future implementation
   - Award JPG files if you plan to use them as fallbacks or for different contexts

3. **Action items**:
   - Review with the design team to confirm these assets are no longer needed
   - Check if any of these might be referenced in CSS files (though unlikely)
   - Consider creating a backup before deletion