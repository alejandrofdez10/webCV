# webCV — Portfolio personal

Mi CV en versión web: portfolio personal construido con [Astro](https://astro.build) y Tailwind CSS, con soporte multiidioma (ES/EN) y desplegado en GitHub Pages.

🔗 **Demo:** https://alejandrofdez10.github.io/webCV

## Stack

- [Astro 5](https://astro.build) — framework principal (content collections + páginas estáticas)
- [Tailwind CSS](https://tailwindcss.com) — estilos
- [React](https://react.dev) — componentes interactivos puntuales
- [Supabase](https://supabase.com) — funcionalidades "boost" (cliente en `src/lib/supabase.ts`)
- GitHub Actions → GitHub Pages — build y despliegue automático

## Estructura del proyecto

```
src/
├── content/            # Contenido del portfolio (Markdown, colecciones tipadas)
│   ├── proyectos/      # Proyectos técnicos
│   ├── certificaciones/# Títulos y certificaciones
│   ├── articulos/       # Artículos / divulgación
│   ├── prompts/        # Prompts de IA
│   ├── repos/          # Repositorios de GitHub destacados
│   └── config.ts       # Esquemas (zod) de cada colección
├── components/         # Tarjetas y componentes Astro (ProjectCard, CertCard, ...)
├── layouts/            # Layout base del sitio
├── pages/              # Rutas (es/, en/)
├── i18n/               # Diccionario de textos UI (ES/EN)
└── lib/                # Utilidades y cliente Supabase
```

## Contenido (i18n)

Cada elemento del portfolio requiere **dos archivos**, uno por idioma:

```
src/content/<seccion>/nombre.es.md
src/content/<seccion>/nombre.en.md
```

- El campo `slug` debe coincidir en ambos archivos.
- El campo `idioma` indica `"es"` o `"en"`.
- El nombre del archivo va en minúsculas, con guiones y sin acentos.

Las secciones disponibles son `proyectos`, `certificaciones`, `articulos`, `prompts` y `repos`. El esquema (frontmatter) de cada una está definido en [src/content/config.ts](src/content/config.ts).

## Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build de producción
```

### Variables de entorno

Copia `.env.example` a `.env.local` y rellena tus credenciales de Supabase:

```bash
cp .env.example .env.local
```

```
PUBLIC_SUPABASE_URL=...
PUBLIC_SUPABASE_ANON_KEY=...
```

## Despliegue

Cada `push` a `main` dispara el workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml), que construye el sitio con `npm run build` y lo publica en GitHub Pages. Las variables de Supabase se configuran como **secretos del repositorio** (`PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY`).

## Convenciones del proyecto

Ver [CLAUDE.md](CLAUDE.md) para las reglas de contenido y de edición del repositorio.
