---
title: Atajos de teclado
description: ''
draft: 'false'
weight: '402'
toc: 'false'
---

{{&lt; alert info &gt;}} Information

La tecla <kbd>Shift</kbd> está representada por una flecha vacía que apunta hacia arriba en algunos teclados: <kbd><b>⇧</b></kbd> .

La tecla <kbd>Ctrl</kbd> se reemplaza por la tecla <kbd>Cmd</kbd> en los teclados Mac.

{{&lt; /alerta&gt;}}

<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>F10</kbd> : Contenido principal (`FocusMain`)</dt>
 <dd>En las ventanas del lector y de la biblioteca, mueve el foco del teclado al punto de referencia del área "principal" (en la vista del lector, esto está inmediatamente antes del marco que muestra el contenido de la publicación)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>t</kbd> : Barra de herramientas (`FocusToolbar`)</dt>
 <dd>En las ventanas del lector y de la biblioteca, mueve el foco del teclado a la barra de herramientas horizontal superior, inmediatamente antes del enlace "omitir" (que a su vez mueve el foco al punto de referencia del área "principal")  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>n</kbd> : Navegación (`FocusReaderNavigation`)</dt>
 <dd>En la ventana del lector, mueve el foco del teclado al panel de navegación (tabla de contenido, marcadores, etc.)  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>n</kbd> : Tabla de contenido (`FocusReaderNavigationTOC`)</dt>
 <dd>En la ventana del lector, mueve el foco del teclado al panel de navegación, pero más específicamente a la tabla de contenido y, si es posible, al encabezado detectado/más cercano a la ubicación de lectura.  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>p</kbd> : Ir a la página (`FocusReaderGotoPage`)</dt>
 <dd>En la ventana del lector, mueve el foco del teclado a la sección "Ir a página" en el panel de navegación  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>s</kbd> : Configuración del lector (`FocusReaderSettings`)</dt>
 <dd>En la ventana del lector, mueve el foco del teclado al panel de configuración (preferencias del usuario para mostrar el contenido de la publicación)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>b</kbd> : Marcadores (`ToggleBookmark`)</dt>
 <dd>En la ventana del lector, alternar marcador (se produce una notificación para que los lectores de pantalla anuncien el cambio)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>F11</kbd> : Pantalla completa (`ToggleReaderFullscreen`)</dt>
 <dd>En la ventana del lector, alternar pantalla completa  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>i</kbd> : Panel de información del libro (`OpenReaderInfo`)</dt>
 <dd>En la ventana del lector, cuadro de diálogo modal emergente con información de la publicación (puede usarse en futuras versiones de Thorium para una función similar en la ventana de la biblioteca)  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>i</kbd> : dónde estoy (`OpenReaderInfoWhereAmI`)</dt>
 <dd>En la ventana del lector, cuadro de diálogo modal emergente con información de la publicación, con foco directo del teclado en la sección que muestra la jerarquía de encabezados y otra información contextual para la ubicación de lectura actual, como el salto de página anterior más cercano, así como el índice del documento en el orden de lectura (esta es la función "dónde estoy").  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>k</kbd> : dónde estoy (notificación rápida compatible con lectores de pantalla) (`SpeakReaderInfoWhereAmI`)</dt>
 <dd>En la ventana del lector, esta es la función "dónde estoy", igual que la anterior, pero solo se pronuncia a través del TTS del lector de pantalla gracias a una región en vivo ARIA con discurso asertivo que interrumpe la narración actual.  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>w</kbd> : Cerrar el libro (`CloseReader`)</dt>
 <dd>En la ventana del lector, cierra la ventana y regresa a la vista de la biblioteca.  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>f</kbd> : Buscar un libro (`FocusSearch`)</dt>
 <dd>En la ventana de la biblioteca, mueve el foco del teclado a la entrada de texto de búsqueda de la estantería local o la fuente OPDS  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>f</kbd> : buscar en un libro (`FocusSearch`)</dt>
 <dd>En la ventana del lector, mueve el foco del teclado a la entrada de texto de búsqueda de toda la publicación.  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> (opcional) + <kbd>F3</kbd> : resultado de búsqueda anterior o siguiente (`SearchPrevious` / `SearchNext`)</dt>
 <dd>En la ventana del lector, cuando la entrada de texto de búsqueda de toda la publicación está abierta, busca la coincidencia anterior/siguiente  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> (opcional) + <kbd>Ctrl</kbd> + <kbd>G</kbd> : resultado de búsqueda anterior o siguiente (`SearchPreviousAlt` / `SearchNextAlt`)</dt>
 <dd>Lo mismo que arriba (atajo de teclado alternativo)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>←</kbd> o <kbd>→</kbd> : Siguiente página OPDS (`NavigatePreviousOPDSPage` / `NavigateNextOPDSPage`)</dt>
 <dd>En la ventana de la biblioteca de feeds OPDS, activa los enlaces de paginación anterior o siguiente  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>coma</kbd> o <kbd>punto</kbd> : Siguiente página OPDS (`NavigatePreviousOPDSPageAlt / NavigateNextOPDSPageAlt`)</dt>
 <dd>Lo mismo que arriba (atajo de teclado alternativo)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ALT</kbd> (excepto en MacOS) + <kbd>←</kbd> o <kbd>→</kbd> : Capítulo anterior o siguiente (`NavigatePreviousChapter` / `NavigateNextChapter`)</dt>
 <dd>En la ventana del lector, desplazarse al "capítulo" anterior o siguiente (elemento del lomo en el orden de lectura de la publicación). Tenga en cuenta que el foco del teclado se mueve automáticamente al punto de referencia del área "principal", que se encuentra inmediatamente antes del marco que muestra el contenido de la publicación (al igual que cuando se sigue o se activa un enlace en la tabla de contenidos).  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>página abajo</kbd> o <kbd>página arriba</kbd> : Capítulo anterior o siguiente (`NavigatePreviousChapterAlt` / `NavigateNextChapterAlt`)</dt>
 <dd>Lo mismo que arriba (atajo de teclado alternativo)  </dd>
