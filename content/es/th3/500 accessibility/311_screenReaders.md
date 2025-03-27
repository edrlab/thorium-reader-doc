---
title: Leer con un lector de pantalla
role: chapter
draft: 'false'
weight: '301'
---

En complemento de esta documentación, recomandamos consultar la pagina web dedicada por de la Comunidad hispanohablante de NVDAe [PUB y NVDA (7). Thorium Reader](https://nvdaes.github.io/epub7).

## Leer con un lector de pantalla

Al iniciar Thorium, si se detecta un lector de pantalla, el relativo las funciones están activadas.

Tenga en cuenta que los lectores de pantalla utilizan un búfer independiente para acceder al contenido HTML, lo que hace que el desplazamiento visual o el desplazamiento de la página no estén sincronizados. En otras palabras, Thorium generalmente no conoce la ubicación de lectura actual del usuario dentro del búfer del lector de pantalla, a menos que el usuario del lector de pantalla active eventos estándar de la API web (como hacer clic con el mouse en cualquier parte del texto o presionar la tecla Tab en elementos HTML enfocables).

advertencia Atención !

Las características de accesibilidad dirigidas a las tecnologías de asistencia se ven fuertemente afectadas por la calidad de los archivos del libro.

# Pulsaciones de teclas comunes a NVDA y JAWS

(Contribución de Prashant Verma, Consorcio DAISY)

Para leer texto, navegar en tablas, navegar en la ventana del navegador, la tecla de inserción puede ser reemplazada por la tecla modificadora del lector de pantalla (por ejemplo, la tecla Bloq Mayús).

## Teclas de acceso rápido para la navegación

El lector de pantalla debe estar en modo de navegación o cursor virtual.

Acción | Teclas
--- | ---
Siguiente título | <kbd>H</kbd>
Siguiente mesa | <kbd>T</kbd>
Siguiente gráfico | <kbd>G</kbd>
Siguiente lista | <kbd>L</kbd>
Siguiente campo de formulario | <kbd>F</kbd>
Lista de elementos | <kbd>INSERT</kbd> + <kbd>F7</kbd> (funciona independientemente del modo del cursor)

*Utilice las teclas anteriores con la tecla <kbd>Shift</kbd> para pasar al elemento anterior.*

## Texto

Acción | Teclas
--- | ---
Personaje anterior | <kbd>←</kbd>
Siguiente personaje | <kbd>→</kbd>
Palabra anterior | <kbd>Ctrl</kbd> + <kbd>←</kbd>
Di la siguiente palabra | <kbd>Ctrl</kbd> + <kbd>→</kbd>
Línea anterior | <kbd> ↑</kbd>
Siguiente línea | <kbd>↓</kbd>
Oración anterior | <kbd>Alt</kbd> + <kbd> ↑</kbd> (solo Jaws)
Siguiente oración | <kbd>Alt</kbd> + <kbd>↓</kbd> (solo Jaws)
Leer todo | <kbd>INSERTAR</kbd> + <kbd>↓</kbd>
Anunciar fuente | <kbd>INSERT</kbd> + <kbd>F</kbd>

## Tablas

Acción | Teclas
--- | ---
Celda de la derecha | <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>→</kbd>
Celda de la izquierda | <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd>
Celda inferior | <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↓</kbd>
Celda arriba | <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd> ↑</kbd>
