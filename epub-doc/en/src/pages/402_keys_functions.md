---
title: Keys functions
role: doc-chapter
epubtype: chapter
draft: false
---

## Keys functions

The following definition list gives for each function: the Name, the
Code, a definition and the Default keyboard shortcut. 

Each key combination can be changed in Thorium Setting Panel.

Regarding Keyboard keys conventions, the <kbd>Shift</kbd> key is
represented by an empty arrow pointing up on some keyboards; the
<kbd>Ctrl</kbd> key is replaced by <kbd>Cmd</kbd> key on Mac keyboards.

|Name|Key|definition|
|---|---|---|
|Create Annotation (`AnnotationsCreate`). |<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd>|:   Mark the selected texte and place focus on the annotation editor box.|
|Create Quick Annotation (`AnnotationsCreateQuick`). |<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd>|:   Mark the selected texte without further action.|
|Toggle Display of Annotations in margins(`AnnotationsToggleMargin`). |<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Z</kbd>|:   Toggles between marked text highlighted and a less invasive margin marker just indicating that an annotation is present on the line.|
|Main content (`FocusMain`). |<kbd>Ctrl</kbd> + <kbd>F10</kbd>|:   in reader and library windows, moves the keyboard focus to the  "main " area landmark (in the reader view, this is immediately before the frame that displays publication content)|
|Toolbar (`FocusToolbar`). |<kbd>Ctrl</kbd> + <kbd>T</kbd>|:   in reader and library windows, moves the keyboard focus to the top horizontal toolbar, immediately before the  "skip " link (which itself moves focus to the  "main " area landmark)
|Navigation (`FocusReaderNavigation`). |<kbd>Ctrl</kbd> + <kbd>n</kbd>| :in reader window, moves the keyboard focus to the navigation panel (table of contents, bookmarks, etc.)
|Table Of Content (`FocusReaderNavigationTOC`). |<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>n</kbd>| :in reader window, moves the keyboard focus to the navigation panel, but more specifically into the table of contents, and if possible at the detected heading / closest to the reading location.|
|Go to page (`FocusReaderGotoPage`). |<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>p</kbd>| :in reader window, moves the keyboard focus to the  "goto page " section in the navigation panel|
|Reader settings (`FocusReaderSettings`). |<kbd>Ctrl</kbd> + <kbd>s</kbd>| :in reader window, moves the keyboard focus to the settings panel (user preferences for displaying publication content)|
|Bookmarks (`ToggleBookmark`). |<kbd>Ctrl</kbd> + <kbd>B</kbd>|:   in reader window, toggle bookmark (a notification is produced so that screen readers announce the change)|
|Fullscreen (`ToggleReaderFullscreen`). |<kbd>Ctrl</kbd> + <kbd>F11</kbd>|:   in reader window, toggle fullscreen|
|Book information panel (`OpenReaderInfo`). |<kbd>Ctrl</kbd> + <kbd>i</kbd>|:   in reader window, publication info popup modal dialog (may be used in future Thorium version for similar feature in library window)|
|where am I (`OpenReaderInfoWhereAmI`). |<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>i</kbd>|:   in reader window, publication info popup modal dialog with direct keyboard focus on section that displays the headings hierarchy trail and other contextual information for the current reading location, such as nearest preceding page break, as well as document index in the reading order (this is the  "where am I " feature).|
|where am I (quick notification supported by Screen readers) (`SpeakReaderInfoWhereAmI`). |<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>k</kbd>)| :in reader window, this is the  "where am I " feature, just as above, but only spoken via screen reader TTS thanks to an ARIA live region with assertive speech which interrupts the current narration.|
|Close the book (`CloseReader`). |<kbd>Ctrl</kbd> + <kbd>w</kbd>|:   in reader window, closes the window and returns to the library view.|
|Search a book (`FocusSearch`). |<kbd>Ctrl</kbd> + <kbd>F</kbd>|:   in library window, moves the keyboard focus to the search text input of local bookshelf or OPDS feed |
|search into a book (`FocusSearch`). |<kbd>Ctrl</kbd> + <kbd>F</kbd>|:   in reader window, moves the keyboard focus to the publication-wide search text input |
|previous or next search result (`SearchPrevious`, `SearchNext`)). |<kbd>Shift</kbd> (optional) + <kbd>F3</kbd>| :in reader window, when the publication-wide search text input is open, finds the previous / next match |
|previous or next search result (`SearchPreviousAlt`, `SearchNextAlt`). |<kbd>Shift</kbd> (optional) + <kbd>Ctrl</kbd> + <kbd>G</kbd> /| :same as above (alternative keyboard shortcut) |
|Next OPDS page (`NavigatePreviousOPDSPage`, `NavigateNextOPDSPage`). |<kbd>Ctrl</kbd> + <kbd>Left arrow</kbd> or <kbd>Right arrow</kbd> /| :in library window for OPDS feeds, activates the previous or next pagination links |
|Next OPDS page (`NavigatePreviousOPDSPageAlt / NavigateNextOPDSPageAlt`). |<kbd>Ctrl</kbd> + <kbd>comma</kbd> or <kbd>period</kbd>| :same as above (alternative keyboard shortcut) |
|<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> (except on MacOS) + <kbd>Left arrow</kbd> or <kbd>Right arrow</kbd> |: Previous or next chapter (`NavigatePreviousChapter` / `NavigateNextChapter`)| :in reader window, move to previous or next  "chapter " (spine item in the reading order of the publication). Note that the keyboard focus is automatically moved to the  "main " area landmark, which is immediately before the frame that displays publication content (just like when following / activating a link in the table of contents).|Previous or next chapter (`NavigatePreviousChapterAlt` `NavigateNextChapterAlt`). |<kbd>Ctrl</kbd> + <kbd>Page down</kbd> or <kbd>Page up</kbd>| :same as above (alternative keyboard shortcut) |
|Previous or next page (`NavigatePreviousPage`). |<kbd>Left arrow</kbd> or <kbd>Right arrow</kbd> / `NavigateNextPage`| :in reader window, move to previous or next  "page " (or scroll unit, if pagination is disabled) |
|Previous or next page (`NavigatePreviousPageAlt`). |<kbd>Ctrl</kbd> + <kbd>comma</kbd> or <kbd>period</kbd> / `NavigateNextPageAlt`)| :Alternative keyboard shortcut for previous next page. In reader window, move to previous or next  "page " (or scroll unit, if pagination is disabled) |
|Beginning or End of the publication (`NavigateToBegin`, `NavigateToEnd`). |<kbd>Ctrl</kbd> + <kbd>Home</kbd> or <kbd>End</kbd> /| :in reader window, goes to the beginning or the end of the publication |
|modifier for the inverse operation: Previous History and Next History(`NavigatePreviousHistory` / `NavigateNextHistory`)|: <kbd>Ctrl</kbd> + <kbd>backspace</kbd> with <kbd>Shift</kbd>|:   in reader window, go back or forward in the navigation history: Beginning or End of the publication |
|Previous audio (`AudioPrevious`). |<kbd>Ctrl</kbd> + <kbd>1</kbd>|:   in reader window, calls the  "previous " command for audio (TTS or EPUB3 Media Overlays readaloud, or  "rewind " for audiobooks) |
|Play or pause audio (`AudioPlayPause`). |<kbd>Ctrl</kbd> + <kbd>2</kbd>|:   in reader window, calls the  "play " or  "pause " toggle commands for audio (TTS or EPUB3 Media Overlays readaloud) |
|Next audio (`AudioNext`). |<kbd>Ctrl</kbd> + <kbd>3</kbd>|:   in reader window, calls the  "next " command for audio (TTS or EPUB3 Media Overlays readaloud, or  "forward " for audiobooks) |
|Stop audio (`AudioStop`). |<kbd>Ctrl</kbd> + <kbd>4</kbd>| :in reader window, calls the  "stop " command for audio (TTS or EPUB3 Media Overlays readaloud, or  "pause " for audiobooks)
