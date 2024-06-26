---
title: "Keyboard shortcuts"
description: ""
draft: false
weight: 402
toc: false
---

{{< alert info >}}
Information

The <kbd>Shift</kbd> key is represented by an empty arrow pointing up on some keyboards: <kbd><b>&#x21E7;</b></kbd>. 

The <kbd>Ctrl</kbd> key is replaced by <kbd>Cmd</kbd> key on Mac keyboards.


{{< /alert>}}


<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>F10</kbd>: Main content(`FocusMain`)</dt>
 <dd>in reader and library windows, moves the keyboard focus to the "main" area landmark (in the reader view, this is immediately before the frame that displays publication content)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>t</kbd>: Toolbar (`FocusToolbar`)</dt>
 <dd>in reader and library windows, moves the keyboard focus to the top horizontal toolbar, immediately before the "skip" link (which itself moves focus to the "main" area landmark)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>n</kbd>: Navigation (`FocusReaderNavigation`)</dt>
 <dd>in reader window, moves the keyboard focus to the navigation panel (table of contents, bookmarks, etc.)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd>  +  <kbd>Ctrl</kbd>  +  <kbd>n</kbd>: Table Of Content (`FocusReaderNavigationTOC`)</dt>
 <dd>in reader window, moves the keyboard focus to the navigation panel, but more specifically into the table of contents, and if possible at the detected heading  / closest to the reading location.
 </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd>  +  <kbd>Ctrl</kbd>  +  <kbd>p</kbd>: Go to page (`FocusReaderGotoPage`)</dt>
 <dd>in reader window, moves the keyboard focus to the "goto page" section in the navigation panel
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>s</kbd>: Reader settings (`FocusReaderSettings`)</dt>
 <dd>in reader window, moves the keyboard focus to the settings panel (user preferences for displaying publication content)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>b</kbd>: Bookmarks (`ToggleBookmark`)</dt>
 <dd>in reader window, toggle bookmark (a notification is produced so that screen readers announce the change)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>F11</kbd>: Fullscreen (`ToggleReaderFullscreen`)</dt>
 <dd>in reader window, toggle fullscreen
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>i</kbd>: Book information panel (`OpenReaderInfo`)</dt>
 <dd>in reader window, publication info popup modal dialog (may be used in future Thorium version for similar feature in library window)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd>  +  <kbd>Ctrl</kbd>  +  <kbd>i</kbd>: where am I (`OpenReaderInfoWhereAmI`)</dt>
 <dd>in reader window, publication info popup modal dialog with direct keyboard focus on section that displays the headings hierarchy trail and other contextual information for the current reading location, such as nearest preceding page break, as well as document index in the reading order (this is the "where am I" feature).
 </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd>  +  <kbd>Ctrl</kbd>  +  <kbd>k</kbd>: where am I (quick notification supported by Screen readers) (`SpeakReaderInfoWhereAmI`)</dt>
 <dd>in reader window, this is the "where am I" feature, just as above, but only spoken via screen reader TTS thanks to an ARIA live region with assertive speech which interrupts the current narration.
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>w</kbd>: Close the book (`CloseReader`)</dt>
 <dd>in reader window, closes the window and returns to the library view.
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>f</kbd>: Search a book (`FocusSearch`)</dt>
 <dd>in library window, moves the keyboard focus to the search text input of local bookshelf or OPDS feed
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>f</kbd>: search into a book (`FocusSearch`)</dt>
 <dd>in reader window, moves the keyboard focus to the publication-wide search text input
 </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> (optional) + <kbd>F3</kbd>: previous or next search result (`SearchPrevious` / `SearchNext`)</dt>
 <dd>in reader window, when the publication-wide search text input is open, finds the previous / next match
 </dd>
</dl>
<dl>
 <dt>  <kbd>Shift</kbd> (optional) + <kbd>Ctrl</kbd>  +  <kbd>G</kbd>: previous or next search result (`SearchPreviousAlt` / `SearchNextAlt`)</dt>
 <dd>same as above (alternative keyboard shortcut)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>&larr;</kbd> or <kbd>&rarr;</kbd>: Next OPDS page (`NavigatePreviousOPDSPage` / `NavigateNextOPDSPage`)</dt>
 <dd>in library window for OPDS feeds, activates the previous or next pagination links
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>comma</kbd> or <kbd>period</kbd>: Next OPDS page (`NavigatePreviousOPDSPageAlt / NavigateNextOPDSPageAlt`)</dt>
 <dd>same as above (alternative keyboard shortcut)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>Shift</kbd>  +  <kbd>ALT</kbd> (except on MacOS) + <kbd>&larr;</kbd> or <kbd>&rarr;</kbd>: Previous or next chapter (`NavigatePreviousChapter` / `NavigateNextChapter`)</dt>
 <dd>in reader window, move to previous or next "chapter" (spine item in the reading order of the publication). Note that the keyboard focus is automatically moved to the "main" area landmark, which is immediately before the frame that displays publication content (just like when following / activating a link in the table of contents).
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>page down</kbd> or <kbd>page up</kbd>: Previous or next chapter (`NavigatePreviousChapterAlt` / `NavigateNextChapterAlt`)</dt>
 <dd>same as above (alternative keyboard shortcut)
 </dd>
</dl>
<dl>
 <dt>  <kbd>&larr;</kbd> or <kbd>&rarr;</kbd>: Previous or next page (`NavigatePreviousPage` / `NavigateNextPage`)</dt>
 <dd>in reader window, move to previous or next "page" (or scroll unit, if pagination is disabled)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>comma</kbd> or <kbd>period</kbd>: Previous or next page (`NavigatePreviousPageAlt` / `NavigateNextPageAlt`)</dt>
 <dd>same as above (alternative keyboard shortcut)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>Home</kbd> or <kbd>End</kbd>: Beginning or End of the publication (`NavigateToBegin` / `NavigateToEnd`)</dt>
 <dd>in reader window, goes to the beginning or the end of the publication
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>backspace</kbd> with <kbd>shift</kbd> modifier for the inverse operation: Previous History & Next History(`NavigatePreviousHistory` / `NavigateNextHistory`): </dt>
 <dd>in reader window, go back or forward in the navigation history: Beginning or End of the publication 
 </dd>
</dl>


<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>1</kbd>: Previous audio (`AudioPrevious`)</dt>
 <dd>in reader window, calls the "previous" command for audio (TTS or EPUB3 Media Overlays readaloud, or "rewind" for audiobooks)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>2</kbd>: Play or pause audio (`AudioPlayPause`)</dt>
 <dd>in reader window, calls the "play" or "pause" toggle commands for audio (TTS or EPUB3 Media Overlays readaloud)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>3</kbd>: Next audio (`AudioNext`)</dt>
 <dd>in reader window, calls the "next" command for audio (TTS or EPUB3 Media Overlays readaloud, or "forward" for audiobooks)
 </dd>
</dl>
<dl>
 <dt>  <kbd>Ctrl</kbd>  +  <kbd>4</kbd>: Stop audio (`AudioStop`)</dt>
 <dd>in reader window, calls the "stop" command for audio (TTS or EPUB3 Media Overlays readaloud, or "pause" for audiobooks)
 </dd>
</dl>
