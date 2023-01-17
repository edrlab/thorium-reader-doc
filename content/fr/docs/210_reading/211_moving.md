---
title: "Se déplacer dans un livre"
description: "Apprenez à vous déplacer avec agilité à travers un livre. Avancez et reculez rapidement vers le chapitre, la page ou le contenu suivant ou précédent. Naviguez à travers la table des matières, les points de repère et les pages de référence."
draft: false
weight: 211
toc: false
---

Les options de navigation peuvent être très différentes d'un livre à l'autre. Thorium permet :

* d'avancer et de reculer dans la lecture
* d'utiliser une table des matières, des points de repères et une pagination de référence (qui doivent être incluses par l'organisation productrice du livre)
* d'aller aux points de navigation précèdédents et suivants
* de se déplacer en arrière et en avant dans l'historique des actions de navigation

## navigation dans l'historique : saut en arrière et en avant aux points de lecture (nouveau dans Thorium 2.2. EPUB seulement)

Pendant la lecture, l'utilisateur a la possibilité de naviguer d'un point à un autre en utilisant le panneau de navigation ou en suivant un lien dans la publication. Cela active les boutons de saut en arrière (<kbd>Ctrl</kbd>  +  <kbd>Retour Arrière</kbd>) et de saut en avant (<kbd>Ctrl</kbd>  +  <kbd>Shift</kbd> + <kbd>Retour Arrière</kbd>) en bas à gauche de la fenêtre de lecture. Utilisez ces boutons pour trouver un point précédent et revenir au dernier point. 

La navigation dans l'historique prend en compte les interactions de l'utilisateur, notamment les clics sur la ligne de temps inférieure, la table des matières, les signets, les points de repère, les rubriques "Où suis-je ?" et "Aller à la page". Elle ne tient pas compte de la recherche des liens précédents et suivants et de la liste.

## Avancer et reculer

Pour naviguer en avant et en arrière dans le contenu du livre vous pouvez 
utiliser les fléches de votre clavier ou cliquer sur les flèches de navigation 
situées en bas à droite de l'interface de lecture 
(<img class="icons" src="/thorium-reader-doc/images/icons/baseline-arrow_left_ios-24px.svg" alt="Bouton Contenu précédent" width="15px"><img class="icons" src="/thorium-reader-doc/images/icons/baseline-arrow_forward_ios-24px.svg" alt="Bouton Contenu suivant" width="15px">).

Il est possible de se déplacer entre les chapitres en utilisant 
<kbd>Ctrl</kbd> + <kbd>Page précédente (Page Up)</kbd> (chapitre précédent) et 
<kbd>Ctrl</kbd> + <kbd>Page suivante (Page Down)</kbd> (chapitre
suivant) ou <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ALT</kbd> (sauf sur MacOS) + <kbd>&larr;</kbd> (chapitre précédent) 
et <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ALT</kbd> (sauf sur MacOS) + <kbd>&rarr;</kbd> (chapitre suivant).

{{< hint warning >}}

Attention !

Il existe deux raccourcis différents pour passer au chapitre suivant ou précédent. 
Selon votre configuration et l'usage ou non d'un lecteur d'écran il est possible 
que seule une de ces deux combinaisons fonctionne.

{{< /hint >}}

{{< columns >}}

## La table des matières

La table des matières représente l'architecture du livre telle que définie par 
l'organisation productrice de ce dernier.

Les titres de premier niveau sont indiqués sans marge, ceux qui comportent des 
sous titres (ou titre de niveau 2) sont présentés sur un fond grisé. 
Les sous titres sont décalés de la marge à gauche et un filet permet de savoir 
facilement à quel niveau de titre supérieur ils appartiennent.

{{< details "Avec NVDA">}}
Vous pouvez utiliser les fonctions de navigation par niveaux de titre 
(<kbd>NVDA</kbd> + <kbd>H</kbd>) pour explorer et vous déplacer dans la table des matières.
{{< /details >}}

<--->

<img src="/thorium-reader-doc/images/local-fr/thorium-TDM-light.png" alt="Capture d'écran, table des matières : Titres Niveau 1 Couverture, Titre, Copyright, Dédicae, Exergue, Introduction, La Marque des quatre ; titre niveau 2 La déduction élevée à la hauteur d'une science."/>

{{< /columns >}}

## Les points de repères

{{< columns >}}

Les livres numérique de bonne qualité comportent des points de repères qui 
permettent d'identifier et d'atteindre rapidement les grandes parties d'un livre.

{{< hint info >}}

Information

Chaque publication EPUB doit inclure un guide de tous les principaux 
points de repère. L'intitulé des points de repères est aux choix de l'éditeur 
mais la nature de chaque repère doit être identifiée selon un 
vocabulaire sémantique définis. Les principaux sont :

* Texte principal (bodymatter)
* Table des matières (toc)
* bibliographie
* index
* glossaire

La [liste complète du vocabulaire sémantique EPUB en anglais](https://www.w3.org/TR/epub-ssv/) est disponible sur le site du W3C.

{{< /hint >}}

<--->

<img src="/thorium-reader-doc/images/local-fr/thorium-reperes.png" alt="Capture d'écran, Aller à la page. Page courante : 3. Un menu déroulant indique 3, un champ éditable indique Entrer un numéro de page, un bouton indiquer Aller à."/>

{{< /columns >}}

{{< hint danger >}}

Attention !

Les signets des fichiers PDF utilisés pour palier à l'absence de table des matière de ce format ne sont pas interprétés par Thorium.

{{< /hint >}}

## Les pages de référence

{{< columns >}}

Les livres numériques peuvent comporter une pagination de référence permettant 
une correspondance à la pagination du livre imprimé.

Il existe une option de navigation permettant d'aller à la page. Lorsque vous y 
accédez, cette option indique la page actuelle.

Il existe également un raccourci clavier pour cette fonction. Appuyez sur 
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, 
puis saisissez le numéro de page dans la boîte d'édition en le tapant ou 
en modifiant la valeur à l'aide de la boîte `Aller à la page`.

<--->

<img src="/thorium-reader-doc/images/local-fr/thorium-gotopage.png" alt="Capture d'écran, Aller à la page. Page courante : 3. Un menu déroulant indique 3, un champ éditable indique Entrer un numéro de page, un bouton indiquer Aller à."/>

{{< /columns >}}

{{< hint warning >}}

Attention !

Les <a href="/thorium-reader-doc/fr/400_ressources/420_glossary#AdaptedBooks">
livres adaptés</a> utilisent parfois la pagination de référence pour proposer un 
découpage du livre régulier aux lecteurs sans reproduire la pagination de 
l'original. Dans ce cas la pagination de référence ne peut pas être utilisée 
pour se référer au livre imprimé.

{{< /hint >}}
