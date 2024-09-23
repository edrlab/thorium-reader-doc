---
title: Contribuer
role: 
draft: false
---

## Contribuer!

Thorium et sa documentation sont développés grâce à la communauté des utilisateurs. Nous avons besoin d'aide pour traduire cette documentation.

Pour ce faire, vous pouvez [nous contacter](https://www.edrlab.org/contact/) .

Si vous êtes suffisamment à l'aise avec GitHub et le format Markdown, vous pouvez proposer une nouvelle traduction via une Pull Request.

Pour cela : clonez le dépôt et créez une branche avec le nom de la langue que vous souhaitez ajouter, faites une copie du dossier `content.en` et renommez-le avec deux lettres correspondant à la langue que vous souhaitez ajouter (par exemple `content.es` contiendra la traduction en espagnol). Les noms des fichiers ne doivent pas être modifiés car ils assurent la correspondance entre les langues.

Le dossier `i18n` contient les traductions des éléments fixes de l'en-tête et du pied de page. Plusieurs langues sont déjà présentes, si votre langue n'est pas présente, copiez-collez le fichier .yaml et renommez-le avec les deux premières lettres des lettres de la langue que vous souhaitez ajouter.

Enfin pour activer le menu de la langue que vous ajoutez, éditez le fichier `config.toml` et ajoutez la langue avec le code suivant :

```
      [languages.en]
  languageName = 'English'
  contentDir = 'content.en'
  weight = 1
```

Vous devez remplacer `.en' with the first two letters of the language you are adding and fill in the name of the language as the` `value. The` weight` indique l'ordre d'apparition dans le menu des langues.

Exemple pour l'espagnol :

```
      [languages.es]
  languageName = 'Español'
  contentDir = 'content.es'
  weight = 3
```

Les images localisées telles que les captures d'écran doivent être ajoutées au dossier `statics/images/local-(two letter language)` .
