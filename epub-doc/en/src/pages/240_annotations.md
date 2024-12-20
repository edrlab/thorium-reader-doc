---
title: Annotations
role: chapter
draft: false
---

# Annotations

*Annotations have been introduced first in Thorium 3, as a new feature,
it may present unexpected behaviors. Let us know any difficulty you face
by [opening an issue](https://github.com/edrlab/thorium-reader/issues/new) or [sending us an email](https://www.edrlab.org/contact/).*

The simplest way to add an annotation is to select a text and hit the
Annotations button
(<img src="../../resources/images/icons3/annotation-icon.svg" class="icon" role="presentation"/>) or stroke the keyboard shortcut <kbd>Shift</kbd> +
<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd>. This opens the Annotation pop up
and place the cursor into the input box where you can write your
annotation (optional). You can change highlight color and type (Solid
background, Underline, Strikethrough or Outline) then validate the
creation of the annotation with <span class="ui_button">Save</span>.

<img src="../../resources/images/local_en/th3_anotation_pop_up.png" class="icon" role="presentation"/>

Annotations in the content can not be reached by keyboard tabulation. To navigate between them, keyboard users need to open the Annotation Panel.


## Annotations panel {#annotations_panel}

The navigation panel has a section dedicated to Annotations. 
It allows you to adjust your annotation display and behaviour to your practice and also review, manipulate, delete, sort, filter and navigate thru your annotations.

## Options for annotations {#annotations_options}

Annotation options are available from the annotation panel toolbar.

Four options are available:

- Instant mode will open the Annotation pop up at each selection.
- Quick create Highlights the select text and create an empty annotation.
- Display in margins switches the text highlight for a more discret margin indication that an annotation is present at this line.
- Do not display just hides any annotation mark (but does not deactivate the possibility to add annotations).

The combination of Instant mode and Quick create options let you use the
serial annotator mode as any selection will create an highlight without
prompting any pop up.

## Sort and filter annotations {#annotations_sort_and_filter}

Sorting options and Filter options have each their dedicated button. Both modify the list of annotations viewed in the panel. 

Sorting can be done by Progression (from beginning to end of the book), Last created and Last modified. It only affect the presentation order.

Filtering will modify the list of displayed annotations, without removing them. If you are searching for an annotation that does not appear, it can be because a filter is active. A  number in a bubble will appear next to the Filters options icon for quick visualisation of if and how many filters are actives. It's a plain text number that will be announced by screen readers. 

Active tag filters are visually shown by a blue background and announced as active by screen readers.

All filters allow multiple selection and they act like checkbox, one clic activate the filter, one more clic deactivates it. 

Filtering options are:
* by Tag, if any tag as been affected to any annotation, it will appear here;
* by Color, Red, Orange, Yellow, Green, Blue-green, Light-blue, Cyan and Violet;
* by Drawtype, Outline, Solid background, Strikethrough	 or Underline;
* by Creator, if any has been informed in the <a href="../pages/102_windows_views_panels/index.xhtml#setting_view" >Application Settings Panel</a >, or imported with a set of annotations.

## Review and manipulation of annotations {#annotations_view_and_manipulation}

Annotations are shown as cards in the panel, one after the other. Each Card contains the text of the annotation, the creation date, the position in the book expressed in progression percentage and  an Edit and a Delete buttons. The text of the annotation acts as a button that will move the focus to the annotation itself, so leaving the context of the annotation panel, some tabulations will have to be done to get back to the annotation panel. 

A coloured border on the left visually indicates the Colour settled up for the annotation. This information is not passed to assistive technologies. 


## Export and Import of Annotations {#annotations_io}

A set of annotations can be exported or imported. 

The export button will open a dialog box asking for a title that will be used as to identify the annotation set when importing it. The save button will trigger a System File window to select the place where the user want to store this annotation file as well as the file name. Title will be used as default pre filled filename but can be changed without affecting file identification. 

Annotations are stored with the file extension .annotation and makes use of a JSON-LD format defined by the W3C recommandation [Web Annotation Data Model](https://www.w3.org/TR/annotation-model/). It contains ebook identifier and the Creator information informed in the <a href="../pages/102_windows_views_panels/index.xhtml#setting_view" >Application Settings Panel</a > as well as various selector types to allow import and correct positioning of annotations by different reading systems.

The import button opens so the user can select the file he wants to import. If book identifier is not similar to the open book where the import intent happens, an error message will shows and the annotations will not be imported. 

Once imported, annotations appears in the annotation panel and can be reviewed and manipulated as any annotation created. They inherit the original annotation file title as a tag. Those manipulations will not affect the original .annotation file which is never linked. 


