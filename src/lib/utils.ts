/** Derives the URL slug from an Astro content entry id.
 *  Handles both "name.es.md" (Astro 5 glob) and legacy "name.es" forms. */
export function getSlug(id: string): string {
  return id.replace(/\.(es|en)\.md$/, '').replace(/\.(es|en)$/, '');
}
