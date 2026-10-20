# Apple Fix Solutions (PVT) Ltd — Website

One-page website for the mobile repairing training institute.

## Run locally
- **VS Code:** open this folder, install the "Live Server" extension, right-click `index.html` → *Open with Live Server*.
- **Without any tools:** double-click `index.html` to open it in a browser.

## Structure
```
index.html
css/   base.css · components.css · sections.css · responsive.css
js/    navigation.js · accordion.js · reveal.js · lightbox.js · form.js
images/  logo, owner, certificates, group, workshop photos
```

## Notes
- Fonts (Archivo, Instrument Sans) load from Google Fonts; offline, the page falls back to system fonts.
- Enquiry form: `js/form.js` opens WhatsApp with the details prefilled. Replace it with a backend call when ready.
- Facebook links, phone, WhatsApp and map link are in `index.html` (search for `wa.me`, `facebook.com`, `share.google`).
