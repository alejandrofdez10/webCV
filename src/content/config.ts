import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    idioma:     z.enum(['es', 'en']),
    titulo:     z.string(),
    fecha:      z.date(),
    resumen:    z.string(),
    stack:      z.array(z.string()),
    repo:       z.string().url().optional(),
    demo:       z.string().url().optional(),
    destacado:  z.boolean().default(false),
    diagrama:   z.string().optional(),
  }),
});

const certificaciones = defineCollection({
  type: 'content',
  schema: z.object({
    idioma:               z.enum(['es', 'en']),
    titulo:               z.string(),
    emisor:               z.string(),
    fecha:                z.date(),
    categoria:            z.enum(['IA', 'Cloud', 'Visualización', 'Habilidades', 'Otro']),
    logo:                 z.string().optional(),
    enlace_verificacion:  z.string().url().optional(),
    credencial_id:        z.string().optional(),
    pdf:                  z.string().optional(),
  }),
});

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    idioma:   z.enum(['es', 'en']),
    titulo:   z.string(),
    fecha:    z.date(),
    resumen:  z.string(),
    tags:     z.array(z.string()),
    imagen:   z.string().optional(),
  }),
});

const prompts = defineCollection({
  type: 'content',
  schema: z.object({
    idioma:      z.enum(['es', 'en']),
    titulo:      z.string(),
    categoria:   z.string(),
    descripcion: z.string(),
    tags:        z.array(z.string()),
    github:      z.string().url().optional(),
    demo:        z.string().optional(),
  }),
});

const repos = defineCollection({
  type: 'content',
  schema: z.object({
    idioma:      z.enum(['es', 'en']),
    titulo:      z.string(),
    descripcion: z.string(),
    repo:        z.string().url(),
    lenguaje:    z.string(),
    tags:        z.array(z.string()),
    destacado:   z.boolean().default(false),
  }),
});

export const collections = { proyectos, certificaciones, articulos, prompts, repos };
