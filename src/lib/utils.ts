/** Derives the URL slug from an Astro content entry id, e.g. "analisis-datos-ej.es" → "analisis-datos-ej" */
export function getSlug(id: string): string {
  return id.replace(/\.(es|en)$/, '');
}
