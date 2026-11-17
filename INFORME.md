# Informe del proyecto: landing page de Ingeniería en Informática (UTEM)

| Campo | Valor |
|---|---|
| Asignatura | EFE685, Electivo de Computación Móvil |
| Académico | Sebastián Salazar Molina |
| Carrera del equipo | Ingeniería en Informática (código DEMRE 21030) |
| Integrantes | `Ignacio Hernandez SIlva. 21.633.857.K I.hernandezsi@UTEM.CL` |
| Sitio publicado | `https://exquisite-syrniki-8bfced.netlify.app` |
| Repositorio | `https://github.com/Tronix1359/landing-informatica-utem/tree/mainL`  |
| Fecha de este informe | 15 de noviembre de 2026 |

Este informe está escrito para una persona de la Escuela sin formación técnica. Explica qué se hizo y, sobre todo, **por qué** se tomó cada decisión. Los términos técnicos se explican la primera vez que aparecen y en el glosario del anexo F.

---

## 0. Estado de la entrega

Este cuadro dice con claridad qué está terminado y qué falta. Lo que falta depende de personas reales o de herramientas externas, y **no se puede ni se debe inventar**.

| Producto | Estado | Qué falta |
|---|---|---|
| A. Matriz de fuentes | Hecha: 12 fuentes, 11 primarias | Reabrir cada enlace, confirmar el dato y anotar la fecha de consulta del equipo. Resolver los pendientes P01 a P05 (sección 1.3) |
| B. Análisis de audiencia | Hecho con 5 personas reales, todas del público secundario | Confirmar los consentimientos en la tabla 2.2 y sumar 2 o 3 respuestas del público principal (3.° y 4.° medio, familias) |
| C. Mapa de contenidos | Hecho: orden justificado con la encuesta, wireframes y relación sección → fuentes | Revisarlo si cambian las prioridades con el público principal |
| D. Textos finales | Hechos, en `src/content/`. Preguntas frecuentes reescritas con las preguntas reales | Agregar la cifra de ingresos cuando se verifique en Mi Futuro (P02): es la pregunta N.° 1 del público |
| E. Validación | Revisión cruzada hecha (sección 5.1). **Prueba con usuarios pendiente** | Aplicar el protocolo de la sección 5.2 a 3 personas y registrar resultados |
| Sitio en Astro | Código completo; `npm run build` termina sin errores (sección 8.2) | Ejecutar `npm run check`, desplegar y poner la URL real |
| Lighthouse y CompliaScan | **Pendiente** | Medir sobre la URL pública y pegar los resultados en la sección 8.3 |
| Commits de cada integrante | **Pendiente** | Subir el proyecto con commits de todas las personas del equipo |

---

## 1. Fase A: levantamiento de fuentes

### 1.1 Por qué se partió por las fuentes

El encargo invierte el orden habitual: primero se investiga y después se diseña. Lo aplicamos así: ningún texto del sitio se escribió antes de tener abierto el documento oficial que lo respalda. Por eso cada bloque de contenido guarda el código de su fuente y el sistema impide publicar un dato sin ella (sección 7.2).

Se priorizaron las fuentes **primarias**, es decir, las emitidas por quien produce el dato: la universidad para su plan y sus aranceles, el DEMRE para el calendario de admisión.

### 1.2 Producto A: matriz de fuentes

Fecha de consulta de todas las fuentes: 16 de noviembre de 2026. Criterios: **Au** autoridad, **Vi** vigencia, **Tr** trazabilidad, **Ob** objetividad, **Pe** pertinencia. ✔ cumple, ✖ no cumple, ◐ cumple con reparos.

| ID | Referencia (APA 7) | Tipo | Fecha del dato | Au | Vi | Tr | Ob | Pe | Sección donde se usa |
|---|---|---|---|---|---|---|---|---|---|
| F01 | Universidad Tecnológica Metropolitana. (2026). *Ingeniería en Informática*. Recuperado el 16 de noviembre de 2026, de https://www.utem.cl/carreras/ingenieria-en-informatica/ | Primaria | Admisión 2027 | ✔ | ✔ | ✔ | ◐ | ✔ | Portada, Sobre la carrera, Perfil, Plan, Campo laboral, Respaldo, Admisión, Preguntas |
| F02 | Universidad Tecnológica Metropolitana. (2026). *Ingeniería en Informática* [Ficha de carrera]. Recuperado el 16 de noviembre de 2026, de https://www.utem.cl/wp-content/uploads/2026/05/INGENIERIA_EN_INFORMATICA_UTEM.pdf | Primaria | Mayo de 2026 | ✔ | ◐ | ✔ | ◐ | ✔ | Perfil, Campo laboral (empleabilidad) |
| F03 | Universidad Tecnológica Metropolitana. (2022, 2 de agosto). *Resolución Exenta N.° 03102: Aprueba rediseño de la carrera de Ingeniería en Informática (21030), plan regular*. UTEM Transparente. Recuperado el 16 de noviembre de 2026, de https://transparencia.utem.cl/wp-content/uploads/2022/09/DJ-596-RES3102DE2022-REDISE%C3%91O-CARRERA-INGENIERIA-EN-INFORMATICA-.pdf | Primaria | 2 de agosto de 2022 | ✔ | ✔ | ✔ | ✔ | ✔ | Portada (créditos), Respaldo |
| F04 | Universidad Tecnológica Metropolitana. (2026). *Oferta académica UTEM: Admisión 2027* [Ficha de resumen de carreras y ponderaciones]. Recuperado el 16 de noviembre de 2026, de https://www.utem.cl/wp-content/uploads/2026/09/Oferta-Academica-UTEM-2027.pdf | Primaria | Septiembre de 2026 | ✔ | ✔ | ✔ | ✔ | ✔ | Admisión, Respaldo, Preguntas |
| F05 | Universidad Tecnológica Metropolitana. (2026, 18 de octubre). *UTEM acreditada Nivel Avanzado*. Noticias UTEM. Recuperado el 16 de noviembre de 2026, de https://noticias.utem.cl/2026/10/18/utem-acreditada-nivel-avanzado/ | Primaria | Octubre de 2026 | ◐ | ✔ | ✔ | ◐ | ✔ | Respaldo, Preguntas |
| F06 | Departamento de Evaluación, Medición y Registro Educacional. (2026). *Fechas y horarios rendición PAES Regular: Proceso 2027*. DEMRE. Recuperado el 16 de noviembre de 2026, de https://demre.cl/paes/regular/rendicion/los-dias-de-la-prueba/fechas-horarios | Primaria | Proceso 2027 | ✔ | ✔ | ✔ | ✔ | ✔ | Admisión (fechas) |
| F07 | Departamento de Evaluación, Medición y Registro Educacional. (2026). *Preguntas frecuentes: PAES Regular 2026, Proceso de Admisión 2027*. DEMRE. Recuperado el 16 de noviembre de 2026, de https://demre.cl/mesa-de-ayuda/preguntas-frecuentes-paes-regular | Primaria | Proceso 2027 | ✔ | ✔ | ✔ | ✔ | ✔ | Admisión (postulación) |
| F08 | Universidad Tecnológica Metropolitana. (2026). *Ingeniería Civil en Ciencia de Datos* [Ficha de carrera]. Recuperado el 16 de noviembre de 2026, de https://www.utem.cl/wp-content/uploads/2026/05/INGENIERIA_CIVIL_EN_CIENCIA_DE_DATOS_UTEM.pdf | Primaria | Mayo de 2026 | ✔ | ✔ | ✔ | ◐ | ✔ | Sobre la carrera |
| F09 | Universidad Tecnológica Metropolitana. (2026). *Ingeniería Civil en Computación mención Informática*. Recuperado el 16 de noviembre de 2026, de https://www.utem.cl/carreras/ingenieria-civil-en-computacion-mencion-informatica/ | Primaria | Admisión 2027 | ✔ | ✔ | ✔ | ◐ | ✔ | Sobre la carrera, Preguntas |
| F10 | Universidad Tecnológica Metropolitana. (2026). *Admisión Acceso Vía PAES*. Recuperado el 16 de noviembre de 2026, de https://www.utem.cl/admision/admision-acceso-via-paes/ | Primaria | Admisión 2027 | ✔ | ✔ | ✔ | ✔ | ✔ | Admisión, Preguntas |
| F11 | Universidad Tecnológica Metropolitana. (2026). *Acceso Directo UTEM*. Recuperado el 16 de noviembre de 2026, de https://accesodirecto.utem.cl/ | Primaria | Admisión 2027 | ✔ | ◐ | ✔ | ✔ | ✔ | Admisión, Preguntas |
| F12 | BioBioChile. (2026, 12 de noviembre). *Admisión a la educación superior 2027: revisa cuándo son las postulaciones y otras fechas clave*. Recuperado el 16 de noviembre de 2026, de https://www.biobiochile.cl/noticias/servicios/toma-nota/2026/11/12/admision-a-la-educacion-superior-2027-revisa-cuando-son-las-postulaciones-y-otras-fechas-clave.shtml | Secundaria | 12 de noviembre de 2026 | ◐ | ✔ | ✔ | ✔ | ✔ | Admisión (fechas de resultados y matrícula) |

