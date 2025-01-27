---
title: Fenêtres, vues et panneaux
role: chapter
draft: 'false'
---

# Fenêtres, vues et panneaux {#windows_and_views}

Le lecteur Thorium présente une fenêtre principale et une fenêtre supplémentaire par livre ouvert. La fenêtre principale est toujours ouverte et propose 4 vues (Accueil, Tous les livres, Catalogues et Paramètres généraux) tandis que les vues des fenêtres des livres dépendent du format du livre (textuel, audio, visuel). Chaque format permet d'afficher des panneaux d'action (navigation, personalisation, etc.) qui peuvent être ancrés sur un côté de la vue.

## Fenêtre principale {#main_window}

La fenêtre principale vous permet d'accéder à vos collections et de les organiser, ainsi que de définir les paramètres qui s'appliquent à l'ensemble de l'application. La fermeture de la fenêtre principale ferme l'application et toutes les fenêtres de lecture ouvertes.

### Vue "Accueil" {#home_view}

Cette vue permet un accès rapide. Vous y trouverez les livres que vous avez lus ou ajoutés récemment. Les actions possibles sont Importer une publication, Ouvrir une publication et Ouvrir le menu Publication.  <img src="../../resources/images/local_en/th3_main_window_home.png" class="icon" role="presentation" alt=""/>

### Vue "Toutes les publications" {#all_publications_view}

C'est l'endroit où se trouvent toutes vos publications. Avec le temps, il peut devenir rempli de centaines de livres et vous aurez donc besoin d'options pour trier et rechercher. De ce fait, cette vue est plus complexe. Les premiers boutons de cette page permettent de sélectionner entre deux modes d'affichage, Grille et Tableau qui affecteront l'affichage de la liste des livres électroniques et offriront différentes options pour trier et filtrer, elles sont détaillées deux paragraphes ci-dessous.

Les actions disponibles au niveau de la vue sont d'importer une publication, de rechercher, de filtrer par balise et de naviguer par pages de votre bibliothèque. Les pages de la bibliothèque sont comme des étagères ou des piles, car la vue Toutes les publications est limitée à 50 publications pour qu'elle reste utilisable.

#### Mode grille {#grid_mode}

Le mode Grille présente les livres sous forme de cartes, la tabulation au clavier vous permettra de passer d'un livre à l'autre. Ce mode offre les actions possibles pour Ouvrir une publication et pour Ouvrir le menu contextuel de la Publication.

#### Mode tableau {#table_mode}

Le mode Tableau présente un livre par ligne et permet de visualiser un grand nombre d'informations habituellement disponibles uniquement dans le panneau d'informations du livre. La tabulation au clavier vous guidera à travers tous ces détails.

### Vue "Catalogues" {#catalog_view}

