---
layout: page.njk
EPUBRoot: ".."
---

<h1>
<span class="covertitle">Thorium Reader pour le bureau (3.2)</span>
<span class="coversubtitle">Parcours de lecture</span>
</h1>


{% if pub.cover.src %}
![{{pub.cover.alt}}]({{EPUBRoot}}/{{pub.cover.src}})
{% endif %}