**Justificación de los reparos (◐):**

- **F01, F02, F08, F09 · Objetividad.** Son materiales de admisión: mezclan datos con lenguaje promocional. Se usaron solo los datos verificables (título, grado, duración, ponderaciones, malla, certificación) y se descartaron los adjetivos.
- **F02 · Vigencia.** La ficha entrega la empleabilidad y cita al SIES, pero **no indica el año de la cohorte**. Además, su malla no coincide con la de F01 (ver hallazgo H1). Por eso de F02 solo se usan la empleabilidad, con esa advertencia visible en el sitio, y frases del perfil de egreso.
- **F05 · Autoridad y objetividad.** Quien acredita es la CNA-Chile; la noticia es de la propia universidad acreditada. El dato es reciente y aún no se pudo citar la resolución de la CNA (pendiente P01). El sitio lo redacta como "la UTEM informó…" y enlaza al buscador de la CNA.
- **F11 · Vigencia.** La página menciona la Admisión 2027, pero una de sus tablas muestra aranceles del año 2021. Solo se usa la descripción del sistema, sin cifras.
- **F12 · Autoridad.** Es prensa que reproduce el calendario del DEMRE. Se usa solo como complemento para tres fechas (resultados de la PAES, selección y matrícula). El sitio pide confirmar en demre.cl (pendiente P04).

**Resumen:** 12 fuentes, 11 primarias y 1 secundaria. Se cumple el mínimo de 8 fuentes con al menos 5 primarias.

### 1.3 Fuentes exigidas que quedaron pendientes

| ID | Fuente | Qué aportaría | Por qué está pendiente | Qué hacer |
|---|---|---|---|---|
| P01 | CNA-Chile, buscador de acreditaciones | Estado, nivel, años y número de resolución de la acreditación institucional | El buscador no se pudo consultar de forma automática | Buscar "Universidad Tecnológica Metropolitana" en cnachile.cl, anotar la resolución y agregarla como fuente de `respaldo.json` |
| P02 | Mi Futuro (Ministerio de Educación), buscador de empleabilidad e ingresos | Ingreso promedio al cuarto año, empleabilidad con año, duración real, retención | El buscador solo funciona de forma interactiva | Buscar la carrera en mifuturo.cl, tomar captura con fecha y agregar las cifras a `indicadores.json` con su período |
| P03 | SIES | Matrícula, titulación y retención | No se usó ninguna base del SIES directamente | Descargar la base correspondiente y citarla si se agregan esas cifras |
| P04 | DEMRE, calendario del Proceso de Admisión 2027 | Fechas de resultados, selección y matrícula desde la fuente primaria | La página del calendario no se pudo abrir | Abrir demre.cl/calendario y reemplazar F12 por esa fuente |
| P05 | Anexo de malla de la Resolución Exenta N.° 03102, o documento de la Escuela | Créditos SCT por asignatura; datos del cuerpo académico y de los laboratorios | El anexo no está en el PDF publicado; no hay fuente pública citable sobre académicos y laboratorios | Pedir el documento a la Escuela de Informática. El campo `sct` de `malla.json` ya existe y es opcional |

Mientras P02 siga pendiente, el sitio **no publica ninguna cifra de ingresos**: indica dónde consultarla. Mientras P05 siga pendiente, la sección Respaldo no afirma nada sobre el número de académicos ni de laboratorios. Preferimos una sección incompleta a un dato sin respaldo.

### 1.4 Hallazgos de la revisión de fuentes

