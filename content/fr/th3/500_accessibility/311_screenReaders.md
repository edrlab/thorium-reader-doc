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



## Annotation et mise en signet

D'après les commentaires que nous avons reçus jusqu'à présent, il semble qu'il soit très difficile pour les utilisateurs de lecteurs d'écran de sélectionner une gamme réelle de caractères. Cette technologie d'assistance permet aux utilisateurs de sélectionner du texte à l'intérieur de la mémoire tampon virtuelle du lecteur d'écran, de sorte que l'application ne sait pas que l'utilisateur lit à un endroit particulier et qu'il sélectionne du texte à cet endroit.

Par conséquent, les utilisateurs de lecteurs d'écran préfèrent utiliser la fonction de mise en signet, qui permet d'ancrer un signet simple, éventuellement étiqueté, à un emplacement de lecture approximatif (un bouton icône se trouve dans la barre d'outils supérieure, mais le raccourci clavier <key>CTRL</key> + <key>B</key> peut également être utilisé).
Thorium détecte le clic du curseur de la souris sur un seul caractère du texte, ce qui permet de focaliser un signet sur un emplacement HTML plus précis.

Dans Thorium, l'éditeur d'étiquettes de signets prend actuellement en charge plusieurs lignes de texte, ce qui permet d'annoter des emplacements de documents volumineux. Il peut donc être perçu comme un remplacement de l'annotateur proprement dit, mais il n'y a pas d'importation/exportation de données de signets.

D'autres commentaires sont les bienvenus via notre forum de discussion : [Message to Thorium screen reader users... #2867](https://github.com/edrlab/thorium-reader/discussions/2867).

### Utilisation des signets avec NVDA

Les lecteurs d'écran Windows utilisent un tampon virtuel
pour la lecture. Pour placer un signet à l'endroit où vous êtes en train de lire
appuyez sur la combinaison de touches <kbd>NVDA + Enter</kbd>,
et NVDA dira *"activer "*. Ceci
synchronise la mémoire tampon virtuelle avec l'emplacement réel actuel, de sorte que Thorium
puisse déduire l'objet
sur lequel se trouve le curseur. Utilisez ensuite
<kbd>Ctrl + B</kbd> pour placer un signet.
Une notification sonore vous informera du nombre de signets
dans la publication en cours.

## Ressources externes pour l'utilisation du lecteur d'écran dans Thorium (en anglais)

<div lang="en">

* [The DAISY Consortium Thorium Reader Getting Started Guide](https://daisy.org/guidance/info-help/guidance-training/reading-systems/thorium-epub-reader-quick-start-guide/)
* [The DAISY Consortium Thorium Archives Page](https://daisy.org/news-events/tag/thorium/)

</div>