---
title: Accessibilité
role: doc-chapter
epubtype: chapter
class: colbreak 
draft: false
---

# Accessibilité {#a11y}

L'application est compatible avec les technologies d'assistance comme les lecteurs d'écran, notamment JAWS, NVDA, Narrator et VoiceOver. Elle comprend une fonction de lecture à voix haute avec surlignage visuel. Thorium Reader peut être utilisé avec la souris ou le clavier, et les raccourcis clavier sont configurables. L'affichage peut être personnalisé pour répondre aux besoins des utilisateurs, notamment les couleurs, la taille du texte, l'espacement, la police et la mise en page.

Les fonctionnalités d'accessibilité dépendent fortement de la qualité des fichiers de publication électronique et sont affectées par celle-ci. 

La page de [support en ligne accessibilité](https://thorium.edrlab.org/fr/th3/500_accessibility/) contient les informations complètes liées à l'accessibilité de l'application et les fonctionnalités qui y sont liées.

Ce chapitre reprend les informations principales pour les avoir à disposition hors ligne. 

## Informations sur l'accessibilité {#a11y_info}

Actuellement, Thorium affiche dans le [panneau Informations sur le livre](../102_windows_views_panels/index.xhtml#book_info_panel) sous le titre `Description` le contenu des métadonnées d'accessibilité fournies par les créateurs du fichier.

## Fonctions d'accessibilité natives {#a11y_native}

Les fonctions d'accessibilité natives sont décrites dans chacune des section de cette documentation qui correspondent à leur contexte d'utilisation. Cela inclut notamment:

* [Les ajustements visuels de l'affichage du texte](../102_windows_views_panels/index.xhtml#reading_settings_panel)
* [La lecture audio générée en voix de synthèse](../211_reading_textuals/index.xhtml#read_text_readaloud)

## Lire avec un lecteur d'écran {#screenreader}

Lors du lancement de Thorium, si un lecteur d'écran est détecté, les fonctions relatives sont activées.

Notez que les lecteurs d'écran utilisent une mémoire tampon séparée pour accéder au contenu HTML, ce qui entraîne une désynchronisation du défilement visuel et un décalage de la page affichée avec la page lue par le lecteur d'écran. En d'autres termes, Thorium n'est généralement pas conscient de l'emplacement de lecture actuel de l'utilisateur du lecteur d'écran, à moins que l'utilisateur du lecteur d'écran ne déclenche des événements (tels qu'un clic de souris n'importe où dans le texte ou une touche de clavier sur des éléments HTML focalisables).

### Touches rapides pour la navigation (communes à NVDA et JAWS)

*(contribution de Prashant Verma, DAISY Consortium)*

Pour lire du texte, naviguer dans les tableaux, naviguer dans la fenêtre du navigateur, la touche d'insertion peut être remplacée par la touche de modification du lecteur d'écran (par exemple la touche <kbd>Verr. Maj</kbd>).

Le lecteur d'écran doit être en mode navigation ou curseur virtuel.

|Action |Commande|
|---|---|
|Titre suivant| <kbd>H</kbd> |
|Table suivante| <kbd>T</kbd>|
|Graphique suivant| <kbd>G</kbd>|
|Liste suivante|<kbd>L</kbd>|
|Champ de formulaire suivant|<kbd>F</kbd>|
|Liste des éléments| <kbd>INSERT</kbd> + <kbd>F7</kbd> (fonctionne quel que soit le mode curseur)|
|Caractère précédent| <kbd>←</kbd> |
|Caractère suivant| <kbd>→</kbd> |
|Mot précédent |<kbd>CTRL</kbd> + <kbd>←</kbd> |
|Dire le mot suivant|<kbd>CTRL</kbd> + <kbd>→</kbd> |
|Ligne précédente |<kbd>↑</kbd> |
|Ligne suivante |<kbd>↓</kbd> |
|Phrase précédente |<kbd>ALT</kbd> + <kbd>↑</kbd> (Jaws uniquement) |
|Phrase suivante |<kbd>ALT</kbd> + <kbd>↓</kbd> (Jaws uniquement) |
|Lire tout |<kbd>INSERT</kbd> + <kbd>↓</kbd> |
|Cellule à droite |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>→</kbd> |
|Cellule à gauche |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>←</kbd>|
| Cellule en dessous|<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>↓</kbd>|
| Cellule au dessus|<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>↑</kbd>|
