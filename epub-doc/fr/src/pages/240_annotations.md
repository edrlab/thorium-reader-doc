---
title: Annotations
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Annotations

*Les annotations ont été introduites pour la première fois dans Thorium 3, en tant que nouvelle fonctionnalité, elle peut présenter des comportements inattendus. Faites-nous part des difficultés que vous rencontrez en [ouvrant une issue](https://github.com/edrlab/thorium-reader/issues/new) ou en [nous envoyant un courriel](https://www.edrlab.org/contact/).*

La manière la plus simple d'ajouter une annotation est de sélectionner un texte et de cliquer sur le bouton Annotations 
(<img src="../../resources/images/annotation-icon.svg" class="icon" role="presentation"/>) ou d'utiliser le raccourci clavier <kbd>Shift</kbd> +
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd>. Cela ouvre la fenêtre contextuelle Annotation
et place le curseur dans la zone de saisie où vous pouvez écrire votre
annotation (facultatif). Vous pouvez modifier la couleur et le type de surbrillance 
(Fond uni, Souligné, Barré ou Contour), puis 
valider la création de l'annotation avec <span class="ui_button">Save</span>.

<div class="framed">
Les annotations dans le contenu ne sont pas accessibles par tabulation au clavier. Pour naviguer entre elles, les utilisateurs du clavier doivent ouvrir le panneau des annotations.
</div>
<section class="filet">

## Panneau d'annotations {#annotations_panel}

Le panneau de navigation comporte une section consacrée aux annotations.
Il vous permet d'adapter l'affichage et le comportement des annotations à votre pratique, ainsi que d'examiner, de manipuler, de supprimer, de trier, de filtrer, d'importer, d'exporter et de naviguer dans vos annotations.

</section>
<section class="filet">

## Options pour les annotations {#annotations_options}

Les options d'annotation sont disponibles dans la barre d'outils du panneau d'annotation.

Quatre options sont disponibles :

- Le <span class="ui_button">mode instantané</span> ouvre la fenêtre contextuelle d'annotation à chaque sélection.
- <span class="ui_button">Création rapide</span> met en surbrillance le texte sélectionné et crée une annotation vide.
-<span class="ui_button"> Afficher dans les marges</span> remplace la surbrillance du texte par une indication plus discrète dans les marges qu'une annotation est présente sur cette ligne.
- <span class="ui_button">Ne pas afficher</span> masque simplement toute marque d'annotation (mais ne désactive pas la possibilité d'ajouter des annotations).

<div class="framed">

La combinaison des options <span class="ui_button">Mode instantané</span> et <span class="ui_button">Création rapide</span> vous permet d'utiliser le mode annotateur en série : toute sélection créera une surbrillance sans
sans qu'aucune fenêtre ne s'affiche.
</div>

</section>
<section class="filet">

## Trier et filtrer les annotations {#annotations_sort_and_filter}

Les options de tri et de filtrage ont chacune leur bouton dédié. Toutes deux modifient la liste des annotations affichées dans le tableau de bord.

Le tri peut se faire par *Progression* (du début à la fin du livre), *Dernière création* et *Dernière modification*. Il n'affecte que l'ordre de présentation.

Le filtrage modifie la liste des annotations affichées, sans les supprimer. Si vous cherchez une annotation qui n'apparaît pas, c'est peut-être parce qu'un filtre est actif. Un nombre dans une bulle apparaîtra à côté de l'icône des options de filtrage pour visualiser rapidement si et combien de filtres sont actifs. Il s'agit d'un nombre en texte clair qui sera annoncé par les lecteurs d'écran.

Les filtres de balises actifs sont représentés visuellement par un fond bleu et annoncés comme actifs par les lecteurs d'écran.

Tous les filtres permettent une sélection multiple et agissent comme des cases à cocher, un clic active le filtre, un autre clic le désactive.

Les options de filtrage sont les suivantes
* par balise, si une balise a été affectée à une annotation, elle apparaîtra ici ;
* par Couleur : Rouge, Orange, Jaune, Vert, Bleu-vert, Bleu clair, Cyan et Violet ;
* par Type de dessin, Contour, Fond uni, Barré ou Souligné ;
* par Créateur, s'il a été indiqué dans le <a href="../102_windows_views_panels/index.xhtml#setting_view" >Panneau des paramètres de l'application</a >, ou importé avec un ensemble d'annotations.

