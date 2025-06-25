---
title: Forewords
role: doc-foreword
epubtype: foreword
draft: false
weight: 100
---

Thorium est un lecteur de livres numériques, c'est aussi une bibliothèque où vous pouvez stocker vos livres et accéder à des catalogues en ligne.

Thorium permet de lire des livres numériques dans différents formats,
chacun d'entre eux ayant des points forts et des limites. Cette documentation est
est fournie en EPUB, le format qui offre le plus grand nombre de fonctionnalités.

------------------------------------------------------------------------

Ce logiciel est gratuit, open-source et, en tant que tel, son développement n'est possible que parce qu'il est financé par différentes organisations.
Parmi celles-ci,
les membres de l'EDRLab, des subventions privées ou publiques et de petites
récurrents de la part d'utilisateurs satisfaits (particuliers ou entreprises). Si vous comptez sur
cette application, envisagez de [soutenir par le financement et le parrainage](https://thorium.edrlab.org/en/th3/900_about_thorium/901_thorium-sponsorship/)

<section class="filet">

## Ceci est la documentation pour Thorium 3, et c'est un travail en cours ! {#th3}

Thorium 3 introduit de nombreux changements et, nous l'espérons, une expérience de lecture facilitée. 
Cette documentation est un travail en cours qui vise à
d'aider les nouveaux utilisateurs qui découvrent le logiciel et de fournir les liens manquants pour les lecteurs expérimentés.


</section>
<section class="filet">

## Matériel supplémentaire disponible en ligne {#th3add}

Pour compléter cette documentation, le [site web du thorium](https://thorium.edrlab.org) propose une foire aux questions ainsi qu'une liste de ressources, y compris des liens pour trouver des trouver des livres électroniques en ligne.

Le [Github Thorium Issue tracker](https://github.com/edrlab/thorium-reader/issues) peut également être consulté pour trouver des réponses à des cas d'utilisation spécifiques et nous faire part des
toute difficulté ou bogue affectant votre expérience de lecture.


# Avant d'utiliser Thorium Reader Desktop

Ce guide d'utilisation se limite à fournir des détails sur les fonctionnalités et les actions. Vous trouverez des ressources dédiées dans l'application elle-même ou sur les pages web du support en ligne.


</section>
<section class="filet">

## Formats de publication pris en charge

Thorium Reader Desktop supporte différents formats de publication. Chaque format ayant ses particularités, il n'est pas toujours possible d'offrir les mêmes fonctionnalités pour tous les formats.

* EPUB (Electronic PUBlication) est un format de fichier ouvert pour les publications électroniques. EPUB est un format sémantique natif permettant d'utiliser de nombreux langages standardisés tels que HTML, ARIA, MATHML, SVG et autres. La version 3 actuelle est connue pour fournir la meilleure expérience de lecture à jour. Les fichiers EPUB2 obsolètes sont également lisibles dans Thorium.

* DAISY est un format généralement produit et distribué par des bibliothèques spécialisées ou des ONG, le format DAISY offre une expérience de lecture améliorée pour les livres électroniques qui ne sont pas disponibles en EPUB3. Thorium supporte la lecture des formats DAISY 3 et 2.02, qu'il s'agisse du texte seul, de l'audio seul ou du texte et de l'audio synchronisés.

* PDF (Portable Document Format) est un format à mise en page fixe reproduisant l'expérience de lecture de l'imprimé.
  
* Audiobooks : un format standardisé pour les audiobooks a été conçu par le groupe de travail W3C Publishing Working Group en 2020. Thorium supporte le format de livre audio packagé (LPF), qui sera bientôt largement utilisé par les libraires, du moins nous l'espérons.

* Divina, un format standard pour les bandes dessinées, les mangas, les webtoons et d'autres styles d'œuvres numériques basées sur des séquences d'images. Il s'agit d'un format encore expérimental.



</section>
<section class="filet">

## Fonctions du clavier {#keyboard}

Chaque combinaison de touches peut être modifiée dans le [panneau des préférences de l'application](../102_windows_views_panels/index.xhtml#setting_view).
Découvrez le menu à trois points à côté du titre du panneau avec des actions supplémentaires
(Réinitialiser, Modifier et Charger). L'action Modifier ouvre l'application du dossier système à la
localisation du fichier `.json` des paramètres utilisateur stockés, ce qui vous permet de le modifier en dehors de l'application (au niveau de l'écran).
de le modifier en dehors de l'application (à vos risques et périls)
ou de le sauvegarder pour des utilisations futures ou de le partager avec vos appareils ou avec qui vous voulez.

Depuis la version 3.2, il est possible de filtrer les actions à travers un champ de recherche pour faciliter la recherche de raccourcis clavier.

La configuration par défaut est disponible en ligne sur la page de support <a href="https://thorium.edrlab.org/en/th3/400_ressources/402_keyboard-shortcuts/"><span>Raccourcis clavier</span></a>


</section>
<section class="filet">

## Gestes tactiles {#tactile}

Le Thorium Reader dispose d'un contrôle gestuel tactile limité à l'écran. Ils sont
principalement mis en œuvre pour le contrôle du zoom de l'image et pour tourner les pages. Certains gestes du système d'exploitation
du système d'exploitation peuvent également fonctionner.

La liste suivante répertorie les gestes connus qui fonctionnent à ce jour :

*Taper, dans toutes les vues* activera le bouton
*Taper puis sélectionner et déplacer les curseurs*, sur un texte, sélectionnera le texte
* *Placer un doigt sur l'écran et faire glisser horizontalement ou verticalement lors de la lecture dans une présentation déroulante* fera défiler le texte
* *Placer un doigt sur l'écran et faire glisser horizontalement lorsque vous lisez dans une présentation paginée* passera à la page suivante.
* *Placer les doigts sur l'écran et pincer ou étirer dans un panneau image*  permet d'effectuer un zoom avant ou arrière.
* *Appuyer et maintenir dans toutes les vues* affichera d'autres commandes (comme le clic droit).

# Ouverture du lecteur de thorium {#getabook}

Une fois que le Thorium est installé sur votre système, plusieurs façons  sont possibles pour l'ouvrir.

- Thorium peut être lancé à partir du menu de l'application ou à partir de n'importe quel raccourci créé. Cette action ouvrira la vue d'accueil de la bibliothèque et vous permettra de choisir un livre ou d'en ajouter un autre, mais aussi d'accéder aux [catalogues]() et d'organiser votre bibliothèque. Pour lire un livre, il suffit de cliquer dessus ou de valider avec <kbd>Entrée</kbd> lorsqu'il est sélectionné.
- Sélectionnez le livre que vous voulez lire, utilisez le `menu contextuel` (clic droit), sélectionnez `ouvrir`.
- Vous pouvez définir l'application par défaut pour certains types de fichiers dans les paramètres de Windows. Sélectionnez un fichier, ouvrez le menu contextuel, sélectionnez `Ouvrir avec`, dans la fenêtre pop-up sélectionnez `Thorium`, cochez la case `Toujours ouvrir avec`. Cette opération doit être répétée pour chaque format de fichier que vous souhaitez lire avec Thorium.

</section>
