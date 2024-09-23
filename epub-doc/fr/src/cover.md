---
layout: page.njk
EPUBRoot: ".."
---

# {{metadata.dc.title}}

{% if pub.cover.src %} ![{{pub.cover.alt}}](%7B%7BEPUBRoot%7D%7D/%7B%7Bpub.cover.src%7D%7D)
