Note to developers: [this PR](https://github.com/readium/readium-desktop/pull/958) introduced support for configurable keyboard shortcuts in Thorium.

TIP: holding the SHIFT + ALT modifier keys together while pressing enter or mouse-clicking to activate links in the slide-out modal navigation pane keeps the user interface panel open (e.g. table of contents, landmarks, bookmarks, "go to page" button, etc.)

* `CTRL` + `F10` (`FocusMain`): in reader and library windows, moves the keyboard focus to the "main" area landmark (in the reader view, this is immediately before the frame that displays publication content)
* `CTRL` + `t` (`FocusToolbar`): in reader and library windows, moves the keyboard focus to the top horizontal toolbar, immediately before the "skip" link (which itself moves focus to the "main" area landmark)
* `CTRL` + `n` (`FocusReaderNavigation`): in reader window, moves the keyboard focus to the navigation panel (table of contents, bookmarks, etc.)
* `SHIFT` + `CTRL` + `n` (`FocusReaderNavigationTOC`): in reader window, moves the keyboard focus to the navigation panel, but more specifically into the table of contents, and if possible at the detected heading  / closest to the reading location.
* `SHIFT` + `CTRL` + `p` (`FocusReaderGotoPage`): in reader window, moves the keyboard focus to the "goto page" section in the navigation panel
* `CTRL` + `s` (`FocusReaderSettings`): in reader window, moves the keyboard focus to the settings panel (user preferences for displaying publication content)
* `CTRL` + `b` (`ToggleBookmark`): in reader window, toggle bookmark (a notification is produced so that screen readers announce the change)
* `CTRL` + `F11` (`ToggleReaderFullscreen`): in reader window, toggle fullscreen
* `CTRL` + `i` (`OpenReaderInfo`): in reader window, publication info popup modal dialog (may be used in future Thorium version for similar feature in library window)
* `SHIFT` + `CTRL` + `i` (`OpenReaderInfoWhereAmI`): in reader window, publication info popup modal dialog with direct keyboard focus on section that displays the headings hierarchy trail and other contextual information for the current reading location, such as nearest preceding page break, as well as document index in the reading order (this is the "where am I" feature).
* `SHIFT` + `CTRL` + `k` (`SpeakReaderInfoWhereAmI`): in reader window, this is the "where am I" feature, just as above, but only spoken via screen reader TTS thanks to an ARIA live region with assertive speech which interrupts the current narration.
* `CTRL` + `w` (`CloseReader`): in reader window, closes the window and returns to the library view.
* `CTRL` + `f` (`FocusSearch`): in library window, moves the keyboard focus to the search text input of local bookshelf or OPDS feed
* `CTRL` + `f` (`FocusSearch`): in reader window, moves the keyboard focus to the publication-wide search text input
* `SHIFT` (optional) + `F3` (`SearchPrevious` / `SearchNext`): in reader window, when the publication-wide search text input is open, finds the previous / next match
* `SHIFT` (optional) + `CTRL` + `G` (`SearchPreviousAlt` / `SearchNextAlt`): same as above (alternative keyboard shortcut)
* `CTRL` + `left` or `right` (`NavigatePreviousOPDSPage` / `NavigateNextOPDSPage`): in library window for OPDS feeds, activates the previous or next pagination links
* `CTRL` + `comma` or `period` (`NavigatePreviousOPDSPageAlt` / `NavigateNextOPDSPageAlt`): same as above (alternative keyboard shortcut)
* `CTRL` + `SHIFT` + `ALT` (except on MacOS) + `left` or `right` (`NavigatePreviousChapter` / `NavigateNextChapter`): in reader window, move to previous or next "chapter" (spine item in the reading order of the publication). Note that the keyboard focus is automatically moved to the "main" area landmark, which is immediately before the frame that displays publication content (just like when following / activating a link in the table of contents).
* `CTRL` + `page down` or `page up` (`NavigatePreviousChapterAlt` / `NavigateNextChapterAlt`): same as above (alternative keyboard shortcut)
* `left` or `right` (`NavigatePreviousPage` / `NavigateNextPage`): in reader window, move to previous or next "page" (or scroll unit, if pagination is disabled)
* `CTRL` + `comma` or `period` (`NavigatePreviousPageAlt` / `NavigateNextPageAlt`): same as above (alternative keyboard shortcut)
* `CTRL` + `Home` or `End` (`NavigateToBegin` / `NavigateToEnd`): in reader window, goes to the beginning or the end of the publication
* `CTRL` + `1` (`AudioPrevious`): in reader window, calls the "previous" command for audio (TTS or EPUB3 Media Overlays readaloud, or "rewind" for audiobooks)
* `CTRL` + `2` (`AudioPlayPause`): in reader window, calls the "play" or "pause" toggle commands for audio (TTS or EPUB3 Media Overlays readaloud)
* `CTRL` + `3` (`AudioNext`): in reader window, calls the "next" command for audio (TTS or EPUB3 Media Overlays readaloud, or "forward" for audiobooks)
* `CTRL` + `4` (`AudioStop`): in reader window, calls the "stop" command for audio (TTS or EPUB3 Media Overlays readaloud, or "pause" for audiobooks)
