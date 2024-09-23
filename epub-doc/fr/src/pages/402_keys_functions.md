---
title: Fonctions des touches
role: 
draft: false
---

## Fonctions des touches

::: infos Informations

La liste de définitions suivante donne pour chaque fonction : le Nom, le Code, une définition et le raccourci clavier par défaut.

Concernant les conventions des touches du clavier, la touche [Maj]{.kbd} est représentée par une flèche vide pointant vers le haut sur certains claviers ; la touche [Ctrl]{.kbd} est remplacée par la touche [Cmd]{.kbd} sur les claviers Mac. :::

Créer une annotation ( `AnnotationsCreate` ). [Maj]{.kbd} + [Ctrl]{.kbd} + [Alt]{.kbd} + [A]{.kbd} : Marquez le texte sélectionné et placez le focus sur la zone de l'éditeur d'annotations.

Créer une annotation rapide ( `AnnotationsCreateQuick` ). [Maj]{.kbd} + [Ctrl]{.kbd} + [Alt]{.kbd} + [Q]{.kbd} : Marquer le texte sélectionné sans autre action.

Basculer l'affichage des annotations dans les marges ( `AnnotationsToggleMargin` ). [Maj]{.kbd} + [Ctrl]{.kbd} + [Alt]{.kbd} + [Z]{.kbd} : Bascule entre le texte marqué en surbrillance et un marqueur de marge moins invasif indiquant simplement qu'une annotation est présente sur la ligne.

