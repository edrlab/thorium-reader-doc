---
title: Reading with a screen reader
role: chapter
draft: false
weight: '502'
---

## Reading with a screen reader

When launching Thorium, if a screen reader is detected, the relative
functions are activated.

Note that screen readers use a separate buffer to access the HTML
content which results in the visual scroll / page offset to be out of
sync. In other words, Thorium is generally not aware of the user\'s
current reading location inside the screen reader buffer, unless the
screen reader user triggers standard web API events (such as mouse click
anywhere in the text, or keyboard tab into focusable HTML elements).

Accessibility features addressed to assistive technologies are strongly
affected by the quality of the book files.

## Keystrokes common to NVDA and JAWS

(contribution from Prashant Verma, DAISY Consortium)

For reading text, navigating in tables, navigating in the browser
window, the insertion key can be replaced by the modifier key of the screen
reader (e.g. the Caps Lock key).

### Quick keys for navigation

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

### Text

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

### Tables

|Action|Command|
|---|---|
|Cell to the right| <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>→</kbd>|
|Cell to the left|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd>|
|Cell below|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↓</kbd>|
|Cell above|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↑</kbd>|


## Annotating & bookmarking

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

