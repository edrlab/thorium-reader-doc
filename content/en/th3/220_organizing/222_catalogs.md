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
  

{{< alert info >}}
When you are in the Thorium library, select the 
`Catalogs` tab then the button `+ Add an OPDS feed`. 
Indicate a Name to designate this catalog and paste an address corresponding to 
to a catalog distributed in OPDS format. Validate with the button `Add`.

Example : 

Activating the following link will download a .atom file that can be opened with Thorium:
<a href="https://www.gutenberg.org/ebooks/search.opds/" target="_blank">Download OPDS feed for Gutenberg.org new titles
</a>

It is also possible to use context menu (usually Right clic), Copy this link and paste it into Thorium Add an OPDS panel 
to see the magic happen.

OPDS feeds can also be provided as direct links which should open directly in Thorium. <a href="opds://www.gutenberg.org/ebooks/search.opds/" target="_blank">Open OPDS feed for Gutenberg.org new titles</a>

Since Thorium 2.2, OPDS feeds can be edited so you can change the name or retrieve feed URL.
{{< /alert>}}

<figure>
  <img src="/images/local-fr/thorium-opds-add.png" alt="">
  <figcaption class="icon">
  </figcaption>
</figure>

## Example of OPDS feeds with LCP protected contents

Feeds with protected contents should allow you to login directly from Thorium catalog page, the button or access to login might be different depending on the feed provider.

Archive.org OPDS feed allows to browse and borrow books under LCP license. An Archive org account is needed, authentication page will open once you select a book. You can add it to Thorium with the following address: <a href="opds://archive.org/services/opds">Open Archive.org OPDS feed<a>

You can use [feedbooks OPDS](https://catalog.feedbooks.com/catalog/index.json) to browse [Feedbook catalog](https://www.feedbooks.com/#). Once you have selected a book you'll be redirected to the webpage where you can buy the book. 

Feedbooks OPDS allows you to loggin from Thorium Catalog feed with the *Shelf* button on the upper right corner. Anybook bought with your Feedbooks account will be available for download directly from the Thorium OPDS feed catalog interface. 

For testing purposes EDRLab provides a feed with three free publications under LCP protection. You can add it to Thorium with the following address: <a href="opds://edrlab.org/public/feed/opds-lcp.json">Add EDRLab OPDS public feed</a>

## OPDS Feed responsibility

OPDS feeds and the access they provide to content are under responsibility of the feed publisher. So are the information given by the feed. 