---
title: Reading PDFs
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Reading PDFs

Thorium’s PDF reading engine relies on PDF.js, a Portable Document Format (PDF) viewer built with HTML5.
PDF.js is community-driven and supported by Mozilla.

<section class="filet">

## Reading settings for PDFs

PDF support includes 8 levels of zoom and the capacity to display in one or two pages.


</section>
<section class="filet">

## Navigation features for PDFs

Navigation in PDF can always be done with the go to page panel. Additionally, when PDF creators have included Document Outline, those are available through the Table Of Content Navigation Panel. That's a different behavior of what is done by Acrobat Reader that displays Document Outlines as Bookmarks and allows users to manipulate them by changing order, renaming, adding and deleting them.

With Thorium Reader, you can safely add your own bookmarks and you will find them in the Bookmarks navigation panel.


</section>
<section class="filet">

## Bookmarks and annotations for PDFs

At this moment, annotations are not available for PDFs. Bookmarks are fully implemented and can be created and navigated as detailed in the [Reading action bookmarks chapter](../230_bookmarks/index.xhtml).

An attention point here is that only one bookmark per page can be added. Trying to add more than one bookmark per page will remove the existing one.


</section>
<section class="filet">

## Printing PDF

Since 3.2, it is possible to print page ranges of a PDF. This can be limited by LCP rules decided by the vendor or lender.


</section>
<section class="filet">

## PDF keyboard shortcuts

PDF.js adds keyboard shortcuts that are not configurable in Thorium’s settings.
The list below is non-exhaustive; some shortcuts may not work. Reference:
https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-are-the-pdfjs-keyboard-shortcuts


</section>
<section class="filet">

### Navigation

The <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Page up</kbd>, <kbd>Page down</kbd> and all <kbd>arrow</kbd> keys can be used to navigate the document. Moreover, the following navigation shortcuts exist:

* Next page: <kbd>n</kbd>, <kbd>j</kbd>, <kbd>Space bar</kbd> (presentation mode only), <kbd>Enter</kbd> (presentation mode only) or left click (presentation mode only)
* Previous page: <kbd>p</kbd>, <kbd>k</kbd>, <kbd>Shift</kbd> + <kbd>Space bar</kbd> (presentation mode only), <kbd>Shift</kbd> + <kbd>Enter</kbd> (presentation mode only) or <kbd>Shift</kbd> + left click (presentation mode only)


</section>
<section class="filet">

### Viewer controls

User interface buttons or <kbd>ctrl</kbd> + mouse wheel can be used to change the zooming level, but keyboard shortcuts are also available:

* Zoom in: <kbd>ctrl</kbd> + <kbd>+</kbd>, <kbd>ctrl</kbd> + <kbd>=</kbd>
* Zoom out: <kbd>ctrl</kbd> + <kbd>-</kbd>
* Restore normal zoom: <kbd>ctrl</kbd> + <kbd>0</kbd>
* Rotate the document clockwise: <kbd>r</kbd>
* Rotate the document counterclockwise: <kbd>shift</kbd> + <kbd>r</kbd>
* Move focus to the 'go to page' box: <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>
* Find text in the document: <kbd>ctrl</kbd> + <kbd>f</kbd>
* Find next occurrence of text in the document: <kbd>ctrl</kbd> + <kbd>g</kbd>
* Find previous occurrence of text in the document: <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>g</kbd>

(replace <kbd>ctrl</kbd> with meta on some configurations)



</section>
