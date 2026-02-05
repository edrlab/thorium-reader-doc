---
layout: page.njk
EPUBRoot: ".."
---

<h1>
<span class="covertitle">Thorium Reader for Desktop (3.4)</span>
<br/>
<span class="coversubtitle">Reading journeys</span>
</h1>


{% if pub.cover.src %}
![{{pub.cover.alt}}]({{EPUBRoot}}/{{pub.cover.src}})
{% endif %}