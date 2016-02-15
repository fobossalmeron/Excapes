---
layout: page
title: Arma tu viaje
permalink: armatuviaje/
mainsponsor: sidebar-ad-reflekto.jpg
mainsponsorhorizontal: horizontal-ad-reflekto.jpg
mainsponsorlink: /patrocinadores/
secondarysponsor: sidebar-ad-mini-ojosdepapel.png
secondarysponsorhorizontal: horizontal-ad-mini-ojosdepapel.png
secondarysponsorlink: http://www.ojosdepapelvolando.com
---

<p style="float:left;">Échale un ojo a esta guía para que viajes por México como te dé la gana.</p>
{% for destination in site.destinations %}
 
<div class="destination">
	<h1>{{ destination.title }}</h1>
	<h2>{{ destination.subtitle }}</h2>
	<div class="main_video">
		<iframe src="{{ destination.video }}" frameborder="0" allowfullscreen></iframe>
	</div>

	<main class="destination_content"> 

		{% for image in destination.images %}
		<div class="remodal" data-remodal-id="modal{{ image.id }}" data-remodal-action="confirm">
			<button data-remodal-action="close" class="remodal-close"></button>
				<img src="{{ site.baseurl }}images/locaciones/{{ image.link }}">
		</div>
		{% endfor %}

		<h2 class="promociones_title">¡Ahórrate un varo!</h2>
		<ul class="challenge_list">
		    {% for deal in destination.deals %}
				<a href="{{ deal.link }}" class="coupon">
					<li class="challenge deal" style="background-image: url({{ site.baseurl }}images/promociones/{{ deal.type }}.svg);">
						<span class="deal_info">{{ deal.info }}</span>
						{% if deal.hiddeninfo %}
						<span class="deal_hiddeninfo">{{ deal.hiddeninfo }}</span>
						{% endif %}
					</li>
				</a>
			{% endfor %}
		</ul>
		<h2>¿Te avientas?</h2>
<ul class="retos">
	{% for challenge in destination.challenges %}
		<li class="locacion_clickable locacion_clickable{{ challenge.id }}" style="background-image: url({{ site.baseurl }}images/retos/{{ challenge.image }})">
			<img class="reto_icon" src="{{ site.baseurl }}images/retos/{{ challenge.icon }}">
		    <h1 class="challenge_title">{{ challenge.name }}</h1>
		    <ul class="locaciones locaciones{{ challenge.id }}">
		    	{% for location in challenge.locations %}
		    	<li>
		    		<h3 class="challenge_title">{{ location.place }}</h3>
			    		<a href="{{ location.link }}" target="_blank">{{ location.name }}</a>
			    		<p>{{ location.info }}</p>
		    	</li>
		    	{% endfor %}
		    </ul>
		</li>

		<script>
		  var querySelector = document.querySelector.bind(document);
		  var locAccordion{{ challenge.id }} = querySelector('.locaciones{{ challenge.id }}');
		  var locTrigger{{ challenge.id }} = querySelector('.locacion_clickable{{ challenge.id }}');
		  var locTriggerOther = querySelector('.locacion_clickable');

		  function closeAccordion(){
		    locTrigger{{ challenge.id }}.classList.remove('locaciones_open');
		  }

		  function toggleAccordion(){
		  	$('.locacion_clickable').not(this).removeClass('locaciones_open'); 
		    locTrigger{{ challenge.id }}.classList.toggle('locaciones_open');
		  }

		  locTrigger{{ challenge.id }}.addEventListener('click', toggleAccordion);
		</script>

	{% endfor %}
</ul>
		{% if destination.images %}
		<h2>Recuerdos</h2>
			<ul class="destination_gallery">
				{% for image in destination.images %}
				<a data-remodal-target="modal{{ image.id }}">
					<li style="background-image: url({{ site.baseurl }}images/locaciones/{{ image.link }});"></li>
				</a>
				{% endfor %}
			</ul>
		{% endif %}

	</main>

</div>
{% endfor %}