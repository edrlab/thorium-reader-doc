---
title: "Contribute!"
description: ""
draft: false
weight: 905
toc: false
---

Thorium and its documentation are developed thanks to the user community. 
We need help to translate this documentation. 

To do so, you can 
<a href="https://www.edrlab.org/contact/">contact us</a>.

If you are comfortable enough with GitHub and the Markdown format you can 
propose a new translation via a Pull Request. 

To do this: clone the repository and create a branch with the name of the language
you want to add, make a copy of the `content.en` folder and rename it with 
two letters corresponding to the language you want to add (for example 
`content.es` will contain the Spanish translation). The names of the files must
not be changed as they insure correspondence between languages.

The `i18n` folder contains the translations for the fixed elements 
of the header and footer. 
Several languages are already present, if your language is 
not present, copy paste the .yaml file and rename it with the first two letters of the 
letters of the language you want to add. 

Finally to activate the menu of the language you add, edit the file `config.toml`
and add the language with the following code: 

```
[languages.en]
  languageName = 'English'
  contentDir = 'content.en'
  weight = 1
```

You must replace `.en' with the first two letters of the language you are adding and 
fill in the name of the language 
as the `languageName` value. 
The `weight` indicates the order of appearance in the language menu. 

Example for Spanish : 

```
[languages.es]
  languageName = 'Español'
  contentDir = 'content.es'
  weight = 3
```

Localized images such as screenshots should be added to the 
folder `statics/images/local-(two letter language)`.