</dl>
<dl>
 <dt>  <kbd>←</kbd> o <kbd>→</kbd> : Página anterior o siguiente (`NavigatePreviousPage` / `NavigateNextPage`)</dt>
 <dd>En la ventana del lector, pasar a la "página" anterior o siguiente (o desplazarse por la unidad, si la paginación está deshabilitada)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>coma</kbd> o <kbd>punto</kbd> : Página anterior o siguiente (`NavigatePreviousPageAlt` / `NavigateNextPageAlt`)</dt>
 <dd>Lo mismo que arriba (atajo de teclado alternativo)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>Inicio</kbd> o <kbd>Fin</kbd> : Inicio o Fin de la publicación (`NavigateToBegin` / `NavigateToEnd`)</dt>
 <dd>En la ventana del lector, va al principio o al final de la publicación.  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>retroceso</kbd> con modificador <kbd>shift</kbd> para la operación inversa: Historial anterior e Historial siguiente (`NavigatePreviousHistory` / `NavigateNextHistory`): </dt>
 <dd>En la ventana del lector, retroceder o avanzar en el historial de navegación: Inicio o Fin de la publicación   </dd>
</dl>

<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>1</kbd> : Audio anterior (`AudioPrevious`)</dt>
 <dd>En la ventana del lector, llama al comando "anterior" para audio (superposiciones de medios TTS o EPUB3 para leer en voz alta, o "rebobinar" para audiolibros)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>2</kbd> : Reproducir o pausar audio (`AudioPlayPause`)</dt>
 <dd>En la ventana del lector, invoca los comandos de alternancia "reproducir" o "pausar" para audio (superposiciones de medios TTS o EPUB3 de lectura en voz alta)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>3</kbd> : Siguiente audio (`AudioNext`)</dt>
 <dd>En la ventana del lector, llama al comando "siguiente" para audio (TTS o EPUB3 Media Overlays leídos en voz alta, o "adelante" para audiolibros)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>4</kbd> : Detener audio (`AudioStop`)</dt>
 <dd>En la ventana del lector, llama al comando "detener" para audio (TTS o EPUB3 Media Overlays leídos en voz alta, o "pausa" para audiolibros)  </dd>
</dl>
