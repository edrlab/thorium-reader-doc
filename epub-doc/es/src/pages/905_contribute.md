---
title: Contribuir
role: doc-chapter
epubtype: chapter
draft: false
---
## ¡Contribuir!

Thorium  y su documentación se desarrollan gracias al usuario
comunidad. Necesitamos ayuda para traducir esta documentación.

Para hacerlo, puede [contactarnos] (https://www.edrlab.org/contact/).

Si te sientes lo suficientemente cómodo con GitHub y el formato de Markdown
puede proponer una nueva traducción a través de una solicitud de extracción.

Para hacer esto: clonar el reposiThorium  y crear una rama con el nombre de
el idioma que desea agregar, haga una copia de la carpeta `content.en` y
cámbiele el nombre con dos letras correspondientes al idioma que desea agregar
(por ejemplo `content.es` contendrá la traducción al español). El
Los nombres de los archivos no deben cambiarse ya que aseguran la correspondencia.
entre idiomas.

La carpeta `i18n` contiene las traducciones de los elementos fijos de
el encabezado y pie de página. Varios idiomas ya están presentes, si su
el idioma no está presente, copie, pegue el archivo .yaml y cámbiele el nombre con
las dos primeras letras de las letras del idioma que desea agregar.

Finalmente para activar el menú del idioma que agregas, edita el archivo.
`config.toml` y agrega el idioma con el siguiente código:

          [idiomas.es]
      nombre de idioma = 'inglés'
      contentDir = 'content.en'
      peso = 1

        

Debes reemplazar
`.en' con las dos primeras letras del idioma que estás agregando y completa el nombre del idioma como `languageName
`valor. El `peso\` indica el orden de aparición en el idioma.
menú.

Ejemplo para español:

          [idiomas.es]
      nombreIdioma = 'Español'
      contentDir = 'contenido.es'
      peso = 3

        

Las imágenes localizadas, como capturas de pantalla, deben agregarse a la carpeta.
`estática/imágenes/local-(lenguaje de dos letras)`.