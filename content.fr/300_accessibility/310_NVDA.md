---
title: "Lire avec Thorium et NVDA"
description: ""
draft: false
weight: 310
toc: true
---

# Thorium est utilsable avec le lecteur d'écran NVDA

Lors du lancement de Thorium, si un lecteur d'écran est repéré, les fonctions relatives sont activées.
{{< hint warning >}}
Les fonctions d'accessibilité adressées aux technologies d'assistance peuvent être affecté par la qualité des fichiers lus. 
{{< /hint >}}

## Où suis-je ?

Appuyez sur la touche `NVDA+F7`, puis sur la touche de tabulation jusqu'à ce que vous obteniez la vue de l'en-tête. Cela vous montre où vous vous trouvez dans la structure du titre. 

Vous pouvez également utiliser la fonction Où suis-je (`CTRL+SHIFT+I`) pour ouvrir une modale qui affiche la structure des titres et le numéro de page. Pour en sortir et revenir à l'emplacement exact, utilisez la touche de lien suivant (`K`) pour atteindre le lien au début du volet de lecture et appuyez sur Entrée. Ce lien stocke la dernière position connue pour une utilisation dans une variété de situations.

Appuyez sur `NVDA+Entrée` pour enregistrer la position actuelle. Puis control+shift+i pour placer le curseur dans la section Progress de la boîte de dialogue contenant des informations sur la publication. Le numéro du document HTML actuel par rapport au nombre total de documents, le pourcentage, la page actuelle et la section correspondante sont affichés, avec la possibilité d'afficher des liens pour faire défiler les sections précédentes. Après avoir fermé le dialogue, par exemple en appuyant sur `Echap`, il est possible de revenir au point de lecture par le biais du lien du lecteur d'écran (marqué d'un double soulignement) dans le cadre de contenu principal (vers lequel on peut naviguer par la touche Tab ou avec la lettre m en mode navigation).


### Ajouter un signet ou une surbrillance

Certains systèmes de lecture peuvent avoir une fonction de mise en évidence à la place des signets. Les tests relatifs aux signets peuvent alors être effectués avec les surlignages.

N'oubliez pas que les lecteurs d'écran sous Windows utilisent un tampon virtuel pour la lecture. Pour placer un signet à l'endroit où vous lisez actuellement, appuyez sur la touche `NVDA + entrée`, et NVDA dira *"activer"*. Cela synchronise le tampon virtuel avec l'emplacement réel actuel, puis utilisez `CTRL + B` pour placer un signet. 

{{< hint info >}}
Conseil : Essayez de copier la ligne sur laquelle vous vous trouvez dans le presse-papiers. Allez ensuite dans les options de navigation avec `CTRL + N`, puis descendez jusqu'à la rubrique des signets, où ils sont répertoriés. Appuyez sur la touche b pour vous déplacer vers le bouton d'édition afin de renommer le signet. Collez la ligne du presse-papiers et appuyez sur la touche `Entrée`. Cela renomme le signet avec la ligne de texte que vous avez copiée. Lorsque vous avez plusieurs signets, ce renommage des signets permet de les utiliser facilement.
{{< /hint >}}

Appuyez sur `NVDA+entrée` pour que Thorium déduise l'objet sur lequel se trouve le curseur. Puis appuyez sur `CTRL+B`. Une notification sonore vous informera du nombre de signets dans la publication en cours.

### Révision et navigation dans les signets ou les mises en évidence

Accédez à la liste des signets dans la zone de navigation. Sélectionnez le signet auquel vous souhaitez accéder et appuyez sur la touche `Entrée`. Si vous avez renommé le signet, il sera facile d'aller à plusieurs endroits dans le livre.

Appuyez sur le bouton de navigation (`CTRL+N`), puis sur le bouton `Signets`. Vous pouvez modifier le nom de chaque signet, supprimer des signets et vous déplacer vers les signets en appuyant sur `Entrée`.

## Mathématiques 

Vous pouvez lire les expressions mathématiques balisées avec MathML en utilisant les différentes approches de NVDA, par exemple en utilisant le complément [Access8Math](https://addons.nvda-project.org/addons/access8math.fr.html).

