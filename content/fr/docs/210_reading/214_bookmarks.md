---
title: "Marquer une page ou un passage"
description: ""
draft: false
weight: 214
toc: false
---

## Ajouter un Marque_page

Le bouton `Marque-pages` permet d'ajouter un point de repère personnalisé. 
Un `Marque page` peut-être un point fixe ou une portion de texte sélectionné.

Un seul  `Marque page` fixe est possible par page 
(pages du livre ou pages calculées 
s'il n'y a pas de référence de page dans le livre). 
Mais vous pouvez placer autant de  `Marque pages` de sélection de texte 
que vous le souhaitez. 

Lorsque vous ajoutez un `Marque page`, une notification apparaît pour vous informer que 
le `Marque page` a été *ajouté* ou *supprimé*. 
Le nombre juste après indique le nombre total de  `Marque pages` dans le livre 
après cette action. 
{{< hint info >}}

Sélectionnez le texte que vous souhaitez marquer. 
Appuyez sur le bouton `Marque-pages` 
(<img class="icons" src="/thorium-reader-doc/images/icons/outline-bookmark-24px-grey.svg" alt="" width="20px">)
 ou la combinaison de touches  <kbd>Ctrl</kbd>  +  <kbd>B</kbd>.

Si aucun texte n'est sélectionné, 
le `Marque-pages` sera positionné 
au début de la page de référence ou de la page calculée par Thorium.
{{< /hint >}}

## Révision et navigation dans les Marques-pages 

Appuyez sur le bouton de `Navigation` (<kbd>Ctrl</kbd> + <kbd>N</kbd>), puis sur 
le bouton `Marque-pages`. Vous pouvez modifier le nom de chaque Marque-pages, supprimer 
des Marque-pages et vous déplacer entre les Marque-pages en appuyant sur <kbd>Entrée</kbd>.

Accédez à la liste des Marque-pages dans la zone de navigation. Sélectionnez le 
Marque-pages auquel vous souhaitez accéder et appuyez sur la touche 
<kbd>Entrée</kbd>. Si vous 
avez renommé le Marque-pages, il sera facile de retrouver vos repéres dans le livre.


{{< hint info >}}
Conseil 
{{< columns >}}
Si vous sélectionnez une portion de texte puis activez le bouton `Marque-page`,
le marque-page créé aura pour intitulé la ligne sélectionnée.

Si vous avec placé un Marque-pages sans sélectionner une portion de texte, essayez de 
copier la ligne sur laquelle vous vous trouvez dans le presse-papiers. 
Allez ensuite dans les options de navigation avec <kbd>Ctrl</kbd> + <kbd>N</kbd>, 
puis descendez jusqu'à la rubrique des Marque-page, où ils sont répertoriés. 
Appuyez sur la touche <kbd>b</kbd> pour vous déplacer vers le bouton d'édition afin de 
renommer le Marque-page. Collez la ligne du presse-papiers et appuyez sur la 
touche <kbd>Entrée</kbd>. Cela renomme le Marque-page avec la ligne de texte 
que vous avez copiée. Lorsque vous avez plusieurs Marque-pages, ce renommage des 
Marque-pages permet de les utiliser facilement.
<--->
<figure>
  <img src="/thorium-reader-doc/images/local-fr/thorium-marquePages.png" alt="">
  <figcaption class="icon">
  </figcaption>
</figure>
{{< /columns >}}
{{< /hint >}}

{{< details "Utiliser les **Marque-pages** avec NVDA">}}

Les lecteurs d'écran sous Windows utilisent un tampon virtuel 
pour la lecture. 
Pour placer un  `Marque page` à l'endroit où vous lisez, 
appuyez sur la touche <kbd>NVDA</kbd> + <kbd>entrée</kbd>, et NVDA dira 
*"activer"*. Cela 
synchronise le tampon virtuel avec l'emplacement réel actuel et permet 
à Thorium de déduire l'objet 
sur lequel se trouve le curseur. 
Puis utilisez 
<kbd>Ctrl</kbd> + <kbd>B</kbd> pour placer un  `Marque page`. 
Une notification sonore vous informera du nombre de  `Marque pages` 
dans la publication en cours.
{{< /details >}}