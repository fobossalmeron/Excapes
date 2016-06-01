---
layout: page
title: Retos
permalink: retos/
mainsponsor: sidebar-ad-reflekto.jpg
mainsponsorhorizontal: horizontal-ad-reflekto.jpg
mainsponsorlink: /patrocinadores/
secondarysponsor: sidebar-ad-mini-ojosdepapel.png
secondarysponsorhorizontal: horizontal-ad-mini-ojosdepapel.png
secondarysponsorlink: http://www.ojosdepapelvolando.com
---
<ul class="retos">
	{% for challenge in site.challenges %}
		<li class="locacion_clickable locacion_clickable{{ challenge.id }}" style="background-image: url({{ site.baseurl }}images/retos/{{ challenge.image }})">
			<img class="reto_icon" src="{{ site.baseurl }}images/retos/{{ challenge.icon }}">
		    <h1 class="challenge_title">{{ challenge.title }}</h1>
		    <ul class="locaciones locaciones{{ challenge.id }}">
		    	{% for location in challenge.locations %}
		    	<li>
		    		<h3 class="challenge_title">{{ location.place }}</h3>
		    		{% for contact in location.contacts %}
			    		<a href="{{ contact.link }}" target="_blank">{{ contact.name }}</a>
			    		<p>{{ contact.info }}</p>
		    		{% endfor %}
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
