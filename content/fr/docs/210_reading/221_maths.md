---
title: "Lire des mathématiques"
description: ""
draft: false
weight: 221
toc: false
---


Thorium-Reader prend en charge les formules mathématiques au format MathML 
grace au module MathJax. Ce dernier nécessitant des ressources mémoires 
il n'est pas activé d'office lorsque vous ouvrez Thorium. 
Pour l'activer lors de la lecture d'un livre allez dans le menu 
`Paramétres de lecture`, en bas de l'onglet `Affichage` vous trouverez 
une case à cocher `MathJax`.

<img src="/thorium-reader-doc/images/local-fr/thorium-mathjax.png" alt="Capture d'écran (en anglais) d'une formule mathématique complexe correctement affichée grace à l'option MathJax cochée."/>

Une fois activé MathJax, vous pouvez utiliser le `menu contextuel` (clic droit) 
sur une formule mathématique insérée au format MathML et utiliser les nombreuses 
options comme la lecture à voix haute (speech), consulter le marquage sémantique 
ou copier la formule avec ses attributs sémantiques pour l'utiliser dans un 
éditeur compatible.

<img src="/thorium-reader-doc/images/local-fr/thorium-mathjax-menu.png" alt="Capture d'écran du menu contextuel MathJax (en anglais) montrant le sous Menu Accessibility dont l'option Activate est cochée."/>


{{< details "Lire les **mathématiques** avec NVDA">}}
Vous pouvez lire les expressions mathématiques balisées avec MathML en utilisant 
les différentes approches de NVDA, par exemple en utilisant le complément 
[Access8Math](https://addons.nvda-project.org/addons/access8math.fr.html). 
Les fonctions d'accessibilité de MathJax devront pour celà être désactivées. 
{{< /details >}}

{{< hint danger >}}
Attention ! 
Ces fonctionalités ne peuvent être activées que si le livre a été conçu en 
insérant les formules mathématiques sous la forme MathML. Pour des raisons de 
facilité de production les formules mathématiques sont souvent incluses sous 
forme d'images et c'est alors le texte alternatif qui doit permettre la 
compréhension de la formule via une description précise. 

Les livres qui comportent des mathématiques sous la forme MathML doivent 
l'indiquer dans leurs informations d'accessibilité. 
Si cela n'est pas indiqué, alors il s'agit certainement d'images décrites.

{{< /hint >}}