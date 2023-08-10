---
title: "Mark a page or a passage"
description: ""
draft: false
weight: 215
toc: false
---

## Add a bookmark

The `bookmark` button allows you to add a custom bookmark. 
A `bookmark` can be a fixed point or a text selection. 
Only one fixed point bookmark is possible per page 
(book pages or calculated pages in case there is not page reference in the book). 
But you can place as many texte selection bookmark as you want. 

When you add a `Bookmark` a notification appears to inform you that 
the `Bookmark` was *Added* or *Deleted*. 
The number just after indicates the total number of `Bookmarks` in the Book 
after this action. 


{{< alert info >}}

Select the text you want to mark.
Press the `bookmark` button
(<img class="icons" src="/images/icons/outline-bookmark-24px-grey.svg" alt="" width="20px">)
 or the key combination  <kbd>Ctrl</kbd>  +  <kbd>B</kbd>.

 If no text is selected so the full page will be marked. 

{{< /alert>}}

## Reviewing and navigating the Bookmarks

Press the `Navigation` button (<kbd>Ctrl</kbd> + <kbd>N</kbd>), then 
the `Bookmarks` button. You can change the name of each bookmark, delete 
bookmarks and move between bookmarks by pressing <kbd>Enter</kbd>.

Access the list of bookmarks in the navigation area. Select the bookmark
you wish to access and press the <kbd>Enter</kbd> key. If you have
renamed the bookmark, it will be easy to go to several places in the book.

{{< alert info >}}
Advice

If you select a portion of text and then activate the `Bookmark` button, 
the bookmark created will have the selected line as its title.

If you have bookmarked a line without selecting a portion of text, try copying 
the line you are on in the clipboard.
Then go to the navigation options with <kbd>Ctrl</kbd> + <kbd>N</kbd>,
then scroll down to the Bookmark section, where they are listed.
Press the <kbd>b</kbd> key to move to the edit button to 
rename the bookmark. Paste the line from the clipboard and press
<kbd>Enter</kbd>. This renames the bookmark with the line of text that you have
copied. When you have several bookmarks, this renaming of the bookmarks allows 
you to use them easily.

<figure>
  <img src="/images/local-fr/thorium-marquePages.png" alt="">
  <figcaption class="icon">
  </figcaption>
</figure>

{{< /alert>}}

{{< details "Using bookmarks with NVDA">}}

Windows screen readers use a virtual buffer
for reading. To place a bookmark where you are currently reading
press the key combination <kbd>NVDA + Enter</kbd>, 
and NVDA will say *"activate "*. This
synchronizes the virtual buffer with the current real location so Thorium 
can deduce the object
on which the cursor is located. Then use
<kbd>Ctrl + B</kbd> to place a bookmark.
A sound notification will inform you of the number of bookmarks 
in the current publication.
{{< /details >}}
