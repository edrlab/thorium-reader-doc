---
title: "Raccourcis clavier"
description: ""
draft: false
weight: 402
toc: false
---

{{< hint info >}}
Information

La touche <kbd>Shift</kbd> est marquée <kbd>Maj</kbd> sur certains claviers, 
ou être indiquée par une fléche vide pointant vers le haut : 
<kbd><b>&#x21E7;</b></kbd>. 
{{< /hint >}}


<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>F10</kbd> : contenu (<code>FocusMain</code>) </dt>
 <dd> dans les fenêtres du lecteur et de la bibliothèque, déplace le focus du 
 clavier sur le point de repère de la zone "principale" (dans la vue du lecteur, 
 c'est juste avant le cadre qui affiche le contenu de la publication).
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>t</kbd> : barre d'outils (<code>FocusToolbar</code>) </dt>
 <dd> dans les fenêtres de lecteur et de bibliothèque, déplace le focus du 
 clavier sur la barre d'outils horizontale supérieure, immédiatement avant le 
 lien "skip" (qui lui-même déplace le focus sur le repère de la zone "principale")
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>n</kbd> : menu de navigation (<code>FocusReaderNavigation</code>) </dt>
 <dd> dans la fenêtre du lecteur, déplace le focus du clavier sur le panneau de 
 navigation (table des matières, signets, etc.)
 </dd>
</dl>
<dl>
 <dt> <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>n</kbd> : table des matières (<code>FocusReaderNavigationTOC</code>) </dt>
 <dd> dans la fenêtre de lecture, déplace le focus du clavier sur le panneau de 
 navigation, mais plus spécifiquement dans la table des matières, et si 
 possible au niveau de la rubrique détectée / la plus proche du lieu de lecture.
 </dd>
</dl>
<dl>
 <dt> <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>p</kbd> : menu des pages (<code>FocusReaderGotoPage</code>) </dt>
 <dd> dans la fenêtre de lecture, déplace le focus du clavier sur la section 
 `Aller à la page` du panneau de navigation.
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>s</kbd> : paramétres de lecture (<code>FocusReaderSettings</code>) </dt>
 <dd> dans la fenêtre du lecteur, déplace le focus du clavier sur le panneau 
 des paramètres (préférences de l'utilisateur pour l'affichage du contenu de 
 la publication).
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>b</kbd> : ajout ou suppression de Marque-page (<code>ToggleBookmark</code>) </dt>
 <dd> dans la fenêtre du lecteur, bascule le signet (une notification est 
 produite pour que les lecteurs d'écran annoncent le changement)
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>F11</kbd> : plein écran (<code>ToggleReaderFullscreen</code>) </dt>
 <dd> dans la fenêtre du lecteur, bascule en mode plein écran.
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>i</kbd> : fiche livre (<code>OpenReaderInfo</code>) </dt>
 <dd> dans la fenêtre du lecteur, fenêtre modale d'information sur la 
 publication (peut être utilisé dans la future version de Thorium pour une 
 fonction similaire dans la fenêtre de la bibliothèque)
 </dd>
</dl>
<dl>
 <dt> <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>i</kbd> : où suis-je ? (<code>OpenReaderInfoWhereAmI</code>) </dt>
 <dd> dans la fenêtre du lecteur, fenêtre modale d'information sur la 
 publication avec un focus direct sur la section qui affiche la piste 
 hiérarchique des titres et d'autres informations contextuelles pour 
 l'emplacement actuel de la lecture, comme le saut de page précédent le plus 
 proche, ainsi que l'index du document dans l'ordre de lecture 
 (c'est la fonctionnalité `où suis-je`).
 </dd>
</dl>
<dl>
 <dt> <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>k</kbd> : 
 où suis-je (audio seulement) (<code>SpeakReaderInfoWhereAmI</code>) </dt>
 <dd> dans la fenêtre du lecteur, il s'agit de la fonction "où suis-je", 
 comme ci-dessus, mais uniquement prononcée par le lecteur d'écran TTS grâce 
 à une région ARIA en direct avec une parole affirmée qui interrompt la 
 narration en cours.
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>w</kbd> : fermer la fenêtre (<code>CloseReader</code>) 
 </dt>
 <dd> dans la fenêtre du lecteur, ferme la fenêtre et revient à la vue de la bibliothèque.
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>f</kbd> : rechercher (<code>FocusSearch</code>) </dt>
 <dd> dans la fenêtre de la bibliothèque, déplace le focus du clavier sur le 
 texte de recherche de la bibliothèque locale ou du flux OPDS.
 </dd>
 <dd> dans la fenêtre du lecteur, déplace le focus du clavier sur le texte de 
 recherche de la publication.
 </dd>
</dl>
<dl>
 <dt> <kbd>Shift</kbd> (optionnel) + <kbd>F3</kbd> : rechercher suivant ou 
 précédent (<code>SearchPrevious / SearchNext</code>) </dt>
 <dd> dans la fenêtre du lecteur, lorsque la recherche dans toute la publication 
 est ouverte, trouve la correspondance précédente ou suivante.
 </dd>
</dl>
<dl>
 <dt> <kbd>Shift</kbd> (facultatif) + <kbd>Ctrl</kbd> + <kbd>G</kbd> 
 rechercher suivant ou précédent (<code>SearchPreviousAlt / SearchNextAlt</code>) 
 </dt>
 <dd> même chose que ci-dessus (raccourci clavier alternatif)
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>&larr;</kbd> ou <kbd>&rarr;</kbd> : 
 page de catalogue suivante ou précédente 
 (<code>NavigatePreviousOPDSPage / NavigateNextOPDSPage</code>) </dt>
 <dd> dans la fenêtre de bibliothèque pour les flux OPDS, active les liens 
 de pagination précédents ou suivants.
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>,</kbd> ou <kbd>.</kbd> page de catalogue suivante 
 ou précédente 
 (<code>NavigatePreviousOPDSPageAlt / NavigateNextOPDSPageAlt</code>) </dt>
 <dd> même chose que ci-dessus (raccourci clavier alternatif)
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ALT</kbd> (sauf sur MacOS) + 
 <kbd>&larr;</kbd> ou <kbd>&rarr;</kbd> : chapitre suivant ou précédent 
 (<code>NavigatePreviousChapter / NavigateNextChapter</code>) </dt>
 <dd> dans la fenêtre du lecteur, déplacement vers le "chapitre" précédent ou 
 suivant. Notez que le focus du clavier est automatiquement déplacé vers le 
 repère de la zone "principale", qui se trouve immédiatement avant le cadre qui 
 affiche le contenu de la publication (comme lorsqu'on suit / active un lien 
 dans la table des matières).
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>Page suivante (page down)</kbd> ou 
 <kbd>Page précédente (page up)</kbd> : chapitre suivant ou précédent 
 (<code>NavigatePreviousChapterAlt / NavigateNextChapterAlt</code>) </dt>
 <dd> même chose que ci-dessus (raccourci clavier alternatif)
 </dd>
</dl>
<dl>
 <dt> <kbd>&larr;</kbd> ou <kbd>&rarr;</kbd> : page suivante ou précédente 
 (<code>NavigatePreviousPage / NavigateNextPage</code>) </dt>
 <dd> dans la fenêtre du lecteur, déplacement vers la "page" précédente ou 
 suivante (ou unité de défilement, si la pagination est désactivée)
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>,</kbd> ou <kbd>.</kbd> : page suivante ou 
 précédente (<code>NavigatePreviousPageAlt / NavigateNextPageAlt</code>) </dt>
 <dd> même chose que ci-dessus (raccourci clavier alternatif)
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>Début</kbd> ou <kbd>Fin</kbd> : Début ou Fin 
 (<code>NavigateToBegin / NavigateToEnd</code>) </dt>
 <dd> dans la fenêtre du lecteur, va au début ou à la fin de la publication.
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>Retour Arrière</kbd>Élèment d'historique de navigation précédent (`NavigatePreviousHistory`):</dt>
 <dd>dans la fenêtre de lecture, permet revenir en arrière dans l'historique de navigation
 </dd>
 </dl>
 <dl>
 <dt>  <kbd>Ctrl</kbd>  + <kbd>shift</kbd> + <kbd>Retour Arrière</kbd>  Élèment d'historique de navigation suivant (`NavigateNextHistory`)</dt>
 <dd>dans la fenêtre de lecture, permet revenir en arrière ou avancer dans l'historique de navigation.
 </dd>
 </dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>1</kbd> : précédent (audio) 
 (<code>AudioPrevious</code>) </dt>
 <dd> dans la fenêtre de lecture, appelle la commande "précédent" pour l'audio 
 (lecture à haute voix par TTS ou EPUB3 Media Overlays, ou "rembobinage" pour 
 les livres audio)
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>2</kbd> : pause ou reprise (audio) 
 (<code>AudioPlayPause</code>) </dt>
 <dd> dans la fenêtre du lecteur, appelle les commandes de lecture ou de pause 
 pour l'audio (TTS ou EPUB3 Media Overlays pour la lecture à voix haute).
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>3</kbd> : suivant (audio) (<code>AudioNext</code>) </dt>
 <dd> dans la fenêtre de lecture, appelle la commande "next" pour l'audio 
 (TTS ou EPUB3 Media Overlays readaloud, ou "forward" pour les livres audio).
 </dd>
</dl>
<dl>
 <dt> <kbd>Ctrl</kbd> + <kbd>4</kbd> : stop (audio) (<code>AudioStop</code>) </dt>
 <dd> dans la fenêtre de lecture, appelle la commande "stop" pour l'audio 
 (TTS ou EPUB3 Media Overlays readaloud, ou "pause" pour les livres audio).
 </dd>
</dl>