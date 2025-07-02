---
title: Leer documents PDFs
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Leer documents PDFs

El motor de lectura de PDF de Thorium se basa en pdf.js, un visor de Formato de Documento Portátil (PDF) construido con HTML5. PDF.js está impulsado por la comunidad y cuenta con el apoyo de Mozilla.

<section class="filet">

## Configuración de lectura para PDFs

La compatibilidad con PDF incluye 8 niveles de zoom y la capacidad de visualización en una o dos paginas.

</section>
<section class="filet">

## Funciones de navegación para PDF

La navegación en PDF siempre se puede hacer con el panel de ir a la página. Además, cuando los creadores de PDFs han incluido Esquemas de Documentos, éstos están disponibles a través del Panel de Navegación de la Tabla de Contenido. Se trata de un comportamiento diferente al de acrobat reader, que muestra los esquemas de documentos como marcadores y permite a los usuarios manipularlos cambiando el orden, renombrandolos, añadiendolos y eliminandolos.

Con Thorium Reader, puede añadir sus propios marcadores de forma segura y los encontrará en el panel de navegación de marcadores.

</section>
<section class="filet">

## Marcadores y anotaciones para PDFs

En este momento, las anotaciones no están disponibles para los PDF. Los marcadores están totalmente implementados y se pueden crear y navegar como se detalla en el [Capítulo de marcadores de la acción de lectura](../230_bookmarks/index.xhtml).

Un punto de atención aquí es que sólo se puede añadir un marcador por página. Si se intenta añadir más de un marcador por página, se eliminará el existente.

</section>
<section class="filet">

## Imprimir PDF

Desde la versión 3.2, es posible imprimir rangos de páginas de un PDF. Esto puede estar limitado por reglas LCP decididas por el proveedor o prestador.

</section>
<section class="filet">

## Atajos de teclado para PDF

PDF.js añade atajos de teclado que no son configurables en el panel de ajustes de Thorium. La lista aquí reproducida no es exhaustiva y algunos atajos pueden no funcionar. Está copiada de la página [PDF.JS Frequently Asked Questions](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-are-the-pdfjs-keyboard-shortcuts).

</section>
<section class="filet">

### Navegación

Las teclas <kbd>Inicio</kbd>, <kbd>Fin</kbd>, <kbd>Página arriba</kbd>, <kbd>Página abajo</kbd> y todas las <kbd>flechas</kbd> se pueden utilizar para navegar por el documento. Además, existen los siguientes atajos de navegación:

* Página siguiente: <kbd>n</kbd>, <kbd>j</kbd>, <kbd>Barra espaciadora</kbd> (sólo modo presentación), <kbd>Intro</kbd> (sólo modo presentación) o clic izquierdo (sólo modo presentación).
* Página anterior: <kbd>p</kbd>, <kbd>k</kbd>, <kbd>Mayúsculas</kbd> + <kbd>Barra espaciadora</kbd> (solo modo presentación), <kbd>Mayúsculas</kbd> + <kbd>Intro</kbd> (solo modo presentación) o <kbd>Mayúsculas</kbd> + clic izquierdo (solo modo presentación).

</section>
<section class="filet">

### Controles del visor

Los botones de la interfaz de usuario o <kbd>ctrl</kbd> + rueda del ratón se pueden utilizar para cambiar el nivel de zoom, pero también hay disponibles atajos de teclado:

* Acercar: <kbd>ctrl</kbd> + <kbd>+</kbd>, <kbd>ctrl</kbd> + <kbd>=</kbd>.
* Alejar: <kbd>ctrl</kbd> + <kbd>-</kbd>.
* Restaurar zoom normal: <kbd>ctrl</kbd> + <kbd>0</kbd>
* Girar el documento en el sentido de las agujas del reloj: <kbd>r</kbd>
* Girar el documento en sentido contrario a las agujas del reloj: <kbd>shift</kbd> + <kbd>r</kbd>
* Mover el foco a la casilla 'ir a página': <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>
* Buscar texto en el documento: <kbd>ctrl</kbd> + <kbd>f</kbd>
* Buscar siguiente aparición de texto en el documento: <kbd>ctrl</kbd> + <kbd>g</kbd>
* Buscar ocurrencia anterior de texto en el documento: <kbd>mayúsculas</kbd> + <kbd>ctrl</kbd> + <kbd>g</kbd>

(sustituya <kbd>ctrl</kbd> por meta en algunas configuraciones)

</section>
