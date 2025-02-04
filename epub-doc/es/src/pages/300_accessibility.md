---
title: Accesibilidad
role: doc-chapter
epubtype: chapter
draft: false
---

# Accesibilidad {#a11y}

La aplicación es compatible con tecnologías de asistencia como reproductores de pantalla, incluidos Jaws, NVDA, Narrador y ValiceOver. Incluye una función de lectura en voz alta con resaltado visual. El lector de torio se puede usar con mouse o teclado, y los atajos de teclado son configurables. La pantalla se puede personalizar para satisfacer las necesidades de los usuarios, incluidos los colores, el tamaño del texto, el espacio, la fuente y el diseño.
Las características de accesibilidad dependen en gran medida de la calidad de los archivos de publicación electrónica y se ven afectadas por ello. 

La página de [soporte en línea de accesibilidad](https://thorium.edrlab.org/es/th3/500_accessibility/) contiene información completa relacionada con la accesibilidad de la aplicación y las características relacionadas con ella.

Este capítulo toma la información principal para tenerla fuera de línea.

## Información de accesibilidad {#a11y_info}

Actualmente, se muestra torio en el [panel de información del libro](../102_windows_views_panels/index.xhtml#book_info_panel) bajo el título 'Descripción' Descripción 'el contenido de los metadatos de accesibilidad proporcionados por los creadores del archivo.

## Funciones de accesibilidad nativa {#a11y_native}

Las funciones de accesibilidad nativa se describen en cada sección de esta documentación que corresponde a su contexto de uso. Esto incluye en particular:

* [Ajustes visuales en la visualización del texto](../102_windows_views_panels/index.xhtml#reading_settings_panel)
* [Lectura de audio generada en voz syntetica](../211_reading_textuals/index.xhtml#read_text_readaloud)
  
## Leer con un lector de pantalla {#screenreader}

Al lanzar torio, si se detecta un reproductor de pantalla, las funciones relativas se activan.
Tenga en cuenta que los reproductores de pantalla usan memoria de búfer separada para acceder al contenido HTML, lo que provoca la desincronización de desplazamiento visual y una compensación de página que se muestra con la página leída por el reproductor de pantalla. En otras palabras, el torio generalmente no es consciente de la ubicación de lectura actual del usuario del reproductor de pantalla, a menos que el usuario de la pantalla desencadene eventos (como un clic del mouse en cualquier lugar del texto o una tecla de teclado en elementos HTML enfocados).

### Teclas rápidas para la navegación (municipios en NVDA y Jaws)

*(Contribución de Prashant Verma, consorcio Daisy)*

Para leer texto, navegue en las tablas, navegue en la ventana del navegador, la tecla de inserción se puede reemplazar mediante la tecla de cambio de pantalla (por ejemplo, la tecla<kbd>Verr. Maj</kbd>).

El reproductor de pantalla debe estar en modo de navegación o cursor virtual.

|Acción |Teclas|
|---|---|
|Siguiente título| <kbd>H</kbd> |
|Siguiente mesa| <kbd>T</kbd>|
|Siguiente gráfico| <kbd>G</kbd>|
|Siguiente lista|<kbd>L</kbd>|
|Siguiente campo de formulario|<kbd>F</kbd>|
|Lista de elementos| <kbd>INSERT</kbd> + <kbd>F7</kbd>|
|Letra anterior| <kbd>←</kbd> |
|Siguiente letra| <kbd>→</kbd> |
|Palabra anterior |<kbd>CTRL</kbd> + <kbd>←</kbd> |
|Siguiente palabra|<kbd>CTRL</kbd> + <kbd>→</kbd> |
|Línea anterior |<kbd>↑</kbd> |
|Siguiente línea |<kbd>↓</kbd> |
|Oración anterior |<kbd>ALT</kbd> + <kbd>↑</kbd> (Jaws uniquement) |
|Siguiente oración |<kbd>ALT</kbd> + <kbd>↓</kbd> (Jaws uniquement) |
|Leer todo |<kbd>INSERT</kbd> + <kbd>↓</kbd> |
|Celda a la derecha |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>→</kbd> |
|Celda a la izquierda |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>←</kbd>|
| Célula a continuación|<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>↓</kbd>|
| Celda arriba|<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>↑</kbd>|
