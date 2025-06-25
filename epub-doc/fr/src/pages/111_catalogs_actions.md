---
title: Actions pour les catalogues
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Actions pour les catalogues {#Catalogs_actions}


<section class="filet">

## Mise en place d'un catalogue OPDS

Sélectionnez l'onglet <span class="ui_button">Catalogues</span> puis le bouton <span class="ui_button">Ajouter un flux OPDS
</span>. Indiquez un Nom pour désigner ce catalogue et collez
une adresse correspondant à un catalogue distribué au format OPDS.
Validez avec le bouton <span class="ui_button">Ajouter</span>.

<div class="framed">
Exemple :

L'activation du lien suivant permet de télécharger un fichier .atom qui peut être ouvert avec Thorium.
ouvrir avec Thorium : [Télécharger le flux OPDS pour les nouveaux titres de Gutenberg.org](https://www.gutenberg.org/ebooks/search.opds/)

</div>

Il est également possible d'utiliser le menu contextuel (généralement clic droit), 
copier le lien et le coller dans Thorium <span class="ui_button">Ajouter un catalogue OPDS</span> pour voir la magie opérer.

Les flux OPDS peuvent également être fournis sous forme de liens directs qui s'ouvrent directement dans Thorium.
directement dans Thorium. [Ouvrir le flux OPDS pour la nouvelle version de Gutenberg.org](opds://www.gutenberg.org/ebooks/search.opds/)

Depuis Thorium 2.2, les flux OPDS peuvent être édités, vous pouvez donc changer le nom ou récupérer l'URL du flux.


</section>
<section class="filet">


### Exemple de flux OPDS avec des contenus protégés par LCP

Les flux dont le contenu est protégé doivent vous permettre de vous connecter directement à partir de la page du catalogue dans Thorium. Le bouton ou l'accès à la connexion peuvent être différents selon le fournisseur du flux.

Le flux OPDS d'Archive.org permet de parcourir et d'emprunter des livres sous licence LCP
et de les emprunter. Un compte Archive.org est nécessaire, la page d'authentification s'ouvrira
une fois que vous aurez sélectionné un livre. Vous pouvez l'ajouter à Thorium avec l'adresse suivante
adresse : [Flux OPDS d'Archive.org](https://archive.org/services/opds)

Vous pouvez utiliser aussi utiliser [feedbooks
OPDS](opds://catalog.feedbooks.com/catalog/index.json) pour parcourir le
[Catalogue Feedbook](https://www.feedbooks.com/#). Une fois que vous avez sélectionné
un livre, vous serez redirigé vers la page web où vous pourrez acheter le livre.

Feedbooks OPDS vous permet de vous connecter au flux du catalogue Thorium en cliquant sur le bouton
*Shelf* dans le coin supérieur droit. Tout livre acheté avec votre compte
Feedbooks sera disponible au téléchargement directement à partir de l'interface du catalogue de flux Thorium Reader.

À des fins de test, EDRLab fournit un flux avec trois publications gratuites
sous protection LCP. Vous pouvez l'ajouter à Thorium avec l'adresse suivante
adresse : [Ajouter le flux public OPDS d'EDRLab feed](https://edrlab.org/public/feed/opds-lcp.json)


</section>
<section class="filet">


### Responsabilité de l'alimentation de l'OPDS

Les flux OPDS et l'accès au contenu qu'ils fournissent sont sous la responsabilité de l'éditeur du flux. 
Il en va de même pour les informations fournies par
le flux.


</section>
<section class="filet">

## Création d'un compte de bibliothèque publique française

En France, de nombreuses bibliothèques publiques proposent un catalogue lisible par machine
(similaire à l'OPDS mais pas identique), permettant aux usagers de télécharger des
publications numériques à partir de leur bibliothèque locale. L'intégration de cette technologie
dans Thorium Reader vous permet de télécharger un livre électronique ou un livre audio directement dans Thorium Reader pour une lecture instantanée.


Pour connecter votre compte de bibliothèque publique française, entrez une ville française (par exemple "Montpellier") ou une partie du nom de la bibliothèque dans le champ de recherche et cliquez sur le bouton Rechercher. Une liste de bibliothèques publiques correspondant à votre
recherche apparaîtra. Sélectionnez une bibliothèque et cliquez sur <span class="ui_button">Ajouter</span>. Dans la liste mise à jour des
sélectionnez cette bibliothèque : un formulaire d'authentification s'affiche.
Saisissez votre nom d'utilisateur et votre mot de passe fournis par la bibliothèque, puis cliquez sur <span class="ui_button">Connexion</span>. 
Vous pouvez maintenant voir le contenu emprunté auprès de votre bibliothèque. Vous pouvez télécharger et lire les livres électroniques et les livres audio.


</section>
