---
layout: page.njk
EPUBRoot: ".."
---

<h1>
<span class="covertitle">Thorium Reader for Desktop<br/>User Guide (3.4)</span>
<br/>
<span class="coversubtitle">Your complete reading companion</span>
</h1>

{% if pub.cover.src %}
![{{pub.cover.alt}}]({{EPUBRoot}}/{{pub.cover.src}})
{% endif %}