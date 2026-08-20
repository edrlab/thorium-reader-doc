---
title: "Translating"
description: ""
draft: false
weight: 802
toc: false
---
Thorium Reader user Interface localisation are provided and maintained thanks to volunteers and contributing organisations. 

Since february 2025 we use [Weblate project Thorium](https://hosted.weblate.org/projects/thorium-reader/) as the main tool for localisation. For help, you can refer to the [Weblate Documentation](https://docs.weblate.org/en/latest/index.html). 

Alternatively, translations can be done directly through Github Pull request. This may be easier if you are familiar with local translation editors like [poedit](https://poedit.net/) that allows a less noisy translating environment and are documented to be used with screen readers. 
All locales are stored in the [sources resources locales folder](https://github.com/edrlab/thorium-reader/tree/develop/src/resources/locales). 
    
For issues related to localisation, flag @gautierchomel in the comments.

## Plural forms

Thorium Reader now supports proper plural forms in all languages using i18next’s built‑in pluralization rules, which slightly changes how some translation keys must be written.[1]

### What changed technically

- The i18n code now uses the special placeholder **`count`** whenever a message can vary depending on a number (for example, “1 match” vs “5 matches”).
- i18next treats `count` as a reserved variable and will automatically pick the correct plural form based on the target language’s rules.

### Impact on translation keys

- Keys that depend on a number must offer plural variants such as `key_one`, `key_other`, and possibly additional forms (`key_few`, `key_many`, etc.), depending on the language.
- English and Lithuanian JSON files in the PR have been updated as examples: they now use plural suffixes instead of generic “match(es)”‑type workarounds.[

## How to translate pluralized strings

- When you see a key with a `count` variable and plural suffixes, translate each plural form separately, matching natural usage in your language (e.g. singular, dual, paucal, etc.).
- To know which plural forms your language needs and which suffixes i18next expects (e.g. `_one`, `_few`, `_many`), you can use the JSFiddle linked in the PR description.


## Contributors:
We maintain a list of contributors to properly credit theyre work, and also to help us who to mention in calls for translation. The list is non exhaustive, and we'll delete mentions on requests. 

* (en) English, by EDRLab
* (fr) Français (French), by EDRLab
* (fi) Suomi (Finish), by @terhol-celia, @MiiaKirsi, @KirsiYl
* (de) Deutsch (German), by @tofi86
* (es) Español (Spanish), by @nvdaes
* (nl) Nederlands (Dutch), by @tedvandertog
* (ja) 日本語 (Japanese), by @peaceroad, @t-kudou, @GMaruichi, @mayuhamada
* (ka) ქართული (Georgian), @georgegach
* (lt) Lietuvių (Lithuanian), by @naglis
* (pt-BR) Português Brasileiro (Portuguese - Brazil), by @https://github.com/milliet
* (pt-PT) Português (Portuguese - Portugal), by @horus68
* (zh-CN) 中文 - 中國/国 (Chinese simp.), by @maitreya2019 and @cary-rowen 
* (zh-TW) 中文 - 台湾/灣 (Chinese trad.), by @ThanatosDi
* (it) Italiano (Italian) by @jacoporinaldi and @gregoriopellegrino
* (ru) Русский (Russian), by @Modeo147
* (ko) 한국어 (Korean) by email contribution
* (sv) Svenska (Swedish), by @martinpub and @jonaslil
* (ca) Catalan, by Libranda and @Adecabo9
* (gl) Galician, by Libranda
* (eu) Euskadi (Basque), by Libranda and @sukiletxe
* (el) ελληνικός (Greek), by @izorba
* (bg) български (Bulgarian), by @openm1nd
* (hr) Hrvatski (Croatian), by @Celeruk
* (da) Dansk (Danish), by @ddfreiling and @MyGulstad
* (sl) Slovenščina (Slovene), by @xFizox on behalf of Beletrina
* (tr) Turkish (Türkçe), initiated by catdotjs, maintained by @oguzugur28
* (ar) Arabic (عربي), by @salah1974
