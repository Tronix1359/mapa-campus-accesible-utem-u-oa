/**
 * src/content.config.ts — Esquemas de las colecciones de contenido
 *
 * ROL
 *   Este archivo es el "contrato" entre el contenido (archivos JSON de
 *   src/content/) y la presentación (componentes .astro). Cada colección
 *   declara de dónde se cargan sus datos (`loader`) y qué forma deben
 *   tener (`schema`).
 *
 * POR QUÉ IMPORTA
 *   Si un dato no cumple su esquema (falta el año, una URL está mal
 *   escrita, una cita apunta a una fuente que no existe), `astro build`
 *   se detiene con un error. Así es imposible publicar por descuido una
 *   cifra sin fuente: la trazabilidad se verifica en cada compilación.
 *
 * CÓMO SE LEE
 *   - `file('ruta.json')` crea una entrada por cada objeto del arreglo
 *     JSON; cada objeto necesita un `id` único.
 *   - `reference('referencias')` exige que el texto escrito en el JSON
 *     (por ejemplo "F01") sea el `id` de una entrada real de la colección
 *     `referencias`.
 */

// Utilidades de colecciones: definir una colección y enlazar colecciones.
import { defineCollection, reference } from 'astro:content';
// Cargador integrado para leer varias entradas desde un solo archivo.
import { file } from 'astro/loaders';
// Zod: biblioteca de validación que Astro incluye (versión 4).
import { z } from 'astro/zod';

/**
 * Lista de fuentes que respaldan un dato.
 * `.min(1)` es la regla central del proyecto: ningún dato sin fuente.
 */
const fuentes = z.array(reference('referencias')).min(1);

/**
 * Tipo de afirmación. El sitio lo muestra con una etiqueta visible para
 * distinguir dato institucional, interpretación del equipo y testimonio
 * (exigencia de la guía de estilo, Fase D).
 */
const tipoAfirmacion = z.enum(['dato', 'interpretacion', 'testimonio']);

/** Líneas formativas con las que el equipo agrupó la malla. */
const lineaFormativa = z.enum([
  'programacion',
  'infraestructura',
  'ciencias',
  'gestion',
  'integral',
]);

/** Fecha en formato AAAA-MM-DD (por ejemplo 2026-11-16). */
const fechaIso = z.iso.date();

// ── Referencias: fuente de verdad de todas las citas ────────────────
const referencias = defineCollection({
  loader: file('src/content/referencias.json'),
  schema: z.object({
    /** Autor institucional o personal, como exige APA 7. */
    autor: z.string().min(3),
    /** Fecha de publicación en formato APA: "2026", "2026, 18 de octubre". */
    fecha: z.string().min(4),
    /** Título del documento o página (se muestra en cursiva). */
    titulo: z.string().min(3),
    /** Descripción entre corchetes de APA, por ejemplo "Ficha de carrera". */
    descripcion: z.string().optional(),
    /** Nombre del sitio, si es distinto del autor. */
    sitio: z.string().optional(),
    /** Dirección consultable por un tercero (criterio de trazabilidad). */
    url: z.url(),
    tipo: z.enum(['primaria', 'secundaria']),
    /** Día en que el equipo abrió la fuente y comprobó el dato. */
    fechaConsulta: fechaIso,
  }),
});

// ── Datos generales de la carrera (portada) ─────────────────────────
const carrera = defineCollection({
  loader: file('src/content/carrera.json'),
  schema: z.object({
    nombre: z.string(),
    institucion: z.string(),
    lema: z.string().max(140),
    resumen: z.string(),
    titulo: z.string(),
    grado: z.string(),
    semestres: z.number().int().positive(),
    creditosSct: z.number().int().positive(),
    jornada: z.string(),
    codigoDemre: z.string().regex(/^\d{5}$/),
    campus: z.string(),
    fuentes,
    fuentesCreditos: fuentes,
  }),
});

