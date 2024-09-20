---
title: Keys functions
role:
draft: false
---

## Keys functions

::: info
Information

The following definition list gives for each function: the Name, the
Code, a definition and the Default keyboard shortcut.

Regarding Keyboard keys conventions, the [Shift]{.kbd} key is
represented by an empty arrow pointing up on some keyboards; the
[Ctrl]{.kbd} key is replaced by [Cmd]{.kbd} key on Mac keyboards.
:::

Create Annotation (`AnnotationsCreate`). [Shift]{.kbd} + [Ctrl]{.kbd} + [Alt]{.kbd} + [A]{.kbd}
:   Mark the selected texte and place focus on the annotation editor
    box.

Create Quick Annotation (`AnnotationsCreateQuick`). [Shift]{.kbd} + [Ctrl]{.kbd} + [Alt]{.kbd} + [Q]{.kbd}
:   Mark the selected texte without further action.

Toggle Display of Annotations in margins(`AnnotationsToggleMargin`). [Shift]{.kbd} + [Ctrl]{.kbd} + [Alt]{.kbd} + [Z]{.kbd}
:   Toggles between marked text highlighted and a less invasive margin
    marker just indicating that an annotation is present on the line.

Main content (`FocusMain`). [Ctrl]{.kbd} + [F10]{.kbd}
:   in reader and library windows, moves the keyboard focus to the
    \"main\" area landmark (in the reader view, this is immediately
    before the frame that displays publication content)

```{=html}
<!-- -->
```

Toolbar (`FocusToolbar`). [Ctrl]{.kbd} + [t]{.kbd}
:   in reader and library windows, moves the keyboard focus to the top
    horizontal toolbar, immediately before the \"skip\" link (which
    itself moves focus to the \"main\" area landmark)

```{=html}
<!-- -->
```

Navigation (`FocusReaderNavigation`). [Ctrl]{.kbd} + [n]{.kbd}
:   in reader window, moves the keyboard focus to the navigation panel
    (table of contents, bookmarks, etc.)

```{=html}
<!-- -->
```

Table Of Content (`FocusReaderNavigationTOC`). [Shift]{.kbd} + [Ctrl]{.kbd} + [n]{.kbd}
:   in reader window, moves the keyboard focus to the navigation panel,
    but more specifically into the table of contents, and if possible at
    the detected heading / closest to the reading location.

```{=html}
<!-- -->
```

Go to page (`FocusReaderGotoPage`). [Shift]{.kbd} + [Ctrl]{.kbd} + [p]{.kbd}
:   in reader window, moves the keyboard focus to the \"goto page\"
    section in the navigation panel

```{=html}
<!-- -->
```

Reader settings (`FocusReaderSettings`). [Ctrl]{.kbd} + [s]{.kbd}
:   in reader window, moves the keyboard focus to the settings panel
    (user preferences for displaying publication content)

```{=html}
<!-- -->
```

Bookmarks (`ToggleBookmark`). [Ctrl]{.kbd} + [b]{.kbd}
:   in reader window, toggle bookmark (a notification is produced so
    that screen readers announce the change)

```{=html}
<!-- -->
```

Fullscreen (`ToggleReaderFullscreen`). [Ctrl]{.kbd} + [F11]{.kbd}
:   in reader window, toggle fullscreen

```{=html}
<!-- -->
```

Book information panel (`OpenReaderInfo`). [Ctrl]{.kbd} + [i]{.kbd}
:   in reader window, publication info popup modal dialog (may be used
    in future Thorium version for similar feature in library window)

```{=html}
<!-- -->
```

where am I (`OpenReaderInfoWhereAmI`). [Shift]{.kbd} + [Ctrl]{.kbd} + [i]{.kbd}
:   in reader window, publication info popup modal dialog with direct
    keyboard focus on section that displays the headings hierarchy trail
    and other contextual information for the current reading location,
    such as nearest preceding page break, as well as document index in
    the reading order (this is the \"where am I\" feature).

```{=html}
<!-- -->
```

where am I (quick notification supported by Screen readers) (`SpeakReaderInfoWhereAmI`). [Shift]{.kbd} + [Ctrl]{.kbd} + [k]{.kbd})
:   in reader window, this is the \"where am I\" feature, just as above,
    but only spoken via screen reader TTS thanks to an ARIA live region
    with assertive speech which interrupts the current narration.

```{=html}
<!-- -->
```

Close the book (`CloseReader`). [Ctrl]{.kbd} + [w]{.kbd}
:   in reader window, closes the window and returns to the library view.

```{=html}
<!-- -->
```

