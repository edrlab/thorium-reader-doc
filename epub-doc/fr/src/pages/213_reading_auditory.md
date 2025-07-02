---
title: Lire des contenus en audio
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Lire des contenus en audio

Les contenus audio peuvent apparaître dans presque tous les formats. Lorsqu'ils sont inclus dans des livres électroniques textuels ou visuels, ils sont accompagnés d'un ensemble de boutons tels que *play, pause, stop*, et éventuellement *rembobinage* et *avance rapide* ou d'autres options comme la vitesse. Ces boutons ne font pas partie de l'interface de Thorium, ils peuvent être fournis par le moteur de rendu spécifique (Chromium pour les contenus web en EPUB et Daisy ; pdf.js pour les PDF). Ils peuvent également être stylisés par le créateur du contenu. Par conséquent, ce guide d'utilisation peut difficilement donner des informations détaillées sur leur conception et leurs fonctionnalités.

Les contenus audio, les audios synchronisés et les audios générés par la synthèse vocale, en revanche, sont directement pilotés par l'interface Thorium.

## Audio seulement {#audioonly}

Thorium peut lire des livres audio dans les formats standardisés W3C audiobook et Daisy audio seulement. Lorsqu'un tel livre est ouvert, la lecture commence. La fenêtre de lecture affichera la couverture, un ensemble de boutons de fonctions et une barre de progression.

L'interface est composée de :
* Un bouton de lecture pour lire ou mettre en pause ;
* Un bouton Précédent et un bouton Suivant pour passer à la section précédente ou suivante ;
* Un bouton de Précédent et un bouton Suivant pour passer à la section précédente ou suivante ; 
* Un bouton de retour en arrière et un bouton d'avance pour se déplacer 30 secondes avant ou après
* Un menu déroulant pour changer la vitesse de lecture ;
* Une barre de progression indiquant le temps écoulé et le temps total de la section actuelle du livre.

Il est possible d'ajouter un marque-page à un endroit de la lecture et d'ajouter une note au marque-page. Les annotations ne sont pas possibles.

La navigation dans les livres audio est généralement fournie par le créateur sous la forme d'une table des matières.

Il n'est en fait pas possible d'effectuer des recherches dans les contenus audio uniquement.


## Lecture à voix haute, synthèse vocale (TTS) {#readaloud}

La synthèse vocale est lancée à l'aide du bouton haut-parleur situé au milieu de la barre d'outils, ou en utilisant le raccourci clavier dédié.
La synchronisation entre la voix et le texte est illustrée la mise en évidence de la phrase en cours et le soulignement du mot.

Les actions possibles sont affichées dans la barre en haut de l'interface. Il s'agit de :

- Lecture et pause ;
- Déplacer la position de lecture vers la portion précédente ou suivante ;
- Contrôler la vitesse avec une gamme de x0,5 à x2 ;
- Simplifier l'affichage de la publication ;
- choisir une voix préférée.


<div class="framed">

Thorium utilise les voix du système d'exploitation de l'ordinateur, en
combinaison avec les informations linguistiques fournies par le livre.
Si vous rencontrez des problèmes, veuillez consulter [la FAQ en ligne](https://thorium.edrlab.org/fr/th3/400_ressources/430_faq/index.html).

</div>

### Options pour la lecture en voix de synthèse {#readaloudoptions}

À côté des fonctionnalités, un volet d'options spécifiques fournit des options pour une "vue claire" et la possibilité de sauter le contenu secondaire (<span class="ui_info">Omettre les informations auxiliaires</span>), qui peut inclure des notes de bas de page ou d'autres contenus marqués comme complémentaires (`aside`) selon la sémantique indiquée lors de la production du livre numérique. <span class="ui_info">Découper à la phrase</span> divisera le contenu par phrase pour une mise en évidence plus précise.
