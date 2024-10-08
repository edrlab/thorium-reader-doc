---
title: Fonctions des touches
role: 
draft: false
---

## Fonctions des touches

 infos Informations

La liste de définitions suivante donne pour chaque fonction : le Nom, le Code, une définition et le raccourci clavier par défaut.

Concernant les conventions des touches du clavier, la touche <kbd>Maj</kbd> est représentée par une flèche vide pointant vers le haut sur certains claviers ; la touche <kbd>Ctrl</kbd> est remplacée par la touche <kbd>Cmd</kbd> sur les claviers Mac. 

Créer une annotation ( `AnnotationsCreate` ). <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd> : Marquez le texte sélectionné et placez le focus sur la zone de l'éditeur d'annotations.

Créer une annotation rapide ( `AnnotationsCreateQuick` ). <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd> : Marquer le texte sélectionné sans autre action.

Basculer l'affichage des annotations dans les marges ( `AnnotationsToggleMargin` ). <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Z</kbd> : Bascule entre le texte marqué en surbrillance et un marqueur de marge moins invasif indiquant simplement qu'une annotation est présente sur la ligne.

Contenu principal ( `FocusMain` ). <kbd>Ctrl</kbd> + <kbd>F10</kbd> : dans les fenêtres du lecteur et de la bibliothèque, déplace le focus du clavier vers le point de repère de la zone « principale » (dans la vue du lecteur, c'est juste avant le cadre qui affiche le contenu de la publication)

```{=html}
<!-- -->
```

Barre d'outils ( `FocusToolbar` ). <kbd>Ctrl</kbd> + <kbd>T</kbd> : dans les fenêtres de lecture et de bibliothèque, déplace le focus du clavier vers la barre d'outils horizontale supérieure, immédiatement avant le lien « ignorer » (qui déplace lui-même le focus vers le point de repère de la zone « principale »)

```{=html}
<!-- -->
```

Navigation ( `FocusReaderNavigation` ). <kbd>Ctrl</kbd> + <kbd>n</kbd> : dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau de navigation (table des matières, signets, etc.)

```{=html}
<!-- -->
```

Table des matières ( `FocusReaderNavigationTOC` ). <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>n</kbd> : dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau de navigation, mais plus spécifiquement dans la table des matières, et si possible au niveau du titre détecté / le plus proche du lieu de lecture.

```{=html}
<!-- -->
```

Accéder à la page ( `FocusReaderGotoPage` ). <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>p</kbd> : dans la fenêtre du lecteur, déplace le focus du clavier vers la section « Accéder à la page » dans le panneau de navigation

```{=html}
<!-- -->
```

Paramètres du lecteur ( `FocusReaderSettings` ). <kbd>Ctrl</kbd> + <kbd>s</kbd> : dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau des paramètres (préférences utilisateur pour l'affichage du contenu de la publication)

```{=html}
<!-- -->
```

Signets ( `ToggleBookmark` ). <kbd>Ctrl</kbd> + <kbd>B</kbd> : dans la fenêtre du lecteur, basculer le signet (une notification est générée pour que les lecteurs d'écran annoncent le changement)

```{=html}
<!-- -->
```

Plein écran ( `ToggleReaderFullscreen` ). <kbd>Ctrl</kbd> + <kbd>F11</kbd> : dans la fenêtre du lecteur, basculer en plein écran

```{=html}
<!-- -->
```

Panneau d'informations sur le livre ( `OpenReaderInfo` ). <kbd>Ctrl</kbd> + <kbd>i</kbd> : dans la fenêtre du lecteur, boîte de dialogue modale contextuelle d'informations sur la publication (peut être utilisée dans une future version de Thorium pour une fonctionnalité similaire dans la fenêtre de la bibliothèque)

```{=html}
<!-- -->
```

où suis-je ( `OpenReaderInfoWhereAmI` ). <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>i</kbd> : dans la fenêtre du lecteur, boîte de dialogue modale contextuelle d'informations sur la publication avec focus clavier direct sur la section qui affiche la hiérarchie des titres et d'autres informations contextuelles pour l'emplacement de lecture actuel, telles que le saut de page précédent le plus proche, ainsi que l'index du document dans l'ordre de lecture (c'est la fonction « où suis-je »).

```{=html}
<!-- -->
```

où suis-je (notification rapide prise en charge par les lecteurs d'écran) ( `SpeakReaderInfoWhereAmI` ). <kbd>Maj</kbd> + <kbd>Ctrl</kbd> + <kbd>k</kbd>) : dans la fenêtre du lecteur, il s'agit de la fonctionnalité "où suis-je", comme ci-dessus, mais uniquement parlée via le lecteur d'écran TTS grâce à une région en direct ARIA avec un discours assertif qui interrompt la narration en cours.

```{=html}
<!-- -->
```

Fermer le livre ( `CloseReader` ). <kbd>Ctrl</kbd> + <kbd>w</kbd> : dans la fenêtre du lecteur, ferme la fenêtre et revient à la vue bibliothèque.

```{=html}
<!-- -->
```

Rechercher un livre ( `FocusSearch` ). <kbd>Ctrl</kbd> + <kbd>F</kbd> : dans la fenêtre de la bibliothèque, déplace le focus du clavier vers la saisie de texte de recherche de la bibliothèque locale ou du flux OPDS

```{=html}
<!-- -->
```

recherche dans un livre ( `FocusSearch` ). <kbd>Ctrl</kbd> + <kbd>F</kbd> : dans la fenêtre du lecteur, déplace le focus du clavier vers la saisie de texte de recherche à l'échelle de la publication

```{=html}
<!-- -->
```

résultat de recherche précédent ou suivant ( `SearchPrevious` , `SearchNext` )). <kbd>Maj</kbd> (facultatif) + <kbd>F3</kbd> : dans la fenêtre du lecteur, lorsque la saisie de texte de recherche à l'échelle de la publication est ouverte, trouve la correspondance précédente / suivante

```{=html}
<!-- -->
```

résultat de recherche précédent ou suivant ( `SearchPreviousAlt` , `SearchNextAlt` ). <kbd>Shift</kbd> (facultatif) + <kbd>Ctrl</kbd> + <kbd>G</kbd> / : idem que ci-dessus (raccourci clavier alternatif)

```{=html}
<!-- -->
```

Page OPDS suivante ( `NavigatePreviousOPDSPage` , `NavigateNextOPDSPage` ). <kbd>Ctrl</kbd> + <kbd>←</kbd> ou <kbd>→</kbd> / : dans la fenêtre de la bibliothèque pour les flux OPDS, active les liens de pagination précédents ou suivants

```{=html}
<!-- -->
```

Page OPDS suivante ( `NavigatePreviousOPDSPageAlt / NavigateNextOPDSPageAlt` ). <kbd>Ctrl</kbd> + <kbd>,</kbd> ou <kbd>.</kbd> : idem que ci-dessus (raccourci clavier alternatif)

```{=html}
<!-- -->
```

<kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>Alt</kbd> (sauf sur MacOS) + <kbd>←</kbd> ou <kbd>→</kbd> : Chapitre précédent ou suivant ( `NavigatePreviousChapter` / `NavigateNextChapter` ) : dans la fenêtre de lecture, se déplacer vers le « chapitre » précédent ou suivant (élément de colonne vertébrale dans l'ordre de lecture de la publication). Notez que le focus du clavier est automatiquement déplacé vers le point de repère de la zone « principale », qui se trouve immédiatement avant le cadre qui affiche le contenu de la publication (tout comme lors du suivi / de l'activation d'un lien dans la table des matières).

```{=html}
<!-- -->
```

Chapitre précédent ou suivant ( `NavigatePreviousChapterAlt` `NavigateNextChapterAlt` ). <kbd>Ctrl</kbd> + <kbd>Page suivante</kbd> ou <kbd>Page précédente</kbd> : idem que ci-dessus (raccourci clavier alternatif)

```{=html}
<!-- -->
```

Page précédente ou suivante ( `NavigatePreviousPage` ). <kbd>←</kbd> ou <kbd>→</kbd> / `NavigateNextPage` : dans la fenêtre du lecteur, passer à la « page » précédente ou suivante (ou à l'unité de défilement, si la pagination est désactivée)

```{=html}
<!-- -->
```

Page précédente ou suivante ( `NavigatePreviousPageAlt` ). <kbd>Ctrl</kbd> + <kbd>,</kbd> ou <kbd>.</kbd> / `NavigateNextPageAlt` ) : raccourci clavier alternatif pour la page précédente suivante. Dans la fenêtre du lecteur, passer à la « page » précédente ou suivante (ou à l'unité de défilement, si la pagination est désactivée)

```{=html}
<!-- -->
```

Début ou fin de la publication ( `NavigateToBegin` , `NavigateToEnd` ). <kbd>Ctrl</kbd> + <kbd>Home</kbd> ou <kbd>End</kbd> / : dans la fenêtre de lecture, va au début ou à la fin de la publication

```{=html}
<!-- -->
```

modificateur pour l'opération inverse : Historique précédent et Historique suivant( `NavigatePreviousHistory` / `NavigateNextHistory` ) : <kbd>Ctrl</kbd> + <kbd>backspace</kbd> avec <kbd>Shift</kbd> : dans la fenêtre du lecteur, revenir en arrière ou en avant dans l'historique de navigation : Début ou Fin de la publication

```{=html}
<!-- -->
```

Audio précédent ( `AudioPrevious` ). <kbd>Ctrl</kbd> + <kbd>1</kbd> : dans la fenêtre du lecteur, appelle la commande « précédent » pour l'audio (TTS ou EPUB3 Media Overlays lus à haute voix, ou « rewind » pour les livres audio)

```{=html}
<!-- -->
```

Lire ou mettre en pause l'audio ( `AudioPlayPause` ). <kbd>Ctrl</kbd> + <kbd>2</kbd> : dans la fenêtre du lecteur, appelle les commandes de basculement « lecture » ou « pause » pour l'audio (TTS ou EPUB3 Media Overlays readaloud)

```{=html}
<!-- -->
```

Audio suivant ( `AudioNext` ). <kbd>Ctrl</kbd> + <kbd>3</kbd> : dans la fenêtre du lecteur, appelle la commande « suivant » pour l'audio (TTS ou EPUB3 Media Overlays lus à voix haute, ou « avancer » pour les livres audio)

```{=html}
<!-- -->
```

Arrêter l'audio ( `AudioStop` ). <kbd>Ctrl</kbd> + <kbd>4</kbd> : dans la fenêtre du lecteur, appelle la commande « stop » pour l'audio (TTS ou EPUB3 Media Overlays lus à haute voix, ou « pause » pour les livres audio)