Contenu principal ( `FocusMain` ). [Ctrl]{.kbd} + [F10]{.kbd} : dans les fenêtres du lecteur et de la bibliothèque, déplace le focus du clavier vers le point de repère de la zone « principale » (dans la vue du lecteur, c'est juste avant le cadre qui affiche le contenu de la publication)

```{=html}
<!-- -->
```

Barre d'outils ( `FocusToolbar` ). [Ctrl]{.kbd} + [t]{.kbd} : dans les fenêtres de lecture et de bibliothèque, déplace le focus du clavier vers la barre d'outils horizontale supérieure, immédiatement avant le lien « ignorer » (qui déplace lui-même le focus vers le point de repère de la zone « principale »)

```{=html}
<!-- -->
```

Navigation ( `FocusReaderNavigation` ). [Ctrl]{.kbd} + [n]{.kbd} : dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau de navigation (table des matières, signets, etc.)

```{=html}
<!-- -->
```

Table des matières ( `FocusReaderNavigationTOC` ). [Maj]{.kbd} + [Ctrl]{.kbd} + [n]{.kbd} : dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau de navigation, mais plus spécifiquement dans la table des matières, et si possible au niveau du titre détecté / le plus proche du lieu de lecture.

```{=html}
<!-- -->
```

Accéder à la page ( `FocusReaderGotoPage` ). [Maj]{.kbd} + [Ctrl]{.kbd} + [p]{.kbd} : dans la fenêtre du lecteur, déplace le focus du clavier vers la section « Accéder à la page » dans le panneau de navigation

```{=html}
<!-- -->
```

Paramètres du lecteur ( `FocusReaderSettings` ). [Ctrl]{.kbd} + [s]{.kbd} : dans la fenêtre du lecteur, déplace le focus du clavier vers le panneau des paramètres (préférences utilisateur pour l'affichage du contenu de la publication)

```{=html}
<!-- -->
```

Signets ( `ToggleBookmark` ). [Ctrl]{.kbd} + [b]{.kbd} : dans la fenêtre du lecteur, basculer le signet (une notification est générée pour que les lecteurs d'écran annoncent le changement)

```{=html}
<!-- -->
```

Plein écran ( `ToggleReaderFullscreen` ). [Ctrl]{.kbd} + [F11]{.kbd} : dans la fenêtre du lecteur, basculer en plein écran

```{=html}
<!-- -->
```

Panneau d'informations sur le livre ( `OpenReaderInfo` ). [Ctrl]{.kbd} + [i]{.kbd} : dans la fenêtre du lecteur, boîte de dialogue modale contextuelle d'informations sur la publication (peut être utilisée dans une future version de Thorium pour une fonctionnalité similaire dans la fenêtre de la bibliothèque)

```{=html}
<!-- -->
```

où suis-je ( `OpenReaderInfoWhereAmI` ). [Maj]{.kbd} + [Ctrl]{.kbd} + [i]{.kbd} : dans la fenêtre du lecteur, boîte de dialogue modale contextuelle d'informations sur la publication avec focus clavier direct sur la section qui affiche la hiérarchie des titres et d'autres informations contextuelles pour l'emplacement de lecture actuel, telles que le saut de page précédent le plus proche, ainsi que l'index du document dans l'ordre de lecture (c'est la fonction « où suis-je »).

```{=html}
<!-- -->
```

où suis-je (notification rapide prise en charge par les lecteurs d'écran) ( `SpeakReaderInfoWhereAmI` ). [Maj]{.kbd} + [Ctrl]{.kbd} + [k]{.kbd}) : dans la fenêtre du lecteur, il s'agit de la fonctionnalité "où suis-je", comme ci-dessus, mais uniquement parlée via le lecteur d'écran TTS grâce à une région en direct ARIA avec un discours assertif qui interrompt la narration en cours.

```{=html}
<!-- -->
```

Fermer le livre ( `CloseReader` ). [Ctrl]{.kbd} + [w]{.kbd} : dans la fenêtre du lecteur, ferme la fenêtre et revient à la vue bibliothèque.

```{=html}
<!-- -->
```

Rechercher un livre ( `FocusSearch` ). [Ctrl]{.kbd} + [f]{.kbd} : dans la fenêtre de la bibliothèque, déplace le focus du clavier vers la saisie de texte de recherche de la bibliothèque locale ou du flux OPDS

```{=html}
<!-- -->
```

recherche dans un livre ( `FocusSearch` ). [Ctrl]{.kbd} + [f]{.kbd} : dans la fenêtre du lecteur, déplace le focus du clavier vers la saisie de texte de recherche à l'échelle de la publication

```{=html}
<!-- -->
```

résultat de recherche précédent ou suivant ( `SearchPrevious` , `SearchNext` )). [Maj]{.kbd} (facultatif) + [F3]{.kbd} : dans la fenêtre du lecteur, lorsque la saisie de texte de recherche à l'échelle de la publication est ouverte, trouve la correspondance précédente / suivante

```{=html}
<!-- -->
```

résultat de recherche précédent ou suivant ( `SearchPreviousAlt` , `SearchNextAlt` ). [Shift]{.kbd} (facultatif) + [Ctrl]{.kbd} + [G]{.kbd} / : idem que ci-dessus (raccourci clavier alternatif)

```{=html}
<!-- -->
```

Page OPDS suivante ( `NavigatePreviousOPDSPage` , `NavigateNextOPDSPage` ). [Ctrl]{.kbd} + [flèche gauche]{.kbd} ou [flèche droite]{.kbd} / : dans la fenêtre de la bibliothèque pour les flux OPDS, active les liens de pagination précédents ou suivants

```{=html}
<!-- -->
```

Page OPDS suivante ( `NavigatePreviousOPDSPageAlt / NavigateNextOPDSPageAlt` ). [Ctrl]{.kbd} + [virgule]{.kbd} ou [point]{.kbd} : idem que ci-dessus (raccourci clavier alternatif)

```{=html}
<!-- -->
```

[Ctrl]{.kbd} + [Maj]{.kbd} + [ALT]{.kbd} (sauf sur MacOS) + [flèche gauche]{.kbd} ou [flèche droite]{.kbd} : Chapitre précédent ou suivant ( `NavigatePreviousChapter` / `NavigateNextChapter` ) : dans la fenêtre de lecture, se déplacer vers le « chapitre » précédent ou suivant (élément de colonne vertébrale dans l'ordre de lecture de la publication). Notez que le focus du clavier est automatiquement déplacé vers le point de repère de la zone « principale », qui se trouve immédiatement avant le cadre qui affiche le contenu de la publication (tout comme lors du suivi / de l'activation d'un lien dans la table des matières).

```{=html}
<!-- -->
```

Chapitre précédent ou suivant ( `NavigatePreviousChapterAlt` `NavigateNextChapterAlt` ). [Ctrl]{.kbd} + [page suivante]{.kbd} ou [page précédente]{.kbd} : idem que ci-dessus (raccourci clavier alternatif)

```{=html}
<!-- -->
```

Page précédente ou suivante ( `NavigatePreviousPage` ). [flèche gauche]{.kbd} ou [flèche droite]{.kbd} / `NavigateNextPage` : dans la fenêtre du lecteur, passer à la « page » précédente ou suivante (ou à l'unité de défilement, si la pagination est désactivée)

```{=html}
<!-- -->
```

Page précédente ou suivante ( `NavigatePreviousPageAlt` ). [Ctrl]{.kbd} + [virgule]{.kbd} ou [point]{.kbd} / `NavigateNextPageAlt` ) : raccourci clavier alternatif pour la page précédente suivante. Dans la fenêtre du lecteur, passer à la « page » précédente ou suivante (ou à l'unité de défilement, si la pagination est désactivée)

```{=html}
<!-- -->
```

Début ou fin de la publication ( `NavigateToBegin` , `NavigateToEnd` ). [Ctrl]{.kbd} + [Home]{.kbd} ou [End]{.kbd} / : dans la fenêtre de lecture, va au début ou à la fin de la publication

```{=html}
<!-- -->
```

modificateur pour l'opération inverse : Historique précédent et Historique suivant( `NavigatePreviousHistory` / `NavigateNextHistory` ) : [Ctrl]{.kbd} + [backspace]{.kbd} avec [shift]{.kbd} : dans la fenêtre du lecteur, revenir en arrière ou en avant dans l'historique de navigation : Début ou Fin de la publication

```{=html}
<!-- -->
```

Audio précédent ( `AudioPrevious` ). [Ctrl]{.kbd} + [1]{.kbd} : dans la fenêtre du lecteur, appelle la commande « précédent » pour l'audio (TTS ou EPUB3 Media Overlays lus à haute voix, ou « rewind » pour les livres audio)

```{=html}
<!-- -->
```

Lire ou mettre en pause l'audio ( `AudioPlayPause` ). [Ctrl]{.kbd} + [2]{.kbd} : dans la fenêtre du lecteur, appelle les commandes de basculement « lecture » ou « pause » pour l'audio (TTS ou EPUB3 Media Overlays readaloud)

```{=html}
<!-- -->
```

Audio suivant ( `AudioNext` ). [Ctrl]{.kbd} + [3]{.kbd} : dans la fenêtre du lecteur, appelle la commande « suivant » pour l'audio (TTS ou EPUB3 Media Overlays lus à voix haute, ou « avancer » pour les livres audio)

```{=html}
<!-- -->
```

Arrêter l'audio ( `AudioStop` ). [Ctrl]{.kbd} + [4]{.kbd} : dans la fenêtre du lecteur, appelle la commande « stop » pour l'audio (TTS ou EPUB3 Media Overlays lus à haute voix, ou « pause » pour les livres audio)
