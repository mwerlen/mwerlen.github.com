---
layout: default
title: Blog
permalink: blog.html
blog: active
---
## Les derniers posts de blog
{% for post in site.posts %}
  <h3 class="blogpostpreview"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  {% include metadata.ext %}
  <div class="preview">
      {{ post.content | strip_html | truncatewords:75}}
      <div class="readmore">&raquo; <a href="{{ post.url }}">Lire la suite...</a></div>
  </div>
{% endfor %}