| N.° | Hallazgo | Decisión |
|---|---|---|
| H1 | **Dos mallas distintas.** La página de la carrera (F01) y la ficha en PDF (F02) listan asignaturas diferentes. La ficha incluye, por ejemplo, Sistemas Operativos, Análisis de Algoritmos e Inglés I y II; la página incluye Introducción a la Computación en la Nube y Taller de Empleabilidad | El sitio muestra la malla de F01, la página vigente a la que llega un postulante. **El equipo debe confirmar con la Escuela cuál rige para quienes ingresen en 2027** |
| H2 | **Grado académico.** La resolución (F03) dice "Licenciado en Ingeniería Informática"; la página (F01) y la ficha (F02) dicen "Licenciada/o en Informática" | Se usa el texto de F01 y F02, que coinciden y son más recientes. Consultar a la Escuela |
| H3 | **Erratas en la fuente.** F01 escribe "Desing Trinking" y "Cyberseguridad" | Se corrigieron a "Design Thinking" y "Ciberseguridad". Se sugiere avisar a la unidad a cargo del sitio |
| H4 | **Nombre del campus.** F01 dice "Campus Macul" y F02 "Campus Ñuñoa", con la misma dirección | Se usa "Campus Macul" con la dirección completa, que no deja dudas |
| H5 | **Certificación no es acreditación.** La carrera tiene una certificación de agencias externas, no una acreditación de la CNA | El sitio lo explica en un bloque marcado como interpretación del equipo |
| H6 | **Vacantes.** Documentos de años anteriores muestran otras cifras (100, 135) | Se usa 150, la cifra de la Admisión 2027 que coincide en F01 y F04 |

---

## 2. Fase B: análisis de audiencia

### 2.1 Qué se hizo y por qué

Se aplicó un cuestionario breve de 7 preguntas (anexo D) a 5 personas, por WhatsApp, el 16 de noviembre de 2026. Un cuestionario corto se responde en cinco minutos desde el teléfono. Combina preguntas cerradas, que permiten contar frecuencias, con dos abiertas, que recogen las palabras reales de las personas.

Cada persona aceptó participar antes de recibir las preguntas (texto del anexo E). Las capturas de las respuestas y de la aceptación se conservan fuera del repositorio, en `docs/consentimientos/`, para verificación del docente.

### 2.2 Registro de participantes

| Código | Segmento | Conocimiento previo de la carrera | Fecha | Medio | Consentimiento |
|---|---|---|---|---|---|
| P1 | Egresó de enseñanza media y quiere estudiar | Algo | 16-11-2026 | WhatsApp | `COMPLETAR: sí/no` |
| P2 | Ya estudia o trabaja y quiere cambiarse | Bastante | 16-11-2026 | WhatsApp | `COMPLETAR: sí/no` |
| P3 | Ya estudia o trabaja y quiere cambiarse | Nada | 16-11-2026 | WhatsApp | `COMPLETAR: sí/no` |
| P4 | Egresó de enseñanza media y quiere estudiar | Algo | 16-11-2026 | WhatsApp | `COMPLETAR: sí/no` |
| P5 | Ya estudia o trabaja y quiere cambiarse | Algo | 16-11-2026 | WhatsApp | `COMPLETAR: sí/no` |

> ⚠ **Limitación importante.** Las 5 personas pertenecen al **público secundario** del encargo (personas que ya egresaron de enseñanza media). Ninguna es estudiante de 3.° o 4.° medio ni familiar de un postulante, que son el público principal. Las conclusiones de esta sección valen para el público secundario. **Se recomienda sumar al menos 2 o 3 respuestas del público principal** y revisar si las prioridades cambian.
>
> El equipo debe confirmar en la tabla que cuenta con la aceptación de cada persona y cómo quiere aparecer (código o primer nombre).

### 2.3 Resultados

**Pregunta 3. "Si tuvieras un minuto para preguntar por una carrera, ¿qué tres cosas preguntarías?"** Respuestas abiertas, agrupadas por tema:

| Tema | Quiénes lo preguntan | Frecuencia | Palabras de las personas |
|---|---|---|---|
| Cuánto se gana | P1, P2, P3, P4 | 4 de 5 | "¿Cuánto se puede ganar aproximadamente?", "cuánto podría ganar en plata", "su rango monetario al egresar" |
| Empleabilidad | P2, P4, P5 | 3 de 5 | "la empleabilidad que tiene", "la empleabilidad a futuro", "¿Tiene alta empleabilidad la carrera?" |
| En qué se trabaja al egresar | P1, P3, P4 | 3 de 5 | "¿En qué puedo trabajar cuando termine?", "cómo quedaré una vez egresado", "su rol en la sociedad al ingresar al mundo laboral" |
| Asignaturas | P1 | 1 de 5 | "¿Qué asignaturas se estudian?" |
| Duración | P2 | 1 de 5 | "cuántos años dura" |
| De qué se trata | P3 | 1 de 5 | "¿De qué se trata?" |
| Si la carrera tiene futuro | P5 | 1 de 5 | "¿Crees que es una carrera futurista?" |
| Experiencia de quien la estudia | P5 | 1 de 5 | "¿Por qué elegiste esta carrera?" |

**Pregunta 4. Orden de importancia para decidir.** Posición promedio (1 = lo más importante; 7 = lo menos importante):

| Lugar | Factor | Posición promedio | Posiciones (P1 a P5) |
|---|---|---|---|
| 1 | En qué se trabaja y cuánto se gana | 2,4 | 1, 2, 3, 1, 5 |
| 2 | Costo y gratuidad | 3,0 | 3, 1, 6, 3, 2 |
| 3 | Acreditación de la universidad | 3,2 | 6, 4, 1, 2, 3 |
| 4 | Puntaje para entrar | 3,4 | 5, 3, 4, 4, 1 |
| 5 | Asignaturas | 5,1 | 2, 6,5, 7, 6, 4 |
| 6 | Dónde queda el campus | 5,2 | 7, 5, 2, 5, 7 |
| 7 | Duración | 5,7 | 4, 6,5, 5, 7, 6 |

P2 ordenó solo cinco de los siete factores. A los dos que omitió (asignaturas y duración) se les asignó la posición 6,5, el promedio de los dos últimos lugares.

**Pregunta 5. "¿Qué te haría dudar de postular?"**

| Duda | Quiénes | Frecuencia |
|---|---|---|
| Que baje la empleabilidad porque mucha gente estudia la carrera | P4, P5 | 2 de 5 |
| La ganancia y la tasa de empleabilidad | P3 | 1 de 5 |
| Que tenga mucha matemática | P1 | 1 de 5 |
| El tipo de universidad | P2 | 1 de 5 |

