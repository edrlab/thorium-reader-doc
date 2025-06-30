---
title: Windows, views and panels
role: doc-chapter
epubtype: chapter
class: colbreak filet
draft: false
---


# Windows, views and panels {#windows_and_views}

Thorium reader has one main window and one additional window per open
book. The main window is always open and offers 4 views (<span class="ui_button">Home</span>, <span class="ui_button">All
books</span>, <span class="ui_button">Catalogs</span> and <span class="ui_button">Settings</span>) while book windows views will
depend on the book format (textual, audio, visual). Each format will
allow a selection of action panels that can be docked to one side of the
view.

<section class="filet">

## Main window {#main_window}

The main window is where you can access and organise your collections as
well as the settings that apply to the whole application. Closing the
main windows close the application and all reading windows opened.

</section>
<section class="filet">


### Home View {#home_view}

This view is for quick access. You find here the books you have been
reading recently and the ones you added recently. Possible actions are
to <span class="ui_button">Import Publication</span>, to *Open a publication* by activating the link on it's cover and to *Open Publication menu* using the three dots menu button <img src="../../resources/images/threedot.svg" class="icon"  alt="" role="presentation"/>. 


</section>
<section class="filet">


### <span class="ui_button">All publications</span> View {#all_publications_view}

This is the place where all your publications stands. With time it may
become full of hundreds of books so you need options to sort and search.
Because of that, this view is more complex. First buttons on this page
allows to select between two view modes, <span class="ui_button">Grid</span> and <span class="ui_button">Table</span> that will affect
the display of the ebooks list and offer different options to sort and
filter, they are detailed two paragraphes below.

The available actions on the <span class="ui_button">View</span> level are to *Import a Publication*, to
*Search*, to *Filter by tag* and *navigate by pages of your library*. Library
pages are like Shelves or stacks as the <span class="ui_button">All publication</span> view is limited
to 50 publications to keep it usable.

</section>
<section class="filet">

## Grid Mode {#grid_mode}

The <span class="ui_button">Grid</span> mode presents the books like cards, keyboard tabulation will
drive you from one book to another. This mode offers the possible
actions to Open a publication and to Open Publication menu.


</section>
<section class="filet">

## Table Mode {#table_mode}

The <span class="ui_button">Table</span> mode presents the books like cards, keyboard tabulation will mode presents one book per line and allows to visualize a
large number of informations usually available only in the Book
information Panel. Keyboard tabulation will drive you thru all those
details.


</section>
<section class="filet">


### Catalogs View {#catalog_view}

