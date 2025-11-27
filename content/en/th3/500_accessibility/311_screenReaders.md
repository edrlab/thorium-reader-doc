---
title: Reading with a screen reader
role: chapter
draft: false
weight: '502'
---

## Reading with a screen reader

### Activating screen reader support 

Thorium automatically detects assistive technology, but, since 3.3, users must explicitly activate screen reader support by ticking the checkbox in the application settings (this is a global preference for the main library window as well as all reader windows). 

In the previous versions, this support was automatically activated. We had to modify this feature because third-party applications can request the same privileges as assistive technology at the level of the operating system, which in turn causes Thorium to incorrectly detect screen readers.

Thorium adapts its behavior when screen reader support is enabled:
* Text input fields for bookshelf searches require explicit validation (e.g., pressing Enter or clicking the search button) to trigger the search, instead of the default instantaneous "search as you type" behavior.
* In the reader window, the presentation of EPUB HTML documents is forced to "scroll" mode instead of the default "paginated" view, in order to avoid issues with CSS columns.
* Webviews are fully refreshed during navigation because some screen readers do not support Thorium's optimized HTML rendering.
* The automatic estimation of the user's reading location (i.e. position inside the text) based on how far the HTML content is scrolled inside the visible viewport is disabled. This is necessary because screen readers do not consistently move into view the actively-spoken text.

### Annotating & bookmarking

Based on the feedback we have received so far, it looks like it is very difficult for screen reader users to select an actual range of characters. Such assistive technology allows users to select text inside the screen reader's virtual buffer, so the application isn't aware that the user is reading at a particular location and is selecting text there.

Consequently, screen reader users prefer to use the bookmarking feature which anchors a simple, optionally-labelled bookmark to a coarse reading location (there is an icon button in the top toolbar, but the <key>CTRL</key> + <key>B</key> keyboard shortcut can be used too). 
Thorium actually does pick-up the mouse cursor click on a single text character, as this helps focus a bookmark on a more precise HTML location. 

In Thorium, currently the bookmark label editor supports multiple lines of text input, which makes it possible to annotate coarse document locations. This can therefore be perceived as a replacement for the actual annotator, but there is no import/export of bookmarks data.

More feedback is welcome through our discussion tracker there:[Message to Thorium screen reader users... #2867](https://github.com/edrlab/thorium-reader/discussions/2867).

### Using bookmarks with NVDA

Windows screen readers use a virtual buffer
for reading. To place a bookmark where you are currently reading
press the key combination <kbd>NVDA</kbd> + <kbd>Enter</kbd>, 
and NVDA will say *"activate "*. This
synchronizes the virtual buffer with the current real location so Thorium 
can deduce the object
on which the cursor is located. Then use
<kbd>Ctrl</kbd> + <kbd>B</kbd> to place a bookmark.
A sound notification will inform you of the number of bookmarks 
in the current publication.

## External resources for screen reader use in Thorium

* [The DAISY Consortium Thorium Reader Getting Started Guide](https://daisy.org/guidance/info-help/guidance-training/reading-systems/thorium-epub-reader-quick-start-guide/)
* [The DAISY Consortium Thorium Archives Page](https://daisy.org/news-events/tag/thorium/)

### Keystrokes common to NVDA and JAWS

(contribution from Prashant Verma, DAISY Consortium)

For reading text, navigating in tables, navigating in the browser
window, the insertion key can be replaced by the modifier key of the screen
reader (e.g. the Caps Lock key).

#### Quick keys for navigation

The screen reader must be in navigation or virtual cursor mode.

|Action|Command|
|---|---|
|Next title| <kbd>H</kbd>|
|Next table| <kbd>T</kbd>|
|Next chart| <kbd>G</kbd>|
|Next list|<kbd>L</kbd>|
|Next form field|<kbd>F</kbd>|
|List of elements| <kbd>INSERT</kbd> + <kbd>F7</kbd> (works regardless of cursor mode)|

*Use the above keys with the <kbd>Shift</kbd> key to move to the previous
item.*

#### Text

|Action|Command|
|---|---|
|Previous character| <kbd>←</kbd>|
|Next character| <kbd>→</kbd>|
|Previous word|<kbd>Ctrl</kbd> + <kbd>←</kbd>|
|Say Next word|<kbd>Ctrl</kbd> + <kbd>→</kbd>|
|Previous line|<kbd>↑</kbd>|
|Next line|<kbd>↓</kbd>|
|Previous sentence|<kbd>Alt</kbd> + <kbd>↑</kbd> (Jaws only)|
|Next sentence|<kbd>Alt</kbd> + <kbd>↓</kbd> (Jaws only)|
|Read all| <kbd>INSERT</kbd> + <kbd>↓</kbd>|
|Announce Font|<kbd>INSERT</kbd> + <kbd>F</kbd>|

#### Tables

|Action|Command|
|---|---|
|Cell to the right| <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>→</kbd>|
|Cell to the left|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd>|
|Cell below|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↓</kbd>|
|Cell above|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↑</kbd>|
