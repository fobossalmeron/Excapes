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
    {% if destination.deals %}
		<h2 class="promociones_title">¡Ahórrate un varo!</h2>
  	<ul class="challenge_list">
		  {% for deal in destination.deals %}
      <!--{% increment deal_id %}-->
					<li class="challenge deal locacion_clickable deal_clickable{{deal_id}}">

            {% if deal.type == "plane" %}
            <img class="deal_icon" src="{{ site.baseurl }}images/promociones/plane.svg">
            <span class="deal_info">Vuelos</span>
            {% endif %}
            {% if deal.type == "hotel" %}
            <img class="deal_icon" src="{{ site.baseurl }}images/promociones/hotel.svg">
            <span class="deal_info">Hoteles</span>
            {% endif %}
            {% if deal.type == "bus" %}
            <img class="deal_icon" src="{{ site.baseurl }}images/promociones/bus.svg">
            <span class="deal_info">Autobuses</span>
            {% endif %}

            <ul class="deal_hiddeninfo deals{{ deal_id }}">
  						{% for location in deal.locations %}
  						<li>
                <h3>{{location.place}}</h3>
                <a href="{{location.link}}">{{location.name}}</a>
                <p>{{location.info}}</p>
              </li>
              {% endfor %}
            </ul>
					</li>

          <script>
            var querySelector = document.querySelector.bind(document);
            var locAccordiond{{ deal_id }} = querySelector('.deals{{ deal_id }}');
            var locTriggerd{{ deal_id }} = querySelector('.deal_clickable{{ deal_id }}');
            var locTriggerOther = querySelector('.locacion_clickable');
            function closeAccordion(){
              locTriggerd{{ deal_id }}.classList.remove('locaciones_open');
            }
            function toggleAccordion(){
              $('.locacion_clickable').not(this).removeClass('locaciones_open');
              locTriggerd{{ deal_id }}.classList.toggle('locaciones_open');
            }
            locTriggerd{{ deal_id }}.addEventListener('click', toggleAccordion);
          </script>
			{% endfor %}
		</ul>
    {% endif %}

		{% if destination.challenges %}
		<h2>¿Te avientas?</h2>
    <ul class="retos">
	    {% for challenge in destination.challenges %}
		  <!--{% increment challenge_id %}-->
	  	<li class="locacion_clickable locacion_clickable{{challenge_id}}">
			 <div class="reto_image" style="background-image: url({{ site.baseurl }}images/retos/{{ challenge.name }}.jpg)"></div>
		  	<img class="reto_icon" src="{{ site.baseurl }}images/retos/{{ challenge.name }}.svg">
		    <h1 class="challenge_title">{{challenge.name}}</h1>
		    <ul class="locaciones locaciones{{ challenge_id }}">
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
  		  var locAccordion{{ challenge_id }} = querySelector('.locaciones{{ challenge_id }}');
  		  var locTrigger{{ challenge_id }} = querySelector('.locacion_clickable{{ challenge_id }}');
  		  var locTriggerOther = querySelector('.locacion_clickable');
  		  function closeAccordion(){
  		    locTrigger{{ challenge_id }}.classList.remove('locaciones_open');
  		  }
  		  function toggleAccordion(){
  		  	$('.locacion_clickable').not(this).removeClass('locaciones_open');
  		    locTrigger{{ challenge_id }}.classList.toggle('locaciones_open');
  		  }
  		  locTrigger{{ challenge_id }}.addEventListener('click', toggleAccordion);
  		</script>
	    {% endfor %}
    </ul>
    {% endif %}

		{% if destination.hotspots %}
		<h2>Tienes que visitar estos lugares!</h2>
			<ul class="retos hotspots">
				{% for hotspot in destination.hotspots %}
				<!--{% increment hotspot_id %}-->
            <li class="locacion_clickable hotspot_clickable{{hotspot_id}}">
              <div class="reto_image" style="background-image: url({{ site.baseurl }}images/locaciones/{{ hotspot.image }})"></div>
              <img class="reto_icon" src="{{ site.baseurl }}images/locaciones/locacion.svg">
              <h1 class="challenge_title">{{ hotspot.name }}</h1>
              <ul class="locaciones hotspots{{ hotspot_id }}">
                <li>
                  <a href="{{hotspot.link}}" target="_blank">{{hotspot.linktext}}</a>
                </li>
              </ul>
            </li>

            <script>
        		  var querySelector = document.querySelector.bind(document);
        		  var locAccordion_h{{ hotspot_id }} = querySelector('.hotspots{{ hotspot_id }}');
        		  var locTrigger_h{{ hotspot_id }} = querySelector('.hotspot_clickable{{ hotspot_id }}');
        		  var locTriggerOther = querySelector('.locacion_clickable');
        		  function closeAccordion(){
        		    locTrigger_h{{ hotspot_id }}.classList.remove('locaciones_open');
        		  }
        		  function toggleAccordion(){
        		  	$('.locacion_clickable').not(this).removeClass('locaciones_open');
        		    locTrigger_h{{ hotspot_id }}.classList.toggle('locaciones_open');
        		  }
        		  locTrigger_h{{ hotspot_id }}.addEventListener('click', toggleAccordion);
        		</script>

				{% endfor %}
			</ul>
		{% endif %}

	</main>

</div>
{% endfor %}
