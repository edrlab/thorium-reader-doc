---
title: Lecture des PDF
role: doc-chapter
epubtype: chapter
draft: false
---

# Lecture des PDF

Le moteur de lecture des PDF de Thorium s'appuie sur pdf.js, une visionneuse de Portable Document Format (PDF) construite avec HTML5. PDF.js est piloté par la communauté et soutenu par Mozilla.

## Paramètres de lecture des PDF

La prise en charge des PDF comprend 8 niveaux de zoom et la capacité d'afficher en une ou deux colonnes.

## Fonctions de navigation pour les PDF

La navigation dans les PDF peut toujours se faire à l'aide du panneau "Aller à la page". En outre, lorsque les créateurs de PDF ont inclus des aperçus de documents, ceux-ci sont disponibles via le panneau de navigation de la table des matières. Ce comportement est différent de celui d'Acrobat Reader, qui affiche les plans de documents sous forme de signets et permet aux utilisateurs de les manipuler en changeant leur ordre, en les renommant, en les ajoutant et en les supprimant.

Avec Thorium Reader, vous pouvez ajouter vos propres signets en toute sécurité et vous les trouverez dans le panneau de navigation des signets.

## Signets et annotations pour les PDF

Pour le moment, les annotations ne sont pas disponibles pour les PDF. Les signets sont entièrement implémentés et peuvent être créés et navigués comme détaillé dans le chapitre [Action de lecture signets](../230_bookmarks/index.xhtml).

Un point d'attention ici est qu'un seul signet par page peut être ajouté. Si vous essayez d'ajouter plus d'un signet par page, le signet existant sera supprimé.

## Raccourcis clavier PDF

PDF.js ajoute des raccourcis clavier qui ne sont pas configurables dans le panneau de configuration de Thorium. La liste reproduite ici n'est pas exhaustive et certains raccourcis peuvent ne pas fonctionner. Elle est copiée à partir de la [page PDF.JS Frequently Asked Questions] (https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-are-the-pdfjs-keyboard-shortcuts).

### Navigation

Les touches <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Page haut</kbd>, <kbd>Page bas</kbd> et toutes les touches <kbd>flèche</kbd> peuvent être utilisées pour naviguer dans le document. En outre, les raccourcis de navigation suivants existent :

* Page suivante : <kbd>n</kbd>, <kbd>j</kbd>, <kbd>Barre d'espace</kbd> (mode présentation uniquement), <kbd>Entrée</kbd> (mode présentation uniquement) ou clic gauche (mode présentation uniquement).
* Page précédente : <kbd>p</kbd>, <kbd>k</kbd>, <kbd>Shift</kbd> + <kbd>Barre d'espace</kbd> (mode présentation uniquement), <kbd>Shift</kbd> + <kbd>Entrée</kbd> (mode présentation uniquement) ou <kbd>Shift</kbd> + clic gauche (mode présentation uniquement).

### Contrôles de la visionneuse

Les boutons de l'interface utilisateur ou <kbd>ctrl</kbd> + molette de la souris peuvent être utilisés pour modifier le niveau de zoom, mais des raccourcis clavier sont également disponibles :

* Zoom avant : <kbd>ctrl</kbd> + <kbd>+</kbd>, <kbd>ctrl</kbd> + <kbd>=</kbd>
* Zoom arrière : <kbd>ctrl</kbd> + <kbd>-</kbd>
* Rétablir le zoom normal : <kbd>ctrl</kbd> + <kbd>0</kbd>
* Tourner le document dans le sens des aiguilles d'une montre : <kbd>r</kbd>
* Tourner le document dans le sens inverse des aiguilles d'une montre : <kbd>shift</kbd> + <kbd>r</kbd>
* Activer le mode de présentation : <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>p</kbd>
* Activer l'outil manuel : <kbd>h</kbd>
* Activer l'outil de sélection de texte : <kbd>s</kbd>
* Déplacer le focus sur la case "aller à la page" : <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>g</kbd>
* Recherche de texte dans le document : <kbd>ctrl</kbd> + <kbd>f</kbd>
* Recherche de l'occurrence suivante du texte dans le document : <kbd>ctrl</kbd> + <kbd>g</kbd>
* Recherche de l'occurrence précédente du texte dans le document : <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>g</kbd>
* Télécharger le document : <kbd>ctrl</kbd> + <kbd>s</kbd>
* Imprimer le document : <kbd>ctrl</kbd> + <kbd>p</kbd>
* Ouvrir un fichier : <kbd>ctrl</kbd> + <kbd>o</kbd> * Ouvrir un fichier : <kbd>ctrl</kbd> + <kbd>o</kbd>

(remplacer <kbd>ctrl</kbd> par meta dans certaines configurations)