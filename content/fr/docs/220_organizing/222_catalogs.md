---
title: "Accéder à des catalogues"
description: ""
draft: false
weight: 222
toc: false
---


  <p>
De nombreuses bibliothèques publiques et librairies adoptent 
<a href="https://opds.io/">OPDS</a> comme format standard pour afficher leur 
catalogue sur le Web. Thorium peut consulter des catalogues OPDS 1 et 2. 
Il prend également en charge plusieurs formats d'identification associés à OPDS 
et peut donc permettre aux utilisateurs d'accéder à leur bibliothèque 
personnelle,  c'est-à-dire aux livres numériques que l'utilisateur a acquis ou 
emprunté,  ce qui permet de les télécharger et de les lire immédiatement.
  </p>
  

{{< alert info >}}

L'activation du lien suivant permet de télécharger un fichier .atom qui peut être ouvert avec Thorium :
<a href="https://www.gutenberg.org/ebooks/search.opds/" target="_blank">
Télécharger le flux OPDS pour les nouveaux titres de Gutenberg.org
</a>

Il est également possible d'utiliser le menu contextuel (habituellement clic droit), de copier ce lien et de le coller dans le panneau Ajouter un OPDS de Thorium pour voir la magie opérer.

Les flux OPDS peuvent également être fournis sous forme de liens qui s'ouvrent directement dans Thorium. Exemple : 
<a href="opds://www.gutenberg.org/ebooks/search.opds/" target="_blank">Ouvrir le flux OPDS pour les nouveaux titres de Gutenberg.org</a>

Depuis Thorium 2.2, les flux OPDS peuvent être édités, ce qui permet de changer le nom ou de récupérer l'URL du flux.
{{< /alert>}}

<figure>
  <img src="/images/local-fr/thorium-opds-add.png" alt="">
  <figcaption class="icon">
  </figcaption>
</figure>

## Un exemple français : Gallica

*Note de la rédaction : en juillet 2023, le flux OPDS de Gallica ne permet plus d'accéder aux livres, nous espérons qu'il soit rapidement réparé.*

<p>Gallica propose un 
<a href="http://gallica.bnf.fr/opds" target="_blank">catalogue OPDS</a>
permettant de parcourir, télécharger et lire tous les livres de Gallica 
<a href="http://gallica.bnf.fr/ebooks" target="_blank">disponibles au format EPUB</a>.</p>

<p>Les liens suivants offrent 
<a href="http://gallica.bnf.fr/blog/27042017/retrouvez-tous-nos-livres-au-format-epub-dans-votre-application-de-lecture-favorite">
plus d'information sur le catalogue OPDS de Gallica</a> et 
<a href="https://gallica.bnf.fr/edit/und/a-propos">à propos de Gallica.</a></p> 

<figure>
  <img src="/images/local-fr/thorium-opds-gallica-1.png" alt="">
  <figcaption class="icon">
  </figcaption>
</figure>

## Exemple de flux OPDS avec des contenus protégés par LCP

Les flux dont le contenu est protégé doivent vous permettre de vous connecter directement depuis la page du catalogue Thorium. Le bouton ou l'accès à la connexion peut être différent selon le fournisseur du flux.

Le flux OPDS d'Archive.org permet de parcourir et d'emprunter des livres sous licence LCP. Un compte Archive.org est nécessaire, la page d'authentification s'ouvre lorsque vous sélectionnez un livre. Vous pouvez l'ajouter à Thorium à l'adresse suivante : <a href="opds://archive.org/services/opds">Ouvrir le flux OPDS d'Archive.org (en anglais)<a>

Vous pouvez utiliser [feedbooks OPDS](https://catalog.feedbooks.com/catalog/index.json) pour parcourir [le catalogue Feedbook](https://www.feedbooks.com/#). Une fois que vous avez sélectionné un livre, vous serez redirigé vers la page web où vous pourrez l'acheter. 

Feedbooks OPDS vous permet de vous connecter au flux du catalogue Thorium avec le bouton *Shelf* dans le coin supérieur droit. Tout livre acheté avec votre compte Feedbooks sera disponible au téléchargement directement à partir de l'interface du catalogue de flux de Thorium OPDS. 

À des fins de test, EDRLab fournit un flux avec trois publications gratuites sous protection LCP. Vous pouvez l'ajouter à Thorium à l'adresse suivante : <a href="opds://edrlab.org/public/feed/opds-lcp.json">Ajouter le flux OPDS public d'EDRLab.</a>

## Responsabilité des flux OPDS

Les flux OPDS et l'accès qu'ils donnent au contenu sont sous la responsabilité de l'éditeur du flux. Il en va de même pour les informations fournies par le flux.