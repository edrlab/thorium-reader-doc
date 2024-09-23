---
title: Catalogs actions
role:
draft: false
---


::: section
# Catalogs actions {#Catalogs_actions}

## Setting up an OPDS catalog

Select the [Catalogs]{.ui_button} tab then the button [Add an OPDS
feed]{.ui_button}. Indicate a Name to designate this catalog and paste
an address corresponding to a catalog distributed in OPDS format.
Validate with the button [Add]{.ui_button}.

Example :

Activating the following link will download a .atom file that can be
opened with Thorium: [Download OPDS feed for Gutenberg.org new
titles](https://www.gutenberg.org/ebooks/search.opds/){target="_blank"}

It is also possible to use context menu (usually Right clic), Copy this
link and paste it into Thorium Add an OPDS panel to see the magic
happen.

OPDS feeds can also be provided as direct links which should open
directly in Thorium. [Open OPDS feed for Gutenberg.org new
titles](https://www.gutenberg.org/ebooks/search.opds/){target="_blank"}

Since Thorium 2.2, OPDS feeds can be edited so you can change the name
or retrieve feed URL.

![image](../../resources/images/local-fr/thorium-opds-add.png)

##### Example of OPDS feeds with LCP protected contents

Feeds with protected contents should allow you to login directly from
Thorium catalog page, the button or access to login might be different
depending on the feed provider.

Archive.org OPDS feed allows to browse and borrow books under LCP
license. An Archive org account is needed, authentication page will open
once you select a book. You can add it to Thorium with the following
address: [Open Archive.org OPDS feed](https://archive.org/services/opds)

You can use [feedbooks
OPDS](https://catalog.feedbooks.com/catalog/index.json) to browse
[Feedbook catalog](https://www.feedbooks.com/#). Once you have selected
a book you\'ll be redirected to the webpage where you can buy the book.

Feedbooks OPDS allows you to loggin from Thorium Catalog feed with the
*Shelf* button on the upper right corner. Anybook bought with your
Feedbooks account will be available for download directly from the
Thorium OPDS feed catalog interface.

For testing purposes EDRLab provides a feed with three free publications
under LCP protection. You can add it to Thorium with the following
address: [Add EDRLab OPDS public
feed](https://edrlab.org/public/feed/opds-lcp.json)

##### OPDS Feed responsibility

OPDS feeds and the access they provide to content are under
responsibility of the feed publisher. So are the information given by
the feed.

## Setting up a french public library account

In France, many public libraries provide a machine-readable catalog
(similar to OPDS but not identical), letting patrons download digital
publications from their personal bookshelf. Integrating this technology
in Thorium Reader allows you to download an ebook or audiobook directly
into Thorium Reader for instant reading.

To connect your French public library account, enter a French city
(\'Montpellier\') or part of the library name in the Search field and
hit the Search button. A list of public libraries corresponding to your
search will appear. Select a library and hit Add. In the updated list of
catalogs, select this library: an authentication form is displayed.
Enter your username/email address and password, and hit Login. You can
now see the content of your personal bookshelf, from which you can
download and read the ebooks and audiobooks you previously borrowed.
:::
