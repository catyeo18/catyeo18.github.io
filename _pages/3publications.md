---
layout: page
permalink: /publications/
title: publications
description: Publications by categories in reversed chronological order. * denotes alphabetical ordering.
years: [2020, 2017]
---

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
