---
title: Reading PDFs
role: doc-chapter
epubtype: chapter
draft: false
---

# Reading PDFs

Thorium PDF reading engine relies on pdf.js a Portable Document Format (PDF) viewer that is built with HTML5. PDF.js is community-driven and supported by Mozilla. Detailled support can be found on the [PDF.JS project repository webpage](https://github.com/mozilla/pdf.js). The [PDF.JS Frequently Asked Questions page](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions) may be of particular interest. 

## Reading settings for PDFs
PDF support include 8 levels of zoom and the capacity to display in one or two columns.

## Navigation features for PDFs
The PDF format offers fewer navigation options as no computed table of content or landmarks points exist. Therefore, the only navigation possibility is thru go to page. 

Many PDF authors use bookmarks to propose a table of content navigation, but those are not available in Thorium reader at the moment. 

## Bookmarks and annotations for PDFs
At this moment, annotations are not available for PDFs. Bookmarks are fully implemented and can be created and navigated as detailled in the [Reading action bookmarks chapter](../230_bookmarks/index.html). 

An attention point here is that only one bookmark per page can be added. Trying to add more than one bookmark per page will remove the existing one.

## PDF keyboard shortcuts
PDF.js adds keyboard shortcuts that are not congigurable in the Thorium setting panel. 

### Navigation
The Home, End, Page up, Page down and all arrow keys can be used to navigate the document. Moreover, the following navigation shortcuts exist:

* Next page: n, j, Space bar (presentation mode only), Enter (presentation mode only) or left click (presentation mode only)
* Previous page: p, k, Shift + Space bar (presentation mode only), Shift + Enter (presentation mode only) or Shift + left click (presentation mode only)

### Viewer controls
User interface buttons or ctrl + mouse wheel can be used to change the zooming level, but keyboard shortcuts are also available:

* Zoom in: ctrl + +, ctrl + =
* Zoom out: ctrl + -
* Restore normal zoom: ctrl + 0
* Rotate the document clockwise: r
* Rotate the document counterclockwise: shift + r
* Activate presentation mode: ctrl + alt + p
* Enable the hand tool: h
* Enable the text selection tool: s
* Move focus to the 'go to page' box: ctrl + alt + g
* Find text in the document: ctrl + f
* Find next occurrence of text in the document: ctrl + g
* Find previous occurrence of text in the document: shift + ctrl + g
* Download the document: ctrl + s
* Print the document: ctrl + p
* Open a file: ctrl + o

(replace ctrl with meta on some configurations)