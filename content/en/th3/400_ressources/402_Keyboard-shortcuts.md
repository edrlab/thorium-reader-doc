---
title: "Keyboard shortcuts"
description: ""
draft: false
weight: 402
toc: false
---

{{< alert info >}}
Information

The <kbd>Shift</kbd> key is represented by an empty arrow pointing up on some keyboards: <kbd>
<b>&#x21E7;</b>
</kbd>. 

The <kbd>Ctrl</kbd> key is replaced by <kbd>Cmd</kbd> key on Mac keyboards.


{{< /alert>}}

<dl id="definitionList">
<dt>Create annotation (`AnnotationsCreate`)
<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>KeyA</kbd></dt>
<dd> When a text is selected, it will be marked as annotation and the annotation dialog box will open to allow additional text and select of color and stroke. 
</dd>
<dt>Quick create annotation (`AnnotationsCreateQuick`)
<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>KeyQ</kbd></dt>
<dd>
When a text is selected, it will be marked as annotation without opening the annotation dialog box
</dd>
<dt>Toggle annotation marks in the margin or in the text (`AnnotationsToggleMargin`)
<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>KeyZ</kbd></dt>
<dd>Changes the Annotations marks from the text to the margin or reverse.
</dd>
<dt>Next audio (`AudioNext`)
<kbd>Ctrl</kbd> + <kbd>Digit3</kbd></dt>
<dd> in reader window, calls the "next" command for audio (TTS or EPUB3 Media Overlays readaloud, or "forward" for audiobooks)
</dd>
<dt>Next audio Alternative (`AudioNextAlt`)
<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Digit3</kbd></dt>
<dd>
in reader window, calls the "next" command for audio (TTS or EPUB3 Media Overlays readaloud, or "forward" for audiobooks)
</dd>
<dt>Play or pause audio (`AudioPlayPause`)
<kbd>Ctrl</kbd> + <kbd>Digit2</kbd></dt>
<dd> in reader window, calls the "play" or "pause" toggle commands for audio (TTS or EPUB3 Media Overlays readaloud)
</dd>
<dt>Previous audio (`AudioPrevious`)
<kbd>Ctrl</kbd> + <kbd>Digit1</kbd></dt>
<dd>in reader window, calls the "previous" command for audio (TTS or EPUB3 Media Overlays readaloud, or "rewind" for audiobooks)
</dd>
<dt>Alternative previous audio (`AudioPreviousAlt`)
<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Digit1</kbd></dt>
<dd> in reader window, calls the "previous" command for audio (TTS or EPUB3 Media Overlays readaloud, or "rewind" for audiobooks). Alternative shortcut key.
</dd>
<dt>Stop audio (`AudioStop`)
<kbd>Ctrl</kbd> + <kbd>Digit4</kbd></dt>
<dd> in reader window, calls the "stop" command for audio (TTS or EPUB3 Media Overlays readaloud, or "pause" for audiobooks)
</dd>
<dt>Close the book (`CloseReader`)
<kbd>Ctrl</kbd> + <kbd>KeyW</kbd> </dt> 
<dd>in reader window, closes the window and returns to the library view.
</dd>
<dt>Fixed Layout Zoom In (`FXLZoomIn`)
<kbd>Ctrl</kbd> + <kbd>Digit9</kbd></dt>
<dd>Zoom in a fixed layout page 
</dd>
<dt>Fixed Layout Zoom out (`FXLZoomOut`)
<kbd>Ctrl</kbd> + <kbd>Digit8</kbd></dt>
<dd>Zoom out a fixed layout page 
</dd>
<dt>Fixed Layout Zoom (`FXLZoomReset`)
<kbd>Ctrl</kbd> + <kbd>Digit0</kbd></dt>
<dd>Reset to 100% zoom on a fixed layout page
</dd>
<dt>Main content(`FocusMain`)
<kbd>Ctrl</kbd> + <kbd>F10</kbd> 
</dt>
<dd>
In reader and library windows, moves the keyboard focus to the "main" area landmark. in the reader view, the keyboard focus moves one step further into the frame that displays publication content (screen readers automatically read the currently-focussed HTML element inside the displayed document)
</dd>
<dt>Main content deep (`FocusMainDeep`)
<kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F10</kbd> 
</dt>
<dd>
Just like "Main content" / FocusMainDeep in the reader view (see above), but the keyboard focus is forced deeper into the frame that displays publication content (this can help in cases where screen readers do not automatically read the currently-focussed HTML element inside the displayed document)
</dd>
<dt>Go to page (`FocusReaderGotoPage`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>KeyP</kbd></dt>
<dd> in reader window, moves the keyboard focus to the "goto page" section in the navigation panel
</dd>
<dt>Navigation (`FocusReaderNavigation`)
<kbd>Ctrl</kbd> + <kbd>KeyN</kbd></dt>
<dd>in reader window, moves the keyboard focus to the navigation panel (table of contents, bookmarks, etc.)
</dd>
<dt>Table Of Content (`FocusReaderNavigationTOC`) 
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>KeyN</kbd></dt>
<dd>in reader window, moves the keyboard focus to the navigation panel, but more specifically into the table of contents, and if possible at the detected heading  / closest to the reading location.
</dd>
<dt>Reader settings (`FocusReaderSettings`)
<kbd>Ctrl</kbd> + <kbd>KeyS</kbd> </dt>
<dd>in reader window, moves the keyboard focus to the settings panel (user preferences for displaying publication content)
</dd>
<dt>Search (`FocusSearch`) 
<kbd>Ctrl</kbd> + <kbd>KeyF</kbd></dt>
<dd>Available from the library and the reading winfos. In library window, moves the keyboard focus to the search text input of local bookshelf or OPDS feed. In reader window, moves the keyboard focus to the publication-wide search text input.
</dd>
<dt>Toolbar (`FocusToolbar`) 
<kbd>Ctrl</kbd> + <kbd>KeyT</kbd></dt> 
<dd>in reader and library windows, moves the keyboard focus to the top horizontal toolbar, immediately before the "skip" link (which itself moves focus to the "main" area landmark)
</dd>
<dt>Next chapter (`NavigateNextChapter`)
<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ArrowRight</kbd></dt>
<dd>
in reader window, move to previous or next "chapter" (spine item in the reading order of the publication). Note that the keyboard focus is automatically moved to the "main" area landmark, which is immediately before the frame that displays publication content (just like when following / activating a link in the table of contents).
</dd>
<dt>Next chapter (`NavigateNextChapterAlt`)
<kbd>Ctrl</kbd> + <kbd>PageDown</kbd></dt>
<dd>in reader window, move to previous or next "chapter" (spine item in the reading order of the publication). Note that the keyboard focus is automatically moved to the "main" area landmark, which is immediately before the frame that displays publication content (just like when following / activating a link in the table of contents).
</dd>
<dt>Next History (`NavigateNextHistory`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Backspace</kbd></dt>
<dd>in reader window, go back or forward in the navigation history: Beginning or End of the publication 
</dd>
<dt>Next library page (`NavigateNextLibraryPage`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ArrowRight</kbd></dt>
<dd>In the library view, display the next set of books
</dd>
<dt>Next library page alternative(`NavigateNextLibraryPageAlt`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Period</kbd></dt>
<dd>In the library view, display the next set of books (alternative keyboard shortcut)
</dd>
<dt>Next Catalogue page (`NavigateNextOPDSPage`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ArrowRight</kbd></dt>
<dd> in library window for Catalogues (OPD) feeds, activates the next pagination links
</dd>
<dt>Next Catalogue page (`NavigateNextOPDSPageAlt`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Period</kbd></dt>
<dd> in library window for Catalogues (OPD) feeds, activates the next pagination links (alternative keyboard shortcut)
</dd>
<dt>Next page (`NavigateNextPage`)
<kbd>ArrowRight</kbd></dt>
<dd>in reader window, move to previous or next "page" (or scroll unit, if pagination is disabled) 
</dd>
<dt>Next page (`NavigateNextPageAlt`) <kbd>Ctrl</kbd> + <kbd>Period</kbd></dt>in reader window, move to previous or next "page" (or scroll unit, if pagination is disabled)
<dd>

</dd>
<dt>Previous chapter (`NavigatePreviousChapter`)
<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ArrowLeft</kbd></dt>
<dd>
in reader window, move to previous "chapter" (spine item in the reading order of the publication). Note that the keyboard focus is automatically moved to the "main" area landmark, which is immediately before the frame that displays publication content (just like when following / activating a link in the table of contents).
</dd>
<dt>Previous chapter (`NavigatePreviousChapterAlt`)
<kbd>Ctrl</kbd> + <kbd>PageUp</kbd></dt>
<dd>
in reader window, move to previous "chapter" (spine item in the reading order of the publication). Note that the keyboard focus is automatically moved to the "main" area landmark, which is immediately before the frame that displays publication content (just like when following / activating a link in the table of contents).
</dd>
<dt>Previous History(`NavigatePreviousHistory`) 
<kbd>Ctrl</kbd> + <kbd>Backspace</kbd></dt>
<dd> in reader window, go back or forward in the navigation history: Beginning or End of the publication 
</dd>
<dt>(`NavigatePreviousLibraryPage`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ArrowLeft</kbd></dt>
<dd>In the library view, display the previous set of books
</dd>
<dt>(`NavigatePreviousLibraryPageAlt`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Comma</kbd></dt>
<dd> In the library view, display the previous set of books
(alternative keyboard shortcut)
</dd>
<dt>Previous Catalogue page (`NavigatePreviousOPDSPage`)</dt>
<dd>
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ArrowLeft</kbd>
</dd>
<dt>Previous Catalogue page (`NavigatePreviousOPDSPageAlt`)</dt>in library window for Catalogues (OPD) feeds, activates the previous pagination links (alternative keyboard shortcut)
<dd>
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Comma</kbd>
</dd>
<dt> Previous page (`NavigatePreviousPage`)
<kbd>ArrowLeft</kbd></dt>
<dd> in reader window, move to previous or next "page" (or scroll unit, if pagination is disabled)
</dd>
<dt> Previous page (`NavigatePreviousPageAlt`)
<kbd>Ctrl</kbd> + <kbd>Comma</kbd></dt>
<dd> in reader window, move to previous or next "page" (or scroll unit, if pagination is disabled)
</dd>
<dt>Go to Begining of the book (`NavigateToBegin`)
<kbd>Ctrl</kbd> + <kbd>Home</kbd></dt>
<dd>in reader window, goes to the beginning of the publication
</dd>
<dt>Go to end of the book (`NavigateToEnd`)
<kbd>Ctrl</kbd> + <kbd>End</kbd></dt>
<dd>in reader window, goes to the end of the publication
</dd>
<dt>Book information panel (`OpenReaderInfo`) 
<kbd>Ctrl</kbd> + <kbd>KeyI</kbd></dt>
<dd>
in reader window, publication info popup modal dialog (may be used in future Thorium version for similar feature in library window)
</dd>
<dt>where am I (quick notification supported by Screen readers) (`SpeakReaderInfoWhereAmI`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>KeyK</kbd></dt> 
<dd>in reader window, this is the "where am I" feature, just as above, but only spoken via screen reader TTS thanks to an ARIA live region with assertive speech which interrupts the current narration.
</dd>
<dt>where am I (`OpenReaderInfoWhereAmI`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>KeyI</kbd></dt>
in reader window, publication info popup modal dialog with direct keyboard focus on section that displays the headings hierarchy trail and other contextual information for the current reading location, such as nearest preceding page break, as well as document index in the reading order (this is the "where am I" feature).
<dd>
</dd>
<dt>Next search result (`SearchNext`)
<kbd>F3</kbd> </dt>
<dd>in reader window, when the publication-wide search text input is open, finds the previous / next match
</dd>
<dt>SearchNextAlt
<kbd>Ctrl</kbd> + <kbd>KeyG</kbd></dt>
<dd> same as above (alternative keyboard shortcut)
</dd>
<dt>previous search result (`SearchPrevious`)
<kbd>Shift</kbd> + <kbd>F3</kbd> </dt>
<dd>in reader window, when the publication-wide search text input is open, finds the previous / next match
</dd>
<dt>(`SearchPreviousAlt`)
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>KeyG</kbd></dt>
<dd> same as above (alternative keyboard shortcut)
</dd>

<dt>Bookmarks (`ToggleBookmark`) 
<kbd>Ctrl</kbd> + <kbd>KeyB</kbd> </dt>
<dd>in reader window, toggle bookmark (a notification is produced so that screen readers announce the change)
</dd>
<dt> Fullscreen (`ToggleReaderFullscreen`)
<kbd>Ctrl</kbd> + <kbd>F11</kbd> </dt>
<dd>In reader window, toggle fullscreen. Note that this is different from the Zen mode. Keyboard shortcut is the only way to go full screen.
</dd>
</dl>