---
title: "Lire avec un lecteur d'écran"
description: ""
draft: false
weight: 310
toc: false
---

Lors du lancement de Thorium, si un lecteur d'écran est repéré, les fonctions relatives sont activées.

Notez que les lecteurs d'écran utilisent une mémoire tampon séparée pour accéder au contenu HTML, ce qui entraîne une désynchronisation du défilement visuel et du décalage de la page. En d'autres termes, Thorium n'est généralement pas au courant de la position de lecture actuelle de l'utilisateur dans la mémoire tampon du lecteur d'écran, à moins que l'utilisateur du lecteur d'écran ne déclenche des événements API web standard (comme un clic de souris n'importe où dans le texte, ou une tabulation du clavier dans des éléments HTML focalisables).

{{< alert warning >}}

Attention !

Les fonctions d'accessibilité adressées aux technologies d'assistance 
peuvent être affecté par la qualité des fichiers lus. 

{{< /alert>}}

# Séquences de touches communes à NVDA et JAWS

(contribution de Prashant Verma, Consortium DAISY)

Pour la lecture du texte, la navigation dans les tableaux, la navigation dans 
la fenêtre du navigateur, la touche d'insertion peut être remplacée par la 
touche modificatrice du lecteur d'écran (par exemple la touche de verrouillage 
des majuscules)

## Touches rapides pour la navigation 

Le lecteur d'écran doit être en mode navigation ou curseur virtuel.

|Commande |description|
|---|---|
|Titre suivant |<kbd>H</kbd>|
|Tableau suivant |<kbd>T</kbd>|
|Graphique suivant |<kbd>G</kbd>|
|Liste suivante |<kbd>L</kbd>|
|Champ de formulaire suivant |<kbd>F</kbd>|
|Liste d'éléments |<kbd>Insert</kbd> + <kbd>F7</kbd> (fonctionne quel que soit le mode du curseur)|

*Utilisez les touches ci-dessus avec la touche Maj pour passer à l'élément précédent.*

## Texte

|Commande |description|
|---|---|
|Caractère précédent |<kbd>&larr;</kbd>|
|Caractère suivant |<kbd>&rarr;</kbd>|
|Mot précédent |<kbd>CTRL</kbd> + <kbd>&larr;</kbd>|
|Mot suivant |<kbd>CTRL</kbd> + <kbd>&rarr;</kbd>|
|Ligne précédente |<kbd>&uarr;</kbd>|
|Ligne suivante |<kbd>&darr;</kbd>|
|Phrase précédente |<kbd>ALT</kbd> + <kbd>&uarr;</kbd> (Jaws uniquement)|
|Phrase suivante |<kbd>ALT</kbd> + <kbd>&darr;</kbd> (Jaws uniquement)|
|Lire tout |<kbd>INSERT</kbd> + <kbd>&darr;</kbd>|
|Annoncer la Police |<kbd>INSERT</kbd> + <kbd>F</kbd>|

## Tableaux

|Commande |description|
|---|---|
|Cellule vers la droite |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>&rarr;</kbd>|
|Cellule vers la gauche |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>&larr;</kbd>|
|Cellule en dessous |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>&darr;</kbd>|
|Cellule au-dessus |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>&uarr;</kbd>|
