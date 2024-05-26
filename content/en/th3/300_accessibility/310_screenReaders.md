---
title: "Reading with a screen reader"
description: ""
draft: false
weight: 310
toc: false
---

When launching Thorium, if a screen reader is detected, the relative functions are activated.

Note that screen readers use a separate buffer to access the HTML content which results in the visual scroll / page offset to be out of sync. In other words, Thorium is generally not aware of the user's current reading location inside the screen reader buffer, unless the screen reader user triggers standard web API events (such as mouse click anywhere in the text, or keyboard tab into focusable HTML elements).

{{< alert warning >}}

Attention !

Accessibility features addressed to assistive technologies
are strongly affected by the quality of the book files.

{{< /alert>}}

# Keystrokes common to NVDA and JAWS

(contribution from Prashant Verma, DAISY Consortium)

For reading text, navigating in tables, navigating in the browser window,  
the insertion key can be replaced by the
modifier key of the screen reader (e.g. the Caps Lock key).

## Quick keys for navigation

The screen reader must be in navigation or virtual cursor mode.

|Command |description|
|---|---|
|Next title |<kbd>H</kbd>|
|Next table  |<kbd>T</kbd>|
|Next chart |<kbd>G</kbd>|
|Next list |<kbd>L</kbd>|
|Next form field |<kbd>F</kbd>|
|List of elements  |<kbd>Insert</kbd> + <kbd>F7</kbd> (works regardless of cursor mode)|

*Use the above keys with the <kbd>Shift</kbd> key to move to the previous item.*

## Text

|Command |description|
|---|---|
|Previous character  |<kbd>&larr;</kbd>|
|Next character  |<kbd>&rarr;</kbd>|
|Previous word  |<kbd>CTRL</kbd> + <kbd>&larr;</kbd>|
|Say Next word  |<kbd>CTRL</kbd> + <kbd>&rarr;</kbd>|
|Previous line |<kbd>&uarr;</kbd>|
|Next line |<kbd>&darr;</kbd>|
|Previous sentence |<kbd>ALT</kbd> + <kbd>&uarr;</kbd> (Jaws only)|
|Next sentence |<kbd>ALT</kbd> + <kbd>&darr;</kbd> (Jaws only)|
|Read all |<kbd>INSERT</kbd> + <kbd>&darr;</kbd>|
|Announce Font |<kbd>INSERT</kbd> + <kbd>F</kbd>|

## Tables

|Command |description|
|---|---|
|Cell to the right  |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>&rarr;</kbd>|
|Cell to the left  |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>&larr;</kbd>|
|Cell below  |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>&darr;</kbd>|
|Cell above |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>&uarr;</kbd>|
