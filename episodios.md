---
layout: page
title: Episodios
permalink: episodios/
mainsponsor: sidebar-ad-diablo.png
mainsponsorhorizontal: horizontal-ad-diablo.png
mainsponsorlink: https://www.facebook.com/diablofashion/
secondarysponsor: sidebar-ad-mini-semiosfera.png
secondarysponsorhorizontal: horizontal-ad-mini-semiosfera.png
secondarysponsorlink: /patrocinadores/
---
 
{% for episode in site.episodes reversed %}
<div class="episodio">
	<div class="main_video">
		<iframe src="{{ episode.video }}" frameborder="0" allowfullscreen></iframe>
	</div>
    <h1>{{ episode.title }}</h1>
	{{ episode.content }}
    {% for capsule in episode.capsules %}
      {% if capsule.image %} 
			<div class="remodal" data-remodal-id="modal{{ capsule.id }}" data-remodal-action="confirm">
				<button data-remodal-action="close" class="remodal-close"></button>
				<img src="{{ site.baseurl }}images/locaciones/{{ capsule.image }}">
			</div>
	  {% endif %}
	{% endfor %}
	<ul class="capsulas">
    	{% for capsule in episode.capsules %}
		<li>
			{% if capsule.video %}
			<div class="cap_episode">
				<iframe src="{{ capsule.video }}" frameborder="0" allowfullscreen></iframe>
			</div>
			{% endif %}
			{% if capsule.image %}  
			<a data-remodal-target="modal{{ capsule.id }}">
				<div class="cap_episode" style="background-image: url({{ site.baseurl }}images/episodios/{{ capsule.image }})">
					<!--	<img src="{{ site.baseurl }}images/episodios/{{ capsule.image }}">-->
				</div>
			</a>
			{% endif %}
			<h2>{{ capsule.title }}</h2>
		</li>
		{% endfor %}
	</ul>
</div>
{% endfor %}