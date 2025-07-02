---
title: Anotaciones
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Anotaciones

*Las anotaciones han sido introducidas por primera vez en Thorium 3, como una nueva característica, puede presentar comportamientos inesperados. Háganos saber cualquier dificultad que encuentre [abriendo una incidencia](https://github.com/edrlab/thorium-reader/issues/new) o [enviándonos un correo electrónico](https://www.edrlab.org/contact/).*

La forma más sencilla de añadir una anotación es seleccionar un texto y pulsar el 
Botón de anotaciones
(<img src="../../resources/images/annotation-icon.svg" class="icon" role="presentation"/>) o pulsar el atajo de teclado <kbd>Shift</kbd> +
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd>. Esto abre la ventana emergente Anotación
y coloca el cursor en el cuadro de entrada donde puede escribir su
anotación (opcional). Puede cambiar el color y el tipo de resalte (Sólido
fondo, Subrayado, Tachado o Contorno) y, a continuación, validar la
creación de la anotación con <span class="ui_button">Guardar</span>.

No se puede acceder a las anotaciones en el contenido mediante la tabulación del teclado. Para navegar entre ellas, los usuarios de teclado deben abrir el Panel de anotaciones.

<section class="filet">

## Panel de anotaciones {#annotations_panel}

El panel de navegación tiene una sección dedicada a las Anotaciones.
Le permite ajustar la visualización y el comportamiento de sus anotaciones a su práctica y también revisar, manipular, borrar, ordenar, filtrar y navegar a través de sus anotaciones.

</section>
<section class="filet">

## Opciones para anotaciones {#annotations_options}

Las opciones de anotación están disponibles en la barra de herramientas del panel de anotaciones.

Hay cuatro opciones disponibles:

- *Modo instantáneo* Abrirá la ventana emergente de anotación en cada selección.
- *Creación rápida* Resalta el texto seleccionado y crea una anotación vacía.
- *Mostrar en márgenes* Cambia el resaltado del texto por una indicación más discreta en el margen de que hay una anotación en esa línea.
- *No mostrar* simplemente oculta cualquier marca de anotación (pero no desactiva la posibilidad de añadir anotaciones).

La combinación de las opciones *Modo instantáneo* y *Creación rápida* le permite utilizar el
modo de anotador en serie, ya que cualquier selección creará un resalte sin
ninguna ventana emergente.

</section>
<section class="filet">

## Ordenar y filtrar anotaciones {#annotations_sort_and_filter}

Las opciones de Ordenar y Filtrar tienen cada una su botón dedicado. Ambas modifican la lista de anotaciones visualizadas en el panel.

La ordenación puede hacerse por Progresión (de principio a fin del libro), Última creación y Última modificación. Sólo afecta al orden de presentación.

El filtrado modificará la lista de anotaciones mostradas, sin eliminarlas. Si busca una anotación que no aparece, puede deberse a que haya un filtro activo. Aparecerá un número en una burbuja junto al icono de opciones de Filtros para visualizar rápidamente si hay filtros activos y cuántos hay. Es un número en texto plano que será anunciado por los lectores de pantalla.

Los filtros de etiquetas activos se muestran visualmente con un fondo azul y son anunciados como activos por los lectores de pantalla.

Todos los filtros permiten la selección múltiple y actúan como casillas de verificación, un clic activa el filtro, otro clic lo desactiva.

Las opciones de filtrado son:
* por Etiqueta, si alguna etiqueta ha sido afectada a alguna anotación, aparecerá aquí;
* por Color, Rojo, Naranja, Amarillo, Verde, Azul-verde, Azul claro, Cian y Violeta;
* por Tipo de dibujo, Contorno, Fondo sólido, Tachado o Subrayado;
* por Creador, si se ha informado de alguno en el <a href="../102_windows_views_panels/index.xhtml#setting_view" >Panel de configuración de la aplicación</a >, o se ha importado con un conjunto de anotaciones.

</section>
<section class="filet">

## Revisión y manipulación de anotaciones {#annotations_view_and_manipulation}

Las anotaciones se muestran como tarjetas en el panel, una tras otra. Cada tarjeta contiene el texto de la anotación, la fecha de creación, la posición en el libro expresada en porcentaje de progresión y unos botones Editar y Suprimir. El texto de la anotación actúa como un botón que desplazará el foco a la propia anotación, por lo que al salir del contexto del panel de anotaciones, habrá que realizar algunas tabulaciones para volver al panel de anotaciones.

Un borde coloreado a la izquierda indica visualmente el Color establecido para la anotación. Esta información no se transmite a las tecnologías de asistencia.

</section>
<section class="filet">

## Intercambiar anotaciones (Importación y exportación programática) {#annotations_io}

Se puede exportar o importar un conjunto de anotaciones. Esto puede hacerse desde el panel Anotaciones en la vista Lectura y desde el menú contextual del libro en las vistas Biblioteca. Esto permite exportar anotaciones incluso después de que haya caducado una licencia LCP.

El botón exportar <img src="../../resources/images/export-icon.svg" class="icon" alt="" role="presentation"/> abrirá un cuadro de diálogo en el que se pedirá un título que se utilizará para identificar el conjunto de anotaciones al importarlo. El botón Guardar abrirá una ventana de Archivo de sistema para seleccionar el lugar donde el usuario desea almacenar este archivo de anotación, así como el nombre del archivo. El título se utilizará como nombre de archivo predeterminado, pero puede cambiarse sin que ello afecte a la identificación del archivo.

Las anotaciones se almacenan con la extensión de archivo `.annotation` y utilizan un formato JSON-LD definido por la recomendación del W3C [Web Annotation Data Model](https://www.w3.org/TR/annotation-model/). Contiene el identificador del ebook y la información del Creador informada en el <a href="../102_windows_views_panels/index.xhtml#setting_view" >Panel de Configuración de la Aplicación</a > así como varios tipos de selectores para permitir la importación y el correcto posicionamiento de las anotaciones por diferentes sistemas de lectura.

El botón de importación <img src="../../resources/images/import-icon.svg" class="icon" alt="" role="presentation"/> se abre para que el usuario seleccione el archivo que desea importar. Si el identificador del libro no es similar al libro abierto donde se realiza la importación, se mostrará un mensaje de error y no se importarán las anotaciones.

Una vez importadas, las anotaciones aparecen en el panel de anotaciones y pueden ser revisadas y manipuladas como cualquier anotación creada. Heredan el título del archivo de anotación original como etiqueta. Estas manipulaciones no afectarán al archivo original `.annotation` que nunca se vincula.

</section>
<section class="filet">

## Exportar anotaciones al formato HTML

Desde Thorium 3.2, es posible exportar las páginas de marcas y las anotaciones bajo la forma de una página web en formato HTML. En una versión futura, esperamos que sea posible personalizar esta exportación a un gabinete personalizable.

Durante la exportación, seleccione la extensión del archivo `.annotation` y modifíquela a `.html`. La exportación se realiza de la misma manera. El botón "Registrar" abre la ventana "Sistema de archivos", en la que el usuario debe seleccionar la ubicación en la que desea guardar el archivo de anotaciones y el nombre del archivo. El título se utilizará como nombre de archivo predeterminado, pero puede modificarse sin que ello afecte a la identificación del archivo.

</section>
