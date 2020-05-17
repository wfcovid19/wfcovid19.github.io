<ul class="signposting-menu">
{% for p in site.signposting %}
  <li class="{% if p.url == page.url %}active{% endif %}"><a href="{{ p.url }}">{{ p.name }}</a></li>
{% endfor %}
</ul>