**Pregunta 6. Dónde buscan información** (respuesta múltiple): Google 5 de 5; sitio de la universidad 3; ferias o charlas 3; familia o amistades 3; orientador del colegio 2; Instagram o TikTok 1; Mi Futuro o DEMRE 0.

**Pregunta 7. Dispositivo:** teléfono 2; computador 1; ambos 2.

### 2.4 Producto B: tabla de preguntas priorizadas

| Prioridad | Pregunta detectada | Evidencia | Sección que la responde | ¿Está respondida? |
|---|---|---|---|---|
| 1 | ¿Cuánto se gana? | 4 de 5 la preguntan; factor N.° 1 del ranking | Campo laboral, Preguntas frecuentes | **No.** El sitio no publica la cifra porque no se verificó en Mi Futuro (pendiente P02). Es la brecha más importante del proyecto |
| 2 | ¿En qué se trabaja al egresar? | 3 de 5; factor N.° 1 | Campo laboral, Perfil de egreso | Sí |
| 3 | ¿Qué empleabilidad tiene? | 3 de 5 la preguntan; 3 de 5 la nombran como duda | Campo laboral | Sí, con la advertencia de que la fuente no da el año |
| 4 | ¿Habrá trabajo en el futuro? | 2 de 5 como duda; 1 como pregunta | Preguntas frecuentes | Parcial. Ninguna fuente oficial lo proyecta y el sitio lo dice así |
| 5 | ¿Cuánto cuesta y hay gratuidad? | Factor N.° 2 | Admisión, Preguntas frecuentes | Sí (valores 2026) |
| 6 | ¿Qué tipo de universidad es? ¿Está acreditada? | Factor N.° 3; duda de P2 | Respaldo institucional | Sí; falta la resolución de la CNA (pendiente P01) |
| 7 | ¿Qué puntaje necesito? | Factor N.° 4 | Admisión | Sí |
| 8 | ¿Tiene mucha matemática? ¿Qué asignaturas hay? | Duda y pregunta de P1; factor N.° 5 | Plan de estudios, Preguntas frecuentes | Sí |
| 9 | ¿Cuánto dura? | 1 de 5; factor N.° 7 | Portada | Sí |

### 2.5 Producto B: perfil de usuario

El perfil describe a la persona representativa **de las cinco respuestas**. No es un personaje inventado: cada línea indica el dato que la sostiene.

| Elemento | Contenido | Dato que lo sostiene |
|---|---|---|
| Contexto | Persona que ya salió del colegio. Estudia o trabaja y evalúa cambiarse, o egresó y aún no entra a la educación superior. Conoce "algo" de la carrera | Pregunta 1: 3 "quiero cambiarme" y 2 "egresé y quiero estudiar". Pregunta 2: 3 de 5 "algo" |
| Preguntas principales | Cuánto se gana, en qué se trabaja y qué empleabilidad tiene | Pregunta 3: 4, 3 y 3 de 5 |
| Qué pesa al decidir | Primero el retorno laboral; luego el costo, la acreditación y el puntaje. Asignaturas, campus y duración pesan menos | Ranking de la pregunta 4 |
| Dudas | Que el campo se sature; que la carrera exija mucha matemática; qué tipo de universidad es | Pregunta 5 |
| Barreras | Evalúa la carrera como una inversión: si no ve datos de trabajo e ingresos, no sigue. El costo es el segundo filtro | Preguntas 3, 4 y 5 |
| Canal por el que llega | Busca en Google. Complementa con el sitio de la universidad, ferias o charlas y su entorno cercano. No usa Mi Futuro ni el DEMRE | Pregunta 6 |
| Dispositivo | Teléfono y computador por igual | Pregunta 7 |

### 2.6 Qué cambió en el sitio a partir de estos datos

| Hallazgo | Cambio aplicado |
|---|---|
| Trabajo e ingresos es lo más consultado | **Campo laboral subió del quinto al segundo lugar** de contenido, justo después de Sobre la carrera. El segundo botón de la portada ahora lleva a esa sección |
| Asignaturas ocupa el quinto lugar del ranking | El Plan de estudios bajó: ahora va después de Admisión |
| Costo, acreditación y puntaje ocupan los lugares 2, 3 y 4 | Respaldo y Admisión quedan antes que el Plan de estudios |
| Las preguntas reales difieren de las que habíamos supuesto | Las Preguntas frecuentes se reescribieron. Entraron: ingresos, trabajo, empleabilidad, futuro de la carrera, tipo de universidad y matemática. Salieron tres que nadie preguntó |
| Nadie usa Mi Futuro, y es donde está el dato de ingresos | El sitio enlaza al buscador en dos lugares y explica qué se encuentra ahí |
| Todas las personas buscan en Google | Se mantiene el trabajo de SEO: título y descripción con las palabras "plan de estudios", "campo laboral" y "admisión" |
| P5 pregunta "¿Por qué elegiste esta carrera?" | Queda como oportunidad: un testimonio real del equipo, con consentimiento escrito y marcado como opinión personal. No se redactó ninguno |

**Acción prioritaria que deja esta fase:** resolver el pendiente P02. La pregunta más frecuente del público es la única que el sitio no responde con una cifra.

---

## 3. Fase C: arquitectura de información

### 3.1 Producto C: orden de las secciones y su justificación

El orden se apoya en la encuesta de la Fase B (sección 2.3). Cuando un dato de la encuesta justifica la posición, se indica.

