---
title: "Se déplacer dans un livre"
description: ""
draft: false
weight: 211
toc: true
---

# Naviguer dans un livre
Les options de navigation peuvent être très différentes d'un livre à l'autre, cependant Thorium permet les éléments suivants.

## Avancer et reculer 

Pour naviguer en avant et en arrière dans le contenu du livre vous pouvez utiliser les fléches de votre clavier ou cliquer sur les flèches de navigation situées en bas à droite de l'interface de lecture (<span class="InlineIcons"><img src="/thorium-reader-doc/images/icons/baseline-arrow_left_ios-24px.svg" alt="Bouton Contenu précédent" width="15px"><img src="/thorium-reader-doc/images/icons/baseline-arrow_forward_ios-24px.svg" alt="Bouton Contenu suivant" width="15px"></span>).


## Le menu de la table des matières
La table des matières représente l'architecture du livre telle que définie par l'organisation productrice de ce dernier. 

<img src="/thorium-reader-doc/images/local-fr/thorium-bookinfo-a11ysummary.png" alt="Capture d'écran, le livre La marque des quatre indique : Cette publication est conforme à la « Charte SNE - EPUBs “textuels” nativement accessibles »."/>


{{< details "Avec NVDA">}}
Vous pouvez utiliser les fonctions de navigation par niveaux de titre (<kbd>NVDA</kbd>+<kbd>H</kbd>) pour explorer et vous déplacer dans la table des matières.
{{< /details >}}

## Les pages de référence

Les livres numériques peuvent comporter une pagination de référence permettant une correspondance à la pagination du livre imprimé. 

Il existe une option de navigation permettant d'aller à la page. Lorsque vous y accédez, cette option indique la page actuelle. 

Il existe également un raccourci clavier pour cette fonction. Appuyez sur <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>, puis saisissez le numéro de page dans la boîte d'édition en le tapant ou en modifiant la valeur à l'aide de la boîte `Aller à la page`.

{{< hint warning >}}
Attention ! 

Les <a href="/thorium-reader-doc/fr/400_ressources/420_glossary#AdaptedBooks">livres adaptés</a> utilisent parfois la pagination de référence pour proposer un découpage du livre régulier aux lecteurs sans reproduire la pagination de l'original. Dans ce cas la pagination de référence ne peut pas être utilisée pour se référer au livre imprimé.
{{< /hint >}}

## Les points de repères

Les livres numérique de bonne qualité comportent des points de repères qui permettent d'identifier et d'atteindre rapidement les grandes parties d'un livre. 

{{< hint info >}}
Chaque publication EPUB doit inclure un guide de tous les principaux points de repère. L'intitulé des points de repères est aux choix de l'éditeur mais la nature de chaque repère doit être identifiée selon un vocabulaire sémantique définis dont les principaux sont :

* Texte principal (bodymatter)
* Table des matières (toc)
* bibliographie 
* index
* glossaire

La [liste complète du vocabulaire sémantique EPUB en anglais](https://www.w3.org/TR/epub-ssv/) est disponible sur le site du W3C.

{{< /hint >}}

{{< hint danger >}}

Attention ! 

Les signets des fichiers PDF utilisés pour palier à l'absence de table des matière de ce format ne sont pas interprétés par Thorium.
{{< /hint >}}

<!-- Ne fonctionne pas
## Déplacement entre les chapitres sans utiliser la Table des matières

Utilisez `Ctrl + fléche droite`
-->