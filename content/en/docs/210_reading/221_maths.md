---
title: "Read mathematics"
description: ""
draft: false
weight: 221
toc: false
---
Since 2.3 Thorium Reader supports mathematical formulas in MathML natively thanks to Chromium. 
MathJax module is incorporated and may be of use for interoperability and accessibility needs. 

If you make use of the MathJax module you might be interested by [MathJax documentation](https://docs.mathjax.org/en/latest/). 

Previous versions rely on the MathJax module. This last one requires memory resources
so it is not automatically activated when you open Thorium.
To activate it when reading a book, go to the
menu `Reading settings`, at the bottom of the `Display` tab you will find
a checkbox `MathJax`.

<img src="/images/local-fr/thorium-mathjax.png" alt="Screenshot of a complex mathematical formula correctly displayed with the MathJax option checked."/>

Once MathJax is activated, you can use the `contextual menu` (right click)
on a mathematical formula inserted in MathML format and use the many
options proposed such as reading aloud (speech), viewing the semantic marking
or copy the formula with its semantic attributes to use it in a
compatible editor.

<img src="/images/local-fr/thorium-mathjax-menu.png" alt="Screenshot of the MathJax context menu showing the Accessibility sub-menu with the Activate option checked."/>

{{< details "Read  **mathematics** with NVDA">}}
You can read mathematical expressions tagged with MathML using
different NVDA approaches. Although NVDA is already equipped with this feature by applying Math Player, some functions still needed to be improved, especially in Math Player some language support is not provided. You may want to use an addon like [MathCAT](https://addons.nvda-project.org/addons/MathCAT.en.html) or [Access8Math](https://addons.nvda-project.org/addons/access8math.fr.html).

In case of instabilities, we recommend to disable MathJax accessibility features thru context menu.

Using Access8Math:

To install the add-on, navigate to Access8Math webpage and click on “Stable” link to download the add-on.

When reading a EPUB with Math content, Down Arrow to the line containing the equation and place your focus on the equation.
Press Enter to activate "Access8Math.
This will open a small window containing interaction window" which contains "interactive" and "copy" buttons.

Interaction: This will allow Interaction within the math content. In order to navigate and browse, you can use the Down Arrow to partially explore the subparts in the expression and move or zoom the content between the subparts by using Right and Left Arrows.

Copy: Use the Copy mode to Copy MathML object source code.

Navigation mode commands:

* <kbd>Down Arrow</kbd>: Zoom in on a smaller subpart of the math content.
* <kbd>Up Arrow</kbd>: Zoom out to a larger sub-part of the math content.
* <kbd>Left Arrow</kbd>: Move to the previous math content.
* <kbd>Right Arrow</kbd>: Move to the next math content.
* <kbd>Home</kbd>: Move back to the top of the Entire math content.
* <kbd>Ctrl</kbd> + <kbd>c</kbd>: Copy object MathML source code
* <kbd>Numpad 1 to 9</kbd>: Reading the math content into serialized text using NVDA Review Text.
* <kbd>Escape</kbd>: Exit the navigation mode.
* <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>m</kbd>: Switch the provider between Access8Math and Math Player.

{{< /details >}}

{{< alert danger >}}
Attention !
These features can only be activated if the book has been designed by
inserting mathematical formulas in the MathML format. For reasons of
ease of production the mathematical formulas are often included as  
images and it is then the alternative text that must allow the
understanding of the formula via a precise description.

Books that include mathematics in MathML form should
indicate this in their accessibility information.
If this is not indicated, then they are certainly described images.

{{< /alert>}}
