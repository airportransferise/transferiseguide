---
layout: layout.njk
title: Airport Transfer Travel Guide
description: Professional airport transfer guides, routes and booking information for major destinations.
---

<section class="hero">
  <h1>Airport Transfer Travel Guide</h1>
  <p class="hero-text">
    Independent guides for private airport transfers, popular routes and travel planning.
  </p>
</section>

<section>
  <h2>City Airport Transfer Guides</h2>
  <p>
    Choose your destination city to explore airport transfer routes by district and area.
  </p>

  <div class="city-grid">
    {% for city in cities %}
      <div class="city-card">
        <h3>{{ city.cityName }}</h3>
        <p>
          Airport transfer routes, travel tips and booking information for {{ city.cityName }}.
        </p>
        <a class="btn" href="{{ '/' | url }}{{ city.citySlug }}/">
          View {{ city.cityName }} guide →
        </a>
      </div>
    {% endfor %}
  </div>
</section>

<section>
  <h2>From the Blog</h2>
  <p>
    Travel advice and airport transfer tips written for real travelers.
  </p>

  <ul class="blog-list">
    {% for post in collections.blog | reverse | slice(0,3) %}
      <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
      </li>
    {% endfor %}
  </ul>
</section>
