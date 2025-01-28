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



# Keystrokes common to NVDA and JAWS

(contribution from Prashant Verma, DAISY Consortium)

For reading text, navigating in tables, navigating in the browser
window, the insertion key can be replaced by the modifier key of the screen
reader (e.g. the Caps Lock key).

## Quick keys for navigation

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

## Text

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

## Tables

|Action|Command|
|---|---|
|Cell to the right| <kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>→</kbd>|
|Cell to the left|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>←</kbd>|
|Cell below|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↓</kbd>|
|Cell above|<kbd>Alt</kbd> + <kbd>Ctrl</kbd> + <kbd>↑</kbd>|
