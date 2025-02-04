---
title: Leer con un lector de pantalla
role: chapter
draft: false
---

## Leer con un lector de pantalla

Al lanzar Thorium, si se detecta un lector de pantalla, el pariente las funciones se activan.

Tenga en cuenta que los lectores de pantalla usan un búfer separado para acceder al HTML
Contenido que da como resultado el desplazamiento de Visual Scroll /Page para estar fuera de
sincronización. En otras palabras, el Thorium generalmente no es consciente del usuario
Ubicación de lectura actual dentro del búfer del lector de pantalla, a menos que el
El usuario del lector de pantalla desencadena eventos de API web estándar (como el clic del mouse
En cualquier lugar del texto, o la pestaña de teclado en elementos HTML enfocables).
Las características de accesibilidad dirigidas a las tecnologías de asistencia son fuertemente
afectado por la calidad de los archivos de libros.

La [Comunidad hispanohablante de NVDA](https://nvdaes.github.io/) tiene varios recursos dedicados al uso de Thorium Reader.

# Keysrokes comunes a NVDA y Jaws

(Contribución de Prashant Verma, consorcio Daisy)

Para leer texto, navegar en tablas, navegar en el navegador
Ventana, la tecla de inserción puede ser reemplazada por la tecla Modificador de la pantalla
Lector (por ejemplo, la tecla de bloqueo de CAPS).

## claves rápidas para la navegación

El lector de pantalla debe estar en modo de navegación o cursor virtual.
| Acción | Comando |
| ---| ---|
| Siguiente título | <Kbd> h </kbd> |
| Siguiente mesa | <Kbd> t </kbd> |
| Siguiente cuadro | <Kbd> g </kbd> |
| Siguiente lista | <Kbd> L </kbd> |
| Siguiente campo de formulario | <Kbd> F </kbd> |
| Lista de elementos | <KBD> insertar </kbd> + <kbd> f7 </kbd> (funciona independientemente del modo cursor)

*Use las claves anteriores con la tecla <Kbd> Shift </KBD> para moverse a la anterior
artículo.*

## Texto

| Acción | Comando |
| ---| ---|
| Personaje anterior | <Kbd> ← </kbd> |
| Siguiente personaje | <Kbd> → </kbd> |
| Palabra anterior | <Kbd> Ctrl </kbd> + <kbd> ← </kbd> |
| Diga la siguiente palabra | <Kbd> Ctrl </kbd> + <kbd> → </kbd> |
| Línea anterior | <Kbd> ↑ </kbd> |
| Siguiente línea | <Kbd> ↓ </kbd> |
| Oración anterior | <Kbd> Alt </kbd> + <kbd> ↑ </kbd> (solo mandíbulas)
| Siguiente oración | <Kbd> Alt </kbd> + <kbd> ↓ </kbd> (solo mandíbulas)
| Leer todo | <Kbd> insert </kbd> + <kbd> ↓ </kbd> |
| Anunciar fuentes | <KBD> insertar </kbd> + <kbd> f </kbd>

## mesas

| Acción | Comando |
| ---| ---|
| Celda a la derecha | <Kbd> Alt </kbd> + <kbd> ctrl </kbd> + <kbd> → </kbd> |
| Celda a la izquierda | <Kbd> alt </kbd> + <kbd> ctrl </kbd> + <kbd> ← </kbd> |
| Celda a continuación | <kbd> alt </kbd> + <kbd> ctrl </kbd> + <kbd> ↓ </kbd> |
| Celda arriba | <Kbd> Alt </kbd> + <kbd> ctrl </kbd> + <kbd> ↑ </kbd>