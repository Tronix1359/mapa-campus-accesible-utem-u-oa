/**
 * astro.config.mjs — Configuración del proyecto Astro
 *
 * PROPÓSITO
 *   Astro lee este archivo antes que cualquier otro. Aquí solo se declara
 *   lo que se aparta de los valores por defecto.
 *
 * DECISIONES
 *   1. `site`          → dominio público. Lo usan la URL canónica, las
 *                        etiquetas Open Graph y el sitemap.
 *   2. `sitemap()`     → integración oficial que genera sitemap-index.xml
 *                        (requisito de SEO básico del encargo).
 *   3. `compressHTML`  → se fija en `true`. Desde Astro 7 el valor por
 *                        defecto es 'jsx', que elimina los espacios entre
 *                        elementos en línea. Con `true` se conserva el
 *                        espaciado normal de HTML y los textos con citas
 *                        (<sup>) no quedan pegados a la palabra siguiente.
 *   4. `inlineStylesheets: 'always'` → el CSS pesa pocos KB; incrustarlo
 *                        en el HTML evita una petición que bloquea el
 *                        primer pintado (mejora Rendimiento en Lighthouse).
 */

// Activa la verificación de tipos de TypeScript en este archivo JavaScript.
// @ts-check

// defineConfig no cambia el objeto: solo aporta tipos y autocompletado.
import { defineConfig } from 'astro/config';

// Integración oficial: recorre las páginas generadas y escribe el sitemap.
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ⚠ REEMPLAZAR por la URL real del despliegue antes de publicar
  // (por ejemplo https://mi-equipo.netlify.app). Ver README, paso 4.
  site: https://exquisite-syrniki-8bfced.netlify.app,

  // Si se publica en GitHub Pages dentro de un repositorio
  // (https://usuario.github.io/nombre-repo/), descomentar y ajustar:
  // base: '/nombre-repo',

  integrations: [sitemap()],

  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
  },
});
