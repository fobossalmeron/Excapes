---
layout: page
title: Serie
permalink: serie/
mainsponsor: sidebar-ad-diablo.png
mainsponsorhorizontal: horizontal-ad-diablo.png
mainsponsorlink: https://www.facebook.com/diablofashion/
secondarysponsor: sidebar-ad-mini-semiosfera.png
secondarysponsorhorizontal: horizontal-ad-mini-semiosfera.png
secondarysponsorlink: /patrocinadores/
---

{% for episode in site.episodes %}
<div class="episodio">
  <h1 class="inversed_name">{{ episode.title }}</h1>
	<div class="main_video">
    <iframe src="{{ episode.video }}&amp;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
	</div>
	{{ episode.content }}
    {% for capsule in episode.capsules %}
      {% if capsule.image %}
      		<!--{% increment capsule_id %}-->
			<div class="remodal" data-remodal-id="modal{{ capsule_id }}" data-remodal-action="confirm">
				<button data-remodal-action="close" class="remodal-close"></button>
				<img src="{{ site.baseurl }}images/episodios/{{ capsule.image }}">
			</div>
	  {% endif %}
	{% endfor %}
	<ul class="capsulas">
    	{% for capsule in episode.capsules %}
		<li>
			{% if capsule.video %}
			<div class="cap_episode">
        <iframe src="{{ capsule.video }}?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
			</div>
			{% endif %}
			{% if capsule.image %}
			<a data-remodal-target="modal{{ capsule_id }}">
				<div class="cap_episode" style="background-image: url({{ site.baseurl }}images/episodios/{{ capsule.image }})">
				</div>
			</a>
			{% endif %}
			<h2>{{ capsule.title }}</h2>
		</li>
		{% endfor %}
    <h2 class="calltoaction lesser"><a href="{{ site.baseurl }}jalate/">Sé el próximo aventurero, jálate!</a></h2>
	</ul>
</div>
{% endfor %}
