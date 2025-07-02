---
title: Ventanas, vistas y paneles
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Ventanas, vistas y paneles {#windows_and_views}

Thorium reader tiene una ventana principal y una ventana adicional por cada libro abierto.
abierto. La ventana principal está siempre abierta y ofrece 4 vistas (<span class="ui_button">Inicio</span>, <span class="ui_button">Todos los
libros</span>, <span class="ui_button">Catálogos</span> y <span class="ui_button">Configuración</span>) mientras que las vistas de las ventanas de los libros
dependerán del formato del libro (textual, audio, visual). Cada formato
permitirá una selección de paneles de acción que pueden acoplarse a un lado de la
vista.

<section class="filet">

## Ventana principal {#main_window}

La ventana principal es donde puede acceder y organizar sus colecciones, así como
así como los ajustes que se aplican a toda la aplicación. Al cerrar la
ventana principal cierra la aplicación y todas las ventanas de lectura abiertas.

</section>
<section class="filet">

### Vista de inicio {#home_view}

Esta vista es de acceso rápido. Aquí encontrará los libros que ha
leído recientemente y los que ha añadido recientemente. Las acciones posibles son
para <span class="ui_button">Importar publicación</span>, para *Abrir una publicación* activando el enlace en su portada y para *Abrir menú de publicación* usando el botón de menú de tres puntos <img src="../../resources/images/threedot.svg" class="icon" alt="" role="presentation"/>.

</section>
<section class="filet">

### Vista <span class="ui_button">Todos los libros</span> {#all_publications_view}

Este es el lugar donde están todas tus publicaciones. Con el tiempo puede
llenarse de cientos de libros por lo que necesitas opciones para ordenar y buscar.
Por eso, esta vista es más compleja. Los primeros botones de esta página
permite seleccionar entre dos modos de vista, <span class="ui_button">Presentación en cuadrícula</span> y <span class="ui_button">Presentación en lista</span> que afectarán a
la visualización de la lista de ebooks y ofrecen diferentes opciones para ordenar y
filtrar, se detallan dos párrafos más abajo.

Las acciones disponibles en el nivel <span class="ui_button">Ver</span> son *Importar una publicación*, *Buscar*, *Buscar en la lista de libros electrónicos</span>.
*Buscar*, para *Filtrar por etiqueta* y *navegar por páginas de su biblioteca*. Biblioteca
biblioteca son como estanterías o pilas, ya que la vista <span class="ui_button">Todas las publicaciones</span> está limitada
a 50 publicaciones para mantenerla utilizable.

</section>
<section class="filet">

## Presentación en cuadrícula {#grid_mode}

La <span class="ui_button">Presentación en cuadrícula</span> presenta los libros como tarjetas, la tabulación por teclado le
le conducirá de un libro a otro. Este modo ofrece las 
acciones "Abrir una publicación" y "Abrir el menú Publicación".

</section>
<section class="filet">

## Presentación en lista {#table_mode}

La <span class="ui_button">Presentación en lista </span> presenta un libro por línea y permite visualizar un
un gran número de informaciones normalmente disponibles sólo en el "Panel de
información del libro". La tabulación por teclado le guiará a través de todos esos
detalles.

</section>
<section class="filet">

### Vista de catálogos {#catalog_view}

Este es el lugar donde puede almacenar, acceder y navegar por los catálogos en línea
y adquirir o tomar prestados libros electrónicos de ellos. Al principio este lugar parecerá
vacío porque no precargamos ningún catálogo. El soporte adicional en línea 
[¿Dónde conseguir ebooks?](https://thorium.edrlab.org/es/th3/get_ebooks/)
puede ayudarle a identificar los catálogos disponibles si aún no tiene ninguno en mente.

Thorium le permite cargar y consultar catálogos [OPDS](https://opds.io/), un formato estándar para mostrar un catálogo en la Web.

El acceso a las bibliotecas públicas francesas puede activarse desde las preferencias de la aplicación (API Dilicom PNB).

Los detalles y la forma de configurar y utilizar los catálogos están disponibles en la
sección [Acciones catálogos](../111_catalogs_actions/index.xhtml).

</section>
<section class="filet">

### Panel de configuración de la aplicación {#setting_view}

La configuración de la aplicación está dividida en tres pestañas:

1.  La pestaña <span class="ui_button">General</span> permite:
    1. *seleccionar el idioma* de la interfaz,
    2. *Acceder a los catálogos de publicaciones*. El botón <span class="ui_button">Borrar datos de acceso</span> borrará cualquier autentificación de Catálogo previamente almacenada (útil si estás leyendo en un ordenador público o compartido o si quieres cambiar la cuenta con la que estás conectado).
    2. *Guardar sesión* (significa que la aplicación recordará las ventanas abiertas al cerrar y las volverá a abrir cuando se vuelva a lanzar).
    4. *Añadir una cuenta de biblioteca* activando el acceso a la API PNB de Dilicom. Un desplegable Cómo funciona ofrece más detalles sobre esta funcionalidad utilizada para acceder a las bibliotecas públicas francesas.
    5. <span class="ui_button">Creator</span> permite *configurar un Nombre para añadirlo a las anotaciones*. Este Nombre puede categorizarse como Organización o Persona. Se exportará con las anotaciones, por lo que los usuarios deben prestar atención a posibles problemas de privacidad. Si deja este campo en blanco, las anotaciones se atribuirán a "Desconocido1".
2.  La pestaña <span class="ui_button">Apariencia</span> permite elegir el Tema de la aplicación (oscuro, claro o automático para ajustarse a las preferencias del sistema).
3.  La pestaña <span class="ui_button">Accesos directos del teclado</span> le ayuda a comprobar y manipular las acciones del teclado dentro de la aplicación. Descubre los tres puntos a un lado del título del Panel con acciones adicionales (<span class="ui_button">Reiniciar</span>, <span class="ui_button">Editar</span> y <span class="ui_button">Cargar</span>). El <span class="ui_button">Editar</span> abre la aplicación de carpeta de sistema a la localización del archivo `.json` de configuración de usuario almacenado, lo que le permite editarlo fuera de la aplicación (a su propio riesgo), guardarlo para usos futuros o compartirlo dentro de tus dispositivos o con quien quieras.

</section>
<section class="filet">

## Ventana de lectura {#reading_window}

Cuando se abre un libro, se muestra en una nueva ventana, lo que significa que puede tener varios libros abiertos al mismo tiempo, cada uno en una ventana independiente que puedes organizar a tu antojo.

</section>
<section class="filet">

### Panel de navegación de lectura {#reading_nav_panel}

Accesible desde la barra de herramientas superior de la ventana de lectura a través de un icono de libro abierto<img src="../../resources/images/open_book.svg" class="icon" alt="" role="presentation"/>, ese panel contiene un menú desplegable para acceder a diferentes medios de navegación. La disponibilidad y el contenido de cada medio de navegación. Para epub, son:

* <img src="../../resources/images/toc-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Tabla de contenido</span> (TOC), un listado proporcionado por el autor del ebook, normalmente similar a la estructura de encabezados de contenido pero no necesario. Un creador de contenido puede decidir, por ejemplo, limitar la Tabla de Contenido a una cierta profundidad.
* <img src="../../resources/images/landmark-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Puntos de referencia</span>, una lista autoríada de los principales puntos de interés del ebook, por ejemplo Prólogos, Aviso de copyright, Contenido principal y anexos.
* <img src="../../resources/images/target-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Ir a la página</span>, una lista de saltos de página. La lista de páginas puede hacer referencia a una versión impresa y permitir utilizar el ebook en un entorno de lectura mixto, de modo que sea posible localizar o hacer una cita. En tal caso, Thorium Reader en realidad no ofrece ningún medio para identificar el libro impreso relacionado, sino que tiene que ser informado textual y explícitamente en el contenido por el creador del contenido.  
* <img src="../../resources/images/search-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Buscar</span>, una lista generada de coincidencias de búsqueda para ayudar al lector a navegar entre los resultados de búsqueda. Este panel sólo tiene contenido cuando la función de búsqueda está activada.
* <img src="../../resources/images/bookmarkMultiple-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Marcadores</span>, una lista generada de marcadores del usuario. Este panel ofrece la posibilidad de eliminar el marcador o editar su texto adjunto e informa en porcentajes de la progresión de lectura en la que se encuentra.
* <img src="../../resources/images/annotation-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Anotaciones</span>, una lista generada de anotaciones del usuario.

</section>
<section class="filet">

### Panel de ajustes de lectura {#reading_settings_panel}

Accesible desde la barra de herramientas superior de la ventana de lectura, este panel contiene todas las posibles configuraciones del usuario para ajustar la visualización de los contenidos textuales. Es importante recordar que estas posibilidades pueden estar restringidas por la forma en que se creó el contenido.

Encontrará información detallada sobre los ajustes de lectura disponibles por formatos en la página
<a href="../210_reading/index.xhtml">Subsecciones de lectura</a>.

</section>
<section class="filet">

## Panel de información del libro {#book_info_panel}

La información sobre los libros está disponible en un panel específico al que se puede acceder
desde el menú de acciones del libro de las estanterías de la biblioteca
 <span class="ui_button">Acerca de la publicación</span> o desde el icono de información de la ventana de lectura
<img src="../../resources/images/info-icon.svg" alt="" role="presentation" class="icon"/>.

Este Panel muestra la información del libro electrónico proporcionada por el archivo.
la fiabilidad de esta información depende del creador del archivo, normalmente
el editor. La información mostrada es:

* *Cubierta* de la publicación con su alternativa textual adjunta si está presente
* *Título* de la publicación
* *Autor* de la publicación
* *Descripción* o currículum
* *Detalles de la publicación, incluido el *idioma de la publicación
* *Información de accesibilidad* mostrada siguiendo las directrices internacionales (para más información, véase [W3C Display Guide for Accessibility metadata](https://w3c.github.io/publ-a11y/UX-Guide-Metadata/draft/principles/?updated)).
* *Etiquetas*, incluida la posibilidad de <img src="../../resources/images/tag-icon.svg" class="icon" alt="" role="presentation"/> <span class="ui_button">Añadir</span> sus propias etiquetas.
* Progresión

Este panel tiene la particularidad de no ser acoplable ya que no proporciona acciones que necesiten tener acceso al contenido principal del libro.

</section>


