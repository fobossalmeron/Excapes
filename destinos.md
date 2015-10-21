---
layout: page
title: Destinos
permalink: destinos/
mainsponsor: sidebar-ad-reflekto.jpg
mainsponsorhorizontal: horizontal-ad-reflekto.jpg
mainsponsorlink: /patrocinadores/
secondarysponsor: sidebar-ad-mini-ojosdepapel.png
secondarysponsorhorizontal: horizontal-ad-mini-ojosdepapel.png
secondarysponsorlink: http://www.ojosdepapelvolando.com
---

{% for destination in site.destinations %}
 
<div class="destination">

	<div class="main_video">
		<iframe src="{{ destination.video }}" frameborder="0" allowfullscreen></iframe>
	</div>
    <h1>{{ destination.title }}</h1>

	<main class="destination_content"> 

		{% for image in destination.images %}
		<div class="remodal" data-remodal-id="modal{{ image.id }}" data-remodal-action="confirm">
			<button data-remodal-action="close" class="remodal-close"></button>
				<img src="{{ site.baseurl }}images/locaciones/{{ image.link }}">
		</div>
		{% endfor %}

		{{ destination.content }} 	

		{% if destination.images %}
			<ul class="destination_gallery">
				{% for image in destination.images %}
				<a data-remodal-target="modal{{ image.id }}">
					<li style="background-image: url({{ site.baseurl }}images/locaciones/{{ image.link }});"></li>
				</a>
				{% endfor %}
			</ul>
		{% endif %}
	</main>

	<aside class="destination_options">
		<h2>Promociones</h2>
		<ul class="promociones">
		    {% for deal in destination.deals %}
				<a href="{{ deal.link }}">
					<li class="deal" style="background-image: url({{ site.baseurl }}images/promociones/{{ deal.type }}.svg);">
						<span class="deal_info">{{ deal.info }}</span>
						{% if deal.hiddeninfo %}
						<span class="deal_hiddeninfo">{{ deal.hiddeninfo }}</span>
						{% endif %}
					</li>
				</a>
			{% endfor %}
		</ul>
		<h2>Retos</h2>
		<ul class="challenge_list">
		    {% for challenge in destination.challenges %}
				<li class="challenge challenge_mini {{ challenge.name }}" style="background-image: url({{ site.baseurl }}images/retos/{{ challenge.image }});">
						<!--<img class="challenge_img" src="{{ site.baseurl }}images/retos/{{ challenge.image }}">-->
						<span class="challenge_info">{{ challenge.name }}</span>
				</li>
			{% endfor %}
		</ul>
	</aside>

</div>
{% endfor %}