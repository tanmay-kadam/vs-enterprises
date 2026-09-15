# VS Enterprises - Catalogue Library

Next.js (App Router, TypeScript) site presenting the distributor's catalogue
PDFs as a browsable library with an in-house page reader.

## Stack
- Next.js 15, React 19, TypeScript, no UI libraries
- Self-hosted fonts via @fontsource (no network fetch at build time)
- Static prerender; deploys to Vercel as-is

## Structure
- `lib/catalogue.ts` - the only data file: catalogues, brands, company info
- `components/CatalogueLibrary.tsx` - folio grid, brand filter chips
- `components/CatalogueViewer.tsx` - modal page reader (scroll + page slider)
- `public/pdf/` - the catalogue PDFs
- `public/catalogue/<slug>/` - per-page JPEG renders used by the reader
- `public/brand-cover.svg` - hero brand plate

## Adding a catalogue
1. Put the PDF in `public/pdf/<slug>.pdf`.
2. Render pages: `pdftoppm -jpeg -r 90 public/pdf/<slug>.pdf public/catalogue/<slug>/pg`
   then rename `pg-1.jpg...` to `p01.jpg...`.
3. Add an entry to `RAW` in `lib/catalogue.ts` (pages count).

## Run
```bash
npm install
npm run build && npm start   # or: npm run dev
```
