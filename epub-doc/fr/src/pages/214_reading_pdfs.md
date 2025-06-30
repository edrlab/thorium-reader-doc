---
title: Lire des documents PDF
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

#  Lire des documents PDF

Le moteur de lecture PDF de Thorium s'appuie sur pdf.js, une visionneuse construite avec HTML5. PDF.js est piloté par la communauté et soutenu par Mozilla.

<section class="filet">

## Paramètres de lecture des PDF

La prise en charge des PDF comprend 8 niveaux de zoom et la capacité d'afficher une ou deux pages.

</section>
<section class="filet">

## Fonctions de navigation pour les PDF

La navigation dans les PDF peut toujours se faire à l'aide du panneau "Aller à la page". En outre, lorsque les créateurs de PDF ont inclus des plans de documents, ceux-ci sont disponibles dans le panneau de navigation de la table des matières. Il s'agit d'un comportement différent de celui d'Acrobat Reader, qui affiche les plans de documents sous forme de signets et permet aux utilisateurs de les manipuler en changeant leur ordre, en les renommant, en les ajoutant et en les supprimant.

Avec Thorium Reader, vous pouvez ajouter vos propres signets en toute sécurité et vous les trouverez dans le panneau de navigation des signets.

</section>
<section class="filet">

## Signets et annotations pour les PDF

Pour l'instant, les annotations ne sont pas disponibles pour les PDF. Les signets sont entièrement implémentés et peuvent être créés et utilisés comme détaillé dans le chapitre [Action de lecture - Signets](../230_bookmarks/index.xhtml).

Un point d'attention ici est qu'un seul signet par page peut être ajouté. Si vous essayez d'ajouter plus d'un signet par page, le signet existant sera supprimé.

</section>
<section class="filet">

## Imprimer le PDF

Depuis la version 3.2, il est possible d'imprimer des plages de pages d'un PDF. Cette possibilité peut être limitée par des règles LCP décidées par le vendeur ou le prêteur.

</section>
<section class="filet">

## Raccourcis clavier PDF

PDF.js ajoute des raccourcis clavier qui ne sont pas configurables dans le panneau de configuration de Thorium. La liste reproduite ici n'est pas exhaustive et certains raccourcis peuvent ne pas fonctionner. Elle est copiée à partir de la [page PDF.JS Frequently Asked Questions](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-are-the-pdfjs-keyboard-shortcuts).

</section>
<section class="filet">

### Navigation

Les touches <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Page haut</kbd>, <kbd>Page bas</kbd> et toutes les touches <kbd>flèche</kbd> peuvent être utilisées pour naviguer dans le document. En outre, les raccourcis de navigation suivants existent :

* Page suivante : <kbd>n</kbd>, <kbd>j</kbd>, <kbd>Barre d'espace</kbd> (mode présentation uniquement), <kbd>Entrée</kbd> (mode présentation uniquement) ou clic gauche (mode présentation uniquement).
* Page précédente : <kbd>p</kbd>, <kbd>k</kbd>, <kbd>Shift</kbd> + <kbd>Barre d'espace</kbd> (mode présentation uniquement), <kbd>Shift</kbd> + <kbd>Entrée</kbd> (mode présentation uniquement) ou <kbd>Shift</kbd> + clic gauche (mode présentation uniquement).

</section>
<section class="filet">

### Contrôles de la visionneuse

Les boutons de l'interface utilisateur ou <kbd>ctrl</kbd> + molette de la souris peuvent être utilisés pour modifier le niveau de zoom. Des raccourcis clavier sont également disponibles :

* Zoom avant : <kbd>ctrl</kbd> + <kbd>+</kbd>, <kbd>ctrl</kbd> + <kbd>=</kbd>
* Zoom arrière : <kbd>ctrl</kbd> + <kbd>-</kbd>
* Rétablir le zoom normal : <kbd>ctrl</kbd> + <kbd>0</kbd>
* Tourner le document dans le sens des aiguilles d'une montre : <kbd>r</kbd>
* Tourner le document dans le sens inverse des aiguilles d'une montre : <kbd>shift</kbd> + <kbd>r</kbd>
* Déplacer le focus sur la case "aller à la page" : <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>
* Rechercher du texte dans le document : <kbd>ctrl</kbd> + <kbd>f</kbd>
* Recherche de l'occurrence suivante du texte dans le document : <kbd>ctrl</kbd> + <kbd>g</kbd>
* Recherche de l'occurrence précédente du texte dans le document : <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>g</kbd>

(remplacer <kbd>ctrl</kbd> par meta dans certaines configurations)

</section>