C'est ici que vous pouvez stocker, accéder, parcourir les catalogues en ligne et acquérir ou emprunter des livres électroniques. Au début, cet endroit semblera vide car nous ne préchargeons aucun catalogue. La section *d'assistance supplémentaire en ligne [Où obtenir des livres électroniques ?](https://thorium.edrlab.org/th3/get_ebooks/)* peut vous aider à identifier les catalogues disponibles si vous n'en avez pas déjà un en tête.

Deux protocoles catalogues sont disponibles.

1. [OPDS](https://opds.io/) , un format standard pour afficher un catalogue sur le Web.
2. API App, un protocole commun aux bibliothèques publiques françaises. Ce protocole doir préalablement être activé dans le panneau de configuration de thorium Reader.

Les détails et la manière de configurer et d'utiliser les catalogues sont disponibles dans la [section Actions des catalogues]() .

### Panneau de configuration de l'application {#setting_view}

Les paramètres de l'application sont divisés en trois onglets :

1. L'onglet Général vous permet de :

    1. Sélectionner la langue de l'interface.
    2. Gérer les authentifications d'accès aux catalogues enregistrées. Le bouton
        <span class="ui_button">effacer les données de connexion</span> supprimera toute authentification de catalogue précédemment enregistrée (utile si vous lisez sur un ordinateur public ou partagé ou si vous souhaitez changer le compte avec lequel vous êtes connecté).
    3. Enregistrer la session (ce qui signifie que l'application se souviendra des fenêtres ouvertes à la fermeture et les rouvrira lors du prochain lancement).
    4. Ajoutez un compte de bibliothèque en activant l'accès à l'API Dilicom PNB. Un mode d'emploi pliable donne plus de détails sur cette fonctionnalité permettant d'accéder aux bibliothèques publiques françaises.
    5. Le créateur permet de définir un nom à ajouter aux annotations. Ce nom peut être catégorisé comme Organisation ou Personne. Il sera exporté avec les annotations, les utilisateurs doivent donc faire attention aux problèmes potentiels de confidentialité. Si vous laissez ce champ vide, les annotations seront attribuées à « Unknown1 ».

2. L'onglet Apparence vous permet de choisir le thème de l'application (sombre, clair ou automatique pour s'adapter aux préférences du système).

3. L'onglet Raccourcis clavier vous aide à vérifier et à manipuler les actions pilotées par le clavier dans l'application. Découvrez le menu à trois points à côté du titre du panneau avec des actions supplémentaires (Réinitialiser, Modifier et Charger). L'onglet Modifier ouvre le dossier système de l'application à l'emplacement du fichier .json de paramètres utilisateur stocké, vous permettant de le modifier en dehors de l'application (à vos propres risques), de l'enregistrer pour une utilisation ultérieure ou de le partager sur vos appareils ou avec qui vous voulez.

   <img src="../../resources/images/local_en/th3_main_settings_keys_context.png" class="icon" role="presentation" alt=""/>

## Fenêtre de lecture {#reading_window}

Lorsqu'un livre est ouvert, il s'affiche dans une nouvelle fenêtre, ce qui signifie que vous pouvez avoir plusieurs livres ouverts en même temps, chacun dans une fenêtre indépendante que vous pouvez organiser à votre guise.

### Panneau de navigation {#reading_nav_panel}

Accessible depuis la barre d'outils supérieure de la fenêtre de lecture, ce panneau contient un menu déroulant permettant d'accéder à différents moyens de navigation. La disponibilité et le contenu de chaque moyen de navigation. Pour l'epub, il s'agit de :

- **Table des matières** (TOC), une liste rédigée par un auteur du contenu d'un livre électronique, généralement similaire à la structure des titres de contenu, mais pas nécessairement. Un créateur de contenu peut décider, par exemple, de limiter la table des matières à une certaine profondeur.
- **Repères** , une liste rédigée des principaux points d'intérêt du livre électronique, généralement les avant-propos, l'avis de droit d'auteur, le contenu principal et les annexes.
- **Aller à la page** , une liste de sauts de page rédigée par l'auteur. La liste de pages peut faire référence à une version imprimée et permettre d'utiliser l'ebook dans un environnement de lecture mixte, il devient alors possible de localiser ou de faire une citation. Dans ce cas, Thorium Reader n'offre en réalité aucun moyen d'identifier le livre imprimé concerné, il doit être informé textuellement et explicitement dans le contenu par le créateur du contenu.
- **Recherche** , une liste générée de correspondances de recherche pour aider le lecteur à naviguer entre les résultats de recherche. Ce panneau n'a de contenu que lorsque la fonction de recherche est activée.
- **Signets** , une liste générée des signets de l'utilisateur. Ce panneau offre la possibilité de supprimer le signet ou d'éditer le texte qui lui est attaché et informe en pourcentage de la progression de la lecture où il se trouve.
- **Annotations** , une liste générée d'annotations utilisateur

### Panneau de paramètres de lecture {#reading_settings_panel}

Accessible depuis la barre d'outils supérieure de la fenêtre de lecture, ce panneau contient tous les paramètres utilisateur possibles pour ajuster l'affichage du contenu textuel. Il est important de se rappeler que ces possibilités peuvent être limitées par la manière dont le contenu a été créé.

Des informations détaillées sur les paramètres de lecture disponibles par format sont disponibles dans les <a href="../210_reading/index.xhtml">sous-sections Lecture</a> :

<ul>
   <li>       <a href="../211_reading_textuals/index.xhtml">Lire des contenus textuels</a>
</li>
    <li>       <a href="../212_reading_visuals/index.xhtml">Lecture de contenus visuels</a>
</li>
    <li>       <a href="../213_reading_auditory/index.xhtml">Reading audio contents</a>
</li>
    <li>       <a href="../214_reading_pdfs/index.xhtml">Lire des PDF</a>
</li>
</ul>

## Panneau d'information sur le livre {#book_info_panel}

Les informations sur le livre sont disponibles dans un panneau dédié accessible depuis le menu d'action du livre des étagères de la bibliothèque &lt;img src="../../resources/images/icons3/info-icon.svg){.icon role="presentation"} <span class="ui_button">À propos de la publication</span> ou depuis l'icône Informations de la fenêtre de lecture &lt;img src="../../resources/images/icons3/info-icon.svg){.icon role="presentation"}.

Ce panneau affiche les informations du livre électronique telles qu'elles sont fournies par le fichier. La fiabilité de ces informations dépend du créateur du fichier, généralement l'éditeur. Les informations affichées sont les suivantes :

- Couverture de la publication avec son alternative textuelle si présente
- Titre de la publication
- Auteur de la publication
- Description ou CV
- Détails de la publication, y compris la langue de publication
- Informations sur l'accessibilité affichées conformément aux directives internationales (pour plus d'informations, voir [le Guide d'affichage du W3C pour les métadonnées d'accessibilité](https://w3c.github.io/publ-a11y/UX-Guide-Metadata/draft/principles/?updated) ).
- Balises, y compris la possibilité de <img src="../../resources/images/icons3/tag-icon.svg" class="icon" role="presentation" alt=""/>
    <span class="ui_button">Ajoutez</span> vos propres balises.
- Progression

Ce panneau a la particularité de ne pas être ancrable car il ne propose pas d'action nécessitant d'avoir accès au contenu principal du livre.
