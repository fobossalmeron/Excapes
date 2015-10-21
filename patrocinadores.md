---
layout: post
title: Patrocinadores
permalink: patrocinadores/
--- 
<ul class="sponsorlist">
		{% for sponsor in site.sponsors %}
		<li>
			{% if sponsor.link %}
				<a href="{{sponsor.link}}">
			{% endif %}
			<div class="sponsorlogo_side">
				<img src="{{ site.baseurl }}images/patrocinadores/sponsorpage/{{sponsor.logo}}">
			</div>
			<div class="sponsortext_side">
			<h2>{{ sponsor.name }}</h2>
			<p>{{ sponsor.text }}</p>
			</div>
			<div class="fullbanner">
				{% if sponsor.banner %}
				<img src="{{ site.baseurl }}images/patrocinadores/sponsorpage/{{ sponsor.banner }}">
				{% else %}
				<img src="{{ site.baseurl }}images/patrocinadores/sponsorpage/freebanner.svg">
				{% endif %}
			</div>
			{% if sponsor.link %}
				</a>
			{% endif %}
		</li>
		{% endfor %}
</ul>