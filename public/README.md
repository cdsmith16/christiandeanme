# public/

Static assets served at `/`.

Files expected here but not yet provided (swap in before launch):

- `ChristianDean.pkpass` — Apple Wallet digital business card
- `Smith_Labs_Logo_Icon.png` — Bird of paradise logo
- `og-image.jpg` — Designed OG social preview (the inline SVG is a placeholder)
- `biz-card-front.png`, `biz-card-back.png` — Business card imagery

The site degrades gracefully when these are missing — links will 404 but the
page still renders. An inline SVG bird of paradise is used in the hero so no
raster logo is required for first deploy.
