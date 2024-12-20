---
title: Lire avec un lecteur d'écran
role: chapter
draft: false
weight: '301'
---
## Lire avec un lecteur d'écran

Au lancement de Thorium, si un lecteur d'écran est détecté, le relatif
les fonctions sont activées.

Notez que les lecteurs d'écran utilisent un tampon séparé pour accéder au code HTML.
contenu qui entraîne le défilement visuel /le décalage de page hors de
synchroniser. En d'autres termes, Thorium n'a généralement pas connaissance des informations de l'utilisateur.
emplacement de lecture actuel à l'intérieur du tampon du lecteur d'écran, à moins que le
l'utilisateur du lecteur d'écran déclenche des événements API Web standard (tels qu'un clic de souris)
n'importe où dans le texte, ou une tabulation clavier dans des éléments HTML focalisables).

 avertissement
Attention !

Les fonctionnalités d'accessibilité destinées aux technologies d'assistance sont fortement
affecté par la qualité des fichiers du livre.


# Frappes de touches communes à NVDA et JAWS

(contribution de Prashant Verma, Consortium DAISY)

Pour lire du texte, naviguer dans les tableaux, naviguer dans le navigateur
fenêtre, la touche d'insertion peut être remplacée par la touche de modification de l'écran
lecteur (par exemple la touche Caps Lock).
## Touches rapides pour la navigation

Le lecteur d'écran doit être en mode navigation ou curseur virtuel.

|Action|Commande|
|---|---|
|Titre suivant| <kbd>H</kbd>|
|Tableau suivant| <kbd>T</kbd>|
|Graphique suivant| <kbd>G</kbd>|
|Liste suivante|<kbd>L</kbd>|
|Champ de formulaire suivant|<kbd>F</kbd>|
|Liste des éléments| <kbd>INSERT</kbd> + <kbd>F7</kbd> (fonctionne quel que soit le mode du curseur)|

*Utilisez les touches ci-dessus avec la touche <kbd>Shift</kbd> pour passer au précédent
article.*

## Texte

|Action|Commande|
|---|---|
|Caractère précédent| <kbd>←</kbd>|
|Caractère suivant| <kbd>→</kbd>|
|Mot précédent|<kbd>Ctrl</kbd> + <kbd>←</kbd>|
|Dites le mot suivant|<kbd>Ctrl</kbd> + <kbd>→</kbd>|
|Ligne précédente|<kbd>↑</kbd>|
|Ligne suivante|<kbd>↓</kbd>|
|Phrase précédente|<kbd>Alt</kbd> + <kbd>↑</kbd> (Jaws uniquement)
|Phrase suivante|<kbd>Alt</kbd> + <kbd>↓</kbd> (Jaws uniquement)
|Lire tout| <kbd>INSÉRER</kbd> + <kbd>↓</kbd>|
|Annoncer la police|<kbd>INSÉRER</kbd> + <kbd>F</kbd>|

## Tableaux

|Action|Commande|
|---|---|
|Cellule à droite| <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>→</kbd>|
|Cellule à gauche|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd>|
|Cellule ci-dessous|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↓</kbd>|
|Cellule ci-dessus|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↑</kbd>|
