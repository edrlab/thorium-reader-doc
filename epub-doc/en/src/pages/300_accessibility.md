---
title: Accessibility
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Accessibility {#A11Y}
The application is compatible with assistance technologies such as screen players, including Jaws, NVDA, Narrator and Voiceover. It includes a reading function aloud with visual highlighting. Thorium Reader can be used with mouse or keyboard, and keyboard shortcuts are configurable. The display can be personalized to meet the needs of users, including colors, text size, spacing, font and layout.
Accessibility features strongly depend on the quality of electronic publication files and are affected by it. 

The [Accessibility online support page](https://thorium.edrlab.org/en/th3/500_accessibility/) contains complete information related to the accessibility of the application and the features related to it.

This chapter takes up the main information to have it offline.


<section class="filet">

## Accessibility information {#a11y_info}

Currently, Thorium displays in the [Book Information Panel](../102_windows_views_panels/index.xhtml#book_info_panel) under the title `Description` Description 'The content of the accessibility metadata provided by the creators of the file.


</section>
<section class="filet">

## Native accessibility functions {#a11y_native}

The native accessibility functions are described in each section of this documentation which correspond to their context of use. This includes in particular:

* [Visual adjustments in the display of the text](../102_windows_views_panels/index.xhtml#reading_settings_panel)
* [Audio reading generated in summary voice](../211_reading_textuals/index.xhtml#read_text_readaloud)


</section>
<section class="filet">

## Reading with a screen player {#screenreader}

When launching Thorium, if a screen player is detected, the relative functions are activated.
Note that screen players use separate buffer memory to access HTML content, which causes the visual scroll desynchronization and a page offset displayed with the page read by the screen player. In other words, Thorium is generally not aware of the current reading location of the screen player user, unless the screen user triggers events (such as a Mouse click anywhere in the text or a keyboard key on focused HTML elements).


</section>
<section class="filet">


### Quick keys for navigation (common to NVDA and Jaws)

*(Contribution of Prashant Verma, Daisy Consortium)*

To read text, navigate in the tables, navigate in the browser window, the insertion key can be replaced by the screen modification key. The screen player must be in navigation or virtual cursor mode.

|Action |Key|
|---|---|
|Following title| <kbd>H</kbd> |
|Next table| <kbd>T</kbd>|
|Following graphic| <kbd>G</kbd>|
|Next list|<kbd>L</kbd>|
|Following form field|<kbd>F</kbd>|
|Element list| <kbd>INSERT</kbd> + <kbd>F7</kbd> |
|Preceding| <kbd>←</kbd> |
|Following character| <kbd>→</kbd> |
|Previous word |<kbd>CTRL</kbd> + <kbd>←</kbd> |
|Next word|<kbd>CTRL</kbd> + <kbd>→</kbd> |
|Previous line |<kbd>↑</kbd> |
|Next line |<kbd>↓</kbd> |
|Previous sentence |<kbd>ALT</kbd> + <kbd>↑</kbd> (Jaws uniquement) |
|Next sentence|<kbd>ALT</kbd> + <kbd>↓</kbd> (Jaws uniquement) |
|Read everything|<kbd>INSERT</kbd> + <kbd>↓</kbd> |
|Cell on the right|<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>→</kbd> |
|Cell on the left |<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>←</kbd>|
|Cell below|<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>↓</kbd>|
|Cell above|<kbd>ALT</kbd> + <kbd>CTRL</kbd> + <kbd>↑</kbd>|


</section>
