# public/

Static assets served at `/`.

- `ChristianDean.pkpass`: Apple Wallet digital business card (real, signed pass)
- `christian-dean.vcf`: vCard fallback for non-iOS visitors
- `favicon.svg`: placeholder favicon
- `resumes/christian-d-smith-resume.pdf`: the authored extended resume (with
  the Early Career section), served as the unfiltered "Download full resume"
  link. This one is committed; update it by replacing the file.

Every other file in `resumes/` is a lens-filtered PDF generated at build time
by `scripts/generate-resumes.ts` from the data in `lib/`, and is gitignored.

The Open Graph image is generated at build time by `app/opengraph-image.tsx`.

Still optional to add before launch:

- `Smith_Labs_Logo_Icon.png`: Bird of paradise raster logo (an inline SVG
  rendition is used in the hero, so this is not required)
- `biz-card-front.png`, `biz-card-back.png`: Business card imagery
- Company logos for experience entries (wire up via `logoPath` in
  `lib/experience.ts`)
