---
title: Reading with a screen reader
role: chapter
draft: false
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

 warning
Attention !

Accessibility features addressed to assistive technologies are strongly
affected by the quality of the book files.


# Keystrokes common to NVDA and JAWS

(contribution from Prashant Verma, DAISY Consortium)

For reading text, navigating in tables, navigating in the browser
window,\
the insertion key can be replaced by the modifier key of the screen
reader (e.g. the Caps Lock key).

## Quick keys for navigation

The screen reader must be in navigation or virtual cursor mode.

  Command            description
  ------------------ ---------------------------------------------------------------
  Next title         [H]{.kbd}
  Next table         [T]{.kbd}
  Next chart         [G]{.kbd}
  Next list          [L]{.kbd}
  Next form field    [F]{.kbd}
  List of elements   [Insert]{.kbd} + [F7]{.kbd} (works regardless of cursor mode)

*Use the above keys with the [Shift]{.kbd} key to move to the previous
item.*

## Text

  Command              description
  -------------------- -------------------------------------
  Previous character   [←]{.kbd}
  Next character       [→]{.kbd}
  Previous word        [CTRL]{.kbd} + [←]{.kbd}
  Say Next word        [CTRL]{.kbd} + [→]{.kbd}
  Previous line        [↑]{.kbd}
  Next line            [↓]{.kbd}
  Previous sentence    [ALT]{.kbd} + [↑]{.kbd} (Jaws only)
  Next sentence        [ALT]{.kbd} + [↓]{.kbd} (Jaws only)
  Read all             [INSERT]{.kbd} + [↓]{.kbd}
  Announce Font        [INSERT]{.kbd} + [F]{.kbd}

## Tables

  Command             description
  ------------------- ----------------------------------------
  Cell to the right   [ALT]{.kbd} + [CTRL]{.kbd} + [→]{.kbd}
  Cell to the left    [ALT]{.kbd} + [CTRL]{.kbd} + [←]{.kbd}
  Cell below          [ALT]{.kbd} + [CTRL]{.kbd} + [↓]{.kbd}
  Cell above          [ALT]{.kbd} + [CTRL]{.kbd} + [↑]{.kbd}
