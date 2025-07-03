---
title: Fenêtres, vues et panneaux
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Fenêtres, vues et panneaux {#windows_and_views}

Le lecteur Thorium dispose d'une fenêtre principale et d'une fenêtre supplémentaire par livre ouvert.
ouvert. La fenêtre principale est toujours ouverte et offre 4 vues (<span class="ui_button">Home</span>, <span class="ui_button">All
tous les livres</span>, <span class="ui_button">Catalogues</span> et <span class="ui_button">Réglages</span>).

Les fenêtres livres dépendront du format du livre (textuel, audio, visuel). 
Chaque format permet une sélection de panneaux d'action qui peuvent être ancrés sur un côté de la vue.

<section class="filet">

## Fenêtre principale {#main_window}

La fenêtre principale est l'endroit où vous pouvez accéder à vos collections et les organiser. Elle permet aussi d'accéder aux paramètres qui s'appliquent à l'ensemble de l'application.
La fermeture de la fenêtre principale ferme l'application et toutes les fenêtres de lecture ouvertes.

</section>
<section class="filet">


### Vue Accueil {#home_view}

Cette vue offre un accès rapide. Vous y trouverez les livres que vous avez lus récemment et ceux que vous avez ajoutés récemment.
Les actions possibles sont <span class="ui_button">Ajouter un livre</span>, *Ouvrir une publication* en activant le lien sur sa couverture et *Ouvrir le menu de la publication* en utilisant le bouton de menu à trois points <img src="../../resources/images/threedot.svg" class="icon" alt="" role="presentation"/>.

</section>
<section class="filet">


### Vue <span class="ui_button">Toutes les publications</span> {#all_publications_view}

C'est l'endroit où se trouvent tous vos ouvrages. Avec le temps, il peut être rempli de centaines de livres et vous avez donc besoin d'options pour les trier et les rechercher.
C'est pourquoi cette vue est plus complexe. Les premiers boutons de cette page
permettent de choisir entre deux modes d'affichage, <span class="ui_button">Grille</span> et <span class="ui_button">Tableau</span>, qui affecteront l'affichage de la liste des livres et les options de recherche. Elles sont détaillées dans les deux paragraphes ci-dessous.

Les actions disponibles au niveau <span class="ui_button">Vue</span> sont les suivantes&nbsp;: *Importer une publication*, *Rechercher*, *Faire une recherche*, *Filtrer par étiquette* et *naviguer dans les pages de votre bibliothèque*. Les pages de la bibliothèque
sont comme des étagères ou des piles, car la vue <span class="ui_button">Toutes les publications</span> est limitée à 50 publications par page pour rester utilisable.

</section>
<section class="filet">

## Mode grille {#grid_mode}

Le mode <span class="ui_button">Grille</span> présente les livres comme des cartes disposées les unes à côté des autres. Ce mode offre la possibilité d'ouvrir une publication et d'ouvrir le menu de la publication.

</section>
<section class="filet">

## Mode tableau {#table_mode}

Le mode <span class="ui_button">Tableau</span> présente les livres comme des lignes et permet de visualiser un grand nombre d'informations habituellement disponibles uniquement dans le panneau d'information du Livre. La tabulation au clavier vous guidera à travers tous ces détails.

</section>
<section class="filet">


### Vue des catalogues {#catalog_view}

C'est l'endroit où vous pouvez stocker, consulter, parcourir les catalogues en ligne
et acquérir ou emprunter des livres électroniques. Au début, cet endroit vous semblera
vide car nous ne préchargeons aucun catalogue. Le *support supplémentaire en ligne [Où trouver des livres électroniques&nbsp;?](https://thorium.edrlab.org/fr/th3/get_ebooks/)*
peut vous aider à identifier les catalogues disponibles si vous n'en avez pas déjà un en tête.

Thorium permet de charger et consulter des catalogues [OPDS](https://opds.io/), un format standard pour afficher un catalogue sur le Web.

Un accès aux bibliothèques publiques françaises peut être activé depuis les préférences de l'application (API Dilicom PNB).

Les détails et la manière de mettre en place et d'utiliser les catalogues sont disponibles dans la rubrique
[Section actions catalogues](../111_catalogs_actions/index.xhtml).


</section>
<section class="filet">


### Paramètres de l'application {#setting_view}

Les paramètres de l'application sont divisés en trois onglets&nbsp;:

1.  L'onglet <span class="ui_button">Général</span> vous permet de&nbsp;:
    1. *sélectionner la langue* de l'interface,
    2. *supprimer les identifiants liés aux catalogues*. Le bouton <span class="ui_button">Effacer les données d'identification</span> supprimera toute authentification au catalogue précédemment stockée (utile si vous lisez sur un ordinateur public ou partagé ou si vous souhaitez changer le compte avec lequel vous êtes connecté).
    3. *Sauvegarder la session* (l'application se souviendra des fenêtres ouvertes à la fermeture et les rouvrira).
    4. *Ajouter un compte de bibliothèque* en activant l'accès à l'API de Dilicom PNB. Un dépliant "Comment ça marche" donne plus de détails sur cette fonctionnalité utilisée pour accéder aux bibliothèques publiques françaises.
    5. <span class="ui_button">Créateur</span> permet de *configurer un nom à ajouter aux annotations*. Ce nom peut être défini en tant qu'organisation ou personne. Il sera exporté avec les annotations, et les utilisateurs doivent donc faire attention aux problèmes potentiels de confidentialité. Si vous laissez ce champ vide, les annotations seront attribuées à "Unknown1".

2.  L'onglet <span class="ui_button">Apparence</span> vous permet de choisir le thème de l'application (sombre, clair ou automatique pour s'adapter aux préférences du système).
3.  L'onglet <span class="ui_button">Raccourcis clavier</span> vous permet de vérifier et de manipuler les actions au clavier dans l'application. Découvrez le menu à trois points
    à côté du titre du panneau avec des actions supplémentaires (<span class="ui_button">Réinitialiser</span>, <span class="ui_button">Éditer</span> et <span class="ui_button">Réinitialiser</span>).
    <span class="ui_button">Charger</span>). Le bouton <span class="ui_button">Éditer</span> ouvre le dossier système de l'application dans la
    localisation du fichier `.json` des paramètres utilisateur stockés, ce qui vous permet de le modifier en dehors de l'application (à vos risques et périls), de l'enregistrer pour des utilisations futures ou le partager avec vos appareils ou avec qui vous voulez.

</section>
<section class="filet">

## Fenêtre de lecture {#reading_window}

Lorsqu'un livre est ouvert, il s'affiche dans une nouvelle fenêtre, ce qui signifie que vous pouvez avoir plusieurs livres ouverts en même temps, chacun dans une fenêtre indépendante que vous pouvez agencer à votre guise.

</section>
<section class="filet">


### Panneau de navigation de lecture {#reading_nav_panel}

Représenté par une icône de livre ouvert <img src="../../resources/images/open_book.svg" class="icon" alt="" role="presentation"/> dans la barre d'outils supérieure de la fenêtre de lecture, ce panneau contient un menu déroulant permettant d'accéder à différents moyens de navigation. La disponibilité et le contenu de chaque moyen de navigation. Pour les livres au format EPUB, il s'agit de

* <img src="../../resources/images/toc-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Table des matières</span> , une liste rédigée par l'auteur du contenu du livre électronique, généralement similaire à la structure des rubriques du contenu, mais pas obligatoirement. Un créateur de contenu peut décider, par exemple, de limiter la table des matières à un certain niveau de titres.
* <img src="../../resources/images/landmark-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Points de repère</span>, une liste rédigée par l'auteur des principaux points d'intérêt du livre électronique, généralement les avant-propos, la notice de copyright, le contenu principal et les annexes.
<img src="../../resources/images/target-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Aller à la page</span>, une liste  des sauts de page rédigée par l'auteur. La liste des pages peut faire référence à une version imprimée et permettre d'utiliser l'ebook dans un environnement de lecture mixte, de sorte qu'il devient possible de localiser ou de faire une citation. Dans ce cas, à ce jour, Thorium Reader n'offre aucun moyen d'identifier le livre imprimé correspondant, qui doit être indiqué textuellement et explicitement dans le contenu par le créateur.  
<img src="../../resources/images/search-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Recherche</span>, une liste générée de résultats de recherche pour aider le lecteur à naviguer entre les résultats de la recherche. Ce panneau n'a de contenu que lorsque la fonction de recherche est activée.
<img src="../../resources/images/bookmarkMultiple-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> marques-pages</span>, une liste générée des marques-pages placés par l'utilisateur. Ce panneau offre la possibilité de supprimer le marque-page ou d'éditer le texte qui y est attaché et informe en pourcentage de la progression de la lecture.
* <img src="../../resources/images/annotation-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Annotations</span>, une liste générée d'annotations de l'utilisateur.


</section>
<section class="filet">


### Panneau des paramètres de lecture {#reading_settings_panel}

Représenté par une icône de deux lettre "aA" <img src="../../resources/images/textarea-icon.svg" class="icon" alt="" role="presentation"/> positionnée dans la barre d'outils supérieure de la fenêtre de lecture, ce panneau contient tous les paramètres utilisateur possibles pour ajuster l'affichage du contenu textuel. Il est important de se rappeler que ces possibilités peuvent être limitées par la manière dont le contenu a été créé.

Des informations détaillées sur les paramètres de lecture disponibles en fonction des formats sont disponibles aux 
<a href="../210_reading/index.xhtml">sous-sections du chapitre lecture</a>.


</section>
<section class="filet">

## Panneau d'information sur les livres {#book_info_panel}

Les informations sur les livres sont disponibles dans un panneau dédié atteignable à partir à partir de l'icône d'information de la fenêtre de lecture
<img src="../../resources/images/info-icon.svg" alt="" role="presentation" class="icon"/> ou du sous menu 
<span class="ui_button">À propos de la publication</span>  
du menu du livre (icône à trois points <img src="../../resources/images/threedot.svg" class="icon" alt="" role="presentation"/>) dans les vues <span class="ui_button">Accueil</span>, <span class="ui_button">Mes Livres</span> et <span class="ui_button">catalogues</span>.
Ce panneau affiche les informations du livre telles qu'elles sont fournies par le fichier.
La fiabilité de ces informations dépend du créateur du fichier. Les informations affichées sont les suivantes&nbsp;:

* *Couverture* de la publication avec son texte alternatif si présent
* *Titre* de la publication
* *Auteur* de la publication
* *Description* ou résumé
* Détails de la publication, y compris *langue de publication*
* Informations sur l'accessibilité affichées conformément aux lignes directrices internationales (pour plus d'informations, voir [W3C Display Guide for Accessibility metadata] (https://w3c.github.io/publ-a11y/UX-Guide-Metadata/draft/principles/?updated)).
* *Mots-clef*, y compris la possibilité de
    <img src="../../resources/images/tag-icon.svg" class="icon" alt="" role="presentation"/> <span class="ui_button">Ajouter</span> des mots-clefs.
* *Progression*, ou avancement de la lecture du livre, exprimée en nombre de chapitres lus sur le nombre de chapitres totaux ainsi qu'en % du contenu et matérialisé par les niveaux et titres des sections sous lesquelles la lecture est actuellement en cours. Il est possible de déplier cet élément pour obtenir la liste des sections précédant la position de lecture actuelle .

</section>


