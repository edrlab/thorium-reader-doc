# Repository archived – documentation moved
This repository has now been archived. The official Thorium Reader documentation can now be found at:

https://support.thoriumreader.com/.

All user guides, accessibility information and technical documentation are now maintained and published on the new support site. This GitHub repository is retained for historical reference only and will not be updated.

## What changed?
- The main page now covers both Thorium Desktop and Mobile: https://thoriumreader.com/.
Support is now provided via https://support.thoriumreader.com/.
- Conformance is now available at: https://www.thoriumreader.com/en/legals/.

This provides a clearer separation between EDRLab’s research projects and Thorium Reader’s product documentation.

## What to do next:
Update your bookmarks and links to point to https://support.thoriumreader.com/.
If you previously linked to specific pages in this repository, please verify the equivalent page on the new site and update your references.

For issues, questions or contributions related to Thorium Reader, please use the channels listed on the support site or the main Thorium Reader repositories.

Thank you for using Thorium Reader and for helping to make digital reading more accessible for everyone.

---

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


