---
title: "Tests and approach"
description: ""
draft: false
weight: 391
toc: false
---

EDRLab has a close relationship with the DAISY Consortium. 
Thanks to the people with visual impairments who participate in our design 
and testing, Thorium Reader aims to be one of the most 
accessible reading applications on the market. 

Thorium Reader is [tested on epubtest.org](https://epubtest.org/results/3632/).

Version 1.8 received the following scores: 
 * Basic functions 86.67% (Thorium does not allow yet annotating a document)
 * Non-visual reading 100% 
 *  Mathematics 100% 
 * Extended descriptions 100%. 

The list of tests is as follows: 

* Non-visual reading
 * Launch "read from here".
 * Stop and resume reading
 * All text must be read in the correct order.
 * Read the alternative text of the image
 * Change the reading speed
 * TTS allows pauses for titles, paragraphs, list items, etc.
 * Navigate between cells, rows and columns in a table
 * Navigate between internal hyperlinks
 * Move to the next block element
 * Navigate by characters
 * Navigate by words
 * Navigate by rows
 * Navigate through content by headings
 * Select and copy text
* Mathematics
 * Browsing in MathML online with assistive and other technologies
 * Browsing in math block images followed by summary/detail with MathML
 * Browsing online math images followed by commented MathML
* Extended descriptions 
 * Summary
 * Detection and use of HTML elements Details and Summary
 * Technique for linking to a single extended description placed in a separate HTML file via text hyperlinks.