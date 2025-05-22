---
title: Ventanas, vistas y paneles.
role: doc-chapter
epubtype: chapter
class: colbreak 
draft: false
---


# Ventanas, vistas y paneles. {#windows_and_views}

El lector Thorium tiene una ventana principal y una ventana adicional por abierto
libro. La ventana principal siempre está abierta y ofrece 4 vistas (en casa, todo
libros, catálogos y configuraciones generales) mientras que las vistas de Windows de libros
Depende del formato del libro (textual, audio, visual). Cada formato
Permitir una selección de paneles de acción que se puedan acoplar a un lado del
vista.


## Ventana principal {#main_window}

La ventana principal es donde puede acceder y organizar sus colecciones como
así como la configuración que se aplican a toda la aplicación. Cerrando el
Windows principal Clese la aplicación y todas las ventanas de lectura se abrieron.


### Home View {#home_view}

Esta vista es para acceso rápido. Encuentras aquí los libros que has estado
Lectura recientemente y las que agregó recientemente. Las posibles acciones son
para importar una publicación, abrir una publicación y abrir una publicación
menú. <img src="../../resources/images/local-es/th3_main_window_home.png" class="icon" alt="" role="presentation"/>



### Todas las publicaciones {#all_publications_view}
Este es el lugar donde están todas sus publicaciones. Con el tiempo puede
llena de cientos de libros para que necesite opciones para clasificar y buscar.
Debido a eso, este punto de vista es más complejo. Primeros botones en esta página
permite seleccionar entre dos modos de vista, cuadrícula y tabla que afectará
la visualización de la lista de libros electrónicos y ofrece diferentes opciones para clasificar y
Filtro, se detallan dos párrafos a continuación.

Las acciones disponibles en el nivel de vista son importar una publicación, para
Buscar, para filtrar por etiqueta y navegar por páginas de su biblioteca. Biblioteca
Las páginas son como estantes o pilas, ya que toda la vista de publicación es limitada
a 50 publicaciones para mantenerlo utilizable.

#### Modo de cuadrícula {#grid_mode}

El modo de cuadrícula presenta los libros como tarjetas, la tabulación del teclado
conducirlo de un libro a otro. Este modo ofrece lo posible
Acciones para abrir una publicación y para abrir el menú de publicación.

#### Modo de tabla {#table_mode}

El modo de tabla presenta un libro por línea y permite visualizar un
Gran cantidad de información generalmente disponible solo en el libro
panel de información. La tabulación del teclado lo conducirá a través de todos esos
detalles.



### Vista Catálogos {#catalog_view}