// ── Sobre la carrera: comparación con carreras afines ───────────────
const afines = defineCollection({
  loader: file('src/content/afines.json'),
  schema: z.object({
    nombre: z.string(),
    titulo: z.string(),
    grado: z.string(),
    semestres: z.number().int().positive(),
    enfoque: z.string(),
    /** Marca la carrera que promociona este sitio. */
    propia: z.boolean().default(false),
    fuentes,
  }),
});

// ── Perfil de egreso, reescrito en lenguaje claro ───────────────────
const perfil = defineCollection({
  loader: file('src/content/perfil-egreso.json'),
  schema: z.object({
    orden: z.number().int(),
    titulo: z.string(),
    descripcion: z.string(),
    fuentes,
  }),
});

// ── Malla curricular por semestre ───────────────────────────────────
const malla = defineCollection({
  loader: file('src/content/malla.json'),
  schema: z.object({
    semestre: z.number().int().min(1).max(8),
    anio: z.number().int().min(1).max(4),
    asignaturas: z
      .array(
        z.object({
          nombre: z.string().min(3),
          linea: lineaFormativa,
          /** Créditos SCT de la asignatura. Opcional: ver INFORME, pendiente P05. */
          sct: z.number().int().positive().optional(),
        }),
      )
      .min(1),
    fuentes,
  }),
});

// ── Campo laboral: áreas de desempeño ───────────────────────────────
const campoLaboral = defineCollection({
  loader: file('src/content/campo-laboral.json'),
  schema: z.object({
    orden: z.number().int(),
    titulo: z.string(),
    descripcion: z.string(),
    fuentes,
  }),
});

// ── Indicadores con cifra: siempre con período y fuente ─────────────
const indicadores = defineCollection({
  loader: file('src/content/indicadores.json'),
  schema: z.object({
    /** Sección donde se muestra: Campo laboral o Admisión. */
    grupo: z.enum(['empleo', 'admision']),
    orden: z.number().int(),
    etiqueta: z.string(),
    valor: z.string(),
    /** Año o período del dato. Obligatorio: una cifra sin año no se publica. */
    periodo: z.string().min(4),
    nota: z.string().optional(),
    fuentes,
  }),
});

// ── Respaldo institucional ──────────────────────────────────────────
const respaldo = defineCollection({
  loader: file('src/content/respaldo.json'),
  schema: z.object({
    orden: z.number().int(),
    titulo: z.string(),
    texto: z.string(),
    tipo: tipoAfirmacion,
    fuentes,
  }),
});

// ── Admisión: ponderaciones y fechas clave ──────────────────────────
const ponderaciones = defineCollection({
  loader: file('src/content/ponderaciones.json'),
  schema: z.object({
    orden: z.number().int(),
    factor: z.string(),
    porcentaje: z.number().int().min(0).max(100),
    fuentes,
  }),
});

const fechas = defineCollection({
  loader: file('src/content/fechas.json'),
  schema: z.object({
    /** Fecha del hito; ordena la línea de tiempo. */
    inicio: fechaIso,
    hito: z.string(),
    /** Texto que se muestra, por ejemplo "30 de noviembre, 1 y 2 de diciembre de 2026". */
    cuando: z.string(),
    fuentes,
  }),
});

const vias = defineCollection({
  loader: file('src/content/vias.json'),
  schema: z.object({
    orden: z.number().int(),
    nombre: z.string(),
    descripcion: z.string(),
    enlace: z.url(),
    textoEnlace: z.string(),
    fuentes,
  }),
});

// ── Preguntas frecuentes ────────────────────────────────────────────
const faq = defineCollection({
  loader: file('src/content/faq.json'),
  schema: z.object({
    orden: z.number().int(),
    pregunta: z.string().endsWith('?'),
    respuesta: z.string(),
    fuentes,
  }),
});

// Astro solo reconoce las colecciones exportadas con este nombre exacto.
export const collections = {
  referencias,
  carrera,
  afines,
  perfil,
  malla,
  campoLaboral,
  indicadores,
  respaldo,
  ponderaciones,
  fechas,
  vias,
  faq,
};
