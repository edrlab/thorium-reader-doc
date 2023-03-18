---
title: "Access to catalogs"
description: ""
draft: false
weight: 222
toc: false
---

<p>Many public libraries and bookstores are adopting 
<a href="https://opds.io/">OPDS</a> as a standard format to display their 
catalog on the Web. Thorium can provide access to OPDS 1 and 2 catalogs. 
It also supports several identification formats associated with OPDS 
and can therefore provide users with access to their personal library,  
i.e. the digital books that the user has acquired or 
borrowed, allowing them to be downloaded and read immediately.
  </p>
  {{< columns >}}

{{< alert info >}}
When you are in the Thorium library, select the 
`Catalogs` tab then the button `+ Add an OPDS feed`. 
Indicate a Name to designate this catalog and paste an address corresponding to 
to a catalog distributed in OPDS format. Validate with the button `Add`.

Exemple : <p>
<a href="http://gallica.bnf.fr/opds" target="_blank">
Right clic Copy this link and paste it into Thorium Add an OPDS panel 
to see the magic happen.</a>
</p>

{{< /alert>}}

<figure>
  <img src="/images/local-fr/thorium-opds-add.png" alt="">
  <figcaption class="icon">
  </figcaption>
</figure>

<--->
<!--TODO: find a localized exemple-->
## An exemple : Gallica (French)
<p>Gallica proposes
<a href="http://gallica.bnf.fr/opds" target="_blank">an OPDS catalog (in french)</a>
to browse, download and read all the books in Gallica. 
<a href="http://gallica.bnf.fr/ebooks" target="_blank">available in EPUB format</a>.</p>

<p>The following links provide 
<a href="http://gallica.bnf.fr/blog/27042017/retrouvez-tous-nos-livres-au-format-epub-dans-votre-application-de-lecture-favorite">
more information on the OPDS catalog of Gallica (in French)</a> and 
<a href="https://gallica.bnf.fr/edit/und/a-propos">about Gallica.</a></p> 
<figure>
  <img src="/images/local-fr/thorium-opds-gallica-1.png" alt="">
  <figcaption class="icon">
  </figcaption>
</figure>

## Example of an OPDS feed with LCP protected contents
<p>For testing purposes EDRLab provides a feed with three free publications under LCP protection. You can add it to Thorium with the following address : <a href="opds://edrlab.org/public/feed/opds-lcp.json">Add EDRLab OPDS public feed</a></p>


## Example of an OPDS feed with copyrighted books

You can use [feedbooks OPDS](https://www.feedbooks.com/catalog) to browse [Feedbook catalog](https://www.feedbooks.com/#). Once you have selected a book you'll be redirected to the webpage where you can buy the book. 

Feedbooks OPDS allows you to loggin from Thorium Catalog feed with the *Shelf* button on the upper right corner. Anybook bought with your Feedbooks account will be available for download directly from the Thorium OPDS feed catalog interface. 

{{< /columns >}}