This is the place where you can store, access, browse online catalogs
and acquire or borrow ebooks from them. At first this place will sound
empty because we do not preload any catalog. The *online additional
support [Where to get ebooks?](https://thorium.edrlab.org/en/th3/get_ebooks/)* 
section can help you identify available catalogs if you do not already have one in mind.

Thorium allows you to load and consult [OPDS](https://opds.io/) catalogues, a standard format for displaying a catalogue on the Web.

Access to French public libraries can be activated from the application preferences (API Dilicom PNB).

Details and how to set up and use catalogs are available from the
[Catalogs actions section](../111_catalogs_actions/index.xhtml).


</section>
<section class="filet">


### Application Settings Panel {#setting_view}

Application settings is divided in three tabs:

1.  The <span class="ui_button">General</span> Tab allow you to:
    1. *select the language* of the interface, 
    2. *Access to publication catalogues*. The <span class="ui_button">clear login data</span> button will delete any Catalog authentification previously stored (useful if you are reading on a public or shared computer or if you want to change the account with wich you are connected).
    2. *Save session* (meaning that the application will remember the
    windows opened at closing and reopen them when launched again).
    4. *Add a library account* by activating access to Dilicom PNB API. A How does it works foldable gives more details about this functionality used to access French public libraries.
    5. <span class="ui_button">Creator</span> allows to *set up a Name to be added to annotations*. This Name can be categorised as Organization or Person. It will be exported with Annotations, so users must pay attention to potential privacy issues. Leaving this field blank will cause the annotations to be attributed to "Unknown1".

2.  The <span class="ui_button">Appearance</span> Tab let you choose the application Theme (dark, light
    or automatic to fit the system preference).
3.  The <span class="ui_button">Keyboard shortcuts</span> Tab help you check and manipulate keyboard
    driven actions within the application. Figure out the three dots
    menu aside of the Panel title with extra actions (<span class="ui_button">Reset</span>, <span class="ui_button">Edit</span> and
    <span class="ui_button">Load</span>). The <span class="ui_button">Edit</span> one opens system folder application to the
    localisation of the stored user setting `.json` file, allowing you to
    edit it outside of the application (at your own risks), save it for
    future uses or share it within your devices or with who you want.


</section>
<section class="filet">

## Reading window {#reading_window}

When a book is opened, it is displayed in a new window, meaning that you
can have multiple books opened at the same time, each in an independent
window that you can arrange at your will.


</section>
<section class="filet">


### Reading navigation panel {#reading_nav_panel}

Reachable from the reading window top toolbar thru a open book icon<img src="../../resources/images/open_book.svg" class="icon" alt="" role="presentation"/>, that panel contains a dropdown menu to access different navigation means. The availability and content of each navigation mean. For epub, those are:

* <img src="../../resources/images/toc-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Table of Content</span> (TOC), an authored listing of ebook content, usually similar to the content heading structure but not necessary. A content creator can decide per example to limit the Table of Content to a certain depth.
* <img src="../../resources/images/landmark-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Landmarks</span>, an authored list of major interest points of the ebook, usually Forewords, Copyright notice, Main content and annexes. 
* <img src="../../resources/images/target-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Go to page</span>, an authored list of page breaks. The page list may refers to a print version and allow to use the ebook in a mixed reading environment, so it becomes possible to locate or make a citation. In such case, Thorium Reader actually offers no mean to identify the related print book, it has to be textually and explicitly informed in the content by the content creator.  
* <img src="../../resources/images/search-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Search</span>, a generated list of search match(es) to help reader navigate between search results. This panel has content only when the search function is activated. 
* <img src="../../resources/images/bookmarkMultiple-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Bookmarks</span>, a generated list of user bookmarks. This panel  offer the possibility to delete the bookmark or edit it's attached text and informs in percents the reading progression where it stands.
* <img src="../../resources/images/annotation-icon.svg" class="icon" alt="" role="presentation"/><span class="ui_button"> Annotations</span>, a generated list of user annotations


</section>
<section class="filet">


### Reading settings panel {#reading_settings_panel}

Reachable from the reading window top toolbar, that panel contains all possible user settings to adjust the display of the textual contents. It is important to remember that such possibilities may be restricted by how the content was created. 

Detailed information about available reading settings per formats are available from the 
<a href="../210_reading/index.xhtml">Reading sub sections</a>.


</section>
<section class="filet">

## Book Information panel {#book_info_panel}

Book Information is available in a dedicated panel that can be reached
from the library shelves book action menu
 <span class="ui_button">About publication</span> or from the Reading window Information Icon
<img src="../../resources/images/info-icon.svg" alt="" role="presentation" class="icon"/>.

This Panel displays ebook information as provided by the file, the
trustness of this information relies on the creator of the file, usually
the publisher. The information displayed is:

* *Cover* of the publication with it's attached textual alternative if present
* *Title* of the publication
* *Author* of the publication
* *Description* or resume
* Publication details including *publication language*
* *Accessibility* information displayed following the international guidelines (for more information, see [W3C Display Guide for Accessibility metadata](https://w3c.github.io/publ-a11y/UX-Guide-Metadata/draft/principles/?updated)).
* *Tags*, including the possibility to
    <img src="../../resources/images/tag-icon.svg" class="icon" alt="" role="presentation"/> <span class="ui_button">Add</span> your own tags.
* Progression

This panel has the particularity of not being dockable as it does not provides action that needs to have access to the main content of the book.

</section>