| N.° | Sección | Pregunta que responde | Por qué va en ese lugar |
|---|---|---|---|
| 1 | Portada | ¿Qué es la carrera? | Es lo primero que se ve. Entrega los seis datos básicos y dos accesos directos: cómo postular y dónde se trabaja |
| 2 | Sobre la carrera | ¿En qué se diferencia? | La UTEM dicta tres carreras de computación con nombres parecidos. P3 pregunta "¿de qué se trata?" y 3 de 5 personas conocen solo "algo" de la carrera |
| 3 | Campo laboral | ¿Dónde trabajaré? | **Es lo más consultado:** 4 de 5 preguntan cuánto se gana, 3 de 5 en qué se trabaja y 3 de 5 por la empleabilidad. Es el factor N.° 1 del ranking (posición promedio 2,4) |
| 4 | Perfil de egreso | ¿Qué podré hacer? | Completa la sección anterior: responde "cómo quedaré una vez egresado" (P3) |
| 5 | Respaldo institucional | ¿Qué garantías hay? | La acreditación es el factor N.° 3 (3,2) y "el tipo de universidad" es una duda declarada (P2) |
| 6 | Admisión | ¿Cómo postulo? | Reúne el costo (factor N.° 2; 3,0) y el puntaje (factor N.° 4; 3,4). Va después del respaldo: primero se confirma que vale la pena y luego se revisa cómo entrar |
| 7 | Plan de estudios | ¿Qué aprenderé? | Las asignaturas son el factor N.° 5 (5,1). Sigue siendo una sección completa, con filtro, para quien sí la busca (P1) |
| 8 | Preguntas frecuentes | Dudas de la Fase B | Responde en breve las preguntas y dudas reales, en orden de frecuencia |
| 9 | Referencias | ¿De dónde sale esto? | Cierra la página: todas las citas apuntan a ella |

**Cambio respecto de la primera versión.** Antes de la encuesta el orden seguía las cinco preguntas del encargo: Perfil y Plan de estudios iban antes que Campo laboral. Los datos mostraron que este público decide primero por el retorno laboral, y el orden se corrigió.

> ⚠ El orden refleja al público secundario (ver la limitación de la sección 2.2). Si las respuestas del público principal muestran otras prioridades, el equipo debe revisarlo. Cambiarlo es mover una línea en `src/pages/index.astro`.

### 3.2 Wireframes de baja fidelidad

- Móvil (360 px): [docs/wireframes/wireframe-movil-360.svg](./docs/wireframes/wireframe-movil-360.svg)
- Escritorio (1280 px): [docs/wireframes/wireframe-escritorio-1280.svg](./docs/wireframes/wireframe-escritorio-1280.svg)

En móvil todo va en una columna, en el mismo orden de lectura. En escritorio cambian solo las rejillas internas (2, 3 o 4 columnas); el orden de las secciones es idéntico. Así una persona que cambia de dispositivo encuentra lo mismo en el mismo lugar.

### 3.3 Relación sección → fuentes

| Sección | Componente | Archivo de contenido | Fuentes |
|---|---|---|---|
| Portada | `Hero.astro` | `carrera.json` | F01, F03 |
| Sobre la carrera | `SobreCarrera.astro` | `afines.json` | F01, F08, F09 + interpretación del equipo |
| Campo laboral | `CampoLaboral.astro` | `campo-laboral.json`, `indicadores.json` | F01, F02 |
| Perfil de egreso | `PerfilEgreso.astro` | `perfil-egreso.json` | F01, F02 |
| Respaldo institucional | `Respaldo.astro` | `respaldo.json` | F01, F03, F04, F05 |
| Admisión | `Admision.astro` | `vias.json`, `ponderaciones.json`, `indicadores.json`, `fechas.json` | F01, F04, F06, F07, F10, F11, F12 |
| Plan de estudios | `Malla.astro` | `malla.json` | F01 + clasificación del equipo |
| Preguntas frecuentes | `Faq.astro` | `faq.json` | F01, F02, F04, F05 |
| Referencias | `Referencias.astro` | `referencias.json` | F01 a F12 |

---

## 4. Fase D: redacción

### 4.1 Guía de estilo aplicada

| Regla del encargo | Cómo se aplicó |
|---|---|
| Oraciones de menos de 25 palabras, voz activa | Se revisaron con un programa todos los textos de `src/content/` y los textos fijos de los componentes: ninguna oración llega a 25 palabras |
| Sin jerga sin explicar | "Tercer sector" se explica entre paréntesis. "Perfil de egreso" se define al inicio de su sección |
| Siglas con su nombre completo la primera vez | UTEM, SCT, DEMRE, SIES, CNA-Chile, CONAIC, PAES, NEM, FUAS y APA 7 se despliegan en su primera aparición |
| Cifra con año y cita enlazada | Cada cifra muestra su período ("Admisión 2027", "Año 2026") y un código como [F04], que enlaza a la referencia |
| Distinguir dato, interpretación y testimonio | Etiquetas visibles con texto y símbolo distintos. El sitio tiene tres interpretaciones del equipo, todas marcadas |
| Texto alternativo en imágenes | El sitio no usa fotografías (ver 7.6). La imagen para redes sociales lleva descripción (`og:image:alt`) |

### 4.2 Decisiones de redacción

- **Segunda persona ("diseñas", "organizas").** El perfil de egreso oficial está en tercera persona y en lenguaje administrativo. Hablarle directo a quien postula lo acerca sin cambiar el contenido.
- **Sin frases publicitarias.** No aparecen expresiones como "la mejor carrera" o "líder". El lema de la portada describe qué se aprende a construir.
- **Sin testimonios.** El encargo exige testimonios reales, con consentimiento escrito. No se incluyó ninguno. El componente `Etiqueta.astro` ya admite el tipo "testimonio" para cuando el equipo agregue su propia experiencia con el consentimiento correspondiente.
- **Advertencias visibles.** Donde la fuente tiene un límite, el sitio lo dice: la empleabilidad sin año de cohorte, el arancel 2026 que puede cambiar, el calendario que el DEMRE puede modificar.

### 4.3 Producto D: dónde están los textos

Todos los textos están en `src/content/`, separados por sección y por tipo de colección (lista en el README, sección 2.1). Los componentes solo contienen frases de enlace entre bloques.

---

## 5. Fase E: validación

### 5.1 Revisión cruzada de afirmaciones

Cada afirmación verificable del sitio se contrastó con su fuente el 16 de noviembre de 2026.

