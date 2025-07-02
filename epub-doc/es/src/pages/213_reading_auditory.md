---
title: Leer contenidos de audio
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Leer contenidos de audio

Los contenidos de audio pueden aparecer en casi todos los formatos. Cuando se incluyen en primeros ebooks textuales o visuales, vienen con un conjunto de botones como play, pausa, stop, y eventualmente rebobinar y avanzar u otras opciones como la velocidad. Estos botones no forman parte de la interfaz de Thorium, pueden ser proporcionados por el motor de renderizado específico (Chromium para contenidos web en EPUB y Daisy ; pdf.js para PDF). También pueden ser estilizados por el creador del contenido. Por lo tanto, esta guía de usuario apenas puede dar información detallada sobre su diseño y funcionalidades.

Por el contrario, los contenidos sólo audio, los audios sincronizados y el audio generado por Text to speech se controlan directamente mediante la interfaz de Thorium.

## Sólo audio {#audioonly}

Thorium puede leer audiolibros en los formatos estandarizados W3C audiobook y libros Daisy audio solo. Cuando se abra un libro de este tipo, comenzará a reproducirse. La ventana de lectura mostrará la portada, un conjunto de botones de funciones y una barra de progresión.

La interfaz se compone de:
* Un botón Shift para Reproducir o Pausar;
* Un botón Anterior y otro Siguiente para pasar a la sección de autoría anterior o siguiente;
* Un botón para rebobinar y otro para avanzar 30 segundos antes o después.
* Un menú desplegable para cambiar la velocidad de lectura;
* Una barra de progresión que muestra el tiempo transcurrido y el tiempo total de la sección actual del libro.

Es posible marcar un lugar de lectura y añadir una nota al marcador. No es posible realizar anotaciones.

La navegación en los audiolibros suele hacerse sólo como tabla de contenidos.

En realidad, no es posible realizar búsquedas en contenidos sólo de audio.

## Texto a voz (TTS) {#readaloud}

La función de texto a voz se activa mediante el botón del altavoz situado en el centro de la barra de herramientas o mediante un atajo de teclado.
Hay una sincronización de voz a texto que se muestra mediante
resaltado de la frase actual y subrayado de la palabra.

Las acciones posibles son

- Reproducir y pausar;
- Mover la posición de reproducción a anterior y siguiente;
- Controlar la velocidad con un rango de x0,5 a x2;
- Simplificar la vista de la publicación ;
- Elegir la voz preferida.

<div class="framed">

Thorium utiliza las voces del sistema operativo del ordenador, en
combinación con la información de idioma proporcionada por el libro.
Si tiene problemas, consulte la 
[entrada FAQ relacionada en línea](https://thorium.edrlab.org/es/th3/400_ressources/430_faq/index.html).

</div>

### Opciones de texto a voz {#readalouptions}

Además de las funcionalidades, un panel de opciones específico ofrece opciones para una "vista clara" y la posibilidad de omitir contenido secundario (<span class="ui_info">omision de informacion auxiliar</span>), que puede incluir notas a pie de página u otro contenido marcado como complementario (`aside`) según la semántica indicada al producir el libro digital. La opcion <span class="ui_info">Dividir (texto a voz)</span> dividirá el contenido por frases para un resaltado más preciso.

</section>
<section class="filet">
