---
title: Ventanas, vistas y paneles.
role: doc-chapter
epubtype: chapter
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



### Catalogs View {#catalog_view}

This is the place where you can store, access, browse online catalogs
and acquire or borrow ebooks from them. At first this place will sound
empty because we do not preload any catalog. The *online additional
support [Where to get
ebooks?](https://thorium.edrlab.org/th3/get_ebooks/)* section can help
you identify available catalogs if you do not already have one in mind.

Two catalogs protocoles are available.

1.  [OPDS](https://opds.io/), a standard format to display catalog on
    the Web. Thorium can provide access to OPDS 1 and 2 catalogs.
2.  French public libraries machine-readable catalog (similar to OPDS
    but not identical).

Details and how to set up and use catalogs are available from the
[Catalogs actions section]().




### Application Settings Panel {#setting_view}

Application settings is divided in three tabs:

1.  The General Tab allow you to:
    1. select the language of the interface, 
    2. Manage stored authentification access to catalogues. The <span class="ui_button">clear login data</span> button will delete any Catalog authentification previously stored (useful if you are reading on a public or shared computer or if you want to change the account with
    wich you are connected).
    2. Save session (meaning that the application will remember the
    windows opened at closing and reopen them when launched again).
    4. Add a library account by activating access to Dilicom PNB API. A How does it works foldable gives more details about this functionality used to access French public libraries.
    5. Creator allows to set up a Name to be added to annotations. This Name can be categorised as Organization or Person. It will be exported with Annotations, so users must pay attention to potential privacy issues. Leaving this field blank will cause the annotations to be attributed to "Unknown1".

2.  The Appearance Tab let you choose the application Theme (dark, light
    or automatic to fit the system preference).
3.  The Keyboard shortcuts Tab help you check and manipulate keyboard
    driven actions within the application. Figure out the three dots
    menu aside of the Panel title with extra actions (Reset, Edit and
    Load). The Edit one opens system folder application to the
    localisation of the stored user setting .json file, allowing you to
    edit it outside of the application (at your own risks), save it for
    future uses or share it within your devices or with who you want.
   <img src="../../resources/images/local-es/th3_main_settings_keys_context.png" class="icon" alt="" role="presentation"/>




## Reading window {#reading_window}

When a book is opened, it is displayed in a new window, meaning that you
can have multiple books opened at the same time, each in an independent
window that you can arrange at your will.

### Reading navigation panel {#reading_nav_panel}

Reachable from the reading window top toolbar, that panel contains a dropdown menu to access different navigation means. The availability and content of each navigation mean. For epub, those are:
* **Table of Content** (TOC), an authored listing of ebook content, usually similar to the content heading structure but not necessary. A content creator can decide per example to limit the Table of Content to a certain depth.
* **Landmarks**, an authored list of major interest points of the ebook, usually Forewords, Copyright notice, Main content and annexes. 
* **Go to page**, an authored list of page breaks. The page list may refers to a print version and allow to use the ebook in a mixed reading environment, so it becomes possible to locate or make a citation. In such case, Thorium Reader actually offers no mean to identify the related print book, it has to be textually and explicitly informed in the content by the content creator.  
* **Search**, a generated list of search match(es) to help reader navigate between search results. This panel has content only when the search function is activated. 
* **Bookmarks**, a generated list of user bookmarks. This panel  offer the possibility to delete the bookmark or edit it's attached text and informs in percents the reading progression where it stands.
* **Annotations**, a generated list of user annotations

### Reading settings panel {#reading_settings_panel}

Reachable from the reading window top toolbar, that panel contains all possible user settings to adjust the display of the textual contents. It is important to remember that such possibilities may be restricted by how the content was created. 

Detailed information about available reading settings per formats are available from the 
<a href="../210_reading/index.xhtml">Reading sub sections</a>:
<ul>
   <li>
      <a href="../211_reading_textuals/index.xhtml">Reading textual contents</a>
    </li>
    <li>
      <a href="../212_reading_visuals/index.xhtml">Reading visual contents</a>
    </li>
    <li>
      <a href="../213_reading_auditory/index.xhtml">Reading audio contents</a>
    </li>
    <li>
      <a href="../214_reading_pdfs/index.xhtml">Reading PDFs</a>
    </li>
</ul>

## Book Information panel {#book_info_panel}

Book Information is available in a dedicated panel that can be reached
from the library shelves book action menu
<img src="../../resources/images/icons3/info-icon.svg){.icon
role="presentation"} <span class="ui_button">About publication</span> or from the Reading
window Information Icon
<img src="../../resources/images/icons3/info-icon.svg){.icon
role="presentation"}.

This Panel displays ebook information as provided by the file, the
trustness of this information relies on the creator of the file, usually
the publisher. The information displayed is:

-   Cover of the publication with it\'s attached textual alternative if
    present
-   Title of the publication
-   Author of the publication
-   Description or resume
-   Publication details including publication language
-   Accessibility information displayed following the international
    guidelines (for more information, see [W3C Display Guide for
    Accessibility
    metadata](https://w3c.github.io/publ-a11y/UX-Guide-Metadata/draft/principles/?updated)).
-   Tags, including the possibility to
    <img src="../../resources/images/icons3/tag-icon.svg" class="icon" alt="" role="presentation"/> <span class="ui_button">Add</span> your own tags.
-   Progression

This panel has the particularity of not being dockable as it does not
provides action that needs to have access to the main content of the
book.