| N.° | Afirmación del sitio | Fuente | Resultado | Corrección aplicada |
|---|---|---|---|---|
| 1 | Título: Ingeniera/o en Informática | F01, F02 | Coincide | Ninguna |
| 2 | Grado: Licenciada/o en Informática | F01, F02 | Coincide; F03 usa otra redacción | Hallazgo H2 |
| 3 | Duración: 8 semestres, jornada diurna | F01, F02, F03 | Coincide en las tres | Ninguna |
| 4 | Carga total: 240 créditos SCT | F03 | Coincide | Ninguna |
| 5 | Código DEMRE 21030 | F01, F02, F04 | Coincide | Ninguna |
| 6 | Malla: 8 semestres y 38 asignaturas o actividades | F01 | Coincide con F01; difiere de F02 | Hallazgo H1; erratas corregidas (H3) |
| 7 | Empleabilidad: 89,6 % al primer año y 95,3 % al segundo | F02 | Coincide; la fuente no da el año de cohorte | Se agregó la advertencia junto a la cifra |
| 8 | Certificación de la carrera: 16-06-2025 a 16-06-2030, Agencia Acreditadora de Chile y CONAIC | F01 | Coincide | Se agregó el bloque que la distingue de la acreditación |
| 9 | Acreditación institucional: 5 años, nivel Avanzado, hasta octubre de 2031 | F05 | Coincide con la noticia institucional | Redactado como "la UTEM informó"; pendiente P01 |
| 10 | Ponderaciones: M1 30, Ranking 25, Lectora 20, NEM 10, electiva 10, M2 5 | F01, F04 | Coincide en ambas; suman 100 | El build comprueba la suma |
| 11 | Promedio mínimo de 458 puntos; sin puntaje ponderado mínimo | F01, F04 | Coincide | Ninguna |
| 12 | 150 vacantes para la Admisión 2027 | F01, F04 | Coincide | Hallazgo H6 |
| 13 | Arancel de referencia 2026: $4.763.300; matrícula 2026: $90.000 | F04, F01 | Coincide | Se rotuló como "Año 2026" |
| 14 | PAES Regular: 30 de noviembre, 1 y 2 de diciembre de 2026 | F06 | Coincide | Ninguna |
| 15 | Postulación: 4 de enero (09:00) a 7 de enero de 2027 (13:00) | F07 | Coincide | Ninguna |
| 16 | Resultados PAES 4 de enero; selección 18 de enero; matrícula 19 a 28 de enero de 2027 | F12 | Coincide con la nota de prensa | Fuente secundaria; pendiente P04 |
| 17 | Ing. Civil en Computación: 11 semestres, Lic. en Ciencias de la Ingeniería | F09 | Coincide | Ninguna |
| 18 | Ing. Civil en Ciencia de Datos: 11 semestres, Lic. en Ciencias de la Ingeniería | F08 | Coincide | Ninguna |

> ⚠ La revisión se hizo con apoyo de un asistente de IA que abrió y leyó las fuentes (anexo A). El encargo indica que ningún dato puede provenir solo de una IA. **Cada integrante debe reabrir los enlaces, confirmar las 18 filas y registrar aquí su nombre y la fecha.**

| Revisó | Fecha | Filas revisadas | Diferencias encontradas |
|---|---|---|---|
| | | | |

### 5.2 Prueba con usuarios (protocolo y registro)

> ⚠ **Pendiente del equipo.** Requiere al menos 3 personas del público objetivo y consentimiento informado (anexo E).

**Protocolo.** Cada persona usa la página publicada en su propio teléfono. Se le pide pensar en voz alta. No se le ayuda. Se registra si completa la tarea, cuánto tarda y qué comenta.

| Tarea | Instrucción para la persona | Se logra si… |
|---|---|---|
| T1 | "Averigua cuántos semestres dura la carrera y qué título entrega" | Responde 8 semestres e Ingeniera/o en Informática |
| T2 | "Encuentra qué asignaturas hay en el tercer semestre" | Nombra al menos dos asignaturas del semestre 3 |
| T3 | "¿La universidad está acreditada? ¿Hasta cuándo?" | Responde hasta octubre de 2031 |
| T4 | "¿Qué prueba pesa más para entrar y cuánto?" | Responde Matemática 1, 30 % |
| T5 | "Elige un dato y dime de dónde salió" | Abre una cita y llega a la referencia |

Al final se pregunta: "¿Encontraste respuesta a lo que más te importaba? ¿Qué te faltó?".

| Participante | Segmento | T1 | T2 | T3 | T4 | T5 | ¿Encontró lo que buscaba? | Comentarios |
|---|---|---|---|---|---|---|---|---|
| U1 | | | | | | | | |
| U2 | | | | | | | | |
| U3 | | | | | | | | |

| Hallazgo | Corrección aplicada | Evidencia (commit o captura) |
|---|---|---|
| | | |

---

## 6. Qué tiene de distinto la página

El encargo pide acercarse al público "desde una nueva perspectiva". La propuesta es **mostrar la evidencia como parte del diseño**, en lugar de esconderla en letra chica:

- La portada presenta la carrera como una ficha de datos (`carrera.json`), con una cita junto a cada valor. La persona ve de inmediato que la página funciona con datos y no con eslóganes.
- Cada sección se abre con la pregunta del postulante, escrita como un comentario de código (`// ¿Dónde trabajaré?`). Es un guiño a la disciplina y ordena la lectura.
- Las tres veces que el equipo opina, lo dice con una etiqueta visible.
- La página admite lo que no sabe: sin año de cohorte, sin cifra de ingresos, valores que pueden cambiar.

---

## 7. Decisiones de implementación

### 7.1 Por qué Astro y por qué un sitio estático

La página informa; no necesita cuentas de usuario ni base de datos. Astro genera el HTML una sola vez, al publicar, y lo entrega igual a todas las personas. Eso significa carga rápida en teléfonos modestos, menos puntos de falla y alojamiento gratuito. Para la Escuela, mantenerla es editar archivos de texto.

### 7.2 Por qué colecciones de contenido con esquema

El contenido (archivos JSON) está separado de la presentación (componentes). El archivo `src/content.config.ts` define las reglas de cada dato. Tres reglas sostienen el principio de trazabilidad:

1. **Toda entrada exige al menos una fuente** (`fuentes` con mínimo 1).
2. **La fuente citada debe existir.** El campo usa `reference('referencias')`: si se escribe "F99" y no existe, la compilación falla.
3. **Toda cifra exige su período** (campo `periodo` obligatorio en `indicadores.json`).

Además, `Admision.astro` detiene la compilación si las ponderaciones no suman 100. La consecuencia práctica: un error de edición no llega al público, porque la versión anterior sigue publicada hasta que se corrige.

### 7.3 Por qué casi nada de JavaScript y una sola isla

Toda la página funciona sin JavaScript: el menú son enlaces, las preguntas frecuentes usan el acordeón nativo del navegador (`<details>`) y el tema oscuro lo resuelve el CSS.

La única **isla interactiva** es el filtro de la malla por línea formativa (`Malla.astro`). Se justifica porque la malla es la sección más larga: 38 asignaturas. El filtro permite responder "¿cuánta programación hay?" o "¿cuánta matemática hay?" sin leer todo. Esta última fue una duda real de la encuesta (P1: "que tenga mucha matemáticas").

