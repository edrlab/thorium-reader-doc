---
title: "Moving around in a book"
description: "Learn how to move with agility thru a book. Fast forward and backward to next or previous chapter, page or content. Navigate thru table of content, landmarks and reference pages."
draft: false
weight: 211
toc: false
---

The navigation options can be very different from one book to another. 
Thorium allows the following.
The navigation options can be very different from one book to another. Thorium allows: 

* Move forward and backward in the reading
* use table of contents, reference points and pagination (which must be included by the book's producing organization)
* go to previous and next navigation points
* move backward and forward in the history of navigation actions

## history navigation: jump back & forward to reading points (new in Thorium 2.2. EPUB only)
While reading, user has the power to navigate from one point to another using Navigation panel or following a link into the publication. This activates jump back (<kbd>Ctrl</kbd>  +  <kbd>backspace</kbd>) and jump forward (<kbd>Ctrl</kbd>  +  <kbd>Shift</kbd> + <kbd>backspace</kbd>) buttons on the bottom left of the reading window. Use this buttons to find a precedent place and return to the last place. 

History Navigation takes into account user interactions, including clicks on bottom timeline, TOC, bookmarks, landmarks, where am I headings, go to page. It does not takes into account search previous and next and list links.

## Move forward and backward

To navigate forward and backward in the content of the book you can 
use the arrows on your keyboard or click on the navigation arrows 
located at the bottom right of the reading interface 
(<img class="icons" src="/images/icons/baseline-arrow_left_ios-24px.svg" alt="Previous content button" width="15px"><img class="icons" src="/images/icons/baseline-arrow_forward_ios-24px.svg" alt="Next content button" width="15px">).

It is possible to move between chapters using 
<kbd>Ctrl</kbd> + <kbd>Previous page (Page Up)</kbd> (previous chapter) and 
<kbd>Ctrl</kbd> + <kbd>Next page (Page Down)</kbd> (next chapter) 
or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ALT</kbd> 
(except on MacOS) + <kbd>&larr;</kbd> 
(previous chapter) 
and <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>ALT</kbd> 
(except on MacOS) + <kbd>&rarr;</kbd> 
(next chapter).

{{< alert  >}}

Attention!

There are two different shortcuts to go to the next or previous chapter. 
Depending on your configuration and whether or not you use a screen reader,
it is possible that only one of these two combinations works.

{{< /alert >}}



## The table of contents

The table of contents represents the architecture of the book as defined by 
the book's producing organization.

The first level titles are indicated without margin, those with 
subtitles (or second level title) are presented with a lightgray background. 
The sub-headings are shifted from the margin to the left and a 
vertical line makes it easy to know 
to which level of title they belong.

{{< details "With NVDA">}}
You can use the title level navigation functions 
(<kbd>NVDA</kbd> + <kbd>H</kbd>) 
to explore and move through the table of contents.
{{< /details >}}



<img src="/images/local-fr/thorium-TDM-light.png" alt="Screenshot, table of contents: Titles Level 1 Cover, Title, Copyright, Dedicae, Exergue, Introduction, The Mark of Four; Title Level 2 Deduction elevated to a science."/>



## Landmarks



Good-quality digital books have markers that allow you to 
identify and quickly reach the main parts of a book.

{{< alert info >}}

Information 

Each EPUB publication should include a guide to all major 
landmarks. The titles of the landmarks are at the discretion of the publisher 
choice, but the nature of each landmark must be identified according to a 
semantic vocabulary. The main ones are:

* Main text (bodymatter)
* Table of contents (toc)
* bibliography
* index
* glossary

The [complete list of semantic vocabulary EPUB in English](https://www.w3.org/TR/epub-ssv/)
is available on the W3C website.

{{< /alert>}}



<img src="/images/local-fr/thorium-reperes.png" alt="Screenshot, Go to page. Current page: 3. A drop-down menu indicates 3, an editable field indicates Enter page number, a button indicates Go to."/>



{{< alert danger >}}

Attention !

PDF bookmarks used to compensate for the lack of a table of contents 
in this format are not interpreted by Thorium. 

Unlike Landmarks, Bookmarks are made for users who want to place a mark into a book.

{{< /alert>}}

## The reference pages



Digital books can have a reference pagination allowing 
correspondence to the pagination of the printed book.

There is a navigation option to go to the page. 
When you access it, this option shows the current page.

There is also a keyboard shortcut for this function. Press the 
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, 
then enter the page number in the edit box by typing it or 
changing the value using the `Go to page` box.



<img src="/images/local-fr/thorium-gotopage.png" alt="Screenshot, Go to page. Current page: 3. A drop-down menu indicates 3, an editable field indicates Enter page number, a button indicates Go to."/>



{{< alert warning >}}

Attention !

<a href="/thorium-reader-doc/400_ressources/420_glossary#AdaptedBooks">
Adapted books</a> sometimes use the reference pagination to offer a regular 
book breakdown to readers without reproducing the pagination of the 
original pagination. In this case the reference pagination cannot be used 
to refer to the printed book.

{{< /alert>}}
