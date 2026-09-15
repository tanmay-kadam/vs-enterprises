/**
 * VS Enterprises catalogue library data.
 * Adding a catalogue: drop the PDF in public/pdf/, render its pages to
 * public/catalogue/<slug>/p01.jpg…, then add one entry below.
 */

export interface Catalog {
  slug: string;
  brand: string;
  name: string;
  pdf: string;
  pages: number;
  /** true when per-page renders exist under /catalogue/<slug>/ */
  images?: boolean;
  cover: string;
}

type Entry = Omit<Catalog, "cover">;

const RAW: Entry[] = [
  { slug: "expo-2026", brand: "Expo", name: "Expo Premium 2026", pdf: "/pdf/expo-2026.pdf", pages: 33, images: true },
  { slug: "expo-book-2025", brand: "Expo", name: "Expo Book 2025", pdf: "/pdf/expo-book-2025.pdf", pages: 44, images: true },
  { slug: "roxx-steelware", brand: "Roxx", name: "Roxx Steelware", pdf: "/pdf/roxx-steelware.pdf", pages: 28, images: true },
  { slug: "roxx-glassware", brand: "Roxx", name: "Roxx Glassware", pdf: "/pdf/roxx-glassware.pdf", pages: 100, images: true },
  { slug: "roxx-giftware", brand: "Roxx", name: "Roxx Giftware", pdf: "/pdf/roxx-giftware.pdf", pages: 91, images: true },
  { slug: "roxx-dhamaka", brand: "Roxx", name: "Roxx Dhamaka", pdf: "/pdf/roxx-dhamaka.pdf", pages: 32, images: true },
  { slug: "gt-catalogue", brand: "Gebi", name: "GT Catalogue", pdf: "/pdf/gt-catalogue.pdf", pages: 18, images: true },
  { slug: "gt-catalogue-2026", brand: "Gebi", name: "GT Catalogue 2026", pdf: "/pdf/gt-catalogue-2026.pdf", pages: 6, images: true },
  { slug: "bmt-festive-2026", brand: "BMT", name: "BMT Festive 2026", pdf: "/pdf/bmt-festive-2026.pdf", pages: 15, images: true },
  { slug: "catalogue-14102025", brand: "VS Enterprises", name: "Catalogue 14 Oct 2025", pdf: "/pdf/catalogue-14102025.pdf", pages: 6, images: true },
  { slug: "brass-signature-collection", brand: "Expo", name: "Brass Signature Collection", pdf: "/pdf/brass-signature-collection.pdf", pages: 8, images: true },
  { slug: "kansa-wellness-range", brand: "Expo", name: "Kansa Wellness Range", pdf: "/pdf/kansa-wellness-range.pdf", pages: 8, images: true },
  { slug: "serveware-gift-sets", brand: "Expo", name: "Serveware & Gift Sets", pdf: "/pdf/serveware-gift-sets.pdf", pages: 8, images: true },
];

export const catalogs: Catalog[] = RAW.map((c) => ({
  ...c,
  cover: c.images ? `/catalogue/${c.slug}/p01.jpg` : "/brand-cover.svg",
}));

export interface Brand {
  id: string;
  name: string;
  caption: string;
}

export const brands: Brand[] = [
  { id: "anjal", name: "Anjal", caption: "Since 1974" },
  { id: "roxx", name: "Roxx", caption: "Always Special" },
  { id: "agaro", name: "Agaro", caption: "Premium Appliances" },
  { id: "gebi", name: "Gebi", caption: "Your Cleaning Partner" },
  { id: "expo", name: "Expo", caption: "Pure Brass · Steel" },
  { id: "vaya", name: "Vaya", caption: "Wellness & Lifestyle" },
  { id: "bmt", name: "bmt", caption: "Thermoscape" },
  { id: "deuralux", name: "Deuralux", caption: "Premium Gifts" },
];

export const COMPANY = {
  name: "VS Enterprises",
  tagline: "Authorised Distributor",
  address: "A-46, Wazirpur Industrial Area, New Delhi - 110052",
  phone1: "011-41052627",
  phone2: "93100 24835",
  email: "vsenterprises1225@gmail.com",
};

export const TOTAL_PAGES = catalogs.reduce((sum, c) => sum + c.pages, 0);

export const pageImg = (slug: string, n: number) =>
  `/catalogue/${slug}/p${String(n).padStart(2, "0")}.jpg`;
