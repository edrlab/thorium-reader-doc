---
title: "Contribuez !"
description: ""
draft: false
weight: 905
toc: false
---

Thorium et sa documentation sont développés grace à la communauté d'utilisateurs.

Nous avons besoin d'aide pour traduire cette documentation. 

Pour ce faire, vous pouvez nous 
<a href="https://www.edrlab.org/contact/">contacter</a>.

Si vous êtes suffisament à l'aise avec GitHub et le format Markdown vous 
pouvez proposer une nouvelle traduction via un Pull Request. 

Pour ce faire clonez le dépot et créez une branche du nom de la langue que vous 
souhaitez ajouter, faites une copie du dossier `content.en` et renommez le avec 
deux lettres correspondants à la langue que vous souhaitez ajouter (par exemple 
`content.es` contiendra la traduction en espagnol). Les noms des fichiers ne 
doivent pas être modifiès.

Le dossier i18n contient les traductions pour les éléments fixes de l'entête et 
du pied de page. Plusieurs langues sont déja présentes, si votre langue n'est 
pas présente, copiez le fichier en.yaml et renommez le avec les deux premieres 
lettres de la langue que vous souhaitez ajouter. 

Enfin pour activer le menu de la langue que vous ajoutez, éditez le fichier 
`config.toml` et ajoutez la langue avec le code suivant : 

```
[languages.en]
  languageName = 'English'
  contentDir = 'content.en'
  weight = 1
```

Vous devez remplacer `.en` par les deux premières lettres de la langue que vous 
ajoutez et renseigner le nom de la langue comme valeur de `languageName`. 
Le `weight` indique l'ordre d'apparition dans le menu des langues. 

Exemple pour l'espagnol : 

```
[languages.es]
  languageName = 'Español'
  contentDir = 'content.es'
  weight = 3
```

Les images localisées comme les  captures d'écran doivent être ajoutées dans le 
dossier `statics/images/local-(deux lettres de la langue)`.
