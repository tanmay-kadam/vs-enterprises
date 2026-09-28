/**
 * VS Enterprises catalogue library.
 * Adding a catalogue: put the PDF in public/pdf/<slug>.pdf, render its pages
 * to public/catalogue/<slug>/p01.jpg..., then add one entry to CATALOGS.
 */

export interface Catalog {
  slug: string;
  brand: string;
  name: string;
  pdf: string;
  pages: number;
  cover: string;
}

type Entry = Omit<Catalog, "cover">;

const CATALOGS: Entry[] = [
  { slug: "expo-2026", brand: "Expo", name: "Expo Premium 2026", pdf: "/pdf/expo-2026.pdf", pages: 33 },
  { slug: "expo-book-2025", brand: "Expo", name: "Expo Book 2025", pdf: "/pdf/expo-book-2025.pdf", pages: 44 },
  { slug: "gt-catalogue", brand: "Gebi", name: "GT Catalogue", pdf: "/pdf/gt-catalogue.pdf", pages: 18 },
  { slug: "product-catalog-2026", brand: "Vaya", name: "Vaya Product Catalogue 2026", pdf: "/pdf/product-catalog-2026.pdf", pages: 55 },
  { slug: "bmt-festive-2026-27", brand: "BMT", name: "BMT Festive 2026-27", pdf: "/pdf/bmt-festive-2026-27.pdf", pages: 15 },
  { slug: "chef-story-2026-27", brand: "The Chef Story", name: "Chef Story Cookware 2026-27", pdf: "/pdf/chef-story-2026-27.pdf", pages: 8 },
  { slug: "page-no", brand: "Deuralux", name: "Deuralux Product Catalogue 2026-27", pdf: "/pdf/page-no.pdf", pages: 16 },
  { slug: "catalogue-14102025", brand: "VS Enterprises", name: "Catalogue 14 Oct 2025", pdf: "/pdf/catalogue-14102025.pdf", pages: 6 },
];

export const catalogs: Catalog[] = CATALOGS.map((c) => ({
  ...c,
  cover: `/catalogue/${c.slug}/p01.jpg`,
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
