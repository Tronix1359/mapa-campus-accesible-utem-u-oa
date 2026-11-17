# Landing page: Ingeniería en Informática (UTEM)

Página web de una sola vista que presenta la carrera de **Ingeniería en Informática de la Universidad Tecnológica Metropolitana** a postulantes de enseñanza media y a sus familias. Cada dato de la página lleva la fuente oficial de donde salió.

Esta guía está escrita para una persona de la Escuela **sin conocimientos de programación**. Explica tres cosas: dónde está publicada la página, cómo actualizar su información y cómo verla en un computador.

> Trabajo de la asignatura EFE685, Electivo de Computación Móvil. No es un sitio oficial de la UTEM.
> El detalle de las decisiones del proyecto está en [INFORME.md](./INFORME.md).

---

## 1. Dónde está publicada

| Qué | Dirección |
|---|---|
| Página publicada | https://exquisite-syrniki-8bfced.netlify.app |
| Repositorio con el código | https://github.com/Tronix1359/landing-informatica-utem/tree/main |

Cada vez que se guarda un cambio en la rama principal del repositorio (`main`), el servicio de publicación reconstruye la página sola. Tarda uno o dos minutos.

---

## 2. Cómo actualizar la información

**Regla principal: para cambiar un texto o una cifra no se toca el código.** Todo el contenido está en la carpeta `src/content/`, en archivos de texto con formato JSON. Se pueden editar desde el sitio de GitHub (botón del lápiz) o con cualquier editor de texto.

### 2.1 Qué archivo corresponde a cada sección

| Quiero cambiar… | Archivo en `src/content/` |
|---|---|
| Nombre, título, grado, duración, jornada, código DEMRE | `carrera.json` |
| La comparación con carreras afines | `afines.json` |
| Las capacidades del perfil de egreso | `perfil-egreso.json` |
| Las asignaturas de la malla | `malla.json` |
| Las áreas de trabajo | `campo-laboral.json` |
| Cifras: empleabilidad, vacantes, arancel, matrícula | `indicadores.json` |
| Acreditación, certificación y otros respaldos | `respaldo.json` |
| Vías de ingreso | `vias.json` |
| Ponderaciones | `ponderaciones.json` |
| Fechas del proceso de admisión | `fechas.json` |
| Preguntas frecuentes | `faq.json` |
| La lista de fuentes | `referencias.json` |

### 2.2 Ejemplo: actualizar el arancel

1. Abra `src/content/indicadores.json`.
2. Busque el bloque cuyo `"id"` es `"arancel"`.
3. Cambie `"valor"` (por ejemplo `"$4.900.000"`) y `"periodo"` (por ejemplo `"Año 2027"`).
4. Revise que `"fuentes"` apunte al documento de donde sacó el dato nuevo (ver 2.3).
5. Guarde. La página se actualiza sola.

### 2.3 Ningún dato sin fuente

Cada bloque de contenido tiene una línea `"fuentes": ["F01"]`. Ese código es el identificador de una fuente en `referencias.json`.

Para citar un documento nuevo:

1. Agregue un bloque al final de `referencias.json`, con un `"id"` nuevo (`"F13"`, `"F14"`…).
2. Complete autor, fecha de publicación, título, dirección web (`url`), tipo (`"primaria"` o `"secundaria"`) y la fecha en que usted abrió el documento (`fechaConsulta`, con formato `AAAA-MM-DD`).
3. Use ese `"id"` en la línea `"fuentes"` del dato.

**El sistema revisa esto por usted.** Si un dato queda sin fuente, si cita un código que no existe, si a una cifra le falta el período o si las ponderaciones no suman 100, la página **no se publica** y el servicio muestra un mensaje de error. La versión anterior sigue en línea hasta que el error se corrija.

### 2.4 Qué revisar cada año (antes de la postulación)

- [ ] Ponderaciones, vacantes y promedio mínimo (`ponderaciones.json`, `indicadores.json`).
- [ ] Arancel y matrícula (`indicadores.json`).
- [ ] Fechas del proceso de admisión (`fechas.json`).
- [ ] Vigencia de la acreditación institucional y de la certificación de la carrera (`respaldo.json`).
- [ ] Empleabilidad (`indicadores.json`).
- [ ] Malla, si hubo cambios en el plan de estudios (`malla.json`).
- [ ] La fecha de consulta de cada fuente (`referencias.json`).

### 2.5 Errores frecuentes al editar

| Mensaje (resumido) | Qué significa | Cómo se arregla |
|---|---|---|
| `Unexpected token` o `JSON` | Falta o sobra una coma o una comilla | Compare el bloque editado con el bloque vecino |
| `fuentes` … `does not exist` / `no existe` | Se citó un código que no está en `referencias.json` | Corrija el código o agregue la fuente |
| `Invalid url` | La dirección web está mal escrita | Debe comenzar con `https://` |
| `Las ponderaciones deben sumar 100` | Los porcentajes no suman 100 | Revise `ponderaciones.json` |

---

## 3. Cómo ver la página en su computador

Solo es necesario para probar cambios grandes antes de publicarlos.

1. Instale **Node.js versión 24 o superior** desde <https://nodejs.org> (botón "LTS").
2. Descargue el repositorio (botón verde **Code → Download ZIP**) y descomprímalo.
3. Abra una terminal dentro de la carpeta del proyecto y escriba:

   ```bash
   npm install      # descarga las piezas necesarias (solo la primera vez)
   npm run dev      # abre la página en modo de prueba
   ```

4. Abra en el navegador la dirección que muestra la terminal (normalmente `http://localhost:4321`). Los cambios que guarde se ven al instante.

Otros comandos:

| Comando | Para qué sirve |
|---|---|
| `npm run build` | Genera la página final en la carpeta `dist/`. Falla si algún dato no cumple las reglas |
| `npm run preview` | Muestra la página final ya generada |
| `npm run check` | Revisa los tipos de TypeScript de todo el proyecto |

---

## 4. Cómo se publica (una sola vez)

1. Suba el proyecto a un repositorio de GitHub.
2. Cree una cuenta en [Netlify](https://www.netlify.com), elija **Add new site → Import an existing project** y seleccione el repositorio. Netlify detecta Astro: comando `npm run build`, carpeta `dist`.
3. En Netlify, fije la versión de Node en 24 (el archivo `.nvmrc` ya lo indica).
4. Copie la dirección que entrega Netlify y péguela en dos lugares:
   - `astro.config.mjs`, en la línea `site: '…'`.
   - `public/robots.txt`, en la línea `Sitemap:`.
5. Anote esa dirección en la tabla de la sección 1 de este documento.

También funciona en GitHub Pages, Cloudflare Pages o Vercel. En GitHub Pages hay que descomentar además la línea `base` de `astro.config.mjs`.

---

## 5. Cómo está organizado el proyecto

```text
src/
  content/            Datos editables (un archivo por sección)
  content.config.ts   Reglas que debe cumplir cada dato
  components/         Un componente por sección: Hero, Malla, Admision…
  layouts/
    BaseLayout.astro  Estructura común: metadatos, cabecera y pie
  pages/
    index.astro       Página única: define el orden de las secciones
  lib/formato.ts      Funciones de apoyo (fechas, nombres de líneas)
  styles/global.css   Colores, tipografía y diseño responsivo
public/               Ícono, imagen para redes sociales, robots.txt
docs/                 Wireframes del mapa de contenidos
README.md             Este documento
INFORME.md            Informe del proyecto
```

## 6. Contacto del equipo

`COMPLETAR: nombres y correos institucionales de las personas integrantes.`
