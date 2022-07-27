---
title: "Read mathematics"
description: ""
draft: false
weight: 221
toc: false
---
Thorium-Reader supports mathematical formulas in MathML 
format thanks to the MathJax module. This last one requires memory resources 
so it is not automatically activated when you open Thorium. 
To activate it when reading a book, go to the 
menu `Reading settings`, at the bottom of the `Display` tab you will find 
a checkbox `MathJax`.

<img src="/thorium-reader-doc/images/local-fr/thorium-mathjax.png" alt="Screenshot of a complex mathematical formula correctly displayed with the MathJax option checked."/>

Once MathJax is activated, you can use the `contextual menu` (right click) 
on a mathematical formula inserted in MathML format and use the many 
options proposed such as reading aloud (speech), viewing the semantic marking 
or copy the formula with its semantic attributes to use it in a 
compatible editor.

<img src="/thorium-reader-doc/images/local-fr/thorium-mathjax-menu.png" alt="Screenshot of the MathJax context menu showing the Accessibility sub-menu with the Activate option checked."/>


{{< details "Read  **mathematics** with NVDA">}}
You can read mathematical expressions tagged with MathML using 
different NVDA approaches, for example using the complement 
[Access8Math](https://addons.nvda-project.org/addons/access8math.fr.html). 
The accessibility features of MathJax will have to be disabled for this. 
{{< /details >}}

{{< hint danger >}}
Attention ! 
These features can only be activated if the book has been designed by 
inserting mathematical formulas in the MathML format. For reasons of 
ease of production the mathematical formulas are often included as  
images and it is then the alternative text that must allow the 
understanding of the formula via a precise description. 

Books that include mathematics in MathML form should 
indicate this in their accessibility information. 
If this is not indicated, then they are certainly described images.

{{< /hint >}}