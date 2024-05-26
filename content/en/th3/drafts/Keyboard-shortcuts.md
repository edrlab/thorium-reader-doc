---
title: Introduction
type: docs
draft: true
---

Note to developers: [this PR](https://github.com/readium/readium-desktop/pull/958) introduced support for configurable keyboard shortcuts in Thorium.

TIP: holding the Shift + ALT modifier keys together while pressing enter or mouse-clicking to activate links in the slide-out modal navigation pane keeps the user interface panel open (e.g. table of contents, landmarks, bookmarks, "go to page" button, etc.)

* <kbd>Ctrl</kbd>  +  <kbd>F10</kbd> (`FocusMain`): in reader and library windows, moves the keyboard focus to the "main" area landmark (in the reader view, this is immediately before the frame that displays publication content)
* <kbd>Ctrl</kbd>  +  <kbd>t</kbd> (`FocusToolbar`): in reader and library windows, moves the keyboard focus to the top horizontal toolbar, immediately before the "skip" link (which itself moves focus to the "main" area landmark)
* <kbd>Ctrl</kbd>  +  <kbd>n</kbd> (`FocusReaderNavigation`): in reader window, moves the keyboard focus to the navigation panel (table of contents, bookmarks, etc.)
* <kbd>Shift</kbd>  +  <kbd>Ctrl</kbd>  +  <kbd>n</kbd> (`FocusReaderNavigationTOC`): in reader window, moves the keyboard focus to the navigation panel, but more specifically into the table of contents, and if possible at the detected heading  / closest to the reading location.
* <kbd>Shift</kbd>  +  <kbd>Ctrl</kbd>  +  <kbd>p</kbd> (`FocusReaderGotoPage`): in reader window, moves the keyboard focus to the "goto page" section in the navigation panel
* <kbd>Ctrl</kbd>  +  <kbd>s</kbd> (`FocusReaderSettings`): in reader window, moves the keyboard focus to the settings panel (user preferences for displaying publication content)
* <kbd>Ctrl</kbd>  +  <kbd>b</kbd> (`ToggleBookmark`): in reader window, toggle bookmark (a notification is produced so that screen readers announce the change)
* <kbd>Ctrl</kbd>  +  <kbd>F11</kbd> (`ToggleReaderFullscreen`): in reader window, toggle fullscreen
* <kbd>Ctrl</kbd>  +  <kbd>i</kbd> (`OpenReaderInfo`): in reader window, publication info popup modal dialog (may be used in future Thorium version for similar feature in library window)
* <kbd>Shift</kbd>  +  <kbd>Ctrl</kbd>  +  <kbd>i</kbd> (`OpenReaderInfoWhereAmI`): in reader window, publication info popup modal dialog with direct keyboard focus on section that displays the headings hierarchy trail and other contextual information for the current reading location, such as nearest preceding page break, as well as document index in the reading order (this is the "where am I" feature).
* <kbd>Shift</kbd>  +  <kbd>Ctrl</kbd>  +  <kbd>k</kbd> (`SpeakReaderInfoWhereAmI`): in reader window, this is the "where am I" feature, just as above, but only spoken via screen reader TTS thanks to an ARIA live region with assertive speech which interrupts the current narration.
* <kbd>Ctrl</kbd>  +  <kbd>w</kbd> (`CloseReader`): in reader window, closes the window and returns to the library view.
* <kbd>Ctrl</kbd>  +  <kbd>f</kbd> (`FocusSearch`): in library window, moves the keyboard focus to the search text input of local bookshelf or OPDS feed
* <kbd>Ctrl</kbd>  +  <kbd>f</kbd> (`FocusSearch`): in reader window, moves the keyboard focus to the publication-wide search text input
* <kbd>Shift</kbd> (optional) + <kbd>F3</kbd> (`SearchPrevious</kbd> / <kbd>SearchNext`): in reader window, when the publication-wide search text input is open, finds the previous / next match
* <kbd>Shift</kbd> (optional) + <kbd>Ctrl</kbd>  +  <kbd>G</kbd> (`SearchPreviousAlt</kbd> / <kbd>SearchNextAlt`): same as above (alternative keyboard shortcut)
* <kbd>Ctrl</kbd>  +  <kbd>&larr;</kbd> or <kbd>&rarr;</kbd> (`NavigatePreviousOPDSPage</kbd> / <kbd>NavigateNextOPDSPage`): in library window for OPDS feeds, activates the previous or next pagination links
* <kbd>Ctrl</kbd>  +  <kbd>comma</kbd> or <kbd>period</kbd> (`NavigatePreviousOPDSPageAlt</kbd> / <kbd>NavigateNextOPDSPageAlt`): same as above (alternative keyboard shortcut)
* <kbd>Ctrl</kbd>  +  <kbd>Shift</kbd>  +  <kbd>ALT</kbd> (except on MacOS) + <kbd>&larr;</kbd> or <kbd>&rarr;</kbd> (`NavigatePreviousChapter</kbd> / <kbd>NavigateNextChapter`): in reader window, move to previous or next "chapter" (spine item in the reading order of the publication). Note that the keyboard focus is automatically moved to the "main" area landmark, which is immediately before the frame that displays publication content (just like when following / activating a link in the table of contents).
* <kbd>Ctrl</kbd>  +  <kbd>page down</kbd> or <kbd>page up</kbd> (`NavigatePreviousChapterAlt</kbd> / <kbd>NavigateNextChapterAlt`): same as above (alternative keyboard shortcut)
* <kbd>&larr;</kbd> or <kbd>&rarr;</kbd> (`NavigatePreviousPage</kbd> / <kbd>NavigateNextPage`): in reader window, move to previous or next "page" (or scroll unit, if pagination is disabled)
* <kbd>Ctrl</kbd>  +  <kbd>comma</kbd> or <kbd>period</kbd> (`NavigatePreviousPageAlt</kbd> / <kbd>NavigateNextPageAlt`): same as above (alternative keyboard shortcut)
* <kbd>Ctrl</kbd>  +  <kbd>Home</kbd> or <kbd>End</kbd> (`NavigateToBegin</kbd> / <kbd>NavigateToEnd`): in reader window, goes to the beginning or the end of the publication
* <kbd>Ctrl</kbd>  +  <kbd>1</kbd> (`AudioPrevious`): in reader window, calls the "previous" command for audio (TTS or EPUB3 Media Overlays readaloud, or "rewind" for audiobooks)
* <kbd>Ctrl</kbd>  +  <kbd>2</kbd> (`AudioPlayPause`): in reader window, calls the "play" or "pause" toggle commands for audio (TTS or EPUB3 Media Overlays readaloud)
* <kbd>Ctrl</kbd>  +  <kbd>3</kbd> (`AudioNext`): in reader window, calls the "next" command for audio (TTS or EPUB3 Media Overlays readaloud, or "forward" for audiobooks)
* <kbd>Ctrl</kbd>  +  <kbd>4</kbd> (`AudioStop`): in reader window, calls the "stop" command for audio (TTS or EPUB3 Media Overlays readaloud, or "pause" for audiobooks)