- Se construyó como elemento personalizado del navegador (`<malla-filtro>`), sin agregar un framework. El encargo define isla como la parte pequeña e interactiva que carga JavaScript mientras el resto es HTML estático; este componente cumple esa definición con menos de 1 KB de código.
- Es una mejora progresiva: si el script no carga, la malla completa se ve igual y aparece una leyenda en lugar de los botones.
- Es accesible: botones reales con `aria-pressed`, y un aviso (`role="status"`) que informa cuántas asignaturas quedaron visibles.

### 7.4 Por qué TypeScript estricto

El proyecto hereda la configuración `astro/tsconfigs/strict`. Cada componente declara los tipos de lo que recibe (`interface Props`), las funciones de `src/lib/formato.ts` declaran entrada y salida, y no se usa `any`. El beneficio para quien mantiene: los errores aparecen al compilar y no frente al público.

### 7.5 Qué se tomó del ejemplo del docente y qué se cambió

Del sitio de ejemplo se tomó la estructura (layout base, página única con anclas), las tipografías autohospedadas, los tokens semánticos de color y el hábito de documentar cada archivo. Se cambió lo que el encargo de este proyecto exige distinto:

| Ejemplo | Este proyecto | Por qué |
|---|---|---|
| Textos en un diccionario de traducciones | Colecciones de contenido con esquema | El encargo exige datos validados que hagan fallar el build |
| Toda la página en `index.astro` | Un componente por sección | Requisito técnico N.° 3 |
| Varios scripts (tema, idioma, menú, animaciones) | Un solo script: la isla de la malla | Requisito técnico N.° 4 |
| Tailwind CSS | CSS propio con variables | Menos dependencias y estilos que se leen en un solo archivo documentado |
| Cambio de tema con botón | Tema según la preferencia del sistema | Se logra solo con CSS |
| Estética *cyberpunk* | Identidad propia, sobria | El público incluye familias; se priorizó la lectura |

### 7.6 Accesibilidad (WCAG 2.2, nivel AA)

| Medida | Dónde |
|---|---|
| Un solo `<h1>`, un `<h2>` por sección, `<h3>` y `<h4>` dentro | `Seccion.astro` y cada componente |
| Regiones con nombre (`aria-labelledby`), `<main>`, `<nav>`, `<header>`, `<footer>` | `BaseLayout.astro`, `Seccion.astro` |
| Enlace "Saltar al contenido" | `BaseLayout.astro` |
| Foco visible con teclado, nunca tapado por la cabecera fija | `global.css` (`:focus-visible`, `scroll-padding-top`) |
| Tablas con título, encabezados de fila y de columna | `SobreCarrera.astro`, `Admision.astro` |
| Información que no depende solo del color | Etiquetas con texto y símbolo; líneas de la malla con forma distinta y nombre para lectores de pantalla |
| Contraste suficiente en tema claro y oscuro | Anexo C |
| Respeto por "reducir movimiento" | El desplazamiento suave solo se activa si la persona no lo desactivó |
| Idioma declarado `es-CL` | `BaseLayout.astro` |

No se usaron fotografías. El encargo solo permite imágenes propias, institucionales con autorización o con licencia abierta, y el equipo no contaba con ellas. Si se agregan, deben llevar crédito y texto alternativo.

### 7.7 SEO básico

Título y descripción únicos, URL canónica, metadatos Open Graph con imagen de 1200 × 630, datos estructurados de schema.org, `robots.txt` y `sitemap-index.xml` generado por `@astrojs/sitemap`.

---

## 8. Calidad medible

### 8.1 Lo que sí se verificó antes de la entrega

| Verificación | Método | Resultado |
|---|---|---|
| Integridad del contenido | Programa que recorre `src/content/`: identificadores únicos, toda cita apunta a una referencia existente, ninguna referencia sin uso | Sin errores |
| Largo de oraciones | Programa que cuenta palabras por oración | Ninguna de 25 palabras o más |
| Ponderaciones | Suma automática | 100 |
| Contraste de color | Cálculo de la razón de contraste WCAG de cada par | Todos sobre 4,5:1 (anexo C) |
| Diseño responsivo | Maqueta estática con el mismo CSS y el mismo contenido, abierta en Chromium a 360, 768 y 1280 px, en tema claro y oscuro | Sin desplazamiento horizontal. Se corrigió un desborde del menú en 768 px |
| Isla de la malla | El script del componente ejecutado en Chromium: clic y teclado | Filtra, actualiza `aria-pressed` y anuncia el conteo |
| Tipos | `tsc --strict` sobre `formato.ts` y el script de la isla | Sin errores |

### 8.2 Compilación

El equipo compiló el proyecto el 16 de noviembre de 2026 con Astro 7.4.12:

| Paso | Resultado |
|---|---|
| `npm install` | Instaló las dependencias sin conflictos de versión |
| `npm run dev` | El sitio cargó en `http://localhost:4321/`; las colecciones de contenido se sincronizaron sin errores de esquema |
| `npm run build` | Compilación completa: 1 página generada (`/index.html`) y `sitemap-index.xml` creado en `dist/` |

Queda por ejecutar `npm run check` (revisión de tipos de todo el proyecto), revisar el sitio en 360, 768 y 1280 px, desplegar y medir (8.3).

### 8.3 Resultados de Lighthouse y CompliaScan (completar)

Medir sobre la URL pública con <https://pagespeed.web.dev/> y <https://compliascan.com/>. Guardar las capturas en `docs/evidencias/`.

| Herramienta | Categoría | Mínimo exigido | Resultado móvil | Resultado escritorio | Fecha |
|---|---|---|---|---|---|
| Lighthouse | Rendimiento | 90 | | | |
| Lighthouse | Accesibilidad | 90 | | | |
| Lighthouse | Buenas prácticas | 90 | | | |
| Lighthouse | SEO | 90 | | | |
| CompliaScan | Puntaje WCAG 2.2 | 90/100 | | | |

---

## Anexo A. Declaración de uso de inteligencia artificial

