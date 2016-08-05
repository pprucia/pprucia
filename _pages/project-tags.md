---
layout: page
title: Project Tag Archive
description: "An archive of projects sorted by tag."
permalink: /project-tags.html
---

{% capture projects_tags %}
  {% for project in site.projects %}
    {% for tag in project.tags %}
      {{ tag }}{% unless forloop.last %},{% endunless %}
    {% endfor %}
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
{% endcapture %}
{% assign tags_list = projects_tags | split:',' | sort %}

<ul class="entry-meta">
  {% for item in (0..site.projects.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
  <li><a href="#{{ this_word }}" class="tag"><span class="term">{{ this_word }}</span> <span class="count">{{ site.projects.tags[this_word].size }}</span></a></li>
  {% endunless %}{% endfor %}
</ul>
{% for item in (0..site.projects.tags.size) %}{% unless forloop.last %}
{% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
   <h2 id="{{ this_word }}" class="tag-heading">{{ this_word }}</h2>
   <ul>
    {% for project in site.projecs.tags[this_word] %}{% if project.title != null %}
    <li class="entry-title"><a href="{{ site.url }}{{ project.url }}" title="{{ project.title }}">{{ project.title }}</a></li>
    {% endif %}{% endfor %}
  </ul>
{% endunless %}{% endfor %}
