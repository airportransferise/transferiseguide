---
layout: layout.njk
title: Airport Transfer Travel Guide
description: Airport transfer routes, city guides and travel blog.
---

<h1>Airport Transfer Travel Guide</h1>

<p>
Independent travel guide covering private airport transfers, routes and booking tips.
</p>

<h2>City Guides</h2>
<ul>
{% for city in cities %}
  <li>
    <a href="/{{ city.citySlug }}/">
      {{ city.cityName }} Airport Transfer Guide
    </a>
  </li>
{% endfor %}
</ul>

<h2>Latest Blog Articles</h2>
<ul>
{% for post in collections.blog | reverse | slice(0,5) %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