| Elemento | Declaración |
|---|---|
| Herramienta | Claude, de Anthropic (modelo Claude Fable 5.2), en claude.ai, con búsqueda web y ejecución de código |
| Fecha | 16 de noviembre de 2026 |
| Tareas | Lectura del enunciado y del sitio de ejemplo; búsqueda y lectura de las fuentes oficiales; tabulación de las 5 respuestas reales de la encuesta y redacción de la Fase B; redacción de los textos de `src/content/`; escritura del código (configuración, esquemas, componentes, estilos); redacción de README.md e INFORME.md; verificaciones de la sección 8.1 |
| Instrucción (prompt) | Se adjuntaron el enunciado en PDF y el sitio de ejemplo en ZIP, con el texto: "necesito que resuelvas lo del pdf toma de ejemplo el zip". El asistente preguntó por la carrera (respuesta: Ingeniería en Informática), por la existencia de encuestas (respuesta: aún no) y por el formato de entrega (respuesta: un archivo ZIP). Luego se le pidió inventar las respuestas del cuestionario; el asistente se negó y entregó las preguntas. El equipo aplicó la encuesta y le envió las capturas de las 5 respuestas para tabularlas |
| Qué no hizo la IA | No aplicó la encuesta ni la prueba con usuarios (las respuestas son de personas reales, recogidas por el equipo); no inventó respuestas, testimonios ni cifras; no compiló ni desplegó el sitio (lo compiló el equipo); no midió Lighthouse ni CompliaScan |
| Origen de los datos | Todo dato del sitio se tomó de las fuentes de la matriz (sección 1.2) y se cita esa fuente, no la herramienta |
| Qué modificó el equipo | `COMPLETAR: cambios hechos por cada integrante al resultado (textos, diseño, código, correcciones tras el build y tras las pruebas)` |

**Sobre el código generado.** El encargo acepta código generado si el equipo lo documenta línea a línea y puede defenderlo. Cada archivo trae comentarios que explican su propósito y sus decisiones. Antes de entregar, cada integrante debe leerlos, completar lo que no entienda y poder explicar cualquier archivo.

## Anexo B. Reparto del trabajo (completar)

| Integrante | Aportes principales | Commits |
|---|---|---|
| | | |
| | | |
| | | |

## Anexo C. Contraste de color

Razón de contraste según WCAG. El nivel AA exige 4,5:1 para texto normal y 3:1 para componentes de interfaz.

| Par (texto sobre fondo) | Tema claro | Tema oscuro |
|---|---|---|
| Texto principal sobre fondo | 16,5:1 | 15,8:1 |
| Texto secundario sobre fondo alterno o superficie | 7,6:1 | 8,7:1 |
| Enlaces sobre superficie | 6,7:1 | 8,7:1 |
| Enlaces sobre fondo alterno | 5,8:1 | 9,4:1 |
| Etiqueta "Dato institucional" | 6,7:1 | 9,2:1 |
| Etiqueta "Interpretación del equipo" | 7,1:1 | 10,2:1 |
| Etiqueta "Testimonio" | 7,8:1 | 8,8:1 |
| Portada: texto sobre azul oscuro | 16,3:1 | igual |
| Portada: texto secundario sobre la ficha | 10,1:1 | igual |
| Portada: rótulos ámbar sobre la ficha | 10,4:1 | igual |
| Botón principal: texto sobre ámbar | 11,9:1 | igual |
| Marcas de las líneas de la malla sobre la tarjeta (mínimo 3:1) | 5,4:1 a 7,2:1 | superior a 7:1 |

## Anexo D. Instrumento de la Fase B

**Cuestionario breve (7 preguntas, unos 5 minutos).** Se aplica después de leer y aceptar el consentimiento del anexo E.

1. ¿En qué situación estás? (3.° medio · 4.° medio · Egresé y quiero estudiar · Soy familiar de alguien que postula · Ya estudio o trabajo y quiero cambiarme)
2. Antes de hoy, ¿qué sabías de la carrera de Ingeniería en Informática? (Nada · Algo · Bastante)
3. Si tuvieras un minuto para preguntar por una carrera, ¿qué tres cosas preguntarías? (respuesta abierta)
4. Ordena de más a menos importante para decidir: duración · asignaturas · en qué se trabaja y cuánto se gana · puntaje para entrar · costo y gratuidad · acreditación de la universidad · dónde queda el campus.
5. ¿Qué te haría dudar de postular a esta carrera? (respuesta abierta)
6. ¿Dónde buscas información sobre carreras? (Instagram o TikTok · Google · sitio de la universidad · ferias o charlas · orientador del colegio · familia o amistades · Mi Futuro o DEMRE)
7. ¿Desde qué dispositivo mirarías una página como esta? (Teléfono · Computador · Ambos)

## Anexo E. Consentimiento informado (modelo)

> **Proyecto:** landing page de la carrera Ingeniería en Informática, asignatura EFE685, UTEM.
> **Responsables:** `COMPLETAR: integrantes y correo de contacto`.
>
> Te invitamos a responder un cuestionario breve (o a probar una página web) como parte de un trabajo universitario. Toma cerca de cinco minutos.
>
> - Tu participación es voluntaria. Puedes dejar de responder cuando quieras, sin dar razones.
> - En el informe apareces solo con un código (por ejemplo, P3) o con tu primer nombre, según elijas.
> - Este documento se guarda para que el profesor pueda verificar que la participación fue real. No se publica.
> - No pedimos datos sensibles. Tus respuestas se usan solo para este trabajo.
> - Si tienes menos de 18 años, también debe firmar una persona adulta responsable.
>
> Acepto participar: ☐ Sí
> Quiero aparecer como: ☐ Código ☐ Primer nombre: __________
> Nombre y firma: ____________________ Fecha: __________
> Adulto responsable (si corresponde): ____________________

## Anexo F. Glosario breve

| Término | Significado |
|---|---|
| Build (compilación) | Proceso que convierte el código y los datos en la página final que se publica |
| Colección de contenido | Conjunto de datos del mismo tipo que Astro lee y valida |
| Componente | Pieza reutilizable de la página; aquí, uno por sección |
| Esquema | Regla que dice qué campos debe tener un dato y de qué tipo |
| Fuente primaria | Documento emitido por quien produce el dato |
| Isla | Parte pequeña e interactiva que carga JavaScript, mientras el resto es HTML estático |
| Layout | Plantilla con la estructura común de la página |
| SCT | Sistema de Créditos Transferibles: mide la carga de trabajo del estudiante |
| Trazabilidad | Posibilidad de seguir una afirmación hasta su origen verificable |
| WCAG | Pautas internacionales de accesibilidad web; el nivel AA es el exigido |
| Wireframe | Boceto simple que muestra dónde va cada elemento, sin diseño final |
