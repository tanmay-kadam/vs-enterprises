"use client";

import { type Catalog } from "@/lib/catalogue";

/** Fired by the library folios; opens the shared catalogue reader. */
export const OPEN_CATALOG_EVENT = "vs:open-catalog";

export interface OpenCatalogDetail {
  catalog: Catalog;
}

export function openCatalog(catalog: Catalog): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<OpenCatalogDetail>(OPEN_CATALOG_EVENT, {
      detail: { catalog },
    })
  );
}
