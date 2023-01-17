---
title: "Où suis-je ?"
description: " Situez où vous vous trouvez dans un livre,"
draft: false
weight: 212
toc: false
---
{{< columns >}}
Le raccourcis clavier <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>k</kbd> 
permet d'obtenir une mention rapide de la position de lecture dans le document. 
Cette information sera affichée dans la zone de notification en bas à gauche de 
l'interface et sera lue par un lecteur d'écran.

{{< details "L'emplacement de la page est approximatif lorsqu'un lecteur d'écran est utilisé">}}
En raison des limites inhérentes à la technologie actuelle des lecteurs d'écran, Thorium doit estimer l'emplacement de la lecture. Par conséquent, le numéro de page annoncé par Thorium ne reflète pas l'endroit où le lecteur d'écran lit réellement, l'erreur peut être de quelques phrases. 

Ce [problème d'emplacement de la page du lecteur d'écran] (https://github.com/edrlab/thorium-reader/issues/1662#issuecomment-1161534338) est connu et nous discutons d'un moyen de le résoudre [numéros de page et sauts de page accessibles] (https://github.com/edrlab/thorium-reader/discussions/1799).

Cependant, NVDA annoncera le saut de page comme un séparateur s'il a un attribut title (exemple : ` <span epub:type="pagebreak" role="doc-pagebreak" id="page_2" class="page" title="2"/>` fera que NVDA annoncera "Deux, séparateur").

{{< /details >}}

<--->
<img src="/thorium-reader-doc/images/local-fr/thorium-whereami-ctrlK.png"  alt="Capture d'écran, zone de notification, page courante 103 - progression = 14/25 (incident du brail) [32%] H1 VII / H2 Incident du baril."/>

{{< /columns >}}

Lorsque vous consultez le menu `Navigation`, Thorium indique le chapitre en cours 
dans la `table des matières` ainsi que la page en cours dans le menu `Aller à la page`.

<img src="/thorium-reader-doc/images/local-fr/thorium-whereami-tdmfocus.png" alt="Capture d'écran, lecture d'un livre au titre VII Incident du Baril. Le volet de navigation est ouvert, la table des matières affiche le titre Incident du Baril dans un carré qui indique que c'est le chapitre en cours de lecture."/>

# Informations de lecture

{{< columns >}}

Utilisez la fonction *Informations* (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>) 
pour ouvrir un panneau qui affiche la structure des titres et le numéro de page.

En plus des informations sur le livre, ce panneau indique au sous titre Progression :

- le numéro du chapitre sur le nombre total de chapitre ;
- le titre du chapitre en cours ;
- le pourcentage lu du chapitre en cours ;
- la page courante ;
- la structure des titres (h1 est un titre de niveau 1, h2 un titre de niveau , etc.)

Appuyez sur  <kbd>Echap</kbd>  pour femer le panneau `Informations` 
et revenir au texte.

<--->

<img src="/thorium-reader-doc/images/local-fr/thorium-progression.png" alt="Capture d'écran, progression : 14/25 (incident du baril) [1%] h1: VII"/>

{{< /columns >}}

{{< details "Utiliser **Où suis-je** avec NVDA">}}

Appuyez sur la touche <kbd>NVDA</kbd> + <kbd>F7</kbd>, puis sur la touche de 
tabulation jusqu'à ce que vous obteniez la vue de l'en-tête. 
Cela vous montre où vous vous trouvez dans la structure du titre.

Appuyez sur <kbd>NVDA</kbd> + <kbd>Entrée</kbd> pour enregistrer la position 
actuelle. Puis <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> pour placer le 
curseur dans la section Progress de la boîte de dialogue contenant des 
informations sur la publication. Le numéro du document HTML actuel par rapport 
au nombre total de documents, le pourcentage, la page actuelle et la section 
correspondante sont affichés, avec la possibilité d'afficher des liens pour 
faire défiler les sections précédentes. Après avoir fermé le dialogue, par 
exemple en appuyant sur  <kbd>Echap</kbd> , il est possible de revenir au point 
de lecture par le biais du lien du lecteur d'écran (marqué d'un double 
soulignement) dans le cadre de contenu principal (vers lequel on peut naviguer 
par la touche Tab ou avec la lettre  <kbd>M</kbd>  en mode navigation).

{{< /details >}}
