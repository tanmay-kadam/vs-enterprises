#!/usr/bin/env bash
# Add a catalogue PDF to the VS Enterprises library.
#
#   ./scripts/add-catalogue.sh <pdf-file> <slug> "<Brand>" "<Display Name>"
#
# Example:
#   ./scripts/add-catalogue.sh ~/Downloads/small-catalogue.pdf small-catalogue "Vaya" "Small Catalogue 2026"
#
# It compresses the PDF, renders every page to a JPEG, and prints the exact
# line to paste into lib/catalogue.ts (insert it inside the CATALOGS array).
set -euo pipefail

PDF="${1:?usage: add-catalogue.sh <pdf> <slug> <brand> <name>}"
SLUG="${2:?missing slug, e.g. small-catalogue}"
BRAND="${3:?missing brand, e.g. Vaya}"
NAME="${4:?missing display name}"

[ -f "$PDF" ] || { echo "error: $PDF not found"; exit 1; }

DEST="public/pdf/$SLUG.pdf"
IMGDIR="public/catalogue/$SLUG"
mkdir -p public/pdf public/catalogue

PAGES_BEFORE=$(pdfinfo "$PDF" | awk '/^Pages/{print $2}')
echo "source: $PDF ($PAGES_BEFORE pages)"

# compress with ghostscript, but keep the original if it would break or grow
if command -v gs >/dev/null 2>&1; then
  gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
     -dNOPAUSE -dQUIET -dBATCH -sOutputFile="/tmp/gs-$SLUG.pdf" "$PDF" 2>/dev/null || true
  PAGES_AFTER=$(pdfinfo "/tmp/gs-$SLUG.pdf" 2>/dev/null | awk '/^Pages/{print $2}' || true)
  if [ "$PAGES_BEFORE" = "$PAGES_AFTER" ] && [ -s "/tmp/gs-$SLUG.pdf" ] \
     && [ "$(stat -c%s "/tmp/gs-$SLUG.pdf")" -lt "$(stat -c%s "$PDF")" ]; then
    mv "/tmp/gs-$SLUG.pdf" "$DEST"
    echo "compressed: $(du -h "$PDF" | cut -f1) -> $(du -h "$DEST" | cut -f1)"
  else
    rm -f "/tmp/gs-$SLUG.pdf"
    cp "$PDF" "$DEST"
    echo "kept original size ($(du -h "$DEST" | cut -f1))"
  fi
else
  cp "$PDF" "$DEST"
  echo "ghostscript not found: kept original size"
fi

# render pages -> public/catalogue/<slug>/p01.jpg ...
mkdir -p "$IMGDIR"
rm -f "$IMGDIR"/pg-*.jpg "$IMGDIR"/p*.jpg
pdftoppm -jpeg -r 90 "$DEST" "$IMGDIR/pg"
i=1
for f in "$IMGDIR"/pg-*.jpg; do
  mv "$f" "$IMGDIR/p$(printf %02d "$i").jpg"
  i=$((i+1))
done
COUNT=$(ls "$IMGDIR" | wc -l)
echo "pages rendered: $COUNT"

cat <<EOF

------------------------------------------------------------------
Paste this line inside the CATALOGS array in lib/catalogue.ts:

  { slug: "$SLUG", brand: "$BRAND", name: "$NAME", pdf: "/pdf/$SLUG.pdf", pages: $COUNT },

Then rebuild:  npm run build
------------------------------------------------------------------
EOF
