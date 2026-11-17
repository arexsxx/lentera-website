# Lentera Outdoor

Source: `lentera_outdoor_prd_style_guide.md`, version 1.2.

Direction: minimalist outdoor rental catalog, designed first for mobile, with product imagery and clear rental information.

Dial: ENERGY 2 / RHYTHM 2 / MOTION 1.

- Palette: Warm White #FCFBF8, Mirage #16232A, white card surfaces, warm neutral supporting surfaces, and Blaze Orange #FF5B04 as the only brand accent. The client's latest request supersedes the guide's green accent.
- Typography: Outfit gives headings and prices the rounded character specified by the brand; Plus Jakarta Sans keeps descriptions and controls readable.
- Composition: a large left-aligned photographic hero establishes the outdoor identity; the catalog supports comparison; packages show their actual contents; the image-and-text section breaks the grid rhythm.
- Cards: white, 12px corners, a quiet border, 12px mobile padding, and no elevation keep images, names, stock, and prices in order. Equal product cards support comparison of equivalent rental items.
- Spacing: 16px mobile gutters, 12px catalog gaps, and 48px section spacing; larger desktop spacing separates browsing tasks.
- Buttons: 8px corners and color-only hover states make actions identifiable without movement or shadows; dark text on orange provides readable contrast.
- Navigation: `public/md/header.png` supplies the contact bar, transparent hero header, compact logo, centered Home/Catalog/Cara sewa menu, account control, and orange basket control. A translucent black surface keeps orange menu text readable over the photograph; a solid Mirage surface preserves contrast after scrolling. Orange text and a bottom border identify hover and the current desktop section; orange indicators identify active mobile destinations.
- Header actions: the account control is visibly labeled "Segera" because login is not implemented. The basket opens an honest empty panel with catalog and WhatsApp actions for the existing rental flow.
- Accent contrast: orange marks icons, underlines, borders, and tinted surfaces; text on light backgrounds stays Mirage for readability. Orange text is used over the dark header, where its contrast is 5.16:1.
- Icons: the existing tent, calendar, compass, and contact icons identify equipment, duration, navigation, and contact actions.
- Imagery: existing outdoor photographs provide context; product imagery stays contained and undistorted. Package cards use their content list because package photographs are unavailable.
- Theme: the brand's fixed warm light browsing surfaces support product comparison; dark surfaces are reserved for outdoor photography, the header, and contact areas.
- Motion: brief color transitions communicate hover and press states; reduced-motion preferences remain respected.

## Home reference update

- Source: `public/md/hero(home).png`; retain the existing header and subsequent catalog sections.
- Hero: large uppercase Outfit title on the left, a dark tent photograph, and the existing hiker cutout on the right reproduce the supplied composition. Existing photos are temporary backgrounds as requested.
- Rental search: a pale compact surface separates native date, duration, computed return date, and keyword controls from the photograph. Dark orange labels preserve contrast on the pale surface. Keyword submission filters the existing catalog; selected dates do not imply live availability.
- Brand strip: the five original assets in `public/brand` sit on a white surface with their original colors. Two identical groups move left over 45 seconds for a seamless loop, per the user's explicit motion request. Hover, keyboard focus, a pause button, and reduced-motion preferences stop movement.
- Mobile: the search reflows into two columns and a full-width submit button; the title scales down and the hiker stays behind the text. Tablet and desktop use the horizontal search layout.