Search a book (`FocusSearch`). [Ctrl]{.kbd} + [f]{.kbd}
:   in library window, moves the keyboard focus to the search text input
    of local bookshelf or OPDS feed

```{=html}
<!-- -->
```

search into a book (`FocusSearch`). [Ctrl]{.kbd} + [f]{.kbd}
:   in reader window, moves the keyboard focus to the publication-wide
    search text input

```{=html}
<!-- -->
```

previous or next search result (`SearchPrevious`, `SearchNext`)). [Shift]{.kbd} (optional) + [F3]{.kbd}
:   in reader window, when the publication-wide search text input is
    open, finds the previous / next match

```{=html}
<!-- -->
```

previous or next search result (`SearchPreviousAlt`, `SearchNextAlt`). [Shift]{.kbd} (optional) + [Ctrl]{.kbd} + [G]{.kbd} /
:   same as above (alternative keyboard shortcut)

```{=html}
<!-- -->
```

Next OPDS page (`NavigatePreviousOPDSPage`, `NavigateNextOPDSPage`). [Ctrl]{.kbd} + [left arrow]{.kbd} or [right arrow]{.kbd} /
:   in library window for OPDS feeds, activates the previous or next
    pagination links

```{=html}
<!-- -->
```

Next OPDS page (`NavigatePreviousOPDSPageAlt / NavigateNextOPDSPageAlt`). [Ctrl]{.kbd} + [comma]{.kbd} or [period]{.kbd}
:   same as above (alternative keyboard shortcut)

```{=html}
<!-- -->
```

[Ctrl]{.kbd} + [Shift]{.kbd} + [ALT]{.kbd} (except on MacOS) + [left arrow]{.kbd} or [right arrow]{.kbd}: Previous or next chapter (`NavigatePreviousChapter` / `NavigateNextChapter`)
:   in reader window, move to previous or next \"chapter\" (spine item
    in the reading order of the publication). Note that the keyboard
    focus is automatically moved to the \"main\" area landmark, which is
    immediately before the frame that displays publication content (just
    like when following / activating a link in the table of contents).

```{=html}
<!-- -->
```

Previous or next chapter (`NavigatePreviousChapterAlt` `NavigateNextChapterAlt`). [Ctrl]{.kbd} + [page down]{.kbd} or [page up]{.kbd}
:   same as above (alternative keyboard shortcut)

```{=html}
<!-- -->
```

Previous or next page (`NavigatePreviousPage`). [left arrow]{.kbd} or [right arrow]{.kbd} / `NavigateNextPage`
:   in reader window, move to previous or next \"page\" (or scroll unit,
    if pagination is disabled)

```{=html}
<!-- -->
```

Previous or next page (`NavigatePreviousPageAlt`). [Ctrl]{.kbd} + [comma]{.kbd} or [period]{.kbd} / `NavigateNextPageAlt`)
:   Alternative keyboard shortcut for previous next page. In reader
    window, move to previous or next \"page\" (or scroll unit, if
    pagination is disabled)

```{=html}
<!-- -->
```

Beginning or End of the publication (`NavigateToBegin`, `NavigateToEnd`). [Ctrl]{.kbd} + [Home]{.kbd} or [End]{.kbd} /
:   in reader window, goes to the beginning or the end of the
    publication

```{=html}
<!-- -->
```

modifier for the inverse operation: Previous History and Next History(`NavigatePreviousHistory` / `NavigateNextHistory`): [Ctrl]{.kbd} + [backspace]{.kbd} with [shift]{.kbd}
:   in reader window, go back or forward in the navigation history:
    Beginning or End of the publication

```{=html}
<!-- -->
```

Previous audio (`AudioPrevious`). [Ctrl]{.kbd} + [1]{.kbd}
:   in reader window, calls the \"previous\" command for audio (TTS or
    EPUB3 Media Overlays readaloud, or \"rewind\" for audiobooks)

```{=html}
<!-- -->
```

Play or pause audio (`AudioPlayPause`). [Ctrl]{.kbd} + [2]{.kbd}
:   in reader window, calls the \"play\" or \"pause\" toggle commands
    for audio (TTS or EPUB3 Media Overlays readaloud)

```{=html}
<!-- -->
```

Next audio (`AudioNext`). [Ctrl]{.kbd} + [3]{.kbd}
:   in reader window, calls the \"next\" command for audio (TTS or EPUB3
    Media Overlays readaloud, or \"forward\" for audiobooks)

```{=html}
<!-- -->
```

Stop audio (`AudioStop`). [Ctrl]{.kbd} + [4]{.kbd}
:   in reader window, calls the \"stop\" command for audio (TTS or EPUB3
    Media Overlays readaloud, or \"pause\" for audiobooks)
