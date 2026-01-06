---
title: Raccourcis clavier
description: ''
draft: true
weight: '402'
toc: false
---

{{&lt; info alerte &gt;}} Informations

La touche <kbd>Shift</kbd> est représentée par une flèche vide pointant vers le haut sur certains claviers : <kbd><b>⇧</b></kbd> .

La touche <kbd>Ctrl</kbd> est remplacée par la touche <kbd>Cmd</kbd> sur les claviers Mac.

{{&lt; /alerte&gt;}}

<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>F10</kbd> : Contenu principal (`FocusMain`)</dt>
 <dd>dans les fenêtres du lecteur et de la bibliothèque, déplace le focus du clavier vers le point de repère de la zone « principale » (dans la vue du lecteur, c'est juste avant le cadre qui affiche le contenu de la publication)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>t</kbd> : Barre d'outils (`FocusToolbar`)</dt>
 <dd>dans les fenêtres du lecteur et de la bibliothèque, déplace le focus du clavier vers la barre d'outils horizontale supérieure, immédiatement avant le lien « ignorer » (qui déplace lui-même le focus vers le point de repère de la zone « principale »)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>n</kbd> : Navigation (`FocusReaderNavigation`)</dt>
 <dd>dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau de navigation (table des matières, signets, etc.)  </dd>
</dl>
<dl>
 <dt>  <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>n</kbd> : Table des matières (`FocusReaderNavigationTOC`)</dt>
 <dd>dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau de navigation, mais plus précisément dans la table des matières, et si possible sur le titre détecté / le plus proche de l'emplacement de lecture.  </dd>
</dl>
<dl>
 <dt>  <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>p</kbd> : Aller à la page (`FocusReaderGotoPage`)</dt>
 <dd>dans la fenêtre du lecteur, déplace le focus du clavier vers la section « aller à la page » dans le panneau de navigation  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>s</kbd> : Paramètres du lecteur (`FocusReaderSettings`)</dt>
 <dd>dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau des paramètres (préférences de l'utilisateur pour l'affichage du contenu de la publication)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>b</kbd> : Signets (`ToggleBookmark`)</dt>
 <dd>dans la fenêtre du lecteur, basculer le signet (une notification est produite pour que les lecteurs d'écran annoncent le changement)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>F11</kbd> : Plein écran (`ToggleReaderFullscreen`)</dt>
 <dd>dans la fenêtre du lecteur, basculer en plein écran  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>i</kbd> : Panneau d'informations sur le livre (`OpenReaderInfo`)</dt>
 <dd>dans la fenêtre du lecteur, boîte de dialogue modale contextuelle d'informations sur la publication (peut être utilisée dans une future version de Thorium pour une fonctionnalité similaire dans la fenêtre de la bibliothèque)  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>i</kbd> : où suis-je (`OpenReaderInfoWhereAmI`)</dt>
 <dd>dans la fenêtre du lecteur, boîte de dialogue modale contextuelle d'informations sur la publication avec focus clavier direct sur la section qui affiche la hiérarchie des titres et d'autres informations contextuelles pour l'emplacement de lecture actuel, telles que le saut de page précédent le plus proche, ainsi que l'index du document dans l'ordre de lecture (il s'agit de la fonction « où suis-je »).  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>k</kbd> : où suis-je (notification rapide prise en charge par les lecteurs d'écran) (`SpeakReaderInfoWhereAmI`)</dt>
 <dd>dans la fenêtre du lecteur, il s'agit de la fonction « où suis-je », comme ci-dessus, mais uniquement parlée via le lecteur d'écran TTS grâce à une région en direct ARIA avec un discours assertif qui interrompt la narration en cours.  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>w</kbd> : Fermer le livre (`CloseReader`)</dt>
 <dd>dans la fenêtre du lecteur, ferme la fenêtre et revient à la vue de la bibliothèque.  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>f</kbd> : Rechercher un livre (`FocusSearch`)</dt>
 <dd>dans la fenêtre de la bibliothèque, déplace le focus du clavier vers la saisie de texte de recherche de la bibliothèque locale ou du flux OPDS  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>f</kbd> : rechercher dans un livre (`FocusSearch`)</dt>
 <dd>dans la fenêtre du lecteur, déplace le focus du clavier vers la saisie de texte de recherche à l'échelle de la publication  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> (facultatif) + <kbd>F3</kbd> : résultat de recherche précédent ou suivant (`SearchPrevious` / `SearchNext`)</dt>
 <dd>dans la fenêtre du lecteur, lorsque la saisie de texte de recherche à l'échelle de la publication est ouverte, trouve la correspondance précédente/suivante  </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> (facultatif) + <kbd>Ctrl</kbd> + <kbd>G</kbd> : résultat de recherche précédent ou suivant (`SearchPreviousAlt` / `SearchNextAlt`)</dt>
 <dd>idem que ci-dessus (raccourci clavier alternatif)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>←</kbd> ou <kbd>→</kbd> : Page OPDS suivante (`NavigatePreviousOPDSPage` / `NavigateNextOPDSPage`)</dt>
 <dd>dans la fenêtre de la bibliothèque pour les flux OPDS, active les liens de pagination précédents ou suivants  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>virgule</kbd> ou <kbd>point</kbd> : page OPDS suivante (`NavigatePreviousOPDSPageAlt / NavigateNextOPDSPageAlt`)</dt>
 <dd>idem que ci-dessus (raccourci clavier alternatif)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ALT</kbd> (sauf sur MacOS) + <kbd>←</kbd> ou <kbd>→</kbd> : Chapitre précédent ou suivant (`NavigatePreviousChapter` / `NavigateNextChapter`)</dt>
 <dd>dans la fenêtre du lecteur, passer au « chapitre » précédent ou suivant (élément de la colonne vertébrale dans l'ordre de lecture de la publication). Notez que le focus du clavier est automatiquement déplacé vers le point de repère de la zone « principale », qui se trouve immédiatement avant le cadre qui affiche le contenu de la publication (tout comme lorsque vous suivez/activez un lien dans la table des matières).  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>page suivante</kbd> ou <kbd>page précédente</kbd> : Chapitre précédent ou suivant (`NavigatePreviousChapterAlt` / `NavigateNextChapterAlt`)</dt>
 <dd>idem que ci-dessus (raccourci clavier alternatif)  </dd>
</dl>
<dl>
 <dt>  <kbd>←</kbd> ou <kbd>→</kbd> : Page précédente ou suivante (`NavigatePreviousPage` / `NavigateNextPage`)</dt>
 <dd>dans la fenêtre du lecteur, passer à la « page » précédente ou suivante (ou à l'unité de défilement, si la pagination est désactivée)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>virgule</kbd> ou <kbd>point</kbd> : Page précédente ou suivante (`NavigatePreviousPageAlt` / `NavigateNextPageAlt`)</dt>
 <dd>idem que ci-dessus (raccourci clavier alternatif)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>Accueil</kbd> ou <kbd>Fin</kbd> : Début ou Fin de la publication (`NavigateToBegin` / `NavigateToEnd`)</dt>
 <dd>dans la fenêtre du lecteur, va au début ou à la fin de la publication  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>retour arrière</kbd> avec modificateur <kbd>Maj</kbd> pour l'opération inverse : Historique précédent et historique suivant (`NavigatePreviousHistory` / `NavigateNextHistory`) : </dt>
 <dd>dans la fenêtre du lecteur, revenir en arrière ou en avant dans l'historique de navigation : Début ou Fin de la publication   </dd>
</dl>

<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>1</kbd> : Audio précédent (`AudioPrevious`)</dt>
 <dd>dans la fenêtre du lecteur, appelle la commande « précédent » pour l'audio (TTS ou EPUB3 Media Overlays lus à haute voix, ou « rewind » pour les livres audio)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>2</kbd> : Lire ou mettre en pause l'audio (`AudioPlayPause`)</dt>
 <dd>dans la fenêtre du lecteur, appelle les commandes de basculement « lecture » ou « pause » pour l'audio (TTS ou EPUB3 Media Overlays readaloud)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>3</kbd> : Audio suivant (`AudioNext`)</dt>
 <dd>dans la fenêtre du lecteur, appelle la commande « suivant » pour l'audio (TTS ou EPUB3 Media Overlays lus à haute voix, ou « avancer » pour les livres audio)  </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd> + <kbd>4</kbd> : Arrêter l'audio (`AudioStop`)</dt>
 <dd>dans la fenêtre du lecteur, appelle la commande « stop » pour l'audio (TTS ou EPUB3 Media Overlays readaloud, ou « pause » pour les livres audio)  </dd>
</dl>
