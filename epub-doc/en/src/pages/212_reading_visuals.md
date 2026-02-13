---
title: Reading visual contents
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---

# Reading visual contents

Visual content can appear in all formats except those that are exclusively audio. This section covers the various situations except portable document formats (PDF) for which a third-party reader (pdf.js, also used by Firefox notably) is integrated into Thorium. Therefore, a specific section of this user guide is dedicated to [Reading PDF](../214_reading_pdfs/index.xhtml).

<section class="filet">

## Zooming on images {#read_images_zoom}

Thorium has an image zoom feature (epub only).

To zoom on an image you can select the image (a magenta focus outline
will appear around it) and activate zoom by clicking with the mouse or
tapping it with the finger. Access to image zoom via keyboard is
currently not possible.

If the image is also a link or if the book your read is in a fixed
layout format, you will need to hit the <kbd>Shift</kbd> key in order to
enter the image zoom feature.

To zoom in or out, tab to the `+` or `-` buttons and hit <kbd>Enter</kbd>,
use mouse wheel, scroll up and down or pinch and stretch trackpad or
onscreen touch gestures.

Once the image is zoomed you can move vertically and horizontally with
<kbd>Left arrow</kbd>, <kbd>Right arrow</kbd>, <kbd>Left arrow</kbd> and <kbd>Right arrow</kbd>, 
by holding down the mouse button and moving the mouse, with usual
trackpad gestures or with finger moves on tactile screens.

To close the image zoom view and to return to the reading view, press
<kbd>ESC</kbd> key, or the X button.

Some restrictions due to ebook design may apply, for example when images
are inserted as style (CSS), it is not possible to open the image view
for zooming.


## Displaying image descriptions 

Since 3,4, Thorium Reader can display textual descriptions provided by the publisher for images, such as `alt` text and extended descriptions. This helps you better understand diagrams, photos, and other visual content.

### When image descriptions are available

Image descriptions appear when:

- The publication’s author has added descriptions to images (for example with `alt`, `aria-labelledby`, `aria-describedby` or `aria-details`). 
- You open the image in Thorium’s image viewer from within the book. 

If no description was added by the publisher, Thorium cannot display one and the image viewer will only show the image itself. 

### How to view an image description

1. Open your book and navigate to a page that contains an image. 
2. Activate the image (for example by clicking it or using the keyboard or screen reader command to open the image in the image viewer). 
3. Thorium opens the image in a modal window (image viewer).
4. If the image has a description, a text area in the modal shows one or more of these:
   - A short description (alt text or label, usually one sentence). 
   - An extended description, when the publication provides a longer explanation or a link to it.

You can read this description visually or with your assistive technologies, in addition to listening to it through text‑to‑speech.

### What the different texts mean

When a description is present, you may see:

- Short description: a concise text that briefly explains what the image shows (for example: “Schematic of the device”). 
- Extended description: additional details, sometimes presented as a separate line or a link (“Extended description”) pointing to a longer explanation elsewhere in the book. 

Both are written by the book’s publisher; Thorium simply exposes them so you can decide whether to read the quick description, the extended one, or both. 

### Notes for users of assistive technologies

- Thorium continues to read image descriptions through text‑to‑speech where available.
- The new image viewer panel gives a visible, structured place to review those texts, which can be useful if you want to re‑read or copy a description.

</section>
