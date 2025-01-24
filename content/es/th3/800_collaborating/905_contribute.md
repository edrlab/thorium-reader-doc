---
title: Contribuya a esta documentación
description: ''
draft: 'false'
weight: '905'
toc: 'false'
---

Thorium y su documentación se desarrollan gracias a la comunidad de usuarios. Necesitamos ayuda para traducir esta documentación.

Para ello, puede <a href="https://www.edrlab.org/contact/">ponerse en contacto con nosotros</a> .

Si se siente lo suficientemente cómodo con GitHub y el formato Markdown, puede proponer una nueva traducción a través de una solicitud de extracción.

Para ello: clona el reposiThorium  y crea una rama con el nombre del idioma que quieras añadir, haz una copia de la carpeta `content.en` y renómbrala con dos letras correspondientes al idioma que quieras añadir (por ejemplo `content.es` contendrá la traducción al español). Los nombres de los archivos no deben cambiarse ya que aseguran la correspondencia entre idiomas.

La carpeta `i18n` contiene las traducciones de los elementos fijos del encabezado y pie de página. Ya hay varios idiomas presentes, si el tuyo no está presente, copia y pega el archivo .yaml y renómbralo con las dos primeras letras del idioma que quieras agregar.

Finalmente para activar el menú del idioma que agregues, edita el archivo `config.toml` y agrega el idioma con el siguiente código:

```
[languages.en]
  languageName = 'English'
  contentDir = 'content.en'
  weight = 1
```

Debes reemplazar `.en' with the first two letters of the language you are adding and fill in the name of the language as the` `value. The` peso` indica el orden de aparición en el menú de idiomas.

Ejemplo para español:

```
[languages.es]
  languageName = 'Español'
  contentDir = 'content.es'
  weight = 3
```

Las imágenes localizadas, como capturas de pantalla, deben agregarse a la carpeta `statics/images/local-(two letter language)` .
