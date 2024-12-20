---
title: Leer con un lector de pantalla
role: chapter
draft: false
weight: '301'
---

## Leer con un lector de pantalla

Al iniciar Thorium, si se detecta un lector de pantalla, el relativo
las funciones están activadas.

Tenga en cuenta que los lectores de pantalla utilizan un búfer independiente para acceder al código HTML.
contenido que provoca desplazamiento visual/desplazamiento de página fuera de
sincronizar. En otras palabras, Thorium generalmente no conoce la información del usuario.
ubicación de lectura actual dentro del búfer del lector de pantalla, a menos que
el usuario del lector de pantalla activa eventos de API web estándar (como un clic del mouse)
en cualquier parte del texto o en una pestaña del teclado en elementos HTML enfocables).

 advertencia
Atención !

Las características de accesibilidad para las tecnologías de asistencia están fuertemente
afectado por la calidad de los archivos del libro.


# Pulsaciones de teclas comunes a NVDA y JAWS

(contribución de Prashant Verma, Consorcio DAISY)
Para leer texto, navegar por tablas, navegar por el navegador
ventana, la tecla Insertar puede ser reemplazada por la tecla modificadora de pantalla.
reproductor (por ejemplo, la tecla Bloq Mayús).
## Teclas de acceso rápido para la navegación

El lector de pantalla debe estar en modo de navegación o cursor virtual.

|Acción|Teclas|
|---|---|
|Siguiente título| <kbd>H</kbd>|
|Siguiente mesa| <kbd>T</kbd>|
|Siguiente gráfico| <kbd>G</kbd>|
|Siguiente lista|<kbd>L</kbd>|
|Siguiente campo de formulario|<kbd>F</kbd>|
|Lista de elementos| <kbd>INSERT</kbd> + <kbd>F7</kbd> (funciona independientemente del modo del cursor)|

*Utilice las teclas de arriba con la tecla <kbd>Shift</kbd> para pasar al anterior
artículo.*

## Texto

|Acción|Teclas|
|---|---|
|Personaje anterior| <kbd>←</kbd>|
|Siguiente personaje| <kbd>→</kbd>|
|Palabra anterior|<kbd>Ctrl</kbd> + <kbd>←</kbd>|
|Di la siguiente palabra|<kbd>Ctrl</kbd> + <kbd>→</kbd>|
|Línea anterior|<kbd> ↑</kbd>|
|Siguiente línea|<kbd>↓</kbd>|
|Oración anterior|<kbd>Alt</kbd> + <kbd> ↑</kbd> (solo Jaws)|
|Siguiente oración|<kbd>Alt</kbd> + <kbd>↓</kbd> (solo Jaws)|
|Leer todo| <kbd>INSERTAR</kbd> + <kbd>↓</kbd>|
|Anunciar fuente|<kbd>INSERT</kbd> + <kbd>F</kbd>|

## Pinturas

|Acción|Teclas|
|---|---|
|Celda de la derecha| <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>→</kbd>|
|Celda de la izquierda|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd>|
|Celda inferior|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↓</kbd>|
|Celda arriba|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd> ↑</kbd>|