</section>
<section class="filet">

## Examiner et manipuler des annotations {#annotations_view_and_manipulation}

Les annotations sont affichées sous forme de cartes dans le panneau de navigation Annotations. Chaque carte contient le texte de l'annotation, la date de création, la position dans le livre exprimée en pourcentage de progression, ainsi qu'un bouton <span class="ui_button">Modifier</span> et un bouton <span class="ui_button">Supprimer</span>. Le texte de l'annotation agit comme un bouton qui déplace le focus sur l'annotation elle-même. Ainsi, en quittant le contexte du panneau d'annotation, il faudra faire quelques tabulations pour revenir au panneau d'annotation.

Une bordure colorée sur la gauche indique visuellement la couleur réglée pour l'annotation. Cette information n'est pas transmise aux technologies d'assistance.

</section>
<section class="filet">

## Échanger des annotations (Import et Export programmatiques) {#annotations_io}

Un ensemble d'annotations peut être exporté ou importé. Cette action est possible depuis le panneau Annotations de la vue lecture ainsi que depuis le menu contextuel du livre dans les vues bibliothèques. Cela permet d'exporter des annotations même après la fin d'une licence LCP.

Le bouton d'exportation <img src="../../resources/images/export-icon.svg" class="icon"  alt="" role="presentation"/> ouvre une boîte de dialogue demandant un titre qui sera utilisé pour identifier l'ensemble d'annotations lors de son importation. Le bouton "Enregistrer" ouvre une fenêtre "Fichier système" dans laquelle l'utilisateur doit sélectionner l'endroit où il souhaite stocker le fichier d'annotations ainsi que le nom du fichier. Le titre sera utilisé comme nom de fichier prérempli par défaut, mais il peut être modifié sans affecter l'identification du fichier.

Les annotations sont stockées avec l'extension de fichier `.annotation` et utilisent un format JSON-LD défini par la recommandation du W3C [Web Annotation Data Model](https://www.w3.org/TR/annotation-model/). Il contient l'identifiant de l'ebook et les informations sur le créateur renseignées dans le <a href="../102_windows_views_panels/index.xhtml#setting_view" >Panneau des paramètres de l'application</a > ainsi que divers types de sélecteurs pour permettre l'importation et le positionnement correct des annotations par différents systèmes de lecture.

Le bouton d'importation <img src="../../resources/images/import-icon.svg" class="icon"  alt="" role="presentation"/> s'ouvre pour permettre à l'utilisateur de sélectionner le fichier qu'il souhaite importer. Si l'identifiant du livre n'est pas similaire au livre ouvert dans lequel l'intention d'importation se produit, un message d'erreur s'affichera et les annotations ne seront pas importées.

Une fois importées, les annotations apparaissent dans le panneau des annotations et peuvent être révisées et manipulées comme n'importe quelle annotation créée. Elles héritent du titre du fichier d'annotation original en tant que balise. Ces manipulations n'affecteront pas le fichier `.annotation` original qui n'est jamais lié.

Ce format d'export d'annotations permet des transformations vers d'autres formats structurés et standardisés. Si des besoins existent, nous espérons que des équipes de développement mettent en oeuvre des modules de conversion et d'import pour permettre leur utilisation dans d'autres contextes. 

## Exporter des annotations au format HTML

Depuis Thorium 3.2, il est possible d'exporter les marques pages et les annotations sous la forme d'une page web au format HTML. Dans une version future, nous espérons qu'il soit possible de personnaliser cet export grace à un gabarit personnalisable.

Lors de l'export, sélectionnez l'extension du fichier `.annotation` et modifiez la en `.html`. La suite de l'export se déroule de la même façon. Le bouton "Enregistrer" ouvre une fenêtre "Fichier système" dans laquelle l'utilisateur doit sélectionner l'endroit où il souhaite stocker le fichier d'annotations ainsi que le nom du fichier. Le titre sera utilisé comme nom de fichier prérempli par défaut, mais il peut être modifié sans affecter l'identification du fichier.

</section>
