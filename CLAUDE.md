# Portfolio Web — Reglas del proyecto

**Stack:** Astro 5.x · Tailwind CSS · i18n ES/EN · GitHub Pages · Supabase boost  
**URL:** https://alejandrofdez10.github.io/webCV  
**Deploy:** `git push` a `main` → GitHub Actions → automático

---

## Convención de contenido (OBLIGATORIA)

Todo elemento del portfolio requiere **dos archivos**:

```
src/content/<seccion>/nombre.es.md
src/content/<seccion>/nombre.en.md
```

- El campo `slug` debe ser idéntico en ambos archivos
- El campo `idioma` indica el idioma: `"es"` / `"en"`
- Nombre de archivo: minúsculas, guiones, sin acentos

## Secciones disponibles

| Carpeta           | Descripción         |
|-------------------|---------------------|
| `proyectos/`      | Proyectos técnicos  |
| `certificaciones/`| Títulos y certs     |
| `articulos/`      | Artículos/divulgación|
| `prompts/`        | Prompts de IA       |
| `repos/`          | Repositorios GitHub |

## Para añadir contenido

1. Crear `src/content/<seccion>/nombre.es.md` y `.en.md`
2. Completar frontmatter según la sección (ver ejemplos en cada carpeta)
3. `npm run dev` para previsualizar
4. `git push` para publicar

## REGLAS

1. **Solo editar `src/content/` y `public/`** para añadir contenido.
2. Para tocar `src/pages/`, `src/components/`, `src/layouts/`, `astro.config.mjs`, etc. → **preguntar primero**.
3. Previsualizar siempre con `npm run dev` antes de hacer push.
4. Supabase: variables en `.env.local` (no subir a git) y como secretos en GitHub Actions.
