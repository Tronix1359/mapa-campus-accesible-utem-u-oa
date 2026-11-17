/**
 * src/lib/formato.ts — Funciones utilitarias de formato
 *
 * Se ejecutan durante el build (en Node), nunca en el navegador.
 * Todas declaran tipos explícitos de entrada y de salida, como exige el
 * modo estricto de TypeScript.
 */

/** Tipos de afirmación que el sitio distingue de forma visible. */
export type TipoAfirmacion = 'dato' | 'interpretacion' | 'testimonio';

/** Líneas formativas con las que el equipo agrupó la malla. */
export type LineaFormativa =
  | 'programacion'
  | 'infraestructura'
  | 'ciencias'
  | 'gestion'
  | 'integral';

/** Nombre legible de cada línea formativa (clasificación del equipo). */
export const NOMBRE_LINEA: Readonly<Record<LineaFormativa, string>> = {
  programacion: 'Programación y software',
  infraestructura: 'Redes, nube y seguridad',
  ciencias: 'Ciencias básicas',
  gestion: 'Gestión y proyectos',
  integral: 'Formación integral y práctica',
};

/** Orden en que se muestran las líneas en la leyenda y en el filtro. */
export const ORDEN_LINEAS: readonly LineaFormativa[] = [
  'programacion',
  'infraestructura',
  'ciencias',
  'gestion',
  'integral',
];

/**
 * Convierte "2026-11-16" en "16 de noviembre de 2026".
 *
 * Se fija la zona horaria en UTC porque una fecha sin hora se interpreta
 * como medianoche UTC; con la hora de Chile (UTC-3) se mostraría el día
 * anterior.
 */
export function fechaLarga(iso: string): string {
  const formato = new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return formato.format(new Date(`${iso}T00:00:00Z`));
}

/**
 * Compara dos entradas por su campo `orden`.
 * Se usa con `.sort()` para mostrar el contenido en el orden editorial
 * definido en los archivos JSON y no en el orden de lectura del disco.
 */
export function porOrden(
  a: { data: { orden: number } },
  b: { data: { orden: number } },
): number {
  return a.data.orden - b.data.orden;
}
