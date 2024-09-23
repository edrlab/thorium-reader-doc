# Landing page, support and Documentation for Thorium Reader 

This is the repo for Thorium Reader documentation. 

There are two parts:
* a landing page with support section for quick reference guides and regularly updated FAQ. We also maintain an access to legacy Thorium 2 documentation for an undetermined period. It is build with [Hugo](https://gohugo.io/) and a derivated design from the [Docsy Theme](github.com/google/docsy). Generation happens when merging anything to the main branch thanks to github action. 

* a epub documentation build from markdown files with [11ty](https://www.11ty.dev/) 
[eleventypub](https://github.com/marisademeglio/eleventypub). Generation is not automatised and performed localy from the epub-doc branch. Only content folders are merged in the main branch to enable easy localisation.

# Localisation workflow

Landing page and web contents are stored in the Content folder

EPUB documentation contents are stored in the epub-doc folder

In each, there is a sub folder per language (two letters code). 

For both, localisation can be:
* performed via [GitLocalize GUI](https://gitlocalize.com/repo/9230), or
* perfomed directly by pushing to a dedicated branch and opening a pull request.


