export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home':             'Inicio',
    'nav.projects':         'Proyectos',
    'nav.certifications':   'Certificaciones',
    'nav.articles':         'Artículos',
    'nav.prompts':          'Prompts',
    'nav.repos':            'Repos',
    'hero.role':            'Data Scientist · Machine Learning · IA',
    'hero.bio':             'Transformo datos en decisiones y construyo soluciones de IA que generan impacto real.',
    'hero.cta.projects':    'Ver proyectos',
    'hero.cta.cv':          'Descargar CV',
    'section.featured':     'Destacados',
    'section.projects':     'Proyectos',
    'section.certifications': 'Certificaciones',
    'section.articles':     'Artículos',
    'section.prompts':      'Prompts',
    'section.repos':        'GitHub Repos',
    'boost.label':          'Boost',
    'boost.voted':          '¡Votado!',
    'boost.cooldown':       'Espera un momento',
    'footer.rights':        'Todos los derechos reservados.',
    'filter.all':           'Todos',
    'back':                 '← Volver',
    'readmore':             'Ver todos →',
    'viewrepo':             'Ver código',
    'viewdemo':             'Ver demo',
    'verifycert':           'Verificar',
    'downloadpdf':          'Descargar PDF',
    'empty':                'Aún no hay contenido en esta sección.',
  },
  en: {
    'nav.home':             'Home',
    'nav.projects':         'Projects',
    'nav.certifications':   'Certifications',
    'nav.articles':         'Articles',
    'nav.prompts':          'Prompts',
    'nav.repos':            'Repos',
    'hero.role':            'Data Scientist · Machine Learning · AI',
    'hero.bio':             'I transform data into decisions and build AI solutions that generate real impact.',
    'hero.cta.projects':    'View projects',
    'hero.cta.cv':          'Download CV',
    'section.featured':     'Featured',
    'section.projects':     'Projects',
    'section.certifications': 'Certifications',
    'section.articles':     'Articles',
    'section.prompts':      'Prompts',
    'section.repos':        'GitHub Repos',
    'boost.label':          'Boost',
    'boost.voted':          'Voted!',
    'boost.cooldown':       'Wait a moment',
    'footer.rights':        'All rights reserved.',
    'filter.all':           'All',
    'back':                 '← Back',
    'readmore':             'View all →',
    'viewrepo':             'View code',
    'viewdemo':             'View demo',
    'verifycert':           'Verify',
    'downloadpdf':          'Download PDF',
    'empty':                'No content in this section yet.',
  },
} as const;

type UiKeys = keyof typeof ui.es;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UiKeys): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}
