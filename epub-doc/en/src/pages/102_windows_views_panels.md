---
title: Windows, views and panels
role: chapter
draft: false
---


# Windows, views and panels {#windows_and_views}

Thorium reader has one main window and one additional window per open
book. The main window is always open and offers 4 views (Home, All
books, Catalogs and General settings) while book windows views will
depend on the book format (textual, audio, visual). Each format will
allow a selection of action panels that can be docked to one side of the
view.


## Main window {#main_window}

The main window is where you can access and organise your collections as
well as the settings that apply to the whole application. Closing the
main windows clese the application and all reading windows opened.


### Home View {#home_view}

This view is for quick access. You find here the books you have been
reading recently and the ones you added recently. Possible actions are
to Import a Publication, to Open a publication and to Open Publication
menu. <img src="../../resources/images/local_en/th3_main_window_home.png" class="icon" alt="" role="presentation"/>



### All publications View {#all_publications_view}

This is the place where all your publications stands. With time it may
become full of hundreds of books so you need options to sort and search.
Because of that, this view is more complex. First buttons on this page
allows to select between two view modes, Grid and Table that will affect
the display of the ebooks list and offer different options to sort and
filter, they are detailed two paragraphes below.

The available actions on the View level are to Import a Publication, to
Search, to Filter by tag and navigate by pages of your library. Library
pages are like Shelves or stacks as the All publication view is limited
to 50 publications to keep it usable.


#### Grid Mode {#grid_mode}

The Grid mode presents the books like cards, keyboard tabulation will
drive you from one book to another. This mode offers the possible
actions to Open a publication and to Open Publication menu.



#### Table Mode {#table_mode}

The Table mode presents one book per line and allows to visualize a
large number of informations usually available only in the Book
information Panel. Keyboard tabulation will drive you thru all those
details.




### Catalogs View {#catalog_view}

This is the place where you can store, access, browse online catalogs
and acquire or borrow ebooks from them. At first this place will sound
empty because we do not preload any catalog. The *online additional
support [Where to get
ebooks?](https://thorium.edrlab.org/th3/get_ebooks/)* section can help
you identify available catalogs if you do not already have one in mind.

Two catalogs protocoles are available.

1.  [OPDS](https://opds.io/), a standard format to display catalog on
    the Web. Thorium can provide access to OPDS 1 and 2 catalogs.
2.  French public libraries machine-readable catalog (similar to OPDS
    but not identical).

Details and how to set up and use catalogs are available from the
[Catalogs actions section]().




### Application Settings Panel {#setting_view}

Application settings is divided in three tabs:

1.  The General Tab allow you to:
    1. select the language of the interface, 
    2. Manage stored authentification access to catalogues. The <span class="ui_button">clear login data</span> button will delete any Catalog authentification previously stored (useful if you are reading on a public or shared computer or if you want to change the account with
    wich you are connected).
    2. Save session (meaning that the application will remember the
    windows opened at closing and reopen them when launched again).
    4. Add a library account by activating access to Dilicom PNB API. A How does it works foldable gives more details about this functionality used to access French public libraries.
    5. Creator allows to set up a Name to be added to annotations. This Name can be categorised as Organization or Person. It will be exported with Annotations, so users must pay attention to potential privacy issues.

2.  The Appearance Tab let you choose the application Theme (dark, light
    or automatic to fit the system preference).
3.  The Keyboard shortcuts Tab help you check and manipulate keyboard
    driven actions within the application. Figure out the three dots
    menu aside of the Panel title with extra actions (Reset, Edit and
    Load). The Edit one opens system folder application to the
    localisation of the stored user setting .json file, allowing you to
    edit it outside of the application (at your own risks), save it for
    future uses or share it within your devices or with who you want.
   <img src="../../resources/images/local_en/th3_main_settings_keys_context.png" class="icon" alt="" role="presentation"/>




## Reading window {#reading_window}

When a book is opened, it is displayed in a new window, meaning that you
can have multiple books opened at the same time, each in an independent
window that you can arrange at your will.

### Reading navigation panel {#reading_nav_panel}

Reachable from the reading window top toolbar, that panel contains a dropdown menu to access different navigation means. The availability and content of each navigation mean. For epub, those are:
* **Table of Content** (TOC), an authored listing of ebook content, usually similar to the content heading structure but not necessary. A content creator can decide per example to limit the Table of Content to a certain depth.
* **Landmarks**, an authored list of major interest points of the ebook, usually Forewords, Copyright notice, Main content and annexes. 
* **Go to page**, an authored list of page breaks. The page list may refers to a print version and allow to use the ebook in a mixed reading environment, so it becomes possible to locate or make a citation. In such case, Thorium Reader actually offers no mean to identify the related print book, it has to be textually and explicitly informed in the content by the content creator.  
* **Search**, a generated list of search match(es) to help reader navigate between search results. This panel has content only when the search function is activated. 
* **Bookmarks**, a generated list of user bookmarks. This panel  offer the possibility to delete the bookmark or edit it's attached text and informs in percents the reading progression where it stands.
* **Annotations**, a generated list of user annotations

### Reading settings panel {#reading_settings_panel}

Reachable from the reading window top toolbar, that panel contains all possible user settings to adjust the display of the textual contents. It is important to remember that such possibilities may be restricted by how the content was created. 

Detailed information about available reading settings per formats are available from the 
<a href="../pages/210_reading/index.xhtml">Reading sub sections</a>:
<ul>
   <li>
      <a href="../pages/211_reading_textuals/index.xhtml">Reading textual contents</a>
    </li>
    <li>
      <a href="../pages/212_reading_visuals/index.xhtml">Reading visual contents</a>
    </li>
    <li>
      <a href="../pages/213_reading_auditory/index.xhtml">Reading audio contents</a>
    </li>
    <li>
      <a href="../pages/214_reading_pdfs/index.xhtml">Reading PDFs</a>
    </li>
</ul>

## Book Information panel {#book_info_panel}

Book Information is available in a dedicated panel that can be reached
from the library shelves book action menu
<img src="../../resources/images/icons3/info-icon.svg){.icon
role="presentation"} <span class="ui_button">About publication</span> or from the Reading
window Information Icon
<img src="../../resources/images/icons3/info-icon.svg){.icon
role="presentation"}.

This Panel displays ebook information as provided by the file, the
trustness of this information relies on the creator of the file, usually
the publisher. The information displayed is:

-   Cover of the publication with it\'s attached textual alternative if
    present
-   Title of the publication
-   Author of the publication
-   Description or resume
-   Publication details including publication language
-   Accessibility information displayed following the international
    guidelines (for more information, see [W3C Display Guide for
    Accessibility
    metadata](https://w3c.github.io/publ-a11y/UX-Guide-Metadata/draft/principles/?updated)).
-   Tags, including the possibility to
    <img src="../../resources/images/icons3/tag-icon.svg" class="icon" alt="" role="presentation"/> <span class="ui_button">Add</span> your own tags.
-   Progression

This panel has the particularity of not being dockable as it does not
provides action that needs to have access to the main content of the
book.