Este es el lugar donde puede almacenar, acceder y navegar por los catálogos en línea
y adquirir o tomar prestados libros electrónicos de ellos. Al principio este lugar parecerá
vacío porque no precargamos ningún catálogo. El *soporte adicional en línea
en línea [¿Dónde conseguir
ebooks?](https://thorium.edrlab.org/th3/get_ebooks/)* puede ayudarle a
a identificar los catálogos disponibles si aún no tiene ninguno en mente.

Hay dos protocolos de catálogos disponibles.

1.  [OPDS](https://opds.io/), un formato estándar para mostrar catálogos en
    la Web. Thorium puede proporcionar acceso a los catálogos OPDS 1 y 2.
2.  Catálogo legible por máquina de las bibliotecas públicas francesas (similar a OPDS
    pero no idéntico).

Los detalles y la forma de configurar y utilizar los catálogos están disponibles en la
sección [Acciones catálogos](../111_catalogs_actions/index.xhtml).


### Panel de configuración de la aplicación {#setting_view}

La configuración de la aplicación está dividida en tres pestañas:

1.  La pestaña General le permite:
    1. Seleccionar el idioma de la interfaz,
    2. Gestionar la autentificación almacenada de acceso a los catálogos. El botón <span class="ui_button">borrar datos de acceso</span> borrará cualquier autentificación de Catálogo previamente almacenada (útil si está leyendo en un ordenador público o compartido o si desea cambiar la cuenta con
    la que está conectado).
    3. Guardar sesión (significa que la aplicación recordará las
    ventanas abiertas al cerrar y las reabrirá al volver a lanzarla).
    4. Añadir una cuenta de biblioteca activando el acceso a la API PNB de Dilicom. Un desplegable Cómo funciona ofrece más detalles sobre esta funcionalidad utilizada para acceder a las bibliotecas públicas francesas.
    5. El creador permite establecer un nombre para añadirlo a las anotaciones. Este Nombre puede clasificarse como Organización o Persona. Se exportará con las anotaciones, por lo que los usuarios deben prestar atención a posibles problemas de privacidad. Si se deja este campo en blanco, las anotaciones se atribuirán a "Desconocido1".
2.  La pestaña Apariencia le permite elegir el Tema de la aplicación (oscuro, claro
    o automático para ajustarse a las preferencias del sistema).
3.  La pestaña Atajos de teclado le ayuda a comprobar y manipular las acciones
    teclado dentro de la aplicación. Descubra los tres puntos
    a un lado del título del Panel con acciones adicionales (Restablecer, Editar y
    Cargar). La de Editar abre la aplicación de la carpeta del sistema a la
    localización del archivo .json de configuración de usuario almacenado, permitiéndole
    de usuario .json almacenado, lo que le permite editarlo fuera de la
    usos futuros o compartirlo dentro de tus dispositivos o con quien quieras.
   <img src="../../resources/images/local-es/th3_main_settings_keys_context.png" class="icon" alt="" role="presentation"/>


## Ventana de lectura {#reading_window}

Cuando se abre un libro, se muestra en una nueva ventana, lo que significa que usted
puede tener varios libros abiertos al mismo tiempo, cada uno en una ventana
independiente que puedes organizar a tu antojo.

### Panel de navegación de lectura {#reading_nav_panel}

Accesible desde la barra de herramientas superior de la ventana de lectura, ese panel contiene un menú desplegable para acceder a diferentes medios de navegación. La disponibilidad y el contenido de cada medio de navegación. Para EPUB, son:
* **Tabla de contenido** (TOC), un listado de autoría del contenido del ebook, normalmente similar a la estructura de encabezamiento del contenido pero no necesario. Un creador de contenidos puede decidir, por ejemplo, limitar la Tabla de Contenidos a una cierta profundidad.
* **Landmarks**, una lista de autoría de los principales puntos de interés del ebook, normalmente Prólogos, Aviso de Copyright, Contenido principal y anexos.
* **Ir a la página**, una lista de saltos de página. La lista de páginas puede hacer referencia a una versión impresa y permitir utilizar el ebook en un entorno de lectura mixto, de modo que sea posible localizarlo o citarlo. En tal caso, Thorium Reader no ofrece ningún medio para identificar el libro impreso relacionado, sino que debe ser informado textual y explícitamente en el contenido por el creador del mismo.  
* **Búsqueda**, una lista generada de coincidencias de búsqueda para ayudar al lector a navegar entre los resultados de búsqueda. Este panel sólo tiene contenido cuando la función de búsqueda está activada.
* **Marcadores**, una lista generada de marcadores del usuario. Este panel ofrece la posibilidad de borrar el marcador o editar su texto adjunto e informa en porcentajes de la progresión de lectura en la que se encuentra.
* **Anotaciones**, una lista generada de anotaciones del usuario.

### Panel de ajustes de lectura {#reading_settings_panel}

Accesible desde la barra de herramientas superior de la ventana de lectura, este panel contiene todas las configuraciones posibles del usuario para ajustar la visualización de los contenidos textuales. Es importante recordar que estas posibilidades pueden estar restringidas por la forma en que se creó el contenido.

Encontrará información detallada sobre los ajustes de lectura disponibles por formatos en la página
<a href="../210_reading/index.xhtml">Subsecciones de lectura</a>:
<ul>
   <li>
      <a href="../211_reading_textuals/index.xhtml">Lectura de contenidos textuales</a>
    </li> 
    <li>
      <a href="../212_reading_visuals/index.xhtml">Lectura de contenidos visuales</a>
    </li> 
    <li>
      <a href="../213_reading_auditory/index.xhtml">Lectura de contenidos de audio</a>
    </li>
    <li>
      <a href="../214_reading_pdfs/index.xhtml">Lectura de PDFs</a>
    </li> 
</ul>

## Panel de información del libro {#book_info_panel}

La información del libro está disponible en un panel dedicado al que se puede acceder
desde el menú de acción de libros de las estanterías de la biblioteca
<img src="../../resources/images/icons3/info-icon.svg" class="icon" alt="" role="presentation"/> <span class="ui_button">Acerca de la publicación</span> o desde la ventana de lectura, tras el Icono de información
<img src="../../resources/images/icons3/info-icon.svg" class="icon" alt="" role="presentation"/>.

Este Panel muestra la información del libro electrónico proporcionada por el archivo.
la fiabilidad de esta información depende del creador del archivo, normalmente
el editor. La información mostrada es:

- Portada de la publicación con la alternativa textual adjunta si presente
- Título de la publicación
- Autor de la publicación
- Descripción o resumen
- Datos de la publicación, incluido el idioma
- Información de accesibilidad mostrada según las [W3C Display Guide for Accesibilidad metadata](https://w3c.github.io/publ-a11y/UX-Guide-Metadata/draft/principles/?updated).
- Etiquetas, incluida la posibilidad de <img src="../../resources/images/icons3/tag-icon.svg" class="icon" alt="" role="presentation"/> <span class="ui_button">Añadir</span> sus propias etiquetas.
- Progresión

Este panel tiene la particularidad de no ser acoplable ya que no
proporciona acciones que necesiten tener acceso al contenido principal del
libro.



